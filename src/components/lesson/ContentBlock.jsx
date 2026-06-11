import { renderInline } from '../../lib/markup'
import Callout from './Callout'
import WidgetEmbed from './WidgetEmbed'

/**
 * ContentBlock — the lesson renderer's switchboard. Maps a content block's
 * `type` to markup. This is the ONLY place that knows how each block type looks;
 * adding a new block type means adding a case here (see ARCHITECTURE.md).
 * It is fully subject-agnostic — it never references crypto, only block shapes.
 */
export default function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading': {
      const level = block.level === 3 ? 3 : 2
      const cls =
        level === 2
          ? 'mt-8 mb-3 text-xl font-semibold text-ink'
          : 'mt-6 mb-2 text-lg font-semibold text-ink'
      const Tag = `h${level}`
      return <Tag className={cls}>{renderInline(block.text)}</Tag>
    }

    case 'paragraph':
      return <p className="mb-4 leading-relaxed text-ink-dim">{renderInline(block.text)}</p>

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          className={`mb-4 space-y-1.5 pl-5 text-ink-dim ${
            block.ordered ? 'list-decimal' : 'list-disc'
          } marker:text-accent`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </Tag>
      )
    }

    case 'callout':
      return <Callout variant={block.variant} title={block.title} text={block.text} />

    case 'code':
      return (
        <pre className="my-4 overflow-x-auto rounded-lg border border-rim bg-surface p-4 font-mono text-sm text-ink">
          <code>{block.text}</code>
        </pre>
      )

    case 'widget':
      return <WidgetEmbed widget={block.widget} props={block.props} caption={block.caption} />

    default:
      return null
  }
}
