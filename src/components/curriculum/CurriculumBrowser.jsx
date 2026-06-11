import ModuleCard from './ModuleCard'
import { TierBadge } from '../common/Badge'
import { CURRICULUM } from '../../content'

/**
 * CurriculumBrowser — renders the whole roadmap: tiers → modules → lessons.
 * Reads structure straight from the content layer; knows nothing about crypto.
 */
export default function CurriculumBrowser() {
  return (
    <div className="space-y-12">
      {CURRICULUM.map((tier) => (
        <section key={tier.tier}>
          <div className="mb-5 flex items-center gap-3">
            <TierBadge tier={tier.tier} />
            <h2 className="text-2xl font-bold tracking-tight text-ink">{tier.name}</h2>
          </div>
          <p className="mb-6 max-w-2xl text-ink-dim">{tier.blurb}</p>
          <div className="grid gap-5 lg:grid-cols-2">
            {tier.modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
