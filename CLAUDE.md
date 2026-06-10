# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Radar4Flood is a public academic website for a radar-based flood forecasting project. It is **not** a dashboard, SaaS product, or forecasting system — it publishes project information and links out to the existing forecast webpage.

Stack: **Astro + TypeScript + Tailwind CSS v4 + Sanity CMS**, deployed on Netlify. Default language is Thai; English routes exist under `/en` and use `Astro.rewrite()` fallback until final translation is requested.

Read these docs before major changes:
- `README.md` — scope, routes, fixed constraints
- `context.md` — product intent, Sanity content model, design system
- `DESIGN.md` — detailed design tokens and component rules
- `AGENTS.md` — full agent operating rules

## Commands

```sh
npm run dev          # start dev server
npm run build        # production build (run before finishing any task)
npm run preview      # preview production build
npm run check        # astro type-check
npm run format       # prettier format
npm run format:check # check formatting without writing
```

There is no test runner. Run `npm run build` and `npm run check` before considering work complete.

## Architecture

### Page routing

Pages in `src/pages/` are thin shells — they pass a `lang` prop to a page component:

```
src/pages/index.astro        → <HomePage lang="th" />
src/pages/en/index.astro     → Astro.rewrite('/')   (fallback shim)
src/pages/news/[slug].astro  → <NewsDetailPage lang="th" ... />
```

All English `/en/*` pages use `Astro.rewrite()` to the Thai route until translation is approved.

### Component layers

```
src/layouts/Layout.astro        — root HTML shell, Header + Footer slot
src/components/pages/           — page-level composition + data loading
src/components/sections/        — reusable section blocks used across pages
src/components/news/            — news-specific UI components
src/components/                 — shared Header, Footer
```

Page components own data loading. Section and leaf components receive props only.

### i18n

All UI labels go through `src/lib/i18n/` — never hardcode Thai or English strings in components.

Key exports from `src/lib/i18n/index.ts`:
- `t(lang, key)` — typed label lookup from `src/lib/i18n/labels.ts`
- `routeHref(lang, routeKey)` — language-aware internal link
- `routePath(lang, path)` — converts any path to the correct language prefix
- `localize(bilingualText, lang)` — picks the right language from a `{ th?, en? }` object
- `Lang` type, `BilingualText` interface

### Data

`src/data/` holds typed local mock data (news, publications, signals, navigation). This is temporary — content migrates to Sanity. Keep mock data shapes compatible with the Sanity content model defined in `context.md`.

`src/types/content.ts` defines shared TypeScript types.

Sanity utilities (clients, GROQ queries, image helpers) belong in `src/lib/sanity/` (not yet created; add there when integrating).

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (configured in `astro.config.mjs`). Global styles at `src/styles/global.css`. Use the Radar Current palette from `context.md` — Navy `#001E45`, Teal `#0B676C`, Sky Blue `#45A0F3`. Prefer surface layering and spacing over borders.

Fonts loaded from Google Fonts: **IBM Plex Sans Thai** (headings) and **Noto Sans Thai** (body).

### Environment variables

```
PUBLIC_FORECAST_URL        # URL to the existing forecast webpage
PUBLIC_SANITY_PROJECT_ID
PUBLIC_SANITY_DATASET
PUBLIC_SANITY_API_VERSION
```

Never expose private Sanity tokens to client-side code.
