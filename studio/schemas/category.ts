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
