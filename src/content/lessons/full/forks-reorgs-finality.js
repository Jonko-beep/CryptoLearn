/**
 * FULL LESSON — Forks, Reorgs & Finality. Resolving simultaneous blocks
 * (fork choice, orphans, reorgs), why confirmations work (paying off the
 * promise from blocks-hashing-chain), probabilistic vs deterministic
 * finality, and rule-change forks (soft/hard, ETC and BCH).
 * Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'forks-reorgs-finality',
  tier: 1,
  title: 'Forks, Reorgs & Finality',
  summary: 'Soft vs hard forks, what confirmations mean, probabilistic vs deterministic finality.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'The last lesson ended on a cliffhanger: two honest producers win at nearly the same moment and broadcast two different, equally valid blocks. Half the network hears one first, half the other. For a moment there are **two versions of history** — a [[fork]]. This lesson is how the network heals that split, why "wait for confirmations" actually works, and what happens when a fork is no accident.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Accidental forks and the fork-choice rule',
    },
    {
      type: 'paragraph',
      text: 'Every node needs the *same* tie-breaking rule, applied locally, with no meeting required. In Proof of Work it is beautifully simple: **follow the chain with the most accumulated work.** While two tips are tied, miners build on whichever block they saw first — and the tie breaks the moment the next block lands on one side. That side is now heavier; the whole network converges on it; the losing block is abandoned as an **orphan** (its transactions, if not already in the winner, simply return to the [[mempool]] to be included later — nothing is lost).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Reorgs: when your block gets unwound',
    },
    {
      type: 'paragraph',
      text: 'From a node\'s perspective, switching from the tip it believed in to a heavier competing tip means discarding a block (or several) it had accepted — a [[reorg|reorganization]]. Small reorgs of a block or two are routine network weather. But notice the unsettling implication: a transaction "in the chain" can come *back out* of it if its block gets orphaned. Whether it returns harmlessly via the mempool or gets replaced by a conflicting spend — that is exactly the risk window an attacker with enormous resources would aim at.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Confirmations: the promise, finally explained',
    },
    {
      type: 'paragraph',
      text: 'Way back in the hashing lesson, we promised to formalize "the deeper a transaction is buried, the safer it is." Here it is. Each block built on top of yours is one [[confirmation]] — and for a reorg to unwind your transaction, a competing chain must outpace the honest network by *that many blocks plus one*. Against miners holding a minority of the network\'s power, the odds of pulling that off **shrink exponentially with every confirmation**. One confirmation can vanish in routine weather; six (the classic Bitcoin rule of thumb for large sums) requires out-racing the entire honest world six times over.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Probabilistic vs deterministic finality',
      text: 'Notice that Proof-of-Work [[finality]] is **probabilistic** — never absolute, just exponentially close to it. Other designs buy certainty outright: BFT-style and modern PoS chains have validators *vote* to finalize checkpoints, after which reverting is not improbable but ruled out (or possible only by destroying vast staked capital). The intermediate tier\'s consensus lesson maps these families; for now, know that "final" comes in two flavors: *vanishingly unlikely to change* and *cryptoeconomically locked*.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Deliberate forks: changing the rules',
    },
    {
      type: 'paragraph',
      text: 'So far, forks over *which blocks* — but networks must occasionally change *the rules themselves*, and with no CEO to decree it, upgrades are also forks:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'A [[soft-fork]] **tightens** the rules: blocks valid under the new rules are still valid under the old, so un-upgraded nodes keep following the same chain. Backward-compatible — the gentle upgrade.',
        'A [[hard-fork]] **changes or loosens** them: new-rules blocks look *invalid* to old nodes. Everyone must upgrade — or the network splits into two chains, permanently.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'When communities split, both chains survive',
      text: 'History\'s famous hard forks were ideological, not technical. In 2016, Ethereum hard-forked to reverse a massive hack; dissenters kept the original chain alive as Ethereum Classic. In 2017, a faction wanting bigger Bitcoin blocks split off as Bitcoin Cash. Each split produced two living chains and two coins — and holders\' keys controlled balances on **both**. A hard fork is a referendum where everyone keeps the version they voted for.',
    },
    {
      type: 'paragraph',
      text: 'Step back and the module\'s deepest idea comes into focus: the "one true chain" is not stored anywhere or declared by anyone — it is an **ongoing agreement**, re-affirmed block by block by thousands of nodes applying the same rules. Agreements this strong are very hard to break… but "very hard" is not "impossible," and honesty about that line is the final lesson of the module: immutability, and its limits.',
    },
  ],

  takeaways: [
    'Simultaneous valid blocks fork the chain; the fork-choice rule (most accumulated work) re-converges everyone without coordination.',
    'Orphaned blocks\' transactions return to the mempool; a reorg is a node switching to a heavier competing tip.',
    'Each confirmation forces an attacker to out-race the honest network one block further — risk falls exponentially with depth.',
    'PoW finality is probabilistic; BFT/PoS designs vote to finalize checkpoints for deterministic (cryptoeconomic) finality.',
    'Soft forks tighten rules compatibly; hard forks require everyone to upgrade — or split the chain in two (ETC 2016, BCH 2017).',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Two miners broadcast valid blocks at the same height simultaneously. How does the network resolve it?',
        options: [
          'A central coordinator picks the winner',
          'Nodes follow the fork-choice rule — the tie breaks when the next block makes one side heavier, and the other block is orphaned',
          'Both blocks are permanently kept side by side',
          'All transactions in both blocks are cancelled',
        ],
        answer: 1,
        explanation: 'Everyone applies the same local rule (most accumulated work), so the first side to grow wins the whole network — no meeting required.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'What usually happens to the transactions in an orphaned block?',
        options: [
          'They are destroyed and the funds are lost',
          'If not already in the winning chain, they return to the mempool and get included in a later block',
          'They are refunded with interest',
          'They must be manually re-signed',
        ],
        answer: 1,
        explanation: 'Orphaning a block doesn\'t invalidate its transactions — they go back to the waiting room and typically confirm shortly after.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Each block built on top of the one containing your transaction is called a ______, and each one makes reversal exponentially less likely.',
        accept: ['confirmation'],
        explanation: 'To unwind a transaction N blocks deep, an attacker must out-race the entire honest network by N+1 blocks — odds that collapse exponentially.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'What distinguishes a hard fork from a soft fork?',
        options: [
          'Hard forks are accidental; soft forks are deliberate',
          'A soft fork tightens rules compatibly; a hard fork makes old nodes see new blocks as invalid — upgrade or split',
          'Soft forks only happen on Proof-of-Stake chains',
          'Hard forks cannot create new coins',
        ],
        answer: 1,
        explanation: 'Soft = backward-compatible tightening. Hard = breaking change; without unanimous upgrade the network splits into two chains (as with ETC and BCH).',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'When a chain splits permanently in a contentious hard fork, holders\' keys control balances on both resulting chains.',
        answer: true,
        explanation: 'True — both chains share history up to the split, so the same keys own the same pre-fork balances on each. Two chains, two coins, one keyring.',
      },
    ],
  },
}
