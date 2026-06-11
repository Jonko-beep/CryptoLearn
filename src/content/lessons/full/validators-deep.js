/**
 * FULL LESSON — Validators in Depth. The work behind staking yield: what a
 * validator actually does, penalties vs slashing, and the four ways to stake
 * (solo, delegation, liquid staking, exchange) as a trust/responsibility
 * spectrum. Bridges staking-yield to intro-defi via LSTs. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'validators-deep',
  tier: 2,
  title: 'Validators in Depth',
  summary: 'Running a validator, delegation, and slashing conditions.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'The staking lesson showed the yield; this one shows the work behind it. A [[validator]] is not a passive deposit — it is an active job with duties, penalties, and an entire industry of ways to outsource it. Knowing how that job works tells you exactly what you are trusting when you stake.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The job description',
    },
    {
      type: 'paragraph',
      text: 'A validator is a [[node]] with stake bonded behind it, performing two duties on the network\'s schedule: occasionally **proposing** a new [[block]] when selected, and constantly **attesting** — signing votes that confirm the blocks others propose are valid. Rewards come from new issuance plus a share of transaction fees and tips, and they flow only to validators that show up: the job demands a machine that is online, synced, and signing **around the clock**.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'What solo staking takes',
      text: 'On Ethereum: at least 32 ETH bonded, consumer-grade hardware, a reliable connection, and the discipline to keep keys safe and software updated. No permission needed from anyone — solo staking is the most decentralized form of participation, and chains are healthier the more of it they have.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Penalties vs slashing: two very different sticks',
    },
    {
      type: 'paragraph',
      text: 'New stakers often conflate these, but the protocol does not. **Penalties** are for being *absent*: go offline and you leak small amounts, roughly mirroring the rewards you would have earned — annoying, rarely ruinous. [[staking|Slashing]] is for being *dishonest*: provable, signed contradictions, such as proposing two different blocks for the same slot or casting contradictory votes. A slashed validator loses a slice of its stake immediately, gets forcibly ejected, and — the elegant part — loses **more** when many validators are slashed at the same time, because mass misbehavior is what an actual attack looks like.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Why honest operators almost never get slashed',
      text: 'Slashing requires signing two conflicting messages — something correctly configured software simply never does. The classic self-inflicted slashing is running the **same validator keys on two machines** "for redundancy": both sign, the contradiction is public, and the protocol cannot tell your backup strategy from an attack. One validator, one live copy of the keys.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Delegation: lending your weight',
    },
    {
      type: 'paragraph',
      text: 'Most holders never run hardware. On many [[pos|PoS]] chains (Cosmos, Polkadot, Solana among them), [[delegation]] is built into the protocol: you point your tokens at a validator you choose, their voting weight grows, and you receive your share of rewards minus the operator\'s commission. You keep custody of your tokens — but you are not just picking a payout. On many chains, **if your validator is slashed, your delegated stake is slashed with it**. Delegation is a vote for an operator\'s competence; choose on uptime and reputation, not just the highest advertised rate.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Liquid staking: the receipt token',
    },
    {
      type: 'paragraph',
      text: 'Staked tokens are locked, and unstaking takes time — there is typically an **unbonding period** (days to weeks, by chain) before withdrawn stake is spendable. [[liquid-staking|Liquid staking]] protocols dissolve that constraint: deposit tokens, the protocol stakes them across operators, and you receive a tradable receipt token (Lido\'s stETH is the giant of the genre) that accrues the staking yield while remaining free to sell or use. That receipt token is also a doorway — it can be lent, pooled, and posted as collateral, which is precisely where the next lesson picks up.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Liquid staking adds layers of risk',
      text: 'A liquid staking token stacks new risks on top of ordinary staking: smart-contract bugs in the protocol, the receipt trading below the underlying ([[depeg]]) in stressed markets, and a systemic concern — if one protocol controls too much of a chain\'s total stake, the chain\'s decentralization quietly erodes. Convenience is real; so is the added trust.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The spectrum, end to end',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Solo validator** — maximum decentralization and full rewards; you carry the hardware, uptime, and key risk.',
        '**Delegation** — you keep custody and share rewards, but you inherit your validator\'s slashing fate.',
        '**Liquid staking** — liquidity plus yield, with smart-contract, depeg, and concentration risk layered on.',
        '**Exchange staking** — one click on a CEX: simplest of all, [[custodial]] by definition. "Not your keys, not your coins" applies to staked coins too.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Read the list top to bottom and one variable moves: **responsibility traded for trust**. None of the options is wrong — but each step down delegates more of the job, and the risk, to someone whose incentives you should understand before your tokens back their signature.',
    },
  ],

  takeaways: [
    'A validator proposes and attests to blocks around the clock; rewards only flow to validators that show up.',
    'Penalties punish absence (small, leak-like); slashing punishes provable dishonesty (stake destroyed, validator ejected).',
    'Correlated slashing means mass misbehavior costs far more — and duplicate keys are the classic self-inflicted slashing.',
    'Delegation shares rewards and, on many chains, the validator\'s slashing — pick operators on reliability, not just rate.',
    'Liquid staking unlocks staked capital via receipt tokens, adding contract, depeg, and stake-concentration risks.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What distinguishes slashing from ordinary penalties?',
        options: [
          'Slashing is for being offline; penalties are for dishonesty',
          'Penalties punish absence with small leaks; slashing destroys stake for provable dishonesty like signing contradictions',
          'They are two names for the same thing',
          'Penalties only apply to delegators',
        ],
        answer: 1,
        explanation: 'Downtime costs roughly what you would have earned; signed contradictions (double proposals, conflicting votes) trigger slashing and ejection.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'Running the same validator keys on two machines "for redundancy" is a safe way to improve uptime.',
        answer: false,
        explanation: 'False — both machines will eventually sign conflicting messages, which is exactly the provable contradiction slashing exists to punish.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'On many PoS chains, delegators\' stake is slashed alongside their chosen validator\'s.',
        answer: true,
        explanation: 'True — delegation shares the validator\'s fate, not just its rewards. Operator reliability matters as much as the advertised rate.',
      },
      {
        id: 'q4',
        type: 'fib',
        prompt: 'Protocols that stake your tokens and give you a tradable receipt token (like stETH) in return are called ______ staking.',
        accept: ['liquid'],
        explanation: 'Liquid staking keeps staked capital usable — at the cost of smart-contract, depeg, and stake-concentration risks.',
      },
      {
        id: 'q5',
        type: 'mc',
        prompt: 'Moving along the spectrum from solo staking to exchange staking, what fundamentally changes?',
        options: [
          'The blockchain being staked on',
          'Responsibility is progressively traded for trust in someone else',
          'The rewards strictly increase',
          'Slashing stops existing',
        ],
        answer: 1,
        explanation: 'Each step outsources more of the job — and more of the risk — to an operator, protocol, or custodian whose incentives you must trust.',
      },
    ],
  },
}
