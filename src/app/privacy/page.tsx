import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "隐私说明" };

export default function Page() {
  return (
    <LegalPage
      title="隐私说明"
      paragraphs={[
        "这是产品方向说明，不是律师定稿。正式隐私政策待确认后会替换本页。",
        "七仔可能处理你主动写下的对话、你选择记录的心情，以及戒指若同步的睡眠与活动信号。具体字段待确认。",
        "原则：不出售个人健康数据。向医生、机构或研究分享之前，需要单独同意。",
        "存储地区、保留期限、删除账号的路径和跨境传输，均待确认。演示站点的邮箱表单只留在你的浏览器里，不会上传。",
        "你有权询问、更正和删除。联系入口见本站「联系」页，目前不会真正送达七智。",
      ]}
    />
  );
}
