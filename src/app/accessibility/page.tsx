import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "无障碍" };

export default function Page() {
  return (
    <LegalPage
      title="无障碍"
      paragraphs={[
        "导航可以用键盘到达。按钮有可见的焦点环。图片里的信息同时写在旁边的文字里。",
        "颜色对比按奶油底与深色字搭配。若你遇到读屏问题，请用联系页留下说明。正式的无障碍声明待确认。",
      ]}
    />
  );
}
