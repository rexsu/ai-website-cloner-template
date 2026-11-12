import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const messinaSans = localFont({
  src: [
    {
      path: "../../public/sites/recursion/fonts/MessinaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/recursion/fonts/MessinaSans-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/sites/recursion/fonts/MessinaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
  display: "swap",
});

const messinaSerif = localFont({
  src: [
    {
      path: "../../public/sites/recursion/fonts/MessinaSerif-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-messina-serif",
  display: "swap",
});

const messinaMono = localFont({
  src: [
    {
      path: "../../public/sites/recursion/fonts/MessinaSansMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-messina-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technology",
  description: "Decoding biology demands a bold approach.",
  icons: {
    icon: "/sites/recursion/favicon.png",
    apple: "/sites/recursion/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${messinaSans.variable} ${messinaSerif.variable} ${messinaMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
