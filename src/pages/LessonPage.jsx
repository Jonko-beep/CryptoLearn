import { useParams, Link } from 'react-router-dom'
import { Lock, ArrowLeft } from 'lucide-react'
import Lesson from '../components/lesson/Lesson'
import { TierBadge } from '../components/common/Badge'
import { getLesson } from '../content'
import { useProgress } from '../hooks/useProgress'

/**
 * LessonPage — resolves the :id param to a lesson and guards access:
 *   • missing id      → not-found message
 *   • stub lesson     → "coming soon" placeholder
 *   • locked lesson   → locked message (finish the prior lesson first)
 *   • otherwise       → the full Lesson view
 */
export default function LessonPage() {
  const { id } = useParams()
  const { statusOf } = useProgress()
  const lesson = getLesson(id)

  if (!lesson) {
    return <Notice title="Lesson not found" body="That lesson doesn’t exist." />
  }

  const status = statusOf(id)

  if (status === 'stub') {
    return (
      <Notice
        title={lesson.title}
        tier={lesson.tier}
        body={`${lesson.summary} — this lesson is on the roadmap but not written yet.`}
        badge="Coming soon"
      />
    )
  }

  if (status === 'locked') {
    return (
      <Notice
        title={lesson.title}
        tier={lesson.tier}
        icon={<Lock className="text-ink-dim" />}
        body={`${lesson.summary} This lesson is locked — complete the previous lesson’s quiz to unlock it.`}
      />
    )
  }

  return <Lesson lesson={lesson} />
}

function Notice({ title, body, tier, badge, icon }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <Link
        to="/curriculum"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-dim transition hover:text-ink"
      >
        <ArrowLeft size={15} />
        Curriculum
      </Link>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <div className="mb-3 flex items-center justify-center gap-3">
        {tier && <TierBadge tier={tier} />}
        {badge && (
          <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-xs font-medium text-ink-dim">
            {badge}
          </span>
        )}
      </div>
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-3 text-ink-dim">{body}</p>
    </div>
  )
}
