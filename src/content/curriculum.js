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

/** Helper to declare a roadmap stub concisely. */
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
          stub('merkle-trees', 1, 'Merkle Trees', 'Compressing thousands of transactions into a single verifiable root hash.'),
          stub('nodes-p2p-network', 1, 'Nodes & the P2P Network', 'Full nodes, data propagation, and why there is no central server.'),
          stub('mempool-lifecycle', 1, 'The Mempool', 'How a transaction travels from "sent" to "confirmed".'),
          stub('block-production', 1, 'Block Production', 'Mining vs validating — who gets to add the next block, and why.'),
          stub('forks-reorgs-finality', 1, 'Forks, Reorgs & Finality', 'Soft vs hard forks, what confirmations mean, probabilistic vs deterministic finality.'),
          stub('immutability-limits', 1, 'Immutability & Its Limits', 'Why immutability holds in practice — and where it really ends.'),
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
          stub('data-models', 2, 'Data Models: UTXO vs Account', 'The two ways chains track balances, and the tradeoffs of each.'),
          stub('consensus-families', 2, 'Consensus Families', 'PoW, PoS, PoH and BFT-style — how each picks the next block.'),
          stub('blockchain-trilemma', 2, 'The Blockchain Trilemma', 'Decentralization vs security vs scalability — why you can\'t max all three.'),
          stub('smart-vs-payment-chains', 2, 'Smart-Contract vs Payment Chains', 'Turing-complete platforms vs purpose-built ledgers.'),
          { id: 'ethereum-architecture' },
          { id: 'solana-architecture' },
          { id: 'coins-at-a-glance' },
        ],
      },
      {
        id: 'tokens-and-scaling',
        name: 'Tokens & Scaling',
        lessons: [
          stub('coins-vs-tokens', 2, 'Coins vs Tokens (ERC-20)', 'Native coins versus tokens issued by smart contracts.'),
          stub('nfts', 2, 'NFTs', 'Non-fungible tokens: unique on-chain ownership and its uses.'),
          stub('gas-fees', 2, 'Gas Fees', 'What you are really paying for, and how fees are set.'),
          stub('stablecoins', 2, 'Stablecoins', 'Fiat-backed, crypto-backed, and algorithmic pegs.'),
          stub('layer-2s', 2, 'Layer 2s (Rollups)', 'Scaling Ethereum by moving execution off-chain while inheriting its security.'),
        ],
      },
      {
        id: 'staking-and-defi',
        name: 'Staking & DeFi',
        lessons: [
          { id: 'staking-yield' },
          stub('validators-deep', 2, 'Validators in Depth', 'Running a validator, delegation, and slashing conditions.'),
          stub('intro-defi', 2, 'Intro to DeFi', 'Lending, DEXs, AMMs, liquidity pools and yield — the building blocks.'),
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
          stub('market-structure', 3, 'Market Structure & Order Types', 'Order books, makers/takers, market vs limit orders.'),
          stub('technical-analysis', 3, 'Technical Analysis Basics', 'Trend, support/resistance, and the limits of chart reading.'),
          stub('futures-vs-perps', 3, 'Futures vs Perpetual Swaps', 'Expiry-based futures and how perpetuals differ.'),
          { id: 'perpetual-futures' },
          stub('options-payoffs', 3, 'Options & Payoff Structures', 'Calls, puts, and reading payoff diagrams.'),
          stub('risk-management', 3, 'Risk Management', 'Position sizing, stops, and surviving variance.'),
        ],
      },
      {
        id: 'advanced-topics',
        name: 'Advanced Topics',
        lessons: [
          stub('tokenomics', 3, 'Tokenomics', 'Supply schedules, emissions, sinks, and incentive design.'),
          stub('on-chain-analysis', 3, 'On-Chain Analysis', 'Reading wallet flows, exchange balances, and network activity.'),
          stub('advanced-defi', 3, 'Advanced DeFi', 'CDPs, flash loans, and MEV.'),
          stub('bridges-daos-governance', 3, 'Bridges, DAOs & Governance', 'Moving assets across chains and on-chain decision-making.'),
          stub('regulation-taxes', 3, 'Regulation & Taxes', 'How crypto is treated legally and at tax time (jurisdiction-dependent).'),
        ],
      },
    ],
  },
]
