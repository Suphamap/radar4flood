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
