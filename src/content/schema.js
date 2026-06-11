/**
 * CONTENT SCHEMA (documentation-only module)
 * ------------------------------------------
 * This file documents the shape of every content object via JSDoc typedefs.
 * Nothing here renders — it exists so the data layer is self-describing and
 * so editors get autocomplete. The UI layer never imports subject-specific
 * data; it only knows about these generic shapes. Swap the content, keep the UI.
 *
 * A LESSON is an ordered list of content BLOCKS plus an optional QUIZ.
 * The renderer (components/lesson/ContentBlock.jsx) switches on `block.type`,
 * so adding a new kind of content = add a block type + a case. See ARCHITECTURE.md.
 */

/**
 * @typedef {Object} Lesson
 * @property {string}   id        Unique, URL-safe id (used in routes & progress).
 * @property {number}   tier      1=Beginner, 2=Intermediate, 3=Advanced.
 * @property {string}   title     Display title.
 * @property {string}   summary   One-line description (cards, dashboard).
 * @property {number}   [minutes] Estimated read time.
 * @property {Block[]}  [blocks]  Ordered content blocks (omit for stubs).
 * @property {string[]} [takeaways] Bullet points for the "Key Takeaways" box.
 * @property {Quiz}     [quiz]    Optional end-of-lesson quiz.
 * @property {boolean}  [stub]    True = roadmap placeholder, not yet written.
 */

/**
 * A Block is one renderable unit of lesson content. `type` selects the renderer.
 * @typedef {Object} Block
 * @property {'heading'|'paragraph'|'callout'|'list'|'code'|'widget'} type
 * @property {string}  [text]     Body text. Supports inline markup:
 *                                **bold**  and  [[term-id|label]] key-term links.
 * @property {number}  [level]    For 'heading': 2 or 3.
 * @property {'info'|'tip'|'warning'} [variant] For 'callout'.
 * @property {string}  [title]    For 'callout'.
 * @property {boolean} [ordered]  For 'list'.
 * @property {string[]}[items]    For 'list'.
 * @property {string}  [widget]   For 'widget': key into the widget registry
 *                                (components/widgets/index.js). This is the
 *                                generic embed mechanism — diagrams AND
 *                                interactive simulators are both widgets.
 * @property {Object}  [props]    For 'widget': props passed to the widget.
 * @property {string}  [caption]  For 'widget': caption shown beneath it.
 */

/**
 * @typedef {Object} Quiz
 * @property {number}     passThreshold  Fraction needed to pass (e.g. 0.7).
 * @property {Question[]} questions
 */

/**
 * A Question. `type` selects both the input component and the grader
 * (see components/quiz/questionTypes.jsx). Add a new type there to extend the engine.
 * @typedef {Object} Question
 * @property {string} id
 * @property {'mc'|'tf'|'fib'} type   multiple-choice | true-false | fill-in-blank
 * @property {string} prompt
 * @property {string} [explanation]   Shown after answering.
 * --- type 'mc' ---
 * @property {string[]} [options]
 * @property {number}   [answer]      Index of correct option.
 * --- type 'tf' ---
 * @property {boolean}  [answer]
 * --- type 'fib' ---
 * @property {string[]} [accept]      Accepted answers (case-insensitive).
 */

/**
 * @typedef {Object} GlossaryTerm
 * @property {string} id          Stable id; referenced by [[id]] inline markup.
 * @property {string} term        Display term.
 * @property {string} definition  Plain-language definition.
 * @property {string} [tier]      Optional difficulty grouping.
 */

// Intentionally no runtime exports — this module is types/documentation only.
export {}
