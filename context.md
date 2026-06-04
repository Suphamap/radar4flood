# Radar4Flood Project Context

This file is the product, content, bilingual, Sanity, and high-level design source of truth for the Radar4Flood website. See `README.md` for fixed scope and routes, `DESIGN.md` for detailed design tokens and component rules, and `AGENTS.md` for coding-agent workflow rules.

## Project Identity

- **Project name:** Radar4Flood
- **Domain:** Radar-based weather and flood forecasting
- **Website type:** Public academic project website
- **Primary audience:** Public visitors, academic collaborators, university staff, project partners, and interested agencies
- **Main content:** Project introduction, forecast entry link, announcements, work updates, publications, staff information, events, collaborations, field activities, and milestones
- **CMS:** Sanity
- **Hosting:** Netlify
- **Default language:** Thai
- **Secondary language:** English

## Product Positioning

Radar4Flood should feel like a credible academic project with active real-world work behind it.

The site should feel:

- professional
- clear
- calm
- academic
- practical
- accessible to non-specialists

The site should not feel like:

- a generic university template
- a startup landing page with exaggerated marketing language
- an internal monitoring dashboard
- a complex SaaS product

## Website Purpose

The website exists to:

- Explain what Radar4Flood is
- Give visitors confidence that the project is active and credible
- Publish project updates in a structured way
- Show field work, collaboration, and milestones through image-rich posts
- Present publications
- Present staff / project members
- Provide basic contact information
- Provide a prominent path to the existing forecast webpage

The website does not perform forecasting itself. The existing forecast webpage should remain separate and be linked clearly.

## Navigation Meaning

The confirmed navbar and route map live in `README.md`. Page intent:

- **Home:** Main landing page and project overview.
- **Radar4Flood:** Feature/link page for the forecast system or Radar4Flood tool, with a clear CTA to the existing forecast webpage.
- **News:** Project announcements, activities, field trips, conferences, collaborations, and updates.
- **Publication:** Academic outputs, papers, reports, presentations, or related publication records.
- **Staff:** Project owner, staff, researchers, and contributors.
- **Contact Us:** Basic contact information. A public contact form is not required.

The old possible `/about` page is not part of the primary navbar. Project explanation can live on Home and Radar4Flood. Add a separate About page later only if the project owner requests it.

## Content Strategy

The site should publish updates such as:

- Announcements
- Work updates
- Field trips
- Conference participation
- Project milestones
- Publications
- Collaborations
- Events

Posts will often include images. Design news cards and article pages with image-rich content in mind.

Publications and staff information may start as typed local data if content is not ready in Sanity. Keep the data shape easy to move into Sanity later.

## Sanity Content Model

Sanity is the chosen CMS. Use it for staff-editable content and keep schemas simple.

### `post`

```text
post
  titleTh
  titleEn
  slug
  excerptTh
  excerptEn
  bodyTh
  bodyEn
  publishedAt
  featuredImage
  galleryImages
  category -> category
  author -> author
  isFeatured
```

Notes:

- `bodyTh` and `bodyEn` should use rich text / Portable Text.
- Keep Thai and English content in the same document.
- `slug` should identify the post across both languages.
- `featuredImage` should support alt text where practical.
- `galleryImages` is optional but useful for field updates.

### `category`

```text
category
  titleTh
  titleEn
  slug
  descriptionTh
  descriptionEn
```

Suggested categories:

- Announcement
- Work Update
- Event
- Publication
- Project Milestone

### `author`

```text
author
  name
  role
  image
  bioTh
  bioEn
```

Keep author data simple. Do not build complex staff permissions in the website code.

### `publication`

```text
publication
  titleTh
  titleEn
  authors
  year
  venue
  publicationType
  doi
  externalUrl
  fileUrl
  summaryTh
  summaryEn
  isFeatured
```

Notes:

- `titleTh` may be optional if a publication only has an English title.
- Use `externalUrl`, `doi`, or `fileUrl` for links instead of uploading everything into the website code.
- The Publication page can start with local mock data and later move to Sanity.

### `staffMember`

```text
staffMember
  name
  roleTh
  roleEn
  affiliationTh
  affiliationEn
  image
  bioTh
  bioEn
  email
  profileUrl
  sortOrder
```

Notes:

- Keep staff profiles concise.
- Email should be optional.
- Avoid complex staff accounts or permissions in the website code.

## Bilingual Strategy

Thai is the default site language. English should be available for visitors who need it.

Implementation guidance:

- Thai routes live at root paths.
- English routes live under `/en`.
- UI labels live in a small dictionary such as `src/lib/i18n/`.
- CMS-managed documents contain Thai and English fields in the same Sanity document.
- If English content is missing, show an explicit fallback instead of breaking the page.
- Keep the navbar language-aware.
- Avoid a complicated localization framework unless the project grows to require it.

## Forecast Link Strategy

The forecast webpage already exists. Do not rebuild it in this website.

Recommended behavior:

- Use the `Radar4Flood` nav item as the main forecast feature/link entry.
- Add a forecast CTA in the homepage hero or an early homepage section.
- Add a clear external link button on `/radar4flood`.
- Store the URL in `PUBLIC_FORECAST_URL` when possible.
- Use a safe placeholder only during development.

## Design System: The Radar Current

Creative goal: **Authority with Accessibility.**

The interface should translate radar science into a public-facing academic experience. It should be structured, calm, trustworthy, and alive without becoming visually noisy.

For frontend implementation details, use `DESIGN.md` as the detailed source for visual tokens, component rules, interaction states, and do/don't guidance.

Core colors:

```text
Primary / Radar Navy: #001E45
Secondary / Flood Teal: #0B676C
Tertiary / Sky Blue: #45A0F3
Surface: #FCFCFC
Surface Low: #F5F9FC
Surface Highest: #E6EDF3
Card Surface: #FFFFFF
Secondary Container: #D8EEF0
Tertiary Container: #DCEEFF
Outline Variant: #C9D5E2
```

Layout and depth:

- Use surface layering and spacing before borders.
- Prefer base `#FCFCFC`, section surfaces `#F5F9FC`, and cards `#FFFFFF`.
- Avoid strong 1px borders as the main separation method.
- Use subtle boundaries and soft shadows only when elevation is useful.

Typography:

- Display and major headings: IBM Plex Sans Thai when available.
- Body text and labels: Noto Sans Thai.
- Keep Thai and English text readable.
- Avoid long centered paragraphs.

Component patterns:

- Stable responsive header using the confirmed navbar.
- Hero section with strong but calm visual identity.
- Radar4Flood feature panel with CTA to the existing forecast webpage.
- News cards with image, date, category chip, title, and excerpt.
- Publication cards or list rows with authors, year, venue, and links.
- Staff profile cards with image, role, affiliation, and concise bio.
- Contact information panel without a required form.
- Field note module for high-visibility activity updates.
- Academic chips for categories.
- Small signal indicator for fresh or featured updates.

Avoid:

- neon dashboard graphics
- heavy borders
- excessive data-grid visuals
- overused stock-template sections
- decorative effects that reduce readability

## Page Guidance

### Home

Include a clear Radar4Flood introduction, primary CTA to the Radar4Flood forecast feature/link page or forecast page, secondary CTA to News or Publication, recent updates, and academic credibility signals.

### Radar4Flood

Explain the Radar4Flood forecast feature for non-specialists and provide a strong CTA to the existing forecast webpage. Make clear that the forecast interface is separate from this public website.

### News Listing

Include a page title, short intro, image-friendly cards, optional simple category filters, featured post treatment when available, and an empty state.

### News Detail

Include title, publish date, category, author when available, featured image, rich text body, optional gallery, back link to news, and language-aware content display.

### Publication

Show publications grouped or sorted by year with authors, year, venue, and links where available. Include featured publications or an empty state when useful.

### Staff

Show staff / researcher profile cards with role, affiliation, optional photo, optional email or profile link, and a layout that works with or without photos.

### Contact Us

Show project contact information, affiliation or organization information when available, optional email and address, and useful links back to forecast, news, or project pages. Do not add a contact form unless explicitly requested.

## Implementation Preferences

- Use Astro for content-focused pages and prefer static generation where practical.
- Use Tailwind CSS utilities and keep theme tokens aligned with the Radar Current palette.
- Use TypeScript types for Sanity documents, helper functions, and mock data.
- Keep Sanity integration isolated in `src/lib/sanity/`.
- Keep UI labels and language helpers in `src/lib/i18n/`.
- Use responsive image handling where possible and meaningful alt text.
- Deploy as a public site on Netlify without requiring server-only infrastructure unless necessary.

## Quality Bar

A good first release should feel finished from a visitor perspective even if some content is temporary. It should be responsive, readable in Thai and English, visually consistent, easy for staff to update through Sanity, simple for one person to maintain, and clear about how visitors reach the existing forecast webpage.
