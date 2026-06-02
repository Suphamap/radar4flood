# Radar4Flood Website

Radar4Flood is a public-facing academic project website for a radar-based flood forecasting project. The website introduces the project, publishes news and work updates, presents publications and staff information, and provides a clear entry point to the existing forecast webpage.

This is a content-focused website, not a login-based product or forecasting dashboard.

## Current Direction

- **Framework:** Astro
- **Language:** TypeScript where useful
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Hosting:** Netlify
- **Default language:** Thai
- **Language support:** Thai and English in the site UI and content
- **Working style:** Solo project with AI-assisted development

## Confirmed Main Navigation

The primary navigation has been decided. Use these items for the website navbar:

```text
Home
Radar4Flood
News
Publication
Staff
Contact Us
```

Recommended Thai-default routes:

```text
/                  Home
/radar4flood       Radar4Flood feature / forecast link page
/news              News listing
/news/[slug]       News detail
/publication       Publication page
/staff             Staff page
/contact           Contact Us page
```

Recommended English routes:

```text
/en
/en/radar4flood
/en/news
/en/news/[slug]
/en/publication
/en/staff
/en/contact
```

The `Radar4Flood` navigation item should act as a feature/link entry point for the existing forecast webpage. It may be implemented as a dedicated page with a strong CTA to the forecast system, or as a direct external link if the final forecast URL is confirmed.

## Purpose

Radar4Flood should:

- Introduce the project clearly to public visitors
- Present the work in a professional, academic, and trustworthy way
- Publish field trips, announcements, collaborations, milestones, events, and other project updates
- Present project publications in a clear academic format
- Present staff / team information
- Provide basic contact information
- Support image-rich posts managed by the project owner and staff
- Link prominently to the existing forecast webpage instead of rebuilding it

## Version 1 Scope

Build a polished public website first, then connect it to Sanity content.

### Required pages

- Home
- Radar4Flood feature / forecast link page
- News listing
- News detail
- Publication
- Staff
- Contact Us

### Optional later pages

- Partners
- Projects / Activities archive
- About page, only if the project owner wants it separate from Home and Radar4Flood

## Non-Goals

Do not add these unless explicitly requested:

- Public user accounts
- Public login system
- Complex dashboard features
- Custom backend outside Sanity
- Forecasting interface rebuild
- Public contact form
- Heavy analytics implementation
- Overly complex role or permission system in the website code

The Contact Us page should show contact information first. Do not build a form unless the project owner asks for one.

## Sanity Content Model

Sanity is the chosen CMS. Keep schemas simple and friendly for staff editors.

### `post`

A post should support:

- Thai title
- English title
- Slug
- Thai excerpt / summary
- English excerpt / summary
- Thai body
- English body
- Publish date
- Featured image
- Optional image gallery
- Category reference
- Author reference
- Featured flag
- Draft / published state through Sanity

### `category`

Suggested categories:

- Announcement
- Work Update
- Event
- Publication
- Project Milestone

Each category should support Thai and English names.

### `author`

An author should support:

- Name
- Role / affiliation
- Photo, optional
- Short bio, optional

### `publication`

A publication item should support:

- Thai title, optional if the publication title is only available in English
- English title
- Authors
- Year
- Venue / journal / conference
- DOI or external URL, optional
- PDF or file URL, optional
- Thai abstract / summary, optional
- English abstract / summary, optional
- Publication type, optional
- Featured flag, optional

### `staffMember`

A staff member should support:

- Name
- Role / position
- Affiliation / department
- Photo, optional
- Thai bio, optional
- English bio, optional
- Email or contact link, optional
- Display order

If Publication and Staff content is not ready for CMS management at the start, it is acceptable to use typed local mock data first and move it into Sanity later.

## Bilingual Content Direction

Thai is the default language. English should be supported in both UI labels and content.

Recommended route pattern:

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

Keep bilingual fields together in Sanity documents so editors can manage Thai and English versions of the same item in one place.

## Forecast Page Direction

The forecast webpage already exists and should be linked from this website. Treat it as an external or separate internal destination.

Recommended configuration:

```text
PUBLIC_FORECAST_URL=https://example.com/forecast
```

Use this value for the Radar4Flood feature page, homepage CTA, and any forecast buttons once the real URL is known.

## Design Direction

Follow the Radar4Flood design system, "The Radar Current":

- Academic, modern, clear, and calm
- Deep navy, restrained teal, and sky-blue highlights
- Bilingual-friendly typography
- Spacious layouts with strong hierarchy
- Surface shifts and spacing instead of heavy borders
- Editorial presentation for news and field updates
- Professional but approachable tone

Avoid loud dashboard styling, excessive neon effects, border-heavy cards, and overly technical visuals that make the website feel like an internal monitoring tool.

## Suggested Project Structure

This can evolve with the actual Astro setup, but keep the project easy for Codex and future contributors to understand.

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

## Development Principles

- Keep the public website simple, fast, and maintainable
- Build reusable components, but avoid premature abstraction
- Prefer content-driven Astro pages over unnecessary client-side JavaScript
- Use Sanity only for content management, not as a general application backend
- Make images accessible with meaningful alt text
- Keep Thai and English content readable on mobile
- Keep the navbar stable unless the project owner changes it again
- Run formatting, linting, and build checks before considering work complete, when those scripts exist

## AI Workflow Notes

This project is developed by one person with AI assistance. AI agents should respect the project direction and avoid changing the stack, scope, or confirmed navigation without explicit instruction.

Use these docs together:

- `README.md` — stable project overview and implementation direction
- `context.md` — product, content, bilingual, navigation, and design context
- `agents.md` — instructions for Codex and other coding agents

## Near-Term Priorities

1. Set up the Astro project structure cleanly
2. Define the base layout, theme tokens, and reusable components
3. Build the confirmed navbar: Home, Radar4Flood, News, Publication, Staff, Contact Us
4. Build the main public-facing pages
5. Add a prominent forecast link through the Radar4Flood page and homepage CTA
6. Create the Sanity schema for bilingual posts, categories, authors, publications, and staff members as needed
7. Integrate Sanity queries into the News listing and detail pages
8. Support image-rich posts
9. Deploy cleanly on Netlify
