"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageShell } from "./site-chrome";

export function ArticlePage({
  kicker,
  title,
  paragraphs,
}: {
  kicker: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <PageShell>
      <article className="mx-auto max-w-2xl px-5 py-16 md:px-0">
        <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">{kicker}</p>
        <h1 className="qz-serif mt-3 text-5xl leading-tight">{title}</h1>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <Link href="/stories" className="mt-10 inline-block text-sm underline">
          返回手记
        </Link>
      </article>
    </PageShell>
  );
}

export function StoriesIndex() {
  const items = [
    ["一枚戒指，怎样陪一个晚上", "/stories/sleep"],
    ["诊后这一周，可以怎样记录", "/stories/aftercare"],
    ["我们暂时不宣称的事", "/stories/boundaries"],
  ];
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="qz-h1">七仔手记</h1>
        <p className="mt-4 text-[17px]">这些是产品说明，不是媒体转载，也不是临床论文。</p>
        <ul className="mt-8 space-y-3">
          {items.map(([title, href]) => (
            <li key={href}>
              <Link href={href} className="qz-serif block rounded-[20px] bg-white px-5 py-5 text-2xl">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

export function SizingPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="qz-h1">先量，再决定。</h1>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-[17px] leading-relaxed">
          <li>用一条细线绕过打算佩戴的手指根部，不要勒紧。</li>
          <li>记下周长。晚上手会略肿，建议傍晚再量一次。</li>
          <li>七仔的尺码对照表尚未公布。请不要套用其他品牌的号数。</li>
        </ol>
        <p className="mt-6 text-sm text-[#6a6560]">记忆中的可售尺寸范围未确认。此页不提供 6–13 号的毫米换算。</p>
        <Link href="/contact?topic=sizing" className="qz-btn qz-btn-blue mt-8 inline-flex">
          让我们帮你看尺寸
        </Link>
      </div>
    </PageShell>
  );
}

export function ContactPage() {
  const params = useSearchParams();
  const topic = params.get("topic") ?? "general";
  const [sent, setSent] = useState(false);
  const label = useMemo(() => {
    const map: Record<string, string> = {
      general: "一般咨询",
      sizing: "尺寸",
      silver: "银色",
      black: "黑色",
      gold: "金色",
      rose: "玫瑰",
      stealth: "哑光黑",
      brushed: "拉丝银",
    };
    return map[topic] ?? topic;
  }, [topic]);

  return (
    <PageShell>
      <div className="mx-auto max-w-xl px-5 py-16">
        <h1 className="qz-serif text-5xl">预约了解</h1>
        <p className="mt-3 text-[#5e5954]">当前主题：{label}。这是演示表单，提交不会发到七智。</p>
        {sent ? (
          <p className="mt-8 rounded-[20px] bg-white p-5">已留在这台浏览器里。正式咨询通道尚未开通。</p>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <Field id="name" label="怎么称呼" />
            <Field id="contact" label="邮箱或手机" />
            <label className="block text-sm" htmlFor="message">
              想了解的事
              <textarea id="message" required rows={5} defaultValue={topic === "general" ? "" : `我想了解：${label}`} className="mt-1 w-full rounded-2xl border border-[#2c2a26]/15 bg-white px-3 py-2" />
            </label>
            <button type="submit" className="qz-btn qz-btn-blue inline-flex">
              留下这张纸条
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}

function Field({ id, label }: { id: string; label: string }) {
  return (
    <label className="block text-sm" htmlFor={id}>
      {label}
      <input id={id} required className="mt-1 h-11 w-full rounded-full border border-[#2c2a26]/15 bg-white px-4" />
    </label>
  );
}

export function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <PageShell>
      <article className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="qz-serif text-5xl">{title}</h1>
        <div className="mt-8 space-y-4 text-[16px] leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}

export function CartPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="qz-serif text-5xl">购物袋</h1>
        <p className="mt-4 text-[#5e5954]">七仔戒指 · ¥1299 一次性。目前不支持多件加购，直接去支付宝结账即可。</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/checkout" className="qz-btn qz-btn-blue inline-flex">
            去支付 ¥1299
          </Link>
          <Link href="/store" className="qz-btn qz-btn-dark inline-flex">
            返回选购
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
