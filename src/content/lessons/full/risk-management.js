/**
 * FULL LESSON — Risk Management. The survival math that closes the Markets &
 * Derivatives module: position sizing, stops as invalidation, risk/reward and
 * expectancy, drawdown asymmetry, leverage discipline, and portfolio-level
 * correlation. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'risk-management',
  tier: 3,
  title: 'Risk Management',
  summary: 'Position sizing, stops, and surviving variance.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'This is the most important lesson in the advanced tier. Markets, charts, leverage — none of it matters if you don\'t survive long enough to use it. Amateurs ask "how much can I make?"; professionals ask "**how much can I lose, and can I afford it?**" Everything below is that question, made into arithmetic.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Position sizing: the 1–2% rule',
    },
    {
      type: 'paragraph',
      text: 'The cornerstone habit: risk only a small, fixed fraction of your account — commonly **1–2%** — on any single trade. "Risk" means the amount you lose *if your stop is hit*, not the size of the position. The position size follows from the math:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The sizing formula',
      text: 'Position size = (account × risk %) ÷ (distance from entry to stop). Example: a $10,000 account risking 1% may lose $100. If your stop sits 5% below entry, your position is $100 ÷ 0.05 = $2,000. The stop distance sets the size — never the other way around.',
    },
    {
      type: 'paragraph',
      text: 'Sized this way, no single trade matters much — at 1% risk, even **ten consecutive losses** drains less than 10% of the account. Variance stops being an emergency and becomes a line item.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Stops: decided before, honored during',
    },
    {
      type: 'paragraph',
      text: 'The last lesson ended by asking you to write down your **invalidation level** — the price that proves your idea wrong. That level is where your [[stop-loss]] goes: at the point where the *reason for the trade* no longer exists, not at a round number of pain. The cardinal sin is moving a stop further away once price approaches it — that converts a planned small loss into an unplanned large one, and it is how accounts die.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Risk/reward and expectancy',
    },
    {
      type: 'paragraph',
      text: 'Before entering, compare the distance to your stop against the distance to your target: the [[risk-reward|risk/reward ratio]]. At 1:2 — risking $100 to make $200 — you can be wrong **more than half the time and still come out ahead**. This is the quiet liberation of trading math: you do not need to be right often; you need your wins, on average, to outweigh your losses. That long-run average is called expectancy, and a strategy is only worth running if it is positive over many trades.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The asymmetry of drawdowns',
      text: 'Losses are not symmetric with gains. Lose 10% and a gain of ~11% gets you back to even. Lose 50% and you need **+100%**. Lose 90% and you need a 10×. This is why the entire discipline tilts toward defense: a deep [[drawdown]] is not just painful, it is mathematically expensive to climb out of.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Leverage: the multiplier on everything above',
    },
    {
      type: 'paragraph',
      text: 'From the perpetual futures lesson you know [[leverage]] moves your liquidation price toward your entry. In risk terms: leverage shrinks the room between you and being wrong. Most blown crypto accounts are not the result of bad analysis — they are ordinary losing streaks, oversized and leveraged into being fatal. If a position needs high leverage to be exciting, the honest fix is a bigger edge, not a bigger multiplier.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Portfolio-level risk: crypto moves together',
    },
    {
      type: 'paragraph',
      text: 'Sizing single trades is not enough, because crypto assets are heavily **correlated** — when Bitcoin drops hard, nearly everything drops with it. Ten "diversified" altcoin positions can behave like one large position in disguise. Cap your total exposure, keep reserves (in [[fiat]] or [[stablecoin|stablecoins]]) so a crash finds you a buyer rather than a forced seller — and remember that risk is not only market risk: the security habits from the beginner tier (self-custody, scam defense) protect the account no stop-loss can.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Write the rules when calm',
      text: 'Decide your risk per trade, maximum total exposure, and stop discipline in writing, on a normal day. Then keep a journal: entry, exit, size, reason, result. During a 3am crash you will not make good decisions — you will follow whatever rules already exist. Make sure they do.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The rule above the rules',
      text: 'Never trade money you cannot afford to lose entirely. Good strategies have brutal losing streaks; risk management makes them survivable, not impossible. Nothing in this lesson is financial advice — it is the arithmetic of staying in the game.',
    },
  ],

  takeaways: [
    'Risk a fixed 1–2% of the account per trade; the stop distance determines the position size, never the reverse.',
    'Stops belong at your invalidation level, set before entry — moving them away mid-trade is how accounts die.',
    'With good risk/reward (1:2+), you can be wrong most of the time and still profit; expectancy over many trades is what counts.',
    'Drawdowns are asymmetric: −50% needs +100% to recover. Defense is mathematically cheaper than recovery.',
    'Crypto is heavily correlated — cap total exposure, keep reserves, and count security as part of risk.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Using the 1% rule with a $10,000 account and a stop 5% below entry, how large should the position be?',
        options: ['$100', '$500', '$2,000', '$10,000'],
        answer: 2,
        explanation: 'Risk budget = $100 (1% of $10,000). Position = $100 ÷ 0.05 = $2,000 — so hitting the stop loses exactly the budgeted $100.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'After a 50% drawdown, you need a gain of ______% just to get back to even.',
        accept: ['100', '+100', '100%'],
        explanation: 'Losses compound against you: half the account doubled is only the original amount. This asymmetry is why defense dominates.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'With a 1:2 risk/reward ratio, a trader who wins only 40% of trades is losing money overall.',
        answer: false,
        explanation: 'False — at 1:2, 40% wins yields 0.4×2R − 0.6×1R = +0.2R per trade on average. Win rate alone says nothing without the payoff ratio.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'When price approaches your stop-loss, a sound tactic is to move the stop further away to give the trade room.',
        answer: false,
        explanation: 'False — the stop marks where your idea is invalid. Moving it converts a planned small loss into an unplanned large one.',
      },
      {
        id: 'q5',
        type: 'mc',
        prompt: 'Why is holding ten different altcoins weaker diversification than it appears?',
        options: [
          'Altcoins have no order books',
          'Crypto assets are heavily correlated — in a sharp Bitcoin drop, nearly everything falls together',
          'Exchanges forbid holding more than five assets',
          'Diversification only works with stocks',
        ],
        answer: 1,
        explanation: 'High correlation means many crypto positions behave like one big position in disguise — cap total exposure, not just per-trade risk.',
      },
    ],
  },
}
