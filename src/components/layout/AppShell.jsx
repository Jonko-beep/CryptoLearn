import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import Disclaimer from '../common/Disclaimer'

/**
 * AppShell — the persistent frame around every route: top nav, the routed page
 * (<Outlet/>), and a footer disclaimer. A subtle radial glow sits behind it all.
 */
export default function AppShell() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-radial from-accent/5 via-transparent to-transparent"
        style={{ background: 'radial-gradient(60% 50% at 50% 0%, var(--accent-glow), transparent 70%)' }}
      />
      <TopNav />
      <main>
        <Outlet />
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="border-t border-rim pt-6">
          <Disclaimer compact />
        </div>
      </footer>
    </div>
  )
}
