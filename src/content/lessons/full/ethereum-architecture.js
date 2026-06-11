/**
 * FULL LESSON — coin-by-coin architecture (Ethereum). Contrasts the account
 * model and EVM against Bitcoin, and explains Proof of Stake + gas.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'ethereum-architecture',
  tier: 2,
  title: 'Ethereum — Architecture',
  summary: 'The account model, the EVM as a world computer, Proof of Stake, and gas.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'If Bitcoin is a purpose-built payment ledger, Ethereum is a **general-purpose computer**. Its goal was not just to move a coin, but to run arbitrary programs — [[smart-contract|smart contracts]] — that anyone can call and no one can shut down.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The account model',
    },
    {
      type: 'paragraph',
      text: 'Unlike Bitcoin\'s UTXOs, Ethereum uses an [[account-model|account model]]: every account has a balance stored directly in the global state, updated like a bank ledger. There are two account types — **externally-owned accounts** (controlled by a private key) and **contract accounts** (controlled by code).',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why accounts instead of UTXOs?',
      text: 'Smart contracts need persistent, mutable state — a balance that code can read and write directly. The account model maps onto that far more naturally than a pile of discrete UTXOs.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The EVM: a world computer',
    },
    {
      type: 'paragraph',
      text: 'Every Ethereum node runs the [[evm|Ethereum Virtual Machine]], a deterministic runtime that executes contract bytecode identically everywhere. Deploying a contract is publishing a program to a computer that thousands of machines run in lockstep. "EVM-compatible" chains (Polygon, Arbitrum, BNB Chain, Avalanche C-Chain) reuse this same runtime, so the same contracts and tools work across them.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Gas: metering computation',
    },
    {
      type: 'paragraph',
      text: 'A shared world computer needs a way to stop infinite loops and price scarce computation. That mechanism is [[gas]]. Every EVM operation costs a fixed amount of gas; your transaction specifies how much gas you will buy and the price per unit. Run out of gas and the transaction reverts — but you still pay for the work done.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Fees follow demand',
      text: 'Gas price spikes when blockspace is in demand. A simple transfer is cheap; a complex DeFi interaction during a busy period can cost far more. Fees are paid in ETH regardless of what token you are moving.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Proof of Stake',
    },
    {
      type: 'paragraph',
      text: 'In 2022\'s "Merge", Ethereum replaced mining with [[pos|Proof of Stake]]. [[validator|Validators]] lock up at least 32 ETH as a [[staking|stake]] (since 2025\'s Pectra upgrade, a single validator can stake up to 2,048 ETH); the protocol pseudo-randomly selects one to propose each block while others attest to it. Misbehavior is punished by **slashing** — destroying part of the stake. Security now comes from capital at risk rather than electricity burned.',
    },
    {
      type: 'paragraph',
      text: 'Ethereum\'s PoS also adds checkpoints that give it **economic finality** every couple of epochs — stronger than Bitcoin\'s purely probabilistic model, though it leans on a more complex protocol. On the [[trilemma]], Ethereum prioritizes security and programmability, and pushes scalability outward to Layer 2 rollups (a later lesson).',
    },
  ],

  takeaways: [
    'Ethereum uses an account model (direct balances), enabling mutable contract state.',
    'The EVM is a shared, deterministic runtime; EVM-compatible chains reuse it.',
    'Gas meters and prices computation, preventing infinite loops; fees are paid in ETH.',
    'Proof of Stake secures Ethereum via staked capital and slashing instead of mining.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'The main reason Ethereum chose an account model over Bitcoin\'s UTXO model is:',
        options: [
          'Accounts use less storage',
          'Smart contracts need persistent, directly mutable state',
          'It is required by Proof of Stake',
          'UTXOs cannot represent ETH',
        ],
        answer: 1,
        explanation: 'Contracts need a balance/state that code can read and write directly — the account model fits that far better.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'The runtime that executes Ethereum smart contracts identically on every node is the ___ (three-letter abbreviation).',
        accept: ['evm'],
        explanation: 'The EVM — Ethereum Virtual Machine — runs contract bytecode deterministically across all nodes.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'If a transaction runs out of gas, it reverts and you pay nothing.',
        answer: false,
        explanation: 'False — the transaction reverts, but you still pay for the computation already performed.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Under Proof of Stake, what deters validators from cheating?',
        options: [
          'The cost of electricity',
          'Slashing — losing part of their staked capital',
          'A government regulator',
          'Nothing; it relies on goodwill',
        ],
        answer: 1,
        explanation: 'Validators put capital at risk; provable misbehavior is punished by slashing their stake.',
      },
    ],
  },
}
