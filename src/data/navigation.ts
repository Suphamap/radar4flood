import type { NavItem } from '../types/content';

/**
 * Primary navigation items in the confirmed order.
 * labelKey maps to LabelKey in the i18n dictionaries (e.g. 'navHome' → t(lang, 'navHome')).
 */
export const navItems: NavItem[] = [
	{ labelKey: 'navHome', href: '/' },
	{ labelKey: 'navRadar4Flood', href: '/radar4flood' },
	{ labelKey: 'navNews', href: '/news' },
	{ labelKey: 'navPublication', href: '/publication' },
	{ labelKey: 'navStaff', href: '/staff' },
	{ labelKey: 'navContact', href: '/contact' },
];
