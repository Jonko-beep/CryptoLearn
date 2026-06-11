/**
 * QUESTION-TYPE REGISTRY — makes the quiz engine extensible.
 *
 * Each entry bundles everything the engine needs for a question type:
 *   • Component  — the input UI (contract: { question, value, onChange, submitted })
 *   • grade      — (question, value) => boolean
 *   • isAnswered — (value) => boolean   (enables the Submit button)
 *   • label      — human name (for tooling/badges)
 *
 * To add a NEW question type (e.g. multi-select, ordering):
 *   1. Create a component + grade + isAnswered (see ./questions/*).
 *   2. Add one entry here keyed by the `type` string used in lesson data.
 * The Quiz component and graders work automatically — no other changes. See ARCHITECTURE.md.
 */
import MultipleChoice, { grade as gradeMc, isAnswered as answeredMc } from './questions/MultipleChoice'
import TrueFalse, { grade as gradeTf, isAnswered as answeredTf } from './questions/TrueFalse'
import FillInBlank, { grade as gradeFib, isAnswered as answeredFib } from './questions/FillInBlank'

export const QUESTION_TYPES = {
  mc:  { Component: MultipleChoice, grade: gradeMc,  isAnswered: answeredMc,  label: 'Multiple choice' },
  tf:  { Component: TrueFalse,      grade: gradeTf,  isAnswered: answeredTf,  label: 'True / False' },
  fib: { Component: FillInBlank,    grade: gradeFib, isAnswered: answeredFib, label: 'Fill in the blank' },
}

export function getQuestionType(type) {
  return QUESTION_TYPES[type]
}
