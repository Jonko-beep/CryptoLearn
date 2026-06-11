/**
 * FULL LESSON — Stablecoins. The three peg designs (fiat-backed,
 * crypto-backed, algorithmic), what actually holds each peg, the Terra/UST
 * collapse as the cautionary tale, and the risk checklist. Builds directly
 * on coins-vs-tokens. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'stablecoins',
  tier: 2,
  title: 'Stablecoins',
  summary: 'Fiat-backed, crypto-backed, and algorithmic pegs.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'You now know what a [[token]] is — and the most-used tokens in all of crypto are [[stablecoin|stablecoins]]: tokens designed to hold a fixed value, almost always **one US dollar**. They are the quiet workhorses of the ecosystem: a refuge from volatility, the quote currency on most trading pairs, a cheap rail for global payments, and a basic building block of DeFi. Trillions of dollars settle in them.',
    },
    {
      type: 'paragraph',
      text: 'But "stable" is a design goal, not a guarantee. Everything that matters about a stablecoin comes down to one question: **what actually holds the peg?** There are three answers.',
    },
    {
      type: 'heading',
      level: 2,
      text: '1. Fiat-backed: a dollar in a bank account',
    },
    {
      type: 'paragraph',
      text: 'The dominant design (USDT, USDC). A company issues tokens and promises each is redeemable for $1, holding reserves — cash and short-term US Treasuries — to back them. The peg holds through **redemption arbitrage**: if the token dips to $0.99, traders buy it and redeem for $1.00 until the price snaps back.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'You are trusting the issuer',
      text: 'A fiat-backed stablecoin is only as good as its reserves and its issuer\'s honesty — verified (imperfectly) through attestations and audits. It is also centralized: issuers can and do **freeze tokens** at specific addresses. That is a feature for law enforcement and a bug for censorship resistance.',
    },
    {
      type: 'heading',
      level: 2,
      text: '2. Crypto-backed: overcollateralized on-chain',
    },
    {
      type: 'paragraph',
      text: 'The decentralized alternative (DAI is the classic). Instead of a bank account, the backing is **crypto locked in a [[smart-contract|smart contract]]** — and because that collateral is volatile, the system demands *more* than $1 of it per $1 issued. Deposit, say, $150 of ETH to mint $100 of stablecoin; if your collateral\'s value falls too far, the contract liquidates it to keep the system solvent. Everything is verifiable on-chain — no trust in a company\'s bank statement — at the cost of capital inefficiency and exposure to crypto market crashes.',
    },
    {
      type: 'heading',
      level: 2,
      text: '3. Algorithmic: a peg held by incentives',
    },
    {
      type: 'paragraph',
      text: 'The third design tries to hold $1 with **no full backing at all** — just code that expands and contracts supply, usually by letting the stablecoin be swapped for a sister token. It is elegant on a whiteboard and has failed catastrophically in practice: the mechanism depends on permanent confidence in the sister token.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Case study: the UST death spiral (May 2022)',
      text: 'Terra\'s UST, then a top-five stablecoin, could always be swapped for $1 of LUNA. When UST slipped below the peg, holders fled — minting oceans of LUNA, crashing its price, which destroyed confidence further and minted even more. In one week roughly $40B of value evaporated. When you hear "algorithmic stablecoin," think of this [[depeg]] spiral first.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The risk checklist',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '[[depeg|Depeg]] risk — every stablecoin can trade away from $1 under stress; the design determines whether it snaps back or spirals.',
        '**Reserve/counterparty risk** — for fiat-backed: are the reserves real, liquid, and audited? Who holds them?',
        '**Freezing & censorship** — centralized issuers can blacklist addresses; truly decentralized designs can\'t, but carry collateral risk instead.',
        '**Contract risk** — crypto-backed designs add smart-contract and liquidation-engine risk on top.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Regulation has arrived',
      text: 'Stablecoins grew big enough that governments moved in: the EU\'s MiCA framework and the US\'s 2025 federal stablecoin legislation now set reserve, audit, and licensing requirements for issuers. Expect the fiat-backed giants to look ever more like regulated payment companies — safer in some ways, more centralized in others.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'One habit',
      text: 'Before holding any meaningful amount of a stablecoin, find out which of the three designs it is and what backs it. "Stable" is a claim about a mechanism — read the mechanism, not the name.',
    },
  ],

  takeaways: [
    'Stablecoins are tokens engineered to hold a fixed value (usually $1) — the workhorse asset of trading, payments, and DeFi.',
    'Fiat-backed (USDT, USDC): redeemable against real-world reserves; trust the issuer, accept freezability.',
    'Crypto-backed (DAI): overcollateralized and verifiable on-chain; capital-inefficient and exposed to crypto crashes.',
    'Algorithmic: a peg held only by incentives — UST\'s 2022 death spiral is the defining cautionary tale.',
    'Judge any stablecoin by its mechanism: what holds the peg, what breaks it, and who can freeze it.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What keeps a fiat-backed stablecoin like USDC near $1?',
        options: [
          'A law that fixes its price',
          'Redemption arbitrage — traders can redeem tokens for $1 of reserves, so price dips get bought back up',
          'Miners vote on its price',
          'It is pegged to Bitcoin',
        ],
        answer: 1,
        explanation: 'Because each token is redeemable for $1 from reserves, any discount creates a profit for arbitrageurs, pulling the price back to the peg.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Why do crypto-backed stablecoins like DAI require MORE than $1 of collateral per $1 issued?',
        options: [
          'To pay higher staking rewards',
          'Because the crypto collateral is volatile — the buffer absorbs price drops before the system becomes insolvent',
          'Regulators require exactly 150%',
          'To make minting impossible',
        ],
        answer: 1,
        explanation: 'Overcollateralization is the safety margin: collateral can lose value without the issued stablecoins becoming unbacked, with liquidations as the backstop.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'When a stablecoin trades significantly away from its target value, it is said to ______.',
        accept: ['depeg', 'de-peg', 'lose its peg', 'lose the peg'],
        explanation: 'A depeg can be a brief wobble (arbitrage pulls it back) or, if confidence collapses, a death spiral like UST\'s.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Centralized stablecoin issuers can freeze tokens held at specific addresses.',
        answer: true,
        explanation: 'True — fiat-backed issuers build in blacklisting. It enables law enforcement and breaks censorship resistance; decentralized designs trade this for collateral risk.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'The 2022 Terra/UST collapse showed that algorithmic stablecoins are the most robust design under stress.',
        answer: false,
        explanation: 'False — UST\'s incentive-only peg unraveled into a death spiral that erased roughly $40B in a week, the defining failure of the algorithmic design.',
      },
    ],
  },
}
