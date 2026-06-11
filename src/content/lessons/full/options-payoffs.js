/**
 * FULL LESSON — Options & Payoff Structures. Calls and puts, the four basic
 * positions, reading a payoff diagram with a worked example, moneyness and
 * what drives premiums (volatility, time decay), and the asymmetric risk of
 * selling. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'options-payoffs',
  tier: 3,
  title: 'Options & Payoff Structures',
  summary: 'Calls, puts, and reading payoff diagrams.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'Futures and perps commit you: once in, you win or lose point-for-point with the price. An **option** is different — it is the *right*, but not the obligation, to trade at a fixed price. That one word, "right," bends the payoff into asymmetric shapes no future can make: capped losses with open upside, insurance on a portfolio, income from sideways markets. It also creates brand-new ways to lose money politely and slowly.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Calls and puts',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'A [[call-option|call]] is the right to **buy** the asset at a fixed [[strike-price|strike price]] until expiry — you want the price to go **up**.',
        'A [[put-option|put]] is the right to **sell** at the strike — you want the price to go **down** (or you own the asset and want protection).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Every option has a buyer and a seller (the **writer**). The buyer pays an upfront price — the [[option-premium|premium]] — for the right. The writer pockets the premium and takes on the **obligation** to deliver if the buyer exercises. That asymmetry is the entire subject: the buyer\'s loss is capped at the premium; the writer\'s is not.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Reading a payoff diagram',
    },
    {
      type: 'paragraph',
      text: 'A payoff diagram plots your profit or loss (vertical) against the asset\'s price at expiry (horizontal). Options produce the famous **hockey-stick** shapes: flat where the option expires worthless, then a straight diagonal once the strike is crossed. Walk through one concrete example and you can read them all:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Worked example: a $60,000 BTC call for a $2,000 premium',
      text: 'At expiry — BTC at $55,000: the right to buy at 60k is worthless; you lose the $2,000 premium, and that is the maximum possible loss. At $60,000–$62,000: the option has value but less than you paid; partial loss. At $62,000 (strike + premium): breakeven. At $70,000: worth $10,000, minus $2,000 premium = $8,000 profit — and the upside keeps going.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The four basic positions',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Long call** — bullish. Risk: the premium. Reward: uncapped above the strike.',
        '**Long put** — bearish, or insurance. Risk: the premium. Reward: grows as price falls toward zero.',
        '**Short call** — you collect the premium betting price stays below the strike. Reward: the premium, capped. Risk: **uncapped** — there is no ceiling on how high the asset can go.',
        '**Short put** — you collect the premium betting price stays above the strike. Reward: the premium. Risk: large — you are obligated to buy all the way down.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Puts as insurance',
      text: 'The most defensible beginner use of options is the **protective put**: you hold the asset and buy a put below the current price. If the market crashes, the put pays out — exactly like an insurance policy, with the premium as the insurance cost. You pay a known fee to delete the catastrophic left tail. This is [[hedge|hedging]] in its purest form.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What you are paying for: moneyness, volatility, time',
    },
    {
      type: 'paragraph',
      text: 'An option is **in the money** (ITM) if exercising it now would pay, **at the money** (ATM) near the strike, **out of the money** (OTM) beyond it. The premium splits into two parts: **intrinsic value** (what exercise pays today — only ITM options have any) and **time value** (the price of what might still happen). Two forces dominate time value: **volatility** — wilder assets command bigger premiums, which is why crypto options are notoriously expensive — and **time itself**.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Theta: the buyer\'s silent rent',
      text: 'Time value melts every day the option exists — a decay called **theta** — and it melts fastest near expiry. An option buyer is not just betting on direction; they are betting the move arrives *before the clock erases the premium*. You can be right about direction, too slow, and still lose everything you paid. Most casual buyers of cheap OTM options lose the premium, most of the time.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Selling options: picking up coins in front of a steamroller',
      text: 'Writing options collects steady premiums and feels like free income — until one violent move hands the writer an uncapped loss that erases months of gains. In crypto\'s volatility this is not hypothetical. Never write options without collateral you can afford to commit and a full grasp of the worst case. Nothing in this lesson is financial advice.',
    },
    {
      type: 'paragraph',
      text: 'Crypto\'s options market is real but much smaller than its perps market, concentrated on a handful of venues and (mostly) cash-settled. For this course the durable skill is reading the payoff shape: cap here, open end there, breakeven at strike-plus-premium. Combine the four basic positions and you can decode almost any structured trade — and judge whether the person promoting it understands the left side of their own diagram. The module closes next with the discipline that governs all of these instruments: risk management.',
    },
  ],

  takeaways: [
    'An option is the right, not the obligation, to buy (call) or sell (put) at a strike price by expiry.',
    'Buyers risk only the premium; writers collect it and accept potentially uncapped obligations.',
    'Payoff diagrams are read from the strike: flat (premium lost) until the strike, then a diagonal; breakeven = strike ± premium.',
    'Premiums = intrinsic value + time value; volatility raises them, and theta decay erodes them daily.',
    'Protective puts are insurance on holdings; naked option writing is the classic path to catastrophic loss.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'A call option gives its buyer:',
        options: [
          'The obligation to buy at the strike price',
          'The right, but not the obligation, to buy at the strike price',
          'The right to sell at the strike price',
          'A share of the exchange\'s fees',
        ],
        answer: 1,
        explanation: 'Calls confer the right to buy at the strike; the buyer can simply walk away (losing the premium) if exercising doesn\'t pay.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'The maximum possible loss for an option buyer is the premium they paid.',
        answer: true,
        explanation: 'True — if the option expires worthless, the buyer loses the premium and nothing more. The writer carries the open-ended risk.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'You buy a call with a $60,000 strike for a $2,000 premium. Your breakeven price at expiry is $______. (a number)',
        accept: ['62,000', '62000', '62k', '$62,000', '$62000'],
        explanation: 'Breakeven for a long call = strike + premium: the option must be worth what you paid for it before profit begins.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why is writing (selling) a call without owning the asset considered especially dangerous?',
        options: [
          'The premium must be refunded at expiry',
          'The potential loss is uncapped — there is no limit to how high the price can rise',
          'It is illegal on most exchanges',
          'It always triggers theta decay',
        ],
        answer: 1,
        explanation: 'The writer\'s gain is capped at the premium, but the obligation to deliver has no ceiling — one violent rally can erase months of collected premiums.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'An option buyer can be right about the direction of the market and still lose money.',
        answer: true,
        explanation: 'True — time decay (theta) erodes the premium daily. If the move comes too slowly or too small, the option can still expire worth less than was paid.',
      },
    ],
  },
}
