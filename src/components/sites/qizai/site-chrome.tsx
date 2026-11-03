"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { footerColumns, nav } from "./content";
import { Logo } from "./logo";

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  return <SiteHeaderBar key={pathname} tone={tone} />;
}

function SiteHeaderBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile || cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile, cartOpen]);

  const light = tone === "dark" && !scrolled && !mobile;
  const ink = light ? "text-[#f7f1e8]" : "text-[#2c2a26]";

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="bg-[#ced4b8] text-center text-[13px] leading-none text-[#2c2a26]">
        <p className="px-4 py-2.5">
          七仔同行 · 诊后与心理健康陪伴
          <span className="mx-2 opacity-40">/</span>
          戒指负责把夜晚留在指尖
        </p>
      </div>
      <div
        className={classNames(
          "border-b transition-colors",
          light && !scrolled ? "border-transparent bg-transparent" : "border-[#2c2a26]/10 bg-[#f7f1e8]/95 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
          <Logo light={light} />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
            {nav.map((item) =>
              item.links ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen((v) => (v === item.label ? null : v))}
                >
                  <button
                    type="button"
                    className={classNames("rounded-full px-3 py-2 text-[15px]", ink)}
                    aria-expanded={open === item.label}
                    onClick={() => setOpen((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <span aria-hidden className="ml-1 text-[10px]">
                      ▾
                    </span>
                  </button>
                  {open === item.label ? (
                    <div className="absolute left-0 top-full w-72 pt-2">
                      <div className="rounded-2xl bg-[#f7f1e8] p-2 text-[#2c2a26] shadow-[0_16px_50px_rgba(44,42,38,0.14)] ring-1 ring-black/5">
                        {item.links.map((link) => (
                          <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2.5 hover:bg-white/70">
                            <span className="block text-[15px]">{link.label}</span>
                            {link.description ? <span className="mt-0.5 block text-[13px] text-[#5e5954]">{link.description}</span> : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.label} href={item.href ?? "/"} className={classNames("rounded-full px-3 py-2 text-[15px]", ink)}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={classNames("grid h-10 w-10 place-items-center rounded-full border", light ? "border-white/30" : "border-[#2c2a26]/15")}
              aria-label="打开购物袋，当前没有商品"
              onClick={() => setCartOpen(true)}
            >
              <BagIcon light={light} />
            </button>
            <button
              type="button"
              className={classNames("grid h-10 w-10 place-items-center rounded-full border lg:hidden", light ? "border-white/30" : "border-[#2c2a26]/15")}
              aria-expanded={mobile}
              aria-controls={menuId}
              aria-label={mobile ? "关闭菜单" : "打开菜单"}
              onClick={() => setMobile((v) => !v)}
            >
              <span className={classNames("flex flex-col gap-1", ink)} aria-hidden>
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {mobile ? (
        <div id={menuId} className="h-[calc(100dvh-6.5rem)] overflow-y-auto bg-[#f7f1e8] px-5 pb-24 pt-4 text-[#2c2a26] lg:hidden">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-[#2c2a26]/10 py-3">
              {item.links ? (
                <>
                  <p className="qz-serif text-2xl">{item.label}</p>
                  <ul className="mt-2 space-y-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="block py-1.5 text-[16px]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href ?? "/"} className="qz-serif block text-2xl">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/store/rings/qizai-ring" className="qz-btn qz-btn-blue mt-6 inline-flex">
            看戒指
          </Link>
        </div>
      ) : null}

      {cartOpen ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <button type="button" className="absolute inset-0 bg-[#1c1b1a]/40" aria-label="关闭购物袋" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f7f1e8] p-6 text-[#2c2a26] shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 id="cart-title" className="qz-serif text-3xl">
                购物袋
              </h2>
              <button type="button" className="rounded-full px-3 py-1 text-sm" onClick={() => setCartOpen(false)}>
                关闭
              </button>
            </div>
            <p className="mt-10 text-[16px] leading-relaxed text-[#5e5954]">
              还是空的。戒指价格与下单方式尚未公布，这里不会假装结账。
            </p>
            <Link href="/store/rings/qizai-ring" className="qz-btn qz-btn-dark mt-8 inline-flex w-fit" onClick={() => setCartOpen(false)}>
              先看戒指
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function BagIcon({ light }: { light: boolean }) {
  const stroke = light ? "#f7f1e8" : "#2c2a26";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" stroke={stroke} strokeWidth="1.4" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" stroke={stroke} strokeWidth="1.4" />
    </svg>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  return (
    <footer className="bg-[#363433] text-[#f3eee6]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] md:px-8">
        <div>
          <p className="qz-serif text-5xl text-[#d9d3cb]">七仔</p>
          <h2 className="qz-serif mt-8 max-w-xs text-[2rem] leading-tight">
            留下邮箱，
            <br />
            等正式消息
          </h2>
          <form
            className="mt-5"
            onSubmit={(event) => {
              event.preventDefault();
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setError("请填写有效邮箱。");
                setDone(false);
                return;
              }
              setError("");
              setDone(true);
            }}
          >
            <label htmlFor="footer-email" className="sr-only">
              邮箱
            </label>
            <div className="flex max-w-sm items-center rounded-full bg-[#2c2a26] pl-4 pr-1">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="邮箱地址"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-[#a39d96]"
              />
              <button type="submit" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f7f1e8] text-[#2c2a26]" aria-label="提交邮箱">
                →
              </button>
            </div>
          </form>
          {error ? <p className="mt-2 text-sm text-[#e7b6a8]">{error}</p> : null}
          {done ? <p className="mt-2 text-sm text-[#ced4b8]">已记在这台浏览器里。邮件通道尚未开通，不会真的寄出。</p> : null}
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#b7b1a9]">
            我们在意数据。阅读
            <Link href="/privacy" className="ml-1 underline underline-offset-2">
              隐私说明
            </Link>
            。
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm text-[#b7b1a9]">{column.title}</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-[13px] text-[#b7b1a9] md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} 七智 ZenSeven。七仔、七仔同行为产品名。页面为结构复刻后的品牌替换，非正式发布站点。</p>
          <p>戒指为友宏医疗 JCRing X3，注册证号湘械注准20262070401。七仔不是其医疗配套小程序。</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  tone = "light",
  hero = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  hero?: boolean;
}) {
  return (
    <div className="qz min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        跳到正文
      </a>
      <SiteHeader tone={tone} />
      <main id="main" className={hero ? "" : "pt-[7.2rem]"}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
