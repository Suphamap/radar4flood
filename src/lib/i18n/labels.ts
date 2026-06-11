import type { Lang } from './types';
import { dictionary } from './dictionary';

export type LabelKey = keyof (typeof dictionary)['th'];
type LabelDictionary = Partial<Record<LabelKey, string>>;

/**
 * Get a UI label for the given language.
 * English UI copy is intentionally omitted until the final translation stage,
 * so unresolved labels fall back to Thai.
 */
export function t(lang: Lang, key: LabelKey): string {
	const labels = dictionary[lang] as LabelDictionary;
	return labels[key] ?? dictionary.th[key];
}
