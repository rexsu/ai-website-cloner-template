import type { Metadata } from "next";
import { ArticlePage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "我们暂时不宣称的事" };

export default function Page() {
  return (
    <ArticlePage
      kicker="边界"
      title="我们暂时不宣称的事"
      paragraphs={[
        "不宣称治愈、缓解或预防任何精神或身体疾病。不展示未经七智自己研究支持的百分比。",
        "不把钛金属、3–4 克、5ATM、7 天续航写成已确认规格。它们来自早期记忆，状态是待确认。",
        "不写价格，不写医保或 HSA 报销，不写医疗器械注册号。",
        "不说七仔会主动打电话、主动预警感冒，或主动判断你该不该去医院。你可以随时找它；反过来的那一半还没有被确认。",
        "不使用其他品牌会员的肖像作为七仔用户。首页的句子是场景示例。",
      ]}
    />
  );
}
