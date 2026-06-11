/**
 * FULL LESSON — Futures vs Perpetual Swaps. Introduces derivatives, classic
 * expiry-based futures (settlement, basis, contango/backwardation,
 * convergence), and then the perpetual twist — no expiry, funding instead —
 * setting up the deep perps lesson that follows. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'futures-vs-perps',
  tier: 3,
  title: 'Futures vs Perpetual Swaps',
  summary: 'Expiry-based futures and how perpetuals differ.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Everything so far traded the asset itself — **spot**. The rest of this module is about [[derivative|derivatives]]: contracts whose value *derives* from an asset\'s price without you ever holding the asset. Traders use them to get [[leverage]], to **short** (profit from falls), and to [[hedge|hedge]] existing holdings. The two giants of crypto derivatives are the classic futures contract and its mutant offspring, the perpetual swap.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The classic futures contract',
    },
    {
      type: 'paragraph',
      text: 'A [[futures-contract|future]] is an agreement to buy or sell an asset at a set price on a set **expiry date**. The idea is centuries old and was born from hedging: a farmer locks in a grain price before harvest; an airline locks in fuel. In crypto, exchanges list contracts expiring monthly or quarterly — and since 2017, regulated venues like the CME have offered cash-settled bitcoin futures, the door through which many institutions first touched crypto.',
    },
    {
      type: 'paragraph',
      text: 'At expiry the contract **settles**: either the asset actually changes hands (physical settlement) or — far more common in crypto — the difference is simply paid in cash against the spot price (cash settlement). Either way, expiry is an appointment with reality.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The basis: futures don\'t trade at spot',
    },
    {
      type: 'paragraph',
      text: 'Before expiry, a future\'s price floats freely on supply and demand, so it usually differs from spot. That gap is the [[basis]]. When futures trade **above** spot the market is in **contango** — typical when traders are bullish and willing to pay up for leveraged exposure. Futures **below** spot is **backwardation**, often a sign of stress or heavy demand to short.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Convergence: expiry is the anchor',
      text: 'Whatever the basis does in between, at expiry the future must settle against spot — so the two prices are pulled together as the date approaches. This convergence is the futures market\'s built-in honesty mechanism: the premium can stretch, but the expiry date always reels it back in.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'How pros harvest the basis',
      text: 'A persistent contango funds the classic "cash-and-carry" trade: buy spot, short the future against it, and pocket the basis as the prices converge — roughly market-neutral, since the long and short offset. When you hear about "basis trades" or crypto\'s "risk-free yield" in bull markets, this is the machine behind it.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The perpetual twist: delete the expiry',
    },
    {
      type: 'paragraph',
      text: 'Expiry is also a nuisance: positions must be closed or **rolled** into the next contract, and liquidity splinters across many expiry dates. Crypto\'s answer (popularized by BitMEX in 2016) was the [[perpetual|perpetual swap]]: a future with **no expiry at all**. One contract per asset, hold it forever, never roll.',
    },
    {
      type: 'paragraph',
      text: 'But deleting the expiry deletes the anchor — nothing forces the perp\'s price back to spot. The replacement is the [[funding-rate|funding rate]]: a periodic payment between longs and shorts that nudges the perp toward spot continuously, doing as a steady drip what expiry did as a deadline. The next lesson takes the perp apart in detail — leverage, liquidation, and that funding mechanism.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Side by side',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Expiry** — futures settle on a date; perps never do.',
        '**Anchor to spot** — futures converge at expiry; perps are tethered continuously by funding payments.',
        '**Contracts per asset** — futures fragment across monthly/quarterly expiries; a perp is one deep market.',
        '**Typical users** — expiry futures suit hedgers and institutions wanting fixed terms; perps dominate crypto\'s speculative volume.',
        '**Carrying cost** — futures embed it in the basis you pay upfront; perps charge it as you go, through funding.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Same leverage, same teeth',
      text: 'Both instruments are usually traded with leverage, and both can liquidate you. Choosing between futures and perps changes the *plumbing* of your exposure, not the risk of being wrong. The module closes with the lesson that manages that risk.',
    },
  ],

  takeaways: [
    'Derivatives track an asset\'s price without holding it — used for leverage, shorting, and hedging.',
    'A future settles at a fixed expiry; the gap between its price and spot is the basis (contango above, backwardation below).',
    'Expiry forces convergence with spot — and a persistent basis funds the cash-and-carry trade.',
    'A perpetual swap removes the expiry and replaces convergence with periodic funding payments between longs and shorts.',
    'Perps won crypto\'s volume through simplicity: one contract, no rolling, tradable forever — with all the leverage risks intact.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What happens to a futures contract at its expiry date?',
        options: [
          'It automatically rolls into a perpetual swap',
          'It settles against the spot price — in cash or by delivering the asset',
          'Its leverage resets to 1×',
          'The funding rate is paid out',
        ],
        answer: 1,
        explanation: 'Expiry is the appointment with reality: the contract settles against spot, which is why the two prices converge as the date approaches.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'The gap between a futures contract\'s price and the spot price is called the ______.',
        accept: ['basis'],
        explanation: 'The basis is positive in contango (futures above spot) and negative in backwardation (futures below spot).',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'A market is in contango when futures trade above the spot price.',
        answer: true,
        explanation: 'True — contango means a premium over spot, common when leveraged demand is bullish. Backwardation is the reverse.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why do perpetual swaps need a funding rate when expiry futures do not?',
        options: [
          'Regulators require it',
          'Perps have no expiry, so nothing else would force their price to converge with spot',
          'To pay the exchange\'s electricity costs',
          'Because perps cannot be shorted',
        ],
        answer: 1,
        explanation: 'Expiry anchors a future to spot. Removing it removes the anchor — funding payments between longs and shorts replace that convergence pressure.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Holding a leveraged position via a perpetual swap instead of an expiry future removes the risk of liquidation.',
        answer: false,
        explanation: 'False — both are leveraged instruments with liquidation mechanics. The choice changes the plumbing (expiry vs funding), not the risk.',
      },
    ],
  },
}
