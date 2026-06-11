/**
 * FULL LESSON — embeds the COMPOUNDING calculator. Chosen here because staking
 * rewards compound, and the same widget transfers directly to a finance app
 * (the whole point of this architecture). Quiz mixes mc + fib.
 * @type {import('../../schema').Lesson}
 */
export const lesson = {
  id: 'staking-yield',
  tier: 2,
  title: 'Staking, Yield & Compounding',
  summary: 'How staking rewards work — and why compounding frequency quietly changes your returns.',
  minutes: 9,

  blocks: [
    {
      type: 'paragraph',
      text: 'In a [[pos|Proof of Stake]] network, [[staking]] is how ordinary holders help secure the chain and earn rewards. But "earn rewards" hides a more important financial idea that applies far beyond crypto: [[compounding]].',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What staking actually pays',
    },
    {
      type: 'paragraph',
      text: 'When you stake, your tokens back a [[validator]] that proposes and attests to blocks. The protocol pays newly issued tokens and a share of fees for honest work — and can [[staking|slash]] the stake for misbehavior. The headline number is an **APR** (annual percentage rate): the simple yearly reward rate.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'APR vs APY',
      text: 'APR is the raw annual rate. APY (annual percentage yield) accounts for compounding — reinvesting rewards so you earn rewards on your rewards. If you re-stake frequently, your effective return (APY) is higher than the stated APR.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why frequency matters',
    },
    {
      type: 'paragraph',
      text: 'The more often rewards are added back to your principal, the more often they start earning too. Going from yearly to daily compounding, at the same nominal rate, measurably increases the final amount. Use the calculator below to feel it: fix the rate and years, then change the **compounding frequency**.',
    },
    {
      // INTERACTIVE WIDGET EMBED — compounding calculator with staking-flavored defaults.
      type: 'widget',
      widget: 'compounding',
      props: {
        principal: 1000,
        rate: 5,
        years: 10,
        frequency: 12,
        principalLabel: 'Amount staked',
        rateLabel: 'Reward rate (APR %)',
      },
      caption: 'Adjust the inputs — notice how compounding frequency changes the curve and final total.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Rewards are not free money',
      text: 'Staking yield is partly new token issuance — which dilutes everyone. A 5% reward while the supply inflates 5% is closer to treading water in real terms. Also weigh lock-up/unbonding periods, slashing risk, and the token\'s price volatility.',
    },
    {
      type: 'paragraph',
      text: 'The takeaway transfers everywhere: **compounding is the engine of long-term growth, and frequency is a free lever**. The exact same math drives a savings account, an index fund, or a staking position.',
    },
  ],

  takeaways: [
    'Staking secures a PoS chain and pays rewards (an APR) for honest validation.',
    'APY accounts for compounding; reinvesting rewards beats simple APR.',
    'Higher compounding frequency raises the effective return at the same nominal rate.',
    'Real yield must account for token inflation, lock-ups, slashing, and price risk.',
  ],

  quiz: {
    passThreshold: 0.7,
    questions: [
      {
        id: 'q1',
        type: 'mc',
        prompt: 'What is the key difference between APR and APY?',
        options: [
          'APR is for crypto, APY is for stocks',
          'APY accounts for compounding (earning rewards on rewards); APR does not',
          'They are the same thing',
          'APR is always higher than APY',
        ],
        answer: 1,
        explanation: 'APY reflects the effect of reinvesting/compounding rewards, so it is higher than the raw APR.',
      },
      {
        id: 'q2',
        type: 'tf',
        prompt: 'At the same nominal rate, compounding daily yields a higher final amount than compounding annually.',
        answer: true,
        explanation: 'True — more frequent compounding means rewards start earning sooner, increasing the total.',
      },
      {
        id: 'q3',
        type: 'fib',
        prompt: 'Reinvesting your rewards so they also earn returns is called ______.',
        accept: ['compounding', 'compound interest', 'compound'],
        explanation: 'Compounding — earning returns on both principal and previously earned returns.',
      },
      {
        id: 'q4',
        type: 'mc',
        prompt: 'Why might a "5% staking reward" overstate your real gain?',
        options: [
          'Exchanges secretly take it',
          'New token issuance can dilute holders, and token price can fall',
          'Compounding reduces returns',
          'Staking is illegal',
        ],
        answer: 1,
        explanation: 'Rewards are partly inflation; real yield must net out dilution, plus you carry price and slashing risk.',
      },
    ],
  },
}
