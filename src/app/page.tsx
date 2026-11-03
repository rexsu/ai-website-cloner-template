import type { Metadata } from "next";
import { HomePage } from "@/components/sites/qizai/home-page";

export const metadata: Metadata = {
  title: "七仔 · 佩上更从容的生活",
  description: "七仔同行与智能戒指：睡眠、情绪和诊后陪伴。想说的时候再开口。",
};

export default function Home() {
  return <HomePage />;
}
