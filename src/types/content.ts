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

/**
 * A news post summary used in listing cards and homepage previews.
 * Matches the Sanity `post` schema shape for easy migration.
 */
export interface NewsItem {
	slug: string;
	title: BilingualText;
	excerpt: BilingualText;
	category: string;
	publishedAt: string;
	href: string;
	featured?: boolean;
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
