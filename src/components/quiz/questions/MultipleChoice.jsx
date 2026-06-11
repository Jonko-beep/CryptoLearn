import { Check, X } from 'lucide-react'
import { renderInline } from '../../../lib/markup'

/**
 * Multiple-choice input. Conforms to the question-component contract:
 *   props: { question, value, onChange, submitted }
 *   - value: selected option index (number) or undefined
 */
export default function MultipleChoice({ question, value, onChange, submitted }) {
  return (
    <div className="space-y-2">
      {question.options.map((opt, i) => {
        const selected = value === i
        const correct = question.answer === i

        // Styling only kicks in after submission.
        let cls = 'border-rim hover:bg-surface-hover'
        if (submitted) {
          if (correct) cls = 'border-emerald-500 bg-emerald-500/10'
          else if (selected) cls = 'border-red-500 bg-red-500/10'
          else cls = 'border-rim opacity-60'
        } else if (selected) {
          cls = 'border-accent bg-accent/10'
        }

        return (
          <button
            key={i}
            disabled={submitted}
            onClick={() => onChange(i)}
            className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition ${cls}`}
          >
            <span className="text-ink">{renderInline(opt)}</span>
            {submitted && correct && <Check size={16} className="shrink-0 text-emerald-400" />}
            {submitted && selected && !correct && <X size={16} className="shrink-0 text-red-400" />}
          </button>
        )
      })}
    </div>
  )
}

/** Grade: chosen index equals the answer index. */
export function grade(question, value) {
  return value === question.answer
}

/** Has the learner answered (so we can enable Submit)? */
export function isAnswered(value) {
  return value !== undefined && value !== null
}
