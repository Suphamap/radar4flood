import { defaultLang, languageMeta } from './config';
import type { Lang } from './types';

export const routePaths = {
	home: '/',
	radar4flood: '/radar4flood',
	news: '/news',
	publication: '/publication',
	staff: '/staff',
	contact: '/contact',
} as const;

export type RouteKey = keyof typeof routePaths;

function splitPath(path: string): { pathname: string; suffix: string } {
	const match = path.match(/^([^?#]*)(.*)$/);
	return {
		pathname: match?.[1] || '/',
		suffix: match?.[2] || '',
	};
}

function normalizePath(path: string): string {
	if (!path || path === '/') return '/';
	return path.startsWith('/') ? path : `/${path}`;
}

export function routePath(lang: Lang, path: string): string {
	if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

	const { pathname, suffix } = splitPath(normalizePath(path));
	const normalizedPathname = pathname === '/en' ? '/' : pathname.replace(/^\/en(?=\/)/, '');

	if (lang === defaultLang) {
		return `${normalizedPathname}${suffix}`;
	}

	const prefix = languageMeta[lang].prefix;
	return `${normalizedPathname === '/' ? prefix : `${prefix}${normalizedPathname}`}${suffix}`;
}

export function routeHref(lang: Lang, route: RouteKey): string {
	return routePath(lang, routePaths[route]);
}

export function alternateRoutePath(lang: Lang, path: string): string {
	return routePath(lang === 'en' ? 'th' : 'en', path);
}
