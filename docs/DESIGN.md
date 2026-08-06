# Design system and responsive behavior

## Composition

At widths of 768 pixels and above, the page uses two equal columns: introduction
on the left and portrait on the right. Below 768 pixels, content is stacked with
the portrait presented visually first as a circular avatar, followed by the
introduction and social links in one centered card. The document order remains
introduction-first so the primary content leads for assistive technology.

On mobile, the portrait uses a tight head-and-shoulders crop inside a 120 pixel
circular frame. The card is content-height rather than viewport-height and uses
fluid outer spacing so it remains compact at both 320 and 390 pixels.

The page must not scroll horizontally at 320, 390, 768, or 1280 pixels. Mobile
content uses fluid type and spacing rather than a separate condensed interface.

## Visual tokens

Global color and font tokens live in `src/index.css`. Components consume those
tokens through CSS Modules. System fonts are preferred so rendering does not
depend on a third-party font host.

## Interaction

- Social profiles are icon links with at least a 56 by 56 pixel interactive
  area.
- Hover treatment may supplement, but never replace, a visible `:focus-visible`
  outline.
- Motion is removed when `prefers-reduced-motion: reduce` is active.
- Links opening a new tab retain `noopener` and `noreferrer` protections.

## Images

The portrait uses 720 and 1448 pixel AVIF and WebP sources with the original PNG
as fallback. Its HTML dimensions preserve the 1448:1086 aspect ratio before the
asset loads. Social icons are decorative inside already-named links.

## Accessibility baseline

- Exactly one descriptive level-one heading
- Unique names for every social link
- Descriptive portrait alternative text
- Semantic list structure for related social profiles
- Keyboard-visible focus and sufficient target size
- No automatically detectable axe violations in the tested page state
