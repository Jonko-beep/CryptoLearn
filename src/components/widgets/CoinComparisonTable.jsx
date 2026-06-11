import { useMemo, useState } from 'react'
import { ArrowUpDown } from 'lucide-react'

/**
 * CoinComparisonTable — interactive, sortable & filterable comparison of major
 * chains across the architectural axes taught in the module. Self-contained
 * data; figures are nominal/representative for teaching.
 *
 * Props: highlight (a coin name to visually emphasize, e.g. when embedded in
 * the Bitcoin lesson).
 */

// Representative reference data (approximate — for comparison/learning only).
const COINS = [
  { name: 'Bitcoin',  consensus: 'PoW',        model: 'UTXO',    blockTime: 600,  tps: 7,     contracts: false, year: 2009 },
  { name: 'Ethereum', consensus: 'PoS',        model: 'Account', blockTime: 12,   tps: 30,    contracts: true,  year: 2015 },
  { name: 'Solana',   consensus: 'PoH + PoS',  model: 'Account', blockTime: 0.4,  tps: 3000,  contracts: true,  year: 2020 },
  { name: 'Litecoin', consensus: 'PoW (Scrypt)', model: 'UTXO',  blockTime: 150,  tps: 56,    contracts: false, year: 2011 },
  { name: 'Cardano',  consensus: 'PoS (Ouroboros)', model: 'eUTXO', blockTime: 20, tps: 250,  contracts: true,  year: 2017 },
  { name: 'Avalanche',consensus: 'BFT (Snowman)', model: 'Account', blockTime: 2, tps: 4500,  contracts: true,  year: 2020 },
  { name: 'Polkadot', consensus: 'NPoS',       model: 'Account', blockTime: 6,    tps: 1000,  contracts: true,  year: 2020 },
  { name: 'Cosmos',   consensus: 'BFT (Tendermint)', model: 'Account', blockTime: 6, tps: 10000, contracts: true, year: 2019 },
  { name: 'Monero',   consensus: 'PoW (RandomX)', model: 'UTXO',  blockTime: 120,  tps: 4,     contracts: false, year: 2014 },
  { name: 'XRP Ledger', consensus: 'Validator vote', model: 'Account', blockTime: 4, tps: 1500, contracts: false, year: 2012 },
]

const COLUMNS = [
  { key: 'name',      label: 'Chain',      align: 'left' },
  { key: 'consensus', label: 'Consensus',  align: 'left' },
  { key: 'model',     label: 'Data Model', align: 'left' },
  { key: 'blockTime', label: 'Block Time', align: 'right', render: (v) => (v < 1 ? `${v * 1000} ms` : `${v}s`) },
  { key: 'tps',       label: 'TPS',        align: 'right', render: (v) => v.toLocaleString() },
  { key: 'contracts', label: 'Smart Contracts', align: 'center', render: (v) => (v ? '✓' : '—') },
  { key: 'year',      label: 'Launched',   align: 'right' },
]

const FILTERS = [
  { label: 'All', test: () => true },
  { label: 'Smart-contract', test: (c) => c.contracts },
  { label: 'Payment-focused', test: (c) => !c.contracts },
]

export default function CoinComparisonTable({ highlight }) {
  const [sortKey, setSortKey] = useState('year')
  const [asc, setAsc] = useState(true)
  const [filter, setFilter] = useState(0)

  const rows = useMemo(() => {
    const filtered = COINS.filter(FILTERS[filter].test)
    const sorted = [...filtered].sort((a, b) => {
      const av = a[sortKey]
      const bv = b[sortKey]
      const cmp = typeof av === 'string' ? av.localeCompare(bv) : av - bv
      return asc ? cmp : -cmp
    })
    return sorted
  }, [sortKey, asc, filter])

  const toggleSort = (key) => {
    if (key === sortKey) setAsc((a) => !a)
    else {
      setSortKey(key)
      setAsc(true)
    }
  }

  return (
    <div className="rounded-xl border border-rim bg-surface-raised p-4">
      {/* Filters */}
      <div className="mb-3 flex flex-wrap gap-2">
        {FILTERS.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setFilter(i)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filter === i
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-rim text-ink-dim hover:bg-surface-hover'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-rim">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className={`cursor-pointer select-none whitespace-nowrap px-2.5 py-2 font-medium text-ink-dim hover:text-ink ${
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <ArrowUpDown size={11} className={sortKey === col.key ? 'text-accent' : 'opacity-40'} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const isHi = highlight && c.name === highlight
              return (
                <tr
                  key={c.name}
                  className={`border-b border-rim/50 transition ${
                    isHi ? 'bg-accent/10' : 'hover:bg-surface-hover'
                  }`}
                >
                  {COLUMNS.map((col) => (
                    <td
                      key={col.key}
                      className={`whitespace-nowrap px-2.5 py-2 ${
                        col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                      } ${col.key === 'name' ? `font-semibold ${isHi ? 'text-accent' : 'text-ink'}` : 'text-ink-dim'} ${
                        col.key === 'contracts' && c.contracts ? 'text-accent' : ''
                      }`}
                    >
                      {col.render ? col.render(c[col.key]) : c[col.key]}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-ink-dim">
        Click any column header to sort. Figures are approximate and for comparison only.
      </p>
    </div>
  )
}
