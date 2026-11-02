"use client";

import Link from "next/link";
import { useState } from "react";
import { dayBeats, faqs, featureCards } from "./content";
import { PageShell } from "./site-chrome";

export function WhyPage() {
  return (
    <PageShell hero>
      <section className="bg-[#f7f1e8] px-5 pb-16 pt-36 md:px-8">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">为何七仔</p>
          <h1 className="qz-h1 mt-3">把数据说成人话。</h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed">
            多数穿戴设备停在图表。七仔想把夜间的信号和你想说的话放在一起，成为诊后与日常都能在的同伴。
          </p>
        </div>
      </section>
      <section className="bg-[#f3eee6] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1000px] gap-4 md:grid-cols-3">
          {[
            ["随时可聊", "你开口，七仔才进入这段对话。主动来找你，还没有被确认。"],
            ["戒指负责夜晚", "睡眠和恢复相关的信号留在手指上。传感器清单与精度待确认。"],
            ["诊后还能带着走", "复诊前可以把一周的休息和心情放在同一处。如何对接门诊，待确认。"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[22px] bg-[#f7f1e8] p-6">
              <h2 className="qz-serif text-3xl">{title}</h2>
              <p className="mt-3 leading-relaxed text-[#4e4944]">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-2">
          <img src="/sites/qizai/product/accuracy.jpg" alt="戒指特写" className="w-full rounded-[28px] object-cover" />
          <div>
            <h2 className="qz-h2">准确，从还不夸口开始。</h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              手指是合适的位置，这是设计理由，不是已发表的临床结论。七智不会在这里借用别人的心率或睡眠百分比。
            </p>
            <Link href="/stories/boundaries" className="qz-btn qz-btn-dark mt-6 inline-flex">
              看我们不宣称的事
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#1c1b1a] px-5 py-16 text-[#f7f1e8] md:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="qz-h2">隐私先于功能。</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/80">
            原则：不出售个人健康数据，分享前需要同意。正式文本、存储地点和保留期限仍待法务确认。
          </p>
          <Link href="/privacy" className="qz-btn qz-btn-light mt-6 inline-flex">
            阅读隐私说明
          </Link>
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-3">
          {featureCards.slice(0, 3).map((card) => (
            <Link key={card.id} href={card.href} className="overflow-hidden rounded-[22px] bg-[#1c1b1a] text-white">
              <img src={card.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm text-white/70">{card.kicker}</p>
                <h3 className="qz-serif mt-2 text-3xl">{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function HowPage() {
  return (
    <PageShell hero>
      <section className="bg-[#f7f1e8] px-5 pb-10 pt-36 md:px-8">
        <div className="mx-auto max-w-[860px]">
          <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">如何工作</p>
          <h1 className="qz-h1 mt-3">戒指测量。七仔解释。</h1>
          <p className="mt-6 text-[18px] leading-relaxed">
            戒指留下身体信号，七仔同行把它们说成你听得懂的话，并在你想聊的时候接住。
          </p>
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 pb-20 md:px-8">
        <ol className="mx-auto max-w-[860px] border-l border-[#2c2a26]/15">
          {dayBeats.map((beat) => (
            <li key={beat.time} id={beat.id} className="scroll-mt-32 py-8 pl-6">
              <p className="text-sm text-[#6a6560]">{beat.time}</p>
              <h2 className="qz-serif mt-2 text-4xl">{beat.title}</h2>
              <p className="mt-3 max-w-xl text-[16px] leading-relaxed">{beat.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-[#1c1b1a] px-5 py-16 text-[#f7f1e8] md:px-8">
        <div className="mx-auto flex max-w-[860px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="qz-serif text-4xl">今天就可以看戒指</h2>
            <p className="mt-3 max-w-md text-white/75">下单尚未开放。你可以先看外观，或留下咨询。</p>
          </div>
          <Link href="/store" className="qz-btn qz-btn-light inline-flex w-fit">
            去选购页
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export function MembershipPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell hero>
      <section className="bg-[#f7f1e8] px-5 pb-12 pt-36 md:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">七仔同行</p>
          <h1 className="qz-h1 mt-3">更像一个人，而不是又一张月卡。</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed">
            诊后陪伴和日常记录在同一位七仔里。价格、试用和是否必须订阅，都待确认。
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-3 md:grid-cols-4">
          {["你开口就能聊", "不主动追问", "记录留在账号", "价格未公布"].map((item) => (
            <p key={item} className="rounded-full bg-white px-4 py-3 text-center text-sm">
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className="bg-[#f3eee6] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1000px] gap-4 md:grid-cols-3">
          {[
            ["当下的一句", "不只是睡眠分。七仔按你正在说的事回应，并可以提起昨夜。"],
            ["看清今天", "休息、活动和心情放在一条线上。没有的指标就不显示。"],
            ["长一点的陪伴", "一周、一个月的起伏可以回头看。它不承诺让你变健康。"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[22px] bg-[#f7f1e8] p-6">
              <h2 className="qz-serif text-3xl">{title}</h2>
              <p className="mt-3 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="qz-h2">常见问题</h2>
          <div className="mt-6 divide-y divide-[#2c2a26]/10">
            {faqs.map((item, index) => (
              <div key={item.q}>
                <button type="button" className="flex w-full items-center justify-between gap-4 py-4 text-left" aria-expanded={open === index} onClick={() => setOpen((v) => (v === index ? null : index))}>
                  <span className="text-[17px]">{item.q}</span>
                  <span>{open === index ? "–" : "+"}</span>
                </button>
                {open === index ? <p className="pb-4 leading-relaxed text-[#4e4944]">{item.a}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function HealthPage() {
  return (
    <PageShell hero>
      <section className="bg-[#1c1b1a] px-5 pb-20 pt-36 text-[#f7f1e8] md:px-8">
        <div className="mx-auto max-w-[860px]">
          <p className="text-[12px] tracking-[0.18em] text-[#ced4b8]">身心观察</p>
          <h1 className="qz-h1 mt-3">标出起伏。不下诊断。</h1>
          <p className="mt-6 text-[18px] leading-relaxed text-white/80">
            如果这项能力上线，它只连续看睡眠、压力和恢复里值得你自己注意的变化。它不是症状雷达，不预警疾病，也不建议就医时机。
          </p>
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1000px] gap-4 md:grid-cols-3">
          {[
            ["会做的", "把几天的休息和心情并排，让你看见「这周比上周更紧」。"],
            ["不会做的", "不命名疾病，不估计风险百分比，不让你推迟或停止治疗。"],
            ["状态", "功能是否随戒指首发，待确认。未上线前，应用里不应出现假装的预警。"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[22px] bg-white p-6">
              <h2 className="qz-serif text-3xl">{title}</h2>
              <p className="mt-3 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[1000px] text-sm leading-relaxed text-[#5e5954]">
          若你觉得可能有紧急健康问题，请联系当地紧急服务或合格的医疗专业人员。七仔不能替代这次联系。
        </p>
      </section>
    </PageShell>
  );
}
