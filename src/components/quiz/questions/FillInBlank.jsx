import { Check, X } from 'lucide-react'

/**
 * Fill-in-the-blank input. Question-component contract:
 *   value: string | undefined
 * Grading is case-insensitive and trims whitespace, accepting any string in
 * the question's `accept` array.
 */
export default function FillInBlank({ question, value, onChange, submitted }) {
  const correct = submitted && grade(question, value)

  let cls = 'border-rim focus:border-accent'
  if (submitted) cls = correct ? 'border-emerald-500' : 'border-red-500'

  return (
    <div>
      <div className="relative">
        <input
          value={value ?? ''}
          disabled={submitted}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer…"
          className={`w-full rounded-lg border bg-surface px-4 py-2.5 pr-10 text-ink outline-none transition ${cls}`}
        />
        {submitted && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {correct ? <Check size={18} className="text-emerald-400" /> : <X size={18} className="text-red-400" />}
          </span>
        )}
      </div>
      {submitted && !correct && (
        <p className="mt-1.5 text-xs text-ink-dim">
          Accepted answer: <span className="text-emerald-400">{question.accept[0]}</span>
        </p>
      )}
    </div>
  )
}

const normalize = (s) => String(s ?? '').trim().toLowerCase()

export function grade(question, value) {
  return question.accept.some((a) => normalize(a) === normalize(value))
}

export function isAnswered(value) {
  return normalize(value).length > 0
}
