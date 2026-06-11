/**
 * FULL LESSON — NFTs. Non-fungibility via ERC-721, the honest "what do you
 * actually own" question (off-chain metadata, copyright), real use cases
 * beyond art, and the post-mania market reality with its scams. Follows
 * coins-vs-tokens directly. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'nfts',
  tier: 2,
  title: 'NFTs',
  summary: 'Non-fungible tokens: unique on-chain ownership and its uses.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'The last lesson covered fungible tokens — where every unit is identical, like dollar bills. An [[nft|NFT]] (non-fungible token) flips that one property: **each token is unique and individually owned**, like a house deed or a numbered print. One ERC-20 USDC is exactly as good as another; NFT #4217 is not NFT #4218. That single change turns a token contract from a currency into a **registry of distinct things**.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How it works: ERC-721',
    },
    {
      type: 'paragraph',
      text: 'Where an [[erc-20|ERC-20]] contract keeps a table of *balances* ("address A holds 100"), an [[erc-721|ERC-721]] contract keeps a table of *items*: token ID → owner, plus a pointer to each token\'s **metadata** (its name, image, and traits). [[mint|Minting]] creates a new ID in the registry; transferring reassigns its owner. A sibling standard, **ERC-1155**, handles the in-between cases — game items where you hold 50 identical swords and one unique shield in a single contract.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What you actually own',
    },
    {
      type: 'paragraph',
      text: 'Time for the most important — and least advertised — part. Owning an NFT means the chain provably says **this token ID is yours**: unforgeable, censorship-resistant, tradable. What it does *not* automatically mean:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**The image itself usually lives off-chain.** Storing a picture on Ethereum is prohibitively expensive, so the token typically holds a *link* — ideally to content-addressed storage like IPFS (where the link cryptographically pins the exact file), at worst to an ordinary web server that can go down or change what it serves.',
        '**Copyright does not transfer by default.** Buying an NFT of an artwork is buying the token, not the intellectual property — unless a license explicitly says otherwise. The artist usually retains the rights.',
        '**The famous critique is half right.** Yes, anyone can right-click-save the image. What they cannot copy is the registry entry — the provable, on-chain fact of which address owns the token. Whether that fact is *worth* anything is exactly what the market decides.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ask where the metadata lives',
      text: 'An NFT pointing at a centralized URL is a deed to whatever that server decides to show — collections have broken, changed, or vanished when servers did. Before valuing an NFT, check whether its metadata is on-chain or content-addressed (IPFS/Arweave), or just a company\'s web link wearing a blockchain costume.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What NFTs are used for',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Art & collectibles** — the famous use: digital art and profile-picture collections, where scarcity and provenance are the product.',
        '**Naming** — ENS names (like alice.eth) are NFTs: a human-readable address you own and can resell.',
        '**Gaming** — items and characters as tokens the player owns and can trade outside the game\'s walls.',
        '**Tickets & membership** — transferable access passes whose authenticity anyone can verify on-chain.',
        '**Real-world asset claims** — the frontier: deeds, invoices, and certificates represented as unique tokens (with the usual caveat that a court, not a chain, enforces the real-world half).',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'The market reality',
    },
    {
      type: 'paragraph',
      text: 'Honesty requires the chart: NFTs went through a genuine mania in 2021–22 — a single digital artwork sold for $69 million, profile pictures traded for hundreds of thousands — and then trading volumes collapsed by well over 90%. Two structural lessons survived the crash. First, **NFTs are profoundly illiquid**: unlike a fungible token with a deep pool, each NFT needs its own specific buyer — the [[liquidity]] checks from earlier lessons apply with a vengeance. Second, **reported volumes were heavily inflated by wash trading**, with sellers trading to themselves to manufacture activity. And creator **royalties**, once pitched as the artist\'s superpower, proved to be a marketplace policy rather than a protocol law — when competition arrived, most venues made them optional.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The scam patterns',
      text: 'Everything from Security & Scams applies, plus NFT specials: counterfeit collections (same art, different contract — only the **contract address** identifies the real one, exactly as with fake tokens), fake mint sites that drain wallets via malicious [[token-approval|approvals]], and airdropped junk NFTs that lure you to a poisoned site. Verify collection addresses from official sources, and never interact with NFTs that appear unsolicited.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'A three-question filter',
      text: 'Before buying any NFT: ① Is this the official contract address? ② Where does the metadata actually live? ③ If I needed to sell next month, who would buy it? If the honest answers are "unsure, a private server, and nobody" — you have your answer.',
    },
  ],

  takeaways: [
    'An NFT makes each token unique: ERC-721 is a registry mapping token IDs to owners, versus ERC-20\'s table of balances.',
    'You provably own the token; the image usually lives off-chain, and copyright does not transfer by default.',
    'Metadata storage matters: on-chain or content-addressed (IPFS) beats a centralized URL that can vanish.',
    'Real uses span art, names (ENS), game items, tickets, and tokenized real-world claims.',
    'NFTs are illiquid, post-mania volumes collapsed, royalties proved optional — and counterfeit collections make the contract address the only truth.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What makes a token "non-fungible"?',
        options: [
          'It cannot be transferred',
          'Each token is unique and individually owned, rather than interchangeable units',
          'It has no monetary value',
          'It exists on multiple chains at once',
        ],
        answer: 1,
        explanation: 'Fungible tokens are identical units (any 1 USDC = any other); an NFT is a distinct item with its own ID and owner.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'The Ethereum standard for non-fungible tokens, keeping a registry of token ID → owner, is ERC-______ (a number).',
        accept: ['721', 'erc-721', 'erc721'],
        explanation: 'ERC-721 defines the unique-token registry; ERC-1155 extends it for mixed fungible/non-fungible collections.',
      },
      {
        id: 'q3',
        type: 'tf',
        prompt: 'Buying an NFT of an artwork automatically transfers the artwork\'s copyright to you.',
        answer: false,
        explanation: 'False — you buy the token, not the intellectual property. Rights transfer only if an explicit license grants them.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why does it matter where an NFT\'s metadata (image, traits) is stored?',
        options: [
          'On-chain storage makes the NFT cheaper',
          'If it points to a centralized server, the content can change or vanish — the token would then point at nothing',
          'Metadata determines the gas fee',
          'It does not matter; the chain stores everything',
        ],
        answer: 1,
        explanation: 'The token usually holds only a link. Content-addressed storage (IPFS) pins the exact file; an ordinary URL is a promise from whoever runs the server.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Two NFT collections can use identical artwork, so the contract address is what identifies the genuine collection.',
        answer: true,
        explanation: 'True — art is trivially copied; the contract address is the only real identity, exactly as with counterfeit fungible tokens.',
      },
    ],
  },
}
