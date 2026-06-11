import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, RotateCcw, Trophy, AlertCircle } from 'lucide-react'
import { getQuestionType } from './questionTypes'
import { renderInline } from '../../lib/markup'
import { useProgress } from '../../hooks/useProgress'
import { getNextLessonId, getLesson } from '../../content'

/**
 * Quiz — the engine. Type-agnostic: it renders each question through the
 * question-type registry, grades via that type's `grade`, and computes a score
 * against the quiz's passThreshold. Passing records completion (which unlocks
 * the next lesson) through the progress hook.
 *
 * Props: { quiz, lessonId }
 */
export default function Quiz({ quiz, lessonId }) {
  const { recordQuiz, isCompleted } = useProgress()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const setAnswer = (qid, value) => setAnswers((a) => ({ ...a, [qid]: value }))

  // Can submit once every question has an answer (per its type's isAnswered).
  const allAnswered = quiz.questions.every((q) => {
    const t = getQuestionType(q.type)
    return t && t.isAnswered(answers[q.id])
  })

  const { correctCount, score, passed } = useMemo(() => {
    const correct = quiz.questions.filter((q) => {
      const t = getQuestionType(q.type)
      return t && t.grade(q, answers[q.id])
    }).length
    const s = correct / quiz.questions.length
    return { correctCount: correct, score: s, passed: s >= quiz.passThreshold }
  }, [answers, quiz])

  const handleSubmit = () => {
    setSubmitted(true)
    recordQuiz(lessonId, score)
  }

  const handleRetry = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const nextId = getNextLessonId(lessonId)
  const nextLesson = nextId ? getLesson(nextId) : null

  return (
    <section className="rounded-2xl border border-rim bg-surface-raised p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Check your understanding</h2>
        <span className="text-xs text-ink-dim">
          {Math.round(quiz.passThreshold * 100)}% to pass
        </span>
      </div>

      <ol className="space-y-6">
        {quiz.questions.map((q, idx) => {
          const type = getQuestionType(q.type)
          if (!type) return null
          const { Component } = type
          return (
            <li key={q.id}>
              <div className="mb-3 flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                  {idx + 1}
                </span>
                <p className="text-ink">{renderInline(q.prompt)}</p>
              </div>
              <div className="pl-7">
                <Component
                  question={q}
                  value={answers[q.id]}
                  onChange={(v) => setAnswer(q.id, v)}
                  submitted={submitted}
                />
                {/* Explanation shown after submit */}
                {submitted && q.explanation && (
                  <p className="mt-2 rounded-lg bg-surface px-3 py-2 text-xs text-ink-dim">
                    {q.explanation}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      {/* Actions / results */}
      <div className="mt-6 border-t border-rim pt-5">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full rounded-lg bg-accent px-4 py-2.5 font-medium text-surface transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-50"
          >
            {allAnswered ? 'Submit answers' : 'Answer every question to submit'}
          </button>
        ) : (
          <div className="space-y-4">
            <div
              className={`flex items-center gap-3 rounded-xl border p-4 ${
                passed ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-amber-500/50 bg-amber-500/10'
              }`}
            >
              {passed ? (
                <Trophy className="shrink-0 text-emerald-400" />
              ) : (
                <AlertCircle className="shrink-0 text-amber-400" />
              )}
              <div>
                <p className={`font-semibold ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {passed ? 'Passed!' : 'Not quite there'} — {correctCount}/{quiz.questions.length} correct ({Math.round(score * 100)}%)
                </p>
                <p className="text-sm text-ink-dim">
                  {passed
                    ? isCompleted(lessonId)
                      ? 'Lesson complete. The next lesson is unlocked.'
                      : 'Great work!'
                    : `You need ${Math.round(quiz.passThreshold * 100)}% to pass. Review the explanations and try again.`}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 rounded-lg border border-rim px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-surface-hover"
              >
                <RotateCcw size={15} />
                Try again
              </button>
              {passed && nextLesson && (
                <Link
                  to={`/lesson/${nextLesson.id}`}
                  className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-surface transition hover:bg-accent-dim"
                >
                  Next: {nextLesson.title}
                  <ArrowRight size={15} />
                </Link>
              )}
              {passed && !nextLesson && (
                <Link
                  to="/curriculum"
                  className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-surface transition hover:bg-accent-dim"
                >
                  Back to curriculum
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
