/**
 * GLOSSARY DATA — content-agnostic term list.
 * Referenced from lesson text via [[term-id]] inline markup (see lib/markup.jsx)
 * and rendered by the Glossary page. To localize the app to another subject,
 * replace these entries; no component changes needed.
 *
 * @type {import('./schema').GlossaryTerm[]}
 */
export const GLOSSARY = [
  // --- Money & motivation ---
  { id: 'cryptocurrency', term: 'Cryptocurrency', tier: 'Beginner', definition: 'A digital asset secured by cryptography and recorded on a blockchain, issued and transferred without a central authority.' },
  { id: 'decentralization', term: 'Decentralization', tier: 'Beginner', definition: 'Distributing control across many independent participants instead of one trusted intermediary.' },
  { id: 'ledger', term: 'Ledger', tier: 'Beginner', definition: 'A record of transactions. A blockchain is a shared, append-only ledger replicated across many computers.' },

  // --- Blockchain mechanics ---
  { id: 'blockchain', term: 'Blockchain', tier: 'Beginner', definition: 'An append-only chain of blocks, each cryptographically linked to the previous one, replicated across a peer-to-peer network.' },
  { id: 'block', term: 'Block', tier: 'Beginner', definition: 'A batch of transactions plus metadata (timestamp, previous-block hash, nonce) added to the chain as a single unit.' },
  { id: 'hash', term: 'Hash', tier: 'Beginner', definition: 'A fixed-length fingerprint produced by a hash function. The same input always yields the same hash; any change produces a completely different one.' },
  { id: 'sha-256', term: 'SHA-256', tier: 'Beginner', definition: 'The specific 256-bit hash function Bitcoin uses to link blocks and to mine. Part of the SHA-2 family designed by the NSA.' },
  { id: 'merkle-tree', term: 'Merkle Tree', tier: 'Intermediate', definition: 'A tree of hashes that compresses many transactions into a single "root" hash, letting you prove a transaction is included without downloading the whole block.' },
  { id: 'node', term: 'Node', tier: 'Beginner', definition: 'A computer running the blockchain software. Full nodes independently store and validate the entire chain — there is no central server.' },
  { id: 'mempool', term: 'Mempool', tier: 'Intermediate', definition: 'The "waiting room" of unconfirmed transactions that have been broadcast to the network but not yet included in a block.' },
  { id: 'nonce', term: 'Nonce', tier: 'Intermediate', definition: 'A number miners vary to search for a block hash below the target. "Number used once."' },
  { id: 'immutability', term: 'Immutability', tier: 'Beginner', definition: 'The practical inability to alter recorded history: changing one block would change its hash and invalidate every block after it.' },
  { id: 'confirmation', term: 'Confirmation', tier: 'Beginner', definition: 'A block built on top of the one containing your transaction. More confirmations = exponentially harder to reverse.' },
  { id: 'finality', term: 'Finality', tier: 'Intermediate', definition: 'The point at which a transaction is considered irreversible. Probabilistic (Bitcoin) or deterministic (BFT-style chains).' },
  { id: 'soft-fork', term: 'Soft Fork', tier: 'Intermediate', definition: 'A backward-compatible rule change: old nodes still accept new blocks. Tightens the rules.' },
  { id: 'hard-fork', term: 'Hard Fork', tier: 'Intermediate', definition: 'A non-backward-compatible rule change. Nodes must upgrade or split onto a separate chain.' },
  { id: 'reorg', term: 'Reorg (Reorganization)', tier: 'Advanced', definition: 'When nodes discard a chain of blocks in favor of a longer/heavier competing chain, "reorganizing" recent history.' },

  // --- Consensus & data models ---
  { id: 'consensus', term: 'Consensus Mechanism', tier: 'Intermediate', definition: 'The rules by which a decentralized network agrees on which transactions are valid and who adds the next block.' },
  { id: 'pow', term: 'Proof of Work (PoW)', tier: 'Intermediate', definition: 'Consensus where miners spend computing power to find a valid block hash. Security comes from the cost of energy.' },
  { id: 'pos', term: 'Proof of Stake (PoS)', tier: 'Intermediate', definition: 'Consensus where validators lock up ("stake") capital for the right to propose blocks and are slashed for misbehaving.' },
  { id: 'poh', term: 'Proof of History (PoH)', tier: 'Advanced', definition: 'A verifiable clock (used by Solana) that timestamps events before consensus, letting validators agree on order more cheaply.' },
  { id: 'bft', term: 'BFT (Byzantine Fault Tolerance)', tier: 'Advanced', definition: 'A class of consensus that tolerates a fraction of malicious nodes and reaches deterministic finality, often via rounds of voting.' },
  { id: 'utxo', term: 'UTXO Model', tier: 'Intermediate', definition: 'Bitcoin\'s accounting model: your balance is the set of Unspent Transaction Outputs you can spend, like discrete coins/bills.' },
  { id: 'account-model', term: 'Account Model', tier: 'Intermediate', definition: 'Ethereum\'s accounting model: balances are stored per-account and updated directly, like a bank balance.' },
  { id: 'trilemma', term: 'Blockchain Trilemma', tier: 'Advanced', definition: 'The tension between decentralization, security, and scalability — optimizing two tends to compromise the third.' },
  { id: 'validator', term: 'Validator', tier: 'Intermediate', definition: 'A node in a Proof-of-Stake network that proposes and attests to blocks, earning rewards and risking slashing.' },
  { id: 'staking', term: 'Staking', tier: 'Intermediate', definition: 'Locking up tokens to help secure a PoS network in exchange for rewards.' },

  // --- Smart contracts & assets ---
  { id: 'evm', term: 'EVM (Ethereum Virtual Machine)', tier: 'Intermediate', definition: 'The runtime that executes Ethereum smart contracts. "EVM-compatible" chains can run the same contracts.' },
  { id: 'smart-contract', term: 'Smart Contract', tier: 'Intermediate', definition: 'Code deployed on-chain that runs exactly as written when called, without an intermediary.' },
  { id: 'gas', term: 'Gas', tier: 'Intermediate', definition: 'The unit measuring computational work on Ethereum. Users pay a gas fee to have transactions processed.' },
  { id: 'token', term: 'Token', tier: 'Intermediate', definition: 'An asset issued via a smart contract on an existing chain (e.g. an ERC-20), as opposed to a chain\'s native coin.' },
  { id: 'stablecoin', term: 'Stablecoin', tier: 'Intermediate', definition: 'A token designed to hold a stable value, usually pegged to a fiat currency like the US dollar.' },

  // --- Keys & wallets ---
  { id: 'private-key', term: 'Private Key', tier: 'Beginner', definition: 'A secret number that authorizes spending from an account. Whoever knows it controls the funds, so it must never be shared.' },
  { id: 'public-key', term: 'Public Key', tier: 'Beginner', definition: 'A key derived from the private key that can be shared freely; it lets others verify your signatures without being able to spend.' },
  { id: 'address', term: 'Address', tier: 'Beginner', definition: 'A short, shareable string derived from your public key (often via hashing). You give it out to receive funds; it reveals nothing about your keys.' },
  { id: 'digital-signature', term: 'Digital Signature', tier: 'Beginner', definition: 'Cryptographic proof, produced with your private key, that you authorized a transaction — verifiable with your public key without exposing the private key.' },
  { id: 'seed-phrase', term: 'Seed Phrase', tier: 'Beginner', definition: 'A 12- or 24-word backup (a BIP-39 mnemonic) of the master secret from which all your keys and addresses derive. Anyone with it controls the wallet.' },
  { id: 'hot-wallet', term: 'Hot Wallet', tier: 'Beginner', definition: 'A wallet whose keys live on an internet-connected device (phone or browser). Convenient for everyday use but a larger attack surface.' },
  { id: 'cold-wallet', term: 'Cold Wallet', tier: 'Beginner', definition: 'A wallet that keeps keys offline (hardware or paper). Much harder to compromise; used for long-term storage.' },
  { id: 'hardware-wallet', term: 'Hardware Wallet', tier: 'Beginner', definition: 'A dedicated offline device that stores private keys and signs transactions without exposing them to a connected computer.' },
  { id: 'custodial', term: 'Custodial', tier: 'Beginner', definition: 'An arrangement where a third party (e.g. an exchange) holds your private keys for you — convenient, but you must trust the custodian.' },
  { id: 'non-custodial', term: 'Non-custodial', tier: 'Beginner', definition: 'An arrangement where you alone hold your private keys and seed phrase — full control and full responsibility, with no reset option.' },

  // --- Exchanges & trading ---
  { id: 'exchange', term: 'Exchange', tier: 'Beginner', definition: 'A marketplace for buying, selling, and trading crypto. Centralized exchanges (CEX) custody your funds; decentralized exchanges (DEX) let you trade from your own wallet.' },
  { id: 'cex', term: 'CEX (Centralized Exchange)', tier: 'Beginner', definition: 'A company that matches buyers and sellers and holds (custodies) user funds. Convenient and beginner-friendly, but KYC-gated and a custodial risk.' },
  { id: 'dex', term: 'DEX (Decentralized Exchange)', tier: 'Beginner', definition: 'A protocol that lets you trade directly from your own wallet via smart contracts, with no company holding your funds and usually no KYC.' },
  { id: 'fiat', term: 'Fiat', tier: 'Beginner', definition: 'Traditional, government-issued currency such as the US dollar or euro, as opposed to crypto.' },
  { id: 'on-ramp', term: 'On-ramp', tier: 'Beginner', definition: 'A service for converting fiat money into crypto — for example, buying bitcoin with dollars.' },
  { id: 'off-ramp', term: 'Off-ramp', tier: 'Beginner', definition: 'A service for converting crypto back into fiat money — for example, selling and withdrawing to your bank.' },
  { id: 'kyc', term: 'KYC (Know Your Customer)', tier: 'Beginner', definition: 'Identity verification an exchange performs to comply with anti-money-laundering laws, linking your real identity to your account.' },

  // --- Security & scams ---
  { id: 'phishing', term: 'Phishing', tier: 'Beginner', definition: 'A scam using fake websites, apps, or messages that imitate a real service to steal your seed phrase or login credentials.' },
  { id: 'rug-pull', term: 'Rug Pull', tier: 'Beginner', definition: 'A scam where a project\'s creators attract deposits with hype, then abscond with the funds.' },
  { id: 'token-approval', term: 'Token Approval', tier: 'Intermediate', definition: 'A permission you grant a smart contract to spend a token from your wallet. Malicious approvals can drain funds, so review and revoke them carefully.' },
  { id: 'two-factor', term: 'Two-Factor Authentication (2FA)', tier: 'Beginner', definition: 'A second login step beyond a password — ideally via an authenticator app rather than SMS — that protects exchange accounts.' },
  { id: 'address-poisoning', term: 'Address Poisoning', tier: 'Intermediate', definition: 'A scam where an attacker sends a tiny transaction from a look-alike address, hoping you later copy it from your history and send funds to them.' },

  // --- Bitcoin mining & supply ---
  { id: 'mining', term: 'Mining', tier: 'Beginner', definition: 'Repeatedly hashing a candidate block while varying the nonce, competing to find a hash below the target and earn the right to add the next block.' },
  { id: 'difficulty', term: 'Difficulty', tier: 'Intermediate', definition: 'A measure of how hard it currently is to find a valid block. It retargets every 2,016 blocks to keep Bitcoin\'s block time near 10 minutes.' },
  { id: 'hashrate', term: 'Hashrate', tier: 'Intermediate', definition: 'The total hashing power securing a Proof-of-Work network. Higher hashrate means rewriting history is more expensive.' },
  { id: 'block-subsidy', term: 'Block Subsidy', tier: 'Beginner', definition: 'The newly minted bitcoin paid to the miner of each block — the only source of new supply. It halves every 210,000 blocks.' },
  { id: 'halving', term: 'Halving', tier: 'Beginner', definition: 'The scheduled event, every 210,000 blocks (~4 years), at which Bitcoin\'s block subsidy is cut in half, capping total supply near 21 million.' },
  { id: 'satoshi', term: 'Satoshi', tier: 'Beginner', definition: 'The smallest unit of bitcoin: one hundred-millionth (0.00000001) of a BTC. Named after Bitcoin\'s pseudonymous creator.' },

  // --- Markets & derivatives ---
  { id: 'leverage', term: 'Leverage', tier: 'Advanced', definition: 'Borrowing to control a position larger than your capital. Multiplies both gains and losses.' },
  { id: 'liquidation', term: 'Liquidation', tier: 'Advanced', definition: 'Forced closure of a leveraged position when losses erode the margin below the maintenance requirement.' },
  { id: 'perpetual', term: 'Perpetual Future', tier: 'Advanced', definition: 'A derivative that tracks an asset\'s price with no expiry, kept near spot price by periodic funding payments.' },
  { id: 'funding-rate', term: 'Funding Rate', tier: 'Advanced', definition: 'Periodic payments exchanged between longs and shorts in a perpetual market to tether its price to spot.' },
  { id: 'margin', term: 'Margin', tier: 'Advanced', definition: 'The collateral backing a leveraged position. Initial margin opens it; maintenance margin keeps it from liquidation.' },
  { id: 'compounding', term: 'Compounding', tier: 'Beginner', definition: 'Earning returns on both your principal and previously earned returns, so growth accelerates over time.' },
]

// Fast id → term lookup, built once.
const BY_ID = Object.fromEntries(GLOSSARY.map((t) => [t.id, t]))

/** Look up a glossary term by id. Returns undefined if not found. */
export function getTerm(id) {
  return BY_ID[id]
}
