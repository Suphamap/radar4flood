import type { BilingualText } from '../lib/i18n';

/**
 * Content for the Radar4Flood system page, adapted from
 * docs/radar4flood_features.md. Shapes stay flat and bilingual-ready so the
 * content can migrate to Sanity later without reshaping components.
 */

export interface R4FCadenceStat {
	value: string;
	unit: BilingualText;
	label: BilingualText;
}

export interface R4FStoryAct {
	id: string;
	kicker: BilingualText;
	title: BilingualText;
	body: BilingualText;
	motif: 'gauges' | 'grid' | 'signal' | 'composite';
}

export interface R4FFeature {
	id: string;
	index: string;
	title: BilingualText;
	tagline: string;
	description: BilingualText;
	capabilities: string[];
	imageNote: BilingualText;
	imageRatio: string;
}

export interface R4FDataProduct {
	id: string;
	title: BilingualText;
	description: BilingualText;
	meta: string;
}

export interface R4FStat {
	value: number;
	decimals?: number;
	unit: BilingualText;
	label: BilingualText;
}

export interface R4FTelemetryStation {
	code: string;
	name: BilingualText;
	basin: BilingualText;
}

export interface R4FPlatformLink {
	label: BilingualText;
	href: string;
}

export const heroContent = {
	kicker: { th: 'Near Real-Time Flood Forecasting · ระบบพร้อมใช้งานจริง' },
	titleLead: { th: 'เห็นฝนทั้งลุ่มน้ำ' },
	titleAccent: { th: 'ก่อนน้ำจะมาถึง' },
	support: {
		th: 'Radar4Flood คาดการณ์น้ำท่วมฉับพลันและจำลองการกัดเซาะหน้าดินแบบใกล้เวลาจริงด้วยฝนจากเรดาร์ตรวจอากาศ ทำงานอัตโนมัติต่อเนื่องทั้งบนเว็บและมือถือ เพื่อให้ชุมชนและหน่วยงานเตรียมรับมือได้ทันท่วงที',
		en: 'Near real-time flood forecasting and soil erosion modelling based on radar rainfall products.',
	},
} as const;

export const heroCadence: R4FCadenceStat[] = [
	{
		value: '6–15',
		unit: { th: 'นาที' },
		label: { th: 'รอบการตรวจวัดข้อมูล' },
	},
	{
		value: '2',
		unit: { th: 'ชั่วโมง' },
		label: { th: 'พยากรณ์ฝนล่วงหน้าระยะสั้น' },
	},
	{
		value: '24',
		unit: { th: 'ชั่วโมง' },
		label: { th: 'คาดการณ์สถานการณ์ภัยล่วงหน้า' },
	},
];

export const serviceBasins: BilingualText[] = [
	{ th: 'ลุ่มน้ำคลองสวนหมาก · กำแพงเพชร' },
	{ th: 'ลุ่มน้ำลำตะคอง · นครราชสีมา' },
	{ th: 'ลุ่มน้ำทับมา–คลองสะพาน · ระยอง' },
];

export const whyRadarIntro = {
	kicker: { th: 'ทำไมต้องเรดาร์' },
	title: { th: 'ความแม่นยำเริ่มต้นที่ "ฝนตั้งต้น"' },
	body: {
		th: 'หัวใจของ Radar4Flood อยู่ที่ข้อมูลฝนที่ทั้งครอบคลุมพื้นที่และเที่ยงตรงเชิงปริมาณ ซึ่งเกิดจากการผสานจุดแข็งของเรดาร์ตรวจอากาศเข้ากับความแม่นยำของสถานีวัดฝนภาคพื้นดิน',
	},
} as const;

export const whyRadarActs: R4FStoryAct[] = [
	{
		id: 'gauge-limit',
		kicker: { th: 'ข้อจำกัด' },
		title: { th: 'สถานีวัดฝนเห็นเพียง "จุด"' },
		body: {
			th: 'สถานีภาคพื้นดินให้ค่าแม่นยำ แต่เป็นการวัดเฉพาะจุดที่กระจายห่างกัน ฝนบนภูเขาที่ก่อตัวเฉพาะที่และแปรปรวนสูงจึงอาจหลุดจากการตรวจวัด ทำให้ประเมินสถานการณ์ต้นน้ำคลาดเคลื่อน',
		},
		motif: 'gauges',
	},
	{
		id: 'radar-strength',
		kicker: { th: 'จุดแข็ง' },
		title: { th: 'เรดาร์เห็นฝน "ทั้งผืน"' },
		body: {
			th: 'เรดาร์ตรวจวัดฝนเชิงพื้นที่ต่อเนื่องครอบคลุมทุกตารางกริด (600 × 600 เมตร รวม 9,720 กริด) เห็นการก่อตัว ความเข้ม และทิศทางการเคลื่อนตัวของกลุ่มฝนทั่วทั้งลุ่มน้ำแบบใกล้เวลาจริง',
		},
		motif: 'grid',
	},
	{
		id: 'radar-bias',
		kicker: { th: 'แต่…' },
		title: { th: 'เรดาร์เองก็คลาดเคลื่อนได้' },
		body: {
			th: 'เรดาร์ไม่ได้วัดฝนโดยตรง แต่วัดการสะท้อนกลับของสัญญาณ (reflectivity) แล้วแปลงเป็นปริมาณฝน ความคลาดเคลื่อนจึงเกิดได้จากระยะทาง การบดบังของภูเขา และชนิดของฝนที่ต่างกัน',
		},
		motif: 'signal',
	},
	{
		id: 'bias-correction',
		kicker: { th: 'ทางออก' },
		title: { th: 'ปรับแก้ด้วยฝนจริง ทุกชั่วโมง' },
		body: {
			th: 'ระบบนำค่าฝนจริงจากสถานีภาคพื้นดินมาเทียบกับฝนเรดาร์ ณ ตำแหน่งเดียวกัน คำนวณค่า bias แล้วปรับแก้ทั้งกริดเป็นรายชั่วโมง ได้เป็น "ฝนเรดาร์คอมโพสิต" ที่ครอบคลุมแบบเรดาร์และเที่ยงตรงแบบสถานีวัดฝน',
		},
		motif: 'composite',
	},
];

export const whyRadarPayoff = {
	title: { th: 'ฝนตั้งต้นที่แม่นยำ คือรากฐานของทุกการคาดการณ์' },
	body: {
		th: 'ฝนเรดาร์ที่ปรับแก้แล้วคือ input ตั้งต้นของทั้งแบบจำลองน้ำท่วมและแบบจำลองการกัดเซาะหน้าดิน ยิ่งฝนตั้งต้นแม่นยำ ผลพยากรณ์น้ำท่า แผนที่น้ำท่วม และอัตราการกัดเซาะก็ยิ่งเชื่อถือได้',
	},
	flow: [{ th: 'ฝนเรดาร์คอมโพสิต' }, { th: 'Nowcasting ล่วงหน้า 2 ชม.' }, { th: 'แบบจำลองคาดการณ์ภัย 24 ชม.' }],
	imageNote: { th: 'ภาพผลิตภัณฑ์ฝนเรดาร์คอมโพสิตจริงจากระบบ' },
} as const;

export const featuresIntro = {
	kicker: { th: 'ฟีเจอร์หลัก' },
	title: { th: '8 เครื่องมือ ครอบคลุมตั้งแต่เม็ดฝนถึงการแจ้งเตือน' },
	body: {
		th: 'ทุกฟีเจอร์ทำงานต่อเนื่องกันเป็นระบบเดียว ตั้งแต่ภาพฝนเรดาร์ใกล้เวลาจริง ไปจนถึงการแจ้งเตือนภัยบนมือถือของผู้ใช้แต่ละคน',
	},
} as const;

export const features: R4FFeature[] = [
	{
		id: 'radar-animation',
		index: '01',
		title: { th: 'ภาพเคลื่อนไหวฝนเรดาร์' },
		tagline: 'Radar Rainfall Animation',
		description: {
			th: 'ชมฝนเรดาร์ใกล้เวลาจริงและข้อมูลย้อนหลังแบบภาพเคลื่อนไหว พร้อมฝนพยากรณ์ล่วงหน้า 2 ชั่วโมง อัปเดตทุก 10 นาที พร้อมแสดงตำแหน่งปัจจุบันของผู้ใช้บนแผนที่',
		},
		capabilities: ['กดปุ่ม Play', 'เลือกช่วงวันที่', 'เลื่อนแถบเวลา', 'ซูม / เต็มจอ', 'ดาวน์โหลดภาพ', 'ตำแหน่งผู้ใช้'],
		imageNote: { th: 'สกรีนช็อตหน้าภาพเคลื่อนไหวฝนเรดาร์' },
		imageRatio: '16 / 10',
	},
	{
		id: 'flash-flood',
		index: '02',
		title: { th: 'เฝ้าระวังและคาดการณ์น้ำท่วมฉับพลัน' },
		tagline: 'Flash Flood Monitoring & Forecasting',
		description: {
			th: 'คาดการณ์สถานการณ์น้ำท่วมจากแบบจำลอง ย้อนหลัง 24 ชั่วโมงและล่วงหน้า 24 ชั่วโมง แสดงกราฟน้ำท่า อัตราการไหล ปริมาณน้ำท่วม และขอบเขตพื้นที่น้ำท่วมรายตำบลบนแผนที่ แบ่งสถานการณ์เป็น 3 ระดับ: ปกติ เฝ้าระวัง และเตือนภัย',
		},
		capabilities: [
			'Stage Hydrograph',
			'แผนที่น้ำท่วมรายตำบล',
			'เปรียบเทียบช่วงเวลา',
			'Export Excel / CSV',
			'3 ระดับเตือนภัย',
		],
		imageNote: { th: 'สกรีนช็อตแผนที่คาดการณ์น้ำท่วมและกราฟน้ำท่า' },
		imageRatio: '16 / 10',
	},
	{
		id: 'soil-erosion',
		index: '03',
		title: { th: 'แผนที่การกัดเซาะหน้าดิน' },
		tagline: 'Dynamic Soil Erosion Map',
		description: {
			th: 'จำลองการกัดเซาะหน้าดินเชิงพื้นที่และเวลาแบบ Dynamic ด้วยแบบจำลองกระจายตัวเชิงพื้นที่ แสดงอัตราการกัดเซาะรายตำบล (ตัน/ไร่/ปี) ระดับความรุนแรงจาก "ต่ำมาก" ถึง "รุนแรงมาก" พร้อมพื้นที่อ่อนไหวต่อดินถล่ม',
		},
		capabilities: ['Spatially Distributed Model', 'อัตรารายตำบล', '5 ระดับความรุนแรง', 'Landslide Susceptibility'],
		imageNote: { th: 'สกรีนช็อตแผนที่อัตราการกัดเซาะหน้าดิน' },
		imageRatio: '16 / 10',
	},
	{
		id: 'spatial-rainfall',
		index: '04',
		title: { th: 'สถานการณ์ฝนเชิงพื้นที่' },
		tagline: 'Spatial Rainfall Situation',
		description: {
			th: 'สรุปสถานการณ์ฝนเป็นแผนที่ 3 ระดับ — จังหวัด อำเภอ และลุ่มน้ำ พร้อมฝนสะสมย้อนหลัง 1 / 3 / 24 ชั่วโมง และล่วงหน้า 1–2 ชั่วโมง จัดอันดับพื้นที่ฝนตกหนัก 10 อันดับแรก',
		},
		capabilities: ['ระดับจังหวัด / อำเภอ / ลุ่มน้ำ', 'ฝนสะสมหลายช่วงเวลา', 'Top 10 พื้นที่ฝนหนัก', 'แถบสีเฝ้าระวัง'],
		imageNote: { th: 'สกรีนช็อตแผนที่ฝนเฉลี่ยเชิงพื้นที่' },
		imageRatio: '16 / 10',
	},
	{
		id: 'telemetry',
		index: '05',
		title: { th: 'บูรณาการสถานีโทรมาตร' },
		tagline: 'Telemetry Station Integration',
		description: {
			th: 'รวมข้อมูลฝนและระดับน้ำจากกรมชลประทาน สสน. และสถานีของโครงการไว้ในที่เดียว พร้อมภาพจากกล้อง CCTV กราฟระดับน้ำรายสถานี และตารางข้อมูลที่ Export ได้',
		},
		capabilities: ['กรมชลประทาน', 'สสน.', 'สถานีโครงการ', 'กล้อง CCTV', 'Export / Print'],
		imageNote: { th: 'สกรีนช็อตแผนที่สถานีโทรมาตรและกราฟระดับน้ำ' },
		imageRatio: '16 / 10',
	},
	{
		id: 'agri-plot',
		index: '06',
		title: { th: 'ฝนในแปลงเพาะปลูก' },
		tagline: 'Rainfall by Agricultural Plot',
		description: {
			th: 'ระบุตำแหน่งแปลงที่สนใจ ระบบแจ้งปริมาณฝนและช่วงเวลาฝนตกในพื้นที่เพาะปลูก พร้อมพยากรณ์อากาศรายวันจาก 2 ผลิตภัณฑ์ (TMD และ ECMWF) และฝนคาดการณ์ล่วงหน้า 3 วัน',
		},
		capabilities: ['ระบุตำแหน่งแปลง', 'TMD', 'ECMWF', 'ฝนคาดการณ์ 3 วัน'],
		imageNote: { th: 'สกรีนช็อตหน้าฝนรายแปลงเพาะปลูก' },
		imageRatio: '16 / 10',
	},
	{
		id: 'mobile-alert',
		index: '07',
		title: { th: 'แจ้งเตือนผ่านมือถือ' },
		tagline: 'Mobile Notification System',
		description: {
			th: 'แอปพลิเคชันส่งการแจ้งเตือนพยากรณ์อากาศจากตำแหน่งที่ผู้ใช้อยู่จริง คาดการณ์สถานการณ์ในชั่วโมงที่ 1 และชั่วโมงที่ 2 รองรับทั้ง iOS และ Android',
		},
		capabilities: ['แจ้งเตือนตามตำแหน่ง', 'พยากรณ์ชั่วโมงที่ 1–2', 'iOS · App Store', 'Android · Google Play'],
		imageNote: { th: 'สกรีนช็อตการแจ้งเตือนบนมือถือ' },
		imageRatio: '4 / 5',
	},
	{
		id: 'nowcasting',
		index: '08',
		title: { th: 'เรดาร์พยากรณ์ระยะสั้นและคอมโพสิต' },
		tagline: 'Radar Nowcasting & Composite',
		description: {
			th: 'เรดาร์คอมโพสิตแสดงฝนใกล้เวลาจริงพร้อมความเข้มฝนเฉลี่ยรายอำเภอ ส่วน Nowcasting แสดงแผนที่ฝนพยากรณ์ล่วงหน้า 2 ชั่วโมงแบบภาพเคลื่อนไหวทุก 10 นาที พร้อมแจ้งเตือน ณ ตำแหน่งผู้ใช้',
		},
		capabilities: ['ภาพเคลื่อนไหวทุก 10 นาที', 'พยากรณ์ล่วงหน้า 2 ชม.', 'ความเข้มรายอำเภอ', 'แจ้งเตือน ณ ตำแหน่ง'],
		imageNote: { th: 'สกรีนช็อตแผนที่เรดาร์ Nowcasting' },
		imageRatio: '16 / 10',
	},
];

export const stationDataIntro = {
	kicker: { th: 'ข้อมูลฝนจากสถานี' },
	title: { th: 'ข้อมูลจริงจากภาคพื้นดิน 3 รูปแบบ' },
	body: {
		th: 'ระบบรวบรวมข้อมูลฝนจากสถานีตรวจวัดของหลายหน่วยงาน ค้นหาได้ด้วยชื่อตำบล อำเภอ จังหวัด หน่วยงาน หรือรหัสสถานี',
	},
} as const;

export const stationDataProducts: R4FDataProduct[] = [
	{
		id: 'rain-24h',
		title: { th: 'ฝนสะสม 24 ชั่วโมง' },
		description: {
			th: 'แผนที่และข้อมูลรายสถานี แสดงชื่อสถานี ที่ตั้ง ลักษณะฝน ปริมาณฝน หน่วยงาน และเวลาบันทึก พร้อมแถบสีเทียบค่าปริมาณฝน',
		},
		meta: 'แผนที่ + รายสถานี',
	},
	{
		id: 'rain-10min',
		title: { th: 'ฝนราย 10 นาที' },
		description: {
			th: 'ข้อมูลรายสถานีแบบลำดับเวลาและกราฟ เลือกปีและวันที่ได้ ค้นหาจากชื่อหน่วยงานหรือรหัสสถานี',
		},
		meta: 'ลำดับเวลา + กราฟ',
	},
	{
		id: 'rain-1h',
		title: { th: 'ฝนราย 1 ชั่วโมง' },
		description: {
			th: 'ข้อมูลรายสถานีแบบลำดับเวลาและกราฟ เลือกปีและวันที่ได้ ค้นหาจากชื่อหน่วยงานหรือรหัสสถานี',
		},
		meta: 'ลำดับเวลา + กราฟ',
	},
];

export const studyAreaIntro = {
	kicker: { th: 'พื้นที่ศึกษาและเครือข่ายตรวจวัด' },
	title: { th: 'โครงข่ายที่มองเห็นทุกตารางกริด' },
	body: {
		th: 'เรดาร์ตรวจอากาศ 5 สถานีครอบคลุมลุ่มน้ำคลองสวนหมาก จังหวัดกำแพงเพชร ทำงานร่วมกับสถานีวัดฝนและสถานีโทรมาตรภาคพื้นดิน เพื่อข้อมูลฝนที่ทั้งครอบคลุมและแม่นยำ',
	},
	imageNote: { th: 'แผนที่พื้นที่ศึกษาและตำแหน่งสถานีจริง' },
} as const;

export const studyAreaStats: R4FStat[] = [
	{ value: 3376.6, decimals: 1, unit: { th: 'ตร.กม.' }, label: { th: 'พื้นที่ศึกษา ครอบคลุม 32 ตำบล' } },
	{ value: 119225, unit: { th: 'ครัวเรือน' }, label: { th: 'ในพื้นที่ให้บริการ' } },
	{ value: 1234814, unit: { th: 'ไร่' }, label: { th: 'พื้นที่เกษตรกรรมรวม' } },
	{ value: 9720, unit: { th: 'กริด' }, label: { th: 'กริดเรดาร์ ความละเอียด 600 × 600 ม.' } },
];

export const monitoringNetwork = [
	{
		title: { th: 'การวัดฝนด้วยเรดาร์' },
		body: { th: 'ความละเอียดกริดละ 600 × 600 เมตร จำนวน 9,720 กริด ครอบคลุมพื้นที่ศึกษาแบบต่อเนื่อง' },
		stat: '5 สถานีเรดาร์',
	},
	{
		title: { th: 'การวัดฝนด้วยสถานีภาคพื้นดิน' },
		body: {
			th: 'สถานีวัดฝน 54 สถานี ครอบคลุมลุ่มน้ำคลองสวนหมากและคลองขลุง ใช้เป็นค่าอ้างอิงในการปรับแก้ความคลาดเคลื่อนของเรดาร์',
		},
		stat: '54 สถานีวัดฝน',
	},
	{
		title: { th: 'สถานีโทรมาตรของโครงการ' },
		body: { th: 'ตรวจวัดน้ำฝนราย 5 นาที และความชื้นในดิน 2 ระดับ (30 ซม. และ 50 ซม. จากผิวดิน)' },
		stat: '5 สถานีโทรมาตร',
	},
] as const;

export const telemetryStationsTitle: BilingualText = { th: 'สถานีโทรมาตรที่ติดตั้งแล้วเสร็จ' };

export const telemetryStations: R4FTelemetryStation[] = [
	{ code: 'KU-SM01', name: { th: 'สถานีเกษตรที่สูง บ้านป่าคา' }, basin: { th: 'ลุ่มน้ำคลองสวนหมาก' } },
	{ code: 'KU-SM02', name: { th: 'น้ำตกเต่าดำ' }, basin: { th: 'ลุ่มน้ำคลองสวนหมาก' } },
	{ code: 'KU-SM03', name: { th: 'หน่วย วจ.2 คลองมดแดง' }, basin: { th: 'ลุ่มน้ำคลองสวนหมาก' } },
	{ code: 'KU-KL01', name: { th: 'ที่ทำการอุทยานฯ คลองลาน' }, basin: { th: 'ลุ่มน้ำคลองขลุง' } },
	{ code: 'KU-KL02', name: { th: 'หน่วยพิทักษ์ คล.3 เพชรจะขอ' }, basin: { th: 'ลุ่มน้ำคลองขลุง' } },
];

export const platformsIntro = {
	kicker: { th: 'แพลตฟอร์มการใช้งาน' },
	title: { th: 'ใช้งานได้ทุกที่ ทั้งเว็บและมือถือ' },
} as const;

export const webPlatform = {
	title: { th: 'Web Application' },
	body: {
		th: 'ทำงานบนเว็บเบราว์เซอร์ เข้าสู่ระบบด้วย Username/Password และเปิดลงทะเบียนสำหรับผู้ใช้งานทั่วไป',
	},
	highlights: [
		{ th: 'สรุปสถานการณ์น้ำช่วงเวลาล่าสุด' },
		{ th: 'สรุปการคาดการณ์ฝนระยะสั้น' },
		{ th: 'สรุปสถานการณ์รายลุ่มน้ำ' },
		{ th: 'เมนูข้อมูลเชิงลึกครบทุกผลิตภัณฑ์' },
	],
	links: [
		{ label: { th: 'ลุ่มน้ำคลองสวนหมาก' }, href: 'https://smradar4flood.eng.ku.ac.th/r4fsm/' },
		{ label: { th: 'ลุ่มน้ำระยอง' }, href: 'https://ryradar4flood.eng.ku.ac.th/r4fry/' },
	] as R4FPlatformLink[],
	imageNote: { th: 'สกรีนช็อตหน้าหลัก Web Application' },
} as const;

export const mobilePlatform = {
	title: { th: 'Mobile Application' },
	body: {
		th: 'ดาวน์โหลดได้ทั้ง iOS (App Store) และ Android (Google Play) ค้นหาคำว่า "Radar4Flood2023" แนะนำให้เปิดการแจ้งเตือนและอนุญาตเข้าถึงตำแหน่งแบบ "ตลอดเวลา"',
	},
	menus: [
		{ th: 'หน้าหลัก · สถานการณ์โดยรวม' },
		{ th: 'ข้อมูลด้านน้ำ · ฝนราย 1 / 3 / 24 ชม.' },
		{ th: 'เรดาร์ · ภาพเคลื่อนไหว + พยากรณ์ 2 ชม.' },
		{ th: 'สถานการณ์ · รายลุ่มน้ำ' },
	],
	imageNote: { th: 'สกรีนช็อตแอป Radar4Flood2023' },
} as const;

export const impactIntro = {
	kicker: { th: 'ผลกระทบและประโยชน์' },
	title: { th: 'จากสัญญาณเรดาร์ สู่การตัดสินใจของชุมชน' },
} as const;

export const impactItems: { th: string; en: string }[] = [
	{ th: 'ตรวจจับฝนตกหนักได้อย่างแม่นยำด้วยเรดาร์ตรวจอากาศ', en: 'Accurate detection of intense rainfall' },
	{ th: 'เตรียมรับมือภัยพิบัติเชิงรุกด้วยการพยากรณ์และแจ้งเตือนใกล้เวลาจริง', en: 'Proactive disaster preparedness' },
	{ th: 'ลดผลกระทบและความเสี่ยงจากน้ำท่วมและดินถล่ม', en: 'Reduces flood and landslide impacts' },
	{ th: 'สนับสนุนการตัดสินใจระดับชุมชนในพื้นที่เสี่ยงภัย', en: 'Community-level decision-making' },
	{ th: 'ลดผลกระทบจากการกัดเซาะหน้าดินด้วยการประเมินล่วงหน้า', en: 'Soil erosion mitigation' },
];

export const teamContent = {
	kicker: { th: 'ผู้พัฒนาและความร่วมมือ' },
	title: { th: 'เบื้องหลัง Radar4Flood' },
	developer: {
		th: 'พัฒนาโดยภาควิชาวิศวกรรมทรัพยากรน้ำ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์',
	},
	leads: [
		{ name: 'รศ.ดร.พรรณพิมพ์ พุทธรักษา มะเปี่ยม', role: { th: 'หัวหน้าโครงการ · มหาวิทยาลัยเกษตรศาสตร์' } },
		{ name: 'Prof. Dr. Thom Bogaard', role: { th: 'TU Delft, the Netherlands' } },
		{ name: 'ผศ.ดร.ณัฐ มาแจ้ง', role: { th: 'มหาวิทยาลัยเกษตรศาสตร์' } },
	],
	funding: {
		th: 'สนับสนุนทุนวิจัยโดยสำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) — สวก. ภายใต้เครือข่ายองค์กรบริหารงานวิจัยแห่งชาติ (คอบช.)',
	},
	partners: [
		{ th: 'กรมอุตุนิยมวิทยา' },
		{ th: 'กรมชลประทาน · โครงการชลประทานกำแพงเพชร' },
		{ th: 'กรมพัฒนาที่ดิน' },
		{ th: 'สถาบันสารสนเทศทรัพยากรน้ำ (สสน.)' },
		{ th: 'หน่วยงานท้องถิ่น' },
		{ th: 'กลุ่มเกษตรกรและผู้ใช้น้ำในพื้นที่' },
	],
} as const;

export const finalCta = {
	title: { th: 'พร้อมดูสถานการณ์จริงแล้วหรือยัง' },
	body: {
		th: 'เปิดระบบพยากรณ์ Radar4Flood ของลุ่มน้ำที่คุณสนใจ หรือติดตั้งแอปเพื่อรับการแจ้งเตือน ณ ตำแหน่งของคุณ',
	},
} as const;
