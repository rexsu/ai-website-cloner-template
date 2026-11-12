# Bohr Science Space — Page Brief

**Source:** https://www.bohrium.com/en/bohrscience  
**Local route:** `/en/bohrscience` (home `/` redirects here)  
**Language:** Chinese (Simplified) despite `/en/` path

## Route map

| Source | Local |
| --- | --- |
| https://www.bohrium.com/en/bohrscience | `/en/bohrscience` |
| https://www.bohrium.com/en/bohrscience#downloads | `/en/bohrscience#downloads` |
| `/bohrscience/download` (JSON) | `/api/bohrscience/download` (proxy) |

## Section order

1. Sticky header (logo + Beta + 去体验 / 立即下载)
2. Hero (headline, intro, Plus promo, macOS/Windows downloads, rotating product video)
3. Research intro + 3 alternating feature rows with demo videos
4. AI experts tab showcase (BioMaster / PharmMaster / MatMaster)
5. Environment diagram
6. Download cards (`#downloads`)
7. Footer (about + nav + legal)

## Typography / color

- Font: PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
- Text: `#090909`, body `#333` / `#5d5d66` / `#73737b`
- Accent: `#6f2cff`, `#5900ff`, hover `#5900de`
- Page gutter: `max(64px, calc((100vw - 1200px) / 2))`
- Scroll container: `main.page` is `100dvh` with internal overflow

## Assets

Under `public/sites/bohrium/`:

- Icons, wordmarks, hero background, workflow diagram
- Videos `bohr001`–`bohr006` local; hero `Scimaster0819.mp4` via CDN (≈118MB)

## Interactions

- macOS download hover reveals Apple Silicon / Intel options
- Platform cards flip face → actions on hover
- Expert tabs swap heading + active video
- Hero video autoplay muted loop
- Mobile ≤767px: hide header/downloads/demo; show “请在web端下载”

## Out of scope outbound links

Footer / 去体验 keep absolute `bohrium.com` / Feishu / platform agreement URLs.
