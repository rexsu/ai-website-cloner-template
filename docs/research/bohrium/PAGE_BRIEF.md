# Bohr Science Space — Page Brief

- **Source:** https://www.bohrium.com/en/bohrscience
- **Local routes:** `/`, `/en/bohrscience`
- **Site key:** `bohrium`
- **Observed:** 2026-11-12

## Route map

| Source | Local |
| --- | --- |
| https://www.bohrium.com/en/bohrscience | `/en/bohrscience` (also `/`) |

## Section order

1. Sticky header — brand wordmarks + Beta, 去体验 / 立即下载
2. Hero — dual-line H1, benefits strip, macOS/Windows CTAs, hero demo video
3. Research intro heading
4. Feature 1 — 调研与假设 + SciMaster video
5. Feature 2 — 科研执行 + BioMaster video (reversed)
6. Feature 3 — 成果与审查 + SciMaster writing video
7. Experts — Bio / Pharm / Mat tabs with switching demo videos
8. Environment — workflow diagram image
9. Downloads — macOS / Windows hover cards
10. Footer — about + nav + legal

## Assets

Stored under `public/sites/bohrium/`:

- `icons/` mark, wordmarks, OS icons, expert icons, photon, beian
- `images/hero-background.png`, `environment-workflow.png`, `business-license.jpeg`
- `videos/Scimaster0819.mp4` (compressed from source), `bohr001`–`bohr006.mp4`

## Interactions

- Expert tabs update heading/description/video
- macOS platform card hover reveals Apple/Intel buttons
- Hero macOS CTA hover reveals architecture options
- Feature/hero videos autoplay when intersecting viewport (muted/loop)
- Out-of-scope links remain on bohrium.com / dp.tech destinations

## Design notes

- Font stack: PingFang SC / Hiragino Sans GB / Microsoft YaHei
- Accent purple `#5900de` / `#6f2cff`
- Page gutter: `max(64px, calc((100vw - 1200px) / 2))`
- Sticky frosted header 60px
