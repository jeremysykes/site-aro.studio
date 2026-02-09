---
description: Project context and stack for Aro Studio SPA
alwaysApply: true
---

# Aro Studio SPA – Project Context

This is the **Aro Studio** personal-brand SPA. Design source: [homepage-mockup-2.png](wireframes/homepage-mockup-2.png).

**Stack:** React 18, TypeScript (strict), Vite, React Router, Vitest, Storybook, CSS Modules. **No** Tailwind or CSS frameworks; style with plain CSS and design tokens.

**Design:** Header (gradient, logo, Product Suite / Docs / Pricing, Contact Us), hero (headline, subtext, Get Started), “Our Product Suite” 2×3 grid (Token Editor, Validator, Figma Sync, Package Builder, Proof Publisher, AI Runner) with icon, title, description, Learn More. Use `tokens.css` to match the mockup (purple–blue gradient, etc.).

**i18n:** Optional at first; add `i18n/` and `locales/` when needed. **API:** Omit or add minimal `api/` only when required.

**Cursor must use [AGENTS.md](AGENTS.md).** When working in a file or domain, act as the agent that owns it. Follow that agent's Owns, Does not, Depends on, and Collaborates with. Do not change files owned by another agent unless that agent's section allows it.
