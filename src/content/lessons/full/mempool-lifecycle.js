/**
 * FULL LESSON — The Mempool. A transaction's journey from "send" to
 * "confirmed": signing, gossip, per-node mempools, the fee market, stuck
 * transactions, and why unconfirmed means nothing yet. Quiz mixes mc/tf/fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'mempool-lifecycle',
  tier: 1,
  title: 'The Mempool',
  summary: 'How a transaction travels from "sent" to "confirmed".',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'You press send, a spinner spins, and some minutes later the funds are "confirmed." This lesson fills in the in-between — because between your wallet and the blockchain there is a waiting room, a fee auction, and a journey worth understanding every time you transact.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The life of a transaction',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Created & signed** — your wallet builds the transaction and signs it with your private key (the [[digital-signature|signature]] lesson in action).',
        '**Broadcast** — it gossips out across the [[node|peer-to-peer network]] from the last lesson, reaching most nodes in seconds.',
        '**Checked at the door** — every receiving node validates it: signature correct? funds real? not a double-spend of something already pending?',
        '**Waits in the mempool** — valid transactions sit in each node\'s [[mempool]] ("memory pool"), the waiting room of everything broadcast but not yet in a block.',
        '**Selected & included** — a block producer picks transactions from its mempool — by fee, as we\'ll see — into the next [[block]].',
        '**Buried** — each later block adds a [[confirmation]], hardening the transaction into history (the lesson after next explains exactly why).',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'There is no THE mempool',
      text: 'Each node maintains its **own** mempool. They largely agree — gossip spreads transactions widely — but they are never identical: nodes hear things in different orders, set different minimum fees, and evict differently when full. The mempool is a thousand overlapping waiting rooms, not one global queue.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The fee market: an auction for limited seats',
    },
    {
      type: 'paragraph',
      text: 'Here is where economics enters. A block has limited space, and when more transactions wait than fit, producers — who keep the fees — naturally pick the **highest-paying** ones first. Your fee is therefore a *bid* for priority. In quiet hours a minimal fee confirms quickly; during a frenzy, the mempool swells and the going rate climbs until demand backs off. (This auction is universal — the intermediate tier\'s gas lesson shows Ethereum\'s elaborate version of it.)',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Stuck transactions',
    },
    {
      type: 'paragraph',
      text: 'Bid too low in a busy market and your transaction simply… waits. It is not lost — it sits in mempools, repeatedly passed over, until either fees fall, a producer scoops it up, or nodes evict it after days and it effectively expires (the funds never left your keys). Most wallets offer escape hatches: a **speed up** option that rebroadcasts the same transaction with a higher fee, replacing the stuck one.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Unconfirmed means nothing has happened yet',
      text: 'A transaction in the mempool is a *proposal*, not a payment. It can be outbid indefinitely or replaced by the sender. Anyone "paying" you with a mempool transaction has paid you nothing yet — this is precisely why the Buying & Sending lesson says to wait for confirmations before treating money as received, and why merchants who accept "zero-conf" payments are extending trust, not receiving settlement.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Reading the room',
    },
    {
      type: 'paragraph',
      text: 'The mempool is public, and it is one of crypto\'s most useful dashboards: explorer sites visualize how many transactions are waiting at each fee level, so you can *see* the going rate before you bid — pay less on a quiet Sunday, or know exactly why your transfer is crawling on a frantic Tuesday. (Much later, in the advanced tier, you\'ll meet traders who read this same waiting room for darker purposes.) Next question: who actually gets to scoop transactions out of the pool and into a block — and what stops them from abusing the privilege?',
    },
  ],

  takeaways: [
    'A transaction\'s journey: signed → gossiped → validated by every node → waits in mempools → selected into a block → buried by confirmations.',
    'Every node keeps its own mempool — overlapping waiting rooms, not one global queue.',
    'Blockspace is limited, so fees are bids: producers fill blocks highest-rate-first, and congestion raises the going rate.',
    'Underpaid transactions wait, can be sped up with a higher-fee replacement, and eventually expire — funds never left your keys.',
    'A mempool transaction is a proposal, not a payment: only confirmations make money received.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'fib',
        prompt: 'Valid transactions that have been broadcast but not yet included in a block wait in each node\'s ______.',
        accept: ['mempool', 'memory pool'],
        explanation: 'The mempool is the waiting room — and each node maintains its own copy of it.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'There is a single global mempool that every node reads from identically.',
        answer: false,
        explanation: 'False — each node keeps its own mempool. Gossip keeps them similar, but order, fee floors, and eviction differ node to node.',
      },
      {
        id: 'q3',
        type: 'mc',
        prompt: 'When more transactions are waiting than fit in a block, which generally get included first?',
        options: [
          'The oldest transactions',
          'The largest amounts',
          'The highest fee payers — producers keep the fees, so it is an auction',
          'A random selection',
        ],
        answer: 2,
        explanation: 'Fees are bids for limited blockspace. Producers maximize revenue by filling blocks highest-rate-first.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Your transaction has sat unconfirmed for hours with a low fee. What is true?',
        options: [
          'The funds are permanently lost',
          'It is waiting in mempools and can be sped up by rebroadcasting with a higher fee — or it will eventually expire',
          'The blockchain is broken',
          'A miner has stolen it',
        ],
        answer: 1,
        explanation: 'Stuck means outbid, not lost — your keys still control the funds, and most wallets can replace the transaction with a better-paying one.',
      },
      {
        id: 'q5',
        type: 'tf',
        prompt: 'A payment visible in the mempool is as final as a confirmed one.',
        answer: false,
        explanation: 'False — unconfirmed transactions are proposals that can stall or be replaced. Wait for confirmations before treating funds as received.',
      },
    ],
  },
}
