/**
 * FULL LESSON — Merkle Trees. Follows blocks-hashing-chain: how thousands of
 * transactions compress into one root hash, and why the tree shape enables
 * logarithmic inclusion proofs (the basis of light clients, next lesson).
 * Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'merkle-trees',
  tier: 1,
  title: 'Merkle Trees',
  summary: 'Compressing thousands of transactions into a single verifiable root hash.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'The last lesson showed how blocks link together: each block carries the previous block\'s [[hash]]. But a [[block]] holds *thousands* of transactions — how do you fingerprint all of them so that not one byte can be quietly changed? The elegant answer, used by virtually every blockchain, is the [[merkle-tree|Merkle tree]].',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Building the tree',
    },
    {
      type: 'paragraph',
      text: 'Start at the bottom and climb:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Hash every transaction individually — these are the **leaves**.',
        'Pair the hashes up, and hash each pair together.',
        'Pair *those* results and hash again — and repeat, level by level.',
        'Eventually one hash remains: the [[merkle-root|Merkle root]] — a single fingerprint summarizing every transaction beneath it.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The avalanche effect you saw in the hashing demo now cascades upward: change one character in one transaction and its leaf hash changes, which changes its pair\'s hash, and so on all the way to a completely different root. The root is what actually goes into the block **header** — the compact summary that gets hashed into the chain. The transactions are committed to the chain *through* the root.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why not just hash everything in one go?',
      text: 'You could concatenate all the transactions and hash them once — that would also produce a tamper-evident fingerprint. But it has a fatal flaw for verification: to check that *one* transaction is included, you would need *every* transaction to recompute the hash. The tree shape exists to fix exactly this.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The superpower: Merkle proofs',
    },
    {
      type: 'paragraph',
      text: 'Suppose someone claims "your payment is in this block" and you want proof — without downloading the block. With a Merkle tree they hand you only the **sibling hashes along your transaction\'s path to the root**: your leaf\'s partner, then that pair\'s partner, and so on upward. You hash your transaction, combine it with each sibling in turn, and if you arrive at the block\'s published root — the transaction is provably included. Forging such a path would require breaking the hash function itself.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The numbers are absurd (in a good way)',
      text: 'The path length grows with the *logarithm* of the transaction count: a block of 4,000 transactions needs a proof of only ~12 hashes; 16,000 transactions, ~14. Doubling the block adds ONE hash to the proof. This is why verification can stay cheap forever, no matter how big blocks grow.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why this matters beyond elegance',
    },
    {
      type: 'paragraph',
      text: 'Merkle proofs are what let small devices participate in a system measured in hundreds of gigabytes. A phone wallet doesn\'t store the chain — it stores the chain of tiny block *headers* and asks for Merkle proofs when it needs to confirm a payment. That trick — verify a needle without holding the haystack — is the foundation of **light clients**, and it leads straight into the next lesson\'s question: who actually stores the haystack? Welcome to nodes and the peer-to-peer network.',
    },
  ],

  takeaways: [
    'A Merkle tree hashes transactions in pairs, level by level, up to a single root hash stored in the block header.',
    'Changing any transaction avalanches up the tree and changes the root — the block commits to every byte beneath it.',
    'A Merkle proof shows a transaction is included using only the sibling hashes along its path to the root.',
    'Proof size grows logarithmically: thousands of transactions, a dozen hashes — doubling the block adds one.',
    'This is what lets light clients (like phone wallets) verify payments without storing the blockchain.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'fib',
        prompt: 'Hashing transactions in pairs, level by level, produces a single summary hash called the Merkle ______.',
        accept: ['root'],
        explanation: 'The Merkle root sits in the block header and commits to every transaction in the block.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'What does a Merkle proof let you verify?',
        options: [
          'That a transaction is included in a block, using only a short path of sibling hashes',
          'The current price of a coin',
          'That a private key is valid',
          'The total supply of the currency',
        ],
        answer: 0,
        explanation: 'Combine your transaction\'s hash with the supplied siblings up the tree — landing on the published root proves inclusion.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'If one transaction in a block is altered, the Merkle root stays the same as long as the other transactions are untouched.',
        answer: false,
        explanation: 'False — the altered leaf changes its hash, which cascades up every level to produce a completely different root.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'A block\'s transaction count doubles. What happens to the size of a Merkle proof?',
        options: [
          'It doubles too',
          'It grows by just one hash — proof size is logarithmic',
          'It shrinks by half',
          'It becomes impossible to construct',
        ],
        answer: 1,
        explanation: 'Each doubling adds one level to the tree, hence one hash to the path. 4,000 transactions need only ~12 hashes.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Phone wallets typically verify payments using block headers and Merkle proofs rather than storing the whole blockchain.',
        answer: true,
        explanation: 'True — that is the light-client pattern: keep the tiny headers, request a proof when you need to confirm a specific transaction.',
      },
    ],
  },
}
