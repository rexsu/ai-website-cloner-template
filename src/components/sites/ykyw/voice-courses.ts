export type VoiceRecommend = {
  name: string;
  price: string;
  cover: string;
  sourceUrl: string;
};

export type VoiceCourse = {
  id: string;
  name: string;
  cover: string;
  price: string;
  crossedPrice: string;
  plays: number;
  lessons: number;
  validity: string;
  restricted: boolean;
  pointsNote?: string;
  vipNote: string;
  svipNote: string;
  canGift: boolean;
  detail: string[];
  recommend?: VoiceRecommend;
};

const sourceShop = "https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#";

export const voiceCourses: VoiceCourse[] = [
  {
    id: "4623772",
    name: "果妈阅读400+经典书",
    cover: "/sites/ykyw/products/4623772.jpg",
    price: "399.00",
    crossedPrice: "999.00",
    plays: 51,
    lessons: 0,
    validity: "450天有效",
    restricted: true,
    vipNote: "开通VIP会员, 本课程免费学习",
    svipNote: "开通SVIP会员, 本课程免费学习",
    canGift: false,
    detail: [],
    recommend: {
      name: "幼儿早教类",
      price: "19800.00",
      cover: "/sites/ykyw/course/relate-184878.jpg",
      sourceUrl: `${sourceShop}/homePage/datum/datumDetail?datumId=184878`,
    },
  },
  {
    id: "4619943",
    name: "每日冥想疗愈音频",
    cover: "/sites/ykyw/products/4619943.jpg",
    price: "6.80",
    crossedPrice: "199.00",
    plays: 6,
    lessons: 0,
    validity: "长期有效",
    restricted: false,
    pointsNote: "积分可抵 ￥5",
    vipNote: "开通VIP会员, 即享 7.5 折, 预计￥5.10",
    svipNote: "开通SVIP会员, 即享 5.0 折, 预计￥3.40",
    canGift: true,
    detail: [
      "徒手燃脂",
      "每天5分钟，21天腹肌养成记",
      "课程亮点",
      "临近毕业还未规划职业生涯，心理特焦虑？",
      "不知道自己特长所在，求职特迷茫？",
      "家里都说考公好，我要不要考？",
      "考公遇到拼劲，该如何突破？",
      "科学有效，减掉赘肉、练出腹肌",
      "讲师介绍",
      "王嘉鑫",
      "身高170，体重80公斤",
      "IFBB职业男子健体运动员",
      "蝉联三届世锦赛男子健体冠军",
      "现YYGQ健身联盟荣誉教练",
      "专注于健身燃脂领域数十年",
      "适用人群",
      "对自己的身材不满，但不知道怎么锻炼的人",
      "每天没有充足的锻炼时间，但又想拥有马甲线的人",
      "曾经尝试过健身，但是肚子减不掉，腹肌出不来的人",
      "课程大纲",
      "第 1 周 · 主讲：王嘉鑫",
      "综合分析腹部肥胖成因",
      "动作教学 | 体态+核心训练",
      "第 2 周 · 主讲：王嘉鑫",
      "综合分析腹部肥胖成因",
      "动作教学 | 体态+核心训练",
      "课程效果",
      "学习之后能够基本掌握课程所介绍的技能；",
      "自己能够独立完成一幅精美的作品；",
    ],
  },
];

export function getVoiceCourse(id: string | undefined): VoiceCourse | undefined {
  if (!id) return undefined;
  return voiceCourses.find((course) => course.id === id);
}

export function payHref(courseId: string): string {
  return `/homePage/course/coursePay?cId=${courseId}&extId=-1&ckFrom=5&courseType=1&isFromInvite=0`;
}

export const speedOptions = ["0.7x", "1.0x", "1.2x", "1.5x", "2.0x"] as const;
