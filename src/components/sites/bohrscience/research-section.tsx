import type { ReactNode } from "react";
import { VIDEOS } from "./content";
import { FeaturePointIcon } from "./icons";
import { bs } from "./styles";
import { ViewportVideo } from "./viewport-video";

const features: Array<{
  index: string;
  kicker: string;
  title: ReactNode;
  description: string;
  points: string[];
  caption: string;
  video: string;
  reversed?: boolean;
}> = [
  {
    index: "1.",
    kicker: "调研与假设",
    title: (
      <>
        先看清问题，
        <br />
        再决定研究什么
      </>
    ),
    description:
      "提出研究问题，SciMaster 会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。",
    points: [
      "关键证据带有来源",
      "结论按共识、争议和空白整理",
      "可以把研究假设继续转成实验方案",
    ],
    caption: "SciMaster · 结构化调研结果",
    video: VIDEOS.research[0],
  },
  {
    index: "2.",
    kicker: "科研执行",
    title: "把想法交给 AI 跑起来",
    description:
      "确定方向后，AI 科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。",
    points: [
      "少花时间配置环境和参数",
      "过程和结果都可以查看",
      "可以根据结果继续追问和调整",
    ],
    caption: "BioMaster · 单细胞 RNA velocity 分析",
    video: VIDEOS.research[1],
    reversed: true,
  },
  {
    index: "3.",
    kicker: "成果与审查",
    title: (
      <>
        把结果整理成
        <br />
        可以继续使用的成果
      </>
    ),
    description:
      "AI 会把数据和分析结果整理为报告、图表或 LaTeX，并检查引用、数据和结论是否一致。",
    points: [
      "输出内容可以继续编辑",
      "证据、图表与结论可以核对",
      "发现问题可以继续补充和修改",
    ],
    caption: "SciMaster · 研究写作 · 引用与数据审查",
    video: VIDEOS.research[2],
  },
];

export function ResearchSection() {
  return (
    <section className={bs("research-section")}>
      <div className={bs("section-heading")}>
        <h2>
          从一个科研问题开始，
          <br />
          把调研、验证和成果整理连起来
        </h2>
        <p>你不必再在文献、数据、软件和计算环境之间反复切换。</p>
      </div>
      <div className={bs("research-features")}>
        {features.map((feature) => (
          <section
            key={feature.index}
            className={bs("feature", feature.reversed && "feature-reversed")}
          >
            <div className={bs("feature-copy")}>
              <p className={bs("feature-index")}>
                <span>{feature.index}</span>
                {feature.kicker}
              </p>
              <h2>{feature.title}</h2>
              <p className={bs("feature-description")}>{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <FeaturePointIcon className={bs("feature-point-icon")} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className={bs("feature-media")}>
              <figcaption className={bs("feature-media-caption")}>
                {feature.caption}
              </figcaption>
              <div className={bs("demo-media", "feature-video")}>
                <ViewportVideo
                  className={bs("hero-video")}
                  label={`${feature.caption}内容演示`}
                  src={feature.video}
                />
              </div>
            </figure>
          </section>
        ))}
      </div>
    </section>
  );
}
