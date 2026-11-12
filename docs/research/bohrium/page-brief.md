# Bohr Science Space (`/en/bohrscience`) — Page Brief

**Source:** https://www.bohrium.com/en/bohrscience  
**Local routes:** `/` (homepage), `/en/bohrscience`  
**Lang note:** URL is `/en/` but visible marketing copy is Simplified Chinese.

## Route / file ownership

| Source | Local route | Primary files |
| --- | --- | --- |
| `https://www.bohrium.com/en/bohrscience` | `/`, `/en/bohrscience` | `src/components/sites/bohrium/*`, `src/app/page.tsx`, `src/app/en/bohrscience/page.tsx` |

## Section order

1. Sticky header (logo + Beta + 去体验 / 立即下载)
2. Hero (headline, intro, photon benefits, macOS/Windows CTAs, Scimaster demo video)
3. Research intro heading
4. Feature 1 — 调研与假设 + `bohr001.mp4`
5. Feature 2 — 科研执行 (reversed) + `bohr002.mp4`
6. Feature 3 — 成果与审查 + `bohr003.mp4`
7. Experts showcase (Bio / Pharm / Mat tabs + videos 004–006)
8. Environment diagram image
9. Download platform cards (hover reveals arch buttons)
10. Black footer (about + nav + legal)

## Layout tokens

- Page gutter: `max(64px, calc((100vw - 1200px) / 2))`; 40px ≤1100px; 20px ≤767px
- Content width: ~1200px
- Header: 60px sticky, `backdrop-filter: blur(24px)`, bg `#ffffffb8`
- Brand accent purple: `#5900de` / `#6f2cff` / `#5900ff`
- Text: `#090909`, secondary `#5d5d66` / `#73737b`
- Font stack: PingFang SC, Hiragino Sans GB, Microsoft YaHei (+ Noto Sans SC fallback)

## Interactions

- Header download → `#downloads`
- Hero/platform download buttons call `/api/bohrscience/download` on source (local: open `#downloads` / disabled placeholder when URL unknown)
- Expert tabs switch title/description/video opacity
- Platform cards: hover face → actions (Apple Silicon / Intel, Windows)
- Mobile ≤767: hide header & desktop downloads; show “请在web端下载”; hide download section

## Out-of-scope outbound links (kept pointing to source)

- 去体验 → `https://www.bohrium.com/`
- Footer EDU / legal / help / ICP / business license URLs
