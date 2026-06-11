/**
 * FULL LESSON — the ADVANCED showcase. Embeds the Perpetual Futures P&L
 * calculator (entry, size, leverage, long/short → liquidation price, P&L,
 * funding cost). Quiz mixes mc + tf.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'perpetual-futures',
  tier: 3,
  title: 'Perpetual Futures & Liquidation',
  summary: 'Leverage, liquidation price, P&L across exits, and the funding rate — with a live calculator.',
  minutes: 13,

  blocks: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Advanced & high-risk',
      text: 'Leveraged trading can lose your entire deposit in minutes. This lesson is educational — it teaches the mechanics so you can understand the risk, not so you should take it. Nothing here is financial advice.',
    },
    {
      type: 'paragraph',
      text: 'A [[perpetual|perpetual future]] ("perp") is the most-traded instrument in crypto. It lets you take a leveraged long or short position on an asset\'s price with **no expiry date** — unlike traditional futures, it never settles. Two mechanisms make that work: [[leverage]] and the [[funding-rate|funding rate]].',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Leverage and margin',
    },
    {
      type: 'paragraph',
      text: '[[leverage|Leverage]] lets you control a position larger than your capital. With $1,000 and 10× leverage you control a $10,000 position. Your $1,000 is the [[margin]] — the collateral backing it. Leverage multiplies both directions equally: a 1% move in your favor is +10% on your margin; a 1% move against you is −10%.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Liquidation: the hard floor',
    },
    {
      type: 'paragraph',
      text: 'Because your margin is finite, there is a price at which your losses would wipe it out. At that **liquidation price** the exchange force-closes your position to protect itself from a negative balance. Higher leverage means the liquidation price sits closer to your entry — a smaller adverse move ends the trade.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The intuition',
      text: 'At 10× leverage a roughly 10% move against you wipes out your margin → liquidation. At 50× it is only ~2%. The calculator below makes this concrete: raise the leverage and watch the liquidation price march toward your entry.',
    },
    {
      // INTERACTIVE WIDGET EMBED — the advanced perps P&L calculator.
      type: 'widget',
      widget: 'perps',
      props: {
        entry: 30000,
        size: 1,
        leverage: 10,
        side: 'long',
      },
      caption: 'Set entry, size, leverage and side. See liquidation price, P&L at a target, and a funding-cost example.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The funding rate',
    },
    {
      type: 'paragraph',
      text: 'With no expiry, what keeps a perp\'s price near the real ("spot") price? The [[funding-rate|funding rate]]: a small periodic payment (commonly every 8 hours) exchanged **directly between longs and shorts**. When the perp trades above spot, longs pay shorts, nudging them to close — and vice versa. The exchange does not take this; it flows between traders.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Funding is a carrying cost',
      text: 'If you hold a leveraged long while funding is positive, you bleed a little to shorts every interval. Over days this adds up and can quietly erode an otherwise-correct trade. The calculator estimates this cost for your position size.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Putting it together',
    },
    {
      type: 'paragraph',
      text: 'A perp position is defined by entry, size, leverage, and side — from which everything else follows: liquidation price, P&L at any exit, and ongoing funding cost. Master those four inputs and you can read any perp trade. Risk management (position sizing, stops) is its own lesson, but the first rule is simple: **the higher the leverage, the less room for error**.',
    },
  ],

  takeaways: [
    'A perpetual future is a no-expiry leveraged position on an asset\'s price.',
    'Leverage multiplies gains and losses equally; your margin is finite collateral.',
    'Liquidation force-closes you when losses would exhaust margin; higher leverage = closer liquidation price.',
    'The funding rate is paid between longs and shorts to keep the perp tethered to spot — a real carrying cost.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'You open a long with $1,000 margin at 10× leverage. Roughly how far must the price fall to liquidate you (ignoring fees)?',
        options: ['About 1%', 'About 10%', 'About 50%', 'About 100%'],
        answer: 1,
        explanation: 'At 10× leverage a ~10% adverse move wipes out your margin, triggering liquidation.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'Higher leverage moves your liquidation price further away from your entry, making you safer.',
        answer: false,
        explanation: 'False — higher leverage moves the liquidation price CLOSER to entry, so a smaller move liquidates you.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Who pays the funding rate?',
        options: [
          'The exchange pays all traders',
          'It flows directly between longs and shorts',
          'Only new traders pay it',
          'Governments collect it as tax',
        ],
        answer: 1,
        explanation: 'Funding is exchanged between longs and shorts to keep the perp price near spot; the exchange does not take it.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A perpetual future has no expiry date, unlike a traditional future.',
        answer: true,
        explanation: 'True — perps never settle/expire; the funding rate substitutes for the convergence an expiry would force.',
      },
    ],
  },
}
