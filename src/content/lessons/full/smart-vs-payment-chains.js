/**
 * FULL LESSON — Smart-Contract vs Payment Chains. The third comparative
 * axis: scope. Purpose-built ledgers (deliberately limited scripting) vs
 * Turing-complete platforms, and why expressiveness is an attack surface.
 * Bridges the trilemma lesson into the Ethereum/Solana deep dives.
 * Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'smart-vs-payment-chains',
  tier: 2,
  title: 'Smart-Contract vs Payment Chains',
  summary: 'Turing-complete platforms vs purpose-built ledgers.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'You now have two axes — what the ledger records, and who writes to it — plus the trilemma connecting them. The third axis is **scope**: what is the chain allowed to *do*? At one end sit purpose-built payment ledgers that move one asset and refuse to do anything else; at the other, [[smart-contract|smart-contract]] platforms that will run any program you deploy. The split is not a maturity gap — it is one of crypto\'s most deliberate design decisions.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Purpose-built ledgers: the vault',
    },
    {
      type: 'paragraph',
      text: 'Bitcoin can run small scripts — that is how multisig wallets and time-locked payments work — but its language is **deliberately crippled**: no loops, no arbitrary programs. Every spending condition is simple, bounded, and predictable. Monero applies the same philosophy to private payments; XRP to fast settlement. The payoff is a tiny attack surface: a chain that can only move coins has very few ways to be tricked, and its rules change rarely and slowly — by design. For an asset whose pitch is neutrality and permanence, that conservatism *is* the feature.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Turing-complete platforms: the workshop',
    },
    {
      type: 'paragraph',
      text: 'Ethereum\'s founding bet was the opposite: make the chain **Turing-complete** — able, in principle, to run any program — and let the applications emerge. That single decision is what makes everything in the later modules possible: [[token|tokens]], [[nft|NFTs]], [[stablecoin|stablecoins]], the whole of DeFi. But arbitrary programs bring a famous problem: you cannot generally predict whether a program will ever finish (computer science\'s *halting problem*). A network of thousands of [[node|nodes]] cannot risk one infinite loop freezing them all — so every operation is **metered and paid for**, which is exactly why [[gas]] exists. The Ethereum lesson, next, builds this machine in detail.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The price of expressiveness',
    },
    {
      type: 'paragraph',
      text: 'Here is the axis\'s core tradeoff, and it should sound familiar from the trilemma: **everything a chain can do is also a way it can fail.** A platform that runs arbitrary code hosts arbitrary bugs — billions have been lost to smart-contract exploits that a payment-only ledger structurally could not host. More code, more upgrades, more complexity: a larger surface for both attackers and mistakes.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Payment chains** — minimal scope, minimal attack surface, slow deliberate change. Trust comes from what the chain *cannot* do.',
        '**Smart-contract platforms** — maximal scope and composability, constant evolution. Trust must extend to every contract you touch, not just the chain.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'A vault and a workshop',
      text: 'A vault is valuable because almost nothing can happen inside it; a workshop is valuable because almost anything can. Asking "which is better?" misses the point — you store your savings in one and build in the other. Many experienced holders treat Bitcoin and smart-contract platforms exactly this way.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The risk lives at two layers',
      text: 'On a payment chain, your main risks are key management and the chain itself. On a smart-contract platform, every dApp adds a second layer: the chain can work flawlessly while a contract you approved drains your wallet. This is why the security habits from tier 1 — and the approval hygiene — matter twice as much on programmable chains.',
    },
    {
      type: 'paragraph',
      text: 'It is a spectrum rather than a binary — Bitcoin\'s limited scripts enable real constructions, and some chains sit deliberately in between — but the two poles anchor every comparison. The next two lessons visit the smart-contract pole\'s flagship answers: Ethereum\'s world computer, then Solana\'s speed machine — and the module closes by putting every chain you\'ve met side by side.',
    },
  ],

  takeaways: [
    'The third axis is scope: purpose-built payment ledgers vs Turing-complete smart-contract platforms.',
    'Bitcoin\'s scripting is deliberately limited (no loops, no arbitrary programs) — a small attack surface is the feature.',
    'Turing-completeness enables tokens, NFTs, and DeFi — and requires gas metering because programs can\'t be guaranteed to halt.',
    'Expressiveness is attack surface: contract exploits are a failure mode payment-only chains structurally avoid.',
    'Vault vs workshop: the designs serve different jobs, and on platforms your risk includes every contract you touch.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Why is Bitcoin\'s scripting language deliberately limited (e.g. no loops)?',
        options: [
          'Its developers could not implement loops',
          'Keeping spending conditions simple and bounded minimizes the attack surface and keeps the chain predictable',
          'Loops are patented',
          'To make transactions cheaper to broadcast',
        ],
        answer: 1,
        explanation: 'The restriction is a design choice: a chain that can only do simple, bounded things has very few ways to be exploited or surprised.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'A chain able, in principle, to run any program is called ______-complete.',
        accept: ['turing'],
        explanation: 'Turing-completeness is the line between purpose-built ledgers and general-purpose smart-contract platforms.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Why does Turing-completeness force a chain to meter execution with gas?',
        options: [
          'To pay licensing fees',
          'You can\'t generally predict if a program will halt, so unmetered execution could freeze every node in an infinite loop',
          'Gas makes programs run faster',
          'It is required for proof of stake',
        ],
        answer: 1,
        explanation: 'The halting problem means no general test for "will this finish?" — charging per operation guarantees every program eventually stops or runs out of fuel.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Smart-contract exploits are a risk category that payment-only chains largely avoid by design.',
        answer: true,
        explanation: 'True — a chain that cannot host arbitrary programs cannot host their bugs. That structural safety is what the reduced functionality buys.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'On a smart-contract platform, the chain itself working correctly guarantees the dApps on it are safe.',
        answer: false,
        explanation: 'False — contracts are a second risk layer. The chain can execute a malicious or buggy contract flawlessly; that is why approval hygiene matters.',
      },
    ],
  },
}
