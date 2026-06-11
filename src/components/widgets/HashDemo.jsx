import { useEffect, useState, useCallback } from 'react'
import { RefreshCw, Check, X } from 'lucide-react'

/**
 * HashDemo — live SHA-256 via the browser's Web Crypto API (no library).
 *
 * Two modes, selected by the `mode` prop from the lesson data:
 *   • 'single' (default): type text, watch its hash update every keystroke.
 *   • 'chain': a mini chain of blocks. Editing any block's data recomputes its
 *     hash, which breaks the prev-hash link of every block after it — making
 *     immutability visceral. "Re-mine all" does the work to repair the chain.
 *
 * Demonstrates the generic widget-embed contract: a plain component that takes
 * props from lesson content. See components/widgets/index.js for registration.
 */

const DIFFICULTY = '00' // a "valid" mined hash must start with this prefix

/** Hash a string to a hex SHA-256 digest using Web Crypto. */
async function sha256(text) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/* ------------------------------- single mode ------------------------------- */

function SingleHash() {
  const [text, setText] = useState('Satoshi')
  const [hash, setHash] = useState('')

  useEffect(() => {
    let active = true
    sha256(text).then((h) => active && setHash(h))
    return () => {
      active = false
    }
  }, [text])

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-ink-dim">Input text</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type anything…"
        className="w-full rounded-lg border border-rim bg-surface px-4 py-2.5 text-ink outline-none focus:border-accent"
      />
      <label className="block text-sm font-medium text-ink-dim">SHA-256 hash</label>
      <code className="block break-all rounded-lg border border-rim bg-surface px-4 py-3 font-mono text-sm text-accent">
        {hash}
      </code>
      <p className="text-xs text-ink-dim">
        Try adding a single character — the entire 64-character fingerprint changes (the avalanche effect).
      </p>
    </div>
  )
}

/* -------------------------------- chain mode ------------------------------- */

const GENESIS_PREV = '0'.repeat(8)

function ChainDemo() {
  // Each block holds only editable inputs; hashes are derived.
  const [blocks, setBlocks] = useState([
    { data: 'Alice → Bob: 5', nonce: 0 },
    { data: 'Bob → Carol: 2', nonce: 0 },
    { data: 'Carol → Dave: 1', nonce: 0 },
  ])
  const [hashes, setHashes] = useState([])
  const [mining, setMining] = useState(false)

  const blockString = (i, prevHash, b) => `${i}|${prevHash}|${b.data}|${b.nonce}`

  // Recompute the whole chain's hashes whenever inputs change.
  useEffect(() => {
    let active = true
    ;(async () => {
      const out = []
      let prev = GENESIS_PREV
      for (let i = 0; i < blocks.length; i++) {
        const h = await sha256(blockString(i, prev, blocks[i]))
        out.push({ hash: h, prev })
        prev = h
      }
      if (active) setHashes(out)
    })()
    return () => {
      active = false
    }
  }, [blocks])

  // "Mine" each block in sequence: find a nonce whose hash meets difficulty,
  // threading each freshly mined hash into the next block's prev-hash.
  const remineAll = useCallback(async () => {
    setMining(true)
    const next = blocks.map((b) => ({ ...b }))
    let prev = GENESIS_PREV
    for (let i = 0; i < next.length; i++) {
      let nonce = 0
      // Search for a valid nonce. Sequential awaits are intentional here — each
      // block must be mined against the previous block's freshly mined hash.
      while (!(await sha256(blockString(i, prev, { ...next[i], nonce }))).startsWith(DIFFICULTY)) {
        nonce++
      }
      next[i].nonce = nonce
      prev = await sha256(blockString(i, prev, next[i]))
    }
    setBlocks(next)
    setMining(false)
  }, [blocks])

  const updateData = (i, data) =>
    setBlocks((bs) => bs.map((b, j) => (j === i ? { ...b, data } : b)))

  const anyInvalid = hashes.some((h) => !h.hash.startsWith(DIFFICULTY))

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-ink-dim">
          A valid block&apos;s hash must start with <code className="text-accent">{DIFFICULTY}</code>. Edit any block&apos;s data to break the chain.
        </p>
        <button
          onClick={remineAll}
          disabled={mining}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-surface transition hover:bg-accent-dim disabled:opacity-50"
        >
          <RefreshCw size={14} className={mining ? 'animate-spin' : ''} />
          {mining ? 'Mining…' : 'Re-mine all'}
        </button>
      </div>

      <div className="space-y-2">
        {blocks.map((b, i) => {
          const h = hashes[i]
          const valid = h?.hash.startsWith(DIFFICULTY)
          return (
            <div
              key={i}
              className={`rounded-lg border p-3 transition ${
                valid ? 'border-rim bg-surface' : 'border-red-500/60 bg-red-500/5'
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-dim">Block #{i}</span>
                <span
                  className={`flex items-center gap-1 text-xs font-medium ${
                    valid ? 'text-accent' : 'text-red-400'
                  }`}
                >
                  {valid ? <Check size={13} /> : <X size={13} />}
                  {valid ? 'Valid' : 'Invalid'}
                </span>
              </div>
              <input
                value={b.data}
                onChange={(e) => updateData(i, e.target.value)}
                className="mb-2 w-full rounded border border-rim bg-surface-raised px-2.5 py-1.5 text-sm text-ink outline-none focus:border-accent"
              />
              <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-0.5 font-mono text-[11px] leading-relaxed">
                <span className="text-ink-dim">prev:</span>
                <span className="truncate text-ink-dim">{h?.prev}</span>
                <span className="text-ink-dim">hash:</span>
                <span className={`truncate ${valid ? 'text-accent' : 'text-red-400'}`}>{h?.hash}</span>
                <span className="text-ink-dim">nonce:</span>
                <span className="text-ink-dim">{b.nonce}</span>
              </div>
            </div>
          )
        })}
      </div>

      {anyInvalid && (
        <p className="text-xs text-red-400">
          The chain is broken — one or more blocks no longer meet the difficulty rule, and every block after the edit is invalid. Press <strong>Re-mine all</strong> to redo the work.
        </p>
      )}
    </div>
  )
}

export default function HashDemo({ mode = 'single' }) {
  return (
    <div className="rounded-xl border border-rim bg-surface-raised p-4">
      {mode === 'chain' ? <ChainDemo /> : <SingleHash />}
    </div>
  )
}
