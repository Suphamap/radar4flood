# Radar4Flood Project Context

This file gives Codex and other AI coding agents the product, content, navigation, design, and implementation context needed to make good decisions for the Radar4Flood website.

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

The site should not feel like:

- a generic university template
- a startup landing page with exaggerated marketing language
- an internal monitoring dashboard
- a complex SaaS product

The right tone is:

- professional
- clear
- calm
- academic
- practical
- accessible to non-specialists

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

The website does not need to perform forecasting itself. The existing forecast webpage should remain separate and be linked clearly.

## Confirmed Navigation

The main navbar has been decided. Use this order:

```text
Home
Radar4Flood
News
Publication
Staff
Contact Us
```

Recommended page meaning:

- **Home:** Main landing page and project overview.
- **Radar4Flood:** Feature/link page for the forecast system or Radar4Flood tool. This page should explain the feature briefly and link to the existing forecast webpage.
- **News:** Project announcements, activities, field trips, conferences, collaborations, and updates.
- **Publication:** Academic outputs, papers, reports, presentations, or related publication records.
- **Staff:** Project owner, staff, researchers, and contributors.
- **Contact Us:** Basic contact information. A public contact form is not required.

## Version 1 Information Architecture

Build these first:

```text
/
/radar4flood
/news
/news/[slug]
/publication
/staff
/contact
/en
/en/radar4flood
/en/news
/en/news/[slug]
/en/publication
/en/staff
/en/contact
```

The old possible `/about` page is no longer part of the primary navbar. Project explanation can live on the Home page and the Radar4Flood page. Add a separate About page later only if the project owner requests it.

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

Publications and staff information may start as typed local data if content is not yet ready in Sanity. Keep the structure easy to move into Sanity later.

## Sanity Content Model

Sanity is the chosen CMS. Use it for staff-editable content.

### Post

Recommended fields:

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

### Category

Recommended fields:

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

### Author

Recommended fields:

```text
author
  name
  role
  image
  bioTh
  bioEn
```

Keep author data simple. Do not build complex staff permissions in the website code.

### Publication

Recommended fields:

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

### Staff Member

Recommended fields:

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

Recommended implementation:

- Thai routes live at the root paths.
- English routes live under `/en`.
- UI labels live in a small dictionary such as `src/lib/i18n/`.
- Sanity documents contain both Thai and English fields where content is CMS-managed.
- If English content is missing, show a clear fallback instead of breaking the page.
- Keep the navbar language-aware.

Avoid building a complicated localization framework unless the project grows to require it.

## Forecast Link Strategy

The forecast webpage already exists. Do not rebuild it in this website.

Recommended behavior:

- Use the `Radar4Flood` nav item as the main forecast feature/link entry.
- Add a forecast CTA in the homepage hero or an early homepage section.
- Add a clear external link button on `/radar4flood`.
- Store the URL in an environment variable when possible.

Suggested variable:

```text
PUBLIC_FORECAST_URL=
```

Use a safe placeholder only during development.

## Design System: The Radar Current

The design direction is called "The Radar Current".

Creative goal:

> Authority with Accessibility.

The interface should translate radar science into a public-facing academic experience. It should be structured, calm, trustworthy, and alive without becoming visually noisy.

### Color direction

Use these core colors:

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

### Layout and depth

Use surface layering and spacing before borders.

Preferred hierarchy:

1. Base: `#FCFCFC`
2. Section surfaces: `#F5F9FC`
3. Cards: `#FFFFFF`

Avoid strong 1px borders as the main separation method. If a boundary is required, use a very subtle ghost border.

### Typography

Recommended type direction:

- Display and major headings: IBM Plex Sans Thai
- Body text and labels: Noto Sans Thai

Keep Thai and English text readable. Avoid long centered paragraphs.

### Components

Use these patterns:

- Stable responsive header using the confirmed navbar
- Hero section with strong but calm visual identity
- Radar4Flood feature panel with CTA to the existing forecast webpage
- News cards with image, date, category chip, title, and excerpt
- Publication cards or list rows with authors, year, venue, and links
- Staff profile cards with image, role, affiliation, and concise bio
- Contact information panel without a required form
- Field note module for high-visibility activity updates
- Academic chips for categories
- Small signal indicator for fresh or featured updates

Avoid:

- neon dashboard graphics
- heavy borders
- excessive data-grid visuals
- overused stock-template sections
- decorative effects that reduce readability

## Page-Level Guidance

### Home

Should include:

- Hero section explaining Radar4Flood
- Primary CTA to the Radar4Flood forecast feature/link page or directly to the forecast page
- Secondary CTA to News or Publication
- Short project explanation
- Recent updates
- Optional featured activity / field note
- Clear academic credibility section

### Radar4Flood

Should include:

- Brief explanation of the Radar4Flood forecast feature or system
- Strong CTA linking to the existing forecast webpage
- Clear note that the forecast interface is separate from this public website
- Supporting explanation of how radar-based forecasting fits the project, written for non-specialists

Do not rebuild the forecasting dashboard here.

### News listing

Should include:

- Page title and short intro
- Category filters if simple to implement
- News cards
- Featured post treatment if content exists
- Empty state for no posts

### News detail

Should include:

- Title
- Publish date
- Category
- Author, if available
- Featured image
- Rich text body
- Optional gallery
- Back link to news listing
- Language-aware content display

### Publication

Should include:

- Page title and short intro
- Publication list grouped or sorted by year
- Authors, year, venue, and links where available
- Featured publications if useful
- Empty state if content is not ready

### Staff

Should include:

- Page title and short intro
- Staff / researcher profile cards
- Role or affiliation for each person
- Optional email or profile link when approved
- Simple layout that works with or without photos

### Contact Us

Should include:

- Page title and short intro
- Project contact information
- Affiliation / organization information if available
- Optional email and address
- Link back to forecast, news, or relevant project pages

Do not add a contact form unless explicitly requested.

## Implementation Preferences

### Astro

Use Astro for content-focused pages. Prefer static generation where practical.

### Tailwind CSS

Use Tailwind for styling and keep design tokens aligned with the Radar4Flood palette.

### TypeScript

Use TypeScript types for Sanity documents and helper functions.

### Sanity

Keep Sanity integration isolated in helper files. Suggested location:

```text
src/lib/sanity/
```

Suggested helper responsibilities:

- Sanity client setup
- GROQ queries
- image URL builder
- document types
- post fetching helpers
- publication fetching helpers, if CMS-managed
- staff fetching helpers, if CMS-managed

### Images

Posts and staff profiles may include images. Use responsive image handling where possible and meaningful alt text.

### Netlify

Deploy as a public site on Netlify. Keep environment variables documented and avoid requiring server-only infrastructure unless necessary.

## Suggested Development Order

1. Create base Astro + Tailwind structure
2. Add global layout, navigation, footer, and theme tokens
3. Build the confirmed navbar
4. Build homepage with mock content
5. Build Radar4Flood feature / forecast link page
6. Build news listing and news detail pages with mock content
7. Build Publication page with mock or Sanity data
8. Build Staff page with mock or Sanity data
9. Build Contact Us page with static information
10. Create Sanity schema types
11. Add Sanity client and query helpers
12. Replace mock news with Sanity data
13. Add bilingual route handling and labels
14. Configure Netlify deployment

## Quality Bar

The first release should feel finished from a visitor perspective even if some content is still temporary.

A good version 1 should be:

- responsive
- readable in Thai and English
- visually consistent
- easy for staff to update through Sanity
- simple enough for one person to maintain
- clear about how visitors reach the existing forecast webpage
- ready to evolve without major rewrites
