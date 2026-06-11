/**
 * CONTENT PUBLIC API
 * ------------------
 * The single import surface the UI uses to read content. Components never import
 * individual lesson files or the registry directly — they go through here. That
 * keeps the UI fully decoupled from how content is organized.
 */
import { CURRICULUM } from './curriculum'
import { LESSON_REGISTRY } from './lessons'

export { CURRICULUM }
export { GLOSSARY, getTerm } from './glossary'

/**
 * Resolve a curriculum entry into a complete lesson object.
 * Full lessons come from the registry; stubs carry their own metadata.
 */
function resolve(entry) {
  const full = LESSON_REGISTRY[entry.id]
  if (full) return full
  return entry // a stub: { id, tier, title, summary, stub: true }
}

/**
 * Flat, ordered list of every lesson (full + stub) in curriculum order.
 * Each item is annotated with its tier and owning module for convenience.
 */
export const ORDERED_LESSONS = CURRICULUM.flatMap((tier) =>
  tier.modules.flatMap((module) =>
    module.lessons.map((entry) => {
      const lesson = resolve(entry)
      return {
        ...lesson,
        tier: lesson.tier ?? tier.tier,
        moduleId: module.id,
        moduleName: module.name,
      }
    }),
  ),
)

/** id → annotated lesson, for O(1) lookup. */
const BY_ID = Object.fromEntries(ORDERED_LESSONS.map((l) => [l.id, l]))

/** The ids of full (completable) lessons, in order — used for sequential unlocking. */
export const FULL_LESSON_ORDER = ORDERED_LESSONS.filter((l) => !l.stub).map((l) => l.id)

/** Look up a single lesson by id (returns undefined if missing). */
export function getLesson(id) {
  return BY_ID[id]
}

/** The next full lesson after `id` in course order, or null. */
export function getNextLessonId(id) {
  const i = FULL_LESSON_ORDER.indexOf(id)
  if (i === -1 || i === FULL_LESSON_ORDER.length - 1) return null
  return FULL_LESSON_ORDER[i + 1]
}

/** Total number of full (completable) lessons — denominator for overall progress. */
export const TOTAL_FULL_LESSONS = FULL_LESSON_ORDER.length
