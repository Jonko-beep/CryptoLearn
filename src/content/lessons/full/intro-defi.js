/**
 * FULL LESSON — Intro to DeFi. Closes the Staking & DeFi module (and tier 2):
 * what DeFi is, the building blocks — AMM-based DEXs, liquidity pools and
 * impermanent loss, overcollateralized lending — where yield really comes
 * from, composability, and the risk stack. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'intro-defi',
  tier: 2,
  title: 'Intro to DeFi',
  summary: 'Lending, DEXs, AMMs, liquidity pools and yield — the building blocks.',
  minutes: 12,

  blocks: [
    {
      type: 'paragraph',
      text: '**DeFi — decentralized finance** — is the project of rebuilding financial services as [[smart-contract|smart contracts]]: trading, lending, and earning yield with no company in the middle, no account application, and no custodian holding your funds. You connect a [[non-custodial]] wallet, the code executes, and the code is the institution. The last lesson ended with a liquid staking token that could be "lent, pooled, and posted as collateral" — this lesson is the world where all of that happens.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'DEXs without order books: the AMM',
    },
    {
      type: 'paragraph',
      text: 'The exchanges lesson promised that [[dex|DEXs]] would get their own treatment — here it is. The breakthrough was realizing a DEX should not copy a [[cex|CEX]]: an order book needs active market makers constantly updating quotes, which is awkward on a chain where every update costs [[gas]]. Instead, most DEXs use an [[amm|automated market maker]]: a [[liquidity-pool|liquidity pool]] holding two tokens, with a formula setting the price.',
    },
    {
      type: 'paragraph',
      text: 'The classic formula (Uniswap\'s) is **x × y = k**: the pool\'s two token balances must always multiply to the same constant. Buy token X from the pool and its balance falls — so the formula demands more of token Y per unit of X, and the price rises along a curve. Every trade moves the price automatically; no orders, no counterparty, just a vending machine that adjusts its prices based on what is left inside. [[slippage|Slippage]] still exists — the deeper the pool, the gentler the curve.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Liquidity providers: be the market maker',
    },
    {
      type: 'paragraph',
      text: 'Where does the pool\'s inventory come from? From anyone. Deposit both tokens in the right ratio and you become a **liquidity provider (LP)**, earning a share of every trade\'s fee in proportion to your share of the pool. This is radical: market making, a job reserved for professional firms in traditional finance, became a button anyone can press.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Impermanent loss: the LP\'s hidden cost',
      text: 'The AMM formula constantly sells the pool\'s rising token and accumulates the falling one — so if the two tokens\' prices diverge, an LP ends up worth **less than if they had simply held both tokens** in a wallet. That gap is [[impermanent-loss|impermanent loss]] ("impermanent" because it shrinks if prices reconverge — and becomes very permanent if you withdraw while they are apart). Fee income must beat it for LPing to be worth it; in volatile pairs, it often doesn\'t.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Lending and borrowing: the pooled money market',
    },
    {
      type: 'paragraph',
      text: 'The second pillar (Aave and Compound are the classics): lenders deposit assets into a shared pool and earn interest; borrowers draw from it by posting **more collateral than they borrow** — the same overcollateralization you met in the [[stablecoin]] lesson with DAI. Interest rates float with utilization: the more of the pool that is borrowed, the higher the rate climbs, pulling in new deposits and nudging borrowers to repay. If a borrower\'s collateral falls too close to their debt, anyone may trigger a **liquidation** that sells it to make the pool whole.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why borrow against your own crypto?',
      text: 'Mostly to get liquidity without selling: spendable [[stablecoin|stablecoins]] today while keeping the asset (and, in many places, deferring the taxable disposal you met in Regulation & Taxes — that lesson is ahead; the short version is that selling triggers taxes and borrowing usually doesn\'t). The other honest answer is leverage: borrow, buy more, repeat — with liquidation as the ever-present exit.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Where the yield actually comes from',
    },
    {
      type: 'paragraph',
      text: 'DeFi advertises yields everywhere, and the staking lesson already taught the right reflex: ask what the yield *is*. There are exactly three honest sources — **trading fees** (paid by real traders to LPs), **borrow interest** (paid by real borrowers to lenders), and **token emissions** (the protocol printing its own token as a reward, diluting its holders). The first two are revenue; the third is marketing spend. A headline rate is usually a blend — and if you cannot identify which parts are which, assume the flattering part is emissions.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Money legos: composability',
      text: 'DeFi\'s superpower is that every protocol\'s output is a token another protocol accepts: stake ETH → receive a liquid staking token → lend it as collateral → borrow stablecoins → provide liquidity with those. Each layer pays a yield — and stacks a risk. Composability multiplies both, which is why the same structure that compounds returns in calm markets unwinds all at once in a crash.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The risk stack',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Smart-contract risk** — code holds the funds; bugs and exploits have drained billions. Audits reduce, never eliminate.',
        '**Admin keys & upgradability** — if a team can change the contract, you are trusting the team (and whoever phishes them).',
        '**Oracle risk** — lending protocols rely on price feeds; manipulate the feed and you can drain the pool.',
        '[[token-approval|Approval]] risk — every DeFi interaction starts with the signature habits from Security & Scams. They matter doubly here.',
        '**Economic design risk** — emissions-fed yields and unstable pegs collapse exactly when everyone heads for the exit.',
      ],
    },
    {
      type: 'paragraph',
      text: 'That completes the intermediate tier: you can now read a chain\'s architecture, its tokens, and the DeFi machinery built on top. The advanced tier turns to the markets themselves — order books, derivatives, risk — and later circles back to DeFi\'s deeper machinery in the Advanced DeFi lesson (CDPs, flash loans, MEV). Start small, read what you sign, and treat every advertised yield as a question, not an answer.',
    },
  ],

  takeaways: [
    'DeFi rebuilds financial services as smart contracts you use from your own wallet — the code is the institution.',
    'AMM DEXs price trades with a pool formula (x × y = k); liquidity depth determines slippage.',
    'LPs earn trading fees but bear impermanent loss when pooled tokens\' prices diverge.',
    'DeFi lending is overcollateralized, with floating rates set by utilization and liquidations protecting the pool.',
    'Yield has three sources — fees, interest, emissions; only the first two are revenue. Composability stacks yields and risks alike.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'How does an AMM-based DEX set prices without an order book?',
        options: [
          'A company updates prices manually',
          'A formula over the pool\'s token balances (e.g. x × y = k) adjusts the price with every trade',
          'Prices are copied from a centralized exchange',
          'Validators vote on prices each block',
        ],
        answer: 1,
        explanation: 'The constant-product formula makes each purchase deplete one balance and raise its price along a curve — a vending machine that reprices by inventory.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'The gap between an LP\'s position value and simply holding the two tokens, caused by their prices diverging, is called ______ loss.',
        accept: ['impermanent', 'divergence'],
        explanation: 'Impermanent loss — the AMM accumulates the underperforming token, so LPs lag plain holding when prices diverge. Fees must outweigh it.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'DeFi lending protocols typically let you borrow more than the value of your collateral, like an unsecured bank loan.',
        answer: false,
        explanation: 'False — with no credit system, loans are overcollateralized: you post more than you borrow, and liquidation protects the pool if collateral falls.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Which of these yield sources is NOT real protocol revenue?',
        options: [
          'Trading fees paid by traders to LPs',
          'Interest paid by borrowers to lenders',
          'Token emissions printed by the protocol as rewards',
          'They are all equally revenue',
        ],
        answer: 2,
        explanation: 'Emissions are the protocol paying you in its own freshly printed token — dilution dressed as yield. Fees and interest come from real users.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Composability ("money legos") stacks yields across protocols while also stacking their risks.',
        answer: true,
        explanation: 'True — each layer adds a yield and a failure mode; chained positions compound in calm markets and unwind together in crashes.',
      },
    ],
  },
}
