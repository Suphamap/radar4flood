# Codex Agent Instructions

You are working on the Radar4Flood website.

Read these files before making major changes:

1. `README.md` for the stable project direction
2. `context.md` for product, content, bilingual, navigation, and design context
3. `AGENTS.md` for coding-agent rules

## Project Summary

Radar4Flood is a public-facing academic website for a radar-based flood forecasting project. It introduces the project, publishes news and work updates, presents publications and staff information, provides basic contact information, and links to an existing forecast webpage.

This is not a login-based web app and not a forecasting dashboard.

## Fixed Technical Direction

Use this stack unless the human project owner explicitly changes it:

- Astro
- TypeScript where useful
- Tailwind CSS
- Sanity CMS
- Netlify hosting
- Thai as the default language
- Thai and English support for UI and content

Do not replace Sanity with another CMS. Do not introduce a custom backend unless explicitly requested.

## Confirmed Navigation

The primary navbar has been decided. Use this order:

```text
Home
Radar4Flood
News
Publication
Staff
Contact Us
```

Recommended route mapping:

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

Do not replace this navbar with a different sitemap unless the project owner explicitly changes it.

The `Radar4Flood` item should be treated as a feature/link entry point to the existing forecast webpage. Prefer a dedicated page with a clear CTA unless the final forecast URL is meant to be linked directly from the navbar.

## Main Product Goals

Prioritize work that helps the website:

- Explain what Radar4Flood is
- Look credible, modern, academic, and approachable
- Publish updates through Sanity
- Support image-rich posts
- Present publications clearly
- Present staff / team information clearly
- Provide basic contact information without requiring a form
- Work well on mobile, tablet, and desktop
- Link clearly to the existing forecast webpage

## Current Scope

Build the public website first.

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

Do not build user accounts, dashboards, public login flows, or a contact form unless explicitly requested.

## Sanity Rules

Sanity is the CMS for staff-managed content. Keep schemas simple.

Expected schema types:

- `post`
- `category`
- `author`
- `publication`, if publications are CMS-managed
- `staffMember`, if staff profiles are CMS-managed

A `post` should support:

- Thai title
- English title
- Slug
- Thai excerpt
- English excerpt
- Thai body
- English body
- Publish date
- Featured image
- Optional image gallery
- Category reference
- Author reference
- Featured flag

A `publication` should support:

- Thai title, optional if not available
- English title
- Authors
- Year
- Venue / journal / conference
- DOI or external URL, optional
- PDF or file URL, optional
- Thai summary, optional
- English summary, optional
- Publication type, optional
- Featured flag, optional

A `staffMember` should support:

- Name
- Role / position
- Affiliation
- Photo, optional
- Thai bio, optional
- English bio, optional
- Email or contact link, optional
- Display order

Implementation guidance:

- Keep GROQ queries in a small Sanity utility layer such as `src/lib/sanity/`.
- Define clear TypeScript types for Sanity results.
- Avoid scattering query strings throughout components.
- Do not expose private tokens to client-side code.
- Use public dataset reads for published content when possible.
- Add draft-preview behavior only if requested.
- If Publication or Staff content is not ready in Sanity, use typed local mock data first and make the migration path clear.

## Bilingual Rules

Thai is the default language. English should be supported from the beginning where practical.

Recommended route structure:

```text
/                  Thai homepage
/radar4flood       Thai Radar4Flood feature / forecast link page
/news              Thai news listing
/news/[slug]       Thai news detail
/publication       Thai publication page
/staff             Thai staff page
/contact           Thai contact page
/en                English homepage
/en/radar4flood    English Radar4Flood feature / forecast link page
/en/news           English news listing
/en/news/[slug]    English news detail
/en/publication    English publication page
/en/staff          English staff page
/en/contact        English contact page
```

Guidance:

- Keep UI labels in a small i18n dictionary.
- Keep Thai and English content fields in the same Sanity document.
- Do not create separate unrelated items for each language unless instructed.
- Make fallback behavior explicit if English content is missing.
- Keep navbar labels language-aware.

## Design Rules

Follow the Radar4Flood design system, "The Radar Current".

Use the design direction:

- Academic credibility
- Modern editorial layout
- Structured calm
- Signal-led emphasis
- Bilingual readability
- Professional but approachable tone

Core visual tokens:

- Primary navy: `#001E45`
- Secondary teal: `#0B676C`
- Tertiary sky blue: `#45A0F3`
- Base surface: `#FCFCFC`
- Low surface: `#F5F9FC`
- Card surface: `#FFFFFF`

Typography direction:

- Use IBM Plex Sans Thai for display and major headings when available.
- Use Noto Sans Thai for body text, labels, and bilingual readability.
- Keep long-form content left-aligned.

Component guidance:

- Prefer surface shifts, spacing, and hierarchy over hard borders.
- Avoid border-heavy cards.
- Use soft shadows only when elevation is needed.
- Use chips for categories such as Announcement, Work Update, Event, Publication, and Project Milestone.
- Use radar arcs, wave lines, and map-like textures sparingly as background accents.
- Do not make the site look like a loud data dashboard.

## Coding Style

General:

- Keep code readable and maintainable.
- Prefer simple Astro components for static UI.
- Use client-side JavaScript only when interaction requires it.
- Avoid premature abstractions.
- Name files and components clearly.
- Keep components small enough to understand quickly.

Astro:

- Use layouts for shared page structure.
- Use components for repeated UI sections.
- Keep page files focused on composition and data loading.
- Prefer static generation for public content.

Tailwind:

- Use Tailwind utilities consistently.
- Extract repeated visual patterns into components.
- Do not create many one-off custom CSS rules when utilities are enough.
- Keep theme tokens aligned with the design system.

Accessibility:

- Use semantic HTML.
- Use meaningful heading order.
- Add alt text for content images.
- Ensure links and buttons have clear labels.
- Keep contrast strong enough for readability.
- Support keyboard navigation for interactive elements.

## Suggested File Organization

Use or adapt this structure:

```text
src/
  components/
    common/
    layout/
    news/
    publication/
    staff/
    sections/
  data/
  layouts/
  lib/
    sanity/
    i18n/
  pages/
    index.astro
    radar4flood.astro
    news/
      index.astro
      [slug].astro
    publication.astro
    staff.astro
    contact.astro
    en/
      index.astro
      radar4flood.astro
      news/
        index.astro
        [slug].astro
      publication.astro
      staff.astro
      contact.astro
  styles/
  types/
sanity/
  schemaTypes/
public/
```

## Environment Variables

Expected variables may include:

```text
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=
PUBLIC_SANITY_API_VERSION=
PUBLIC_FORECAST_URL=
```

Only add private tokens if a server-only feature requires them.

## Working Method For Codex

Before editing:

1. Inspect the existing file structure.
2. Read relevant files before changing them.
3. Preserve the Astro + Sanity + Netlify direction.
4. Preserve the confirmed navbar unless instructed otherwise.
5. Keep scope small and focused.

While editing:

1. Make minimal, coherent changes.
2. Reuse existing patterns.
3. Keep content and presentation separated where practical.
4. Avoid large rewrites unless they clearly improve maintainability.
5. Do not silently remove working features.

Before finishing:

1. Run available checks, such as `npm run format`, `npm run lint`, and `npm run build`, when scripts exist.
2. Report any command failures honestly.
3. Summarize changed files and why they changed.
4. Mention any follow-up tasks that remain.

## Do Not Do

- Do not change the CMS away from Sanity.
- Do not add user authentication.
- Do not rebuild the forecast interface.
- Do not add a complex custom backend.
- Do not introduce heavy frontend frameworks unless needed.
- Do not add a public contact form unless requested.
- Do not use loud dashboard styling.
- Do not rely on thick borders for layout hierarchy.
- Do not make long-form Thai or English content over-centered.
- Do not claim a feature is complete if build or lint checks fail.

## Preferred First Implementation Path

When starting from a clean project, build in this order:

1. Astro + Tailwind base setup
2. Theme tokens and global layout
3. Header, footer, and confirmed navigation
4. Homepage sections
5. Radar4Flood feature / forecast link page
6. News listing and news detail UI using mock data
7. Publication page using mock or Sanity data
8. Staff page using mock or Sanity data
9. Contact Us page with static contact information
10. Sanity schema types
11. Sanity client and query helpers
12. Replace mock content with Sanity content
13. Netlify deployment configuration
