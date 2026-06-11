/**
 * FULL LESSON — Buying, Sending & Receiving Safely. The irreversibility mindset
 * plus concrete habits: address checks, network matching, test transactions,
 * fees & confirmations, and a pre-send checklist. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'buying-sending-safely',
  tier: 1,
  title: 'Buying, Sending & Receiving Safely',
  summary: 'Address checks, test transactions, and avoiding irreversible mistakes.',
  minutes: 8,

  blocks: [
    {
      type: 'paragraph',
      text: 'Crypto gives you direct control of your money — and with it, direct responsibility. The single most important habit to build early is simple: **slow down before you hit send**, because on a blockchain, transactions are [[immutability|irreversible]].',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'There is no undo button',
      text: 'No bank to call, no chargeback, no support line that can claw a transaction back. If you send to the wrong address or the wrong network, the funds are almost always gone for good. This is not pessimism — it is the rule you build your habits around.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Receiving funds',
    },
    {
      type: 'paragraph',
      text: 'To receive crypto, you share your [[address]] — that long string (or QR code) your wallet generates. Always copy it straight from your wallet or let the sender scan the QR; never retype it by hand. It is safe to share publicly: the worst anyone can do with your address is send you money.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The network must match',
    },
    {
      type: 'paragraph',
      text: 'Here is a subtle trap: the **same address format can exist on multiple chains** (for example, many networks share the 0x… format). Sending an asset over the wrong network — or to an address meant for a different chain — can permanently lose it. Before sending, confirm that the **asset and the network both match** on each side.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Beware clipboard hijacking',
      text: 'Some malware silently swaps a crypto address you copy for the attacker\'s. After pasting, always check that the address shown matches the one you intended — especially the first and last several characters.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Sending funds: the careful sequence',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Copy the recipient\'s address from a trusted source (their wallet/QR).',
        'Verify it after pasting — check the first **and** last characters, not just the start.',
        'Confirm the **network** and **asset** match what the recipient expects.',
        'For any meaningful amount, send a **small test transaction first** and confirm it arrives.',
        'Double-check the **amount** (decimal places are easy to fat-finger), then send the rest.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Fees and confirmations',
    },
    {
      type: 'paragraph',
      text: 'Every transaction needs a fee paid in the chain\'s native coin (its [[gas|gas/fee]]) — so keep a little of it on hand, or your transfer can\'t go through. After sending, the network\'s [[node|nodes]] include it in a block; wait for a few [[confirmation|confirmations]] before treating a payment as final, especially for large amounts.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'A 10-second pre-send checklist',
      text: 'Right address (first & last characters)? · Right network and asset? · Right amount? · Enough native coin for the fee? · Tested with a small send for big transfers? If all five are yes, send with confidence.',
    },
  ],

  takeaways: [
    'Blockchain transactions are irreversible — there is no chargeback, so verify before sending.',
    'Share your address by copy/QR, never by hand; it is safe to give out to receive funds.',
    'Match BOTH the asset and the network on each side; wrong-network sends can be lost.',
    'Verify a pasted address (first and last characters) to defeat clipboard-hijacking malware.',
    'Send a small test transaction first for large amounts, and wait for confirmations.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'tf',
        prompt: 'If you accidentally send crypto to the wrong address, you can request a chargeback to reverse it.',
        answer: false,
        explanation: 'False — blockchain transactions are irreversible. There is no chargeback, which is why you verify before sending.',
      },
      {
        id: 'q2',
        type: 'mc',
        prompt: 'Before sending a large amount, what is the safest extra step?',
        options: [
          'Send the full amount quickly before fees change',
          'Send a small test transaction first and confirm it arrives',
          'Turn off your antivirus',
          'Retype the address by hand to be sure',
        ],
        answer: 1,
        explanation: 'A small test transaction confirms the address and network are correct before you commit the full amount.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'Why should you check the first AND last characters of a pasted address?',
        options: [
          'To make the transaction faster',
          'Clipboard-hijacking malware can swap the address you copied',
          'Addresses change every few minutes',
          'It lowers the network fee',
        ],
        answer: 1,
        explanation: 'Malware can silently replace a copied address; verifying both ends catches the swap.',
      },
      {
        id: 'q4',
        type: 'tf',
        prompt: 'Sending an asset over the wrong network can permanently lose the funds.',
        answer: true,
        explanation: 'True — the asset and network must match on both sides; a wrong-network send is often unrecoverable.',
      },
      {
        id: 'q5',
        type: 'fib',
        prompt: 'You must keep some of the chain\'s native coin to pay the transaction ______ (what you pay to have a transaction processed).',
        accept: ['fee', 'fees', 'gas', 'gas fee'],
        explanation: 'Transactions require a fee (gas) paid in the native coin — without it, your transfer can\'t be processed.',
      },
    ],
  },
}
