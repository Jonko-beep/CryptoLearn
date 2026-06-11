/**
 * FULL LESSON — Advanced DeFi. The machinery beneath the building blocks:
 * CDPs and leverage loops, flash loans and atomicity, and MEV (sandwiches,
 * the dark forest, defenses). Builds on intro-defi and feeds the
 * governance-attack thread in the next lesson. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'advanced-defi',
  tier: 3,
  title: 'Advanced DeFi',
  summary: 'CDPs, flash loans, and MEV.',
  minutes: 12,

  blocks: [
    {
      type: 'paragraph',
      text: 'The Intro to DeFi lesson gave you the building blocks — [[amm|AMMs]], [[liquidity-pool|pools]], lending. This lesson is about what gets built with them, and what hunts among them: vault-based debt, loans that exist for one transaction, and the invisible tax extracted from the ordering of transactions itself. This is where DeFi\'s composability shows both its genius and its teeth.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'CDPs: minting debt against a vault',
    },
    {
      type: 'paragraph',
      text: 'A **collateralized debt position (CDP)** is the vault pattern you glimpsed behind DAI in the stablecoins lesson, generalized. You lock collateral in your own [[cdp|vault contract]] and mint or borrow against it, subject to a minimum **collateral ratio**. The position is yours to manage: add collateral, repay debt, or watch the ratio — because if collateral value falls below the threshold, the protocol auctions it off to cover your debt, [[liquidation]]-style, usually with a penalty.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The leverage loop',
      text: 'CDPs enable DeFi\'s native leverage: deposit ETH → mint stablecoins against it → buy more ETH → deposit that too → repeat. Each loop adds exposure and pushes your liquidation threshold closer. It is the same leverage math as the perps lessons — except here *you* assembled the instrument, and no exchange risk engine is watching except the liquidator bots.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Flash loans: credit that exists for one transaction',
    },
    {
      type: 'paragraph',
      text: 'Now for something with no traditional analogue. A [[flash-loan|flash loan]] is an **uncollateralized** loan of any size — millions, instantly, to anyone — with one condition: it must be borrowed *and repaid within the same transaction*. The trick is atomicity: a blockchain transaction either completes entirely or reverts as if it never happened. If the repayment isn\'t there by the end, the loan never existed. The lender literally cannot lose the principal.',
    },
    {
      type: 'paragraph',
      text: 'Legitimate uses are real: closing an [[arbitrage]] gap between two pools, swapping the collateral under a loan in one move, or repaying a position to liquidate it efficiently — all for a small fee. But flash loans also removed capital as a barrier to attacks: any exploit that needs a huge balance to execute — manipulating a thin pool\'s price, swaying a vote — can now rent that balance for one transaction. "Flash-loan attack" usually means an [[oracle]] manipulation or design flaw, *amplified* by borrowed scale.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'MEV: the value hiding in transaction order',
    },
    {
      type: 'paragraph',
      text: 'Every pending transaction sits in the public [[mempool]] before inclusion — and whoever produces the block chooses what goes in, and in what order. That choice is worth money: [[mev|MEV]] (maximal extractable value) is the profit available from reordering, inserting, or excluding transactions. Some MEV is benign — bots racing to close arbitrage gaps and trigger liquidations keep prices honest. Some of it is a tax on you:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Front-running** — a bot sees your pending trade and places its own first, capturing the price move you were about to cause.',
        '**Sandwich attack** — the front-run\'s evil twin: buy just before your swap (pushing the price up), let your swap execute at the worse price, sell just after. Your [[slippage]] tolerance is exactly the bite they take.',
        '**Back-running** — racing to be first *after* a known event: an oracle update, a large swap, a liquidation trigger.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The dark forest, industrialized',
      text: 'Researchers nicknamed the public mempool a "dark forest" — broadcast a profitable transaction naively and predator bots may extract or copy it before it lands. The response became an industry: on Ethereum, an entire supply chain of searchers (who find MEV), builders (who assemble blocks), and proposers (who sign them) now splits the extracted value — making MEV more orderly, but no less real.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Practical defenses',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Set tight slippage tolerances** on swaps — wide tolerance is a written invitation to be sandwiched.',
        '**Use MEV-protected submission** where available (private relays / protected RPC endpoints) so your transaction skips the public mempool.',
        '**Trade deep pools** — thin liquidity makes both slippage and oracle manipulation cheap (the picking-coins lesson\'s liquidity check, weaponized).',
        '**Distrust "audited" as a verdict** — audits sample code at a point in time; flash loans test the *economic design* with unlimited capital, forever.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Composability cuts both ways — at machine speed',
      text: 'Intro to DeFi warned that money legos stack risks. Here is the sharper version: atomicity means an attacker can chain borrow → manipulate → drain → repay across five protocols in a single block, leaving no moment for anyone to react. DeFi exploits are not break-ins; they are valid transactions the design failed to forbid. Use position sizes that assume this.',
    },
    {
      type: 'paragraph',
      text: 'One more place flash loans changed the rules: votes. If governance power is just a token balance, a balance you can borrow for one transaction is a vote you can rent. What that means — and how protocols defend against it — is where the next lesson begins.',
    },
  ],

  takeaways: [
    'A CDP locks collateral in a vault to mint/borrow against it; falling below the collateral ratio triggers a penalized liquidation.',
    'Flash loans are uncollateralized loans valid only within one atomic transaction — repay by the end, or it never happened.',
    'Flash loans removed capital as a barrier: legitimate arbitrage and refinancing, but also rented scale for oracle and design exploits.',
    'MEV is profit extracted from transaction ordering — arbitrage and liquidations keep prices honest; sandwiches tax your slippage.',
    'Defend with tight slippage, MEV-protected submission, deep pools — and sizing that assumes exploits happen in one block.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Why can a flash loan be offered with no collateral at all?',
        options: [
          'Borrowers pass a credit check first',
          'Atomicity: if the loan is not repaid within the same transaction, the entire transaction reverts as if it never happened',
          'The protocol insures every loan',
          'Flash loans are limited to tiny amounts',
        ],
        answer: 1,
        explanation: 'The loan and repayment live in one atomic transaction — no repayment, no transaction, no loan. The principal cannot be lost.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Buying just before a victim\'s swap and selling just after it, profiting from the price impact, is called a ______ attack.',
        accept: ['sandwich', 'sandwiching'],
        explanation: 'The sandwich wraps your trade in the attacker\'s buy and sell — your slippage tolerance defines exactly how big a bite they can take.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'What happens to a CDP whose collateral value falls below the required collateral ratio?',
        options: [
          'The debt is forgiven',
          'The protocol auctions the collateral to cover the debt, typically with a penalty',
          'The vault owner is slashed by validators',
          'Nothing — CDPs cannot be liquidated',
        ],
        answer: 1,
        explanation: 'Liquidation protects the protocol\'s solvency: undercollateralized vaults are sold off, and the owner pays a penalty on top.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'All MEV is harmful to ordinary users.',
        answer: false,
        explanation: 'False — arbitrage and liquidation bots keep prices accurate and lending pools solvent. Sandwiches and front-running are the predatory subset.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A clean audit guarantees a DeFi protocol is safe from flash-loan attacks.',
        answer: false,
        explanation: 'False — audits review code at a point in time; flash loans stress the economic design with effectively unlimited capital. Many exploited protocols were audited.',
      },
    ],
  },
}
