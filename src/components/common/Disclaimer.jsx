import { ShieldAlert } from 'lucide-react'
import { THEME } from '../../config/theme'

/**
 * Disclaimer — educational, not-financial-advice notice. Text comes from the
 * theme config so it travels with the branding.
 */
export default function Disclaimer({ compact = false }) {
  if (compact) {
    return (
      <p className="text-xs text-ink-dim">{THEME.disclaimer}</p>
    )
  }
  return (
    <div className="flex items-start gap-3 rounded-xl border border-rim bg-surface-raised p-4">
      <ShieldAlert size={18} className="mt-0.5 shrink-0 text-ink-dim" />
      <p className="text-sm leading-relaxed text-ink-dim">{THEME.disclaimer}</p>
    </div>
  )
}
