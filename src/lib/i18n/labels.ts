import type { Lang } from './types';

/**
 * UI label dictionaries for Thai and English.
 * Keys are dot-free identifiers used across components.
 */
const labels = {
	th: {
		// Navigation
		navHome: 'Home',
		navRadar4Flood: 'Radar4Flood',
		navNews: 'News',
		navPublication: 'Publication',
		navStaff: 'Staff',
		navContact: 'Contact Us',
		navMenu: 'เมนู',
		navLangSwitch: 'EN',

		// Hero
		heroBadge: 'ระบบเรดาร์เพื่อการคาดการณ์น้ำท่วม',
		heroTitle: 'Radar4Flood',
		heroSubtitle:
			'เชื่อมโยงข้อมูลเรดาร์อากาศ งานภาคสนาม และงานวิชาการ เพื่อสื่อสารการคาดการณ์น้ำท่วมอย่างชัดเจน',
		heroDescription:
			'เว็บไซต์สาธารณะสำหรับแนะนำโครงการ เผยแพร่ข่าวและกิจกรรม แสดงผลงานวิชาการ และนำผู้ใช้งานไปยังหน้า forecast ที่มีอยู่แล้ว',
		heroForecastCta: 'เข้าสู่หน้าพยากรณ์',
		heroNewsCta: 'อ่านข่าวล่าสุด',
		heroCaption: 'ภาพประกอบสำหรับสื่อสารงานเรดาร์และการตรวจวัดภาคสนาม',

		// Signals section
		signalsTitle: 'เว็บไซต์โครงการ ไม่ใช่หน้าจอ forecast',
		signalsDescription:
			'หน้าเว็บนี้จัดระเบียบข้อมูลสาธารณะของโครงการ ส่วนระบบพยากรณ์จะเปิดผ่านหน้า Radar4Flood โดยตรง',

		// News section
		newsLabel: 'News',
		newsTitle: 'ข่าวและความก้าวหน้า',
		newsDescription:
			'พื้นที่สำหรับประกาศ กิจกรรมภาคสนาม การประชุม ความร่วมมือ และหลักฐานความต่อเนื่องของงานวิจัย',
		newsViewAll: 'ดูข่าวทั้งหมด',

		// Publication section
		pubLabel: 'ผลงานวิชาการ',
		pubTitle: 'ผลงานและเอกสารวิชาการ',
		pubDescription: 'บทความวารสาร รายงานการประชุม และเอกสารโครงการจากทีมวิจัย Radar4Flood',
		pubViewAll: 'ดูผลงานวิชาการทั้งหมด',

		// Forecast CTA
		forecastCtaTitle: 'ทางเข้าระบบ Radar4Flood',
		forecastCtaDescription:
			'อ่านภาพรวมของระบบและเปิดหน้า forecast ที่มีอยู่แล้ว โดยไม่ปะปนกับเนื้อหาข่าวและเอกสารของเว็บไซต์หลัก',
		forecastCtaButton: 'ดูรายละเอียด Radar4Flood',

		// Footer
		footerTagline: 'โครงการวิจัยภายใต้ความร่วมมือทางวิชาการด้านเรดาร์อากาศและอุทกวิทยา',
	},

	en: {
		// Navigation
		navHome: 'Home',
		navRadar4Flood: 'Radar4Flood',
		navNews: 'News',
		navPublication: 'Publication',
		navStaff: 'Staff',
		navContact: 'Contact Us',
		navMenu: 'Menu',
		navLangSwitch: 'TH',

		// Hero
		heroBadge: 'Radar-Based Flood Forecasting System',
		heroTitle: 'Radar4Flood',
		heroSubtitle:
			'Connecting weather radar data, fieldwork, and academic research for clear flood forecasting communication',
		heroDescription:
			'A public website introducing the project, publishing news and activities, presenting publications, and linking to the existing forecast webpage.',
		heroForecastCta: 'Go to Forecast',
		heroNewsCta: 'Read Latest News',
		heroCaption: 'Radar station and fieldwork from the Radar4Flood project',

		// Signals section
		signalsTitle: 'A project website, not a forecast dashboard',
		signalsDescription:
			'This website organises public project information. The forecast system is accessible through the Radar4Flood page.',

		// News section
		newsLabel: 'News',
		newsTitle: 'News & Progress',
		newsDescription:
			'Announcements, field activities, conferences, collaborations, and evidence of ongoing research.',
		newsViewAll: 'View all news',

		// Publication section
		pubLabel: 'Publications',
		pubTitle: 'Publications & Documents',
		pubDescription: 'Journal articles, conference papers, and project documents from the Radar4Flood research team.',
		pubViewAll: 'View all publications',

		// Forecast CTA
		forecastCtaTitle: 'Access Radar4Flood System',
		forecastCtaDescription:
			'Read about the system overview and access the existing forecast page, separate from the news and documentation on this website.',
		forecastCtaButton: 'View Radar4Flood Details',

		// Footer
		footerTagline:
			'A research project under academic collaboration in weather radar and hydrology.',
	},
} as const;

export type LabelKey = keyof (typeof labels)['th'];

/**
 * Get a UI label for the given language.
 */
export function t(lang: Lang, key: LabelKey): string {
	return labels[lang][key];
}
