/**
 * FULL LESSON — Immutability & Its Limits. Closes the How Blockchains Work
 * module: assembles the whole module's stack into the case FOR immutability,
 * then honestly maps its three boundaries — the soft tip (51% attacks),
 * social consensus (the DAO rollback), and garbage-in/garbage-forever.
 * Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'immutability-limits',
  tier: 1,
  title: 'Immutability & Its Limits',
  summary: 'Why immutability holds in practice — and where it really ends.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: '"The blockchain is immutable" is crypto\'s favorite sentence — sometimes a profound truth, sometimes a sales pitch. You have now built every piece needed to evaluate it honestly. This closing lesson assembles the case *for* [[immutability]], then walks its three real boundaries, because trusting a guarantee means knowing exactly where it stops.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why immutability holds: the full stack',
    },
    {
      type: 'paragraph',
      text: 'Rewriting a confirmed transaction means defeating everything this module taught, simultaneously:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'The [[hash]] links and [[merkle-root|Merkle roots]] — change one byte and every fingerprint after it breaks, visibly.',
        'The cost of **block production** — each broken block must be expensively re-produced (re-mined or re-proposed).',
        'The honest network — your rewritten chain must *outpace* everyone else\'s, block after block, to win fork-choice.',
        'Thousands of independent [[node|nodes]] — and even then, nothing you produce may break a rule, or it is discarded on arrival.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Stack those together and deep history approaches physical permanence: rewriting last year\'s Bitcoin would mean out-computing the entire global network across thousands of blocks — an expense with no plausible payoff. **That** is what immutability really is: not a law of nature, but an economic wall so high that climbing it costs more than anything behind it is worth. Which points directly at the first limit.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Limit 1 — The tip is soft, and small chains are cheap',
    },
    {
      type: 'paragraph',
      text: 'The wall\'s height grows with depth and with the network\'s size. At the tip, ordinary [[reorg|reorgs]] are routine — that is why confirmations exist. And on *small* chains, the wall is short everywhere: a majority of a minor chain\'s hashpower can be bought or rented affordably, and history obliges — Ethereum Classic suffered repeated **51% attacks** in 2019–2020, with attackers reorganizing thousands of blocks to double-spend exchange deposits. Immutability is proportional to the security budget protecting it; "blockchain" alone guarantees nothing.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Limit 2 — The rules themselves are social',
    },
    {
      type: 'paragraph',
      text: 'The previous lesson revealed something quietly radical: the chain is an *agreement*, and agreements can be renegotiated. If enough of a community decides history should change, a [[hard-fork|hard fork]] can change it — not by breaking cryptography, but by collectively adopting new rules. It has happened at the highest level: in 2016, after a catastrophic hack, the Ethereum community forked to return the stolen funds — effectively rewriting financial history by majority consent (the dissenting minority kept the original, unrewritten chain alive as Ethereum Classic). The precise truth is therefore: **immutable means no one can change it *unilaterally*** — not that it can never change.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why this limit is also the defense',
      text: 'The same social layer that *can* rewrite is what makes rewriting so rare: thousands of node operators must actively choose to run new software. Nobody can quietly flip a switch — any rewrite must happen in full public view, through open argument, with dissenters free to keep the old chain. Compare that to a database administrator with an UPDATE statement, and the guarantee is still extraordinary.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Limit 3 — Immutable is not the same as true (or safe)',
    },
    {
      type: 'paragraph',
      text: 'The final limit is the one scammers most hope you miss. The chain guarantees its *records* can\'t be altered — it cannot guarantee the records were ever worth recording. False claims, fraudulent tokens, garbage data: written immutably, they become immutable garbage. A token "backed by" something off-chain is only as good as the off-chain promise. And immutability is precisely what makes **theft permanent**: a transaction signed with your stolen keys is valid, final, and going nowhere — there is no undo for victims. The irreversibility that protects the ledger from tampering offers zero protection from deception. Your protection is the habits from the Getting Started module; the ledger will faithfully, permanently record whatever happens.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The honest one-sentence summary',
      text: 'A well-secured blockchain makes history extraordinarily expensive to rewrite unilaterally, increasingly so with depth — while remaining changeable by overwhelming social consensus, vulnerable where security budgets are thin, and utterly indifferent to whether what it records is true, just, or yours.',
    },
    {
      type: 'paragraph',
      text: 'And with that, you understand the machine end to end: hashes chain blocks, Merkle trees compress them, nodes verify and gossip them, the mempool queues transactions, costly producers mine or stake them into blocks, fork-choice heals the splits, and economics — plus a society of users — holds the history still. The next module takes this entire toolkit and aims it at the chain where it all began: Bitcoin.',
    },
  ],

  takeaways: [
    'Immutability is an economic wall, not magic: hash links + Merkle roots + costly production + fork-choice + independent validation.',
    'The wall grows with depth and security budget — tips reorg routinely, and small chains have suffered real 51% attacks (ETC, 2019–2020).',
    'Rules are social: overwhelming consensus can hard-fork history (the 2016 Ethereum rollback) — immutable means no *unilateral* change.',
    'The public, voluntary nature of forks is itself the defense: no quiet switch exists, and dissenters keep the old chain.',
    'Immutable ≠ true or safe: garbage and theft are recorded just as permanently — your habits, not the ledger, protect you.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is the most accurate description of blockchain immutability?',
        options: [
          'A mathematical guarantee that history can never change under any circumstances',
          'An economic wall: rewriting history costs more than it could gain, and the cost grows with depth and network size',
          'A legal protection enforced by regulators',
          'A marketing term with no substance',
        ],
        answer: 1,
        explanation: 'Immutability is cryptography plus economics: re-doing the work, outpacing the network, and convincing every node — at a cost that dwarfs any payoff on large chains.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'The repeated 51% attacks on Ethereum Classic showed that smaller chains\' history can be affordably rewritten.',
        answer: true,
        explanation: 'True — immutability is proportional to the security budget. A minority chain\'s majority hashpower can be rented cheaply enough to double-spend.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'The 2016 Ethereum fork that reversed a major hack demonstrated that:',
        options: [
          'Blockchain cryptography was broken',
          'History can be changed by overwhelming social consensus — immutability means no unilateral change, not no change ever',
          'Miners can edit any transaction at will',
          'Hard forks are impossible in practice',
        ],
        answer: 1,
        explanation: 'No cryptography broke — the community collectively adopted new rules, in public, while dissenters kept the original chain (Ethereum Classic).',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Because the blockchain is immutable, data recorded on it is guaranteed to be true.',
        answer: false,
        explanation: 'False — the chain guarantees records can\'t be altered, not that they were ever accurate. False claims become immutable false claims.',
      },
      {
        id: 'q5',
        type: 'fib',
        prompt: 'A transaction signed with stolen keys is valid and permanent — irreversibility means there is no ______ for theft victims.',
        accept: ['undo', 'reversal', 'undo button', 'chargeback'],
        explanation: 'The same finality that protects the ledger from tampering makes theft permanent — which is why the security habits from tier 1 matter so much.',
      },
    ],
  },
}
