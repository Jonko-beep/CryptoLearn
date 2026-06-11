import { Link } from 'react-router-dom'
import { CheckCircle2, Lock, PlayCircle, Clock3 } from 'lucide-react'
import ProgressBar from '../common/ProgressBar'
import { useProgress } from '../../hooks/useProgress'
import { getLesson } from '../../content'

/**
 * ModuleCard — one module: a header with progress, then its lessons as rows.
 * Each row reflects the lesson's state (completed / unlocked / locked / stub)
 * and is only navigable when the lesson is available.
 */

const STATE_META = {
  completed: { Icon: CheckCircle2, color: 'text-accent', label: 'Completed' },
  unlocked: { Icon: PlayCircle, color: 'text-ink', label: 'Start' },
  locked: { Icon: Lock, color: 'text-ink-dim', label: 'Locked' },
  stub: { Icon: Clock3, color: 'text-ink-dim', label: 'Coming soon' },
}

function LessonRow({ entry }) {
  const { statusOf, bestScore } = useProgress()
  // Curriculum entries for full lessons are just { id }; their title/summary live
  // in the lesson files. Resolve through the content API so full lessons (Locked,
  // Start, Completed) show real metadata, exactly like stubs already do.
  const lesson = getLesson(entry.id) ?? entry
  const state = statusOf(lesson.id)
  const { Icon, color, label } = STATE_META[state]
  const navigable = state === 'completed' || state === 'unlocked'

  const inner = (
    <div
      className={`flex items-center gap-3 rounded-lg border border-rim px-3.5 py-3 transition ${
        navigable ? 'hover:border-accent/50 hover:bg-surface-hover' : 'opacity-70'
      }`}
    >
      <Icon size={18} className={`shrink-0 ${color}`} />
      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm font-medium ${navigable ? 'text-ink' : 'text-ink-dim'}`}>
          {lesson.title}
        </p>
        <p className="truncate text-xs text-ink-dim">{lesson.summary}</p>
      </div>
      <span className="shrink-0 text-xs text-ink-dim">
        {state === 'completed' && bestScore(lesson.id) != null
          ? `${Math.round(bestScore(lesson.id) * 100)}%`
          : label}
      </span>
    </div>
  )

  return navigable ? <Link to={`/lesson/${lesson.id}`}>{inner}</Link> : <div>{inner}</div>
}

export default function ModuleCard({ module }) {
  const { moduleProgress } = useProgress()
  const { completed, total, percent } = moduleProgress(module.id)

  return (
    <div className="rounded-2xl border border-rim bg-surface-raised p-5">
      <div className="mb-4">
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h3 className="font-semibold text-ink">{module.name}</h3>
          <span className="shrink-0 text-xs text-ink-dim">
            {completed}/{total} done
          </span>
        </div>
        <ProgressBar percent={percent} />
      </div>
      <div className="space-y-2">
        {module.lessons.map((entry) => (
          <LessonRow key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  )
}
