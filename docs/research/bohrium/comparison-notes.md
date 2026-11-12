# Comparison notes — BohrScience

Checked against https://www.bohrium.com/en/bohrscience at 1440×900 and 390×844 (Asia/Shanghai, 2026-11-12).

## Matches

- Section order, Chinese copy, sticky header, hero benefits bar
- Feature 1–3 layout (including reversed feature 2) with captions + looping videos
- Expert tabs switch title/description/video (Bio / Pharm / Mat)
- Download cards hover flip (Apple/Intel + Windows)
- Footer columns, legal links, QR popovers
- Mobile: header hidden, hero CTAs replaced by「请在web端下载」

## Remaining gaps

- Hero `Scimaster0819.mp4` kept on Bohrium CDN (~113MB; not vendored)
- Download URLs snapshotted from `/bohrscience/download` (not live-fetched)
- Footer popovers are custom hover/click panels (not identical to source popover library)
- System Chinese fonts (PingFang SC) fall back on Linux agents
- No separate scroll-parallax beyond CSS sticky/layout from the source module

## Checks run

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Production `next start` interaction screenshots under `docs/design-references/bohrium/` and `/opt/cursor/artifacts/bohrscience-compare/`
