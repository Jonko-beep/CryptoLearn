/**
 * FULL LESSON — Wallets. Builds on keys/seed phrases: what a wallet actually
 * is, and the two axes that classify every wallet (hot/cold, custodial/
 * non-custodial). Text + callouts + lists; quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'wallets',
  tier: 1,
  title: 'Wallets',
  summary: 'Hot vs cold, custodial vs non-custodial — where your keys actually live.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'Now that you know funds are controlled by [[private-key|private keys]], we can answer a question that trips up almost every beginner: **what is a crypto wallet, really?**',
    },
    {
      type: 'heading',
      level: 2,
      text: 'A wallet holds keys, not coins',
    },
    {
      type: 'paragraph',
      text: 'Your coins never leave the [[blockchain]] — they are just entries on a shared [[ledger]]. A wallet does not "contain" them. Instead, a wallet **stores your keys and signs transactions** on your behalf. Think of it less like a physical wallet of cash and more like a keychain that can unlock your spot on the ledger.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why this matters',
      text: 'Because the wallet only holds keys, "moving wallets" really means moving (or re-deriving) your keys via your [[seed-phrase|seed phrase]]. Lose the app but keep the seed phrase, and your funds are perfectly safe.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Axis 1 — Hot vs Cold',
    },
    {
      type: 'paragraph',
      text: 'The first question is whether the keys ever touch an internet-connected device.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'A [[hot-wallet|hot wallet]] is connected to the internet — a phone or browser app. **Convenient** for everyday use, but a larger attack surface (malware, phishing, malicious sites).',
        'A [[cold-wallet|cold wallet]] keeps keys **offline** — a [[hardware-wallet|hardware wallet]] or paper backup. Far harder to hack, but less convenient for frequent spending.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'A common split',
      text: 'Many people keep a small "spending" balance in a hot wallet (like cash in your pocket) and the bulk of their holdings in cold storage (like a safe). Match the security to the stakes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Axis 2 — Custodial vs Non-custodial',
    },
    {
      type: 'paragraph',
      text: 'The second question is **who holds the private keys**.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'In a [[custodial]] wallet, a third party (typically an exchange) holds the keys for you. It feels like a bank app: easy logins, password resets, customer support — but you are trusting them, and "not your keys, not your coins" applies.',
        'In a [[non-custodial]] wallet, **you** hold the keys and the [[seed-phrase|seed phrase]]. You get full control and censorship-resistance — and full responsibility. There is no reset button.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Custodial convenience has a cost',
      text: 'If a custodian is hacked, freezes withdrawals, or fails, your funds can be lost or stuck — even though you did nothing wrong. Self-custody removes that counterparty risk but puts security entirely on you.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Putting the axes together',
    },
    {
      type: 'paragraph',
      text: 'These two axes are independent, giving four combinations. Most beginners start **custodial + hot** (an exchange app) for convenience, and graduate to **non-custodial + cold** (a hardware wallet) as their holdings — and their confidence — grow.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Custodial + hot** — exchange account. Easiest to start; you trust the exchange.',
        '**Non-custodial + hot** — a phone/browser wallet you control. Good for active use of small amounts.',
        '**Non-custodial + cold** — hardware wallet. The standard for securing meaningful long-term savings.',
        '**Custodial + cold** — institutional custody services (less common for individuals).',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'There is no single "best" wallet',
      text: 'The right choice depends on how much you hold and how often you transact. Understand the tradeoffs and you can pick deliberately instead of by accident.',
    },
  ],

  takeaways: [
    'A wallet stores your keys and signs transactions — the coins themselves stay on the blockchain.',
    'Hot vs cold = whether keys touch the internet: convenience vs security.',
    'Custodial vs non-custodial = who holds the keys: a third party vs you (control + responsibility).',
    'The two axes combine; a common path is custodial+hot to start, non-custodial+cold for serious savings.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What does a crypto wallet actually store?',
        options: [
          'The coins themselves',
          'Your keys, which it uses to sign transactions',
          'A copy of the entire blockchain',
          'Your bank account details',
        ],
        answer: 1,
        explanation: 'Coins live on the blockchain; the wallet holds your keys and signs transactions with them.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'A cold wallet keeps your private keys offline, making it harder to hack than a hot wallet.',
        answer: true,
        explanation: 'True — cold storage keeps keys off internet-connected devices, reducing the attack surface.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'A wallet where a third party (like an exchange) holds your keys for you is called a ______ wallet.',
        accept: ['custodial'],
        explanation: 'Custodial — a third party holds the keys, so you are trusting them with your funds.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Which setup is generally recommended for securing meaningful long-term savings?',
        options: [
          'Custodial + hot (exchange app)',
          'Non-custodial + cold (hardware wallet)',
          'Whichever has the nicest interface',
          'Sharing keys across several apps for redundancy',
        ],
        answer: 1,
        explanation: 'Non-custodial cold storage (e.g. a hardware wallet) is the standard for protecting larger long-term holdings.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'With a non-custodial wallet, if you lose your seed phrase you can contact support to reset access.',
        answer: false,
        explanation: 'False — non-custodial means you alone hold the keys. There is no reset; the seed phrase is the only backup.',
      },
    ],
  },
}
