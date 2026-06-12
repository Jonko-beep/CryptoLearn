/**
 * FULL LESSON — Block Production. Who turns the mempool into history:
 * why the producer role must be costly (sybil resistance), the PoW and PoS
 * answers at tier-1 depth, what assembling a block involves, and the
 * producer/validator power balance. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'block-production',
  tier: 1,
  title: 'Block Production',
  summary: 'Mining vs validating — who gets to add the next block, and why.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'The mempool is full of waiting transactions. Someone must now do the single most powerful thing in the system: choose which of them become the next [[block]] of permanent history. With no company in charge, **who gets that job — and what stops them from abusing it?** Every blockchain\'s deepest design choices live in this answer.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why the job can\'t just be taken in turns',
    },
    {
      type: 'paragraph',
      text: 'The obvious idea — "everyone takes turns" — collapses immediately on an open network: turns are assigned to *identities*, and identities are free. An attacker spins up a million fake nodes and owns a million turns. So the producer role must be tied to something that **cannot be faked cheaply**. The two great answers are the two halves of this lesson: burned energy, or locked capital.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Answer 1 — Proof of Work: mining',
    },
    {
      type: 'paragraph',
      text: 'In [[pow|Proof of Work]], producers — [[mining|miners]] — compete in a lottery where tickets are bought with computation: hash the candidate block over and over until a rare winning hash appears. Whoever finds it first earned the right to produce, provably, by spending real electricity. Your odds equal your share of the network\'s computing power; faking a bigger share is impossible because the work *is* the proof. This is Bitcoin\'s answer, and the next module takes it apart bolt by bolt.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Answer 2 — Proof of Stake: validating',
    },
    {
      type: 'paragraph',
      text: 'In [[pos|Proof of Stake]], producers — [[validator|validators]] — lock up the chain\'s own coins as a [[staking|stake]], and the protocol pseudo-randomly selects who proposes each block, weighted by stake. Influence costs capital instead of electricity — and the capital is *hostage*: provable cheating is punished by **slashing**, destroying part of the stake. Where PoW makes attacks expensive to attempt, PoS makes them expensive to have attempted.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Same shape, different fuel',
      text: 'Both designs answer the identical question — who produces? — by auctioning the role against a scarce resource: energy or capital. Both pay producers for honest work with new coins (the [[block-subsidy|block subsidy]]) plus the block\'s fees. The intermediate tier compares these families in depth, third option included.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What producing a block actually involves',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Select** transactions from the [[mempool]] — highest fees first, as the last lesson showed.',
        '**Assemble** the block: the transactions, their [[merkle-root|Merkle root]], the previous block\'s [[hash]], a timestamp.',
        '**Earn the right** — find the winning hash (PoW) or be the chosen proposer for this slot (PoS).',
        '**Broadcast** it, and collect the subsidy plus fees — *if* the network accepts it.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'That last "if" is everything',
      text: 'Producers have real, bounded power: they choose what to include, what to delay, and how to order it. What they cannot do is break the rules — forge a signature, mint extra coins, spend others\' funds — because every full [[node]] verifies every block independently and discards invalid ones, exactly as the nodes lesson promised. A rule-breaking block isn\'t overruled by authority; it simply fails to exist, and its producer forfeits the reward (and under PoS, gets slashed). Producers propose; the network disposes.',
    },
    {
      type: 'paragraph',
      text: 'One loose end remains, and it is a big one. The lottery is random — so what happens when **two honest producers win at nearly the same moment** and broadcast two different, equally valid blocks? For a moment, the single chain of history becomes two. Resolving that gracefully is the next lesson: forks, reorgs, and finality.',
    },
  ],

  takeaways: [
    'Block production is the most powerful role in the system, so it must be tied to something unfakeable — energy or capital.',
    '"Taking turns" fails on open networks because identities are free (the sybil problem).',
    'PoW miners win the role by provable work; PoS validators are selected by stake, with slashing as the deterrent.',
    'Producing = select by fee, assemble (Merkle root + previous hash), earn the right, broadcast.',
    'Producers choose what to include but cannot break the rules — every full node verifies, and invalid blocks simply die.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Why can\'t an open blockchain just let everyone "take turns" producing blocks?',
        options: [
          'Turn-taking is too slow',
          'Identities are free to create, so an attacker could spin up millions of fake nodes and claim millions of turns',
          'Most users don\'t want a turn',
          'It would use too much electricity',
        ],
        answer: 1,
        explanation: 'That is the sybil problem: the producer role must be tied to something costly and unfakeable — work or stake — not to identities.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'What do Proof of Work and Proof of Stake have in common?',
        options: [
          'Both require special permission to participate',
          'Both tie block production to a scarce resource — burned energy or locked capital — and reward producers with the subsidy plus fees',
          'Both select producers by how many nodes they run',
          'Nothing; they solve different problems',
        ],
        answer: 1,
        explanation: 'Same question, different fuel: both auction the producer role against something an attacker cannot cheaply fake.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'In Proof of Stake, a validator caught provably cheating has part of its stake destroyed — a penalty called ______.',
        accept: ['slashing', 'a slash', 'slash'],
        explanation: 'Slashing makes the locked capital a hostage: attacks destroy the attacker\'s own stake.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A block producer can include a transaction that forges someone else\'s signature, as long as it pays a high enough fee.',
        answer: false,
        explanation: 'False — every full node independently verifies every rule. An invalid block is rejected network-wide, and its producer forfeits the reward.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Block producers do have real power: they choose which transactions to include and in what order.',
        answer: true,
        explanation: 'True — inclusion and ordering are genuinely theirs (that is why fees work as bids). Breaking the rules, however, is not within their power.',
      },
    ],
  },
}
