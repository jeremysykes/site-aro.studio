---
description: Product design trends and standards (accessibility, UX, visual) for UI and tokens
globs: "**/*.tsx,**/*.css,**/src/styles/**,**/src/components/**,**/src/pages/**,**/src/templates/**"
alwaysApply: false
---

# Product design trends and standards

When editing UI, tokens, or layout, follow these standards and align with current product-design best practices. See [docs/design-standards.md](docs/design-standards.md) for the full checklist when needed.

## Standards (mandatory)

- **Accessibility:** WCAG 2.1 Level AA. Ensure contrast, touch targets ≥44px, visible focus, semantic HTML, `alt` for images, `aria-*` where needed. Respect `prefers-reduced-motion` for animations.
- **UX:** Clear hierarchy, consistent spacing (use the token scale), predictable navigation, obvious CTAs, readable line length and line height.

## Trends / best practices (align where it fits the brand)

- Clarity over decoration; purposeful use of color and typography.
- Consistent spacing and typography scale (tokens); avoid magic numbers in components.
- Modern but timeless: subtle shadows, sufficient whitespace, legible type (e.g. system font stack or one primary typeface).
- Responsive and touch-friendly: tap targets, responsive type and spacing.

## Project fit

Use the existing stack: CSS Modules, tokens in [src/styles/tokens.css](src/styles/tokens.css), no Tailwind. New UI must use `var(--...)` and stay consistent with [.cursor/rules/02_styles_and_tokens.md](.cursor/rules/02_styles_and_tokens.md).
