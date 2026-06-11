/**
 * FULL LESSON — Coins vs Tokens (ERC-20). The native-asset vs contract-asset
 * distinction, what a token actually is (a contract's balance table), why the
 * ERC-20 standard matters, and the practical/safety consequences. Opens the
 * Tokens & Scaling module. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'coins-vs-tokens',
  tier: 2,
  title: 'Coins vs Tokens (ERC-20)',
  summary: 'Native coins versus tokens issued by smart contracts.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: '"Coin" and "token" get used interchangeably in casual conversation, but they name two genuinely different things — and the difference has practical consequences for fees, safety, and how you read any project. The split is simple: **a coin belongs to the chain; a token lives on top of it.**',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Native coins: the chain\'s own asset',
    },
    {
      type: 'paragraph',
      text: 'A **native coin** is the asset built into the blockchain\'s own protocol: BTC on Bitcoin, ETH on Ethereum, SOL on Solana. The protocol itself issues it (as a [[block-subsidy|block subsidy]] or [[staking]] rewards), the base ledger tracks it, and — crucially — it is what [[gas]] fees are paid in. A chain has exactly one native coin; it is the chain\'s fuel and its security budget.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Tokens: assets issued by smart contracts',
    },
    {
      type: 'paragraph',
      text: 'A [[token]] is different: it is created by a [[smart-contract|smart contract]] deployed on an existing chain. Strip away the branding and a token is just **a contract\'s internal table of balances** — "address A holds 100, address B holds 250" — with functions to move entries around. The chain doesn\'t know or care that the contract represents a currency; it just executes the code. One chain can host millions of tokens, and on Ethereum alone it does.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Tokens spend the coin\'s gas',
      text: 'Sending a token is a smart-contract call, and contract calls cost [[gas]] — paid in the **native coin**, never in the token itself. This is the trap from the Buying & Sending lesson: you can hold $1,000 of a token and be unable to move it because the wallet has no ETH (or SOL, etc.) for the fee.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ERC-20: the standard that made tokens work',
    },
    {
      type: 'paragraph',
      text: 'Early tokens each invented their own interface, so every wallet and exchange needed custom code per token. [[erc-20|ERC-20]], an Ethereum standard finalized in 2017, fixed that by defining one common set of functions every fungible token exposes — check a balance, transfer, and approve a third party to spend ([[token-approval|the approval]] you learned to be careful with in Security & Scams).',
    },
    {
      type: 'paragraph',
      text: 'That standardization is why the ecosystem composes: any wallet, [[dex|DEX]], or lending protocol that speaks ERC-20 automatically supports every ERC-20 token ever deployed — USDC, LINK, UNI, and the rest — with zero custom integration. Other chains have equivalents (SPL tokens on Solana), and Ethereum has sibling standards for other asset shapes, most famously **ERC-721** for NFTs (next lesson).',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Anyone can deploy a token — with any name',
      text: 'There is no naming authority. A scammer can deploy a token called "USDC" in five minutes, and it will look real in a wallet. The token\'s **contract address** is its only true identity — when adding or trading a token, verify the address against the project\'s official site, not the name or logo.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why the distinction matters when you evaluate',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Different security inheritance** — a coin\'s integrity rests on its chain\'s consensus; a token adds a second layer of risk: the contract\'s code and whoever controls it (mint functions, admin keys).',
        '**Different supply rules** — a coin\'s issuance is set by protocol consensus; a token\'s supply is whatever its contract says, changeable if the contract allows it.',
        '**Different fee currency** — always keep some native coin alongside your tokens, or they are stuck.',
      ],
    },
    {
      type: 'paragraph',
      text: 'With the coin/token split clear, the next lessons look at the most important token categories — starting with NFTs, then the most-used tokens in all of crypto: **stablecoins**.',
    },
  ],

  takeaways: [
    'A native coin is the chain\'s built-in asset (BTC, ETH, SOL); each chain has exactly one, and gas is paid in it.',
    'A token is issued by a smart contract on an existing chain — effectively a contract\'s table of balances.',
    'ERC-20 standardized the token interface, letting every wallet and DEX support every compliant token automatically.',
    'A token\'s real identity is its contract address — names and logos are freely fakeable.',
    'Tokens carry an extra risk layer (contract code, admin keys) on top of the chain\'s own security.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is the defining difference between a coin and a token?',
        options: [
          'Coins are valuable; tokens are not',
          'A coin is the chain\'s native protocol asset; a token is issued by a smart contract on an existing chain',
          'Coins are physical; tokens are digital',
          'Tokens can only be used for voting',
        ],
        answer: 1,
        explanation: 'Native coins are built into the chain itself (BTC, ETH, SOL); tokens are created by contracts deployed on top of a chain.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'When you send an ERC-20 token, the transaction fee is paid in that token.',
        answer: false,
        explanation: 'False — a token transfer is a contract call, and gas is always paid in the chain\'s native coin (ETH on Ethereum).',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'The Ethereum standard interface that fungible tokens implement, making them work in any compatible wallet or DEX, is called ERC-______ (a number).',
        accept: ['20', 'erc-20', 'erc20'],
        explanation: 'ERC-20 defines the common functions (transfer, balanceOf, approve) that fungible Ethereum tokens share.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Two tokens in your wallet are both named "USDC". How do you tell which is genuine?',
        options: [
          'The one with the nicer logo',
          'The one with the higher balance',
          'Verify the contract address against the issuer\'s official site',
          'Whichever appeared in the wallet first',
        ],
        answer: 2,
        explanation: 'Anyone can deploy a token with any name — only the contract address identifies a token. Always verify it from an official source.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A token\'s holders take on the risk of its contract code (e.g. mint functions, admin keys) in addition to the underlying chain\'s security.',
        answer: true,
        explanation: 'True — tokens add a contract-level risk layer on top of the chain. The chain can be perfectly secure while the token\'s contract is not.',
      },
    ],
  },
}
