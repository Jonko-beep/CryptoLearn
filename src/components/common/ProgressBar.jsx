/**
 * ProgressBar — a thin accent-filled bar. Reusable across dashboard, modules,
 * and the nav. `percent` is 0–100.
 */
export default function ProgressBar({ percent = 0, className = '' }) {
  const clamped = Math.max(0, Math.min(100, percent))
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-surface ${className}`}>
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
