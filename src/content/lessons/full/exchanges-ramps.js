/**
 * FULL LESSON — Exchanges & Fiat Ramps. How most people enter crypto: buying
 * via a centralized exchange, KYC, fees, CEX vs DEX, and the "withdraw to
 * self-custody" rule. Text + callouts + lists; quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'exchanges-ramps',
  tier: 1,
  title: 'Exchanges & Fiat Ramps',
  summary: 'Centralized exchanges and how to move between dollars and crypto.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'For most people, the journey into crypto starts at an **exchange** — the bridge between traditional money and the [[blockchain]]. Before you can hold [[cryptocurrency]], you usually have to buy it somewhere.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What an exchange does',
    },
    {
      type: 'paragraph',
      text: 'An [[exchange]] is a marketplace where you buy, sell, and trade crypto. The most common type is a **centralized exchange** ([[cex|CEX]]) — a company that matches buyers with sellers and, crucially, holds your funds while you use it. It feels much like a brokerage or banking app.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Fiat on-ramps and off-ramps',
    },
    {
      type: 'paragraph',
      text: 'An exchange is also where most people use a **fiat ramp** — the on/off switch between government money and crypto. [[fiat|Fiat]] just means traditional, government-issued currency like the US dollar.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'An [[on-ramp]] converts **fiat → crypto** (you deposit dollars, buy bitcoin).',
        'An [[off-ramp]] converts **crypto → fiat** (you sell, withdraw dollars to your bank).',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'KYC: identity verification',
    },
    {
      type: 'paragraph',
      text: 'Before a regulated exchange lets you trade, it will ask you to verify your identity — a process called [[kyc|KYC]] ("Know Your Customer"). Exchanges do this to comply with anti-money-laundering laws. It means a centralized exchange is **not anonymous**: your real identity is linked to your account and activity.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Fees to watch',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Trading fee** — a small percentage on each buy or sell (often lower for "maker" limit orders than "taker" market orders).',
        '**Spread** — the gap between the buy and sell price, an indirect cost especially on "instant buy" buttons.',
        '**Withdrawal / network fee** — charged when you move crypto off the exchange to your own wallet.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'CEX vs DEX',
    },
    {
      type: 'paragraph',
      text: 'A [[dex|decentralized exchange]] (DEX) is the alternative: it lets you trade directly from your own wallet through smart contracts, with no company holding your funds and usually no KYC. In short — a **CEX** is custodial and beginner-friendly; a **DEX** is self-custodial and permissionless. We cover DEXs in depth later under DeFi.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The golden rule: don\'t leave funds on the exchange',
    },
    {
      type: 'paragraph',
      text: 'When your crypto sits on a CEX, the exchange holds the keys — the account is [[custodial]]. Remember the rule from earlier: **not your keys, not your coins**. Exchanges can be hacked, freeze withdrawals, or even collapse, and several high-profile ones have. Use an exchange to buy and trade, then **withdraw anything you intend to hold** to your own [[non-custodial]] wallet.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'An exchange is a doorway, not a vault',
      text: 'It is convenient to buy and sell on a CEX, but it is not the safest place to store meaningful amounts long-term. Treat it like a currency-exchange counter: pass through it, don\'t live in it.',
    },
  ],

  takeaways: [
    'An exchange is a marketplace to buy, sell, and trade crypto; a CEX also custodies your funds.',
    'On-ramps convert fiat → crypto; off-ramps convert crypto → fiat.',
    'Regulated exchanges require KYC, so a CEX account is tied to your real identity.',
    'CEX = custodial and easy; DEX = self-custodial and permissionless.',
    'Withdraw long-term holdings to your own non-custodial wallet — don\'t leave them on the exchange.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'fib',
        prompt: 'Converting dollars into crypto uses a fiat ______ (the on/off switch into crypto).',
        accept: ['on-ramp', 'on ramp', 'onramp', 'ramp'],
        explanation: 'An on-ramp converts fiat → crypto; an off-ramp goes the other way.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Why do regulated exchanges require KYC?',
        options: [
          'To make trading faster',
          'To comply with anti-money-laundering laws by verifying your identity',
          'To give you a discount on fees',
          'Because the blockchain requires it',
        ],
        answer: 1,
        explanation: 'KYC ties your verified identity to the account to satisfy AML regulations — so a CEX is not anonymous.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'While your crypto sits on a centralized exchange, the exchange controls the private keys.',
        answer: true,
        explanation: 'True — a CEX is custodial. "Not your keys, not your coins" applies to funds left on an exchange.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'What is the recommended way to store crypto you intend to hold long-term?',
        options: [
          'Leave it on the exchange for convenience',
          'Withdraw it to your own non-custodial wallet',
          'Spread it across several exchanges',
          'Convert it back to fiat immediately',
        ],
        answer: 1,
        explanation: 'Move long-term holdings off the exchange into self-custody to avoid hacks, freezes, and exchange failures.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A decentralized exchange (DEX) lets you trade directly from your own wallet without a company holding your funds.',
        answer: true,
        explanation: 'True — a DEX is non-custodial, using smart contracts to trade peer-to-peer from your own wallet.',
      },
    ],
  },
}
