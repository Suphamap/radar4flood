import type { BilingualText } from '../lib/i18n';

/**
 * Navigation item used in header and mobile menu.
 */
export interface NavItem {
	labelKey: string;
	href: string;
}

/**
 * A project signal card shown in the overview section.
 */
export interface ProjectSignal {
	label: string;
	value: string;
	detail: BilingualText;
}

export type NewsCategory = 'Announcement' | 'Work Update' | 'Event' | 'Publication' | 'Project Milestone';

export type NewsArchiveSection = 'top' | 'latest' | 'highlight' | 'more';

export interface NewsImage {
	src: string;
	alt: BilingualText;
	width?: number;
	height?: number;
	caption?: BilingualText;
}

/**
 * A news post summary used in listing cards and homepage previews.
 * Matches the Sanity `post` schema shape for easy migration.
 */
export interface NewsItem {
	slug: string;
	title: BilingualText;
	excerpt: BilingualText;
	category: NewsCategory;
	publishedAt: string;
	image?: NewsImage;
	featured?: boolean;
	archiveSection?: NewsArchiveSection;
	isToday?: boolean;
}

/**
 * A publication entry. Matches the Sanity `publication` schema shape.
 */
export interface PublicationItem {
	type: string;
	title: BilingualText;
	detail: BilingualText;
	authors?: string;
	year?: number;
	venue?: string;
	doi?: string;
	externalUrl?: string;
}

/**
 * A staff member profile. Matches the Sanity `staffMember` schema shape.
 */
export interface StaffMember {
	name: string;
	role: BilingualText;
	affiliation: BilingualText;
	image?: string;
	bio: BilingualText;
	email?: string;
	profileUrl?: string;
	sortOrder?: number;
}

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
