/**
 * FULL LESSON — Data Models: UTXO vs Account. Opens tier 2 and the
 * How Blockchains Differ module: formalizes the two ledger designs as the
 * first comparative axis — parallelism, replay protection, privacy, and
 * programmability tradeoffs. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'data-models',
  tier: 2,
  title: 'Data Models: UTXO vs Account',
  summary: 'The two ways chains track balances, and the tradeoffs of each.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Welcome to the intermediate tier. Tier 1 went deep on one chain; this module builds the **comparative axes** that let you read *any* chain. The first axis is the most fundamental: what does the ledger actually record? There are two great answers — Bitcoin\'s [[utxo|UTXO model]] and Ethereum\'s [[account-model|account model]] — and almost every chain you will ever meet uses one, the other, or a hybrid.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'UTXO: a ledger of coins',
    },
    {
      type: 'paragraph',
      text: 'You met UTXOs in the Bitcoin module: the ledger records discrete **unspent transaction outputs** — digital coins and bills of arbitrary denominations. There are no balances and no accounts at the protocol level; "your balance" is just what your wallet computes by summing the UTXOs your keys can unlock. A transaction **consumes** whole UTXOs as inputs and **creates** new ones as outputs (including your change), so the ledger\'s entire state is simply: *the set of coins that currently exist and who can spend each one*.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Account: a ledger of balances',
    },
    {
      type: 'paragraph',
      text: 'The account model records what intuition expects: a global table of **accounts and balances**, updated in place like a bank ledger — subtract here, add there. This is the design Ethereum chose (its architecture lesson, two lessons ahead, shows why), and most smart-contract chains followed. Nothing is consumed or created per transaction; state simply *mutates*.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Tradeoff 1: parallelism and verification',
    },
    {
      type: 'paragraph',
      text: 'UTXOs are independent objects: two transactions spending *different* coins cannot conflict, so nodes can verify them in parallel and the rules stay beautifully simple — inputs must exist, sum of inputs ≥ sum of outputs, signatures valid. Account transactions share mutable state, so **order matters**: if two transactions touch the same balance, the result depends on which runs first. (Solana\'s trick of demanding upfront state declarations — coming later in this module — is precisely a workaround for this.)',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Replay protection: free vs engineered',
      text: 'Spend a UTXO and it is destroyed — rebroadcasting the same transaction fails automatically, because its inputs no longer exist. Account transactions don\'t consume anything, so a valid "send 1 ETH" could be replayed forever. The fix is the account **nonce**: a per-account counter each transaction must increment, making every transaction one-time-use by construction.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Tradeoff 2: privacy posture',
    },
    {
      type: 'paragraph',
      text: 'Neither model is private — both ledgers are public — but their defaults differ. UTXO wallets naturally generate a **fresh address for every payment** (each output is its own object anyway), scattering your history across many addresses. The account model pulls the other way: one address, accumulating your entire financial history in a single place — convenient for contracts, generous to anyone running the on-chain analysis you\'ll meet in the advanced tier.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Tradeoff 3: programmability',
    },
    {
      type: 'paragraph',
      text: 'Here the account model earns its complexity. A [[smart-contract|smart contract]] is a program with **persistent, mutable state** — a balance sheet code can read and write directly. That maps perfectly onto accounts and awkwardly onto a pile of consumable coins. It can be done — Cardano\'s **eUTXO** extends outputs with data and validation logic, as you\'ll see in this module\'s closing survey — but the path of least resistance for programmable chains has overwhelmingly been accounts.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**UTXO** — simple to verify, naturally parallel, replay-safe by construction, privacy-friendlier defaults; awkward for shared program state.',
        '**Account** — natural for contracts and balances, but needs nonces, careful ordering, and concentrates history on one address.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Neither model is "better" — they optimize for different jobs, which is exactly the pattern this module keeps finding. You now have the first axis: **what the ledger records**. The next lesson takes the second: **who gets to write to it** — the consensus families.',
    },
  ],

  takeaways: [
    'UTXO ledgers record discrete spendable coins; account ledgers record balances updated in place.',
    'Independent UTXOs verify in parallel and can\'t conflict; shared account state makes transaction order matter.',
    'Spent UTXOs are destroyed (automatic replay protection); account models need a per-account nonce instead.',
    'UTXO defaults scatter history across fresh addresses; account models concentrate it on one.',
    'Contracts need persistent mutable state, which fits accounts naturally — hybrids like Cardano\'s eUTXO split the difference.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What does a UTXO-based ledger actually store?',
        options: [
          'A balance number for every address',
          'The set of unspent outputs (discrete "coins") and the conditions to spend each',
          'A list of account nonces',
          'Only the most recent block',
        ],
        answer: 1,
        explanation: 'There are no balances at the protocol level — your wallet computes one by summing the UTXOs your keys control.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Why can two UTXO transactions often be verified in parallel?',
        options: [
          'UTXO chains have faster hardware',
          'Transactions spending different coins are independent — they cannot conflict with each other',
          'UTXO transactions skip signature checks',
          'They cannot; UTXO verification is strictly sequential',
        ],
        answer: 1,
        explanation: 'Each UTXO is a separate object; only transactions competing for the same coins conflict. Shared account state, by contrast, makes ordering matter.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Account-model chains prevent a transaction from being replayed using a per-account counter called a ______.',
        accept: ['nonce'],
        explanation: 'Each transaction must use the account\'s next nonce, making it one-time-use. (UTXO chains get replay protection free — spent inputs cease to exist.)',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Smart contracts fit the account model naturally because they need persistent, mutable state that code can read and write.',
        answer: true,
        explanation: 'True — a contract is a program with a balance sheet. Accounts provide that directly; UTXOs require extensions like Cardano\'s eUTXO.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Because UTXO wallets use fresh addresses per payment, UTXO chains are fully anonymous.',
        answer: false,
        explanation: 'False — the ledger is still public and addresses can be linked by analysis. Fresh addresses are a privacy-friendlier default, not anonymity.',
      },
    ],
  },
}
