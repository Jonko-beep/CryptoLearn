import { useCallback, useEffect, useState } from 'react'

/**
 * useLocalStorage — a useState that persists to localStorage under `key`.
 * JSON-serialized. Falls back to `initial` if nothing stored or parse fails.
 * Generic and subject-agnostic; used by useProgress to persist learner state.
 */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw !== null ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage full or unavailable (e.g. private mode) — fail silently in a draft.
    }
  }, [key, value])

  // Stable setter that also accepts an updater function, like useState.
  const set = useCallback((next) => {
    setValue((prev) => (typeof next === 'function' ? next(prev) : next))
  }, [])

  return [value, set]
}
