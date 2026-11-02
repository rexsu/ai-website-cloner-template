"use client";

import Link from "next/link";
import { useState } from "react";
import { finishes, sensingTabs } from "./content";
import { PageShell } from "./site-chrome";

export function ProductPage() {
  const [finish, setFinish] = useState<(typeof finishes)[number]>(finishes[0]);
  const [tab, setTab] = useState<(typeof sensingTabs)[number]["id"]>("sleep");
  const [film, setFilm] = useState(false);
  const [openSpec, setOpenSpec] = useState<string | null>("materials");
  const active = sensingTabs.find((item) => item.id === tab) ?? sensingTabs[0];

  return (
    <PageShell tone="dark" hero>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#5c5e66] text-center text-[#f7f1e8]">
        <img src="/sites/qizai/product/hero-silver.webp" alt="" className="pointer-events-none absolute -left-[18%] top-1/2 hidden w-[58vw] max-w-[760px] -translate-y-1/2 md:block" />
        <img src="/sites/qizai/product/hero-rose.webp" alt="" className="pointer-events-none absolute -right-[22%] top-[8%] hidden w-[62vw] max-w-[820px] md:block" />
        <img src="/sites/qizai/product/finish-silver.png" alt="银色七仔戒指" className="absolute bottom-24 w-48 md:hidden" />
        <div className="relative z-10 px-6 pt-28">
          <p className="text-sm tracking-[0.18em]">七仔戒指</p>
          <h1 className="qz-serif mt-4 text-6xl leading-none md:text-8xl">融进日常</h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/checkout" className="qz-btn qz-btn-light inline-flex">
              ¥1299 一次性购买
            </Link>
            <Link href="#finishes" className="qz-btn qz-btn-light inline-flex opacity-90">
              看颜色
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#5c5e66] text-[#f7f1e8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[12px] tracking-[0.18em]">认识七仔戒指</p>
            <h2 className="qz-serif mt-4 text-4xl leading-tight md:text-5xl">一枚尽量不打扰的戒指，把睡眠和心情留在指尖。</h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/80">
              它服务七仔同行：诊后与心理健康陪伴。指标数量、传感器精度都不在这里报数。
            </p>
          </div>
          <img src="/sites/qizai/product/black-side.webp" alt="戒指侧面" className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section className="bg-[#f3f1ee] px-5 py-24 text-center md:px-8">
        <p className="text-sm text-[#6a6560]">设计方向</p>
        <div className="relative mx-auto mt-6 flex max-w-3xl items-center justify-center">
          <span className="qz-serif text-[18vw] leading-none text-[#2c2a26] md:text-[10rem]">轻</span>
          <img src="/sites/qizai/product/finish-silver.png" alt="" className="absolute w-40 md:w-64" />
        </div>
        <p className="qz-serif mt-4 text-2xl text-[#6d675f]">更安静地待在手上。</p>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#6a6560]">
          记忆中的钛金属、约 3–4 克、5ATM、约 7 天续航都还没有被确认。在确认前，页面只说「轻」和「希望你忘记它还在」。
        </p>
      </section>

      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#141414]">
          <img src="/sites/qizai/product/hand.webp" alt="戴着戒指的手" className="h-[520px] w-full object-cover object-[center_20%]" loading="lazy" decoding="async" />
          <button type="button" className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-5 py-3 text-sm text-[#2c2a26]" onClick={() => setFilm(true)}>
            看结构说明
          </button>
        </div>
      </section>

      <section id="finishes" className="scroll-mt-28 bg-[#f7f1e8] px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">选择外观</p>
            <h2 className="qz-h2 mt-3">{finish.name}</h2>
            <p className="mt-3 text-[#5e5954]">{finish.note} · ¥1299 一次性</p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {finishes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFinish(item)}
                  className={`rounded-2xl bg-white p-2 ring-2 ${finish.id === item.id ? "ring-[#2a72de]" : "ring-transparent"}`}
                  aria-pressed={finish.id === item.id}
                >
                  <img src={item.image} alt="" className="aspect-square w-full object-contain" loading="lazy" decoding="async" />
                  <span className="mt-1 block text-center text-xs">{item.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/checkout" className="qz-btn qz-btn-blue inline-flex">
                ¥1299 去支付
              </Link>
              <Link href={`/contact?topic=${finish.id}`} className="qz-btn qz-btn-dark inline-flex">
                预约了解这款
              </Link>
            </div>
          </div>
          <img src={finish.life} alt={`${finish.name}色戒指佩戴`} className="w-full rounded-[28px] object-cover" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="qz-h2">日常能感知的几件事</h2>
          <div className="mt-6 flex gap-2 overflow-x-auto" role="tablist">
            {sensingTabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`rounded-full px-4 py-2 text-sm ${tab === item.id ? "bg-[#2c2a26] text-[#f7f1e8]" : "bg-white text-[#2c2a26]"}`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3" role="tabpanel">
            {active.items.map((item) => (
              <article key={item.title} className="rounded-[22px] bg-white p-5">
                <h3 className="qz-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4e4944]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee6] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-2">
          <div>
            <h2 className="qz-h2">盒里有什么</h2>
            <ul className="mt-6 space-y-3 text-[16px]">
              <li>七仔戒指一枚</li>
              <li>充电配件（具体形态待确认）</li>
              <li>尺寸与佩戴说明</li>
            </ul>
            <img src="/sites/qizai/product/tech-spec.png" alt="戒指结构示意" className="mt-8 max-h-80 w-full object-contain" />
          </div>
          <div>
            <h2 className="qz-serif text-3xl">规格 · 未确认的写明未确认</h2>
            <div className="mt-4 divide-y divide-[#2c2a26]/10">
              {specs.map((spec) => (
                <div key={spec.id}>
                  <button type="button" className="flex w-full items-center justify-between py-4 text-left" aria-expanded={openSpec === spec.id} onClick={() => setOpenSpec((v) => (v === spec.id ? null : spec.id))}>
                    <span>{spec.title}</span>
                    <span>{openSpec === spec.id ? "–" : "+"}</span>
                  </button>
                  {openSpec === spec.id ? <p className="pb-4 text-[15px] leading-relaxed text-[#4e4944]">{spec.body}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {film ? (
        <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="film-title">
          <button type="button" className="absolute inset-0 bg-black/60" aria-label="关闭" onClick={() => setFilm(false)} />
          <div className="relative max-w-lg rounded-[28px] bg-[#f7f1e8] p-6 text-[#2c2a26]">
            <h2 id="film-title" className="qz-serif text-4xl">短片还在制作</h2>
            <p className="mt-3 leading-relaxed">这里先看静态结构。产品影片、爆炸图动画都待确认，所以按钮不会假装播放。</p>
            <img src="/sites/qizai/product/tech-spec.png" alt="结构示意" className="mt-4 max-h-72 w-full object-contain" />
            <button type="button" className="qz-btn qz-btn-dark mt-4 inline-flex" onClick={() => setFilm(false)}>
              知道了
            </button>
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}

const specs = [
  { id: "materials", title: "材料", body: "方向是金属戒指，记忆中提到钛。在供应商与检测确认前，不写成已量产材质。" },
  { id: "weight", title: "重量与尺寸", body: "希望轻到几乎忘记。约 3–4 克、具体宽度与厚度都待确认，尺码请以试戴为准。" },
  { id: "water", title: "防水", body: "日常洗手应当没问题。5ATM、百米防水或 IP 等级尚未确认，页面不承诺游泳、桑拿或潜水。" },
  { id: "battery", title: "续航", body: "设计希望接近一周。约 7 天、充电时长都待确认，会随尺寸和使用变化。" },
  { id: "link", title: "连接", body: "预期通过手机应用同步。系统要求、离线可存几天，待确认。" },
];
