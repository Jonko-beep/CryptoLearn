/**
 * FULL LESSON — Bridges, DAOs & Governance. Crypto's two coordination
 * problems: moving assets between sovereign chains (lock-and-mint, wrapped
 * assets, the bridge-hack record) and steering protocols (DAOs, token-weighted
 * voting, plutocracy/apathy/rented-vote failure modes). Hands off to the
 * regulation lesson. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'bridges-daos-governance',
  tier: 3,
  title: 'Bridges, DAOs & Governance',
  summary: 'Moving assets across chains and on-chain decision-making.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'Blockchains are sovereign islands: Bitcoin\'s ledger knows nothing of Ethereum\'s, and neither can reach into Solana\'s. And the protocols living on those islands face their own question — who decides how they change? This lesson covers crypto\'s two great coordination machines: **bridges**, which move value between chains, and **DAOs**, which govern the protocols themselves. Both work — and both have produced some of crypto\'s most expensive failures.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Bridges: lock here, mint there',
    },
    {
      type: 'paragraph',
      text: 'An asset cannot literally leave its chain — BTC exists only on Bitcoin\'s ledger. A [[bridge]] creates the next best thing with a **lock-and-mint** pattern: deposit the asset with the bridge on chain A (locked in a contract or with a custodian), and an equivalent [[wrapped-token|wrapped token]] is minted on chain B. Going home reverses it: **burn** the wrapped token, and the original is released. The wrapped version is a [[token]] like any other — tradable, poolable, usable in DeFi — but its value rests entirely on the locked backing actually being there.',
    },
    {
      type: 'paragraph',
      text: 'The classic example is **wBTC**: real bitcoin held by a custodian, represented by an [[erc-20|ERC-20]] on Ethereum so BTC value can participate in DeFi. Bridges differ mainly in *who you are trusting* to hold the lock: a single custodian (simple, centralized), a committee of signers (the common middle), or contracts that verify the other chain\'s state directly (trust-minimized, hardest to build).',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Bridges are honeypots — and the record proves it',
      text: 'A bridge concentrates everything its users locked into one target. The result: several of the largest hacks in crypto history were bridges — Ronin (~$600M) and Wormhole (~$320M) in 2022 alone, both via compromised signers or contract flaws. When a bridge is drained, its wrapped tokens become IOUs on an empty vault. Hold wrapped assets knowingly: you carry the bridge\'s risk, not just the asset\'s.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'DAOs: a treasury with rules instead of managers',
    },
    {
      type: 'paragraph',
      text: 'A [[dao|DAO]] (decentralized autonomous organization) is an attempt to run an organization the way DeFi runs finance: the treasury sits in [[smart-contract|smart contracts]], and control belongs to holders of a [[governance-token|governance token]] rather than a board. Most major DeFi protocols are steered this way. The real-world business of a DAO is concrete: adjusting protocol parameters (fees, collateral ratios), spending treasury funds (grants, development), and approving contract upgrades.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How a decision actually happens',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Proposal** — a member posts a concrete change, usually after forum discussion and an informal "temperature check" vote.',
        '**On-chain vote** — token-weighted: one token, one vote. A minimum turnout (**quorum**) must participate for the result to bind.',
        '**Timelock & execution** — approved changes wait in a delay period before executing, so everyone can see — and react to — exactly what is coming.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Because most holders never vote, many DAOs support **vote delegation** — handing your voting weight to an active participant you trust, exactly parallel to staking [[delegation]] from the validators lesson: outsource the work, keep the stake, inherit your delegate\'s judgment.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Where governance breaks',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Plutocracy** — one token, one vote means [[whale|whales]] rule. A "decentralized" protocol whose supply is concentrated (check the tokenomics lesson\'s distribution questions) is governed by a handful of wallets.',
        '**Apathy** — turnout is chronically low, so quorums are set low, so small coordinated groups can pass proposals most holders never read.',
        '**Rented votes** — the last lesson\'s warning made real: if voting power is just a token balance, it can be borrowed. In 2022, an attacker flash-loaned a voting majority in the Beanstalk DAO and passed a proposal sending themselves the treasury — roughly $80M gone in one transaction.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why timelocks are the real safety net',
      text: 'Beanstalk\'s fatal flaw was allowing immediate execution. A timelock means even a hijacked vote must wait days in public view before taking effect — time for users to exit and honest holders to respond. When evaluating any DAO-governed protocol you depend on, ask two questions: how concentrated is the voting supply, and is there a timelock between a vote passing and the treasury moving?',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Governance is part of due diligence',
      text: 'The picking-coins framework asked what a token entitles you to — for governance tokens, the honest answer is "a vote whose weight depends on everyone else\'s apathy." Before relying on (or buying into) a DAO-run protocol, skim its last five proposals: who proposed, how many voted, and whether anything was contested. Five minutes of reading reveals whether governance is real or theater.',
    },
    {
      type: 'paragraph',
      text: 'Bridges and DAOs both replace trusted institutions with mechanisms — and mechanisms have edge cases where institutions had judgment. They also pose a question no contract can answer: when a DAO\'s vote moves millions, *who is legally responsible*? That question belongs to the final lesson: regulation and taxes.',
    },
  ],

  takeaways: [
    'Assets cannot leave their chain — bridges lock the original and mint a wrapped token elsewhere; burning it releases the original.',
    'A wrapped token is an IOU on the bridge\'s backing: bridge risk rides on top of asset risk, and bridges are crypto\'s biggest hack targets.',
    'DAOs put a protocol\'s treasury and rules under token-weighted governance: propose, vote with quorum, then timelocked execution.',
    'Governance fails by plutocracy (whales rule), apathy (low turnout), and rented votes (flash-loaned majorities — Beanstalk, 2022).',
    'Judge a DAO by supply concentration, real proposal turnout, and whether a timelock stands between votes and the treasury.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'How does a lock-and-mint bridge move an asset "across" chains?',
        options: [
          'It physically transfers the coins between ledgers',
          'It locks the asset on the origin chain and mints a wrapped representation on the destination chain',
          'It converts the asset to fiat and back',
          'It asks validators on both chains to vote',
        ],
        answer: 1,
        explanation: 'The original never leaves its ledger — the bridge locks it and issues a wrapped token elsewhere, redeemable by burning.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'If a bridge is hacked and drained, the wrapped tokens it issued retain their full backing.',
        answer: false,
        explanation: 'False — wrapped tokens are claims on the bridge\'s locked collateral. Drain the vault and the wrapped supply becomes an IOU on nothing.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'The delay period between a governance vote passing and the change actually executing is called a ______.',
        accept: ['timelock', 'time lock', 'time-lock'],
        explanation: 'Timelocks give users and honest holders time to see — and react to — an approved change before it touches the treasury. Beanstalk lacked one.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'The 2022 Beanstalk attack demonstrated which governance failure mode?',
        options: [
          'A bridge custodian stealing funds',
          'Voting power is a token balance — so an attacker flash-loaned a majority and voted the treasury to themselves',
          'A quorum set too high to ever pass proposals',
          'Validators censoring votes',
        ],
        answer: 1,
        explanation: 'Rented votes: with immediate execution and token-weighted voting, a one-transaction borrowed majority emptied roughly $80M.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Low voter turnout in DAOs makes it easier for small coordinated groups to pass proposals.',
        answer: true,
        explanation: 'True — chronic apathy forces low quorums, so a modest, organized token bloc can bind a protocol most holders never voted on.',
      },
    ],
  },
}
