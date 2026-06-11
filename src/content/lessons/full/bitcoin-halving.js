/**
 * FULL LESSON — Bitcoin's halving and 21M supply cap. Part of the dedicated
 * Bitcoin module. Text + callouts + a schedule list (no widget). Quiz mixes
 * mc / tf / fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'bitcoin-halving',
  tier: 1,
  title: 'The Halving & 21M Cap',
  summary: 'Bitcoin\'s fixed supply schedule: the block subsidy, the four-year halving, and why it caps near 21 million.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Most money has no fixed supply — central banks create more at will. Bitcoin\'s defining economic feature is the opposite: its issuance is **fixed in code**, fully predictable decades in advance, and it stops at roughly **21 million** coins. The mechanism behind that is the halving.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The block subsidy',
    },
    {
      type: 'paragraph',
      text: 'Recall that each mined block pays the winning miner a [[block-subsidy|block subsidy]] of newly minted bitcoin (plus fees). This subsidy is the **only** way new bitcoin is created — there is no other faucet. And it is not constant: it is cut in half at regular intervals.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The halving',
    },
    {
      type: 'paragraph',
      text: 'Every **210,000 blocks** — about **four years** at 10-minute blocks — the subsidy halves. This event is called the [[halving]]. The schedule is mechanical and has run exactly on plan since 2009:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**2009:** 50 BTC per block',
        '**2012:** 25 BTC',
        '**2016:** 12.5 BTC',
        '**2020:** 6.25 BTC',
        '**2024:** 3.125 BTC',
        '**…continuing** to halve every ~4 years until it rounds to zero around the year **2140**.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why it sums to ~21 million',
      text: 'Add it up: 210,000 blocks × 50 BTC, then × 25, then × 12.5, and so on. That is a geometric series that converges. The total ever issued approaches — but never quite reaches — 21 million BTC.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Disinflation by design',
    },
    {
      type: 'paragraph',
      text: 'Each halving cuts the rate of new supply in half, so Bitcoin\'s inflation rate steps down over time toward zero. This is **disinflationary**: new coins keep appearing, but ever more slowly. Unlike a discretionary monetary policy, the schedule cannot be changed without overwhelming agreement across the network — predictability is the whole point.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Satoshis: built to divide',
      text: 'A capped supply does not mean Bitcoin runs out of units. Each bitcoin divides into 100,000,000 [[satoshi|satoshis]], so the system can support tiny payments no matter how valuable a whole coin becomes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The long-run security question',
    },
    {
      type: 'paragraph',
      text: 'Mining is paid by subsidy **plus** fees. As the subsidy shrinks toward zero, transaction [[gas|fees]] must eventually become the main reward that keeps miners — and therefore security — in place. Whether fee revenue alone will be enough to secure the network in the distant future is a genuine open debate, not a settled fact.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Scarcity is not a price prediction',
      text: 'The halving is often hyped as an automatic catalyst for price increases. A predictable, public supply cut is already known to the entire market in advance — it does not guarantee anything about price. This lesson explains the mechanism, not an investment thesis. Nothing here is financial advice.',
    },
  ],

  takeaways: [
    'New bitcoin is created only via the block subsidy paid to miners.',
    'The subsidy halves every 210,000 blocks (~4 years): 50 → 25 → 12.5 → 6.25 → 3.125 …',
    'The halving schedule is a converging geometric series, capping total supply near 21 million BTC.',
    'Issuance is disinflationary and fixed in code; each bitcoin divides into 100 million satoshis.',
    'As the subsidy fades, transaction fees must eventually fund security — an open long-run question.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'How often does the Bitcoin block subsidy halve?',
        options: [
          'Every block',
          'Every 2,016 blocks (~2 weeks)',
          'Every 210,000 blocks (~4 years)',
          'Once, in 2140',
        ],
        answer: 2,
        explanation: 'The subsidy halves every 210,000 blocks — roughly every four years.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Bitcoin\'s total supply is capped at approximately ______ million coins.',
        accept: ['21', 'twenty-one', 'twenty one'],
        explanation: 'The halving schedule is a geometric series that converges to about 21 million BTC.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'A fixed 21M cap means Bitcoin cannot support very small payments.',
        answer: false,
        explanation: 'False — each bitcoin divides into 100,000,000 satoshis, so tiny payments remain possible.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'As the block subsidy shrinks toward zero, what must increasingly fund mining/security?',
        options: [
          'Government grants',
          'Transaction fees',
          'A new, larger subsidy',
          'Staking rewards',
        ],
        answer: 1,
        explanation: 'With the subsidy fading, transaction fees must become the primary incentive for miners.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Because the halving is fully predictable and public, it is not guaranteed to move the price.',
        answer: true,
        explanation: 'True — the market knows the schedule in advance, so the halving is not an automatic price catalyst. (Not financial advice.)',
      },
    ],
  },
}
