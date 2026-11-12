# Website Inspection Report: Bohrium Science Space
**URL:** https://www.bohrium.com/en/bohrscience  
**Inspection Date:** November 12, 2026  
**Task:** Pixel-perfect clone source inspection

---

## ✅ Inspection Complete

### Deliverables

#### 1. Screenshot Collection
**Total Screenshots: 19**

##### Desktop Screenshots (16 files, ~1440x900)
- ✅ Hero section with main headline and CTAs
- ✅ Video/demo showcase section  
- ✅ Main value proposition transition
- ✅ Feature 1: Research & Hypothesis (调研与假设)
- ✅ Feature 2: Scientific Execution (科研执行) 
- ✅ Feature 3: Results & Review (成果与审查)
- ✅ AI Subject Experts section with tabs
- ✅ "Why it works" process flow diagram
- ✅ Download cards section
- ✅ Complete footer with legal information

##### Mobile Screenshots (3 files, 390x844)
- ✅ Mobile hero section
- ✅ Mobile content sections
- ✅ Mobile responsive layouts

#### 2. Detailed Documentation
- ✅ **PAGE_BRIEF.md** - Comprehensive 15KB markdown document with:
  - Complete section-by-section breakdown in Chinese and English
  - Exact CSS color codes from DevTools inspection
  - Typography specifications
  - Layout measurements
  - Interaction descriptions
  - Content strategy analysis

---

## 📊 Page Structure Analysis

### Section Order (Top to Bottom)

1. **Sticky Header** - Logo, Beta badge, CTA buttons
2. **Hero Section** - Main headline, sub-headline, promotional banner, download buttons
3. **Video Demo** - "Start research from here" showcase
4. **Value Proposition** - Core message about integrated workflow
5. **Feature 1** - Research & Hypothesis with SciMaster UI
6. **Feature 2** - Scientific Execution with BioMaster example
7. **Feature 3** - Results & Review with LaTeX output
8. **AI Experts Selection** - Tabbed interface for BioMaster, PharmMaster, MatMaster
9. **Process Diagram** - Three-circle workflow visualization
10. **Real Problem CTA** - Download cards repeated
11. **Footer** - About section, navigation links, legal info

---

## 🎨 Design Specifications Extracted

### Color System
```
Primary Brand: #6366F1 (Purple)
Background: #FFFFFF (White)
Text Primary: #1f2329 (Near Black)
Text Secondary: #4e5969 (Gray)
Accent Blue: #165dff (Brand Primary)
Footer: #000000 (Black)
```

### Typography
- **Font Stack:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei"
- **Scales:** 12px/13px/14px/16px/20px
- **Weights:** Regular (400), Bold (700)

### Spacing & Layout
- **Max Width:** ~1200px
- **Section Padding:** 80-100px vertical
- **Border Radius:** 4px (small), 8px (medium), 12px (large), 50px (pills)

---

## 🖼️ Visual Elements Catalog

### UI Mockups Captured
1. Document viewer with scientific papers
2. File management cards (TEX, BIB, JSON, MD, PDF)
3. Data tables with Gene/Tier/Reference columns
4. Chat-style AI interaction interface
5. UMAP/t-SNE biological plots
6. LaTeX project structure preview
7. Workflow automation task lists

### Decorative Elements
- Purple dot-matrix halftone patterns
- Light blue dot grid textures
- Floating callout boxes
- Progress indicators
- Numbered step badges (1, 2, 3)

---

## 🔤 Exact Text Content

### Key Headlines (Chinese with English translations)

**Hero:**
```
接管体力活 启发科学家
(Take over manual labor, inspire scientists)
```

**Value Proposition:**
```
从一个科研问题开始，把调研、验证和成果整理连起来
(Start from a scientific research question, connect research, verification, and results organization)
```

**Sub-headline:**
```
你不必再在文献、数据、软件和计算环境之间反复切换。
(You no longer have to switch repeatedly between literature, data, software, and computing environments.)
```

### CTAs (Call-to-Actions)
- 去体验 (Go Experience)
- 立即下载 (Download Now)
- 下载 macOS 版 (Download macOS version)
- 下载 Windows 版 (Download Windows version)

---

## 🎯 Notable Interactions Observed

### Header
- Fixed/sticky positioning
- Two distinct button styles (ghost vs solid)
- Language switcher present

### Scroll Behavior
- Numbered sections reveal sequentially
- UI mockups have subtle parallax effects
- Section badges highlight on scroll

### Tabs (AI Experts)
- Active tab: white background with shadow
- Inactive tabs: gray background
- Content switches smoothly

### Hover States (Inferred)
- Buttons likely darken or shift opacity
- Download cards probably scale slightly
- Links change color

---

## 🌐 Responsive Design Notes

### Desktop (1440px)
- Two-column layouts for features
- Side-by-side download buttons
- Multi-column footer

### Mobile (390px)
- Single column stacking
- Vertical button arrangement
- Footer sections collapse
- Font sizes scale down 10-15%
- Padding reduced to 16-24px

---

## ⚙️ Technical Stack Identified

- **Framework:** Next.js (/_next/static/ paths)
- **Styling:** CSS-in-JS with design tokens
- **Math Rendering:** KaTeX support (counter-reset evidence)
- **Fonts:** System font stack with Chinese support
- **Scroll:** Custom overflow handling

---

## 📁 File Locations

All assets saved to: `/opt/cursor/artifacts/bohrscience-source/`

**Files:**
```
01-desktop-hero.webp
02-desktop-video-section.webp
03-desktop-transition-section.webp
04-desktop-feature1-research.webp
05-desktop-feature2-execution.webp
06-desktop-feature2-detail.webp
07-desktop-feature3-results.webp
08-desktop-feature3-detail.webp
09-desktop-experts-section.webp
10-desktop-experts-tabs.webp
11-desktop-why-section.webp
12-desktop-process-diagram.webp
13-desktop-resources-detail.webp
14-desktop-real-problem-section.webp
15-desktop-download-cards.webp
16-desktop-footer.webp
17-mobile-hero-390x844.webp
18-mobile-content1.webp
19-mobile-content2.webp
PAGE_BRIEF.md (15KB detailed documentation)
INSPECTION_REPORT.md (This file)
```

---

## 🎬 Footer Content

### About Section (关于玻尔)
```
玻尔（Bohrium）是专为全球科研人员打造的专业科研平台。
基于真实权威文献和可追溯引用，玻尔致力于构建面向 AI 时代的全新科研工作流，
让知识的获取、理解、产出与沉淀变得更高效、更可信。

我们相信，AI 时代的科研不应该只是回答问题，而是能真正参与科研任务，
我们希望，玻尔能够助力千千万万的科研人员更快走完从知识获取到学术产出的关键路径。
```

### Navigation Links
- **携手科研:** EDU科研加速计划, 合作咨询
- **法律与合规:** 隐私政策, 服务协议
- **帮助与支持:** 帮助中心, 更新日志, 用户共建, 联系我们

### Legal
```
版权所有 © 2022-2030 北京深势科技股份有限公司
[Multiple ICP and security registration numbers]
营业执照
```

---

## ✨ Key Insights for Cloning

### Design Philosophy
- **Minimalist & Scientific** - Heavy use of whitespace
- **Trust & Authority** - Professional typography and layout
- **Clear Hierarchy** - Numbered sections guide users
- **Product-Focused** - Large UI mockups showcase functionality

### User Flow
1. Hook with bold value proposition
2. Show product in action (video)
3. Explain three-step workflow
4. Demonstrate specialized capabilities
5. Build credibility with process diagram
6. Convert with download CTAs

### Content Strategy
- **Bilingual approach** - Chinese primary, English URL
- **Technical but accessible** - Scientific terms without jargon overload
- **User-centric language** - Addresses researcher directly ("你")
- **Concrete examples** - Real paper citations, specific analysis types

---

## 🚀 Ready for Clone Implementation

All necessary information has been captured for a pixel-perfect Next.js implementation:
- ✅ Complete visual reference via 19 screenshots
- ✅ Exact color codes from DevTools
- ✅ Typography specifications
- ✅ All text content in both languages
- ✅ Layout measurements and spacing
- ✅ Interaction patterns documented
- ✅ Responsive breakpoints identified
- ✅ Technical stack insights

**Total Inspection Time:** ~25 minutes  
**Total Assets:** 7.3MB

---

*Inspection completed autonomously by Claude Cloud Agent on November 12, 2026*
