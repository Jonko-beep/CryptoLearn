/**
 * FULL LESSON — Security & Scams. The self-custody security mindset, a tour of
 * the most common crypto scams, and a practical defense checklist. Closes out
 * the Getting Started module. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'security-scams',
  tier: 1,
  title: 'Security & Scams',
  summary: 'Phishing, approvals, fake support, and the habits that keep you safe.',
  minutes: 10,

  blocks: [
    {
      type: 'paragraph',
      text: 'Self-custody means being your own bank — which also means being your own **security team**. Because crypto transactions are irreversible and pseudonymous, the space attracts scammers. The good news: almost every attack works by tricking *you*, so a handful of habits stops the overwhelming majority of them.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The one rule above all others',
      text: 'Never reveal your [[seed-phrase|seed phrase]] or [[private-key|private key]] to anyone, ever — not support staff, not a website, not a "wallet validation" pop-up. No legitimate person or app will ever need it. Anyone who asks is trying to rob you.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Scams to recognize',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '[[phishing|Phishing]] — fake websites, apps, or emails that imitate a real wallet or exchange to capture your seed phrase or login. The URL is often subtly misspelled.',
        '**Fake support** — strangers in chats or DMs who "help" you, then ask for your seed phrase or remote access to your device.',
        '**Giveaway / impersonation scams** — "send 1 ETH, get 2 back" from a fake celebrity or brand. This is *always* a scam; no one doubles your money for free.',
        'Malicious [[token-approval|token approvals]] — a dApp asks you to sign an approval that, in the fine print, lets it drain a token from your wallet. Read what you sign.',
        '[[rug-pull|Rug pulls]] & impossible yields — a project hypes huge guaranteed returns, collects deposits, then disappears with the funds.',
        '[[address-poisoning|Address poisoning]] — a scammer sends you a tiny transaction from a look-alike address, hoping you later copy it from your history and send real funds there.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Your defense checklist',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Use a [[hardware-wallet|hardware wallet]] for any meaningful holdings — it keeps keys offline even on a compromised computer.',
        'Bookmark the real sites and type URLs yourself; double-check the address before connecting your wallet.',
        'Turn on [[two-factor|two-factor authentication]] (an authenticator app, **not** SMS) on every exchange account.',
        'Read exactly what a transaction or approval does before signing; periodically revoke approvals you no longer use.',
        'Treat urgency, unsolicited offers, and "guaranteed returns" as bright red flags.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'If it sounds too good to be true…',
      text: 'It is. Scammers manufacture urgency — limited time, act now, exclusive access — precisely to stop you from thinking. Real opportunities survive a night\'s sleep and a second opinion.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When in doubt, do nothing',
      text: 'You can always close the tab, ignore the message, and verify through official channels. Inaction is free; a mistaken signature or transfer is not. The pause itself is your best defense.',
    },
  ],

  takeaways: [
    'Self-custody makes you your own security team; most attacks rely on tricking you, not breaking cryptography.',
    'Never share your seed phrase or private key — no legitimate service ever needs it.',
    'Learn the common scams: phishing, fake support, giveaways, malicious approvals, rug pulls, address poisoning.',
    'Defend with a hardware wallet, bookmarked URLs, app-based 2FA, careful signing, and skepticism of urgency.',
    'When unsure, do nothing and verify — the pause is your strongest protection.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'tf',
        prompt: 'A genuine wallet "validation" pop-up may legitimately ask you to enter your seed phrase.',
        answer: false,
        explanation: 'False — nothing legitimate ever needs your seed phrase. Any request for it is an attempt to steal your funds.',
      },
      {
        id: 'q2',
        type: 'fib',
        prompt: 'Fake websites and emails that imitate a real service to steal your credentials are called ______.',
        accept: ['phishing'],
        explanation: 'Phishing impersonates trusted services to capture your seed phrase or login.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'A stranger offers to "double any crypto you send" to a wallet address. This is:',
        options: [
          'A limited-time investment opportunity',
          'Always a scam',
          'Fine if they are verified',
          'A normal exchange feature',
        ],
        answer: 1,
        explanation: 'Giveaway/doubling offers are always scams — no one multiplies your money for free.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Which is the best protection for meaningful long-term holdings?',
        options: [
          'Keeping the seed phrase in a cloud note for backup',
          'A hardware wallet plus careful verification of what you sign',
          'SMS two-factor authentication only',
          'Sharing keys across devices for redundancy',
        ],
        answer: 1,
        explanation: 'A hardware wallet keeps keys offline; combined with verifying every signature, it stops most attacks.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'Malicious token approvals can let a dApp drain assets from your wallet even without your seed phrase.',
        answer: true,
        explanation: 'True — signing a bad approval grants spending permission over a token, so always read what you sign and revoke unused approvals.',
      },
    ],
  },
}
