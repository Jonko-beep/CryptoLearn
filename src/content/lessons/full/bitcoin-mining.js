/**
 * FULL LESSON — Bitcoin mining & difficulty. Part of the dedicated Bitcoin
 * module. Reuses the existing `hash-demo` widget (chain mode) to let learners
 * feel the nonce search, and mixes mc / tf / fib quiz types.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'bitcoin-mining',
  tier: 1,
  title: 'Mining & Difficulty',
  summary: 'How proof-of-work mining adds blocks, and how difficulty keeps blocks ~10 minutes apart.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'You already know that each [[block]] is linked to the last by a [[hash]]. **Mining** is the process that decides *who* gets to add the next block — and it is the engine behind Bitcoin\'s security. It is just hashing, repeated at enormous scale.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What a miner actually does',
    },
    {
      type: 'paragraph',
      text: 'A [[mining|miner]] assembles a candidate block: pending transactions pulled from the [[mempool]], plus a special **coinbase** transaction that pays the miner. It then hashes the block\'s header with [[sha-256|SHA-256]] over and over, changing one field each time — the [[nonce]] — searching for a hash that meets the network\'s target.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Gather transactions + a coinbase reward into a candidate block.',
        'Hash the header with SHA-256.',
        'If the hash is **below the target**, you win — broadcast the block.',
        'If not, change the nonce and try again. Repeat billions of times per second.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Feel the search',
      text: 'In the mini-chain below, a block is only "valid" when its hash starts with the required zeros. Press **Re-mine all** and watch each block hunt for a winning nonce — that hunt, scaled up massively, is exactly what real miners do.',
    },
    {
      // WIDGET REUSE — same hash-demo component, chain mode, as in the hashing lesson.
      type: 'widget',
      widget: 'hash-demo',
      props: { mode: 'chain' },
      caption: 'Mining in miniature: each block searches for a nonce whose hash meets the difficulty rule.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The target and difficulty',
    },
    {
      type: 'paragraph',
      text: 'The **target** is a number the winning hash must come in under; equivalently, the hash must start with a certain number of leading zeros. The lower the target, the rarer a valid hash, and the more work required. We summarize this rarity as the [[difficulty]] — a single number describing how hard it currently is to find a block.',
    },
    {
      type: 'paragraph',
      text: 'Crucially, **work is expensive to do but trivial to verify**. A miner may compute quintillions of hashes to find one valid block, yet any [[node]] checks it with a single hash. That asymmetry is what makes [[pow|Proof of Work]] secure.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Difficulty adjustment: the self-correcting clock',
    },
    {
      type: 'paragraph',
      text: 'More miners join, total [[hashrate]] rises, and blocks would start arriving faster than every 10 minutes. Bitcoin prevents this: **every 2,016 blocks (~2 weeks), the network retargets difficulty** based on how fast those blocks actually arrived. Too fast → difficulty rises; too slow → it falls. The result is a remarkably steady ~10-minute average no matter how much mining power comes or goes.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why 10 minutes is deliberate',
      text: 'Slow, evenly-spaced blocks give the global network time to propagate and agree, reducing wasteful competing chains. Difficulty adjustment is what locks that pace in place automatically.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Hashrate, security & the 51% idea',
    },
    {
      type: 'paragraph',
      text: 'The total hashrate is Bitcoin\'s security budget. To rewrite recent history, an attacker would need to out-hash the entire honest network — controlling more than half of it, a so-called **51% attack** — and even then could only reorder or censor recent transactions, not steal coins or forge signatures. The deeper a transaction is buried under later blocks, the more total work would have to be redone, which is why more [[confirmation|confirmations]] mean more safety.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The energy tradeoff',
      text: 'Proof of Work converts real electricity into security — that is the point, and also the main criticism. Whether the security is worth the energy is a genuine debate, and part of why other chains chose Proof of Stake instead.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What miners earn',
    },
    {
      type: 'paragraph',
      text: 'The coinbase transaction pays the winning miner two things: the **block subsidy** (newly minted bitcoin) plus the **transaction fees** of everything in the block. The subsidy is how new bitcoin enters circulation — and it shrinks on a fixed schedule we cover next, in the halving.',
    },
  ],

  takeaways: [
    'Mining = repeatedly hashing a candidate block with SHA-256, varying the nonce, until the hash beats the target.',
    'Proof of Work is expensive to produce but instant to verify — the asymmetry that secures the chain.',
    'Difficulty retargets every 2,016 blocks (~2 weeks) to hold the average block time near 10 minutes.',
    'Total hashrate is the security budget; rewriting history needs >50% of it, and gets harder with each confirmation.',
    'Miners earn the block subsidy (new bitcoin) plus transaction fees.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is a miner changing each attempt while searching for a valid block?',
        options: [
          'The list of all past transactions',
          'The nonce in the block header',
          'The SHA-256 algorithm itself',
          'The 10-minute block time',
        ],
        answer: 1,
        explanation: 'Miners vary the nonce and re-hash, searching for a header hash below the target.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'Verifying a valid block takes about as much work as mining it.',
        answer: false,
        explanation: 'False — mining requires enormous trial-and-error, but verification is a single quick hash. That asymmetry is the heart of Proof of Work.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Bitcoin retargets its difficulty every ______ blocks (a number) to keep ~10-minute blocks.',
        accept: ['2016', '2,016'],
        explanation: 'Every 2,016 blocks — roughly two weeks — difficulty adjusts based on how fast those blocks arrived.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'If total network hashrate suddenly doubles, what happens over the next adjustment period?',
        options: [
          'Blocks permanently come twice as fast',
          'Difficulty rises so the block time returns toward ~10 minutes',
          'The 21M supply cap increases',
          'Transactions stop confirming',
        ],
        answer: 1,
        explanation: 'Faster blocks trigger a higher difficulty at the next retarget, pulling the average back toward 10 minutes.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A miner who wins a block earns both newly minted bitcoin (the subsidy) and the block\'s transaction fees.',
        answer: true,
        explanation: 'True — the coinbase transaction pays the subsidy plus all fees in the block.',
      },
    ],
  },
}
