/**
 * FULL LESSON — Layer 2s (Rollups). Closes the Tokens & Scaling module:
 * Ethereum's answer to the trilemma — execution off-chain, data and
 * settlement on L1. Optimistic vs ZK rollups, blobs, the honest caveats
 * (sequencers, upgrade keys, bridges), and sidechains as the contrast.
 * Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'layer-2s',
  tier: 2,
  title: 'Layer 2s (Rollups)',
  summary: 'Scaling Ethereum by moving execution off-chain while inheriting its security.',
  minutes: 11,

  blocks: [
    {
      type: 'paragraph',
      text: 'The trilemma lesson posed the problem: Ethereum keeps its base layer decentralized and secure, so its blockspace is scarce — and the gas lesson showed you the bill. Ethereum\'s answer is not to make Layer 1 faster; it is to **build upward**. A [[layer-2|Layer 2]] (L2) executes transactions somewhere cheaper and uses Ethereum for what Ethereum is best at: being the incorruptible court of record.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The core idea: execute elsewhere, settle here',
    },
    {
      type: 'paragraph',
      text: 'A [[rollup]] processes transactions on its own fast environment, then **rolls them up**: it posts the batch\'s compressed data plus a commitment to the resulting state back to Ethereum. That posting is the magic. Because the data lives on L1, anyone can reconstruct the rollup\'s state from Ethereum alone — and because settlement happens on L1, disputes are arbitrated by Ethereum\'s consensus, not by whoever runs the rollup. One L1 transaction\'s cost is shared across hundreds of rolled-up ones — that, plus compression, is the entire fee miracle.',
    },
    {
      type: 'paragraph',
      text: 'The hard question is: how does Ethereum know the batch is *honest*? The two rollup families are the two answers.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Optimistic rollups: innocent until proven guilty',
    },
    {
      type: 'paragraph',
      text: 'An optimistic rollup posts results **assumed valid**, with a challenge window (typically about a week) during which anyone can submit a **fraud proof** demonstrating a batch was wrong — slashing the dishonest poster and reverting the result. Security holds as long as *one* honest watcher exists. The cost of optimism falls on exits: withdrawing to L1 through the native bridge means waiting out the challenge window. Arbitrum, Optimism, and Base lead this camp.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ZK rollups: guilty until proven valid',
    },
    {
      type: 'paragraph',
      text: 'A ZK (zero-knowledge) rollup inverts the logic: every batch ships with a **validity proof** — a compact cryptographic proof that the entire batch was executed correctly. Ethereum verifies the proof in one cheap check; no trust, no challenge window, no week-long exits. The price is paid upfront: generating proofs is computationally heavy and the technology is harder to build. zkSync and Starknet are the flagship examples, and the long-run consensus is that validity proofs are where rollups are heading.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Blobs: Ethereum remodeling for its tenants',
      text: 'Rollup fees are mostly the cost of posting data to L1 — so in 2024 Ethereum added **blobs** (EIP-4844): dedicated, short-lived data space priced separately from regular gas. L2 fees fell roughly tenfold overnight, and subsequent upgrades keep expanding blob capacity. The L1 is deliberately rebuilding itself as the settlement and data layer for its L2s.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The honest caveats',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**The sequencer is usually centralized.** Today, most rollups have a single operator ordering transactions. It can\'t steal funds (the L1 data and escape hatches prevent that), but it can censor or go down — decentralizing sequencers is the ecosystem\'s open homework.',
        '**Upgrade keys are training wheels.** Many rollups\' contracts can still be changed by a team multisig — meaning, today, you partially trust the team. Maturity frameworks grade rollups in "stages" as they remove these controls.',
        '**Bridges concentrate risk.** Moving assets in and out passes through bridge contracts — and the advanced tier\'s bridge lesson shows why those are crypto\'s favorite hack target. Native rollup bridges inherit L1 security; third-party "fast bridges" are their own trust decision.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Not everything called "Layer 2" is one',
      text: 'A [[sidechain]] (e.g. Polygon\'s PoS chain) is a separate blockchain with its **own validators** and a bridge to Ethereum — convenient and cheap, but its security is its own, not inherited. The defining test of a true rollup: could you exit with your funds using only Ethereum, even if the L2\'s operators vanished? For a rollup, yes — the data is on L1. For a sidechain, no.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Using one in practice',
    },
    {
      type: 'paragraph',
      text: 'The good news: an L2 feels like Ethereum. Same wallet, same address format, same tokens, fees still paid in ETH — just pennies instead of dollars. You get funds there by bridging from L1 or, often cheaper, withdrawing directly to the L2 from an exchange. For the small everyday transactions the gas lesson called "a freight train delivering a letter," L2s are simply the right vehicle.',
    },
    {
      type: 'paragraph',
      text: 'That completes Tokens & Scaling: what tokens are, what they cost to move, the ones designed to hold a dollar, and the layers built to make all of it affordable. Next module: putting your assets to work — staking, validators, and DeFi.',
    },
  ],

  takeaways: [
    'Rollups execute transactions off-chain and post compressed data + state commitments to Ethereum, sharing one L1 cost across hundreds of transactions.',
    'Optimistic rollups assume validity and rely on fraud proofs during a ~week challenge window; ZK rollups prove every batch valid upfront.',
    'Blobs (EIP-4844, 2024) gave rollups dedicated cheap data space, cutting L2 fees roughly tenfold.',
    'Today\'s caveats: centralized sequencers, team-held upgrade keys, and bridge risk — "inherits L1 security" comes in stages.',
    'The rollup test: you can exit via Ethereum alone even if operators vanish. Sidechains, with their own validators, fail it.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'How does a rollup "inherit Ethereum\'s security"?',
        options: [
          'It uses the same miners as Ethereum',
          'It posts its transaction data and state commitments to L1, so Ethereum stores the record and arbitrates correctness',
          'Ethereum validators manually re-run every L2 transaction',
          'It does not — the phrase is pure marketing',
        ],
        answer: 1,
        explanation: 'With data and settlement on L1, anyone can reconstruct the rollup\'s state from Ethereum alone — operators can\'t rewrite history or steal funds.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'What distinguishes a ZK rollup from an optimistic rollup?',
        options: [
          'ZK rollups have no fees',
          'ZK rollups ship a cryptographic validity proof with every batch, instead of assuming validity and allowing fraud-proof challenges',
          'Optimistic rollups do not post data to Ethereum',
          'ZK rollups are sidechains',
        ],
        answer: 1,
        explanation: 'Optimistic: assumed valid, challengeable for ~a week. ZK: proven valid upfront, verified by Ethereum in one check — no challenge window.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Withdrawing from an optimistic rollup\'s native bridge requires waiting out the ______ window, during which fraud proofs can be filed.',
        accept: ['challenge', 'dispute', 'fraud-proof', 'fraud proof'],
        explanation: 'The ~one-week window is the cost of optimism: results stand unless proven fraudulent, so exits wait for the proof period to pass.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'A sidechain with its own validator set inherits Ethereum\'s security through its bridge.',
        answer: false,
        explanation: 'False — a sidechain\'s security is its own validators\'. The rollup test: a true L2 lets you exit via Ethereum alone even if its operators vanish.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Most rollup fees historically came from posting data to Ethereum, which is why blobs (EIP-4844) cut L2 fees so sharply.',
        answer: true,
        explanation: 'True — data posting dominated L2 costs. Dedicated blob space repriced it, dropping rollup fees roughly tenfold in 2024.',
      },
    ],
  },
}
