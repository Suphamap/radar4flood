import type { NewsItem } from '../types/content';

/**
 * Mock news items for the homepage preview.
 * Temporary — will migrate to Sanity `post` queries.
 */
export const newsItems: NewsItem[] = [
	{
		slug: 'field-radar-station-monitoring',
		category: 'Work Update',
		title: {
			th: 'ติดตามสถานีเรดาร์และจุดตรวจวัดระดับน้ำในพื้นที่ศึกษา',
			en: 'Monitoring radar stations and water-level checkpoints in the study area',
		},
		excerpt: {
			th: 'ทีมโครงการรวบรวมข้อมูลภาคสนามเพื่อสนับสนุนการประเมินฝนจากเรดาร์และการสื่อสารความเสี่ยงน้ำท่วม',
			en: 'The project team collected field data to support radar rainfall estimation and flood risk communication.',
		},
		publishedAt: '2025-05-20',
		href: '/news',
		featured: true,
	},
	{
		slug: 'sanity-cms-news-structure',
		category: 'Project Milestone',
		title: {
			th: 'เตรียมโครงสร้างข้อมูลข่าวสำหรับ Sanity CMS',
			en: 'Preparing news data structure for Sanity CMS',
		},
		excerpt: {
			th: 'ข่าว กิจกรรม และภาพภาคสนามจะจัดการผ่านเอกสารสองภาษาในระบบ CMS',
			en: 'News, activities, and fieldwork images will be managed through bilingual CMS documents.',
		},
		publishedAt: '2025-05-12',
		href: '/news',
	},
	{
		slug: 'publication-format-design',
		category: 'Publication',
		title: {
			th: 'จัดรูปแบบรายการผลงานวิชาการให้ค้นหาและอ่านง่าย',
			en: 'Designing a readable and searchable publication listing',
		},
		excerpt: {
			th: 'รองรับชื่อบทความ ผู้แต่ง ปี วารสาร DOI และไฟล์ประกอบเมื่อข้อมูลพร้อม',
			en: 'Supports article title, authors, year, journal, DOI, and attached files when available.',
		},
		publishedAt: '2025-05-05',
		href: '/publication',
	},
];
