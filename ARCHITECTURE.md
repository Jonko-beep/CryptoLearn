# CryptoLearn — Architecture

This document is the most important output of the project. It explains how the learning
engine is structured and, with short examples, how to extend it:

1. [The core idea](#1-the-core-idea-content--ui-separation)
2. [How content flows to the screen](#2-how-content-flows-to-the-screen)
3. [Add a new lesson](#3-add-a-new-lesson)
4. [Add a quiz question — and a new question *type*](#4-add-a-quiz-question--and-a-new-question-type)
5. [Embed an interactive widget inside a lesson](#5-embed-an-interactive-widget-inside-a-lesson)
6. [Re-theme / re-brand for a different subject](#6-re-theme--re-brand-for-a-different-subject)
7. [How progress & unlocking work](#7-how-progress--unlocking-work)

---

## 1. The core idea: content / UI separation

The whole design rests on one rule:

> **The content layer (`/src/content`) is 100% subject-specific and contains no UI.
> The UI layer (`/src/components`) is 100% subject-agnostic and contains no content.**

They meet through **generic shapes** and **string keys**, never through direct imports of
each other's specifics:

| The UI understands…            | …but never knows                          |
| ------------------------------ | ----------------------------------------- |
| a *lesson* = `blocks[]` + a `quiz` | what "Bitcoin" is                     |
| a *block* has a `type`         | the actual prose                          |
| a *widget* is a string key (`'compounding'`) | which lesson uses it        |
| a *question* has a `type`      | the correct answer's meaning              |

Because of this, **re-subjecting the app touches only `/src/content` + `/src/config/theme.js`**.
No component changes.

```
┌──────────────────────┐        generic shapes         ┌──────────────────────┐
│   CONTENT LAYER      │   (Lesson, Block, Question)    │      UI LAYER        │
│  /src/content        │ ────────────────────────────► │   /src/components     │
│  • lessons (data)    │   string keys ('compounding') │   • renderers        │
│  • curriculum (order)│                               │   • widgets (by key) │
│  • glossary          │                               │   • quiz engine      │
└──────────────────────┘                               └──────────────────────┘
```

The content shapes are documented as JSDoc typedefs in **`src/content/schema.js`** — read
that file first; it is the contract between the two layers.

---

## 2. How content flows to the screen

```
curriculum.js  ──┐
                 ├─►  content/index.js  ──►  pages/LessonPage.jsx  ──►  components/lesson/Lesson.jsx
lessons/full/* ──┘     (getLesson, order)        (resolves :id)              │
                                                                            ├─► ContentBlock  (switch on block.type)
                                                                            │        └─► WidgetEmbed ─► widgets/index.js (by key)
                                                                            └─► Quiz  ─► questionTypes registry (by question.type)
```

- **`content/index.js`** is the only content entry point the UI imports. It flattens the
  curriculum into an ordered list, resolves full lessons vs. stubs, and exposes
  `getLesson`, `getNextLessonId`, `ORDERED_LESSONS`, etc.
- **`ContentBlock.jsx`** is the renderer switchboard: it maps each `block.type` to markup.
- **`WidgetEmbed.jsx`** + **`widgets/index.js`** turn a `'widget'` block into a component.
- **`Quiz.jsx`** + **`questionTypes.jsx`** turn questions into graded inputs.

---

## 3. Add a new lesson

**Goal:** add a full lesson with content and a quiz.

### Step 1 — create the lesson file

Create `src/content/lessons/full/gas-fees.js`. A lesson is plain data following the
`Lesson` typedef. Text supports inline markup: `**bold**` and `[[glossary-id]]` links.

```js
// src/content/lessons/full/gas-fees.js
export const lesson = {
  id: 'gas-fees',            // unique, URL-safe — used in routes & progress
  tier: 2,
  title: 'Gas Fees',
  summary: 'What you are really paying for when you transact on Ethereum.',
  minutes: 7,

  blocks: [
    { type: 'paragraph', text: 'Every action on Ethereum costs [[gas]]. Here is why…' },
    { type: 'heading', level: 2, text: 'Supply and demand for blockspace' },
    { type: 'list', ordered: false, items: ['Base fee', 'Priority fee (tip)'] },
    { type: 'callout', variant: 'tip', title: 'Time it right',
      text: 'Fees fall when the network is quiet — often weekends.' },
  ],

  takeaways: ['Gas prices computation', 'Fees rise with demand for blockspace'],

  quiz: {
    passThreshold: 0.7,
    questions: [
      { id: 'q1', type: 'mc', prompt: 'Gas measures…',
        options: ['Storage', 'Computational work', 'Token price'], answer: 1,
        explanation: 'Gas meters the computation a transaction performs.' },
    ],
  },
}
```

### Step 2 — register it

Add it to the lesson registry in `src/content/lessons/index.js`:

```js
import { lesson as gasFees } from './full/gas-fees'

const FULL_LESSONS = [
  /* …existing… */
  gasFees,
]
```

### Step 3 — place it in the curriculum

In `src/content/curriculum.js`, reference the id where it belongs in the ordering.
If a stub with that id already exists, replace the `stub(...)` line with `{ id: 'gas-fees' }`:

```js
// before:  stub('gas-fees', 2, 'Gas Fees', 'What you are really paying for…'),
{ id: 'gas-fees' },
```

That's it. The curriculum browser, routing (`/lesson/gas-fees`), progress tracking, and
sequential unlocking all pick it up automatically — **no component changes**.

> **Block types available out of the box:** `heading`, `paragraph`, `list`, `callout`,
> `code`, `widget`. To add a *new* block type, add a `case` to the switch in
> `src/components/lesson/ContentBlock.jsx` — that file is the single place that knows how
> blocks look.

---

## 4. Add a quiz question — and a new question *type*

### 4a. Add a question to an existing quiz

Just add an object to the lesson's `quiz.questions` array. The three built-in types:

```js
// multiple choice — answer is the correct option index
{ id: 'q5', type: 'mc', prompt: 'Pick one…',
  options: ['A', 'B', 'C'], answer: 2, explanation: '…' }

// true / false — answer is a boolean
{ id: 'q6', type: 'tf', prompt: 'A hash is reversible.',
  answer: false, explanation: '…' }

// fill in the blank — accept[] lists acceptable answers (case-insensitive)
{ id: 'q7', type: 'fib', prompt: 'Bitcoin uses ___ hashing.',
  accept: ['sha-256', 'sha256'], explanation: '…' }
```

The quiz engine grades automatically — no code changes for new questions.

### 4b. Add a brand-new question TYPE

This proves the engine is extensible. We'll add a **`multi`** (select-all-that-apply) type.

**Step 1 — build the component + graders** in `src/components/quiz/questions/MultiSelect.jsx`.
Every question type follows the same contract:

```jsx
// props: { question, value, onChange, submitted }
//   value: array of selected option indices
export default function MultiSelect({ question, value = [], onChange, submitted }) {
  const toggle = (i) =>
    onChange(value.includes(i) ? value.filter((x) => x !== i) : [...value, i])

  return (
    <div className="space-y-2">
      {question.options.map((opt, i) => (
        <button key={i} disabled={submitted} onClick={() => toggle(i)}
          className={`block w-full rounded-lg border px-4 py-2.5 text-left ${
            value.includes(i) ? 'border-accent bg-accent/10' : 'border-rim'
          }`}>
          {opt}
        </button>
      ))}
    </div>
  )
}

// correct = selected set exactly equals the answer set
export function grade(question, value = []) {
  const a = [...question.answer].sort().join(',')
  const b = [...value].sort().join(',')
  return a === b
}

// enables the Submit button once at least one option is chosen
export function isAnswered(value) {
  return Array.isArray(value) && value.length > 0
}
```

**Step 2 — register the type** in `src/components/quiz/questionTypes.jsx` (one entry):

```js
import MultiSelect, { grade as gradeMulti, isAnswered as answeredMulti } from './questions/MultiSelect'

export const QUESTION_TYPES = {
  mc:    { /* … */ },
  tf:    { /* … */ },
  fib:   { /* … */ },
  multi: { Component: MultiSelect, grade: gradeMulti, isAnswered: answeredMulti, label: 'Select all' },
}
```

**Step 3 — use it** in any lesson's quiz:

```js
{ id: 'q8', type: 'multi', prompt: 'Which are Proof-of-Stake chains?',
  options: ['Bitcoin', 'Ethereum', 'Solana', 'Litecoin'], answer: [1, 2],
  explanation: 'Ethereum and Solana use PoS; Bitcoin and Litecoin use PoW.' }
```

The `Quiz` component renders, enables submission, grades, and scores it with **zero**
changes — it only ever talks to the registry. That decoupling is the point.

---

## 5. Embed an interactive widget inside a lesson

Widgets (interactive simulators **and** static diagrams) are referenced from content by a
**string key**, so content never imports React components.

### Use an existing widget

Drop a `widget` block anywhere in a lesson's `blocks`. Props are passed straight through:

```js
{ type: 'widget', widget: 'compounding',
  props: { principal: 1000, rate: 5, years: 10, rateLabel: 'Reward rate (APR %)' },
  caption: 'Adjust the inputs to see compounding in action.' }
```

Registered keys (see `src/components/widgets/index.js`):
`compounding`, `perps`, `hash-demo`, `coin-comparison`, `blockchain-diagram`.

### Add a new widget

**Step 1 — build the component.** It's an ordinary component that takes its config via
props (give every prop a sensible default so it works with `props: {}`):

```jsx
// src/components/widgets/GasEstimator.jsx
export default function GasEstimator({ gasLimit = 21000, gwei = 20 }) {
  const ethFee = (gasLimit * gwei) / 1e9
  return <div className="rounded-xl border border-rim bg-surface-raised p-4">
    Estimated fee: {ethFee} ETH
  </div>
}
```

**Step 2 — register it** in `src/components/widgets/index.js` (one line):

```js
import GasEstimator from './GasEstimator'

export const WIDGETS = {
  /* …existing… */
  'gas-estimator': GasEstimator,
}
```

**Step 3 — embed it** from any lesson:

```js
{ type: 'widget', widget: 'gas-estimator', props: { gwei: 35 } }
```

`WidgetEmbed.jsx` resolves the key, renders the component with the props, and shows a
friendly placeholder if the key is unknown (handy while authoring). The same mechanism
handles the SVG `blockchain-diagram` — **a diagram is just a widget with no interactivity.**

---

## 6. Re-theme / re-brand for a different subject

This is the payoff of the architecture. To turn CryptoLearn into, say, **FinanceLearn**:

### Re-skin (branding + colors) — `src/config/theme.js`

One file holds the app name, tagline, disclaimer, and **every color** (as CSS custom
properties). Tailwind's semantic tokens (`bg-surface`, `text-accent`, `border-rim`, …) all
resolve through these, so changing them re-skins the entire app:

```js
export const THEME = {
  appName: 'FinanceLearn',
  tagline: 'Build real-world money skills.',
  disclaimer: 'Educational only — not financial advice.',
  vars: {
    '--surface': '#0f1117',
    '--accent':  '#f59e0b',   // teal → gold; the whole UI follows
    '--accent-dim': '#d97706',
    '--accent-glow': 'rgba(245,158,11,0.18)',
    /* …the rest… */
  },
}
```

`main.jsx` writes these variables onto `<html>` at startup — no rebuild of styles needed.

### Re-content — `src/content/`

Replace the data, keeping the same shapes:

- **`lessons/full/*`** — write finance lessons (budgeting, credit, index funds…).
- **`lessons/index.js`** — register them.
- **`curriculum.js`** — define your tiers/modules/order (e.g. "Saving", "Investing").
- **`glossary.js`** — your terms.
- **`components/widgets/`** — the **compounding calculator already transfers verbatim**;
  add finance-specific widgets (loan amortization, retirement projection) using §5.

**Nothing in `/src/components` (outside `widgets/`) changes.** The renderer, quiz engine,
progress, dashboard, curriculum browser, and glossary are all subject-agnostic and work
as-is. That separation — provable by this single config file plus a content swap — is the
real deliverable.

---

## 7. How progress & unlocking work

Progress lives in **`src/hooks/useProgress.jsx`** (a React context) and persists to
`localStorage` via `useLocalStorage`. Stored shape:

```js
{ lessons: { [id]: { completed: bool, bestScore: number } }, lastLessonId: string|null }
```

Key behaviors:

- **Completion** is granted when a quiz score ≥ the lesson's `passThreshold` (default 0.7).
  Best score is retained across retries.
- **Sequential unlocking:** a full lesson is `unlocked` when the previous *full* lesson (in
  curriculum order) is `completed`. Stubs are skipped by this walk and are never completable
  (`statusOf` returns `'stub'`).
- **Status** per lesson is one of `'completed' | 'unlocked' | 'locked' | 'stub'`, consumed by
  `ModuleCard` and `LessonPage` (which guards locked/stub lessons).
- **Aggregates:** overall %, per-tier, and per-module percentages are derived on the fly, plus
  a **"continue where you left off"** target (last visited unfinished lesson, else first
  incomplete).

Because all of this keys off the generic curriculum order and lesson ids, it works for any
subject without modification.
