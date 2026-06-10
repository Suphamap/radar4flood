export const defaultLang = 'th';

export const languages = ['th', 'en'] as const;

export const languageMeta = {
	th: {
		label: 'ภาษาไทย',
		htmlLang: 'th',
		prefix: '',
	},
	en: {
		label: 'English',
		htmlLang: 'en',
		prefix: '/en',
	},
} as const;
