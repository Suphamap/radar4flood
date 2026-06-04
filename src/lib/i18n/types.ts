/**
 * Supported UI languages.
 */
export type Lang = 'th' | 'en';

/**
 * A bilingual text pair. Both fields are optional to allow graceful fallback
 * when only one language is available (common for publications).
 */
export interface BilingualText {
	th?: string;
	en?: string;
}

/**
 * Pick the correct language string from a bilingual pair.
 * Falls back to the other language if the requested one is missing.
 */
export function localize(text: BilingualText, lang: Lang): string {
	return (lang === 'en' ? text.en ?? text.th : text.th ?? text.en) ?? '';
}
