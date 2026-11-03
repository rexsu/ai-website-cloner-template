import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "使用条款" };

export default function Page() {
  return (
    <LegalPage
      title="使用条款"
      paragraphs={[
        "本站是 Oura 营销结构的本地复刻，并替换为七仔 / 七智的产品叙事，用于展示与评审。它不是七智的正式电商。",
        "页面中的硬件参数、价格、认证、临床效果，凡未在研究文档中标为已确认的，都不能当作购买依据。",
        "七仔不提供医疗服务。使用对话或戒指记录，不能替代执业医师、心理治疗师或紧急救助。",
        "正式用户协议、退款、保修和管辖法律待确认。",
      ]}
    />
  );
}
