# News System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fully functional news detail page (Layout A — single editorial column) with Sanity schema definitions, typed mock ARDA post, custom Portable Text renderer, gallery, author card, and OG + JSON-LD SEO.

**Architecture:** Data flows from `src/data/newsDetails.ts` (mock today, GROQ later) through `getPostDetail(slug)` into `NewsDetailPage.astro`. All new leaf components (`PortableTextRenderer`, `NewsGallery`, `AuthorCard`) are pure Astro — no JavaScript shipped to the browser. Sanity schema files live in `studio/schemas/` and are excluded from the root TypeScript compilation.

**Tech Stack:** Astro 6, TypeScript (strict), Tailwind CSS v4 (`@tailwindcss/vite`), no new npm dependencies.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `.gitignore` | Exclude `.superpowers/` |
| Modify | `tsconfig.json` | Exclude `studio/` from root TS compilation |
| Modify | `src/types/content.ts` | Add `NewsAuthor`, `PortableText*` types, `NewsDetailItem` |
| Create | `src/data/newsDetails.ts` | ARDA mock post + `getPostDetail()` |
| Create | `studio/schemas/author.ts` | Sanity author schema definition |
| Create | `studio/schemas/category.ts` | Sanity category schema definition |
| Create | `studio/schemas/post.ts` | Sanity post schema definition |
| Create | `studio/schemas/index.ts` | Schema registry |
| Modify | `src/layouts/Layout.astro` | Add `ogImage`, `ogType` props + `<slot name="head">` |
| Modify | `src/lib/i18n/dictionary.ts` | Add 3 new label keys |
| Create | `src/pages/news/[slug].astro` | Thai detail route |
| Modify | `src/pages/en/news/[slug].astro` | Replace rewrite shim with `lang="en"` render |
| Create | `src/components/news/AuthorCard.astro` | Author photo + name + role + bio |
| Create | `src/components/news/NewsGallery.astro` | Responsive image grid, links to full image |
| Create | `src/components/news/PortableTextRenderer.astro` | Custom Portable Text → HTML renderer |
| Create | `src/components/pages/NewsDetailPage.astro` | Full detail page shell (Layout A) |

---

## Task 1: Housekeeping

**Files:**
- Modify: `.gitignore`
- Modify: `tsconfig.json`

- [ ] **Step 1: Add `.superpowers/` to `.gitignore`**

Open `.gitignore` and append at the end:

```
# brainstorming visual companion
.superpowers/
```

- [ ] **Step 2: Exclude `studio/` from root TypeScript compilation**

Open `tsconfig.json` and update:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "studio"]
}
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore tsconfig.json
git commit -m "chore: exclude .superpowers and studio from root ts compilation"
```

---

## Task 2: TypeScript types

**Files:**
- Modify: `src/types/content.ts`

- [ ] **Step 1: Append new types to `src/types/content.ts`**

Add the following block at the end of the file (after the `StaffMember` interface):

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

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors. The new types reference `BilingualText` and `NewsItem`/`NewsImage` which are already in the file.

- [ ] **Step 3: Commit**

```bash
git add src/types/content.ts
git commit -m "feat(types): add Portable Text types, NewsAuthor, NewsDetailItem"
```

---

## Task 3: Mock data

**Files:**
- Create: `src/data/newsDetails.ts`

- [ ] **Step 1: Create `src/data/newsDetails.ts`**

```typescript
import type { NewsDetailItem } from '../types/content';

export const newsDetailItems: Record<string, NewsDetailItem> = {
	'arda-ipitex-2026-awards': {
		slug: 'arda-ipitex-2026-awards',
		category: 'Publication',
		title: {
			th: 'ARDA พางานวิจัยเกษตรไทยคว้า 6 รางวัล บนเวทีโลก IPITEx 2026',
		},
		excerpt: {
			th: 'สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) ส่งผลงานวิจัย สิ่งประดิษฐ์ และนวัตกรรมเข้าร่วมงาน IPITEx 2026 พร้อมคว้ารางวัลรวม 6 รางวัล โดยมี Radar4Flood เป็นหนึ่งในผลงานที่ได้รับ Silver Medal Award',
		},
		publishedAt: '2026-01-09',
		image: {
			src: '/images/news/arda-ipitex-2026/main.JPG',
			alt: {
				th: 'ภาพหลักข่าว ARDA และผลงานวิจัยเกษตรไทยบนเวที IPITEx 2026',
			},
			width: 1369,
			height: 1027,
		},
		featured: true,
		archiveSection: 'top',
		galleryImages: [
			{
				src: '/images/news/arda-ipitex-2026/gallery-1.JPG',
				alt: { th: 'ทีมนักวิจัยถ่ายภาพร่วมกันบนเวที IPITEx 2026' },
			},
			{
				src: '/images/news/arda-ipitex-2026/gallery-2.JPG',
				alt: { th: 'รางวัล Silver Medal Award ของโครงการ Radar4Flood' },
			},
			{
				src: '/images/news/arda-ipitex-2026/gallery-3.JPG',
				alt: { th: 'บูธจัดแสดงผลงานนวัตกรรมเกษตรไทยในงาน IPITEx 2026' },
			},
		],
		author: {
			name: 'Suphanut Mapiam',
			role: 'นักวิจัย · โครงการ Radar4Flood',
			bioTh:
				'นักวิจัยด้านอุทกวิทยาเรดาร์และระบบเตือนภัยน้ำท่วม ปัจจุบันเป็นส่วนหนึ่งของทีมพัฒนาระบบ Radar4Flood ภายใต้การสนับสนุนของสำนักงานพัฒนาการวิจัยการเกษตร (ARDA)',
		},
		bodyTh: [
			{
				_type: 'block',
				_key: 'b1',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b1s1',
						text: 'เมื่อวันที่ 9 มกราคม 2569 สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) หรือ ARDA ได้นำผลงานวิจัย สิ่งประดิษฐ์ และนวัตกรรมจากนักวิจัยในเครือข่ายเข้าร่วมแสดงและแข่งขันในงาน International Paris Invention, Innovation and Technology Exhibition (IPITEx 2026) ณ กรุงเทพมหานคร ซึ่งเป็นเวทีระดับนานาชาติที่รวบรวมสิ่งประดิษฐ์และนวัตกรรมจากประเทศต่าง ๆ ทั่วโลก',
						marks: [],
					},
				],
			},
			{
				_type: 'block',
				_key: 'b2',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b2s1',
						text: 'ในปีนี้ ARDA ส่งผลงานเข้าร่วมทั้งสิ้น 7 ผลงาน และสามารถคว้ารางวัลได้รวม 6 รางวัล ประกอบด้วยรางวัลระดับต่าง ๆ จาก International Federation of Inventors’ Associations (IFIA) สะท้อนให้เห็นถึงคุณภาพและความโดดเด่นของงานวิจัยเกษตรไทยในระดับนานาชาติ',
						marks: [],
					},
				],
			},
			{
				_type: 'block',
				_key: 'b3',
				style: 'h2',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b3s1',
						text: 'Radar4Flood คว้า Silver Medal Award',
						marks: [],
					},
				],
			},
			{
				_type: 'block',
				_key: 'b4',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b4s1',
						text: 'หนึ่งในผลงานที่ได้รับรางวัลคือ ',
						marks: [],
					},
					{
						_type: 'span',
						_key: 'b4s2',
						text: 'ระบบ Radar4Flood',
						marks: ['strong'],
					},
					{
						_type: 'span',
						_key: 'b4s3',
						text: ' ซึ่งเป็นระบบคาดการณ์น้ำท่วมที่ใช้ข้อมูลเรดาร์ตรวจอากาศและแบบจำลองทางอุทกวิทยา โดยสามารถคว้า Silver Medal Award จากเวทีการประกวดดังกล่าว รางวัลนี้ถือเป็นการยืนยันคุณค่าของงานวิจัยที่มุ่งเน้นการนำเทคโนโลยีเรดาร์มาใช้เพื่อประโยชน์สาธารณะในด้านการจัดการภัยพิบัติทางน้ำ',
						marks: [],
					},
				],
			},
			{
				_type: 'callout',
				_key: 'c1',
				bodyTh:
					'Radar4Flood ได้รับรางวัล Silver Medal Award จาก IPITEx 2026 — งานประกวดสิ่งประดิษฐ์นานาชาติที่จัดขึ้นในประเทศไทย',
			},
			{
				_type: 'block',
				_key: 'b5',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b5s1',
						text: 'ระบบ Radar4Flood ถูกพัฒนาขึ้นภายใต้ความร่วมมือระหว่างนักวิจัยด้านอุทกวิทยาและวิศวกรรมเรดาร์ โดยมีเป้าหมายในการเพิ่มความแม่นยำของการพยากรณ์ฝนและน้ำท่วมฉับพลันในพื้นที่เสี่ยงภัยของประเทศไทย ระบบนี้รวมข้อมูลจากเครือข่ายเรดาร์ตรวจอากาศของกรมอุตุนิยมวิทยาเข้ากับแบบจำลอง WRF และ ROMS เพื่อให้ได้ผลการคาดการณ์ที่มีความละเอียดเชิงพื้นที่และเวลาสูง',
						marks: [],
					},
				],
			},
			{
				_type: 'block',
				_key: 'b6',
				style: 'h2',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b6s1',
						text: 'ความสำคัญของเวที IPITEx',
						marks: [],
					},
				],
			},
			{
				_type: 'block',
				_key: 'b7',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 'b7s1',
						text: 'IPITEx เป็นงานแสดงสิ่งประดิษฐ์และนวัตกรรมระดับนานาชาติที่จัดขึ้นประจำทุกปีในประเทศไทย ภายใต้การสนับสนุนของ IFIA ซึ่งเป็นองค์กรสมาพันธ์นักประดิษฐ์นานาชาติ งานนี้เปิดโอกาสให้นักวิจัยและนักประดิษฐ์จากทั่วโลกนำผลงานมาแสดงและรับการประเมินจากคณะกรรมการผู้เชี่ยวชาญระดับสากล',
						marks: [],
					},
				],
			},
		],
	},
};

export function getPostDetail(slug: string): NewsDetailItem | undefined {
	return newsDetailItems[slug];
}
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/newsDetails.ts
git commit -m "feat(data): add ARDA IPITEx 2026 typed mock news detail post"
```

---

## Task 4: Sanity schema files

**Files:**
- Create: `studio/schemas/author.ts`
- Create: `studio/schemas/category.ts`
- Create: `studio/schemas/post.ts`
- Create: `studio/schemas/index.ts`

These files document the Sanity Studio schema. They contain no `sanity` imports (the package is not installed yet) and are excluded from the root TypeScript compilation by `tsconfig.json`. Convert to use `defineType`/`defineField` from `'sanity'` when deploying the Studio.

- [ ] **Step 1: Create `studio/schemas/author.ts`**

```typescript
// Sanity Studio schema for the 'author' document type.
// Mirrors the NewsAuthor interface in src/types/content.ts.
// To activate: install sanity, import defineField/defineType, wrap fields.

export const authorSchema = {
	name: 'author',
	title: 'Author',
	type: 'document',
	fields: [
		{ name: 'name', title: 'Name', type: 'string' },
		{ name: 'role', title: 'Role', type: 'string' },
		{ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
		{ name: 'bioTh', title: 'Bio (Thai)', type: 'text' },
		{ name: 'bioEn', title: 'Bio (English)', type: 'text' },
	],
};
```

- [ ] **Step 2: Create `studio/schemas/category.ts`**

```typescript
// Sanity Studio schema for the 'category' document type.

export const categorySchema = {
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		{ name: 'titleTh', title: 'Title (Thai)', type: 'string' },
		{ name: 'titleEn', title: 'Title (English)', type: 'string' },
		{ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleTh' } },
		{ name: 'descriptionTh', title: 'Description (Thai)', type: 'text' },
		{ name: 'descriptionEn', title: 'Description (English)', type: 'text' },
	],
};
```

- [ ] **Step 3: Create `studio/schemas/post.ts`**

```typescript
// Sanity Studio schema for the 'post' document type.
// Mirrors NewsDetailItem in src/types/content.ts.
// Portable Text vocabulary: normal/h2/h3/blockquote + strong/em/link + image/callout/code blocks.

const portableTextConfig = [
	{
		type: 'block',
		styles: [
			{ title: 'Normal', value: 'normal' },
			{ title: 'H2', value: 'h2' },
			{ title: 'H3', value: 'h3' },
			{ title: 'Blockquote', value: 'blockquote' },
		],
		marks: {
			decorators: [
				{ title: 'Strong', value: 'strong' },
				{ title: 'Emphasis', value: 'em' },
			],
			annotations: [
				{
					name: 'link',
					type: 'object',
					fields: [
						{ name: 'href', type: 'url', title: 'URL' },
						{ name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true },
					],
				},
			],
		},
	},
	{
		type: 'image',
		name: 'image',
		options: { hotspot: true },
		fields: [
			{ name: 'altTh', type: 'string', title: 'Alt text (Thai)' },
			{ name: 'altEn', type: 'string', title: 'Alt text (English)' },
			{ name: 'captionTh', type: 'string', title: 'Caption (Thai)' },
			{ name: 'captionEn', type: 'string', title: 'Caption (English)' },
		],
	},
	{
		type: 'object',
		name: 'callout',
		title: 'Callout',
		fields: [
			{ name: 'bodyTh', type: 'text', title: 'Body (Thai)' },
			{ name: 'bodyEn', type: 'text', title: 'Body (English)' },
		],
	},
	{
		type: 'object',
		name: 'code',
		title: 'Code Block',
		fields: [
			{ name: 'language', type: 'string', title: 'Language (e.g. bash, python)' },
			{ name: 'code', type: 'text', title: 'Code' },
		],
	},
];

export const postSchema = {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{ name: 'titleTh', title: 'Title (Thai)', type: 'string' },
		{ name: 'titleEn', title: 'Title (English)', type: 'string' },
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'titleTh' },
			// readOnly after publishedAt is set — enforce in Studio validation when deploying
		},
		{ name: 'excerptTh', title: 'Excerpt (Thai)', type: 'text' },
		{ name: 'excerptEn', title: 'Excerpt (English)', type: 'text' },
		{ name: 'bodyTh', title: 'Body (Thai)', type: 'array', of: portableTextConfig },
		{ name: 'bodyEn', title: 'Body (English)', type: 'array', of: portableTextConfig },
		{ name: 'publishedAt', title: 'Published At', type: 'datetime' },
		{
			name: 'featuredImage',
			title: 'Featured Image',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{ name: 'altTh', type: 'string', title: 'Alt text (Thai)' },
				{ name: 'altEn', type: 'string', title: 'Alt text (English)' },
			],
		},
		{
			name: 'galleryImages',
			title: 'Gallery Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
					fields: [
						{ name: 'altTh', type: 'string', title: 'Alt text (Thai)' },
						{ name: 'altEn', type: 'string', title: 'Alt text (English)' },
					],
				},
			],
		},
		{ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
		{ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
		{ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false },
	],
	orderings: [
		{
			title: 'Published Date (Newest)',
			name: 'publishedAtDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }],
		},
	],
};
```

- [ ] **Step 4: Create `studio/schemas/index.ts`**

```typescript
import { authorSchema } from './author';
import { categorySchema } from './category';
import { postSchema } from './post';

export const schemaTypes = [postSchema, authorSchema, categorySchema];
```

- [ ] **Step 5: Commit**

```bash
git add studio/
git commit -m "feat(studio): add Sanity schema definitions for post, author, category"
```

---

## Task 5: Layout SEO props

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Replace `src/layouts/Layout.astro` with the updated version**

The full file content — the only changes are adding `ogImage` and `ogType` props, the four OG meta tags, and `<slot name="head">`:

```astro
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import type { Lang } from '../lib/i18n';

interface Props {
	title?: string;
	description?: string;
	lang?: Lang;
	ogImage?: string;
	ogType?: string;
}

const {
	title = 'Radar4Flood',
	description = 'Radar4Flood public academic website for radar-based flood forecasting.',
	lang = 'th',
	ogImage,
	ogType = 'website',
} = Astro.props;
---

<!doctype html>
<html lang={lang}>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="description" content={description} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content={ogType} />
		{ogImage && <meta property="og:image" content={ogImage} />}
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="icon" href="/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap"
			rel="stylesheet"
		/>
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
		<slot name="head" />
	</head>
	<body>
		<Header lang={lang} />
		<main>
			<slot />
		</main>
		<Footer lang={lang} />
	</body>
</html>
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors. Existing callers (`HomePage.astro`, `NewsArchivePage.astro`) pass no OG props, which is fine — all new props are optional with defaults.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat(layout): add ogImage, ogType props and head slot for SEO"
```

---

## Task 6: i18n labels

**Files:**
- Modify: `src/lib/i18n/dictionary.ts`

The spec called for 4 keys but `newsBackToArchive` already exists and serves as the back link. Only 3 new keys are needed: `newsDetailGallery`, `newsDetailAboutAuthor`, `newsDetailThaiOnly`.

- [ ] **Step 1: Add 3 new keys to the `th` object in `src/lib/i18n/dictionary.ts`**

Add after the `newsBackToArchive` line (around line 62):

```typescript
	// News detail
	newsDetailGallery: 'ภาพประกอบเพิ่มเติม',
	newsDetailAboutAuthor: 'เกี่ยวกับผู้เขียน',
	newsDetailThaiOnly: 'บทความนี้มีให้อ่านเป็นภาษาไทยเท่านั้น',
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors. The `LabelKey` type is derived from `typeof dictionary['th']` so the new keys become valid automatically.

- [ ] **Step 3: Commit**

```bash
git add src/lib/i18n/dictionary.ts
git commit -m "feat(i18n): add newsDetailGallery, newsDetailAboutAuthor, newsDetailThaiOnly labels"
```

---

## Task 7: Routing pages

**Files:**
- Create: `src/pages/news/[slug].astro`
- Modify: `src/pages/en/news/[slug].astro`

- [ ] **Step 1: Create `src/pages/news/[slug].astro`**

```astro
---
import type { GetStaticPaths } from 'astro';
import { getPostDetail, newsDetailItems } from '../../data/newsDetails';
import NewsDetailPage from '../../components/pages/NewsDetailPage.astro';

export const getStaticPaths: GetStaticPaths = () =>
	Object.keys(newsDetailItems).map((slug) => ({ params: { slug } }));

const { slug } = Astro.params;
const post = getPostDetail(slug);

if (!post) {
	return Astro.redirect('/news');
}
---

<NewsDetailPage post={post} lang="th" />
```

- [ ] **Step 2: Replace `src/pages/en/news/[slug].astro`**

The current file is a rewrite shim. Replace it entirely:

```astro
---
import type { GetStaticPaths } from 'astro';
import { getPostDetail, newsDetailItems } from '../../../data/newsDetails';
import NewsDetailPage from '../../../components/pages/NewsDetailPage.astro';

export const getStaticPaths: GetStaticPaths = () =>
	Object.keys(newsDetailItems).map((slug) => ({ params: { slug } }));

const { slug } = Astro.params;
const post = getPostDetail(slug);

if (!post) {
	return Astro.redirect('/en/news');
}
---

<NewsDetailPage post={post} lang="en" />
```

- [ ] **Step 3: Commit (skip type-check here)**

`NewsDetailPage` is created in Tasks 8–11. Running `npm run check` now would fail on the missing import. Skip it — the final check in Task 12 covers the full tree.

- [ ] **Step 4: Commit**

```bash
git add src/pages/news/\[slug\].astro src/pages/en/news/\[slug\].astro
git commit -m "feat(routing): add Thai and English news detail routes"
```

---

## Task 8: AuthorCard component

**Files:**
- Create: `src/components/news/AuthorCard.astro`

- [ ] **Step 1: Create `src/components/news/AuthorCard.astro`**

```astro
---
import type { NewsAuthor } from '../../types/content';
import type { Lang } from '../../lib/i18n';
import { localize, t } from '../../lib/i18n';

interface Props {
	author: NewsAuthor;
	lang: Lang;
}

const { author, lang } = Astro.props;
const bio = localize({ th: author.bioTh, en: author.bioEn }, lang);
---

<section>
	<p class="mb-4 text-xs font-bold uppercase tracking-widest text-r4f-muted">
		{t(lang, 'newsDetailAboutAuthor')}
	</p>
	<div class="flex gap-5 rounded-2xl bg-r4f-card p-6 sm:p-7">
		{
			author.image ? (
				<img
					src={author.image}
					alt={author.name}
					width={64}
					height={64}
					class="h-16 w-16 shrink-0 rounded-full object-cover"
				/>
			) : (
				<div
					class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-r4f-low text-lg font-bold text-r4f-teal"
					aria-hidden="true"
				>
					{author.name.charAt(0)}
				</div>
			)
		}
		<div class="min-w-0">
			<p class="text-base font-semibold text-r4f-navy">{author.name}</p>
			<p class="mt-0.5 text-sm text-r4f-muted">{author.role}</p>
			{bio && <p class="mt-3 text-sm leading-7 text-r4f-ink">{bio}</p>}
		</div>
	</div>
</section>
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors from this file (errors for missing `NewsDetailPage` may still appear — that's expected).

- [ ] **Step 3: Commit**

```bash
git add src/components/news/AuthorCard.astro
git commit -m "feat(components): add AuthorCard with photo, name, role, bio"
```

---

## Task 9: NewsGallery component

**Files:**
- Create: `src/components/news/NewsGallery.astro`

- [ ] **Step 1: Create `src/components/news/NewsGallery.astro`**

```astro
---
import type { NewsImage } from '../../types/content';
import type { Lang } from '../../lib/i18n';
import { localize, t } from '../../lib/i18n';

interface Props {
	images: NewsImage[];
	lang: Lang;
}

const { images, lang } = Astro.props;
---

<section>
	<p class="mb-4 text-xs font-bold uppercase tracking-widest text-r4f-muted">
		{t(lang, 'newsDetailGallery')}
	</p>
	<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3" role="list">
		{
			images.map((image) => {
				const alt = localize(image.alt, lang);
				return (
					<li>
						<a
							href={image.src}
							target="_blank"
							rel="noopener noreferrer"
							class="block overflow-hidden rounded-xl"
						>
							<img
								src={image.src}
								alt={alt}
								width={image.width}
								height={image.height}
								class="aspect-[4/3] w-full object-cover transition duration-200 hover:scale-[1.03]"
								loading="lazy"
							/>
						</a>
					</li>
				);
			})
		}
	</ul>
</section>
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no new errors from this file.

- [ ] **Step 3: Commit**

```bash
git add src/components/news/NewsGallery.astro
git commit -m "feat(components): add NewsGallery responsive image grid"
```

---

## Task 10: PortableTextRenderer component

**Files:**
- Create: `src/components/news/PortableTextRenderer.astro`

- [ ] **Step 1: Create `src/components/news/PortableTextRenderer.astro`**

```astro
---
import type { PortableTextContent, PortableTextSpan, PortableTextMarkDef } from '../../types/content';
import type { Lang } from '../../lib/i18n';
import { localize } from '../../lib/i18n';

interface Props {
	blocks: PortableTextContent[];
	lang: Lang;
}

const { blocks, lang } = Astro.props;

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function renderSpans(spans: PortableTextSpan[], markDefs: PortableTextMarkDef[]): string {
	const defsById = Object.fromEntries(markDefs.map((m) => [m._key, m]));
	return spans
		.map((span) => {
			let html = escapeHtml(span.text);
			for (const mark of span.marks) {
				if (mark === 'strong') {
					html = `<strong class="font-semibold text-r4f-ink">${html}</strong>`;
				} else if (mark === 'em') {
					html = `<em>${html}</em>`;
				} else {
					const def = defsById[mark];
					if (def?._type === 'link' && def.href) {
						const attrs = def.blank ? ' target="_blank" rel="noopener noreferrer"' : '';
						html = `<a href="${escapeHtml(def.href)}"${attrs} class="text-r4f-teal underline underline-offset-2 hover:text-r4f-navy">${html}</a>`;
					}
				}
			}
			return html;
		})
		.join('');
}
---

{
	blocks.map((block) => {
		if (block._type === 'block') {
			const html = renderSpans(block.children, block.markDefs);
			if (block.style === 'h2') {
				return (
					<h2
						class="mb-4 mt-10 text-2xl font-semibold leading-tight text-r4f-navy first:mt-0"
						set:html={html}
					/>
				);
			}
			if (block.style === 'h3') {
				return (
					<h3
						class="mb-3 mt-8 text-xl font-semibold leading-snug text-r4f-navy first:mt-0"
						set:html={html}
					/>
				);
			}
			if (block.style === 'blockquote') {
				return (
					<blockquote
						class="my-6 border-l-4 border-r4f-teal py-1 pl-5 italic text-r4f-muted"
						set:html={html}
					/>
				);
			}
			return <p class="mb-5 text-base leading-8 text-r4f-ink last:mb-0" set:html={html} />;
		}

		if (block._type === 'image') {
			const alt = block.alt ? localize(block.alt, lang) : '';
			const caption = block.caption ? localize(block.caption, lang) : '';
			return (
				<figure class="my-8 overflow-hidden rounded-xl">
					<img src={block.asset.url} alt={alt} class="w-full object-cover" loading="lazy" />
					{caption && (
						<figcaption class="mt-2 text-center text-sm text-r4f-muted">{caption}</figcaption>
					)}
				</figure>
			);
		}

		if (block._type === 'callout') {
			const body = localize({ th: block.bodyTh, en: block.bodyEn }, lang);
			return (
				<aside class="my-6 rounded-xl bg-[#D8EEF0] px-5 py-4 text-base text-r4f-teal">{body}</aside>
			);
		}

		if (block._type === 'code') {
			return (
				<pre class="my-6 overflow-x-auto rounded-xl bg-r4f-low px-5 py-4 text-sm">
					<code class={block.language ? `language-${block.language}` : ''}>{block.code}</code>
				</pre>
			);
		}

		return null;
	})
}
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors from this file.

- [ ] **Step 3: Commit**

```bash
git add src/components/news/PortableTextRenderer.astro
git commit -m "feat(components): add custom PortableTextRenderer for Astro SSG"
```

---

## Task 11: NewsDetailPage component

**Files:**
- Create: `src/components/pages/NewsDetailPage.astro`

- [ ] **Step 1: Create `src/components/pages/NewsDetailPage.astro`**

```astro
---
import Layout from '../../layouts/Layout.astro';
import PortableTextRenderer from '../news/PortableTextRenderer.astro';
import NewsGallery from '../news/NewsGallery.astro';
import AuthorCard from '../news/AuthorCard.astro';
import { localize, routeHref, t } from '../../lib/i18n';
import type { Lang } from '../../lib/i18n';
import type { NewsCategory, NewsDetailItem } from '../../types/content';

interface Props {
	post: NewsDetailItem;
	lang: Lang;
}

const { post, lang } = Astro.props;

const title = localize(post.title, lang);
const excerpt = localize(post.excerpt, lang);
const newsHref = routeHref(lang, 'news');

const dateFormatter = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'th-TH-u-ca-buddhist', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});
const dateLabel = dateFormatter.format(new Date(`${post.publishedAt}T00:00:00`));

const categoryLabels: Record<NewsCategory, string> = {
	Announcement: t(lang, 'categoryAnnouncement'),
	'Work Update': t(lang, 'categoryWorkUpdate'),
	Event: t(lang, 'categoryEvent'),
	Publication: t(lang, 'categoryPublication'),
	'Project Milestone': t(lang, 'categoryProjectMilestone'),
};

const showThaiOnly = lang === 'en' && !post.bodyEn;
const body = lang === 'th' ? post.bodyTh : (post.bodyEn ?? post.bodyTh);

const imageAlt = post.image ? localize(post.image.alt, lang) : '';

const jsonLd = JSON.stringify({
	'@context': 'https://schema.org',
	'@type': 'NewsArticle',
	headline: title,
	image: post.image?.src,
	datePublished: post.publishedAt,
	author: {
		'@type': 'Person',
		name: post.author?.name ?? 'Radar4Flood',
	},
	publisher: {
		'@type': 'Organization',
		name: 'Radar4Flood',
	},
});
---

<Layout
	title={`${title} | Radar4Flood`}
	description={excerpt}
	lang={lang}
	ogImage={post.image?.src}
	ogType="article"
>
	<Fragment slot="head">
		<script type="application/ld+json" set:html={jsonLd} />
	</Fragment>

	<article class="bg-r4f-surface pb-20">
		<div class="mx-auto max-w-[45rem] px-5 pt-8 sm:px-8">
			<a
				class="inline-flex items-center gap-1.5 text-sm font-semibold text-r4f-teal transition hover:text-r4f-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-r4f-sky"
				href={newsHref}
			>
				<span aria-hidden="true">←</span>
				{t(lang, 'newsBackToArchive')}
			</a>
		</div>

		{
			post.image && (
				<div class="mx-auto mt-6 max-w-[56rem] px-5 sm:px-8">
					<figure class="overflow-hidden rounded-2xl">
						<img
							src={post.image.src}
							alt={imageAlt}
							width={post.image.width}
							height={post.image.height}
							class="aspect-[16/9] w-full object-cover"
							loading="eager"
						/>
					</figure>
				</div>
			)
		}

		<header class="mx-auto mt-8 max-w-[45rem] px-5 sm:px-8">
			<div class="flex flex-wrap items-center gap-3">
				<span class="inline-flex rounded-full bg-[#EAF6F7] px-3 py-1 text-xs font-bold text-r4f-teal">
					{categoryLabels[post.category]}
				</span>
				<time class="text-sm font-semibold text-r4f-muted" datetime={post.publishedAt}>
					{dateLabel}
				</time>
			</div>

			<h1 class="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold leading-[1.22] text-r4f-navy">
				{title}
			</h1>

			{
				post.author && (
					<div class="mt-5 flex items-center gap-3">
						{post.author.image ? (
							<img
								src={post.author.image}
								alt={post.author.name}
								width={40}
								height={40}
								class="h-10 w-10 rounded-full object-cover"
							/>
						) : (
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-r4f-low text-sm font-bold text-r4f-teal"
								aria-hidden="true"
							>
								{post.author.name.charAt(0)}
							</div>
						)}
						<div>
							<p class="text-sm font-semibold text-r4f-navy">{post.author.name}</p>
							<p class="text-xs text-r4f-muted">{post.author.role}</p>
						</div>
					</div>
				)
			}
		</header>

		{
			showThaiOnly && (
				<div class="mx-auto mt-6 max-w-[45rem] px-5 sm:px-8">
					<p class="rounded-xl bg-r4f-low px-5 py-4 text-sm text-r4f-muted">
						{t(lang, 'newsDetailThaiOnly')}
					</p>
				</div>
			)
		}

		<section class="mx-auto mt-8 max-w-[45rem] px-5 sm:px-8">
			<PortableTextRenderer blocks={body} lang={lang} />
		</section>

		{
			post.galleryImages && post.galleryImages.length > 0 && (
				<div class="mx-auto mt-10 max-w-[56rem] px-5 sm:px-8">
					<NewsGallery images={post.galleryImages} lang={lang} />
				</div>
			)
		}

		{
			post.author && (
				<div class="mx-auto mt-12 max-w-[45rem] px-5 sm:px-8">
					<AuthorCard author={post.author} lang={lang} />
				</div>
			)
		}

		<div class="mx-auto mt-12 max-w-[45rem] px-5 sm:px-8">
			<a
				class="inline-flex items-center gap-1.5 text-sm font-semibold text-r4f-teal transition hover:text-r4f-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-r4f-sky"
				href={newsHref}
			>
				<span aria-hidden="true">←</span>
				{t(lang, 'newsBackToArchive')}
			</a>
		</div>
	</article>
</Layout>
```

- [ ] **Step 2: Run type-check**

```bash
npm run check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/pages/NewsDetailPage.astro
git commit -m "feat(components): add NewsDetailPage layout A with SEO and Portable Text"
```

---

## Task 12: Final verification

- [ ] **Step 1: Full type-check**

```bash
npm run check
```

Expected: exit 0, no errors.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: build completes successfully. Astro will statically generate `/news/arda-ipitex-2026-awards` and `/en/news/arda-ipitex-2026-awards`.

Check for these paths in the output:

```bash
ls dist/news/arda-ipitex-2026-awards/
ls dist/en/news/arda-ipitex-2026-awards/
```

Expected: both directories contain an `index.html` file.

- [ ] **Step 3: Spot-check the generated HTML**

```bash
grep -c "application/ld+json" dist/news/arda-ipitex-2026-awards/index.html
```

Expected: `1` (confirms JSON-LD was injected).

```bash
grep -c "og:image" dist/news/arda-ipitex-2026-awards/index.html
```

Expected: `1` (confirms OG image meta tag is present).

- [ ] **Step 4: Dev server smoke test**

```bash
npm run dev
```

Open `http://localhost:4321/news/arda-ipitex-2026-awards` in a browser and confirm:
- Featured image renders at top
- Category chip (ผลงานเผยแพร่) and date appear
- Thai title and body text are visible
- Callout box appears with teal background
- Gallery grid renders (images may 404 if files don't exist in `public/` — this is expected for placeholder paths)
- Author bar (initial avatar + Suphanut Mapiam) appears below the title
- AuthorCard with bio appears at the bottom
- Both back links work and navigate to `/news`

Open `http://localhost:4321/en/news/arda-ipitex-2026-awards` and confirm:
- Thai-only notice banner appears below the author bar
- Content is otherwise identical to the Thai route (Thai fallback body)

- [ ] **Step 5: Final commit (if any formatting fixes were applied)**

```bash
npm run format
git add -p
git commit -m "chore: format news detail components"
```

Only commit if `npm run format` changes any files.
