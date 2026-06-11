import { useMemo, useState } from 'react'
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'

/**
 * PerpsCalculator — perpetual futures position analyzer (advanced showcase).
 *
 * From four inputs (entry, size, leverage, side) it derives the figures that
 * define any perp trade: notional, margin, liquidation price, P&L / ROE at a
 * target exit, and an illustrative funding cost. Math is simplified (isolated
 * margin, maintenance margin ≈ 0, fees ignored) for teaching clarity.
 *
 * Props: entry, size, leverage, side ('long'|'short'), fundingRate (% per 8h).
 */

const usd = (n) =>
  n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
const pct = (n) => `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`

export default function PerpsCalculator({
  entry = 30000,
  size = 1,
  leverage = 10,
  side = 'long',
  fundingRate = 0.01,
}) {
  const [e, setE] = useState(entry)
  const [sz, setSz] = useState(size)
  const [lev, setLev] = useState(leverage)
  const [sd, setSd] = useState(side)
  const [exit, setExit] = useState(Math.round(entry * 1.1))
  const [funding, setFunding] = useState(fundingRate)

  const m = useMemo(() => {
    const isLong = sd === 'long'
    const notional = e * sz
    const margin = notional / lev

    // Liquidation: price at which loss == margin (maintenance ≈ 0).
    // Long: entry·(1 − 1/lev); Short: entry·(1 + 1/lev).
    const liq = isLong ? e * (1 - 1 / lev) : e * (1 + 1 / lev)

    // P&L at the target exit price.
    const pnl = (isLong ? exit - e : e - exit) * sz
    const roe = margin ? (pnl / margin) * 100 : 0

    // Funding: one payment = rate · notional, charged each interval (8h → 3/day).
    // A long pays when funding is positive; we show the daily magnitude.
    const fundingPerDay = (funding / 100) * notional * 3

    return { isLong, notional, margin, liq, pnl, roe, fundingPerDay }
  }, [e, sz, lev, sd, exit, funding])

  return (
    <div className="rounded-xl border border-rim bg-surface-raised p-4">
      {/* Side toggle */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        {['long', 'short'].map((s) => {
          const active = sd === s
          const isLong = s === 'long'
          return (
            <button
              key={s}
              onClick={() => setSd(s)}
              className={`flex items-center justify-center gap-1.5 rounded-lg border py-2 text-sm font-semibold capitalize transition ${
                active
                  ? isLong
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400'
                    : 'border-red-500 bg-red-500/15 text-red-400'
                  : 'border-rim text-ink-dim hover:bg-surface-hover'
              }`}
            >
              {isLong ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
              {s}
            </button>
          )
        })}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label="Entry price ($)">
          <input type="number" value={e} min={0} onChange={(ev) => setE(Math.max(0, +ev.target.value))} className="num-input" />
        </Field>
        <Field label="Size (units)">
          <input type="number" value={sz} min={0} step={0.1} onChange={(ev) => setSz(Math.max(0, +ev.target.value))} className="num-input" />
        </Field>
        <Field label={`Leverage (${lev}×)`}>
          <input type="range" min={1} max={100} value={lev} onChange={(ev) => setLev(+ev.target.value)} className="w-full accent-[var(--accent)]" />
        </Field>
        <Field label="Funding (%/8h)">
          <input type="number" value={funding} step={0.01} onChange={(ev) => setFunding(+ev.target.value)} className="num-input" />
        </Field>
      </div>

      {/* Key derived stats */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="Notional" value={usd(m.notional)} />
        <Stat label="Margin required" value={usd(m.margin)} />
        <Stat label="Liquidation price" value={usd(m.liq)} danger />
      </div>

      {/* Exit price → P&L */}
      <div className="mt-4 rounded-lg border border-rim bg-surface p-3">
        <Field label={`Target exit price ($)`}>
          <input
            type="number"
            value={exit}
            min={0}
            onChange={(ev) => setExit(Math.max(0, +ev.target.value))}
            className="num-input"
          />
        </Field>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-surface-raised px-3 py-2.5">
            <div className={`text-lg font-bold ${m.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {m.pnl >= 0 ? '+' : ''}
              {usd(m.pnl)}
            </div>
            <div className="text-[11px] text-ink-dim">P&amp;L at exit</div>
          </div>
          <div className="rounded-lg bg-surface-raised px-3 py-2.5">
            <div className={`text-lg font-bold ${m.roe >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {pct(m.roe)}
            </div>
            <div className="text-[11px] text-ink-dim">Return on margin (ROE)</div>
          </div>
        </div>
      </div>

      {/* Funding note */}
      <div className="mt-3 flex items-start gap-2 rounded-lg border border-rim bg-surface px-3 py-2.5 text-xs text-ink-dim">
        <AlertTriangle size={14} className="mt-0.5 shrink-0 text-accent" />
        <span>
          At {funding}%/8h funding, a {m.isLong ? 'long' : 'short'} this size {m.isLong ? 'pays' : 'receives'} about{' '}
          <strong className="text-ink">{usd(Math.abs(m.fundingPerDay))}</strong> per day when funding is positive — a carrying cost independent of price.
        </span>
      </div>

      <style>{`
        .num-input {
          width: 100%; border-radius: 0.5rem; border: 1px solid var(--rim);
          background: var(--surface); padding: 0.4rem 0.6rem; color: var(--ink);
          outline: none; font-size: 0.875rem;
        }
        .num-input:focus { border-color: var(--accent); }
      `}</style>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-dim">{label}</span>
      {children}
    </label>
  )
}

function Stat({ label, value, danger }) {
  return (
    <div className="rounded-lg border border-rim bg-surface px-3 py-2.5 text-center">
      <div className={`text-base font-semibold ${danger ? 'text-red-400' : 'text-ink'}`}>{value}</div>
      <div className="mt-0.5 text-[11px] text-ink-dim">{label}</div>
    </div>
  )
}
