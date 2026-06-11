/**
 * WIDGET REGISTRY — the generic embed mechanism.
 *
 * Any lesson can embed an interactive component or diagram with a content block:
 *   { type: 'widget', widget: 'compounding', props: { rate: 5 } }
 *
 * The lesson renderer (components/lesson/WidgetEmbed.jsx) looks the `widget`
 * key up here and renders the matching component with the given props. Content
 * references widgets by string key only — it never imports React components —
 * so the content layer stays free of UI dependencies.
 *
 * To add a new widget: build the component, then add one line below.
 */
import CompoundingCalculator from './CompoundingCalculator'
import PerpsCalculator from './PerpsCalculator'
import HashDemo from './HashDemo'
import CoinComparisonTable from './CoinComparisonTable'
import BlockChainDiagram from './BlockChainDiagram'

export const WIDGETS = {
  compounding: CompoundingCalculator,
  perps: PerpsCalculator,
  'hash-demo': HashDemo,
  'coin-comparison': CoinComparisonTable,
  'blockchain-diagram': BlockChainDiagram,
}

/** Resolve a widget component by key (undefined if not registered). */
export function getWidget(key) {
  return WIDGETS[key]
}
