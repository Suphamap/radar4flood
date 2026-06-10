# Radar4Flood Website

Radar4Flood is a public-facing academic website for a radar-based flood forecasting project. It introduces the project, publishes news and work updates, presents publications and staff information, provides basic contact information, and links clearly to the existing forecast webpage.

This is a content-focused public website, not a login-based product, forecasting dashboard, or replacement for the existing forecast system.

## Fixed Direction

Use this direction unless the project owner explicitly changes it:

- **Framework:** Astro
- **Language:** TypeScript where useful
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Hosting:** Netlify
- **Default language:** Thai
- **Language support:** Thai first, with English routes prepared through fallback until final translation
- **Working style:** Solo project with AI-assisted development

Sanity is the content CMS. Do not replace it with another CMS or add a custom backend unless explicitly requested.

## Main Navigation

The primary navbar is confirmed. Keep this order:

```text
Home
Radar4Flood
News
Publication
Staff
Contact Us
```

Use Thai as the default route set and keep English structure under `/en`. Until the final translation stage, do not create translated English page files or copy. Use Astro rewrite-based fallback shims so English routes render the Thai route content without maintaining a second translated page:

```text
/                  Home
/radar4flood       Radar4Flood feature / forecast link page
/news              News listing
/news/[slug]       News detail
/publication       Publication page
/staff             Staff page
/contact           Contact Us page
/en                English Home
/en/radar4flood    English Radar4Flood feature / forecast link page
/en/news           English News listing
/en/news/[slug]    English News detail
/en/publication    English Publication page
/en/staff          English Staff page
/en/contact        English Contact Us page
```

The `/en` paths are structural placeholders during development. They should render Thai fallback content through `Astro.rewrite()` unless the project owner explicitly starts the final English translation pass.

The `Radar4Flood` nav item is the main entry point to the existing forecast webpage. Prefer a dedicated feature page with a clear CTA unless the final forecast URL is intentionally linked directly from the navbar.

## Version 1 Scope

Build a polished public website first. Sanity is the target content source, but typed local mock data is acceptable temporarily for content that is not ready yet.

Required pages:

- Home
- Radar4Flood feature / forecast link page
- News listing
- News detail
- Publication
- Staff
- Contact Us

Optional later pages:

- Partners
- Projects / Activities archive
- About, only if the project owner wants a separate About page later

## Non-Goals

Do not add these unless explicitly requested:

- Public user accounts, login, or role management
- Forecasting dashboard rebuild
- Complex custom backend outside Sanity
- Public contact form
- Heavy analytics implementation
- Loud internal-dashboard styling

The Contact Us page should show contact information first. Do not build a form unless the project owner asks for one.

## Environment Variables

Expected variables may include:

```text
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=
PUBLIC_SANITY_API_VERSION=
PUBLIC_FORECAST_URL=
```

Only add private tokens if a server-only feature requires them. Never expose private tokens to client-side code.

## Project Docs

Use these files together:

- `README.md` - stable project direction, scope, routes, and setup notes
- `context.md` - product, content, bilingual, Sanity, and design context
- `DESIGN.md` - detailed design tokens, component rules, and frontend visual guidance
- `AGENTS.md` - coding-agent rules for making changes in this repository

## Development Principles

- Keep the public website simple, fast, responsive, and maintainable.
- Prefer content-driven Astro pages over unnecessary client-side JavaScript.
- Keep Thai and English content readable on mobile, tablet, and desktop.
- Reuse existing layouts, components, data helpers, i18n dictionaries, and Sanity utilities before creating new ones.
- Run available checks before considering work complete.

## Scripts

```sh
npm run dev
npm run build
npm run preview
```

Check `package.json` for the current script list before running project commands.
