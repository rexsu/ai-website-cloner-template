import type { Metadata } from "next";
import "./globals.css";
import "@/components/sites/ykyw/ykyw.css";

export const metadata: Metadata = {
  title: "家庭教育 AI 智能服务",
  description: "创客匠人 ykyw 微页面。AI 辅助家庭教育，让育儿更懂孩子、更有方法。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
