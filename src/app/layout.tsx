import type { Metadata } from "next";
import "./globals.css";
import "./qizai.css";

export const metadata: Metadata = {
  title: {
    default: "七仔 · 七仔同行与智能戒指",
    template: "%s · 七仔",
  },
  description: "七智的心理健康陪伴七仔，以及一枚用于睡眠与情绪记录的智能戒指。不提供诊断。",
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
