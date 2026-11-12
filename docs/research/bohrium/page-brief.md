# BohrScience page brief

Source: https://www.bohrium.com/en/bohrscience  
Local routes: `/` (homepage), `/en/bohrscience`  
Site key: `bohrium`

## Route map

| Source | Local |
| --- | --- |
| https://www.bohrium.com/en/bohrscience | `/` and `/en/bohrscience` |

## Section order

1. Sticky header — logo wordmarks + Beta + 去体验 / 立即下载
2. Hero — H1, intro, Photon benefits bar, macOS/Windows downloads, demo video (`Scimaster0819.mp4`)
3. Research intro — centered H2
4. Feature 1 — 调研与假设 + `bohr001.mp4`
5. Feature 2 (reversed) — 科研执行 + `bohr002.mp4`
6. Feature 3 — 成果与审查 + `bohr003.mp4`
7. Experts — BioMaster / PharmMaster / MatMaster tabs + `bohr004-006.mp4`
8. Environment — workflow image
9. Downloads — macOS (Apple/Intel) + Windows cards
10. Footer — about, nav, legal

## Design tokens (from source CSS module)

- Text: `#090909`, secondary `#333` / `#5d5d66` / `#73737b`
- Accent purple: `#5900de` / `#6f2cff` / `#5900ff`
- Surfaces: `#fff`, `#f7f7f8`, footer `#000`
- Font: PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
- Content width: 1200px with `--page-gutter: max(64px, calc((100vw - 1200px) / 2))`
- Breakpoints: 1100px, 767px

## Interactions

- Header sticky with blur backdrop
- Hero macOS hover shows Apple/Intel options
- Platform cards flip to download actions on hover
- Expert tabs switch copy + crossfade videos
- Footer 合作咨询 / 联系我们 popovers with WeChat QR
- Download URLs from source `/bohrscience/download` (snapshotted)

## Assets

See `docs/research/bohrium/asset-map.md`. Screenshots in `docs/design-references/bohrium/`.
