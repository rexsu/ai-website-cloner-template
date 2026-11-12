# Recursion platform

Source: https://recursion.com/platform
Local: `/` and `/platform`
Last published on the source: Thu Nov 05 2026 18:16 UTC

Webflow page (`recursion-new`). Visible sections, top to bottom:

1. Fixed nav, 100px. Transparent with a white wordmark over the hero. After about 10% of page scroll it fades to a white bar, black wordmark, and `#363636` links. Scrolling down translates it `-111px` in 150ms; scrolling up returns it in 200ms. Dropdowns open on click. The menu collapses at 991px.
2. Hero, 400px. Looping muted cover video, left navy wash `linear-gradient(90deg, #04003199, transparent)`, and a bottom fade into `#eaeaea`. Headline is Messina Serif Light 54px / 110%, tracking `-2px`, typed at 40ms per character.
3. Grey intro. Gradient `#eaeaea` to `#f9f9f9`. Heading is a clipped gradient `#a64cc4` to `#e01c88`, Messina Sans 32/36 semibold. Body is Messina Sans 18px / 120% inside an 80% column of a 1160px container.
4. Chapter player on `#262626`. YouTube `hRw0qFX5ReE` at 16:9, about two-thirds of the row, with seven chapter buttons. Hover recolors the label and the icon mask. The row stacks under 768px.
5. White platform section, same type column, outline button to https://www.rxrx.ai/, then the OS diagram.
6. Footer on `#f5f5f5`. Rainbow Inter headline, BioHive mark, contact, links, and social icons.

Two Webflow sections (`Decoding biology…` and the pipeline block) use `.is-hidden` and are not rendered on the live page.

Out-of-scope links stay on recursion.com, ir.recursion.com, or the original external URL. Only `/` and `/platform` are local.

Fonts in use: Messina Sans 400/600/700, Messina Serif 300, Messina Sans Mono 400, Inter 300/600. Files came from the source CDN.
