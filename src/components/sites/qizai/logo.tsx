import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#f7f1e8" : "#2c2a26";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="七仔首页">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="10.5" fill="none" stroke={ink} strokeWidth="1.4" />
        <circle cx="14" cy="14" r="6.2" fill="none" stroke={ink} strokeWidth="1.2" />
        <circle cx="19.2" cy="16.6" r="1.15" fill={ink} />
      </svg>
      <span className="qz-serif text-[1.65rem] leading-none tracking-wide" style={{ color: ink }}>
        七仔
      </span>
    </Link>
  );
}
