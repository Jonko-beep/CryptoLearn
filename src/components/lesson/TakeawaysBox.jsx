import { CheckCircle2 } from 'lucide-react'

/**
 * TakeawaysBox — the "Key Takeaways" summary rendered from a lesson's
 * `takeaways: string[]`. Purely presentational.
 */
export default function TakeawaysBox({ takeaways }) {
  if (!takeaways?.length) return null
  return (
    <aside className="my-8 rounded-2xl border border-accent/30 bg-accent/5 p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        Key Takeaways
      </h2>
      <ul className="space-y-2">
        {takeaways.map((t, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
            {t}
          </li>
        ))}
      </ul>
    </aside>
  )
}
