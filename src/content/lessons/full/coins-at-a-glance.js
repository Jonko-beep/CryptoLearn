/**
 * FULL LESSON — comparative survey of additional chains, applying the same axes
 * (data model, consensus, finality) introduced earlier. Embeds the full
 * coin-comparison table with no highlight so learners can sort/filter freely.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'coins-at-a-glance',
  tier: 2,
  title: 'Other Chains at a Glance',
  summary: 'Litecoin, Cardano, Avalanche, Polkadot, Cosmos, Monero & XRP — one idea each.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Once you can read a chain along a few axes — [[utxo|data model]], [[consensus|consensus]], block time, [[finality]], and smart-contract support — most "alt" chains become quick to summarize. Here is the one defining idea behind several major ones.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Variations on Bitcoin',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Litecoin** — an early Bitcoin fork using the **Scrypt** [[pow|Proof of Work]] algorithm and faster ~2.5-minute blocks. Same UTXO model, tuned for quicker, cheaper payments.',
        '**Monero** — privacy-first. Ring signatures, stealth addresses, and confidential amounts hide sender, receiver, and value, making transactions unlinkable by default.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Smart-contract alternatives',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Cardano** — research-driven. Uses **eUTXO** (an extended UTXO model that supports contracts) and the peer-reviewed **Ouroboros** [[pos|Proof of Stake]] protocol.',
        '**Avalanche** — multiple built-in chains plus customizable **subnets**, with a fast, repeated-sampling consensus that reaches finality in seconds.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Networks of chains',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Polkadot** — a central **relay chain** provides shared security to many specialized **parachains** that plug into it.',
        '**Cosmos** — an "internet of blockchains": independent chains built with **Tendermint** [[bft|BFT]] consensus, connected by the IBC messaging protocol. Deterministic, instant finality.',
        '**XRP Ledger** — payment-focused, using a trusted set of validators and a fast voting-based consensus rather than mining.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Read the table like a pro',
      text: 'Notice the patterns: BFT-style chains (Cosmos, Avalanche) get fast deterministic finality but coordinate among a known validator set. PoW chains (Bitcoin, Litecoin, Monero) get strong decentralization but lower throughput. Every row is a different point on the trilemma.',
    },
    {
      // INTERACTIVE WIDGET EMBED — full sortable/filterable comparison, no highlight.
      type: 'widget',
      widget: 'coin-comparison',
      caption: 'Sort by any column or filter by smart-contract support to spot the tradeoffs yourself.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Numbers are approximate',
      text: 'Throughput (TPS) and block times are nominal/representative figures used for comparison and learning — real-world performance varies with network conditions and changes as chains upgrade.',
    },
  ],

  takeaways: [
    'Litecoin and Monero are UTXO/PoW chains tuned for speed and privacy respectively.',
    'Cardano (eUTXO + Ouroboros) and Avalanche (subnets) are alternative smart-contract platforms.',
    'Polkadot and Cosmos are architectures for connecting many chains, with shared vs. sovereign security.',
    'BFT-style consensus gives fast deterministic finality among a known validator set; PoW favors open decentralization.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Which chain is defined primarily by privacy features like ring signatures and stealth addresses?',
        options: ['Litecoin', 'Monero', 'Cardano', 'XRP Ledger'],
        answer: 1,
        explanation: 'Monero hides sender, receiver, and amount by default, making transactions unlinkable.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Polkadot\'s architecture is best described as:',
        options: [
          'A single monolithic chain',
          'A relay chain providing shared security to many parachains',
          'A privacy coin',
          'A Bitcoin fork',
        ],
        answer: 1,
        explanation: 'Polkadot\'s relay chain secures specialized parachains that connect into it.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'Cosmos chains use Tendermint BFT consensus, which provides fast, deterministic finality.',
        answer: true,
        explanation: 'True — Tendermint BFT finalizes blocks deterministically within seconds among its validator set.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Cardano\'s "eUTXO" model is notable because it:',
        options: [
          'Removes Proof of Stake',
          'Extends the UTXO model to support smart contracts',
          'Is identical to Ethereum\'s account model',
          'Eliminates transaction fees',
        ],
        answer: 1,
        explanation: 'eUTXO extends Bitcoin-style UTXOs with extra data so they can support programmable contracts.',
      },
    ],
  },
}
