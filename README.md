# CryptoLearn

A dark-themed, interactive learning platform — built as a **reusable learning-engine
architecture**, with cryptocurrency as the sample subject filling it. The content layer
is fully decoupled from the UI, so the same engine could power a personal-finance course
(or any subject) by editing only `/src/content` and one theme file.

> **Educational software, not financial advice.** Crypto markets are volatile — always do
> your own research. A disclaimer is shown throughout the app.

This is a proof-of-concept / rough draft. It builds a representative **vertical slice**
that exercises every feature type once (lessons, embedded diagrams, interactive
simulators, a multi-type quiz engine, progress tracking, glossary, dashboard) and stubs
the rest of the curriculum so the full roadmap and data structure are visible.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server  → http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # serve the production build
npm run lint     # run ESLint
```

Requires Node 18+ (developed on Node 20).

---

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | **React 19** + **Vite**                  |
| Styling        | **Tailwind CSS v3** (semantic CSS-var tokens) |
| Routing        | **React Router v7**                      |
| Charts         | **Recharts**                             |
| Icons          | **lucide-react**                         |
| Persistence    | **localStorage** (no backend in v1)      |
| Hashing demo   | Browser **Web Crypto API** (no library)  |

---

## What's built (the vertical slice)

- **30 full lessons** with complete content + quizzes, chosen to hit every pattern:
  - *Why Crypto Exists* — plain-text lesson
  - *Blocks, Hashing & the Chain* — embedded **diagram** + embedded **interactive
    simulator** + a quiz using **non-multiple-choice** question types
  - *Bitcoin / Ethereum / Solana / Other Chains* — the "How Blockchains Work" module
  - *Staking, Yield & Compounding* — embeds the **compounding calculator**
  - *Perpetual Futures & Liquidation* — advanced lesson, embeds the **perps P&L calculator**
- **4 interactive widgets + 1 diagram**: live SHA-256 hashing (single + breakable
  mini-chain), compounding/growth calculator, perpetual-futures P&L calculator, sortable
  coin-comparison table, and an SVG block-chain diagram.
- **Quiz engine** supporting three question types (multiple choice, true/false,
  fill-in-the-blank) via an extensible registry.
- **Progress tracking** persisted to localStorage: per-lesson completion, best scores,
  sequential unlocking, overall/per-tier/per-module percentages, and "continue where you
  left off."
- **Searchable glossary** (65+ terms) linkable inline from any lesson.
- **Dashboard** with progress overview and resume card.
- The **remaining curriculum is stubbed** (title + tier + one-line summary) so the full
  roadmap is visible and the data structure is proven at scale.

---

## Folder structure

```
src/
├── config/
│   └── theme.js                 # SINGLE source of branding: app name, colors, disclaimer
│
├── content/                     # ── CONTENT LAYER (100% subject-specific, zero UI) ──
│   ├── schema.js                #   JSDoc typedefs documenting every content shape
│   ├── curriculum.js            #   The roadmap: tiers → modules → ordered lessons (+ stubs)
│   ├── glossary.js              #   Glossary terms + lookup
│   ├── index.js                 #   Public content API the UI imports from
│   └── lessons/
│       ├── index.js             #   Lesson registry (id → full lesson)
│       └── full/                #   One file per full lesson
│           ├── why-crypto-exists.js
│           ├── blocks-hashing-chain.js
│           ├── bitcoin-architecture.js
│           ├── ethereum-architecture.js
│           ├── solana-architecture.js
│           ├── coins-at-a-glance.js
│           ├── staking-yield.js
│           └── perpetual-futures.js
│
├── components/                  # ── UI LAYER (content-agnostic) ──
│   ├── layout/                  #   AppShell, TopNav
│   ├── common/                  #   ProgressBar, Badge, Disclaimer
│   ├── curriculum/              #   CurriculumBrowser, ModuleCard
│   ├── lesson/                  #   Lesson, ContentBlock, Callout, TakeawaysBox, WidgetEmbed
│   ├── quiz/                    #   Quiz, questionTypes registry, questions/*
│   ├── dashboard/               #   Dashboard
│   ├── glossary/                #   Glossary
│   └── widgets/                 #   index.js registry + the 5 embeddable widgets
│
├── hooks/
│   ├── useLocalStorage.js       #   Generic persisted state
│   └── useProgress.jsx          #   Progress context: completion, unlocking, percentages
│
├── lib/
│   └── markup.jsx               #   Inline markup parser (**bold**, [[glossary-links]])
│
├── pages/                       #   Route entry points (Dashboard, Curriculum, Lesson, Glossary)
├── App.jsx                      #   Providers + routes
└── main.jsx                     #   Entry; applies theme CSS vars at startup
```

### The one principle to remember

**Content never imports UI; UI never hard-codes content.** The UI knows only generic
shapes (a "lesson" is blocks + a quiz; a "widget" is a string key). Swapping the subject
means editing `/src/content` and `/src/config/theme.js` — **no component changes**.

See **[ARCHITECTURE.md](./ARCHITECTURE.md)** for how to add a lesson, add a quiz question
and a new question *type*, embed an interactive widget, and re-theme the app.
