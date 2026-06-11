import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { THEME } from './config/theme'

/**
 * Apply theme CSS variables to <html> once at startup. Every Tailwind semantic
 * color token (surface/accent/ink/…) resolves through these, so changing
 * theme.js re-skins the whole app — no component edits. (See ARCHITECTURE.md.)
 */
function applyTheme(theme) {
  const root = document.documentElement
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value)
  }
  document.title = theme.appName
}

applyTheme(THEME)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
