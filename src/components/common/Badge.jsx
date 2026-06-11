/**
 * Small presentational badges used for tiers and lesson states.
 */

const TIER_STYLES = {
  1: 'bg-emerald-500/15 text-emerald-400',
  2: 'bg-sky-500/15 text-sky-400',
  3: 'bg-purple-500/15 text-purple-400',
}
const TIER_NAMES = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' }

export function TierBadge({ tier }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TIER_STYLES[tier] || ''}`}>
      {TIER_NAMES[tier] || `Tier ${tier}`}
    </span>
  )
}

export function Badge({ children, className = '' }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>{children}</span>
  )
}
