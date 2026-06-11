/**
 * FULL LESSON — Market Structure & Order Types. Opens the Markets &
 * Derivatives module: the order book, bids/asks/spread, market vs limit
 * orders, maker/taker, stop orders, and slippage. Foundation for the TA,
 * perps, and risk-management lessons that follow. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'market-structure',
  tier: 3,
  title: 'Market Structure & Order Types',
  summary: 'Order books, makers/takers, market vs limit orders.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'The exchanges lesson showed you *where* trading happens. This one opens the hood: when you press "buy," what machinery actually decides the price you get? The answer is the **order book** — and understanding it is the difference between getting the price you expect and quietly paying more than you should.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The order book: the market, laid bare',
    },
    {
      type: 'paragraph',
      text: 'An [[order-book|order book]] is a live list of everyone\'s standing offers, sorted by price:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Bids** — buy orders, stacked below the current price. The highest bid is the best price anyone will pay right now.',
        '**Asks** — sell orders, stacked above. The lowest ask is the cheapest anyone will sell for right now.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The gap between the best bid and best ask is the [[spread]]. There is no single "the price" — there is only the last trade, and the two walls of orders around it. The amount resting at each price level is the book\'s **depth**: deep books absorb big orders calmly; thin books lurch.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The spread is a cost you pay instantly',
      text: 'Buy at the ask, and you are immediately down by the spread if you turned around and sold at the bid. Tight spreads mean a liquid, competitive market; wide spreads mean illiquidity, volatility, or both. This is the hidden fee behind "instant buy" buttons from the exchanges lesson.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Market orders: pay for immediacy',
    },
    {
      type: 'paragraph',
      text: 'A [[market-order|market order]] says "fill me **now** at the best available price." Execution is guaranteed; price is not. A large market order eats through the book level by level — the first chunk fills at the best ask, the next at a worse one, and so on. The gap between the price you expected and the average price you actually got is [[slippage]].',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Limit orders: set your price',
    },
    {
      type: 'paragraph',
      text: 'A [[limit-order|limit order]] says "fill me at this price **or better** — otherwise wait." You control the price exactly; what you give up is certainty of execution. If the market never comes to your price, the order simply sits there. Your resting order becomes part of the book\'s depth — you are now providing the liquidity that market orders consume.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'This is the maker/taker split from the fees lesson',
      text: 'A resting limit order *makes* liquidity; a market order *takes* it. Exchanges want deep books, so makers usually pay lower fees than takers — sometimes zero. Patient limit orders are often cheaper twice over: better price and lower fee.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Stop orders: automation with caveats',
    },
    {
      type: 'paragraph',
      text: 'A [[stop-loss|stop order]] sleeps until the price crosses a trigger, then activates. The classic use is the **stop-loss**: "if the price falls to X, sell me out." A stop-market order then sells at whatever the book offers — guaranteed exit, unguaranteed price. A stop-limit places a limit order instead — guaranteed price, but in a fast crash the market can blow straight through it and **never fill**, leaving you holding through exactly the move you tried to escape.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Stops are triggers, not promises',
      text: 'In a violent move — and crypto trades 24/7, including thin weekend hours — price can gap past your stop level, filling you far below it. A stop-loss is a seatbelt, not a force field. Position sizing (the Risk Management lesson) is what actually limits your downside.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'One more wrinkle: not every market has a book',
    },
    {
      type: 'paragraph',
      text: 'Order books dominate centralized exchanges, but many [[dex|DEXs]] replace them with automated market makers — liquidity pools priced by formula (covered in the DeFi lesson). The vocabulary transfers: there is still a spread, still depth, and still slippage; only the machinery providing them changes.',
    },
    {
      type: 'paragraph',
      text: 'You can now read a market the way traders do: where the walls of orders sit, what immediacy costs, and which order type fits the job. Next, we look at the most popular — and most misunderstood — way people try to predict where that price goes: technical analysis.',
    },
  ],

  takeaways: [
    'An order book is the live stack of bids and asks; the gap between best bid and best ask is the spread.',
    'Market orders guarantee execution but not price — large ones walk the book and suffer slippage.',
    'Limit orders guarantee price but not execution, and add liquidity to the book (maker, usually cheaper fees).',
    'Stop orders automate exits but trigger, not guarantee — fast moves can fill you well past your level.',
    'Depth and spread tell you a market\'s quality; thin books make every order type more dangerous.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is the fundamental trade-off between a market order and a limit order?',
        options: [
          'Market orders are free; limit orders cost a fee',
          'Market orders guarantee execution but not price; limit orders guarantee price but not execution',
          'Limit orders are only for selling',
          'Market orders only work on weekends',
        ],
        answer: 1,
        explanation: 'A market order fills now at whatever the book offers; a limit order fills only at your price or better — and possibly never.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'The difference between the price you expected and the average price your order actually filled at is called ______.',
        accept: ['slippage'],
        explanation: 'Slippage happens when an order consumes multiple price levels of the book — the bigger the order and thinner the book, the worse it gets.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Why do exchanges usually charge makers lower fees than takers?',
        options: [
          'Makers are newer customers',
          'Resting limit orders provide the book depth that makes the exchange\'s market attractive',
          'It is required by regulators',
          'Taker orders are harder to process',
        ],
        answer: 1,
        explanation: 'Makers supply liquidity (depth); takers consume it. Exchanges subsidize the side that makes their market better.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A stop-loss order guarantees you will exit at exactly the stop price you set.',
        answer: false,
        explanation: 'False — a stop is a trigger. In a fast move the fill can be well past your level (stop-market) or never happen at all (stop-limit).',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A wide bid-ask spread is a sign of an illiquid or volatile market.',
        answer: true,
        explanation: 'True — tight spreads come from deep, competitive books; wide spreads mean fewer participants and a higher instant cost to trade.',
      },
    ],
  },
}
