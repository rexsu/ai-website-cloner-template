import type { Metadata } from "next";
import { ArticlePage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "我们暂时不宣称的事" };

export default function Page() {
  return (
    <ArticlePage
      kicker="边界"
      title="我们暂时不宣称的事"
      paragraphs={[
        "不宣称治愈、缓解或预防任何精神或身体疾病。不展示未经出处的百分比。",
        "硬件数字只引用京东 JCRing X3 商品页：钛合金、宽 8.0 mm、厚 2.7 mm、约 3–4 g、5ATM、常规约 7 天。防水脚注写明不用于游泳、潜水和桑拿。",
        "注册证号湘械注准20262070401 只覆盖成人血氧饱和度和脉率。七仔不是该注册的微信小程序。睡眠、压力、情绪、女性记录和运动是商品页标明的非医疗功能。",
        "chanring 自售价是一次性 ¥1299。京东同款页的标价被打码，以京东结算页为准，两边不必相同。",
        "不说七仔会主动打电话或判断你该不该去医院。你可以随时找它。",
        "首页句子仍是场景示例，不是临床结果。",
      ]}
    />
  );
}
