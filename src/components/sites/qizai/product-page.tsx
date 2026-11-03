"use client";

import Link from "next/link";
import { useState } from "react";
import { finishes, jcring, sensingTabs } from "./content";
import { PageShell } from "./site-chrome";

export function ProductPage() {
  const [finish, setFinish] = useState<(typeof finishes)[number]>(finishes[0]);
  const [tab, setTab] = useState<(typeof sensingTabs)[number]["id"]>("sleep");
  const [film, setFilm] = useState(false);
  const [openSpec, setOpenSpec] = useState<string | null>("materials");
  const active = sensingTabs.find((item) => item.id === tab) ?? sensingTabs[0];

  return (
    <PageShell tone="dark" hero>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#2a241f] text-[#f7f1e8] md:items-center">
        <img src="/sites/qizai/jcring/poster-device.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a241f] via-[#2a241f]/88 to-[#2a241f]/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 pt-36 md:px-8 md:pb-0">
          <p className="text-sm tracking-[0.18em] text-[#f3e6cf]">友宏医疗 · JCRing X3</p>
          <h1 className="qz-serif mt-4 max-w-xl text-5xl leading-none md:text-7xl">七仔戴的这一枚</h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
            {jcring.deviceName}，型号 {jcring.model}。外壳钛合金，宽 {jcring.width}，厚 {jcring.thickness}。注册用途是成人血氧与脉率，不是诊断。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/checkout" className="qz-btn qz-btn-light inline-flex">
              ¥1299 一次性购买
            </Link>
            <Link href="#finishes" className="qz-btn qz-btn-dark inline-flex">
              看三种颜色
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#2a241f] text-[#f7f1e8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-[#f3e6cf]">注册范围</p>
            <h2 className="qz-serif mt-4 text-4xl leading-tight md:text-5xl">血氧和脉率，才是医疗功能。</h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/80">
              注册证号 {jcring.registration}。适用范围：{jcring.intendedUse}。官方读取入口是配套微信小程序。七仔负责陪伴和把日常记录说成人话，不是这张注册证上的配套组件。
            </p>
          </div>
          <img src="/sites/qizai/jcring/spo2-photo.jpg" alt="JCRing X3 血氧测量示意" className="w-full rounded-[28px] object-cover" />
        </div>
      </section>

      <section className="bg-[#f3f1ee] px-5 py-20 text-center md:px-8">
        <p className="text-sm text-[#6a6560]">京东详情参数</p>
        <div className="relative mx-auto mt-6 flex max-w-3xl items-center justify-center">
          <span className="qz-serif text-[16vw] leading-none text-[#2c2a26] md:text-[9rem]">3–4g</span>
        </div>
        <p className="qz-serif mt-2 text-2xl text-[#6d675f]">钛合金 · 宽 8.0 mm · 厚 2.7 mm</p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6a6560]">
          重量约 3–4 克，随尺码变化。常规场景续航约 7 天，充电小于 90 分钟。防护等级 5ATM，但详情注明不用于游泳、潜水、桑拿和热水淋浴。
        </p>
      </section>

      <section className="bg-[#f7f1e8] px-5 py-16 md:px-8">
        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#141414]">
          <img src="/sites/qizai/jcring/colors.jpg" alt="钛空银、曜石黑、暮光金" className="max-h-[760px] w-full object-cover object-bottom" />
          <button type="button" className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-5 py-3 text-sm text-[#2c2a26]" onClick={() => setFilm(true)}>
            看参数原图
          </button>
        </div>
      </section>

      <section id="finishes" className="scroll-mt-28 bg-[#f7f1e8] px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">选择外观</p>
            <h2 className="qz-h2 mt-3">{finish.name}</h2>
            <p className="mt-3 text-[#5e5954]">{finish.note} · 本站 ¥1299 一次性</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
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
              <a href={jcring.jdUrl} className="qz-btn qz-btn-dark inline-flex" target="_blank" rel="noreferrer">
                京东同款
              </a>
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
              <li>JCRing X3 一枚，尺码 7–14 号</li>
              <li>详情图中有圆形充电座</li>
              <li>其余附件以收到的包裹和说明书为准</li>
            </ul>
            <img src="/sites/qizai/jcring/specs.jpg" alt="京东详情中的产品参数" className="mt-8 w-full rounded-[20px]" />
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
            <h2 id="film-title" className="qz-serif text-4xl">参数来自京东详情</h2>
            <p className="mt-3 leading-relaxed">下面这张是商品页的参数原图。七仔不另造一组硬件数字。</p>
            <img src="/sites/qizai/jcring/specs.jpg" alt="产品参数原图" className="mt-4 w-full rounded-2xl" />
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
  { id: "materials", title: "材料", body: `${jcring.material}外壳。生产企业 ${jcring.maker}，经营企业 ${jcring.operator}。` },
  { id: "weight", title: "重量与尺寸", body: `宽度 ${jcring.width}，厚度 ${jcring.thickness}，重量${jcring.weight}。在售尺码 7–14 号，内径见尺寸页。` },
  { id: "water", title: "防水", body: `详情标注 ${jcring.water}。${jcring.waterLimit}` },
  { id: "battery", title: "续航", body: `${jcring.batteryLife}。充电${jcring.charge}。电池 ${jcring.battery}。支持蓝牙 OTA。` },
  { id: "link", title: "传感器", body: `${jcring.sensors}。医疗读数走官方微信小程序；睡眠、压力、情绪、女性记录和运动追踪在商品页中列为非医疗功能。` },
];
