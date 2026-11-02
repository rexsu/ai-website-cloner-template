export const brand = {
  name: "七仔",
  companion: "七仔同行",
  company: "七智",
  companyEn: "ZenSeven",
  ring: "七仔戒指",
} as const;

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
      { label: "七仔戒指", href: "/store/rings/qizai-ring", description: "睡眠与情绪的随身硬件" },
      { label: "全部产品", href: "/store", description: "戒指与仍在确认的配件" },
      { label: "尺寸", href: "/sizing", description: "试戴前先看怎么量" },
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
    image: "/sites/qizai/home/card-sleep.jpg",
    body: "醒来后，七仔把昨晚的片段收成你能读完的几句：睡了多久、中间醒过、今天宜不宜再撑。它不替你下医学结论。",
    href: "/how-it-works#sleep",
  },
  {
    id: "wellness",
    kicker: "情绪与陪伴",
    title: "想说的时候，七仔在",
    image: "/sites/qizai/home/card-wellness.jpg",
    body: "你可以随时开口。七仔按你正在说的事回应，而不是假定它该主动来找你。主动触达仍待确认。",
    href: "/membership",
  },
  {
    id: "activity",
    kicker: "活动与恢复",
    title: "动与静，都算数",
    image: "/sites/qizai/home/card-activity.jpg",
    body: "走了路、发了呆、早睡了一点，都可以记下来。恢复好不好，用你自己的近况对照，不和别人比。",
    href: "/how-it-works#move",
  },
  {
    id: "heart",
    kicker: "身心节律",
    title: "听见今天的起伏",
    image: "/sites/qizai/home/card-womens.jpg",
    body: "心跳、体温这类信号如果被记录，只用来描述你的昼夜节奏。具体传感器与精度尚未对外确认。",
    href: "/health-radar",
  },
  {
    id: "women",
    kicker: "女性身心",
    title: "周期里的休息，也可以被看见",
    image: "/sites/qizai/home/card-heart.jpg",
    body: "若你愿意，可以把经期前后的睡眠和心情放在一起看。七仔不做排卵预测，也不提供避孕建议。",
    href: "/stories/boundaries",
  },
  {
    id: "stress",
    kicker: "压力",
    title: "看清今天的松与紧",
    image: "/sites/qizai/home/card-stress.jpg",
    body: "紧的时候不必立刻改掉生活。先看见它，再决定要不要跟七仔聊聊，或者今天早一点停下来。",
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
  { id: "silver", name: "银", note: "日常色", image: "/sites/qizai/product/finish-silver.png", life: "/sites/qizai/product/life-silver.jpg" },
  { id: "black", name: "黑", note: "日常色", image: "/sites/qizai/product/finish-black.png", life: "/sites/qizai/product/life-black.jpg" },
  { id: "gold", name: "金", note: "外观待确认", image: "/sites/qizai/product/finish-gold.png", life: "/sites/qizai/product/life-gold.jpg" },
  { id: "rose", name: "玫瑰", note: "外观待确认", image: "/sites/qizai/product/finish-rose.png", life: "/sites/qizai/product/life-rose.jpg" },
  { id: "stealth", name: "哑光黑", note: "外观待确认", image: "/sites/qizai/product/finish-stealth.png", life: "/sites/qizai/product/life-stealth.jpg" },
  { id: "brushed", name: "拉丝银", note: "外观待确认", image: "/sites/qizai/product/finish-brushed.png", life: "/sites/qizai/product/life-brushed.jpg" },
] as const;

export const sensingTabs = [
  {
    id: "sleep",
    label: "睡眠",
    items: [
      { title: "睡眠概览", body: "用你能读完的几句话，回答「昨晚怎么样」。分数如果出现，只是对照你自己的近期，不是体检报告。" },
      { title: "夜间片段", body: "深睡、浅睡、中途醒来可以被分开看。分期准确率尚未公布，页面上不写百分比。" },
      { title: "入睡提醒", body: "若你打开它，七仔可以在你习惯的时间前提一句该收了。默认不主动打扰。" },
    ],
  },
  {
    id: "mood",
    label: "情绪",
    items: [
      { title: "随时可聊", body: "打开就能说。七仔按你的话回应，并可以对照昨夜的休息。它不是危机热线。" },
      { title: "松与紧", body: "白天的紧，可以和睡眠、活动放在同一张时间线上。压力算法的细节待确认。" },
      { title: "诊后记录", body: "把这一周想告诉医生的话留在同一处。如何对接门诊，仍待确认。" },
    ],
  },
  {
    id: "move",
    label: "活动",
    items: [
      { title: "动过，就记一笔", body: "走路和明显的活动可以被看见。能自动识别多少种运动，尚未确认，所以这里不列举项目。" },
      { title: "恢复", body: "今天宜动还是宜缓，用你自己的近况来说，不承诺提高运动成绩。" },
    ],
  },
  {
    id: "body",
    label: "身体信号",
    items: [
      { title: "夜里的信号", body: "心率、体温趋势、血氧若被采集，只作为 wellness 记录。传感器清单与精度待确认。" },
      { title: "不做诊断", body: "七仔不判断疾病，不替代问诊，也不建议你停药或改方案。" },
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
  { q: "这是医疗器械吗？会诊断吗？", a: "不能。七仔与戒指用于心理健康陪伴和日常记录，不诊断、不治疗、不替代医生。认证与注册状态待确认。" },
  { q: "戒指怎么买？多少钱？", a: "七仔戒指按一次性 ¥1299，支付宝结账。不含订阅。会员是否另收费、试用时长仍待确认。" },
  { q: "会员怎么收费？", a: "会员是否另收费、是否订阅、试用时长都还没有公布。戒指本身是一次性 ¥1299。" },
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
