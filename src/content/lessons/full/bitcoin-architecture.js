/**
 * FULL LESSON — coin-by-coin architecture (Bitcoin). Applies the comparative
 * axes (data model, consensus, block time, finality) to a concrete chain and
 * embeds the interactive coin-comparison table widget.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'bitcoin-architecture',
  tier: 1,
  title: 'Bitcoin — Architecture',
  summary: 'UTXO accounting, SHA-256 Proof of Work, ~10-minute blocks, and Nakamoto consensus.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'Bitcoin is the original blockchain, and its design choices are deliberately conservative: do one thing — move and store value — and do it as securely as possible. Every later chain can be understood as a different set of answers to the questions Bitcoin first posed.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The UTXO model',
    },
    {
      type: 'paragraph',
      text: 'Bitcoin does **not** store account balances. Instead it tracks [[utxo|Unspent Transaction Outputs]] — discrete chunks of bitcoin, like physical coins and bills in a wallet. Your "balance" is just the sum of the UTXOs you can unlock with your keys.',
    },
    {
      type: 'paragraph',
      text: 'When you spend, you consume whole UTXOs as inputs and create new ones as outputs — including a **change** output back to yourself, exactly like getting change from a $20 bill. This model is simple to verify and naturally parallelizable, but it makes complex programmable logic awkward (which is part of why Ethereum chose differently).',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Coins vs. account balances',
      text: 'If you have UTXOs of 0.4 and 0.7 BTC and want to send 0.5, you spend BOTH (1.1 total), send 0.5 to the recipient, and receive ~0.6 back as a new change UTXO (minus the fee).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Proof of Work & Nakamoto consensus',
    },
    {
      type: 'paragraph',
      text: 'Bitcoin secures its ledger with [[pow|Proof of Work]]. Miners repeatedly hash a candidate block with different [[nonce|nonces]], searching for a [[sha-256|SHA-256]] output below a network target. Finding one is rare and expensive; verifying it is instant. The first miner to succeed broadcasts the block and earns the block reward plus fees.',
    },
    {
      type: 'paragraph',
      text: 'The rule for resolving disagreements is beautifully simple — **the chain with the most accumulated work wins**. This is [[consensus|Nakamoto consensus]]. There is no vote; honest miners simply build on the heaviest chain, and rewriting history means out-hashing the entire honest network.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Why ~10 minutes?',
      text: 'Bitcoin auto-adjusts mining difficulty every 2,016 blocks to keep the average block time near 10 minutes, regardless of how much mining power joins or leaves. Slow blocks are a feature: they give the global network time to agree.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Probabilistic finality',
    },
    {
      type: 'paragraph',
      text: 'Because a heavier chain could in principle appear, Bitcoin\'s [[finality]] is **probabilistic**: a transaction is never 100% final, but each new [[confirmation|confirmation]] makes reversal exponentially less likely. Six confirmations (~1 hour) is the long-standing rule of thumb for large payments.',
    },
    {
      type: 'paragraph',
      text: 'Put it together and Bitcoin\'s position on the [[trilemma|blockchain trilemma]] is clear: it maximizes **decentralization and security**, accepting low throughput (~7 transactions/sec) as the price. Compare it against other chains below.',
    },
    {
      // INTERACTIVE WIDGET EMBED — comparison table, highlighting Bitcoin.
      type: 'widget',
      widget: 'coin-comparison',
      props: { highlight: 'Bitcoin' },
      caption: 'Sort or filter to see how Bitcoin\'s tradeoffs compare to other chains.',
    },
  ],

  takeaways: [
    'Bitcoin tracks UTXOs (discrete coins), not account balances.',
    'Spending consumes whole UTXOs and produces a change output back to you.',
    'Proof of Work + Nakamoto consensus: the heaviest (most-work) chain wins, no voting.',
    'Difficulty retargets to keep ~10-minute blocks; finality is probabilistic and strengthens with confirmations.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'How does Bitcoin represent your balance?',
        options: [
          'A single number stored in your account',
          'The sum of Unspent Transaction Outputs (UTXOs) you can spend',
          'A line of credit from a validator',
          'A smart contract you deploy',
        ],
        answer: 1,
        explanation: 'Bitcoin uses the UTXO model — your balance is the total of the discrete unspent outputs you control.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'In Bitcoin, when miners disagree, the chain with the most accumulated Proof of Work is considered valid.',
        answer: true,
        explanation: 'True — this "heaviest chain wins" rule is the essence of Nakamoto consensus.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Why does Bitcoin target roughly 10-minute blocks?',
        options: [
          'Because SHA-256 takes 10 minutes to compute',
          'To give the global network time to propagate and agree on blocks; difficulty retargets to hold this pace',
          'It is a legal requirement',
          'Faster blocks are technically impossible',
        ],
        answer: 1,
        explanation: 'Difficulty adjusts every 2,016 blocks so average block time stays ~10 minutes, leaving room for global agreement.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Bitcoin offers deterministic finality, meaning a transaction is irreversible the instant it is included in a block.',
        answer: false,
        explanation: 'False — Bitcoin\'s finality is probabilistic. Reversal becomes exponentially less likely with each confirmation, but is never strictly zero.',
      },
    ],
  },
}
