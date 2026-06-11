/**
 * FULL LESSON — On-Chain Analysis. The transparency dividend of public
 * ledgers: block explorers, exchange flows, network-usage metrics, holder
 * behavior — and the hard limits (off-chain CEX volume, manufactured
 * activity, heuristic labels). Completes the due-diligence toolkit started
 * in picking-coins. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'on-chain-analysis',
  tier: 3,
  title: 'On-Chain Analysis',
  summary: 'Reading wallet flows, exchange balances, and network activity.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Here is something no stock market offers: in crypto, the ledger is **public**. Every transaction, every balance, every contract call — visible to anyone, forever. Equity analysts wait for quarterly reports; a chain analyst watches the money move in real time. **On-chain analysis** is the craft of turning that radical transparency into information — and knowing exactly where the transparency ends.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The microscope: block explorers',
    },
    {
      type: 'paragraph',
      text: 'Your basic instrument is the [[block-explorer|block explorer]] — a website that renders the raw chain as readable pages. Paste in a transaction hash to see its status, paste in an [[address]] to see its balance and history, look up any [[token]] to see its supply and its **top holders**. You have already used this twice without naming it: checking holder concentration in the picking-coins framework, and verifying a contract address from the coins-vs-tokens lesson. Addresses are pseudonymous, but analytics firms label thousands of them — exchange wallets, funds, protocol treasuries — so the big actors trade with name tags on.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Exchange flows: watching coins approach the exit',
    },
    {
      type: 'paragraph',
      text: 'The most-watched on-chain signal is movement to and from [[exchange]] wallets. The logic is simple: coins generally move **to** an exchange to be sold, and **off** an exchange to be held in self-custody. Large inflows can foreshadow selling pressure; sustained outflows and falling exchange balances suggest accumulation. [[whale|Whale]] watchers track individual giant wallets the same way — a dormant address suddenly funding an exchange deposit is the kind of event that moves markets all by itself.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Flows are clues, not verdicts',
      text: 'An "inflow" can be an exchange shuffling its own cold storage; an "outflow" can be a custodian rotating wallets. Labels are heuristic, and a single transaction has many innocent explanations. Flow data earns trust in aggregate and over time — never as a one-transaction trading signal.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Network health: is anyone actually using this?',
    },
    {
      type: 'paragraph',
      text: 'The picking-coins framework asked: *is it actually used?* On-chain data is how you answer that with numbers instead of marketing:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Active addresses & transaction counts** — raw participation, best read as a trend rather than a level.',
        '**Fees paid** — the hardest metric to fake meaningfully: people paying real money to use the chain is demand, full stop.',
        '[[tvl|TVL (total value locked)]] — capital deposited in a DeFi protocol\'s contracts; a rough gauge of trust and scale.',
        '**Stablecoin balances** — dry powder sitting on-chain and on exchanges, ready to be deployed.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Holder behavior: what the ledger remembers',
    },
    {
      type: 'paragraph',
      text: 'Because the chain records *when* every coin last moved, you can read the crowd\'s temperament. Coins dormant for years suddenly moving means early holders are doing something — historically worth attention. Aggregating every coin\'s acquisition price yields the market\'s average on-chain [[cost-basis|cost basis]], a gauge of whether holders are sitting in profit (comfortable) or at a loss (capitulation-prone). These "HODL wave" style metrics are unique to transparent ledgers — nothing comparable exists for traditional assets.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The limits: what the chain cannot see',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Most trading is off-chain.** A [[cex|CEX]] matches trades on its internal ledger; only deposits and withdrawals touch the chain. The majority of crypto\'s trading volume is therefore invisible to on-chain analysis.',
        '**Derivatives are invisible too** — perps and options positioning lives inside exchanges, not on the ledger.',
        '**Activity can be manufactured.** Transactions are cheap: projects and airdrop farmers generate fake "users" at scale. (Fees paid resists this best — faking demand costs real money.)',
        '**Labels can be wrong.** Address clustering is statistical inference, not ground truth.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Use it as one leg of the stool',
      text: 'On-chain data answers "what are holders and users actually doing?" — fundamentals answer "should anyone care about this project?" and market data answers "can I get in and out?" The picking-coins framework needs all three; on-chain analysis is the leg that crypto uniquely provides.',
    },
    {
      type: 'paragraph',
      text: 'A good first exercise costs nothing: pick a token you know, open a block explorer, and spend ten minutes answering three questions from the ledger alone — who holds it, is usage trending up or down, and are coins flowing toward exchanges or away from them. That is on-chain analysis; everything past it is refinement.',
    },
  ],

  takeaways: [
    'Public ledgers let anyone audit balances, flows, and usage in real time — crypto\'s unique analytical edge.',
    'Block explorers are the basic instrument: transactions, addresses, token supplies, and top holders on demand.',
    'Exchange inflows hint at selling, outflows at accumulation — but only in aggregate; single transactions mislead.',
    'Fees paid is the hardest usage metric to fake; active addresses and TVL round out the health picture.',
    'The chain cannot see CEX internal trading or derivatives, and labels are heuristics — treat on-chain data as one leg of the stool.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'fib',
        prompt: 'The website tool that renders blockchain data as readable pages — transactions, addresses, token holders — is called a block ______.',
        accept: ['explorer'],
        explanation: 'Block explorers (like the ones used to verify contract addresses and check top holders) are the basic instrument of on-chain analysis.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Large sustained flows of coins ONTO exchanges are most commonly read as:',
        options: [
          'A sign holders intend to keep coins long-term',
          'Potential selling pressure — coins generally move to an exchange to be sold',
          'Proof that the network is broken',
          'A guarantee the price will fall tomorrow',
        ],
        answer: 1,
        explanation: 'Coins move to exchanges to be traded and away to be held — but the signal is probabilistic and only meaningful in aggregate.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'Because blockchains are public, on-chain analysis can see every trade made on a centralized exchange.',
        answer: false,
        explanation: 'False — a CEX matches trades on its internal ledger; only deposits and withdrawals touch the chain. Most trading volume is invisible on-chain.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why is "fees paid" considered the hardest usage metric to fake?',
        options: [
          'Because fees are secret',
          'Because generating fake fee-paying activity costs real money, unlike spinning up addresses or transactions',
          'Because explorers do not display fees',
          'Because fees never change',
        ],
        answer: 1,
        explanation: 'Addresses and transactions are nearly free to manufacture; sustained fees mean someone is paying real money for blockspace.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Address labels (e.g. "exchange wallet", "fund") are statistical inferences that can be wrong, not guaranteed identities.',
        answer: true,
        explanation: 'True — clustering and labeling are heuristics built from patterns. They are usually right about big entities, but they are inference, not ground truth.',
      },
    ],
  },
}
