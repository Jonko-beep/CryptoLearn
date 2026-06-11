import { Link } from 'react-router-dom'
import { getTerm } from '../content/glossary'

/**
 * Tiny inline-markup parser for lesson text. Content-agnostic.
 *
 * Supports these inline forms inside any string:
 *   **bold text**             → <strong>
 *   *italic text*             → <em>
 *   [[term-id]]               → glossary link, labeled with the term's name
 *   [[term-id|custom label]]  → glossary link with custom label
 *
 * Returns an array of React nodes safe to drop into JSX. Kept deliberately
 * simple (regex split, no nesting) — this is a draft, not a Markdown engine.
 * Because there's no nesting, don't put a [[link]] inside bold or italic runs.
 */
export function renderInline(text) {
  if (!text) return null

  // Split on a [[...]] link, a **bold** run, or an *italic* run, keeping
  // delimiters. Order matters: **bold** is tried before *italic* so a `**`
  // run isn't mis-read as two empty italics.
  const TOKEN = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g
  const parts = text.split(TOKEN)

  return parts.map((part, i) => {
    if (!part) return null

    // Key-term link: [[id]] or [[id|label]]
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2)
      const [id, label] = inner.split('|')
      const term = getTerm(id.trim())
      const text = label?.trim() || term?.term || id.trim()
      return (
        <Link
          key={i}
          to={`/glossary?term=${encodeURIComponent(id.trim())}`}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          title={term?.definition || 'Glossary term'}
        >
          {text}
        </Link>
      )
    }

    // Bold: **text** (checked before italic, since both start with '*')
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      )
    }

    return <span key={i}>{part}</span>
  })
}
