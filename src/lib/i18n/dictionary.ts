const th = {
	// Navigation
	navHome: 'Home',
	navRadar4Flood: 'Radar4Flood',
	navNews: 'News',
	navPublication: 'Publication',
	navStaff: 'Staff',
	navContact: 'Contact Us',
	navMenu: 'เมนู',
	navLangSwitch: 'EN',

	// Shared metadata
	homeMetaTitle: 'Radar4Flood | ระบบเรดาร์เพื่อการคาดการณ์น้ำท่วม',
	homeMetaDescription:
		'Radar4Flood introduces a radar-based flood forecasting academic project, with project updates, publications, staff information, and a path to the forecast webpage.',
	newsMetaTitle: 'ข่าวและความก้าวหน้า | Radar4Flood',
	newsMetaDescription:
		'คลังข่าวและความก้าวหน้าของโครงการ Radar4Flood ครอบคลุมประกาศ งานภาคสนาม กิจกรรม ผลงานเผยแพร่ และหมุดหมายโครงการ',

	// Hero
	heroBadge: 'ระบบเรดาร์เพื่อการคาดการณ์น้ำท่วม',
	heroTitle: 'Radar4Flood',
	heroSubtitle: 'เชื่อมโยงข้อมูลเรดาร์อากาศ งานภาคสนาม และงานวิชาการ เพื่อสื่อสารการคาดการณ์น้ำท่วมอย่างชัดเจน',
	heroDescription:
		'เว็บไซต์สาธารณะสำหรับแนะนำโครงการ เผยแพร่ข่าวและกิจกรรม แสดงผลงานวิชาการ และนำผู้ใช้งานไปยังหน้า forecast ที่มีอยู่แล้ว',
	heroForecastCta: 'เข้าสู่หน้าพยากรณ์',
	heroNewsCta: 'อ่านข่าวล่าสุด',
	heroCaption: 'ภาพประกอบสำหรับสื่อสารงานเรดาร์และการตรวจวัดภาคสนาม',

	// Signals section
	signalsTitle: 'เว็บไซต์โครงการ ไม่ใช่หน้าจอ forecast',
	signalsDescription: 'หน้าเว็บนี้จัดระเบียบข้อมูลสาธารณะของโครงการ ส่วนระบบพยากรณ์จะเปิดผ่านหน้า Radar4Flood โดยตรง',

	// News section
	newsLabel: 'News',
	newsTitle: 'ข่าวและความก้าวหน้า',
	newsDescription: 'พื้นที่สำหรับประกาศ กิจกรรมภาคสนาม การประชุม ความร่วมมือ และหลักฐานความต่อเนื่องของงานวิจัย',
	newsViewAll: 'ดูข่าวทั้งหมด',

	// News archive
	newsArchiveTitle: 'ข่าวและความก้าวหน้า',
	newsArchiveIntro:
		'คลังข่าวและงานวิจัยด้านอุทกภัยจากภาคีเครือข่ายนักวิจัยและหน่วยงาน เพื่อการตัดสินใจบนฐานข้อมูลและวิทยาศาสตร์',
	newsArchiveSearchLabel: 'Search News',
	newsArchiveSearchPlaceholder: 'ค้นหาข่าว งานวิจัย โครงการ หรือคำสำคัญ...',
	newsArchiveSearchButton: 'ค้นหา',
	newsArchiveBrowseLabel: 'Browse',
	newsArchiveAll: 'ทั้งหมด',
	newsArchiveAllTitle: 'ข่าวทั้งหมด',
	newsArchiveEmpty: 'ไม่พบข่าวที่ตรงกับคำค้นหาหรือตัวกรองที่เลือก',
	newsArchiveLoadMore: 'โหลดข่าวเพิ่มเติม',
	newsArchiveTopTitle: 'Top News',
	newsArchiveLatestTitle: 'Today / Latest',
	newsArchiveMoreTitle: 'More News',
	newsArchiveKicker: 'News Archive',
	newsArchiveSearchResultsKicker: 'Search Results',
	newsArchiveSearchResultsTitle: 'ผลลัพธ์สำหรับ',
	newsArchiveBrowseKicker: 'Browse',
	newsViewAllShort: 'ดูทั้งหมด',
	newsToday: 'วันนี้',
	newsBackToArchive: 'กลับไปหน้าข่าวทั้งหมด',
	newsMissingTitle: 'ไม่พบข่าวที่ต้องการ',
	newsMissingDescription: 'ข่าวนี้อาจถูกย้าย ลบออก หรือยังไม่ได้เผยแพร่ในเว็บไซต์',

	// Categories
	categoryAnnouncement: 'ประกาศ',
	categoryWorkUpdate: 'อัปเดตงาน',
	categoryEvent: 'กิจกรรม',
	categoryPublication: 'ผลงานเผยแพร่',
	categoryProjectMilestone: 'หมุดหมายโครงการ',

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
} as const;

/**
 * UI copy is Thai-only until the final translation stage.
 * English routes are kept structurally ready through Astro rewrite fallback.
 */
export const dictionary = {
	th,
	en: {},
} as const;
