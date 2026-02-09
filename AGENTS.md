# Agents

**Cursor must use this file.** When working in a domain, act as the corresponding agent and follow its Owns, Does not, Depends on, and Collaborates with.

When working in a domain, follow the section for that agent. Respect Owns / Does not; coordinate via Depends on and Collaborates with. See [.cursor/rules](.cursor/rules/) for project-wide standards (stack, structure, styles, testing, code style).

## Setup order

1. Scaffolding and architecture
2. Design system
3. Storybook integration
4. Types
5. i18n integration
6. Testing (unit/integration)
7. Assets
8. API / data fetching
9. Utils
10. Component building
11. Navigation interaction
12. Routing
13. Page building
14. Product designer

---

## 1. Scaffolding and architecture

- **Owns:** `vite.config.ts` (no `test` block; Testing adds that), `tsconfig.json`, `tsconfig.node.json`, `package.json`, `index.html`, `.gitignore`, `.eslintrc.cjs`, `.prettierrc`, `.prettierignore`, `src/main.tsx`, `src/App.tsx` (shell: `BrowserRouter`, `Routes` placeholder, theme `data-theme`/localStorage if used, `App.module.css` for root layout only), `src/index.css` (imports only; Design system owns tokens/ui). Top-level `src/` folders: `api`, `components`, `hooks`, `pages`, `styles`, `test`, `types`, `utils`; optional `i18n`, `locales`. `public/` and `public/assets/` (empty); Assets fills them.
- **Does not:** Design tokens, Storybook, i18n, Vitest `test` config, api, types, utils, mocks, components, pages, Route definitions, or nav markup. Does not add `mocks/` (Testing does).
- **Depends on:** none (runs first).
- **Collaborates with:** Design system, Storybook, Testing, Assets.

## 2. Design system

- **Owns:** `src/styles/tokens.css`, `src/styles/ui.css`; the **content** of `src/index.css` (imports of tokens + ui). Conventions: token names, `html[data-theme]`, breakpoints, components use `var(--...)` only.
- **Does not:** `public/` or images, Storybook, i18n, components, `App.module.css` (Scaffolding), or `vite.config` `test` block.
- **Depends on:** Scaffolding.
- **Collaborates with:** Storybook, Component building, Assets, Product designer (guidelines for tokens and base styles).

## 3. Storybook integration

- **Owns:** `.storybook/main.ts`, `.storybook/preview.tsx`, `.storybook/vitest.setup.ts`. Storybook-related `package.json` scripts. Story **pattern**: `Meta`, `StoryObj`, `tags: ['autodocs']`, `title: 'Components/...'` or `Pages/...`, `Default` + variants; preview imports `tokens.css`, `ui.css`, `index.css`, i18n; decorators for theme/language; a11y addon.
- **Does not:** `tokens.css`/`ui.css`, component logic, Vitest `test` block or `src/test/setup.ts`, `mocks/`. Can add example `*.stories.tsx`; ongoing stories are Component/Page.
- **Depends on:** Scaffolding, Design system.
- **Collaborates with:** Design system, Component/Page (story content), Testing.

## 4. i18n integration

- **Owns:** `src/i18n/config.ts`, `src/locales/en/`, `src/locales/<locale>/common.ts`, i18n import in `main.tsx`. Key structure (`nav.*`, `hero.*`, `productSuite.*`, etc.).
- **Does not:** Components, tokens, Storybook, `src/test/setup` (Testing adds i18n there if needed), api, types, utils.
- **Depends on:** Scaffolding.
- **Collaborates with:** Component, Page (they use `t()`; i18n adds keys when new strings appear), Testing (i18n in test setup).

## 5. Types

- **Owns:** `src/types/index.ts` and any `src/types/**`. Shared DTOs and domain types only.
- **Does not:** api, utils, components, pages, or mocks implementation; only type definitions.
- **Depends on:** Scaffolding (`src/types/`).
- **Collaborates with:** API, Utils, Testing (mocks), Component, Page (consumers).

## 6. API / data fetching

- **Owns:** `src/api/**`. Fetch wrapper, base URL, headers, `normalizeError`, `handleResponse`, `fetchData<T>`, AbortController handling. For site-aro.studio: scaffold `src/api/` only for now; implement client when an API exists.
- **Does not:** `src/types` (uses; Types owns), `mocks/`, components, pages.
- **Depends on:** Scaffolding, Types (for `T` and DTOs).
- **Collaborates with:** Types, Utils, Page (callers).

## 7. Utils

- **Owns:** `src/utils/**`. Pure helpers (e.g. formatters, predicates). For now: folder only; add files when needed.
- **Does not:** api, types (uses; Types owns), components, pages, mocks.
- **Depends on:** Scaffolding, Types (if helpers use shared types).
- **Collaborates with:** Types, API, Component, Page.

## 8. Testing (unit/integration)

- **Owns:** `src/test/setup.ts` (`@testing-library/jest-dom`, i18n import if used), `mocks/`, and the **`test` section** in `vite.config.ts` (globals, jsdom, `setupFiles`, include/exclude). Pattern for `*.test.tsx`: `describe`, `it`, `render`, `screen`, `expect(...).toBeInTheDocument()`. For now: setup, `vite.config` `test` block, `mocks/` (empty); no `*.test.tsx` or `mocks/data.ts` yet. Component/Page agents add tests later.
- **Does not:** `.storybook/` or `*.stories.tsx`, `tokens.css`/`ui.css`, component/page implementation. Does not write the tests for a component; Component/Page agents do.
- **Depends on:** Scaffolding, Types (mocks import from `src/types` when added), i18n (if setup imports i18n).
- **Collaborates with:** Types, i18n, Storybook, Component/Page (they author `*.test.tsx`).

## 9. Assets

- **Owns:** `public/**` (including `public/assets/`). Favicon, logo, product icons, other static images. `index.html` `link rel="icon"` **target**. For now: placeholder only; `public/` and `public/assets/` exist; no real assets yet.
- **Does not:** `src/styles`, component logic, `wireframes/` (reference only; not edited). Does not change `tokens.css` for image paths if those are in Design system's remit.
- **Depends on:** Scaffolding (`public/`).
- **Collaborates with:** Design system (favicon path in HTML), Component building (`img src` paths), Scaffolding (where `link rel="icon"` is).

## 10. Component building

- **Owns:** `src/components/**` **except** `Header`, `Nav`, `MobileMenu` (or equivalent). `Hero`, `ProductSuite`, `ProductCard`, `Button`, `Card`, etc. Each: `ComponentName.tsx`, `ComponentName.module.css`, `ComponentName.test.tsx`, `ComponentName.stories.tsx`, `index.ts`. `src/components/index.ts` barrel. Uses `var(--...)` only; does not change `tokens.css`/`ui.css`.
- **Does not:** `src/types`, `src/api`, `src/utils`, `tokens`/`ui`, routes, pages, `Header`/`Nav`/`MobileMenu` behavior, i18n config (only `t()`; i18n adds keys).
- **Depends on:** Scaffolding, Design system; optionally i18n, Types; Testing/Storybook for patterns.
- **Collaborates with:** i18n, Page, Navigation (e.g. shared `Button`), Assets (img paths), Product designer (standards for components).

## 11. Navigation interaction

- **Owns:** `src/components/Header/**`, `Nav/**`, `MobileMenu/**`, `NavLink/**` (if split). Behavior: `to`/`href`, mobile open/close, active state, focus, keyboard, `aria-*`. Any `src/hooks/useNav*.ts`.
- **Does not:** `Route` definitions, Hero/ProductSuite/ProductCard, tokens definitions, i18n config.
- **Depends on:** Scaffolding, Design system, Routing (so `to` targets exist), optionally i18n.
- **Collaborates with:** Routing, Component (shared primitives), Page (Header composed in layout).

## 12. Routing

- **Owns:** `<Routes>`/`<Route>` in `App.tsx` or `src/routes.tsx`. Paths: `/`, `/contact`, `/products/:id` or `/products/token-editor`, etc., and `path="*"` → `NotFound`.
- **Does not:** Page/component implementation, `to`/`href` inside Header (Navigation owns those).
- **Depends on:** Scaffolding (App or routes module), Page building (pages to mount). Can start with stub `element`s.
- **Collaborates with:** Page building, Navigation (paths must match `to`/`href`).

## 13. Page building

- **Owns:** `src/pages/**` and `src/pages/index.ts`. Composes `Header`, `Hero`, `ProductSuite`, etc. Page-level `*.test.tsx`, `*.stories.tsx`.
- **Does not:** `Route` definitions, `src/types`, design tokens, i18n config, `Header`/nav behavior implementation.
- **Depends on:** Scaffolding, Design system, Component building, Navigation (for Header), optionally i18n, Types.
- **Collaborates with:** Routing (provides `element` for each route), Component, i18n, Product designer (layout and composition standards).

---

## 14. Product designer

- **Owns:** Design guidelines and standards: `.cursor/rules/06_product_design.md` (or equivalent); optional `docs/design-standards.md`. Authority on trends, accessibility (e.g. WCAG 2.1 AA), and UX standards for UI, tokens, and layout. Does not implement code.
- **Does not:** `tokens.css`/`ui.css` (Design system), components or pages (Component building, Page building), routes, Storybook, Assets, API, Types, Utils, Testing.
- **Depends on:** none.
- **Collaborates with:** Design system (tokens align with guidelines), Component building (components follow standards), Page building (layouts follow patterns).
