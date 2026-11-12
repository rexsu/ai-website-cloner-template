# Bohrscience page brief

Source: https://www.bohrium.com/en/bohrscience (https://bohrium.com/en/bohrscience redirects here).

Local route: `/en/bohrscience`.

The `/en/` URL is served in Chinese. `html lang` is `en`, and analytics treat a path starting with `/en` as English, but the rendered landing copy, title, and footer are Chinese. This clone matches that rendered page.

## Section order

1. Sticky header: mark, inverted wordmarks, Beta, 去体验, 立即下载 (`#downloads`).
2. Hero: two-line title, intro, photon benefits, macOS/Windows downloads, autoplaying product video.
3. Research: three alternating feature rows with viewport-played videos.
4. Experts: BioMaster / PharmMaster / MatMaster tabs. Heading changes immediately; the video crossfades after it can play.
5. Environment diagram image.
6. Download cards. Hover or focus reveals the installer buttons.
7. Black footer with about copy, outbound links, hover popovers, and legal filings.

## Layout

- Page scroll lives on `main` (`height: 100dvh; overflow: auto`), not the document.
- Content width is 1200px. Gutter is `max(64px, (100vw - 1200px) / 2)`, 40px under 1100px, 20px under 767px.
- Under 767px the header, hero video, and download section are hidden. The hero shows “请在web端下载”. Feature rows stack.

## Interactions

- Feature and expert videos play when 15% visible (200px root margin) and pause outside. Only the selected expert video is active.
- Download metadata comes from `/en/bohrscience/download`, which proxies `https://www.bohrium.com/bohrscience/download` and falls back to the installers captured on 2026-11-12 (0.10.20).
- On macOS the hero button downloads the detected chip. Otherwise hovering it opens Apple 芯片 / Intel 处理器.
- 合作咨询 and 联系我们 open WeChat QR popovers. 联系我们 also copies `support@bohrium.com`.

## Assets

Images and icons are in `public/sites/bohrscience/`. Product videos stay on `cdn.bohrium.com` (hero `Scimaster0819.mp4` is 118MB; the six demo files are about 4–12MB each).

Out-of-scope links (experience, EDU, agreements, help, changelog, filings) still point at Bohrium.
