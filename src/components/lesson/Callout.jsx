import { Info, Lightbulb, AlertTriangle } from 'lucide-react'
import { renderInline } from '../../lib/markup'

/**
 * Callout — a highlighted aside inside lesson content. Variant controls icon
 * and accent color. Driven entirely by data: { variant, title, text }.
 */
const VARIANTS = {
  info: { Icon: Info, ring: 'border-sky-500/40', tint: 'bg-sky-500/5', icon: 'text-sky-400' },
  tip: { Icon: Lightbulb, ring: 'border-accent/40', tint: 'bg-accent/5', icon: 'text-accent' },
  warning: { Icon: AlertTriangle, ring: 'border-amber-500/40', tint: 'bg-amber-500/5', icon: 'text-amber-400' },
}

export default function Callout({ variant = 'info', title, text }) {
  const { Icon, ring, tint, icon } = VARIANTS[variant] || VARIANTS.info
  return (
    <div className={`my-5 flex gap-3 rounded-xl border ${ring} ${tint} p-4`}>
      <Icon size={18} className={`mt-0.5 shrink-0 ${icon}`} />
      <div>
        {title && <p className="mb-1 font-semibold text-ink">{title}</p>}
        <p className="text-sm leading-relaxed text-ink-dim">{renderInline(text)}</p>
      </div>
    </div>
  )
}
