export const brand = {
  name: "七仔",
  companion: "七仔同行",
  company: "七智",
  companyEn: "ZenSeven",
  ring: "JCRing X3",
} as const;

/** Hardware facts taken from the JD listing for sku 10237633697326 (友宏医疗 JCRing X3 医疗版). */
export const jcring = {
  jdUrl: "https://item.jd.com/10237633697326.html",
  title: "友宏医疗 JCRing X3 医疗版",
  model: "X3",
  deviceName: "穿戴式脉搏血氧仪",
  brandName: "友宏医疗",
  maker: "湖南友宏医疗科技有限公司",
  operator: "广东友宏医疗科技有限公司",
  registration: "湘械注准20262070401",
  intendedUse: "供临床无创估算监测成人动脉血氧饱和度和脉率",
  material: "钛合金",
  width: "8.0 mm",
  thickness: "2.7 mm",
  weight: "约 3–4 g，随尺码变化",
  sensors: "PPG 传感器、3D 加速度计、BLE 5.0",
  charge: "小于 90 分钟",
  batteryLife: "常规使用场景约 7 天，以实际使用为准",
  battery: "15.5–23.5 mAh，锂聚合物，不可更换",
  water: "5ATM",
  waterLimit:
    "不适用于游泳池或海滨游泳等浅水域水上活动，也不适用于潜水、跳水、热淋浴、泡温泉、蒸桑拿或高速水流。防水会随日常磨损下降。",
} as const;

export const ringSizes = [
  { size: "7", diameter: "17.4 mm" },
  { size: "8", diameter: "18.2 mm" },
  { size: "9", diameter: "19.0 mm" },
  { size: "10", diameter: "19.7 mm" },
  { size: "11", diameter: "20.7 mm" },
  { size: "12", diameter: "21.5 mm" },
  { size: "13", diameter: "22.3 mm" },
  { size: "14", diameter: "23.1 mm" },
] as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links?: NavLink[];
};

export const nav: NavGroup[] = [
  {
    label: "选购",
    links: [
      { label: "JCRing X3", href: "/store/rings/qizai-ring", description: "七仔使用的钛合金戒指" },
      { label: "全部产品", href: "/store", description: "颜色、尺码与京东页" },
      { label: "尺寸", href: "/sizing", description: "7 到 14 号内径" },
    ],
  },
  {
    label: "身心",
    links: [
      { label: "睡眠与休息", href: "/how-it-works#sleep", description: "把夜晚整理成能看懂的一句" },
      { label: "情绪与压力", href: "/how-it-works#mood", description: "想说的时候再开口" },
      { label: "活动与恢复", href: "/how-it-works#move", description: "动与静都记一笔" },
      { label: "身心观察", href: "/health-radar", description: "只标记起伏，不下诊断" },
    ],
  },
  {
    label: "为何七仔",
    links: [
      { label: "为何七仔", href: "/why-qizai", description: "陪伴，而不是又一块表" },
      { label: "如何工作", href: "/how-it-works", description: "一天里的几个时刻" },
      { label: "七仔同行", href: "/membership", description: "诊后与日常的同一位同伴" },
    ],
  },
  { label: "给机构", href: "/organizations" },
];

export type FeatureCard = {
  id: string;
  kicker: string;
  title: string;
  image: string;
  body: string;
  href: string;
};

export const featureCards: FeatureCard[] = [
  {
    id: "sleep",
    kicker: "睡眠与休息",
    title: "把夜晚还给自己",
    image: "/sites/qizai/jcring/sleep-photo.jpg",
    body: "X3 可记录夜间睡眠时长，并给出生活化参考。这些睡眠数据和建议不作诊疗依据。七仔负责把它们说成你能读完的几句。",
    href: "/how-it-works#sleep",
  },
  {
    id: "wellness",
    kicker: "情绪与陪伴",
    title: "想说的时候，七仔在",
    image: "/sites/qizai/jcring/stress-photo.jpg",
    body: "你可以随时开口。戒指侧的情绪记录来自日常体征，只作生活参考，不支持医学研判。七仔仍不会在你沉默时追过来。",
    href: "/membership",
  },
  {
    id: "activity",
    kicker: "活动与恢复",
    title: "动与静，都算数",
    image: "/sites/qizai/jcring/activity-photo.jpg",
    body: "商品页写明可记录跑步、骑行、跳绳、网球等 40 余种运动的时长、轨迹和步数，方便你自己统计，不作为训练处方。",
    href: "/how-it-works#move",
  },
  {
    id: "heart",
    kicker: "血氧与脉率",
    title: "注册用途就这两项",
    image: "/sites/qizai/jcring/spo2-photo.jpg",
    body: "X3 的医疗器械注册范围是成人动脉血氧饱和度和脉率的无创估算监测。结果用于日常自我监测，不能代替诊断或用药。",
    href: "/health-radar",
  },
  {
    id: "women",
    kicker: "女性身心",
    title: "周期里的休息，也可以被看见",
    image: "/sites/qizai/jcring/women-photo.jpg",
    body: "商品页写的是记录基础体温、心率、心率变异性和经期症状，帮你留存周期作息。只作个人生活记录，不做排卵预测或避孕建议。",
    href: "/stories/boundaries",
  },
  {
    id: "stress",
    kicker: "压力",
    title: "看清今天的松与紧",
    image: "/sites/qizai/jcring/heart-photo.jpg",
    body: "商品页写明：仅在静止状态下记录日常压力，可提供深呼吸调节的参考指引。测量结果不能用于诊断和治疗。",
    href: "/how-it-works#mood",
  },
];

export const scenes = [
  {
    tag: "睡眠",
    quote: "夜里醒了几次。早上打开七仔，它没有评价我，只把片段整理成我能看懂的一句。",
    name: "场景示例 · 林",
  },
  {
    tag: "陪伴",
    quote: "想说话的时候，七仔在。它不催我打卡，也不假装已经认识我的全部病史。",
    name: "场景示例 · 周",
  },
  {
    tag: "诊后",
    quote: "复诊前，我把这一周的睡眠和心情带去。至于医生会怎么用，还要和门诊一起确认。",
    name: "场景示例 · 陈",
  },
] as const;

export const notes = [
  {
    href: "/stories/sleep",
    kicker: "手记",
    title: "一枚戒指，怎样陪一个晚上",
    image: "/sites/qizai/home/news-featured.jpg",
    featured: true,
  },
  {
    href: "/stories/aftercare",
    title: "诊后这一周，可以怎样记录",
  },
  {
    href: "/stories/boundaries",
    title: "我们暂时不宣称的事",
  },
  {
    href: "/health-radar",
    title: "身心观察：只标记起伏，不下诊断",
  },
] as const;

export const finishes = [
  { id: "silver", name: "钛空银", note: "京东在售", image: "/sites/qizai/jcring/silver.png", life: "/sites/qizai/jcring/silver.png" },
  { id: "black", name: "曜石黑", note: "京东在售", image: "/sites/qizai/jcring/black.png", life: "/sites/qizai/jcring/black.png" },
  { id: "gold", name: "暮光金", note: "京东在售", image: "/sites/qizai/jcring/gold.png", life: "/sites/qizai/jcring/gold.png" },
] as const;

export const sensingTabs = [
  {
    id: "sleep",
    label: "睡眠",
    items: [
      { title: "睡眠时长", body: "商品页写明可自动记录夜间睡眠时长，并结合日常作息给出生活化参考。结果和建议不作诊疗依据。" },
      { title: "七仔来读", body: "早上你可以让七仔把昨夜收成几句人话。它不把睡眠分期百分比写成七仔自己的临床结论。" },
      { title: "不主动催睡", body: "你可以随时开口。商品名里有震动提醒，但触发条件以说明书为准，七仔不把主动来电写成已有能力。" },
    ],
  },
  {
    id: "mood",
    label: "情绪",
    items: [
      { title: "随时可聊", body: "打开就能说。七仔按你的话回应，并可以对照昨夜的休息。它不是危机热线。" },
      { title: "静止时的压力", body: "商品页写明设备仅支持静止状态下的日常压力记录，并可提供深呼吸调节参考。不能用于诊断。" },
      { title: "诊后记录", body: "把这一周想告诉医生的话留在同一处。如何对接门诊，仍待确认。" },
    ],
  },
  {
    id: "move",
    label: "活动",
    items: [
      { title: "四十余种模式", body: "商品页列举跑步、骑行、跳绳、网球等 40 余种，记录时长、轨迹和日常步数。这是非医疗的生活记录。" },
      { title: "恢复仍由你判断", body: "七仔可以把活动和昨夜放在一起看，不承诺提高运动成绩。" },
    ],
  },
  {
    id: "body",
    label: "身体信号",
    items: [
      { title: "注册范围内", body: "血氧饱和度和脉率是这枚戒指经注册核准的医疗功能。官方读取入口是配套微信小程序，不是七仔对话本身。" },
      { title: "不做诊断", body: "检测结果不可作为临床诊断、筛查及指导用药的依据，也不能替代医疗机构的诊断与治疗。" },
    ],
  },
] as const;

export const dayBeats = [
  { time: "6:00", id: "sleep", title: "醒来，先看昨晚", body: "睡眠概览用你的话能懂的长度出现。它告诉你夜里发生了什么，不告诉你今天必须完成什么。" },
  { time: "12:00", id: "move", title: "中午，动与静", body: "上午如果走了很多，或几乎没动，都会留在时间线上。要不要加运动，由你决定。" },
  { time: "15:00", id: "mood", title: "下午，想说就说", body: "情绪来了不必等到咨询时段。七仔在。它不会因为你沉默就主动追问，主动触达仍待确认。" },
  { time: "18:00", id: "note", title: "傍晚，记下一件事", body: "一顿饭、一次见面、一次心慌，都可以标在今天。标得越多，对照越具体。不标也可以。" },
  { time: "22:00", id: "rest", title: "夜里，准备放下", body: "戒指继续戴着睡觉。你不用再操作。明天早上，片段会在那里。" },
] as const;

export const faqs = [
  { q: "没有戒指，可以和七仔聊天吗？", a: "陪伴对话是七仔同行的一部分。没有戒指时，夜间身体信号会缺失，能对照的上下文会少很多。仅对话的开放范围待确认。" },
  { q: "七仔会主动找我吗？", a: "当前对外说法是：你可以随时开口。主动推送、主动语音或主动问诊都尚未确认，页面上不写成已有能力。" },
  { q: "这是医疗器械吗？会诊断吗？", a: "戒指是友宏医疗 JCRing X3，注册证号湘械注准20262070401，注册用途是成人血氧饱和度和脉率的无创估算监测。七仔对话不是该注册的配套小程序。睡眠、压力、情绪和运动记录在商品页中标明为非医疗功能，不能用于诊断或治疗。" },
  { q: "戒指怎么买？多少钱？", a: "在 chanring 上按一次性 ¥1299 支付宝结账，不含订阅。京东同款页另售，价格以京东为准。会员是否另收费仍待确认。" },
  { q: "会员怎么收费？", a: "会员是否另收费、是否订阅、试用时长都还没有公布。戒指本身在本站是一次性 ¥1299。" },
  { q: "数据会卖掉吗？", a: "产品原则是不出售个人健康数据，分享前需要你的同意。正式隐私文本以法务定稿为准，见隐私说明中的待确认项。" },
  { q: "换一枚戒指，记录还在吗？", a: "账号若保留，记录应留在七仔同行里，而不是锁在某一枚硬件上。迁移细节待确认。" },
] as const;

export const footerColumns = [
  {
    title: "七智",
    links: [
      { label: "关于方向", href: "/why-qizai" },
      { label: "七仔手记", href: "/stories" },
      { label: "给机构", href: "/organizations" },
      { label: "联系", href: "/contact" },
    ],
  },
  {
    title: "支持",
    links: [
      { label: "尺寸", href: "/sizing" },
      { label: "身心观察说明", href: "/health-radar" },
      { label: "预约了解", href: "/contact" },
      { label: "结账 ¥1299", href: "/checkout" },
      { label: "购物袋", href: "/cart" },
    ],
  },
  {
    title: "产品",
    links: [
      { label: "七仔戒指", href: "/store/rings/qizai-ring" },
      { label: "全部产品", href: "/store" },
      { label: "七仔同行", href: "/membership" },
      { label: "如何工作", href: "/how-it-works" },
    ],
  },
  {
    title: "条款",
    links: [
      { label: "隐私说明", href: "/privacy" },
      { label: "使用条款", href: "/terms" },
      { label: "无障碍", href: "/accessibility" },
      { label: "我们不宣称的事", href: "/stories/boundaries" },
    ],
  },
] as const;
