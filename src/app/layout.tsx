import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "玻尔·科学空间",
  description:
    "在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。",
  icons: {
    icon: "/sites/bohrium/icons/bohrium-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
