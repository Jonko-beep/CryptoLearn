/**
 * FULL LESSON — embedded diagram + embedded interactive simulator pattern,
 * with a quiz that uses NON-multiple-choice question types (fill-in-blank & true/false).
 *
 * This single lesson exercises three required patterns at once:
 *   • a static SVG diagram widget  (widget: 'blockchain-diagram')
 *   • a live interactive simulator (widget: 'hash-demo')
 *   • fib + tf quiz question types
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'blocks-hashing-chain',
  tier: 1,
  title: 'Blocks, Hashing & the Chain',
  summary: 'How cryptographic hashing links blocks into a tamper-evident chain — see it break in real time.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'A [[blockchain]] is, at its heart, a clever data structure. To understand why it is so hard to tamper with, you need exactly one concept first: the **cryptographic hash**.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What is a hash?',
    },
    {
      type: 'paragraph',
      text: 'A [[hash]] function takes any input — a word, a file, an entire book — and produces a fixed-length string of characters called a digest. Bitcoin uses [[sha-256|SHA-256]], which always outputs 256 bits (64 hex characters). Three properties make it useful:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Deterministic** — the same input always gives the same hash.',
        '**Avalanche effect** — changing a single character changes the entire output, unpredictably.',
        '**One-way** — you cannot work backwards from a hash to recover the input.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Try it yourself',
      text: 'In the tool below, type anything and watch the SHA-256 hash update on every keystroke. Add a single period and the entire fingerprint scrambles — that is the avalanche effect.',
    },
    {
      // INTERACTIVE WIDGET EMBED — live hashing, no props needed.
      type: 'widget',
      widget: 'hash-demo',
      caption: 'Live SHA-256 — computed in your browser via the Web Crypto API.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Linking blocks into a chain',
    },
    {
      type: 'paragraph',
      text: 'Each [[block]] stores a batch of transactions plus the **hash of the previous block**. That tiny detail is everything: because a block includes its predecessor\'s fingerprint, the blocks form a one-directional chain where every link depends on all the history before it.',
    },
    {
      // STATIC DIAGRAM WIDGET EMBED — same embed mechanism, different widget key.
      type: 'widget',
      widget: 'blockchain-diagram',
      caption: 'Each block carries the previous block\'s hash, forming a dependency chain.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why tampering is obvious',
    },
    {
      type: 'paragraph',
      text: 'Suppose an attacker edits a transaction in an old block. That changes the block\'s contents, so its hash changes. But the next block stored the *old* hash — so now it points to nothing valid. Its own hash is now wrong too, and so on down the line. **One edit invalidates every block after it.** This is the practical basis of [[immutability]].',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'See it break',
      text: 'The mini-chain below is interactive. Edit the data in any block and watch every block after it turn red and "Invalid" — because their stored previous-hashes no longer match. Re-mining all of them is exactly the work an attacker would have to redo.',
    },
    {
      // SECOND INTERACTIVE WIDGET EMBED — same widget component, props switch it
      // into "chain" mode to demonstrate cascading invalidation.
      type: 'widget',
      widget: 'hash-demo',
      props: { mode: 'chain' },
      caption: 'A 4-block mini-chain. Editing one block invalidates all that follow.',
    },
    {
      type: 'paragraph',
      text: 'On a real network the attacker would also have to outpace thousands of honest [[node|nodes]] redoing this work — which is why the deeper a transaction is buried, the safer it is. We will formalize that idea as [[confirmation|confirmations]] in a later lesson.',
    },
  ],

  takeaways: [
    'A hash is a deterministic, one-way fingerprint; SHA-256 always outputs 64 hex characters.',
    'The avalanche effect means any change — even one character — produces a totally different hash.',
    'Each block stores the previous block\'s hash, chaining them together.',
    'Editing any block changes its hash and invalidates every block after it, making tampering evident.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'fib',
        prompt: 'Bitcoin links its blocks using a 256-bit hash function called ______. (Type the name.)',
        accept: ['sha-256', 'sha256', 'sha 256'],
        explanation: 'SHA-256 produces a 256-bit (64 hex character) digest and is used throughout Bitcoin.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'Changing a single character of a hash function\'s input changes only a small part of the output.',
        answer: false,
        explanation: 'False — due to the avalanche effect, one tiny change scrambles the entire hash unpredictably.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'Each block stores the hash of the previous block, which is what links them into a chain.',
        answer: true,
        explanation: 'True — embedding the previous block\'s hash is exactly what makes the structure a chain.',
      },
      {
        id: 'q4',
        type: 'fib',
        prompt: 'If you edit an old block, its hash changes and every block ______ it becomes invalid. (one word: before / after)',
        accept: ['after'],
        explanation: 'Every block AFTER the edited one breaks, because each stored the now-outdated previous hash.',
      },
      {
        id: 'q5',
        type: 'mc',
        prompt: 'Which property best explains why you cannot recover an input from its hash?',
        options: ['Deterministic', 'One-way', 'Avalanche effect', 'Compression'],
        answer: 1,
        explanation: 'Hash functions are one-way (preimage resistant): easy to compute forward, infeasible to reverse.',
      },
    ],
  },
}
