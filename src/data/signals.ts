import type { ProjectSignal } from '../types/content';

/**
 * Project signal cards for the homepage overview section.
 * Temporary mock data — will migrate to Sanity or be replaced with CMS-driven content.
 */
export const projectSignals: ProjectSignal[] = [
	{
		label: 'Project focus',
		value: 'Radar rainfall',
		detail: {
			th: 'ข้อมูลเรดาร์อากาศสำหรับงานคาดการณ์น้ำท่วม',
			en: 'Weather radar data for flood forecasting',
		},
	},
	{
		label: 'Content flow',
		value: 'News + field work',
		detail: {
			th: 'ข่าว กิจกรรม และภาพการทำงานภาคสนาม',
			en: 'News, activities, and fieldwork photography',
		},
	},
	{
		label: 'Academic output',
		value: 'Publication records',
		detail: {
			th: 'บทความ รายงาน และเอกสารประกอบโครงการ',
			en: 'Articles, reports, and project documentation',
		},
	},
];
