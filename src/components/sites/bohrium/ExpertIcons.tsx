export function BioMasterIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <defs>
        <linearGradient id="bioGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="#ECFEFF" />
      <path
        d="M10 8c4 3 8 3 12 0M10 24c4-3 8-3 12 0M16 8v16"
        fill="none"
        stroke="url(#bioGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.2" fill="#14B8A6" />
    </svg>
  );
}

export function PharmMasterIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <defs>
        <linearGradient id="pharmGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="#F5F3FF" />
      <path
        d="M11.5 20.5 20.5 11.5a3.2 3.2 0 0 1 4.5 4.5L16 25a3.2 3.2 0 0 1-4.5-4.5Z"
        fill="url(#pharmGrad)"
      />
      <path
        d="M14 18l4-4"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MatMasterIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <defs>
        <linearGradient id="matGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#222d51" />
          <stop offset="100%" stopColor="#101629" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#matGrad)" />
      <path
        d="M16 7.5 24 12v8l-8 4.5L8 20v-8l8-4.5Z"
        fill="none"
        stroke="#70d9eb"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2.2" fill="#70d9eb" />
    </svg>
  );
}
