/**
 * FULL LESSON — The Blockchain Trilemma. Names the tension implied by the
 * consensus-families lesson: decentralization vs security vs scalability,
 * why optimizing two pressures the third, and how modern designs (rollups,
 * sharding, app-chains) try to bend the triangle. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'blockchain-trilemma',
  tier: 2,
  title: 'The Blockchain Trilemma',
  summary: 'Decentralization vs security vs scalability — why you can\'t max all three.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'The last lesson ended with an observation: open participation, fast finality, and high throughput never show up together. That tension has a name — the [[trilemma|blockchain trilemma]], a term popularized by Ethereum\'s co-founder Vitalik Buterin. It says a chain can realistically optimize **two** of three properties, and the third pays for it.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The three corners',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Decentralization** — how many independent parties run [[node|nodes]] and validate, and how cheap it is to join them. The more (and cheaper), the harder the chain is to capture, censor, or shut down.',
        '**Security** — the cost of attacking the chain: rewriting history, censoring transactions, or forging state. Measured in [[hashrate]] for PoW or value staked for [[pos|PoS]].',
        '**Scalability** — how many transactions the chain handles, how fast, and how cheaply. What users feel as throughput, latency, and fees.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why the corners fight',
    },
    {
      type: 'paragraph',
      text: 'The conflict is physical, not ideological. To scale, a chain must process more data faster — which demands beefier hardware and better bandwidth from every validating node. Raise those requirements and fewer people can afford to participate: **scalability eats decentralization**. Keep requirements low so anyone\'s laptop can validate, and the whole network moves at the pace of modest hardware: **decentralization caps scalability**.',
    },
    {
      type: 'paragraph',
      text: 'Consensus adds its own version: [[bft|BFT]] voting gets faster with fewer validators, and slower the more you add. There is no parameter setting that maximizes everything — only different points on the triangle.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The triangle in the wild',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Bitcoin** — maxes decentralization + security: anyone can run a node on cheap hardware, but throughput is ~7 transactions/sec.',
        '**Solana** — maxes scalability + security: sub-second blocks and tiny fees, bought with heavy validator hardware that concentrates participation.',
        '**BFT app-chains (Cosmos)** — fast deterministic finality from a bounded validator set: scalability + security, with decentralization limited by the set size.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'A heuristic, not a theorem',
      text: 'Nobody has mathematically proven the trilemma — it is an engineering rule of thumb, not a law of nature. But a decade of chain design keeps confirming it, which is why every "trilemma solved!" claim deserves your skepticism first.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Bending the triangle',
    },
    {
      type: 'paragraph',
      text: 'Modern designs don\'t accept one point on the triangle — they try to **layer** points. The flagship example is Ethereum\'s strategy: keep the base chain decentralized and secure, and push scale upward to **Layer 2 rollups** that execute transactions off-chain while inheriting the base layer\'s security (covered properly in the Layer 2s lesson). Other approaches split the load — sharding spreads data across the network, and app-chain ecosystems like Cosmos and Polkadot give each application its own chain rather than crowding one.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Marketing loves a solved trilemma',
      text: 'When a new chain advertises Visa-scale throughput with "full decentralization," look for the quiet compromise: how expensive is it to run a validator? How many exist? Who controls upgrades? The trilemma is usually still there — just moved somewhere the homepage doesn\'t mention.',
    },
    {
      type: 'paragraph',
      text: 'Keep the triangle in your head and chain comparisons become honest fast: not "which chain is best," but **which corner did they trade away — and is that the right trade for this use case?**',
    },
  ],

  takeaways: [
    'The trilemma: decentralization, security, scalability — optimizing two pressures the third.',
    'The conflict is physical: scaling raises hardware demands, which shrinks who can participate.',
    'Bitcoin trades scalability away; Solana trades decentralization pressure for speed; BFT chains bound their validator sets.',
    'Rollups, sharding, and app-chains try to layer the triangle rather than escape it.',
    'Treat "we solved the trilemma" as a prompt to find the hidden compromise.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'The blockchain trilemma says a chain struggles to simultaneously maximize:',
        options: [
          'Price, volume, and market cap',
          'Decentralization, security, and scalability',
          'Privacy, anonymity, and compliance',
          'Mining, staking, and voting',
        ],
        answer: 1,
        explanation: 'Those are the trilemma\'s three corners — optimizing two tends to compromise the third.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Why does raising a chain\'s throughput tend to reduce its decentralization?',
        options: [
          'Faster chains are illegal in most countries',
          'Processing more data demands beefier hardware, so fewer people can afford to validate',
          'Users lose interest in fast chains',
          'It doesn\'t — throughput and decentralization are unrelated',
        ],
        answer: 1,
        explanation: 'Higher throughput raises hardware and bandwidth requirements for every validating node, shrinking the set of people who can participate.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Ethereum\'s strategy is to keep the base layer decentralized and secure while scaling on Layer 2 ______, which execute transactions off-chain but inherit base-layer security.',
        accept: ['rollups', 'rollup', 'roll-ups', 'roll ups'],
        explanation: 'Rollups move execution off-chain and post results back to Ethereum, layering scalability on top of a decentralized base.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'The blockchain trilemma is a mathematically proven theorem.',
        answer: false,
        explanation: 'False — it is an engineering heuristic, not a proof. But real-world chain designs keep confirming the tension it describes.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Bitcoin\'s ~7 transactions per second is the price it pays for prioritizing decentralization and security.',
        answer: true,
        explanation: 'True — low hardware requirements keep validation open to anyone, and low throughput is the trade-off.',
      },
    ],
  },
}
