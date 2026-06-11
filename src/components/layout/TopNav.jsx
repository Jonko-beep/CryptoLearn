import { NavLink, Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { useProgress } from '../../hooks/useProgress'
import { THEME } from '../../config/theme'

/**
 * TopNav — sticky top navigation. Brand (from theme), section links, and a
 * compact overall-progress indicator.
 */
const LINKS = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/glossary', label: 'Glossary' },
]

export default function TopNav() {
  const { overallPercent } = useProgress()

  return (
    <header className="sticky top-0 z-30 border-b border-rim bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <GraduationCap size={18} />
          </span>
          <span className="font-semibold tracking-tight text-ink">{THEME.appName}</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  isActive ? 'bg-surface-hover text-ink' : 'text-ink-dim hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <span className="ml-2 hidden items-center gap-2 rounded-lg border border-rim px-3 py-1.5 text-xs text-ink-dim sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {overallPercent}% complete
          </span>
        </div>
      </nav>
    </header>
  )
}
