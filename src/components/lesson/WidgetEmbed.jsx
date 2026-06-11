import { getWidget } from '../widgets'

/**
 * WidgetEmbed — bridges content data to the widget registry. Given a widget key
 * and props from a lesson block, it renders the registered component. If the key
 * is unknown it shows a graceful placeholder instead of crashing — handy while
 * authoring content.
 */
export default function WidgetEmbed({ widget, props = {}, caption }) {
  const Component = getWidget(widget)

  if (!Component) {
    return (
      <div className="my-5 rounded-xl border border-dashed border-amber-500/50 bg-amber-500/5 p-4 text-sm text-amber-400">
        Unknown widget: <code>{widget}</code>. Register it in components/widgets/index.js.
      </div>
    )
  }

  return (
    <figure className="my-6">
      <Component {...props} />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-ink-dim">{caption}</figcaption>
      )}
    </figure>
  )
}
