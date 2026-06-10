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
