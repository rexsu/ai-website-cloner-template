import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "给机构" };

export default function Page() {
  return (
    <LegalPage
      title="给机构"
      paragraphs={[
        "七智希望和医院、心理服务机构一起看诊后陪伴：来访者离开诊室之后，睡眠和想说的话还有地方放。",
        "合作形态、数据接口、是否进院、报价和合规材料都待确认。本页没有客户名单，也不借用其他公司的院徽。",
        "若你代表机构，请在联系页留下主题。演示表单不会真正送出。",
      ]}
    />
  );
}
