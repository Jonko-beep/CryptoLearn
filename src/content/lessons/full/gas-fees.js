/**
 * FULL LESSON — Gas Fees. What fees actually buy (scarce blockspace), the
 * units × price arithmetic, EIP-1559's base-fee-plus-tip design and the
 * burn, why fees spike, and practical ways to pay less. Generalizes to
 * Bitcoin and Solana fee models. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'gas-fees',
  tier: 2,
  title: 'Gas Fees',
  summary: 'What you are really paying for, and how fees are set.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'You have been paying [[gas]] since your first transaction, and the Ethereum lesson explained *why* it exists — metering computation so a shared world computer can\'t be spammed or stuck in infinite loops. This lesson answers the questions that actually hit your wallet: **what sets the number, why does it sometimes explode, and how do you pay less?**',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What a fee really buys: scarce blockspace',
    },
    {
      type: 'paragraph',
      text: 'Every [[block]] has a capacity limit, and blocks arrive on a fixed schedule — so the chain sells a hard-capped commodity: **blockspace**. When more people want in a block than fits, the fee is the auction that decides who gets the space. That is the entire economics of gas: not a toll set by a company, but a price discovered by congestion.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The arithmetic: units × price',
    },
    {
      type: 'paragraph',
      text: 'An Ethereum fee multiplies two separate things people constantly confuse:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Gas units** — how much *work* your transaction does. A simple ETH transfer is exactly **21,000 gas**; an [[erc-20|ERC-20]] transfer is roughly 2–3× that (it updates a contract\'s storage); a DeFi swap can run into the hundreds of thousands. This number is set by what you\'re doing, not by the market.',
        '**Gas price** — what you pay *per unit*, quoted in [[gwei]] (one billionth of an ETH). This is the part that moves with demand.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Worked example',
      text: 'A simple transfer (21,000 gas) at a 20 gwei gas price costs 21,000 × 20 = 420,000 gwei = 0.00042 ETH. The same transfer during a frenzy at 200 gwei costs ten times more — identical work, hotter auction.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How the price is set: base fee + tip',
    },
    {
      type: 'paragraph',
      text: 'Since 2021, Ethereum\'s gas price has two parts. The [[base-fee|base fee]] is set **by the protocol itself**, mechanically: when blocks run more than half full it rises, when they run under it falls — congestion ratchets the price up until demand backs off. Crucially, the base fee is **burned** (destroyed), not paid to anyone — that is the usage-driven [[token-burn|burn]] you will meet again in tokenomics. On top, you add a small **priority tip** that does go to the [[validator]], as the incentive to include your transaction sooner. Your wallet sets a *max fee* you are willing to pay and automatically refunds whatever the actual base fee didn\'t use — so the scary number at confirmation is a ceiling, not always the bill.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Why fees explode',
      text: 'The base fee compounds: while blocks stay full it keeps climbing, block after block, until demand breaks. A hyped NFT [[mint]] or token launch can multiply fees for everyone on the chain within minutes — your unrelated coffee-money transfer is bidding in the same auction as someone\'s five-figure mint. This is also why **failed transactions still cost money**: the work was performed before the failure, and the auction doesn\'t refund effort.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The same idea on other chains',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Bitcoin** — fees buy block *bytes*, not computation: you bid in sats per virtual byte of transaction size. Same auction, different commodity.',
        '**Solana** — tiny base fees by design, plus optional priority fees when specific state gets crowded; cheap until a hotspot forms.',
        '**Layer 2 rollups** — execute off-chain and amortize Ethereum\'s costs across many users, which is why their fees are a fraction of mainnet\'s. They get a full lesson at the end of this module.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Paying less, in practice',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Wait out the spike** — base fees fall as fast as they rise once congestion clears; off-peak hours and weekends are routinely several times cheaper.',
        '**Don\'t overpay the tip** — a modest priority fee usually lands within a block or two; huge tips buy little outside a frenzy.',
        '**Batch and consolidate** — every separate transaction repeats its overhead; do related operations together where possible.',
        '**Use L2s for small transactions** — paying mainnet fees to move $20 is using a freight train to deliver a letter.',
        '**Keep the gas tank filled** — the rule from Buying & Sending stands: without the native coin, your assets are stuck regardless of fee levels.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Fees are the honest price signal of a public blockchain — annoying, but legible. Once you can read units versus price, base fee versus tip, you can tell *why* a fee is high, predict when it will fall, and choose the right chain or layer for the job. Next up is the token category that moves more value across this fee machinery than any other: stablecoins.',
    },
  ],

  takeaways: [
    'Fees are an auction for scarce blockspace — congestion, not a company, sets the price.',
    'Fee = gas units (the work, fixed by what you do) × gas price (in gwei, set by demand).',
    'Ethereum\'s base fee adjusts mechanically with congestion and is burned; the priority tip pays the validator.',
    'Failed transactions still pay for work performed, and one hyped mint can spike fees for everyone.',
    'Pay less: time transactions off-peak, tip modestly, batch operations, use L2s for small transfers — and always hold native coin.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'An Ethereum transaction fee is calculated as:',
        options: [
          'A flat fee set by the Ethereum Foundation',
          'Gas units (the work performed) × gas price per unit (in gwei)',
          'A percentage of the amount being sent',
          'The validator\'s hourly rate',
        ],
        answer: 1,
        explanation: 'The work (units) is fixed by what the transaction does; the price per unit floats with demand. The fee is their product.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Ethereum gas prices are quoted in ______, a unit equal to one billionth of an ETH.',
        accept: ['gwei'],
        explanation: 'Gwei (giga-wei) is the standard unit for gas prices — 10⁻⁹ ETH.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'Ethereum\'s base fee is paid to the validator who includes your transaction.',
        answer: false,
        explanation: 'False — the base fee is burned (destroyed); only the priority tip goes to the validator. That burn ties ETH supply to network usage.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why can a popular NFT mint raise fees for someone making an unrelated transfer?',
        options: [
          'NFT contracts tax all other users',
          'Everyone bids in the same blockspace auction — full blocks push the base fee up for all transactions',
          'Validators pause non-NFT transactions',
          'It cannot; fees are independent per user',
        ],
        answer: 1,
        explanation: 'Blockspace is one shared, capped commodity. Any demand surge fills blocks and ratchets the base fee up for every user on the chain.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Sending the same simple ETH transfer always uses the same amount of gas units, regardless of network congestion.',
        answer: true,
        explanation: 'True — a simple transfer is always 21,000 units. Congestion changes the price per unit, never the work the transaction performs.',
      },
    ],
  },
}
