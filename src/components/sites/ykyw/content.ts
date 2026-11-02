import pages from "./pages.json";

export type Capability = {
  icon: string;
  label: string;
  content: string;
};

export type Shortcut = {
  icon: string;
  label: string;
  content: string;
};

export type Agent = {
  id: string;
  name: string;
  greeting: string;
  slogan: string;
  placeholder: string;
  cover: string;
  capabilities: Capability[];
  questions: string[];
  shortcuts: Shortcut[];
};

export type Product = {
  id: string;
  name: string;
  price: string;
  payType: number;
  prodType: number;
  cover: string;
  sourceUrl: string;
};

export type MicroPageData = {
  mId: string;
  pageName: string;
  shareDesc: string;
  templateType: 1 | 2 | 4;
  color: string;
  agents: Agent[];
  products: Product[];
  sourceUrl: string;
};

export const microPages = pages as MicroPageData[];

export const sourceOrigin =
  "https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#";

export function getMicroPage(mId: string | undefined): MicroPageData | undefined {
  if (!mId) return undefined;
  return microPages.find((page) => page.mId === mId);
}

export function priceLabel(product: Product): string {
  if (product.payType === 1) return "免费";
  if (product.payType === 3) return "加密";
  return `￥${product.price}`;
}

export function productHref(product: Product): { href: string; external: boolean } {
  if (product.prodType === 111) {
    return {
      href: `/homePage/course/voice?courseId=${product.id}&ckFrom=5`,
      external: false,
    };
  }
  return { href: product.sourceUrl, external: true };
}

export function sourceChatUrl(agentId: string, message?: string): string {
  const query = new URLSearchParams({ aikbId: agentId });
  if (message) query.set("initMsg", message);
  return `${sourceOrigin}/ai/aiAgentChat?${query.toString()}`;
}

export const themeVars: Record<string, string> = {
  "--wb-primary": "#6352FC",
  "--wb-family-price-bg": "rgba(99, 82, 252, 0.05)",
  "--wb-women-soft": "#F4F7FF",
  "--wb-family-page-bg":
    "linear-gradient(180deg, #E8EBFF 1.48%, #F8F8FA 38.43%)",
  "--wb-family-card":
    "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, #E2EAFF 56.81%, #D0DEFF 100%)",
  "--wb-family-panel":
    "linear-gradient(180deg, rgba(208, 219, 255, 0.85) 0%, #E4EAFE 100%)",
  "--wb-family-bg-img-opacity": "0.5",
  "--wb-active-tab": "linear-gradient(90deg, #416AFF 0%, #B19AFF 100%)",
  "--wb-active-tab-start": "#416AFF",
  "--wb-active-tab-end": "#B19AFF",
  "--wb-women-quick-action-start": "#E5DCFF",
  "--wb-women-quick-action-end": "#D4E3FF",
  "--wb-psychology-quote-card-start": "#DBF1FF",
  "--wb-psychology-background":
    "linear-gradient(180deg, #F4F7FF 1.48%, rgba(255, 255, 255, 0.9) 23.78%, #F3F3F3 95.2%)",
  "--wb-chat-entry":
    "linear-gradient(90deg, #305CFF 0%, #623BEA 49.15%, #46A6F0 100%)",
};

export const themeAssets = {
  familyHero: "/sites/ykyw/theme/family-hero-blue.png",
  psychologyTop: "/sites/ykyw/theme/psychology-top-blue.png",
  womenBg: "/sites/ykyw/theme/women-bg-blue.png",
  chatBtn: "/sites/ykyw/theme/chat-btn-blue.png",
  sparkle: "/sites/ykyw/theme/icon-sparkle.png",
  psychologyGlow: "/sites/ykyw/theme/tpl3-avatar-glow.png",
  womenGlow: "/sites/ykyw/theme/tpl4-avatar-glow.png",
};
