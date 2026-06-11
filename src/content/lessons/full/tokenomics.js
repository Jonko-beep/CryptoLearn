/**
 * FULL LESSON — Tokenomics. Opens the Advanced Topics module: supply
 * schedules and emissions, distribution and unlocks, demand and value
 * accrual, sinks/burns, and incentive design — the supply-side science the
 * picking-coins framework builds on next. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'tokenomics',
  tier: 3,
  title: 'Tokenomics',
  summary: 'Supply schedules, emissions, sinks, and incentive design.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'Every price is supply meeting demand. Most market chatter obsesses over demand — narratives, hype, adoption — while the supply side sits in public documents that almost nobody reads. **Tokenomics** is that supply side: how many units exist, who got them, when more arrive, and why anyone needs one. Projects choose all of this deliberately, and the choices often decide an investment before the market gets a vote.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Supply: how many exist — and when',
    },
    {
      type: 'paragraph',
      text: 'Start with two numbers you already know from [[market-cap|market cap]] and [[fdv|FDV]]: **circulating supply** (tradable today) and **maximum supply** (all that will ever exist). Between them sits the [[emissions|emission schedule]] — the rate at which new tokens are released. The main shapes:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Fixed cap, decaying issuance** — Bitcoin\'s 21M with the [[halving]]: predictable, disinflationary, finite.',
        '**Uncapped but managed** — Ethereum has no hard cap; issuance pays validators while a fee burn pulls the other way (more below).',
        '**Deliberate tail inflation** — Monero issues a small, constant trickle forever so miners are always paid.',
        '**High early emissions** — many DeFi tokens print aggressively at launch to bootstrap usage, heavily diluting early buyers.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Distribution: who got them first',
    },
    {
      type: 'paragraph',
      text: 'Two tokens with identical schedules can be opposite investments depending on **who holds the supply**. Bitcoin is the purest "fair launch": no pre-mine, no allocation — every coin was mined into existence under public rules. Most modern tokens instead launch with an allocation pie: a slice to the team, slices to early investors, a treasury, and a community share. None of that is automatically bad — builders need funding — but it concentrates supply with insiders whose tokens unlock on a [[vesting]] schedule. The consequence is the **low-float/high-FDV trap**: when large unlocks hit a thin circulating float, ordinary holders become the insiders\' exit liquidity. Always find the allocation chart and the unlock calendar.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Demand: what is the token for?',
    },
    {
      type: 'paragraph',
      text: 'Supply tells you the dilution; demand tells you who absorbs it. The honest question is **value accrual** — what does holding the token actually entitle you to?',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Gas** — using the chain requires the coin (ETH, SOL): demand scales with real usage.',
        '[[staking|Staking]] — the token secures the network and earns yield, locking supply while it works.',
        '**Fee share / burn** — protocol revenue flows to holders, directly or by destroying supply.',
        '**Governance** — votes over a protocol and (sometimes) its treasury.',
        '**Nothing** — many tokens confer no claim at all; their only "use" is being sold to someone later. Price that honestly.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Sinks and burns: where supply goes to disappear',
    },
    {
      type: 'paragraph',
      text: 'Good designs include **sinks** — mechanisms that remove or lock supply against the emission flow. Staking and collateral lock tokens up; a [[token-burn|burn]] destroys them outright. Ethereum is the flagship example: since 2021, a portion of every transaction fee is burned, so heavy network usage destroys ETH — at times faster than issuance creates it. A useful mental model for any token: **emissions are the faucet, sinks are the drain. Which is running faster, and is the drain powered by real usage or by subsidy?**',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Incentive design: the part that fails quietly',
    },
    {
      type: 'paragraph',
      text: 'Emissions are also a tool: projects print tokens to pay early users — liquidity mining, points, rewards — hoping rented activity becomes real adoption. The failure mode is **mercenary capital**: yield-chasers who farm the emissions, sell them continuously, and leave the moment rewards dry up, taking the "growth" with them. The pattern to respect is the one Bitcoin\'s halving lesson taught: subsidies that *step down* on a schedule, with real fee demand designed to replace them. If a project\'s yield exists only because the printer is on, the tokenomics are the product — and you are the buyer of it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The four-question audit',
      text: 'Any token, four questions: ① How many will exist, on what schedule? ② Who holds them now, and when do the locked ones arrive? ③ Why would anyone *need* one — what accrues to holders? ④ What removes supply, and is it powered by usage or subsidy? Strong answers to all four are rare — which is exactly the point.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Tokenomics filters; it does not pick',
      text: 'Clean tokenomics cannot make a useless product valuable — but broken tokenomics reliably sinks useful ones. Treat this lesson as the supply-side half of due diligence; the next lesson assembles it, with fundamentals and market quality, into a full framework for evaluating any coin or token.',
    },
  ],

  takeaways: [
    'Tokenomics is the supply side of price: how many tokens exist, who holds them, when more arrive, and why anyone needs one.',
    'Emission schedules range from Bitcoin\'s fixed cap to aggressive DeFi printing — the schedule is the dilution forecast.',
    'Distribution and vesting decide whose tokens hit the market when; thin floats with big unlocks make buyers exit liquidity.',
    'Demand is value accrual: gas, staking, fee share/burn, governance — or honestly nothing.',
    'Emissions are the faucet, sinks are the drain; durable designs replace subsidies with usage-driven demand over time.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What does a token\'s emission schedule tell you?',
        options: [
          'The token\'s current price',
          'The rate at which new tokens enter circulation — effectively a forecast of future dilution',
          'The number of validators',
          'The exchange listing date',
        ],
        answer: 1,
        explanation: 'Emissions are the supply faucet: they tell you how fast existing holders are diluted, independent of anything demand does.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Permanently destroying tokens to reduce supply is called a ______.',
        accept: ['burn', 'token burn', 'burning'],
        explanation: 'A burn removes tokens forever — Ethereum burns part of every transaction fee, tying supply reduction to real usage.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Why does it matter WHO holds a token\'s supply, not just how much exists?',
        options: [
          'Some wallets display balances incorrectly',
          'Concentrated insider holdings on vesting schedules unlock into the market — and buyers absorb that selling',
          'Only exchanges are allowed to hold large amounts',
          'It does not matter; supply is supply',
        ],
        answer: 1,
        explanation: 'Distribution plus the unlock calendar tells you when locked supply hits the float — the low-float/high-FDV trap in action.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: '"Mercenary capital" refers to:',
        options: [
          'Venture funds that invest in security firms',
          'Yield-chasers who farm a project\'s token emissions, sell continuously, and leave when rewards stop',
          'Miners who switch chains for higher fees',
          'Market makers on a CEX',
        ],
        answer: 1,
        explanation: 'Emission-funded yield attracts capital rented, not earned — when the printer slows, the activity (and price support) leaves with it.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Ethereum burns a portion of every transaction fee, so heavy network usage actively reduces ETH supply.',
        answer: true,
        explanation: 'True — since 2021 the base fee of each transaction is burned, making net issuance fall (sometimes below zero) when usage is high.',
      },
    ],
  },
}
