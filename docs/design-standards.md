# Design standards

Single source of truth for product design trends and standards. Owned by the Product designer agent (see [AGENTS.md](../AGENTS.md)). Update this doc when standards or brand direction change (e.g. WCAG 2.2, new brand).

## Accessibility (WCAG 2.1 Level AA)

- **Contrast:** Text and UI meet minimum contrast ratios (4.5:1 normal text, 3:1 large text).
- **Touch targets:** Interactive elements at least 44×44px.
- **Focus:** Visible focus indicator (e.g. `--focus-ring`); no `outline: none` without a replacement.
- **Semantic HTML:** Use heading levels, landmarks, and elements correctly (`button` vs `a`, `nav`, `main`, etc.).
- **Images:** Meaningful `alt` text; decorative images use `alt=""`.
- **ARIA:** Use `aria-*` when semantics are not sufficient (e.g. live regions, expanded/collapsed).
- **Motion:** Respect `prefers-reduced-motion: reduce` for animations and transitions.

## Visual and UX principles

- **Hierarchy:** Clear heading and content structure; primary vs secondary actions obvious.
- **Spacing:** Use the design token scale (`var(--s-*)`, etc.); avoid magic numbers in components.
- **Typography:** Readable line length and line height; consistent scale from tokens.
- **Color:** Purposeful use; rely on tokens (`--text`, `--bg`, `--text-muted`, etc.).
- **Touch-friendly:** Adequate tap targets and responsive type/spacing on small screens.

## Updating this doc

When adopting new standards (e.g. WCAG 2.2) or refreshing trends, update this file and ensure [.cursor/rules/06_product_design.md](../.cursor/rules/06_product_design.md) stays aligned or references it.
