# News System Design

**Date:** 2026-06-10
**Branch:** News-page
**Status:** Approved

## Scope

Add a fully functional news detail page to the Radar4Flood Astro site. The system covers:

- Sanity Studio schema definitions (files only — Studio deployment deferred)
- TypeScript types for Portable Text and detail post data
- One fully typed mock post: ARDA IPITEx 2026 (slug `arda-ipitex-2026-awards`)
- Thai detail route `src/pages/news/[slug].astro` and English route `src/pages/en/news/[slug].astro`
- Four new components: `NewsDetailPage`, `PortableTextRenderer`, `NewsGallery`, `AuthorCard`
- SEO enhancements: OG tags + JSON-LD `NewsArticle` on the detail page
- Four new i18n label keys
- Add `.superpowers/` to `.gitignore`

## Decisions

| Topic | Decision |
|---|---|
| Detail layout | Layout A — single editorial column |
| Portable Text rendering | Custom `PortableTextRenderer.astro`, no new npm dependencies |
| Sanity integration | Schema files only; data layer uses mock today, swapped to GROQ later |
| Body fields | Separate `bodyTh` / `bodyEn` Portable Text fields per post document |
| Tags | None — single `category` reference is sufficient |
| Gallery alt text | Optional per image |
| Mock body copy | Realistic Thai narrative (not lorem) — not final official copy |
| Gallery | Optional field; shown only when `galleryImages` exists on the post |
| Author | Single author per post; "Suphanut Mapiam" on the ARDA mock |
| Author display | Inline author bar below title + full AuthorCard at bottom of article |
| Missing English | Show a small Thai-only notice; language switcher behaviour unchanged |
| Featured image | Required on every post; `og:image` uses `featuredImage.src` |
| JSON-LD | `NewsArticle` structured data on detail page |
| Slug generation | Auto-generated from `titleTh` in Sanity, readOnly after publish |
| URL namespace | Flat: `/news/[slug]` and `/en/news/[slug]` |
| Slug immutability | `readOnly` validation in Sanity schema once published |
| Studio deployment | Deferred — schema files are ready but not yet deployed |
| Draft preview | Out of scope for this implementation |

## 1. Sanity Schema (`studio/schemas/`)

Files to create: `post.ts`, `author.ts`, `category.ts`, `index.ts`.

### `post.ts` fields

| Field | Sanity type | Required | Notes |
|---|---|---|---|
| `titleTh` | `string` | yes | |
| `titleEn` | `string` | no | |
| `slug` | `slug` | yes | Source field: `titleTh`; readOnly once `publishedAt` is set |
| `excerptTh` | `text` | yes | |
| `excerptEn` | `text` | no | |
| `bodyTh` | `array` (Portable Text) | yes | See block vocabulary below |
| `bodyEn` | `array` (Portable Text) | no | Same vocabulary |
| `publishedAt` | `datetime` | yes | |
| `featuredImage` | `image` | yes | Sub-fields: `altTh` (string, optional), `altEn` (string, optional) |
| `galleryImages` | `array` of `image` | no | Each image: `altTh` (optional), `altEn` (optional) |
| `category` | `reference` → `category` | yes | |
| `author` | `reference` → `author` | no | |
| `isFeatured` | `boolean` | no | |

### Portable Text block vocabulary (both body fields)

- **Block styles:** `normal`, `h2`, `h3`, `blockquote`
- **Inline marks:** `strong`, `em`, `link` (with `href` and `blank` fields)
- **Custom block types:**
  - `image` — `asset` (image), `altTh?`, `altEn?`, `captionTh?`, `captionEn?`
  - `callout` — `bodyTh?` (text), `bodyEn?` (text)
  - `code` — `language?` (string), `code` (text)

### `author.ts` fields

`name` (string, required), `role` (string), `image` (image, optional), `bioTh` (text, optional), `bioEn` (text, optional)

### `category.ts` fields

`titleTh` (string, required), `titleEn` (string, optional), `slug` (slug, from `titleTh`), `descriptionTh` (text, optional), `descriptionEn` (text, optional)

## 2. TypeScript Types (`src/types/content.ts` additions)

```typescript
export interface NewsAuthor {
  name: string;
  role: string;
  image?: string;
  bioTh?: string;
  bioEn?: string;
}

export interface PortableTextSpan {
  _type: 'span';
  _key: string;
  text: string;
  marks: string[];
}

export interface PortableTextMarkDef {
  _type: string;
  _key: string;
  href?: string;
  blank?: boolean;
}

export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style: 'normal' | 'h2' | 'h3' | 'blockquote';
  children: PortableTextSpan[];
  markDefs: PortableTextMarkDef[];
}

export interface PortableTextImage {
  _type: 'image';
  _key: string;
  asset: { url: string };
  alt?: BilingualText;
  caption?: BilingualText;
}

export interface PortableTextCallout {
  _type: 'callout';
  _key: string;
  bodyTh?: string;
  bodyEn?: string;
}

export interface PortableTextCode {
  _type: 'code';
  _key: string;
  language?: string;
  code: string;
}

export type PortableTextContent =
  | PortableTextBlock
  | PortableTextImage
  | PortableTextCallout
  | PortableTextCode;

export interface NewsDetailItem extends NewsItem {
  bodyTh: PortableTextContent[];
  bodyEn?: PortableTextContent[];
  author?: NewsAuthor;
  galleryImages?: NewsImage[];
}
```

## 3. Mock Data (`src/data/newsDetails.ts` — new file)

- `newsDetailItems: Record<string, NewsDetailItem>` — keyed by slug
- One fully typed entry: `arda-ipitex-2026-awards`
  - `bodyTh`: realistic Thai narrative (~4–6 paragraphs) about the IPITEx 2026 ceremony, ARDA's 6 awards, and Radar4Flood's Silver Medal
  - `galleryImages`: optional array using paths under `/images/news/arda-ipitex-2026/`
  - `author`: `{ name: "Suphanut Mapiam", role: "นักวิจัย / Radar4Flood Project", bioTh: "..." }`
- `getPostDetail(slug: string): NewsDetailItem | undefined` — the single data-access function used by pages

When Sanity is integrated, replace this function's body with a GROQ query; no component changes needed.

## 4. Routing

| Route file | Behaviour |
|---|---|
| `src/pages/news/[slug].astro` (new) | `getStaticPaths()` from `Object.keys(newsDetailItems)` → renders `<NewsDetailPage post={post} lang="th" />` |
| `src/pages/en/news/[slug].astro` (replace staged file) | Same `getStaticPaths()` → renders `<NewsDetailPage post={post} lang="en" />` (component handles Thai-only notice) |

Both pages call `getPostDetail(Astro.params.slug)`. If `undefined`, render a 404 with `Astro.response.status = 404`.

## 5. Components

### `src/components/pages/NewsDetailPage.astro`

Props: `{ post: NewsDetailItem; lang: Lang }`

Renders inside `<Layout>` with detail-specific title, description, ogImage props.

DOM order (Layout A — single editorial column):

```
<article>
  back link                          ← newsDetailBack label, links to routeHref(lang, 'news')
  <figure> featured image            ← full-width, rounded-xl, aspect preserved
  <header>
    category chip + formatted date
    <h1> title                       ← localize({th, en}, lang) with Thai fallback
    author bar                       ← avatar · name · role (shown if post.author)
  </header>
  [Thai-only notice]                 ← shown when lang=en and !post.bodyEn
  <section class="prose">
    <PortableTextRenderer>           ← max-w ~720px, centred
  </section>
  [<NewsGallery>]                    ← shown only when post.galleryImages?.length
  [<AuthorCard>]                     ← shown only when post.author
  back link
</article>
```

### `src/components/news/PortableTextRenderer.astro`

Props: `{ blocks: PortableTextContent[]; lang: Lang }`

Iterates blocks; switches on `_type`:

| `_type` | Rendering |
|---|---|
| `block`, style `normal` | `<p>` with inline marks |
| `block`, style `h2` | `<h2>` with IBM Plex Sans Thai, navy colour |
| `block`, style `h3` | `<h3>` |
| `block`, style `blockquote` | `<blockquote>` with teal left border, italic, muted text |
| `image` | `<figure>` with `<img>` + optional `<figcaption>` from `localize(caption, lang)` |
| `callout` | `<aside>` — Secondary Container bg (`#D8EEF0`), teal text, rounded-xl |
| `code` | `<pre><code>` — Base Surface bg, monospace, padding, rounded |

Inline marks within spans: `strong` → `<strong>`, `em` → `<em>`, `link` → `<a href target="_blank" rel="noopener">` (if `blank` true, else same tab).

No JavaScript; pure Astro SSG render.

### `src/components/news/NewsGallery.astro`

Props: `{ images: NewsImage[]; lang: Lang }`

- Section heading using `newsDetailGallery` label
- `<ul>` grid: `grid-cols-2 sm:grid-cols-3`, gap-3
- Each item: `<a href={image.src} target="_blank" rel="noopener"><img …></a>` with bilingual alt via `localize`
- No lightbox dependency

### `src/components/news/AuthorCard.astro`

Props: `{ author: NewsAuthor; lang: Lang }`

- `<section>` heading using `newsDetailAboutAuthor` label
- Card surface (`#FFFFFF`), `rounded-xl`, padding 24px
- Left column: optional `<img>` (rounded-full, 64px)
- Right column: name (title weight), role (muted), bio from `localize({th: bioTh, en: bioEn}, lang)` with Thai fallback

## 6. SEO

### `Layout.astro` changes

Add optional props `ogImage?: string` and `ogType?: string` (default `'website'`). Add a `<slot name="head">` so child pages can inject elements (JSON-LD, canonical, etc.) into `<head>`. In `<head>`:

```html
{ogImage && <meta property="og:image" content={ogImage} />}
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content={ogType ?? 'website'} />
<slot name="head" />
```

### Detail page additions (in `NewsDetailPage.astro`)

Pass `ogImage={post.image?.src}` and `ogType="article"` to `<Layout>`.

Add a `<script type="application/ld+json">` inside `<Layout>` slot (or via a `<slot name="head">` if Layout gains one) with:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "<titleTh or titleEn>",
  "image": "<featuredImage.src>",
  "datePublished": "<publishedAt>",
  "author": { "@type": "Person", "name": "<author.name or 'Radar4Flood'>"},
  "publisher": {
    "@type": "Organization",
    "name": "Radar4Flood"
  }
}
```

Note: `Layout.astro` needs a `<slot name="head">` (or equivalent) so the detail page can inject the JSON-LD into `<head>`. Add this as part of the Layout update.

## 7. i18n Labels

Four new keys added to `src/lib/i18n/dictionary.ts` (Thai only; English falls back to Thai per existing strategy):

| Key | Thai value |
|---|---|
| `newsDetailBack` | `'← กลับไปข่าวทั้งหมด'` (reuse existing `newsBackToArchive` — verify they're equivalent first) |
| `newsDetailGallery` | `'ภาพประกอบเพิ่มเติม'` |
| `newsDetailAboutAuthor` | `'เกี่ยวกับผู้เขียน'` |
| `newsDetailThaiOnly` | `'บทความนี้มีให้อ่านเป็นภาษาไทยเท่านั้น'` |

Note: `newsBackToArchive` already exists in the dictionary. During implementation, check whether it duplicates `newsDetailBack` and consolidate if so.

## 8. Housekeeping

- Add `.superpowers/` to `.gitignore`
- `npm run build` and `npm run check` must pass before the branch is considered complete
