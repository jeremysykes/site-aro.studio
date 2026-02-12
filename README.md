# site-aro.studio

Aro Studio personal-brand SPA. React, TypeScript, Vite, React Router.

## Prerequisites

Node.js 18 or newer.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Dev server at http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

Serves the production build locally.

## Lint / format

- `npm run lint`
- `npm run format`
- `npm run format:check`

## Storybook

- **Dev:** `npm run storybook` (http://localhost:6006)
- **Build:** `npm run build-storybook` (output: `storybook-static`)
- **Deploy:** `npm run deploy-storybook` — builds and deploys to Vercel (first time: run `vercel login` and link the project). The deployed URL serves the static Storybook.

## Storybook deployment and zeroheight

Deploy Storybook with `npm run deploy-storybook`. The build uses `storybook-static`; Vercel is configured via `vercel.json` (buildCommand, outputDirectory).

To embed in zeroheight: add an embed block and use your Vercel Storybook URL. For a specific story use the full URL including the query, e.g. `https://[your-vercel-url]/?path=/story/[component]--[variant]`. If the embed is blocked, add headers in `vercel.json` to allow framing (e.g. `Content-Security-Policy: frame-ancestors` for zeroheight).

## Repo

https://github.com/jeremysykes/site-aro.studio
