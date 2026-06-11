import CurriculumBrowser from '../components/curriculum/CurriculumBrowser'

export default function CurriculumPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink">Curriculum</h1>
        <p className="mt-2 text-ink-dim">
          Work through the tiers in order. Complete a lesson&apos;s quiz to unlock the next.
        </p>
      </header>
      <CurriculumBrowser />
    </div>
  )
}
