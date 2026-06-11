/**
 * FULL LESSON — Keys, Addresses & Seed Phrases. Beginner self-custody
 * fundamentals: key pairs, addresses, signatures, and the seed phrase that
 * backs them all up. Text + callouts + an ordered list; quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'keys-addresses-seed',
  tier: 1,
  title: 'Keys, Addresses & Seed Phrases',
  summary: 'Public/private keys, how addresses are derived, and why a seed phrase is everything.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'In crypto there are no usernames or passwords you can reset. Ownership is proven with **cryptographic keys**. Understanding them is the single most important step toward holding [[cryptocurrency]] safely — so let\'s build the picture from the ground up.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The key pair',
    },
    {
      type: 'paragraph',
      text: 'Every account is really a **key pair**: a [[private-key|private key]] and a matching [[public-key|public key]]. They are generated together and linked by math, but you cannot work backwards from the public one to the private one. The split of duties is the whole trick:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'The **private key** is a secret number that authorizes spending. Whoever knows it controls the funds — full stop.',
        'The **public key** can be shared freely. It lets anyone *verify* your actions without being able to perform them.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Not your keys, not your coins',
      text: 'This famous phrase captures the core rule of crypto: control of the private key **is** ownership. If someone else holds your private key, they own your funds — no matter whose name is "on the account".',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Addresses: your public mailbox',
    },
    {
      type: 'paragraph',
      text: 'You don\'t hand out your public key directly. Instead, an [[address]] is derived from it — typically by running it through a [[hash]] function and some encoding. The result is the short string you share to **receive** funds, like bc1q… or 0x… . It is safe to post publicly; the worst anyone can do with your address is send you money.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'One direction only',
      text: 'private key → public key → address. Each arrow is easy to compute forward and practically impossible to reverse. Sharing your address reveals nothing about the keys behind it.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Signatures: proving it\'s you',
    },
    {
      type: 'paragraph',
      text: 'So how do you spend without revealing your secret? With a [[digital-signature|digital signature]]. To send funds, your wallet signs the transaction with your private key. The network then uses your public key to confirm the signature is valid — proving you authorized it — **without ever seeing the private key itself**.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'You create a transaction ("send 0.1 to this address").',
        'Your wallet **signs** it with your private key.',
        'The signature + your public key go out to the network.',
        'Every [[node]] verifies the signature matches — and only then accepts the transaction.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Seed phrases: the master backup',
    },
    {
      type: 'paragraph',
      text: 'Managing raw private keys by hand would be miserable. Modern wallets instead generate a single **master secret** and derive *all* your keys and addresses from it. That master secret is encoded as a [[seed-phrase|seed phrase]] — usually **12 or 24 plain English words** (a BIP-39 mnemonic).',
    },
    {
      type: 'paragraph',
      text: 'Those words are a human-friendly backup of everything. Write them down once and you can restore your entire wallet — every key, every address — on any compatible device, even if your phone is lost or destroyed.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Your seed phrase IS your money',
      text: 'Anyone who reads your seed phrase can recreate your wallet and take everything. Never type it into a website, never store it in a screenshot or cloud note, and never share it with "support". Write it on paper (or metal) and keep it offline. No legitimate service will ever ask for it.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Test your backup',
      text: 'Before moving meaningful funds, practice restoring your wallet from the written seed phrase on a fresh install. A backup you have never tested is not a backup.',
    },
  ],

  takeaways: [
    'Each account is a key pair: a secret private key (authorizes spending) and a shareable public key (verifies it).',
    'Your address is derived from your public key and is safe to share to receive funds.',
    'Digital signatures prove you authorized a transaction without revealing your private key.',
    'A 12/24-word seed phrase backs up the master secret behind all your keys — guard it like the funds themselves.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'Which key authorizes spending and must be kept secret?',
        options: ['The public key', 'The private key', 'The address', 'The seed word list shown publicly'],
        answer: 1,
        explanation: 'The private key authorizes spending — whoever holds it controls the funds, so it must stay secret.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'It is safe to share your public address so others can send you funds.',
        answer: true,
        explanation: 'True — an address only lets people send you money; it reveals nothing about your private key.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'What does a digital signature let you do?',
        options: [
          'Recover a lost private key',
          'Prove you authorized a transaction without revealing your private key',
          'Increase your transaction speed',
          'Hide your address from the network',
        ],
        answer: 1,
        explanation: 'A signature proves authorization; the network verifies it with your public key, never seeing the private key.',
      },
      {
        id: 'q4',
        type: 'fib',
        prompt: 'The 12- or 24-word backup that can restore your entire wallet is called a ______ phrase.',
        accept: ['seed', 'recovery', 'mnemonic'],
        explanation: 'A seed phrase (a.k.a. recovery phrase / BIP-39 mnemonic) backs up the master secret behind all your keys.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A legitimate wallet or exchange support team may occasionally need your seed phrase to help you.',
        answer: false,
        explanation: 'False — no legitimate service ever needs your seed phrase. Anyone asking for it is trying to steal your funds.',
      },
    ],
  },
}
