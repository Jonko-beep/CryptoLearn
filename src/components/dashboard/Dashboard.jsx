import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Trophy, Layers, RotateCcw } from 'lucide-react'
import ProgressBar from '../common/ProgressBar'
import { TierBadge } from '../common/Badge'
import Disclaimer from '../common/Disclaimer'
import { useProgress } from '../../hooks/useProgress'
import { CURRICULUM, getLesson, TOTAL_FULL_LESSONS } from '../../content'
import { THEME } from '../../config/theme'

/**
 * Dashboard — landing view. Shows overall progress, a "continue where you left
 * off" card, per-tier progress, and the disclaimer. All numbers come from the
 * progress hook; all structure from the content layer.
 */
export default function Dashboard() {
  const { overallPercent, completedCount, continueLessonId, moduleProgress, resetProgress } =
    useProgress()

  const resume = getLesson(continueLessonId)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {THEME.appName}
        </h1>
        <p className="mt-2 text-lg text-ink-dim">{THEME.tagline}</p>
      </header>

      {/* Overall progress + continue */}
      <div className="grid gap-5 md:grid-cols-3">
        {/* Progress summary */}
        <div className="rounded-2xl border border-rim bg-surface-raised p-5 md:col-span-1">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-ink-dim">
            <Trophy size={16} className="text-accent" />
            Your progress
          </div>
          <div className="mb-1 text-4xl font-bold text-ink">{overallPercent}%</div>
          <p className="mb-4 text-sm text-ink-dim">
            {completedCount} of {TOTAL_FULL_LESSONS} lessons complete
          </p>
          <ProgressBar percent={overallPercent} />
        </div>

        {/* Continue card */}
        {resume && (
          <Link
            to={`/lesson/${resume.id}`}
            className="group rounded-2xl border border-rim bg-gradient-to-br from-surface-raised to-surface p-5 transition hover:border-accent/50 md:col-span-2"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-accent">
              <BookOpen size={16} />
              Continue where you left off
            </div>
            <div className="mb-2 flex items-center gap-3">
              <TierBadge tier={resume.tier} />
            </div>
            <h2 className="text-xl font-semibold text-ink">{resume.title}</h2>
            <p className="mt-1 text-sm text-ink-dim">{resume.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition group-hover:gap-2.5">
              Resume lesson <ArrowRight size={15} />
            </span>
          </Link>
        )}
      </div>

      {/* Per-tier progress */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink">
          <Layers size={18} className="text-accent" />
          By tier
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {CURRICULUM.map((tier) => {
            // Aggregate the tier's modules.
            const agg = tier.modules.reduce(
              (acc, m) => {
                const p = moduleProgress(m.id)
                return { completed: acc.completed + p.completed, total: acc.total + p.total }
              },
              { completed: 0, total: 0 },
            )
            const percent = agg.total ? Math.round((agg.completed / agg.total) * 100) : 0
            return (
              <div key={tier.tier} className="rounded-2xl border border-rim bg-surface-raised p-5">
                <div className="mb-3 flex items-center justify-between">
                  <TierBadge tier={tier.tier} />
                  <span className="text-xs text-ink-dim">
                    {agg.completed}/{agg.total}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-ink">{tier.name}</p>
                <ProgressBar percent={percent} />
              </div>
            )
          })}
        </div>
      </section>

      {/* Browse + reset */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          to="/curriculum"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-surface transition hover:bg-accent-dim"
        >
          Browse full curriculum <ArrowRight size={15} />
        </Link>
        <button
          onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) resetProgress()
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-rim px-4 py-2.5 text-sm font-medium text-ink-dim transition hover:bg-surface-hover"
        >
          <RotateCcw size={15} />
          Reset progress
        </button>
      </div>

      <div className="mt-10">
        <Disclaimer />
      </div>
    </div>
  )
}
