import type { ProjectSignal } from '../types/content';

/**
 * Project signal cards for the homepage overview section.
 * Temporary mock data — will migrate to Sanity or be replaced with CMS-driven content.
 */
export const projectSignals: ProjectSignal[] = [
	{
		label: 'ข้อมูลเรดาร์',
		value: 'วิเคราะห์สัญญาณฝน',
		detail: {
			th: 'ศึกษาข้อมูลฝนจากเรดาร์อากาศเพื่อทำความเข้าใจสภาพฝนในพื้นที่',
			en: 'Weather radar data for flood forecasting',
		},
	},
	{
		label: 'การตรวจสอบภาคสนาม',
		value: 'เทียบกับพื้นที่จริง',
		detail: {
			th: 'ใช้การตรวจวัดและการสำรวจภาคสนามช่วยตรวจสอบบริบทของข้อมูล',
			en: 'News, activities, and fieldwork photography',
		},
	},
	{
		label: 'ผลลัพธ์งานวิจัย',
		value: 'เผยแพร่องค์ความรู้',
		detail: {
			th: 'สื่อสารความก้าวหน้าผ่านบทความ รายงาน และเอกสารวิชาการ',
			en: 'Articles, reports, and project documentation',
		},
	},
];
