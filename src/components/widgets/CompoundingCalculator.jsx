import { useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

/**
 * CompoundingCalculator — growth of a principal under periodic compounding.
 *
 * Chosen as a flagship widget because it transfers verbatim to a finance app:
 * nothing here is crypto-specific. Labels are overridable via props so a lesson
 * can reframe it (e.g. "Amount staked" / "Reward rate") without code changes.
 *
 * Props (all optional, with sensible defaults):
 *   principal, rate (%/yr), years, frequency (compounds per year),
 *   principalLabel, rateLabel.
 */

const FREQUENCIES = [
  { label: 'Annually', value: 1 },
  { label: 'Quarterly', value: 4 },
  { label: 'Monthly', value: 12 },
  { label: 'Daily', value: 365 },
]

const fmt = (n) =>
  n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export default function CompoundingCalculator({
  principal = 1000,
  rate = 8,
  years = 10,
  frequency = 12,
  principalLabel = 'Starting amount',
  rateLabel = 'Annual rate (%)',
}) {
  const [p, setP] = useState(principal)
  const [r, setR] = useState(rate)
  const [y, setY] = useState(years)
  const [f, setF] = useState(frequency)

  // Build one data point per year: A = P(1 + r/n)^(n·t).
  // Also track simple (non-compounded) growth as a baseline comparison.
  const { data, final, simpleFinal } = useMemo(() => {
    const rateDec = r / 100
    const points = []
    for (let t = 0; t <= y; t++) {
      const compound = p * Math.pow(1 + rateDec / f, f * t)
      const simple = p * (1 + rateDec * t)
      points.push({ year: t, compound: Math.round(compound), simple: Math.round(simple) })
    }
    const last = points[points.length - 1]
    return { data: points, final: last.compound, simpleFinal: last.simple }
  }, [p, r, y, f])

  const interestEarned = final - p

  return (
    <div className="rounded-xl border border-rim bg-surface-raised p-4">
      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Field label={principalLabel}>
          <input
            type="number"
            value={p}
            min={0}
            onChange={(e) => setP(Math.max(0, +e.target.value))}
            className="num-input"
          />
        </Field>
        <Field label={rateLabel}>
          <input
            type="number"
            value={r}
            min={0}
            step={0.5}
            onChange={(e) => setR(Math.max(0, +e.target.value))}
            className="num-input"
          />
        </Field>
        <Field label="Years">
          <input
            type="number"
            value={y}
            min={1}
            max={50}
            onChange={(e) => setY(Math.min(50, Math.max(1, +e.target.value)))}
            className="num-input"
          />
        </Field>
        <Field label="Compounding">
          <select value={f} onChange={(e) => setF(+e.target.value)} className="num-input">
            {FREQUENCIES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Result summary */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <Stat label="Final balance" value={fmt(final)} accent />
        <Stat label="Interest earned" value={fmt(interestEarned)} />
        <Stat label="vs. simple interest" value={`+${fmt(final - simpleFinal)}`} />
      </div>

      {/* Chart */}
      <div className="mt-4 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
            <CartesianGrid stroke="var(--rim)" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              stroke="var(--ink-dim)"
              tick={{ fontSize: 11 }}
              tickFormatter={(t) => `Y${t}`}
            />
            <YAxis
              stroke="var(--ink-dim)"
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => (v >= 1000 ? `${Math.round(v / 1000)}k` : v)}
              width={36}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--surface)',
                border: '1px solid var(--rim)',
                borderRadius: 8,
                color: 'var(--ink)',
              }}
              formatter={(v, name) => [fmt(v), name === 'compound' ? 'Compound' : 'Simple']}
              labelFormatter={(l) => `Year ${l}`}
            />
            <Line
              type="monotone"
              dataKey="simple"
              stroke="var(--ink-dim)"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="compound"
              stroke="var(--accent)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-center text-xs text-ink-dim">
        Solid = compounding · dashed = simple interest. The gap is the power of compounding.
      </p>

      {/* Local utility styles for the number inputs */}
      <style>{`
        .num-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--rim);
          background: var(--surface);
          padding: 0.4rem 0.6rem;
          color: var(--ink);
          outline: none;
          font-size: 0.875rem;
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

function Stat({ label, value, accent }) {
  return (
    <div className="rounded-lg border border-rim bg-surface px-2 py-2.5">
      <div className={`text-base font-semibold ${accent ? 'text-accent' : 'text-ink'}`}>{value}</div>
      <div className="mt-0.5 text-[11px] text-ink-dim">{label}</div>
    </div>
  )
}
