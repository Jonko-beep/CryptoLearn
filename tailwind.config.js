/** @type {import('tailwindcss').Config} */
// Color tokens point to CSS custom properties defined in src/config/theme.js and applied
// at app startup. To re-skin the entire app, change only theme.js — these classes update automatically.

// withAlpha makes a CSS-variable color work with Tailwind's /opacity modifiers
// (e.g. `bg-accent/15`). Tailwind v3 can't inject alpha into a plain `var(--x)`
// hex value, so we resolve opacity ourselves via color-mix. This keeps theme.js
// authorable as ordinary hex while `bg-accent/10`, `border-rim/50`, etc. all work.
const withAlpha = (varName) => ({ opacityValue } = {}) =>
  opacityValue === undefined
    ? `var(${varName})`
    : `color-mix(in srgb, var(${varName}) calc(${opacityValue} * 100%), transparent)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: withAlpha('--surface'),
          raised: withAlpha('--surface-raised'),
          hover: withAlpha('--surface-hover'),
        },
        accent: {
          DEFAULT: withAlpha('--accent'),
          dim: withAlpha('--accent-dim'),
        },
        rim: withAlpha('--rim'),
        ink: {
          DEFAULT: withAlpha('--ink'),
          dim: withAlpha('--ink-dim'),
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px var(--accent-glow)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
