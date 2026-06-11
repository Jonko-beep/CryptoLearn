import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { GLOSSARY } from '../../content'

/**
 * Glossary — searchable term list. Lessons link here via [[term-id]] markup,
 * which navigates to /glossary?term=<id>; we then highlight and scroll to it.
 */
export default function Glossary() {
  const [query, setQuery] = useState('')
  const [params] = useSearchParams()
  const focusId = params.get('term')
  const refs = useRef({})

  // Scroll to and briefly highlight a term linked from a lesson.
  useEffect(() => {
    if (focusId && refs.current[focusId]) {
      refs.current[focusId].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [focusId])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = q
      ? GLOSSARY.filter(
          (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
        )
      : GLOSSARY
    return [...list].sort((a, b) => a.term.localeCompare(b.term))
  }, [query])

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-ink">Glossary</h1>
      <p className="mt-2 text-ink-dim">
        {GLOSSARY.length} terms. Search, or follow a highlighted term from any lesson.
      </p>

      {/* Search */}
      <div className="relative mt-6">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-dim" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms…"
          className="w-full rounded-xl border border-rim bg-surface-raised py-3 pl-11 pr-4 text-ink outline-none focus:border-accent"
        />
      </div>

      {/* Terms */}
      <div className="mt-6 space-y-3">
        {filtered.map((t) => {
          const focused = t.id === focusId
          return (
            <div
              key={t.id}
              ref={(el) => (refs.current[t.id] = el)}
              className={`scroll-mt-24 rounded-xl border p-4 transition ${
                focused ? 'border-accent bg-accent/5 accent-glow' : 'border-rim bg-surface-raised'
              }`}
            >
              <h2 className="font-semibold text-ink">{t.term}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-dim">{t.definition}</p>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-ink-dim">No terms match “{query}”.</p>
        )}
      </div>
    </div>
  )
}
