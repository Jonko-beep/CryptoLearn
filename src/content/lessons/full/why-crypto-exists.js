/**
 * FULL LESSON — plain-text pattern.
 * Demonstrates the baseline content blocks (heading, paragraph, callout, list)
 * with no embedded widget, plus a standard multiple-choice quiz.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'why-crypto-exists',
  tier: 1,
  title: 'Why Crypto Exists',
  summary: 'The problem cryptocurrencies were invented to solve: trust, intermediaries, and digital scarcity.',
  minutes: 6,

  blocks: [
    {
      type: 'paragraph',
      text: 'Before we touch a single chart or wallet, it is worth asking the most important question: **why does any of this exist?** Cryptocurrency is not magic internet money — it is an answer to a specific, decades-old problem in computer science and economics.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The double-spending problem',
    },
    {
      type: 'paragraph',
      text: 'A physical $20 bill is hard to copy and, once you hand it over, you no longer have it. Digital files are the opposite: copying is effortless. If money were just a file, you could spend the same dollar twice by sending copies to two people. This is the **double-spending problem**.',
    },
    {
      type: 'paragraph',
      text: 'For decades the only fix was a trusted middleman — a bank or payment network — keeping a private [[ledger]] of who owns what. They debit one account and credit another, guaranteeing the money cannot exist in two places at once. It works, but it concentrates enormous power in a few institutions.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The 2008 backdrop',
      text: 'Bitcoin\'s whitepaper appeared in October 2008, weeks after the collapse of Lehman Brothers. Its motivation was explicit: a payment system that does not require trusting a central institution that can fail, freeze funds, or inflate the currency at will.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What decentralization buys you',
    },
    {
      type: 'paragraph',
      text: '[[decentralization|Decentralization]] means no single party is in charge. Instead, thousands of independent computers keep identical copies of a shared [[ledger]] and agree, by following the same rules, on its contents. This trades convenience for some powerful properties:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Censorship resistance** — no one can block a valid transaction.',
        '**Permissionless access** — anyone with an internet connection can participate, no application or approval needed.',
        '**Predictable issuance** — the supply schedule is set by code, not by a committee.',
        '**Self-custody** — you can hold your own assets without asking a bank for permission.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Digital scarcity',
    },
    {
      type: 'paragraph',
      text: 'The breakthrough was creating **digital scarcity**: a way to own a digital thing that genuinely cannot be duplicated, without a central authority enforcing it. A [[blockchain]] makes the entire transaction history public and tamper-evident, so everyone can verify that a coin was not spent elsewhere. We will spend the next several lessons unpacking exactly how that works.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Keep your skeptic hat on',
      text: 'Decentralization solves real problems, but it is not free: transactions can be slower, mistakes are often irreversible, and "be your own bank" means being your own security team. A good student of crypto understands the tradeoffs, not just the hype.',
    },
  ],

  takeaways: [
    'Crypto exists to solve the double-spending problem without a trusted middleman.',
    'Decentralization spreads control across many independent computers running the same rules.',
    'The key innovation is digital scarcity: provable, non-duplicable ownership of a digital asset.',
    'These benefits come with real tradeoffs — speed, irreversibility, and personal responsibility.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What core problem does cryptocurrency primarily aim to solve?',
        options: [
          'Making internet connections faster',
          'Spending the same digital money twice (double-spending) without a middleman',
          'Encrypting private emails',
          'Reducing the size of digital files',
        ],
        answer: 1,
        explanation: 'Without a trusted intermediary, digital money could be copied and spent repeatedly. Crypto prevents this with a shared, verifiable ledger.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'In a decentralized network, who maintains the ledger?',
        options: [
          'A single central bank',
          'The government of each country',
          'Many independent computers each keeping a copy and following the same rules',
          'The software developers who wrote the code',
        ],
        answer: 2,
        explanation: 'No single party is in charge — thousands of nodes hold identical copies and agree by following shared rules.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Which of these is NOT a property decentralization typically provides?',
        options: [
          'Censorship resistance',
          'Guaranteed reversal of mistaken transactions',
          'Permissionless access',
          'Predictable, code-defined issuance',
        ],
        answer: 1,
        explanation: 'Irreversibility is actually a tradeoff of decentralization — there is usually no authority to undo a mistaken transaction.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: '"Digital scarcity" refers to:',
        options: [
          'Running out of disk space',
          'A shortage of cryptocurrencies on exchanges',
          'Owning a digital asset that provably cannot be duplicated',
          'The limited number of developers in crypto',
        ],
        answer: 2,
        explanation: 'Digital scarcity is the ability to own a non-duplicable digital asset without a central enforcer — the core breakthrough behind crypto.',
      },
    ],
  },
}
