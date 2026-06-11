import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowLeft } from 'lucide-react'
import ContentBlock from './ContentBlock'
import TakeawaysBox from './TakeawaysBox'
import Quiz from '../quiz/Quiz'
import { TierBadge } from '../common/Badge'
import { useProgress } from '../../hooks/useProgress'

/**
 * Lesson — top-level lesson view. Renders the header, the ordered content
 * blocks (each delegated to ContentBlock), the takeaways box, and the quiz.
 * Marks the lesson as "visited" so the dashboard can resume it.
 *
 * Subject-agnostic: it only reads the generic Lesson shape from schema.js.
 */
export default function Lesson({ lesson }) {
  const { visitLesson } = useProgress()

  useEffect(() => {
    visitLesson(lesson.id)
    window.scrollTo(0, 0)
  }, [lesson.id, visitLesson])

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        to="/curriculum"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-ink-dim transition hover:text-ink"
      >
        <ArrowLeft size={15} />
        Curriculum
      </Link>

      {/* Header */}
      <header className="mb-8 border-b border-rim pb-6">
        <div className="mb-3 flex items-center gap-3">
          <TierBadge tier={lesson.tier} />
          {lesson.minutes && (
            <span className="flex items-center gap-1 text-xs text-ink-dim">
              <Clock size={13} />
              {lesson.minutes} min read
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink">{lesson.title}</h1>
        <p className="mt-2 text-lg text-ink-dim">{lesson.summary}</p>
      </header>

      {/* Body */}
      <div className="lesson-prose">
        {lesson.blocks?.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>

      <TakeawaysBox takeaways={lesson.takeaways} />

      {/* Quiz */}
      {lesson.quiz && (
        <div className="mt-10">
          <Quiz quiz={lesson.quiz} lessonId={lesson.id} />
        </div>
      )}
    </article>
  )
}
