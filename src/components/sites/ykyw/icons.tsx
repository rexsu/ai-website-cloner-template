import { wbIconMarkup } from "./icon-markup";

type WbIconProps = {
  name: string;
  className?: string;
};

export function WbIcon({ name, className }: WbIconProps) {
  const key = name.replace(/^wb-/, "");
  const markup = wbIconMarkup[key] ?? wbIconMarkup["agent-2"] ?? "";

  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

export function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
