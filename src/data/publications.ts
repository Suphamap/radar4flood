import type { PublicationItem } from '../types/content';

/**
 * Mock publication items for the homepage preview.
 * Temporary — will migrate to Sanity `publication` queries.
 */
export const publicationItems: PublicationItem[] = [
	{
		type: 'Journal Article',
		title: {
			th: 'Radar rainfall estimation for flood forecasting',
			en: 'Radar rainfall estimation for flood forecasting',
		},
		detail: {
			th: 'โครงสร้างสำหรับบทความวารสาร พร้อมปี ผู้แต่ง วารสาร และ DOI',
			en: 'Structure for journal articles with year, authors, journal, and DOI.',
		},
	},
	{
		type: 'Conference Paper',
		title: {
			th: 'Weather radar data for operational hydrology',
			en: 'Weather radar data for operational hydrology',
		},
		detail: {
			th: 'รองรับรายการประชุมวิชาการ บทคัดย่อ และลิงก์ไฟล์นำเสนอ',
			en: 'Supports conference listings, abstracts, and presentation file links.',
		},
	},
	{
		type: 'Project Report',
		title: {
			th: 'Flood monitoring field report',
			en: 'Flood monitoring field report',
		},
		detail: {
			th: 'พื้นที่สำหรับรายงานโครงการ ข้อมูลภาคสนาม และเอกสารอ้างอิง',
			en: 'Space for project reports, field data, and reference documents.',
		},
	},
];
