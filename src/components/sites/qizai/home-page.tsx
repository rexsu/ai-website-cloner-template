"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featureCards, notes, scenes, type FeatureCard } from "./content";
import { PageShell } from "./site-chrome";

export function HomePage() {
  const scroller = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<FeatureCard | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = () => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scroller.current;
    el?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const nudge = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.72, 380), behavior: "smooth" });
  };

  return (
    <PageShell hero>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#f4e7dc]">
        <img src="/sites/qizai/home/hero-desktop.jpg" alt="" fetchPriority="high" decoding="async" className="absolute inset-0 hidden h-full w-full object-cover object-[72%_center] md:block" />
        <img src="/sites/qizai/home/hero-mobile.jpg" alt="戴着银色智能戒指的手" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top md:hidden" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-36 md:justify-center md:px-8 md:pb-0">
          <div className="max-w-2xl">
            <h1 className="qz-h1 text-[#2c2a26]">
              <span className="block">佩上</span>
              <span className="block whitespace-nowrap">更从容的生活</span>
            </h1>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-[#3c3834]">
              用一枚智能戒指看清睡眠、情绪和恢复。想说话的时候，七仔都在。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/checkout" className="qz-btn qz-btn-blue inline-flex">
                ¥1299 一次性购买
              </Link>
              <Link href="/store/rings/qizai-ring" className="qz-btn qz-btn-dark inline-flex">
                了解戒指
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e8] px-5 pb-6 pt-24 text-center md:px-8 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="qz-h2">看懂自己。照顾好自己。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#3f3b37]">
            七仔把只属于你的夜间与日间变化放在一起，让每一天都更容易被理解，而不是被打分。
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/why-qizai" className="qz-btn qz-btn-dark inline-flex">
              为何七仔
            </Link>
            <Link href="/how-it-works" className="qz-btn qz-btn-dark inline-flex">
              如何工作
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e8] pb-8 pt-10" aria-label="身心主题">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100%-1120px)/2))]"
        >
          {featureCards.map((card) => (
            <article key={card.id} className="relative h-[460px] w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[22px] bg-[#1c1b1a] text-white">
              <img src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
              <div className="relative flex h-full flex-col justify-between p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-black/45 px-3 py-1.5 text-[13px] backdrop-blur-sm">{card.kicker}</span>
                  <button
                    type="button"
                    className="grid h-9 w-9 place-items-center rounded-full bg-[#f7f1e8] text-lg text-[#2c2a26]"
                    aria-label={`展开${card.kicker}`}
                    onClick={() => setExpanded(card)}
                  >
                    +
                  </button>
                </div>
                <h3 className="qz-card-title max-w-[14ch]">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-2 flex max-w-[1200px] justify-end gap-2 px-5 md:px-8">
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-[#2c2a26]/15 disabled:opacity-30" aria-label="上一组" disabled={!canPrev} onClick={() => nudge(-1)}>
            ←
          </button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-[#3a3937] text-[#f7f1e8] disabled:opacity-30" aria-label="下一组" disabled={!canNext} onClick={() => nudge(1)}>
            →
          </button>
        </div>
      </section>

      <section className="bg-[#f7f1e8] px-5 pb-8 pt-16 text-center md:px-8">
        <h2 className="qz-h2 mx-auto max-w-3xl">
          随时可聊
          <br />
          一位同伴
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed">
          把睡眠、情绪和恢复放在同一处。想说的时候就打开七仔，它不会在你沉默时追过来。
        </p>
        <p className="mt-3 text-sm text-[#6a6560]">应用上架平台与会员价格待确认。</p>
        <Link href="/membership" className="qz-btn qz-btn-dark mt-7 inline-flex">
          了解七仔同行
        </Link>
        <PhoneRow />
      </section>

      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8" aria-label="场景示例">
        <h2 className="sr-only">场景示例</h2>
        <div className="mx-auto grid max-w-[1120px] gap-4 md:grid-cols-3">
          {scenes.map((scene) => (
            <figure key={scene.tag} className="flex min-h-[320px] flex-col rounded-[22px] bg-[#f3eee6] p-6 ring-1 ring-black/5">
              <figcaption>
                <span className="rounded-full bg-[#2c2a26] px-2.5 py-1 text-[11px] tracking-wide text-[#f7f1e8]">{scene.tag}</span>
              </figcaption>
              <blockquote className="qz-serif mt-8 text-[1.35rem] leading-snug">“{scene.quote}”</blockquote>
              <p className="mt-auto pt-8 text-sm text-[#5e5954]">{scene.name}</p>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-[1120px] text-sm text-[#6a6560]">以上为产品语气示例，不是真实用户证言，也不代表临床结果。</p>
      </section>

      <section className="bg-[#f7f1e8] px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">新的方向</p>
            <h2 className="qz-h2 mt-3">认识身心观察</h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed">
              连续看睡眠和压力的起伏，标出值得你自己留意的变化。它不诊断疾病，也不代替医生。
            </p>
            <Link href="/health-radar" className="qz-btn qz-btn-dark mt-7 inline-flex">
              了解边界
            </Link>
          </div>
          <div className="rounded-[28px] bg-[#1c1b1a] px-4 py-8 md:px-8">
            <div className="grid grid-cols-3 gap-3">
              <MiniPhone title="睡眠起伏" line="昨夜醒过两次，今天宜缓。" />
              <MiniPhone title="情绪" line="想说的时候再打开。现在没有主动来电。" accent />
              <MiniPhone title="恢复" line="对照的是你自己的近一周。" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1c1b1a] px-5 py-16 text-[#f7f1e8] md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Link href={notes[0].href} className="group relative min-h-[420px] overflow-hidden rounded-[24px]">
            <img src={notes[0].image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:p-8">
              <span className="w-fit rounded-full bg-[#f7f1e8] px-3 py-1 text-[12px] text-[#2c2a26]">手记</span>
              <h2 className="qz-serif mt-4 max-w-md text-4xl leading-tight md:text-5xl">{notes[0].title}</h2>
              <span className="qz-btn qz-btn-light mt-6 inline-flex w-fit">阅读</span>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            <p className="text-[12px] tracking-[0.18em] text-[#b7b1a9]">七仔手记</p>
            {notes.slice(1).map((note) => (
              <Link key={note.href} href={note.href} className="group flex items-center justify-between gap-4 rounded-[20px] bg-[#f4efe8] px-5 py-6 text-[#2c2a26]">
                <span className="qz-serif text-[1.35rem] leading-snug">{note.title}</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#3a3937] text-[#f7f1e8]">→</span>
              </Link>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[1120px] text-[13px] leading-relaxed text-[#b7b1a9]">
          七仔与戒指用于日常记录和心理健康陪伴，不用于诊断、治疗或替代临床评估。若你正在经历紧急情况，请联系当地紧急服务或身边的人。
        </p>
      </section>

      {expanded ? (
        <div className="fixed inset-0 z-50 grid place-items-end p-0 sm:place-items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="expand-title">
          <button type="button" className="absolute inset-0 bg-[#1c1b1a]/50" aria-label="关闭" onClick={() => setExpanded(null)} />
          <div className="relative max-h-[90svh] w-full max-w-lg overflow-auto rounded-t-[28px] bg-[#f7f1e8] text-[#2c2a26] sm:rounded-[28px]">
            <img src={expanded.image} alt="" className="h-52 w-full object-cover" />
            <div className="p-6">
              <p className="text-sm text-[#6a6560]">{expanded.kicker}</p>
              <h3 id="expand-title" className="qz-serif mt-2 text-4xl">
                {expanded.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed">{expanded.body}</p>
              <div className="mt-6 flex gap-3">
                <Link href={expanded.href} className="qz-btn qz-btn-blue inline-flex">
                  继续看
                </Link>
                <button type="button" className="qz-btn qz-btn-dark inline-flex" onClick={() => setExpanded(null)}>
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}

function PhoneRow() {
  return (
    <div className="mx-auto mt-14 flex max-w-5xl items-end justify-center gap-3 overflow-hidden px-2 md:gap-5">
      <Phone label="松紧" score="偏紧" detail="下午见过一个人。对照昨夜，今天可以早一点停。" />
      <Phone label="今日" score="可聊" detail="七仔在。你开口之前，它不追问。" featured />
      <Phone label="睡眠" score="一夜" detail="中间醒过。深浅片段只作记录，不作诊断。" />
    </div>
  );
}

function Phone({ label, score, detail, featured = false }: { label: string; score: string; detail: string; featured?: boolean }) {
  return (
    <div className={`w-[30%] max-w-[240px] rounded-[28px] bg-[#161614] p-3 text-left text-[#f4efe8] shadow-2xl ${featured ? "mb-0 scale-105" : "mb-6 opacity-95"}`}>
      <div className="rounded-[22px] bg-gradient-to-b from-[#2a3142] to-[#141816] px-3 py-4">
        <p className="text-[11px] text-white/60">{label}</p>
        <p className="qz-serif mt-6 text-3xl">{score}</p>
        <p className="mt-3 text-[12px] leading-relaxed text-white/80">{detail}</p>
        <div className="mt-6 h-16 rounded-xl bg-white/10" />
      </div>
    </div>
  );
}

function MiniPhone({ title, line, accent = false }: { title: string; line: string; accent?: boolean }) {
  return (
    <div className={`rounded-[18px] px-2 py-3 text-left text-white ${accent ? "bg-[#243044]" : "bg-[#2a2a28]"}`}>
      <p className="text-[10px] text-white/55">9:41</p>
      <p className="qz-serif mt-6 text-sm md:text-base">{title}</p>
      <p className="mt-2 text-[11px] leading-snug text-white/75 md:text-[13px]">{line}</p>
      <div className="mt-4 h-10 rounded-lg bg-white/10" />
    </div>
  );
}
