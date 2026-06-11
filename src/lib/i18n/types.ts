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
 * English content fields are kept for the final translation stage, but the
 * website intentionally renders Thai copy until those translations are ready.
 */
export function localize(text: BilingualText, lang: Lang): string {
	return text.th ?? (lang === 'en' ? text.en : undefined) ?? text.en ?? '';
}
