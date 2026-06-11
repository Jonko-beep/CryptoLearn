/**
 * THEME CONFIG — single source of truth for branding.
 *
 * To re-skin the app for a different subject (e.g. personal finance):
 *   1. Change `appName`, `tagline`, `subject`, and `disclaimer`.
 *   2. Change the hex values in `vars` — accent teal → your brand color.
 *   3. Done. Zero component changes required.
 *
 * The `vars` object maps CSS custom property names → values. They are
 * applied to <html> at startup (see src/main.jsx), and Tailwind's semantic
 * color tokens (surface, accent, ink, …) all resolve through these vars.
 */
export const THEME = {
  appName: 'CryptoLearn',
  tagline: 'Master the blockchain, one lesson at a time.',
  subject: 'cryptocurrency',
  accentName: 'teal',

  disclaimer:
    'CryptoLearn is for educational purposes only. Nothing on this platform constitutes financial or investment advice. Crypto markets are highly volatile — always do your own research.',

  vars: {
    // Backgrounds
    '--surface':        '#0f1117',   // page background
    '--surface-raised': '#1a1d27',   // cards, panels
    '--surface-hover':  '#232736',   // hover state

    // Accent (teal) — swap to e.g. '#f59e0b' for gold
    '--accent':         '#14b8a6',   // teal-500
    '--accent-dim':     '#0d9488',   // teal-600
    '--accent-glow':    'rgba(20,184,166,0.18)',

    // Borders
    '--rim':            '#1e2535',   // subtle border

    // Text
    '--ink':            '#f1f5f9',   // primary text (slate-100)
    '--ink-dim':        '#94a3b8',   // secondary / muted text (slate-400)
  },
}
