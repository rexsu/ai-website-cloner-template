# Bohrium Science Space - Website Clone Documentation

This directory contains a comprehensive inspection of https://www.bohrium.com/en/bohrscience captured on November 12, 2026.

## 📁 Contents

### Documentation
- **README.md** - This file, overview of all documentation
- **PAGE_BRIEF.md** - Detailed page analysis with full content, design system, and technical notes
- **INSPECTION_REPORT.md** - Executive summary and clone readiness assessment

### Screenshots (Desktop 1440x900)
- 17 PNG files covering entire page from hero to footer
- Sequential naming: `desktop-hero-chinese.png`, `desktop-section-1-video.png`, etc.
- Total size: ~5.5 MB

## 🎯 Quick Start

1. **Read PAGE_BRIEF.md first** - Contains all text content, color codes, and specifications
2. **Review screenshots** in order (hero → section-1 → section-2 → ... → footer)
3. **Check INSPECTION_REPORT.md** for implementation recommendations

## 🖼️ Screenshot Map

| File | Section | Key Content |
|------|---------|-------------|
| `desktop-hero-chinese.png` | Hero | Headlines, download CTAs, promo banner |
| `desktop-section-1-video.png` | Video | Demo video player with controls |
| `desktop-section-2-research.png` | Research | Value proposition text |
| `desktop-section-3-scimaster.png` | SciMaster | Feature 1: Research & hypotheses |
| `desktop-section-4-execution.png` | Execution | Feature 2: Scientific execution |
| `desktop-section-5-biomaster.png` | BioMaster | RNA velocity analysis preview |
| `desktop-section-6-results.png` | Results | Feature 3: Results & review |
| `desktop-section-7-citations.png` | Citations | Citation and data checking |
| `desktop-section-8-experts.png` | Experts | AI expert selection tabs |
| `desktop-section-9-matmaster.png` | MatMaster | Materials expert details |
| `desktop-section-10-biomaster-chart.png` | Chart | Scientific visualization detail |
| `desktop-section-11-why-section.png` | Why | Value proposition section |
| `desktop-section-12-process-diagram.png` | Diagram | Infrastructure flow visualization |
| `desktop-section-13-infrastructure.png` | Infrastructure | 3-pillar support systems |
| `desktop-section-14-case-studies.png` | Cases | Real problem introduction |
| `desktop-section-15-download-cards.png` | Downloads | macOS/Windows cards |
| `desktop-footer.png` | Footer | Links and company info |

## 🎨 Design System Quick Reference

### Colors
```
Purple Brand: #7B42F6
Background: #FFFFFF
Text Primary: #1F2329
Text Secondary: #4E5969
Lavender BG: #F3F0FF
```

### Typography
```
Font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
      "Helvetica Neue", Arial, "PingFang SC", sans-serif
```

### Spacing
```
Base unit: 4px
xs:4px, sm:8px, md:12px, lg:16px, xl:24px, xxl:32px
```

## 🏗️ Page Structure

```
Header (Sticky)
  ├─ Logo + Beta Badge
  └─ CTAs: "去体验" | "立即下载"

Hero
  ├─ Headline + Subheadline
  ├─ Promo Banner (30天Plus会员)
  ├─ Download Buttons (macOS | Windows)
  └─ Product Screenshot

Video Section
  └─ Demo Video (0:37/1:06)

Features (Numbered 1-3)
  ├─ [1] Research & Hypothesis (SciMaster)
  ├─ [2] Scientific Execution (BioMaster)
  └─ [3] Results & Review (Citations)

AI Experts
  ├─ BioMaster (Biomedical)
  ├─ PharmMaster (Drug R&D)
  └─ MatMaster (Materials)

Infrastructure
  ├─ Process Diagram
  └─ 3 Support Pillars

Downloads
  └─ macOS + Windows Cards

Footer
  ├─ About | Research
  └─ Legal | Support
```

## ⚠️ Important Notes

1. **Language**: Despite `/en/` URL, all content is **Chinese only**
2. **Mobile**: Desktop screenshots only; mobile views not captured
3. **Framework**: Next.js (React-based)
4. **CDN**: cdn.bohrium.com
5. **Theme**: data-theme="domestic"

## 🚀 Clone Implementation Checklist

- [ ] Set up Next.js project
- [ ] Implement CSS variable design system
- [ ] Create component library (Button, Card, Badge)
- [ ] Build Header (sticky navigation)
- [ ] Build Hero section
- [ ] Build Video section
- [ ] Build 3 numbered feature sections
- [ ] Build AI experts tab system
- [ ] Build infrastructure diagram
- [ ] Build download section
- [ ] Build footer
- [ ] Add responsive breakpoints
- [ ] Implement scroll animations
- [ ] Optimize images
- [ ] Test cross-browser

## 📞 Contact & Attribution

- **Original Site**: https://www.bohrium.com/en/bohrscience
- **Inspection Date**: November 12, 2026
- **Documentation**: Autonomous Cloud Agent

---

For detailed specifications, see **PAGE_BRIEF.md**  
For implementation guidance, see **INSPECTION_REPORT.md**
