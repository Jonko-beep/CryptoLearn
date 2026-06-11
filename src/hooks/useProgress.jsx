import { createContext, useCallback, useContext, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import {
  FULL_LESSON_ORDER,
  ORDERED_LESSONS,
  TOTAL_FULL_LESSONS,
  getLesson,
} from '../content'

/**
 * PROGRESS — learner state, persisted to localStorage, shared via context.
 *
 * Persisted shape:
 *   {
 *     lessons: { [lessonId]: { completed: bool, bestScore: number } },
 *     lastLessonId: string | null,   // for "continue where you left off"
 *   }
 *
 * The unlock rule is sequential: a full lesson is unlocked when the full lesson
 * immediately before it (in course order) is completed. Stubs are never
 * completable and are skipped by the unlock walk.
 */

const STORAGE_KEY = 'cryptolearn.progress.v1'
const EMPTY = { lessons: {}, lastLessonId: null }

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useLocalStorage(STORAGE_KEY, EMPTY)

  // Mark a lesson visited so the dashboard can resume it.
  const visitLesson = useCallback(
    (id) => {
      if (getLesson(id)?.stub) return
      setProgress((p) => ({ ...p, lastLessonId: id }))
    },
    [setProgress],
  )

  // Record a quiz attempt; completion is granted when the score clears the
  // lesson's passThreshold. We keep the best score seen.
  const recordQuiz = useCallback(
    (id, score) => {
      const lesson = getLesson(id)
      const threshold = lesson?.quiz?.passThreshold ?? 0.7
      setProgress((p) => {
        const prev = p.lessons[id] || {}
        const passed = score >= threshold
        return {
          ...p,
          lastLessonId: id,
          lessons: {
            ...p.lessons,
            [id]: {
              completed: prev.completed || passed,
              bestScore: Math.max(prev.bestScore ?? 0, score),
            },
          },
        }
      })
    },
    [setProgress],
  )

  const resetProgress = useCallback(() => setProgress(EMPTY), [setProgress])

  const value = useMemo(() => {
    const isCompleted = (id) => !!progress.lessons[id]?.completed
    const bestScore = (id) => progress.lessons[id]?.bestScore ?? null

    /** 'stub' | 'completed' | 'unlocked' | 'locked' */
    const statusOf = (id) => {
      const lesson = getLesson(id)
      if (!lesson || lesson.stub) return 'stub'
      if (isCompleted(id)) return 'completed'
      const i = FULL_LESSON_ORDER.indexOf(id)
      if (i <= 0) return 'unlocked' // first full lesson is always open
      return isCompleted(FULL_LESSON_ORDER[i - 1]) ? 'unlocked' : 'locked'
    }

    const completedCount = FULL_LESSON_ORDER.filter(isCompleted).length
    const overallPercent = TOTAL_FULL_LESSONS
      ? Math.round((completedCount / TOTAL_FULL_LESSONS) * 100)
      : 0

    // Per-module completion (full lessons only).
    const moduleProgress = (moduleId) => {
      const inModule = ORDERED_LESSONS.filter(
        (l) => l.moduleId === moduleId && !l.stub,
      )
      const done = inModule.filter((l) => isCompleted(l.id)).length
      return {
        completed: done,
        total: inModule.length,
        percent: inModule.length ? Math.round((done / inModule.length) * 100) : 0,
      }
    }

    // "Continue" target: last visited if not finished, else first incomplete.
    const continueLessonId =
      (progress.lastLessonId && !isCompleted(progress.lastLessonId)
        ? progress.lastLessonId
        : null) ||
      FULL_LESSON_ORDER.find((id) => !isCompleted(id)) ||
      FULL_LESSON_ORDER[0]

    return {
      isCompleted,
      bestScore,
      statusOf,
      completedCount,
      overallPercent,
      moduleProgress,
      continueLessonId,
      lastLessonId: progress.lastLessonId,
      recordQuiz,
      visitLesson,
      resetProgress,
    }
  }, [progress, recordQuiz, visitLesson, resetProgress])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

/** Access progress state + actions. Must be used under <ProgressProvider>. */
export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider')
  return ctx
}
