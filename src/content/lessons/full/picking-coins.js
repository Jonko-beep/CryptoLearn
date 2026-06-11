/**
 * FULL LESSON — Picking Coins & Tokens. An advanced due-diligence framework:
 * fundamentals, tokenomics (market cap vs FDV, unlocks), market quality,
 * red flags, and survivable strategies. Deliberately heavy on disclaimers —
 * it teaches evaluation, not picks. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'picking-coins',
  tier: 3,
  title: 'Picking Coins & Tokens — A Framework',
  summary: 'How to research a coin before buying: fundamentals, tokenomics, liquidity, red flags, and strategies that manage risk.',
  minutes: 13,

  blocks: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Education, not financial advice',
      text: 'This lesson teaches you how to *evaluate* a crypto asset — it does not tell you what to buy. Most tokens lose most of their value; even flawless research can end in a loss. Never invest money you cannot afford to lose. Nothing here is financial advice.',
    },
    {
      type: 'paragraph',
      text: 'There are millions of coins and tokens, and the overwhelming majority will go to roughly zero. That base rate is the most important fact in this lesson. The goal of due diligence is not to find guaranteed winners — those don\'t exist — it is to **filter out the obvious losers and scams** so that whatever risk you take is at least a deliberate one.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Start with the fundamentals',
    },
    {
      type: 'paragraph',
      text: 'Before looking at any chart, interrogate the project the way you would a startup:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**What problem does it solve — and does it need a token?** Many projects bolt a token onto something that would work fine without one. If the token exists mainly to be sold to you, that is the business model.',
        '**Who is building it?** Named teams with track records, credible backers, and shipped products beat anonymous accounts with big promises. (Anonymity alone isn\'t disqualifying — Bitcoin\'s creator is anonymous — but it removes accountability.)',
        '**Is it actually used?** Look for real activity: active addresses, fees paid, value locked in the protocol — not just trading volume. A [[token]] can trade billions while the product has no users.',
        '**Who are the competitors?** A "faster Ethereum" competes with Ethereum *and* every other faster Ethereum. Ask why this one wins.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Read the tokenomics',
    },
    {
      type: 'paragraph',
      text: 'Tokenomics — the supply and incentive design — is where most retail investors get hurt, because price depends on supply as much as demand. Three numbers matter most:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '[[market-cap|Market cap]] — price × **circulating** supply. What the market currently values the liquid part of the project at.',
        '[[fdv|FDV (fully diluted valuation)]] — price × **maximum** supply. What it would be worth if every token existed today.',
        '**The gap between them.** A token with a $50M market cap but a $2B FDV has 40× its current supply still waiting to enter circulation — constant selling pressure as it unlocks.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The low-float / high-FDV trap',
      text: 'A common pattern: launch with a tiny circulating supply so early hype pumps the price, while insiders hold huge allocations on a [[vesting]] schedule. As their tokens unlock, they sell into the demand *you* provide. Always check the unlock schedule before buying — if insiders unlock soon, you are their exit liquidity.',
    },
    {
      type: 'paragraph',
      text: 'Also check **who holds it** (a block explorer shows the top wallets — a few addresses holding most of the supply can dump on you at will) and **what the token entitles you to**. Fee share? Governance? [[staking|Staking]] yield? Or nothing but the hope of selling higher?',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Check the market quality',
    },
    {
      type: 'paragraph',
      text: 'A good project can still be a bad market. [[liquidity|Liquidity]] — how much you can buy or sell without moving the price — determines whether you can actually exit a position. Thin liquidity means even a modest sell order crashes the price; it is also easy to manipulate. Prefer assets with deep liquidity on reputable venues, and be skeptical of reported volume on obscure exchanges — wash trading is rampant.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Red flags: when to walk away',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**"Guaranteed" or absurdly high returns** — yield has to come from somewhere; if you can\'t identify the source, the source is later depositors.',
        '**Anonymous team + aggressive marketing** — accountability nowhere, hype everywhere. The classic [[rug-pull]] setup.',
        '**Huge insider allocations with short vesting** — check the tokenomics page; if the team and VCs unlock within months, expect supply to rain down.',
        '**Paid shilling and manufactured urgency** — influencer promos, countdown timers, "last chance" presales. Real projects don\'t need you *today*.',
        '**Unaudited contracts or admin keys** — if a deployer can mint tokens or freeze transfers, your investment exists at their pleasure.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Strategies that survive contact with reality',
    },
    {
      type: 'paragraph',
      text: 'Even with perfect research you will be wrong often — crypto picking is closer to venture investing than stock picking. Strategy is what keeps being wrong survivable:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Write a thesis before you buy.** One paragraph: why this wins, and what evidence would prove you wrong. If you can\'t write it, you are gambling, not investing.',
        '**Size positions so a zero doesn\'t hurt.** Speculative tokens should be small slices of a portfolio you could lose entirely without changing your life.',
        '[[dca|Dollar-cost average]] **in and out** instead of trying to time tops and bottoms — it removes emotion from execution.',
        '**Decide your exit in advance.** At what price, or on what broken thesis, do you sell? Plans made calmly beat decisions made at 3am during a crash.',
        '**Ignore FOMO by default.** If you are buying *because* it already pumped, you are late by definition. There is always another opportunity.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'A five-minute DYOR checklist',
      text: 'Before any buy: ① read the docs — does the token have a purpose? ② check market cap vs FDV and the unlock schedule, ③ look at the top holders on a block explorer, ④ check liquidity and where it trades, ⑤ search the team and audits. If any step fails or can\'t be answered, that *is* your answer.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Process over picks',
      text: 'Notice that this lesson never named a coin to buy. That is the point: tips that name tickers expire in weeks; a research process lasts. The Tokenomics and Risk Management lessons you have already taken deepen two parts of this framework; On-Chain Analysis (on the roadmap) will add a third.',
    },
  ],

  takeaways: [
    'Most tokens go to zero — due diligence filters obvious losers and scams; it cannot find guaranteed winners.',
    'Fundamentals first: a real problem, a credible team, actual usage, and a reason the token needs to exist.',
    'Compare market cap to FDV and check unlock schedules — a low float with heavy insider vesting makes you exit liquidity.',
    'Liquidity determines whether you can exit; thin or wash-traded markets are dangerous regardless of the project.',
    'Survive being wrong: write a thesis, size small, DCA, plan exits in advance, and never buy from FOMO.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'A token has a $50M market cap but a $2B FDV. What does that gap tell you?',
        options: [
          'The token is undervalued by 40×',
          'Most of the supply has yet to enter circulation, creating future selling pressure',
          'The project has $2B in revenue',
          'Liquidity is guaranteed to be deep',
        ],
        answer: 1,
        explanation: 'FDV counts the maximum supply; a large gap means most tokens are still locked and will unlock into the market over time.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'A project advertising "guaranteed" high returns is a strong red flag.',
        answer: true,
        explanation: 'True — yield must come from somewhere. When the source can\'t be identified, it is usually later depositors (a Ponzi structure).',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Buying a fixed amount at regular intervals instead of timing the market is called dollar-cost ______.',
        accept: ['averaging', 'average', 'dca'],
        explanation: 'Dollar-cost averaging (DCA) spreads your entries over time, removing emotion and timing risk from execution.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why does thin liquidity matter even for a fundamentally good project?',
        options: [
          'It increases the staking yield',
          'You may be unable to sell without crashing the price, and the market is easier to manipulate',
          'It means the team is anonymous',
          'It lowers the FDV',
        ],
        answer: 1,
        explanation: 'Liquidity is your exit. In a thin market, even modest sells move the price sharply, and manipulation is cheap.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'If a project has a strong team and real users, its token price is guaranteed to go up.',
        answer: false,
        explanation: 'False — good fundamentals improve the odds but guarantee nothing. Tokenomics, market conditions, and luck all intervene; size positions accordingly.',
      },
    ],
  },
}
