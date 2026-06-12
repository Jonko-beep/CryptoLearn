/**
 * FULL LESSON — Nodes & the P2P Network. Where the blockchain physically
 * lives: full nodes as independent rule-enforcers, light clients (paying off
 * the merkle lesson), gossip propagation, and the node/producer distinction
 * that sets up block production. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'nodes-p2p-network',
  tier: 1,
  title: 'Nodes & the P2P Network',
  summary: 'Full nodes, data propagation, and why there is no central server.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'Here is a question with no equivalent in normal software: **where is the blockchain?** Your bank\'s ledger lives in your bank\'s data center. Bitcoin\'s ledger lives… everywhere. Thousands of computers each hold a complete copy, and *that* — not the cryptography alone — is what makes the system so hard to kill.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What a node actually does',
    },
    {
      type: 'paragraph',
      text: 'A [[node]] is a computer running the chain\'s software. A **full node** does three jobs: it stores the entire chain, it relays transactions and blocks to its peers, and — most importantly — it **independently verifies every rule**. Every signature, every balance, every block reward: checked locally, trusting no one. If someone hands a full node an invalid block, it simply rejects it. The community\'s slogan compresses this into four words: *don\'t trust, verify.*',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Anyone can run one',
      text: 'Running a Bitcoin full node takes an ordinary computer, a few hundred gigabytes of disk, and patience for the initial sync — no permission, no stake, no special hardware. This low barrier is deliberate: the more independent verifiers exist, the harder the network is to capture. (Recall the trilemma later: chains that demand heavy hardware get fewer of these.)',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Full nodes and light clients',
    },
    {
      type: 'paragraph',
      text: 'Not every device can hold hundreds of gigabytes — and thanks to the last lesson, not every device needs to. A [[light-client|light client]] stores only the chain of compact block *headers* and verifies specific payments by requesting **Merkle proofs** from full nodes. That is exactly how phone wallets work. The tradeoff is honest: a light client verifies *inclusion* brilliantly, but it leans on full nodes for the big picture — one more reason the population of full nodes matters to everyone, including people who never run one.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Gossip: how data spreads with no center',
    },
    {
      type: 'paragraph',
      text: 'There is no server to upload your transaction to. Instead, nodes form a **peer-to-peer network**: each connects to a handful of others. Broadcast a transaction to your peers, and each relays it to *their* peers, and so on — a pattern called **gossip**. Within seconds the whole network has it. New blocks spread the same way. Information moves like a rumor through a crowd: no origin point required, no chokepoint available.',
    },
    {
      type: 'paragraph',
      text: 'This topology is the censorship resistance promised in the very first lesson, made concrete. To stop a transaction you would have to cut it off from *every* path through thousands of independently operated machines across the world. To shut the system down you would have to shut down all of them. There is no headquarters to raid and no plug to pull.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Nodes are not miners',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The most common beginner conflation',
      text: 'Running a node and producing blocks are different jobs. **Validation** is free and open to everyone — that is the node\'s role. **Block production** (mining or validating with stake) is the specialized, costly role of proposing what gets added next. Producers propose; nodes police. The next lesson is about the producers.',
    },
    {
      type: 'paragraph',
      text: 'Hold onto the power balance here, because it explains events later in this module: a block producer, however mighty, cannot force an invalid block onto the network — every full node checks the rules for itself and discards what fails. The producers control *what gets included*; the nodes, collectively, control *what counts as valid*. With the network in place, we can follow a transaction\'s actual journey through it — starting in the waiting room called the mempool.',
    },
  ],

  takeaways: [
    'A full node stores the chain, relays data, and independently verifies every rule — "don\'t trust, verify."',
    'Anyone can run a full node on ordinary hardware; many independent verifiers are what make capture hard.',
    'Light clients keep only headers and use Merkle proofs — which is how phone wallets verify payments.',
    'Transactions and blocks spread by gossip between peers: no server, no chokepoint, nothing to shut down.',
    'Nodes validate; block producers propose. An invalid block is rejected no matter who produced it.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Which is NOT one of a full node\'s jobs?',
        options: [
          'Storing the full blockchain',
          'Independently verifying every rule',
          'Relaying transactions and blocks to peers',
          'Setting the price of the coin',
        ],
        answer: 3,
        explanation: 'Full nodes store, verify, and relay. Prices come from markets — nodes enforce rules, not valuations.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Data spreads through the network by each node relaying to its peers, who relay to theirs — a pattern called ______.',
        accept: ['gossip', 'gossiping', 'gossip protocol'],
        explanation: 'Gossip propagation reaches the whole network in seconds with no central server and no single path to block.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'A light client verifies payments using block headers and Merkle proofs instead of storing the entire chain.',
        answer: true,
        explanation: 'True — that is the light-client pattern from the Merkle lesson, and it is how phone wallets work.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A sufficiently powerful miner can force full nodes to accept a block that breaks the rules.',
        answer: false,
        explanation: 'False — every full node verifies independently and rejects invalid blocks regardless of who produced them. Producers propose; nodes police.',
      },
      {
        id: 'q5',
        type: 'mc',
        prompt: 'Why is censoring a broadcast transaction so difficult on a P2P network?',
        options: [
          'Transactions are invisible until confirmed',
          'It would require cutting the transaction off from every path through thousands of independent nodes',
          'Nodes encrypt all traffic with the sender\'s private key',
          'Miners are legally required to include everything',
        ],
        answer: 1,
        explanation: 'Gossip gives data countless routes. With no chokepoint, suppression means beating every relay path simultaneously — across the world.',
      },
    ],
  },
}
