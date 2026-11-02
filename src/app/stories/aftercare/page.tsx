import type { Metadata } from "next";
import { ArticlePage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "诊后这一周" };

export default function Page() {
  return (
    <ArticlePage
      kicker="手记"
      title="诊后这一周，可以怎样记录"
      paragraphs={[
        "看完门诊，很多话要过几天才会变得具体。七仔同行想让这一周的睡眠、心情和你想告诉医生的句子待在同一处。",
        "你可以记：药有没有按时吃的主观感受、哪天特别紧、哪晚几乎没睡。它不判断方案对不对，也不建议加量或停药。",
        "复诊时怎么把这些记录交给医生，取决于门诊自己的流程。七仔目前没有确认的医院系统对接。",
        "若这一周出现紧急情况，请联系当地紧急服务或你的治疗者。戒指不会替你发出求救。",
      ]}
    />
  );
}
