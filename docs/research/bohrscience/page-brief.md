# 玻尔·科学空间

Source: https://www.bohrium.com/en/bohrscience
Local route: `/`

The `/en/bohrscience` response is the domestic Chinese page (`data-theme="domestic"`, title 玻尔·科学空间). An overseas IP check still returns this Chinese copy.

## Sections

1. Sticky header: logo, Beta, 去体验 → https://www.bohrium.com/, 立即下载 → `#downloads`
2. Hero: two-part title, benefit line, macOS hover menu (Apple 芯片 / Intel 处理器), Windows download, product video
3. Research: three alternating feature rows with looping demos
4. Experts: BioMaster / PharmMaster / MatMaster tabs swap the heading and the demo video
5. Environment diagram
6. Download cards with hover actions
7. Black footer: about copy, external links, 合作咨询 and 联系我们 popovers

## Breakpoints

- Content column is 1200px. Gutters are `max(64px, (100vw - 1200px) / 2)`.
- ≤1100px: features stack, footer columns wrap.
- ≤767px: header and download section hide, hero drops the background and video, and shows “请在web端下载”.

## Motion

The page itself scrolls inside `main` (`height: 100dvh`). Feature and expert videos play while in view, muted and looping. The hero video also shows native controls. macOS and platform cards reveal actions on hover or keyboard focus.

## Downloads

- Apple 芯片: `cdn.dp.tech` darwin_aarch64 0.10.20 dmg
- Intel 处理器: `cdn.bohrium.com` darwin_x86_64 0.10.20 dmg
- Windows: `cdn.dp.tech` windows_x86_64 0.10.20 exe

## Assets

Images, icons, QR codes, and feature videos live in `public/sites/bohrscience/`. The hero demo (`Scimaster0819.mp4`, about 118MB) stays on the Bohrium CDN.
