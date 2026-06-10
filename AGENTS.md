# AI Coding Agent Instructions

You are working on the Radar4Flood website. These rules are for Codex and any future AI coding agent working in this repository.

## Read First

Before making major changes, read:

1. `README.md` for stable project direction, scope, routes, and setup notes
2. `context.md` for product, content, bilingual, Sanity, and design context
3. `DESIGN.md` for detailed design tokens, component rules, and frontend visual guidance when working on frontend UI
4. `AGENTS.md` for agent operating rules

For small targeted fixes, read the relevant files before editing.

## Fixed Constraints

Preserve these unless the project owner explicitly changes them:

- Astro
- TypeScript where useful
- Tailwind CSS
- Sanity CMS
- Netlify hosting
- Thai as the default language
- English route support through Astro rewrite fallback until final translation
- Confirmed navbar order: Home, Radar4Flood, News, Publication, Staff, Contact Us

Do not replace Sanity, add a custom backend, add public authentication, rebuild the forecast interface, or add a public contact form unless explicitly requested.

## Product Boundaries

Radar4Flood is a public academic project website. It should explain the project, publish updates, support image-rich news, present publications and staff, provide basic contact information, and link clearly to the existing forecast webpage.

It is not a login-based web app, SaaS product, internal dashboard, or forecasting system.

## Reuse Before Creating

Before adding new code, inspect and reuse existing project patterns:

- Shared layouts in `src/layouts/`
- Reusable Astro components in `src/components/`
- Shared section templates in `src/components/sections/`
- Typed local data helpers in `src/data/`
- Shared TypeScript types in `src/types/`
- UI label dictionaries and language helpers in `src/lib/i18n/`
- Sanity clients, GROQ queries, image helpers, and data mappers in `src/lib/sanity/`

Do not create one-off components, duplicated language-specific components, scattered query strings, or new data shapes when an existing helper can be extended cleanly.

## Implementation Rules

- Keep changes small, coherent, and scoped to the request.
- Follow existing file naming, component structure, Tailwind patterns, and typography choices.
- Prefer static Astro pages and server-side data loading for public content.
- Use client-side JavaScript only when interaction requires it.
- Keep page files focused on composition and data loading.
- Keep presentation components mostly free of data-fetching details.
- Use TypeScript types for Sanity results, mock data, and shared helpers.
- If using mock data, keep it typed and easy to migrate into Sanity.
- Keep UI labels language-aware through the i18n layer instead of hardcoding duplicated Thai/English strings.
- Do not add or maintain translated English UI/content copy until the final translation stage is explicitly requested.
- Keep `/en` route structure ready through Astro rewrite fallback, with English routes falling back to Thai content.
- Keep GROQ queries centralized in Sanity utility files.
- Do not expose private tokens to client-side code.

## Design And Content Rules

Follow the Radar4Flood design system described in `context.md`: academic credibility, modern editorial layout, structured calm, bilingual readability, and professional but approachable tone.

- Use the Radar Current palette and typography direction already established in the project.
- Prefer surface shifts, spacing, hierarchy, and restrained shadows over heavy borders.
- Keep long-form Thai and English content left-aligned.
- Use category chips for Announcement, Work Update, Event, Publication, and Project Milestone where useful.
- Use radar arcs, wave lines, and map-like textures sparingly.
- Do not make the site look like a loud data dashboard.

## Accessibility

- Use semantic HTML and meaningful heading order.
- Add useful alt text for content images.
- Ensure links and buttons have clear labels.
- Keep contrast strong enough for readability.
- Preserve keyboard navigation for interactive elements.

## Working Method

Before editing:

1. Inspect the existing file structure.
2. Read the relevant files.
3. Read `DESIGN.md` before frontend UI changes.
4. Check for existing layouts, components, helpers, data, i18n dictionaries, and Sanity utilities to reuse.
5. Preserve the fixed stack, navbar, bilingual direction, and forecast-link boundary.

While editing:

1. Make minimal, coherent changes.
2. Reuse existing patterns before creating new ones.
3. Keep content, data access, and presentation separated where practical.
4. Avoid broad rewrites unless they clearly improve maintainability and are within scope.
5. Do not silently remove working features.

Before finishing:

1. Check `package.json` for available scripts.
2. Run relevant checks such as `npm run build`, `npm run lint`, or `npm run format` when those scripts exist.
3. Report any command failures honestly, including the failed command.
4. Summarize changed files and why they changed.
5. Mention follow-up tasks that remain.

Do not claim a feature is complete if build or lint checks fail.

## Git And Worktree Safety

- The worktree may contain user changes. Do not revert or overwrite unrelated changes.
- Do not run destructive commands such as `git reset --hard`, `git checkout --`, or broad deletes unless explicitly requested.
- If existing user changes overlap with the task, read them carefully and work with them.
- If unrelated files are dirty, leave them alone.
