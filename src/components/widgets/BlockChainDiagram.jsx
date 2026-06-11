/**
 * BlockChainDiagram — a static, presentational SVG showing how each block
 * carries the previous block's hash, forming a chain. Demonstrates that the
 * widget-embed mechanism handles plain diagrams as well as interactive tools —
 * both are just registered components.
 */
export default function BlockChainDiagram() {
  const blocks = [
    { n: 0, label: 'Genesis', prev: '0000', hash: 'a1f9' },
    { n: 1, label: 'Block 1', prev: 'a1f9', hash: '7c2e' },
    { n: 2, label: 'Block 2', prev: '7c2e', hash: 'd4b8' },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-rim bg-surface-raised p-4">
      <svg viewBox="0 0 620 170" className="mx-auto w-full max-w-[620px]" role="img" aria-label="Three blocks linked by their hashes">
        {blocks.map((b, i) => {
          const x = i * 210 + 10
          return (
            <g key={b.n}>
              {/* Block card */}
              <rect x={x} y={20} width={180} height={120} rx={10} fill="var(--surface)" stroke="var(--rim)" strokeWidth="1.5" />
              <text x={x + 14} y={44} fill="var(--ink)" fontSize="13" fontWeight="600">{b.label}</text>

              <text x={x + 14} y={72} fill="var(--ink-dim)" fontSize="11">prev hash</text>
              <text x={x + 14} y={88} fill="var(--ink-dim)" fontSize="12" fontFamily="monospace">{b.prev}…</text>

              <text x={x + 14} y={112} fill="var(--ink-dim)" fontSize="11">this hash</text>
              <text x={x + 14} y={128} fill="var(--accent)" fontSize="12" fontFamily="monospace" fontWeight="600">{b.hash}…</text>

              {/* Arrow linking this block's hash into the next block's prev */}
              {i < blocks.length - 1 && (
                <g>
                  <line
                    x1={x + 180}
                    y1={80}
                    x2={x + 210}
                    y2={80}
                    stroke="var(--accent)"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                </g>
              )}
            </g>
          )
        })}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" />
          </marker>
        </defs>
      </svg>
      <p className="mt-1 text-center text-xs text-ink-dim">
        Each block&apos;s <span className="text-accent">hash</span> becomes the next block&apos;s <em>prev hash</em> — change one and the links downstream break.
      </p>
    </div>
  )
}
