/**
 * FULL LESSON — Regulation & Taxes. Closes the Advanced Topics module with
 * the legal layer: how regulators classify crypto, KYC/AML chokepoints, the
 * property-tax mindset (taxable vs non-taxable events, capital gains, cost
 * basis), and record-keeping. Deliberately jurisdiction-general and heavily
 * caveated. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'regulation-taxes',
  tier: 3,
  title: 'Regulation & Taxes',
  summary: 'How crypto is treated legally and at tax time (jurisdiction-dependent).',
  minutes: 11,

  blocks: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Read this first',
      text: 'Rules differ sharply by country and change fast — this lesson teaches the *shape* of crypto regulation and taxation, not your specific obligations. Examples (mostly US/EU) are illustrative. For real decisions, consult a qualified tax professional or lawyer in your jurisdiction. Nothing here is legal or tax advice.',
    },
    {
      type: 'paragraph',
      text: 'Crypto was designed to route around institutions, but the moment it touches money, jobs, and millions of people, the institutions arrive anyway. Understanding how they think is now part of crypto literacy — because the two places regulation touches *you* directly are the exchange you sign up for and the tax return you file.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'One asset, many labels',
    },
    {
      type: 'paragraph',
      text: 'The core regulatory puzzle is classification: the same token can be treated as **property** by the tax authority, a **commodity** by one market regulator, and possibly a **security** by another — each label bringing different rules. The hardest question is whether a token sale is an *investment contract* (sold with the promise that someone else\'s efforts will make it valuable), which drags in securities law. In the US this fight defined a decade of enforcement; a 2025 federal law brought [[stablecoin|stablecoins]] under a dedicated regime, and broader "market structure" legislation splitting oversight between the SEC and CFTC was still working through Congress as of mid-2026. The EU went the other way and shipped one comprehensive framework (MiCA). Elsewhere the spectrum runs from full embrace to outright bans.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why classification matters to you',
      text: 'Labels decide practical things: which tokens exchanges will list in your country, what disclosures projects owe you, whether a yield product is legal to offer you, and which regulator hears your complaint when something collapses.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'KYC and AML: the chokepoints',
    },
    {
      type: 'paragraph',
      text: 'You met [[kyc|KYC]] in the exchanges lesson; it is half of a pair. **AML** (anti-money-laundering) rules require regulated businesses to monitor and report suspicious flows. Regulators concentrate their power at the [[on-ramp|on-ramps]] and [[off-ramp|off-ramps]] — the bridges between banks and chains — because that is where pseudonymous addresses meet verified identities. The practical consequence: your exchange account ties your name to your on-chain footprint.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Taxes: think "property," not "currency"',
    },
    {
      type: 'paragraph',
      text: 'In many jurisdictions — the US prominently — crypto is taxed as **property**. That single idea explains most of the rules: like selling a stock or a house, *disposing* of crypto is a taxable event, and what counts as a disposal is broader than most beginners expect:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Selling for fiat** — the obvious one.',
        '**Swapping crypto for crypto** — trading ETH for SOL is a disposal of the ETH, even though no dollars appeared. This is the rule that surprises everyone.',
        '**Spending crypto** — buying a laptop with BTC is a disposal of the BTC at its market value.',
        '**Earning crypto** — [[staking]] rewards, [[mining]] income, and airdrops are typically ordinary income at their value when received.',
      ],
    },
    {
      type: 'paragraph',
      text: 'What usually is **not** taxable: buying crypto with fiat and holding it (gains are taxed when realized, not while they sit), and moving assets **between your own wallets** — a transfer is not a disposal. As always, jurisdictions vary: Germany, for instance, exempts gains on crypto held over a year, while others tax every disposal regardless of holding period.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Capital gains and cost basis',
    },
    {
      type: 'paragraph',
      text: 'When you do dispose, the taxable [[capital-gains|capital gain]] is **proceeds minus [[cost-basis|cost basis]]** — what you got minus what you paid (including fees). Hold long enough and many systems tax the gain at a lower rate (in the US, the line sits at one year). Losses matter too: realized losses can typically offset gains. All of it depends on knowing your basis for every unit you sold — which, if you bought at ten different prices across three exchanges and a DEX, is exactly as painful as it sounds.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The blockchain remembers — and now, so do exchanges',
      text: 'Pseudonymous is not invisible: chain-analysis tools plus exchange KYC let tax authorities reconstruct activity years later, and regulated exchanges increasingly report your trades to them directly (in the US, broker reporting on Form 1099-DA began with 2025 transactions). If a broker reports your sale but not your cost basis, the authority may assume the basis is zero — *your records* are what correct that. Unreported is not untaxed; it is unpaid.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The habit that saves you: records from day one',
      text: 'For every transaction keep the date, asset, amount, fiat value at the time, fees, and purpose. Export exchange history regularly (exchanges die — several lessons ago you learned not to trust them with funds; don\'t trust them as your only archive either). Crypto tax software can assemble most of this automatically if you connect it early — far easier than reconstructing five years later.',
    },
    {
      type: 'paragraph',
      text: 'Regulation will keep shifting under this lesson — that is its nature. The durable skill is asking the right questions wherever you are: *How is this asset classified here? Which of my actions count as disposals? What records prove my basis?* Answer those, and you can adapt to whatever the rules become. And with that, you have the full toolkit this course set out to build: how chains work, how to hold and move value safely, how markets and tokens behave — and how to operate inside the legal world that now surrounds them.',
    },
  ],

  takeaways: [
    'Classification drives everything: the same token can be property for tax, a commodity or security for markets — and rules differ by country.',
    'Regulators concentrate power at the fiat ramps, where KYC/AML ties identities to on-chain activity.',
    'In property-style systems, disposals are taxable: selling, crypto-to-crypto swaps, and spending — while earning crypto is income at receipt.',
    'Buying and holding, and transfers between your own wallets, are usually not taxable events.',
    'Gain = proceeds − cost basis; exchanges increasingly report directly to tax authorities, so your own records are your defense.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'tf',
        prompt: 'In property-style tax systems like the US, swapping one cryptocurrency directly for another is a taxable event even though no fiat was involved.',
        answer: true,
        explanation: 'True — the swap is a disposal of the first asset at its market value. This is the rule that most surprises beginners.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Which of these is usually NOT a taxable event?',
        options: [
          'Selling bitcoin for dollars',
          'Transferring crypto between two wallets you own',
          'Spending crypto on a laptop',
          'Receiving staking rewards',
        ],
        answer: 1,
        explanation: 'Moving assets between your own wallets is not a disposal — nothing was sold, swapped, spent, or earned.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Your taxable gain is calculated as proceeds minus your cost ______ (what you originally paid, including fees).',
        accept: ['basis'],
        explanation: 'Cost basis is the purchase price plus fees; tracking it per unit across venues is why record-keeping matters so much.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Because blockchain addresses are pseudonymous, tax authorities have no practical way to link on-chain activity to individuals.',
        answer: false,
        explanation: 'False — chain analysis plus exchange KYC links identities to addresses, and regulated exchanges increasingly report trades to authorities directly.',
      },
      {
        id: 'q5',
        type: 'mc',
        prompt: 'Staking rewards, mining income, and airdrops are typically treated as:',
        options: [
          'Tax-free gifts',
          'Ordinary income, valued at the time you receive them',
          'Capital losses',
          'Untaxable until converted to fiat',
        ],
        answer: 1,
        explanation: 'Earned crypto is generally income at its value when received; later disposal of those coins is then a separate capital gain/loss event.',
      },
    ],
  },
}
