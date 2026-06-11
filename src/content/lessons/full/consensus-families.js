/**
 * FULL LESSON — Consensus Families. Surveys how PoW, PoS, BFT-style voting,
 * and PoH each answer "who adds the next block?" — framing consensus as sybil
 * resistance + an agreement rule. Reuses the coin-comparison widget so the
 * families can be seen side by side. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'consensus-families',
  tier: 2,
  title: 'Consensus Families',
  summary: 'PoW, PoS, PoH and BFT-style — how each picks the next block.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Every blockchain must answer the same question: **who gets to add the next block, and why should everyone else accept it?** The answer is its [[consensus|consensus mechanism]]. You have already met Bitcoin\'s answer — [[pow|Proof of Work]] — in depth. This lesson zooms out to the whole family tree, so any new chain you encounter slots into a pattern you recognize.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Two jobs every mechanism must do',
    },
    {
      type: 'paragraph',
      text: 'In an open network, one attacker can spin up thousands of fake identities for free — a **sybil attack**. So consensus really has two jobs:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Make influence expensive** (sybil resistance) — tie block production to something that can\'t be faked cheaply: burned energy, locked capital.',
        '**Converge on one history** (the agreement rule) — given competing blocks, give every honest [[node]] the same way to pick a winner: heaviest chain, a vote, a schedule.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Proof of Work: pay with energy',
    },
    {
      type: 'paragraph',
      text: 'In [[pow|PoW]], influence costs **electricity**. Miners race to find a valid block hash; the heaviest-work chain wins. Anyone with hardware can join or leave at any time — no registration, no permission — which is why PoW chains (Bitcoin, Litecoin, Monero) are the most open. The price is energy consumption and slow, **probabilistic** [[finality]]: confidence grows with [[confirmation|confirmations]] but never reaches 100%.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Proof of Stake: pay with capital at risk',
    },
    {
      type: 'paragraph',
      text: 'In [[pos|PoS]], influence costs **locked capital**. [[validator|Validators]] bond tokens as a [[staking|stake]]; the protocol pseudo-randomly selects proposers, weighted by stake, and provable misbehavior is punished by **slashing** — destroying part of the bond. Security comes from money at risk instead of electricity burned. Variants abound: delegated PoS lets holders back a validator with their tokens, and Polkadot\'s NPoS spreads stake across an elected set.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Same threat, different cost',
      text: 'To attack PoW you must out-buy the world\'s hashpower — and your hardware keeps its value. To attack PoS you must buy a huge share of the token — and the attack itself destroys your stake\'s value. Both designs make rewriting history economically self-defeating, through different doors.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'BFT-style voting: agree by committee',
    },
    {
      type: 'paragraph',
      text: '[[bft|BFT]]-style chains take a different route: a **known validator set** votes on each block in rounds, and once more than two-thirds sign, the block is final — instantly and **deterministically**. Tendermint (now maintained as CometBFT, used across Cosmos) is the classic example; XRP Ledger\'s validator voting is a cousin. The catch: all that voting traffic limits how large the validator set can practically grow, so openness is bounded in a way PoW\'s isn\'t.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Proof of History: a clock, not a family',
    },
    {
      type: 'paragraph',
      text: 'Solana\'s [[poh|Proof of History]] often gets listed alongside these, but as you saw in its lesson, it is not standalone consensus — it is a **verifiable clock** that orders events cheaply, letting Solana\'s underlying [[pos|PoS]] run much faster. It is an accelerator bolted onto a family, not a new family.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Three questions to ask any chain',
      text: 'When you meet a new consensus design, ask: ① Who can participate — anyone, or a fixed set? ② What does cheating cost — energy, stake, reputation? ③ How final is final — probabilistic or deterministic? Those three answers tell you most of what matters.',
    },
    {
      // INTERACTIVE WIDGET EMBED — comparison table; the consensus column is the star here.
      type: 'widget',
      widget: 'coin-comparison',
      caption: 'Sort by the Consensus column and compare finality and openness across the families.',
    },
    {
      type: 'paragraph',
      text: 'Notice the pattern in the table: open participation, fast finality, and high throughput never all appear in the same row. That tension has a name — the **blockchain trilemma** — and it is the subject of the next lesson.',
    },
  ],

  takeaways: [
    'Consensus does two jobs: make influence expensive (sybil resistance) and give everyone the same rule for picking one history.',
    'PoW pays with energy: maximally open entry, probabilistic finality.',
    'PoS pays with capital at risk: validators bond stake and are slashed for misbehavior.',
    'BFT-style chains vote with a known validator set: instant deterministic finality, but bounded set size.',
    'Proof of History is a verifiable clock that speeds up PoS — an accelerator, not a separate family.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is the purpose of sybil resistance in a consensus mechanism?',
        options: [
          'To encrypt transactions',
          'To make influence over block production expensive, so fake identities don\'t help an attacker',
          'To speed up block propagation',
          'To eliminate transaction fees',
        ],
        answer: 1,
        explanation: 'Identities are free to create; consensus ties influence to something costly (energy, stake) so thousands of fake nodes grant no extra power.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'In Proof of Stake, provable misbehavior is punished by destroying part of a validator\'s bond — a penalty called ______.',
        accept: ['slashing', 'a slash', 'slash'],
        explanation: 'Slashing burns part of the offending validator\'s stake, making attacks economically self-defeating.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Which family reaches instant, deterministic finality through rounds of voting among a known validator set?',
        options: ['Proof of Work', 'BFT-style consensus (e.g. Tendermint/CometBFT)', 'Proof of History', 'Merged mining'],
        answer: 1,
        explanation: 'BFT-style chains finalize a block the moment more than two-thirds of the validator set signs it.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Proof of History is a standalone consensus mechanism that replaces Proof of Stake.',
        answer: false,
        explanation: 'False — PoH is a verifiable clock that orders events cheaply; Solana still relies on Proof of Stake to select validators and finalize blocks.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Proof of Work\'s finality is probabilistic: confidence grows with confirmations but never reaches exactly 100%.',
        answer: true,
        explanation: 'True — a heavier chain could in principle always appear, so PoW finality strengthens with depth rather than arriving at an instant.',
      },
    ],
  },
}
