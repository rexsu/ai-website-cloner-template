import type { Metadata } from "next";
import { ArticlePage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "一枚戒指，怎样陪一个晚上" };

export default function Page() {
  return (
    <ArticlePage
      kicker="手记"
      title="一枚戒指，怎样陪一个晚上"
      paragraphs={[
        "睡前你不需要再打开什么。戒指若在手指上，就让它待着。七仔不会在你入睡前追问今天过得好不好。",
        "夜里它可能记下醒来、翻身和一些身体信号。哪些信号会被采集，还没有公开的传感器清单，所以这篇手记不列举血氧或体温的精度。",
        "早上你打开七仔，看到的应是能读完的几句，而不是一张要求你变健康的成绩单。你也可以接着说：昨晚为什么醒。它按你的话回应。",
        "这不是睡眠医学报告。若你长期失眠或有呼吸暂停的担心，请找医生，而不是把戒指当成结论。",
      ]}
    />
  );
}
