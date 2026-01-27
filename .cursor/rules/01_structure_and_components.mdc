---
description: Component and folder structure
globs: "**/src/**/*.ts,**/src/**/*.tsx"
alwaysApply: false
---

# Structure and Components

**Layout:** `src/{api,components,i18n,locales,pages,styles,test,types,utils}`, `App.tsx`, `main.tsx`, `index.css`. Add `i18n/` and `locales/` when i18n is used.

**Component folder:** One per component: `ComponentName/` with `ComponentName.tsx`, `ComponentName.module.css`, `ComponentName.test.tsx`, `ComponentName.stories.tsx`, `index.ts`. `index.ts`: `export { default } from './ComponentName'`.

**Component:** Function named `ComponentName`, default export. Props: `interface ComponentNameProps { ... }`; extend `ButtonHTMLAttributes` etc. when appropriate. Merge `className` as `` `${styles.ComponentName} ${className || ''}`.trim() ``.

**Barrel exports:** `src/components/index.ts` and `src/pages/index.ts` with grouped, commented sections (e.g. `// * UI`, `// * Feedback`). Use `export { default as X } from './X'`.
