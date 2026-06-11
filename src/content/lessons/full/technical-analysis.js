/**
 * FULL LESSON — Technical Analysis Basics. The core vocabulary (candles,
 * trend, support/resistance, moving averages, volume), an honest account of
 * why TA "works" when it does, and an equally honest account of its limits.
 * Sets up the risk-management lesson. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'technical-analysis',
  tier: 3,
  title: 'Technical Analysis Basics',
  summary: 'Trend, support/resistance, and the limits of chart reading.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: '**Technical analysis (TA)** is the practice of reading an asset\'s price and volume history to inform trading decisions. It is everywhere in crypto — and it is genuinely contested: serious traders use it daily, while serious academics question whether it predicts anything. This lesson teaches the vocabulary and the honest case for both sides, so you can use TA as a *tool* rather than follow it as a religion.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Candlesticks: the alphabet',
    },
    {
      type: 'paragraph',
      text: 'Charts are usually drawn in [[candlestick|candlesticks]]. Each candle summarizes one time interval — a minute, an hour, a day — with four numbers: **open, high, low, close**. The thick body spans open to close (green/up or red/down); the thin wicks show the extremes reached in between. Long wicks tell you price visited a level and was rejected; the same data, different timeframe, can tell a completely different story — always know which timeframe you are looking at.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Trend: the market\'s direction',
    },
    {
      type: 'paragraph',
      text: 'The most basic read is **trend**: an uptrend makes higher highs and higher lows; a downtrend makes lower highs and lower lows; everything else is a range. The old saw "the trend is your friend" encodes a real statistical observation — trends persist more often than intuition expects — and a practical one: trading against a strong trend means fighting the flow of money.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Support and resistance: levels with memory',
    },
    {
      type: 'paragraph',
      text: '[[support-resistance|Support]] is a price area where falling markets have repeatedly stopped falling; **resistance** is where rising markets have repeatedly stalled. Levels often flip roles: once price finally breaks through a resistance, that same level frequently acts as support on the way back down. Round numbers ($100, $50,000) attract orders for purely psychological reasons.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Moving averages and volume',
    },
    {
      type: 'paragraph',
      text: 'A [[moving-average|moving average]] smooths price over a window (the 50-day and 200-day are the famous ones), turning noise into a visible trend line; price above a rising average is the simplest definition of an uptrend. **Volume** is the lie detector: a breakout on heavy volume reflects real participation, while one on thin volume — common in crypto\'s overnight and weekend hours, as the last lesson showed — is easily a head-fake.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why TA "works" at all: the self-fulfilling prophecy',
      text: 'The strongest honest argument for TA is reflexive: if thousands of traders watch the same support level, their buy orders cluster there — and the level holds *because* everyone expected it to. TA partly describes crowd behavior, and the crowd reads the same charts. That makes popular levels real, without making chart patterns magic.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The honest limits',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Hindsight bias** — every chart is obvious *after* the fact. Patterns you spot looking backward were ambiguous in real time.',
        '**No edge without statistics** — a setup is only an edge if it wins over many trades, measured honestly. Almost nobody who sells TA courses shows that data.',
        '**Regimes change** — a pattern that worked in one market era can quietly stop working. Past prices are not a law of nature.',
        '**Charts are blind to events** — no candle pattern foresees an exchange collapse, a hack, a regulation, or a token unlock. Fundamentals (the Tokenomics lesson ahead) live outside the chart.',
        '**Certainty is a sales pitch** — anyone showing you TA with guaranteed outcomes is marketing, not analyzing.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'TA tells you where, not whether',
      text: 'Used well, TA does not predict the future — it structures decisions: where to enter, where you are wrong, where to take profit. Used badly, it manufactures confidence in coin flips. The difference between those two traders is not the charts; it is the next lesson\'s subject — risk management.',
    },
    {
      type: 'paragraph',
      text: 'The single most useful TA habit costs nothing: before entering any trade, write down the price at which your idea is **invalidated** — the level that proves you wrong. That number is what turns a chart opinion into a managed risk, and it is exactly where the risk-management lesson picks up.',
    },
  ],

  takeaways: [
    'Candlesticks compress each interval into open/high/low/close; wicks show rejected extremes.',
    'Trend = the sequence of highs and lows; support and resistance are price areas with memory that often swap roles.',
    'Moving averages smooth the trend; volume separates real moves from thin-market head-fakes.',
    'TA partly works because it is self-fulfilling — crowds act on the same levels they all watch.',
    'TA structures decisions (entry, invalidation, exit); it does not predict events or guarantee outcomes.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What four prices does a single candlestick represent?',
        options: [
          'Bid, ask, spread, and volume',
          'Open, high, low, and close for its time interval',
          'Yesterday\'s and today\'s averages',
          'Support, resistance, trend, and volume',
        ],
        answer: 1,
        explanation: 'Each candle compresses one interval into open/high/low/close — body from open to close, wicks to the extremes.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'A price area where falling markets have repeatedly stopped falling is called ______.',
        accept: ['support', 'a support level', 'support level'],
        explanation: 'Support is where buying has repeatedly absorbed selling; its mirror image above price is resistance.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'What is the strongest honest explanation for why widely-watched TA levels often hold?',
        options: [
          'Chart patterns control the blockchain',
          'They are enforced by exchanges',
          'Traders cluster their orders at levels everyone watches, making the expectation partly self-fulfilling',
          'Moving averages attract miners',
        ],
        answer: 2,
        explanation: 'TA partly describes crowd behavior — and the crowd reads the same charts, so popular levels become real through the orders placed at them.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A breakout on very low volume is just as trustworthy as one on heavy volume.',
        answer: false,
        explanation: 'False — volume measures participation. Thin-volume breakouts, common in off-hours, are frequently head-fakes.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Used well, TA\'s main job is to structure decisions — entries, invalidation levels, exits — rather than to predict the future.',
        answer: true,
        explanation: 'True — the durable value of TA is decision structure, especially defining in advance where your idea is wrong.',
      },
    ],
  },
}
