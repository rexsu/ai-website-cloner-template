import Link from "next/link";
import { finishes } from "./content";
import { PageShell } from "./site-chrome";

export function StorePage() {
  return (
    <PageShell hero>
      <section className="bg-[#f7f1e8] px-5 pb-16 pt-36 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">选购</p>
          <h1 className="qz-h2 mt-3 max-w-3xl">
            从陪伴开始，
            <br />
            而不是从价格开始。
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed">七仔戒指一次性 ¥1299（支付宝）。退换政策与会员是否另收费待确认。</p>
          <Link href="/checkout" className="qz-btn qz-btn-blue mt-6 inline-flex">
            ¥1299 一次性购买
          </Link>
        </div>
      </section>
      <section className="bg-[#f7f1e8] px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Link href="/store/rings/qizai-ring" className="overflow-hidden rounded-[28px] bg-[#ece6dc]">
            <img src="/sites/qizai/product/life-silver.jpg" alt="银色戒指佩戴" className="h-80 w-full object-cover" />
            <div className="flex items-end justify-between p-6">
              <div>
                <p className="text-sm text-[#6a6560]">现在能看的</p>
                <h2 className="qz-serif mt-1 text-4xl">七仔戒指</h2>
              </div>
              <p className="text-sm">¥1299 一次性</p>
            </div>
          </Link>
          <div className="rounded-[28px] bg-[#1c1b1a] p-6 text-[#f7f1e8]">
            <h2 className="qz-serif text-3xl">买之前可以确认的</h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/85">
              <li>尺寸以试戴为准，线上尺码表待确认。</li>
              <li>退换期限待确认，页面不写「30 天无理由」。</li>
              <li>会员是否另收费，待确认。</li>
              <li>支持时段待确认。紧急情况请联系当地服务。</li>
            </ul>
            <Link href="/sizing" className="qz-btn qz-btn-light mt-8 inline-flex">
              怎么量手指
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1100px]">
          <h2 className="qz-serif text-3xl">外观方向</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {finishes.map((item) => (
              <Link key={item.id} href="/store/rings/qizai-ring#finishes" className="rounded-[22px] bg-white p-4">
                <img src={item.image} alt="" className="mx-auto h-36 w-36 object-contain" />
                <p className="mt-2 text-center">{item.name}</p>
                <p className="text-center text-xs text-[#6a6560]">{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
