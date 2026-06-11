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
  { id: 'delegation', term: 'Delegation', tier: 'Intermediate', definition: 'Backing a validator with your tokens to share its rewards (minus commission) without running hardware. On many chains, delegators also share the validator\'s slashing.' },
  { id: 'liquid-staking', term: 'Liquid Staking', tier: 'Intermediate', definition: 'Staking through a protocol that issues a tradable receipt token (e.g. stETH) which accrues the yield — keeping staked capital usable, at the cost of contract, depeg, and concentration risks.' },

  // --- Smart contracts & assets ---
  { id: 'evm', term: 'EVM (Ethereum Virtual Machine)', tier: 'Intermediate', definition: 'The runtime that executes Ethereum smart contracts. "EVM-compatible" chains can run the same contracts.' },
  { id: 'smart-contract', term: 'Smart Contract', tier: 'Intermediate', definition: 'Code deployed on-chain that runs exactly as written when called, without an intermediary.' },
  { id: 'gas', term: 'Gas', tier: 'Intermediate', definition: 'The unit measuring computational work on Ethereum and similar chains. Users pay a gas fee, in the chain\'s native coin, to have transactions processed — colloquially, any chain\'s transaction fee.' },
  { id: 'gwei', term: 'Gwei', tier: 'Intermediate', definition: 'The unit gas prices are quoted in: one billionth (10⁻⁹) of an ETH.' },
  { id: 'base-fee', term: 'Base Fee', tier: 'Intermediate', definition: 'The protocol-set portion of an Ethereum gas price — it rises when blocks run more than half full, falls when under, and is burned rather than paid to anyone.' },
  { id: 'nft', term: 'NFT (Non-Fungible Token)', tier: 'Intermediate', definition: 'A token where each unit is unique and individually owned — a registry of distinct items (token ID → owner) rather than a balance of interchangeable units.' },
  { id: 'erc-721', term: 'ERC-721', tier: 'Intermediate', definition: 'The Ethereum standard for non-fungible tokens: a contract mapping unique token IDs to owners, each with a pointer to its metadata.' },
  { id: 'mint', term: 'Mint', tier: 'Intermediate', definition: 'Creating new tokens — issuing units of a fungible token, or registering a new unique ID in an NFT collection.' },
  { id: 'token', term: 'Token', tier: 'Intermediate', definition: 'An asset issued via a smart contract on an existing chain (e.g. an ERC-20), as opposed to a chain\'s native coin.' },
  { id: 'erc-20', term: 'ERC-20', tier: 'Intermediate', definition: 'The Ethereum standard interface for fungible tokens (transfer, balanceOf, approve). Any wallet or DEX that supports ERC-20 works with every token that implements it.' },
  { id: 'stablecoin', term: 'Stablecoin', tier: 'Intermediate', definition: 'A token designed to hold a stable value, usually pegged to a fiat currency like the US dollar.' },
  { id: 'depeg', term: 'Depeg', tier: 'Intermediate', definition: 'When a stablecoin trades significantly away from its target value — a brief wobble if arbitrage restores it, or a death spiral if confidence in the mechanism collapses.' },

  // --- DeFi ---
  { id: 'defi', term: 'DeFi (Decentralized Finance)', tier: 'Intermediate', definition: 'Financial services — trading, lending, yield — rebuilt as smart contracts used directly from your own wallet, with no company custodying funds.' },
  { id: 'amm', term: 'AMM (Automated Market Maker)', tier: 'Intermediate', definition: 'A DEX design that prices trades with a formula over a liquidity pool\'s balances (classically x × y = k) instead of an order book.' },
  { id: 'liquidity-pool', term: 'Liquidity Pool', tier: 'Intermediate', definition: 'A smart contract holding paired tokens that traders swap against. Depositors (LPs) earn a share of trading fees proportional to their share of the pool.' },
  { id: 'impermanent-loss', term: 'Impermanent Loss', tier: 'Advanced', definition: 'An LP\'s shortfall versus simply holding the pooled tokens, caused by their prices diverging. It reverses if prices reconverge — and becomes permanent on withdrawal.' },
  { id: 'cdp', term: 'CDP (Collateralized Debt Position)', tier: 'Advanced', definition: 'A vault where you lock collateral and mint or borrow against it, subject to a minimum collateral ratio. Fall below it and the collateral is liquidated.' },
  { id: 'flash-loan', term: 'Flash Loan', tier: 'Advanced', definition: 'An uncollateralized loan that must be borrowed and repaid within a single atomic transaction — if repayment fails, the whole transaction reverts and the loan never happened.' },
  { id: 'mev', term: 'MEV (Maximal Extractable Value)', tier: 'Advanced', definition: 'Profit extracted by reordering, inserting, or excluding transactions in a block — from benign arbitrage to predatory sandwich attacks on users\' trades.' },
  { id: 'oracle', term: 'Oracle', tier: 'Advanced', definition: 'A service feeding off-chain data (typically prices) to smart contracts. Lending and derivative protocols depend on them — manipulated oracles are behind many DeFi exploits.' },
  { id: 'arbitrage', term: 'Arbitrage', tier: 'Advanced', definition: 'Profiting from price differences for the same asset across markets, which simultaneously pushes those prices back together. The mechanism that holds pegs and tethers derivatives to spot.' },
  { id: 'bridge', term: 'Bridge', tier: 'Advanced', definition: 'A system for moving value between chains, typically by locking the asset on the origin chain and minting a wrapped representation on the destination chain.' },
  { id: 'wrapped-token', term: 'Wrapped Token', tier: 'Advanced', definition: 'A token representing an asset locked elsewhere (e.g. wBTC for bitcoin held by a custodian). Its value depends on the bridge or custodian actually holding the backing.' },
  { id: 'dao', term: 'DAO (Decentralized Autonomous Organization)', tier: 'Advanced', definition: 'An organization whose treasury and rules live in smart contracts, governed by token-holder votes instead of managers — the standard structure for steering DeFi protocols.' },
  { id: 'governance-token', term: 'Governance Token', tier: 'Advanced', definition: 'A token conferring voting power over a protocol\'s parameters, treasury, and upgrades — typically one token, one vote.' },

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
  { id: 'derivative', term: 'Derivative', tier: 'Advanced', definition: 'A contract whose value derives from an underlying asset\'s price without holding the asset — futures, perpetuals, and options are the crypto staples.' },
  { id: 'futures-contract', term: 'Futures Contract', tier: 'Advanced', definition: 'An agreement to buy or sell an asset at a set price on a set expiry date, settling in cash or by delivery when that date arrives.' },
  { id: 'basis', term: 'Basis', tier: 'Advanced', definition: 'The gap between a futures contract\'s price and the spot price. Positive in contango (futures above spot), negative in backwardation.' },
  { id: 'hedge', term: 'Hedge', tier: 'Advanced', definition: 'A position taken to offset risk in another — e.g. shorting a future or buying a put against holdings you keep.' },
  { id: 'call-option', term: 'Call Option', tier: 'Advanced', definition: 'The right, but not the obligation, to BUY an asset at a fixed strike price until expiry. Buyers profit from rises; loss is capped at the premium.' },
  { id: 'put-option', term: 'Put Option', tier: 'Advanced', definition: 'The right, but not the obligation, to SELL an asset at a fixed strike price until expiry — a bearish bet or insurance on holdings.' },
  { id: 'strike-price', term: 'Strike Price', tier: 'Advanced', definition: 'The fixed price at which an option can be exercised. Payoffs hinge on where the asset finishes relative to the strike.' },
  { id: 'option-premium', term: 'Option Premium', tier: 'Advanced', definition: 'The upfront price paid for an option — intrinsic value plus time value. It is the buyer\'s maximum loss and the writer\'s maximum gain.' },
  { id: 'leverage', term: 'Leverage', tier: 'Advanced', definition: 'Borrowing to control a position larger than your capital. Multiplies both gains and losses.' },
  { id: 'liquidation', term: 'Liquidation', tier: 'Advanced', definition: 'Forced closure of a leveraged position when losses erode the margin below the maintenance requirement.' },
  { id: 'perpetual', term: 'Perpetual Future', tier: 'Advanced', definition: 'A derivative that tracks an asset\'s price with no expiry, kept near spot price by periodic funding payments.' },
  { id: 'funding-rate', term: 'Funding Rate', tier: 'Advanced', definition: 'Periodic payments exchanged between longs and shorts in a perpetual market to tether its price to spot.' },
  { id: 'margin', term: 'Margin', tier: 'Advanced', definition: 'The collateral backing a leveraged position. Initial margin opens it; maintenance margin keeps it from liquidation.' },
  { id: 'compounding', term: 'Compounding', tier: 'Beginner', definition: 'Earning returns on both your principal and previously earned returns, so growth accelerates over time.' },
  { id: 'order-book', term: 'Order Book', tier: 'Advanced', definition: 'The live list of standing buy orders (bids) and sell orders (asks) at each price level. Its depth shows how much an order can trade without moving the price.' },
  { id: 'spread', term: 'Spread (Bid-Ask)', tier: 'Advanced', definition: 'The gap between the highest bid and the lowest ask. A tight spread signals a liquid market; a wide one is an instant cost to anyone trading.' },
  { id: 'market-order', term: 'Market Order', tier: 'Advanced', definition: 'An order that executes immediately at the best available prices in the book — guaranteed execution, unguaranteed price.' },
  { id: 'limit-order', term: 'Limit Order', tier: 'Advanced', definition: 'An order that fills only at a specified price or better. It may never execute, and while resting it provides liquidity to the book.' },
  { id: 'slippage', term: 'Slippage', tier: 'Advanced', definition: 'The difference between the expected price of a trade and the average price actually received, caused by an order consuming multiple levels of a book or pool.' },
  { id: 'stop-loss', term: 'Stop-Loss', tier: 'Advanced', definition: 'An order that triggers when price crosses a set level, used to exit a losing position automatically. The trigger is guaranteed; the fill price is not.' },
  { id: 'candlestick', term: 'Candlestick', tier: 'Advanced', definition: 'A chart element summarizing one time interval with four prices: open, high, low, close. The body spans open-close; the wicks mark the extremes.' },
  { id: 'support-resistance', term: 'Support & Resistance', tier: 'Advanced', definition: 'Price areas where moves have repeatedly stalled — support below (buying absorbs falls), resistance above (selling caps rallies). Broken levels often swap roles.' },
  { id: 'moving-average', term: 'Moving Average', tier: 'Advanced', definition: 'The average price over a rolling window (e.g. 50 or 200 days), used to smooth noise and define trend direction.' },
  { id: 'risk-reward', term: 'Risk/Reward Ratio', tier: 'Advanced', definition: 'The distance to your stop versus the distance to your target. At 1:2 or better, a trader can be wrong most of the time and still be profitable.' },
  { id: 'drawdown', term: 'Drawdown', tier: 'Advanced', definition: 'The decline from an account\'s peak to its low. Recovery is asymmetric: a 50% drawdown requires a 100% gain to get back to even.' },

  // --- Evaluating & investing ---
  { id: 'market-cap', term: 'Market Capitalization', tier: 'Intermediate', definition: 'Price × circulating supply — what the market currently values an asset\'s liquid supply at. Compare it to FDV to see how much supply is still locked.' },
  { id: 'fdv', term: 'FDV (Fully Diluted Valuation)', tier: 'Advanced', definition: 'Price × maximum supply — the hypothetical value if every token existed today. A large gap between FDV and market cap signals future unlock/selling pressure.' },
  { id: 'liquidity', term: 'Liquidity', tier: 'Intermediate', definition: 'How much of an asset can be bought or sold without significantly moving its price. Thin liquidity makes exits costly and manipulation cheap.' },
  { id: 'vesting', term: 'Vesting / Unlocks', tier: 'Advanced', definition: 'The schedule on which locked tokens (team, investors, treasury) become tradable. Unlock events add supply to the market and often precede selling pressure.' },
  { id: 'dca', term: 'DCA (Dollar-Cost Averaging)', tier: 'Beginner', definition: 'Investing a fixed amount at regular intervals regardless of price, spreading entries over time instead of trying to time the market.' },
  { id: 'emissions', term: 'Emissions', tier: 'Advanced', definition: 'The schedule and rate at which new tokens are released into circulation — effectively a forecast of how fast existing holders are diluted.' },
  { id: 'token-burn', term: 'Token Burn', tier: 'Advanced', definition: 'Permanently destroying tokens to reduce supply, e.g. by sending them to an unspendable address. Ethereum burns part of every transaction fee.' },
  { id: 'block-explorer', term: 'Block Explorer', tier: 'Intermediate', definition: 'A website that renders raw blockchain data as readable pages — look up any transaction, address balance, token supply, or holder list.' },
  { id: 'whale', term: 'Whale', tier: 'Intermediate', definition: 'An entity holding enough of an asset that its trades move the market. On transparent ledgers, whale wallets can be watched in real time.' },
  { id: 'tvl', term: 'TVL (Total Value Locked)', tier: 'Advanced', definition: 'The total capital deposited in a DeFi protocol\'s smart contracts — a rough gauge of the protocol\'s scale and the trust users place in it.' },

  // --- Regulation & taxes ---
  { id: 'capital-gains', term: 'Capital Gain', tier: 'Advanced', definition: 'The profit realized when disposing of an asset: proceeds minus cost basis. Many jurisdictions tax long-held gains at lower rates than short-term ones.' },
  { id: 'cost-basis', term: 'Cost Basis', tier: 'Advanced', definition: 'What you originally paid for an asset, including fees — the number subtracted from sale proceeds to compute your taxable gain or loss.' },
]

// Fast id → term lookup, built once.
const BY_ID = Object.fromEntries(GLOSSARY.map((t) => [t.id, t]))

/** Look up a glossary term by id. Returns undefined if not found. */
export function getTerm(id) {
  return BY_ID[id]
}
