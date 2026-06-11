/**
 * LESSON REGISTRY — maps lesson id → full lesson object.
 *
 * To add a new full lesson:
 *   1. Create a file in ./full/ that exports `{ lesson }`.
 *   2. Import it here and add it to FULL_LESSONS.
 *   3. Reference its id from the curriculum (../curriculum.js).
 * That's it — the UI discovers everything through this map. See ARCHITECTURE.md.
 */
import { lesson as whyCryptoExists } from './full/why-crypto-exists'
import { lesson as keysAddressesSeed } from './full/keys-addresses-seed'
import { lesson as wallets } from './full/wallets'
import { lesson as exchangesRamps } from './full/exchanges-ramps'
import { lesson as buyingSendingSafely } from './full/buying-sending-safely'
import { lesson as securityScams } from './full/security-scams'
import { lesson as blocksHashingChain } from './full/blocks-hashing-chain'
import { lesson as bitcoinArchitecture } from './full/bitcoin-architecture'
import { lesson as bitcoinMining } from './full/bitcoin-mining'
import { lesson as bitcoinHalving } from './full/bitcoin-halving'
import { lesson as ethereumArchitecture } from './full/ethereum-architecture'
import { lesson as solanaArchitecture } from './full/solana-architecture'
import { lesson as coinsAtAGlance } from './full/coins-at-a-glance'
import { lesson as stakingYield } from './full/staking-yield'
import { lesson as perpetualFutures } from './full/perpetual-futures'

const FULL_LESSONS = [
  whyCryptoExists,
  keysAddressesSeed,
  wallets,
  exchangesRamps,
  buyingSendingSafely,
  securityScams,
  blocksHashingChain,
  bitcoinArchitecture,
  bitcoinMining,
  bitcoinHalving,
  ethereumArchitecture,
  solanaArchitecture,
  coinsAtAGlance,
  stakingYield,
  perpetualFutures,
]

/** id → full lesson object. */
export const LESSON_REGISTRY = Object.fromEntries(
  FULL_LESSONS.map((l) => [l.id, l]),
)
