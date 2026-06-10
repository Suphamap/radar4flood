import type { NewsCategory, NewsItem } from '../types/content';

/**
 * Temporary mock news posts for the homepage preview and news archive listing.
 * The shape follows the planned Sanity `post` document closely so this data
 * can be replaced by GROQ results without redesigning the archive UI.
 */
export const newsItems: NewsItem[] = [
	{
		slug: 'arda-ipitex-2026-awards',
		category: 'Publication',
		title: {
			th: 'ARDA พางานวิจัยเกษตรไทยคว้า 6 รางวัล บนเวทีโลก IPITEx 2026',
		},
		excerpt: {
			th: 'สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) ส่งผลงานวิจัย สิ่งประดิษฐ์ และนวัตกรรมเข้าร่วมงาน IPITEx 2026 พร้อมคว้ารางวัลรวม 6 รางวัล โดยมี Radar4Flood เป็นหนึ่งในผลงานที่ได้รับ Silver Medal Award',
		},
		publishedAt: '2026-01-09',
		image: {
			src: '/images/news/arda-ipitex-2026/main.JPG',
			alt: {
				th: 'ภาพหลักข่าว ARDA และผลงานวิจัยเกษตรไทยบนเวที IPITEx 2026',
			},
			width: 1369,
			height: 1027,
		},
		featured: true,
		archiveSection: 'top',
	},
	{
		slug: 'wrf-roms-v2-update',
		category: 'Project Milestone',
		title: {
			th: 'อัปเดตแบบจำลองคาดการณ์ฝนระยะสั้น WRF-ROMS v2.1',
			en: 'Short-range rainfall model WRF-ROMS v2.1 updated',
		},
		excerpt: {
			th: 'เพิ่มความละเอียดเชิงพื้นที่และปรับปรุงการประมวลผล เพื่อเสริมความแม่นยำในการคาดการณ์ฝนและน้ำท่วมฉับพลัน',
			en: 'Higher spatial detail and processing improvements strengthen rainfall and flash-flood forecast quality.',
		},
		publishedAt: '2025-05-20',
		image: {
			src: '/images/Radar4flood_Horizon_PNG.png',
			alt: {
				th: 'ภาพกราฟิกเรดาร์และเส้นขอบฟ้าของระบบ Radar4Flood',
				en: 'Radar4Flood radar horizon graphic used for model update news',
			},
			width: 1200,
			height: 675,
		},
		archiveSection: 'latest',
		isToday: true,
	},
	{
		slug: 'radar4flood-training-workshop',
		category: 'Event',
		title: {
			th: 'อบรมเชิงปฏิบัติการการใช้งานระบบ Radar4Flood',
			en: 'Radar4Flood operational workshop held for partner agencies',
		},
		excerpt: {
			th: 'เสริมทักษะการใช้งานข้อมูลเรดาร์และเครื่องมือสำหรับหน่วยงานท้องถิ่นและภาคีเครือข่าย',
			en: 'The workshop strengthened practical use of radar data and tools for local agencies and project partners.',
		},
		publishedAt: '2025-05-20',
		image: {
			src: '/images/radar4flood-field-radar.png',
			alt: {
				th: 'ภาพสถานีเรดาร์ที่ใช้ประกอบข่าวการอบรมระบบ Radar4Flood',
				en: 'Radar station image representing a Radar4Flood training workshop',
			},
			width: 1824,
			height: 863,
		},
		archiveSection: 'latest',
		isToday: true,
	},
	{
		slug: 'station-maintenance-survey',
		category: 'Work Update',
		title: {
			th: 'สำรวจและบำรุงรักษาเรดาร์ตรวจฝนสถานีอุบลราชธานี',
			en: 'Radar station survey and maintenance in Ubon Ratchathani',
		},
		excerpt: {
			th: 'ทีมภาคสนามตรวจสอบอุปกรณ์และสภาพแวดล้อมรอบสถานี เพื่อรักษาคุณภาพข้อมูลฝน',
			en: 'The field team inspected station equipment and surroundings to maintain rainfall data quality.',
		},
		publishedAt: '2025-05-18',
		archiveSection: 'highlight',
	},
	{
		slug: 'national-radar-network-phase-two',
		category: 'Project Milestone',
		title: {
			th: 'ความก้าวหน้าโครงการพัฒนาเครือข่ายเรดาร์ตรวจฝนทั่วประเทศ ระยะที่ 2',
			en: 'Phase 2 progress on the national rainfall radar network',
		},
		excerpt: {
			th: 'สรุปความก้าวหน้าการติดตั้งและเชื่อมโยงข้อมูลสถานีในพื้นที่เป้าหมาย',
			en: 'Progress update on installation and data connectivity across target station areas.',
		},
		publishedAt: '2025-05-17',
		archiveSection: 'highlight',
	},
	{
		slug: 'display-template-water-level',
		category: 'Work Update',
		title: {
			th: 'ปรับปรุงระบบแสดงผลระดับน้ำแบบเรียลไทม์',
			en: 'Real-time water-level display refined for field monitoring',
		},
		excerpt: {
			th: 'ปรับลำดับข้อมูลและรูปแบบการอ่านค่าให้เหมาะกับการใช้งานของหน่วยงานป้องกันและบรรเทาสาธารณภัย',
			en: 'The display now prioritizes readings for disaster prevention and mitigation workflows.',
		},
		publishedAt: '2025-05-15',
		archiveSection: 'highlight',
	},
	{
		slug: 'temporary-service-maintenance',
		category: 'Announcement',
		title: {
			th: 'แจ้งปิดปรับปรุงระบบชั่วคราว',
			en: 'Temporary system maintenance notice',
		},
		excerpt: {
			th: 'เพื่อเพิ่มประสิทธิภาพการให้บริการ ระบบ Radar4Flood จะปิดปรับปรุงในวันเสาร์ที่ 18 พฤษภาคม 2568 เวลา 02:00-06:00 น.',
			en: 'Radar4Flood service will be temporarily unavailable on 18 May 2025 from 02:00-06:00 for maintenance.',
		},
		publishedAt: '2025-05-13',
		archiveSection: 'more',
	},
	{
		slug: 'automatic-water-level-sensor',
		category: 'Work Update',
		title: {
			th: 'ติดตั้งสถานีวัดระดับน้ำอัตโนมัติ ลุ่มน้ำยม จังหวัดสุโขทัย',
			en: 'Automatic water-level station installed in the Yom River basin',
		},
		excerpt: {
			th: 'เพิ่มจุดเฝ้าระวังเพื่อสนับสนุนการแจ้งเตือนน้ำท่วมล่วงหน้าในพื้นที่เสี่ยง',
			en: 'The new station expands early-warning coverage in flood-prone areas.',
		},
		publishedAt: '2025-05-12',
		image: {
			src: '/images/radar4flood-field-radar.png',
			alt: {
				th: 'สถานีตรวจวัดภาคสนามใกล้แหล่งน้ำสำหรับประกอบข่าวติดตั้งสถานีวัดระดับน้ำ',
				en: 'Field monitoring station near a waterway for water-level station installation news',
			},
			width: 1824,
			height: 863,
		},
		archiveSection: 'more',
	},
	{
		slug: 'radar4flood-forum-2025',
		category: 'Event',
		title: {
			th: 'สัมมนาเชิงวิชาการ Radar4Flood Forum 2025',
			en: 'Radar4Flood Forum 2025 academic seminar announced',
		},
		excerpt: {
			th: 'เวทีแลกเปลี่ยนองค์ความรู้ด้านอุทกภัยและการจัดการน้ำของประเทศไทย ระหว่างวันที่ 12-13 มิถุนายน 2568 ณ จ.ขอนแก่น',
			en: 'A knowledge-sharing forum on flood and water management in Thailand, 12-13 June 2025 in Khon Kaen.',
		},
		publishedAt: '2025-05-08',
		archiveSection: 'more',
	},
	{
		slug: 'annual-research-proposal-2568',
		category: 'Announcement',
		title: {
			th: 'ประกาศรับข้อเสนอโครงการวิจัย ประจำปี 2568',
			en: 'Call for annual research proposals 2025',
		},
		excerpt: {
			th: 'เปิดรับข้อเสนอโครงการวิจัยด้านอุทกภัยและภูมิอากาศ ตั้งแต่วันนี้ ถึง 30 มิถุนายน 2568',
			en: 'Research proposals in flood and climate topics are open for submission until 30 June 2025.',
		},
		publishedAt: '2025-05-07',
		archiveSection: 'more',
	},
];

export const newsCategories: NewsCategory[] = [
	'Announcement',
	'Work Update',
	'Event',
	'Publication',
	'Project Milestone',
];

export function getNewsBySection(section: NonNullable<NewsItem['archiveSection']>): NewsItem[] {
	return newsItems.filter((item) => item.archiveSection === section);
}
