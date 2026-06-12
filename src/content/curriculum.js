/**
 * CURRICULUM — the roadmap: tiers → modules → ordered lessons.
 *
 * This file defines STRUCTURE and ORDER only. Full lesson bodies live in
 * ./lessons/full/*. A lesson entry is one of:
 *   • { id }                          → a full lesson, resolved from the registry
 *   • stub(id, tier, title, summary)  → a roadmap placeholder (title + summary only)
 *
 * Lessons unlock sequentially in the order they appear here (stubs are skipped
 * — they can't be completed). To reorder the course, just move entries around.
 * To re-subject the whole app, rewrite this file + the lesson files + theme.js.
 */

/**
 * Helper to declare a roadmap stub concisely. Currently unused — every lesson
 * is fully written — but kept so future roadmap entries can be stubbed in.
 */
// eslint-disable-next-line no-unused-vars
const stub = (id, tier, title, summary) => ({ id, tier, title, summary, stub: true })

export const CURRICULUM = [
  {
    tier: 1,
    name: 'Beginner',
    blurb: 'Foundations: why crypto exists and how a blockchain actually works.',
    modules: [
      {
        id: 'getting-started',
        name: 'Getting Started',
        lessons: [
          { id: 'why-crypto-exists' },
          { id: 'keys-addresses-seed' },
          { id: 'wallets' },
          { id: 'exchanges-ramps' },
          { id: 'buying-sending-safely' },
          { id: 'security-scams' },
        ],
      },
      {
        id: 'how-blockchains-work',
        name: 'How Blockchains Work',
        lessons: [
          { id: 'blocks-hashing-chain' },
          { id: 'merkle-trees' },
          { id: 'nodes-p2p-network' },
          { id: 'mempool-lifecycle' },
          { id: 'block-production' },
          { id: 'forks-reorgs-finality' },
          { id: 'immutability-limits' },
        ],
      },
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        lessons: [
          { id: 'bitcoin-architecture' },
          { id: 'bitcoin-mining' },
          { id: 'bitcoin-halving' },
        ],
      },
    ],
  },

  {
    tier: 2,
    name: 'Intermediate',
    blurb: 'How chains differ, smart contracts, and earning yield.',
    modules: [
      {
        id: 'how-blockchains-differ',
        name: 'How Blockchains Differ',
        lessons: [
          { id: 'data-models' },
          { id: 'consensus-families' },
          { id: 'blockchain-trilemma' },
          { id: 'smart-vs-payment-chains' },
          { id: 'ethereum-architecture' },
          { id: 'solana-architecture' },
          { id: 'coins-at-a-glance' },
        ],
      },
      {
        id: 'tokens-and-scaling',
        name: 'Tokens & Scaling',
        lessons: [
          { id: 'coins-vs-tokens' },
          { id: 'nfts' },
          { id: 'gas-fees' },
          { id: 'stablecoins' },
          { id: 'layer-2s' },
        ],
      },
      {
        id: 'staking-and-defi',
        name: 'Staking & DeFi',
        lessons: [
          { id: 'staking-yield' },
          { id: 'validators-deep' },
          { id: 'intro-defi' },
        ],
      },
    ],
  },

  {
    tier: 3,
    name: 'Advanced',
    blurb: 'Market structure, derivatives, and the frontier of DeFi.',
    modules: [
      {
        id: 'markets-derivatives',
        name: 'Markets & Derivatives',
        lessons: [
          { id: 'market-structure' },
          { id: 'technical-analysis' },
          { id: 'futures-vs-perps' },
          { id: 'perpetual-futures' },
          { id: 'options-payoffs' },
          { id: 'risk-management' },
        ],
      },
      {
        id: 'advanced-topics',
        name: 'Advanced Topics',
        lessons: [
          { id: 'tokenomics' },
          { id: 'picking-coins' },
          { id: 'on-chain-analysis' },
          { id: 'advanced-defi' },
          { id: 'bridges-daos-governance' },
          { id: 'regulation-taxes' },
        ],
      },
    ],
  },
]
