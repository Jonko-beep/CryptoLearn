import { Check, X } from 'lucide-react'

/**
 * True/False input. Question-component contract:
 *   value: boolean | undefined
 */
export default function TrueFalse({ question, value, onChange, submitted }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[true, false].map((opt) => {
        const selected = value === opt
        const correct = question.answer === opt

        let cls = 'border-rim hover:bg-surface-hover'
        if (submitted) {
          if (correct) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
          else if (selected) cls = 'border-red-500 bg-red-500/10 text-red-400'
          else cls = 'border-rim opacity-60'
        } else if (selected) {
          cls = 'border-accent bg-accent/10 text-accent'
        }

        return (
          <button
            key={String(opt)}
            disabled={submitted}
            onClick={() => onChange(opt)}
            className={`flex items-center justify-center gap-2 rounded-lg border py-3 text-sm font-semibold transition ${cls}`}
          >
            {opt ? 'True' : 'False'}
            {submitted && correct && <Check size={15} />}
            {submitted && selected && !correct && <X size={15} />}
          </button>
        )
      })}
    </div>
  )
}

export function grade(question, value) {
  return value === question.answer
}

export function isAnswered(value) {
  return value === true || value === false
}
