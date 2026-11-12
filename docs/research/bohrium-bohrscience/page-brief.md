# Bohrium BohrScience - Page Documentation

**URL**: https://www.bohrium.com/en/bohrscience  
**Title**: 玻尔·科学空间 (Bohr Science Space)  
**Captured**: 2026-11-12

⚠️ **Language Note**: Despite the `/en/` URL path, the site renders entirely in **Simplified Chinese**. The English metadata exists (Twitter/OG tags) but the visible content is Chinese.

---

## Page Overview

A modern, clean landing page for an AI-powered scientific research platform. The design uses a minimalist aesthetic with generous white space, purple accents, and alternating grid layouts showcasing product features.

---

## Section Order & Content

### 1. Hero Section
**Heading**: 接管体力活 启发科学家  
*(Take over manual labor, inspire scientists)*

**Subheading**: 在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，AI 负责把任务跑起来。  
*(In Bohr Science Space, work with AI scientists to complete research, analysis, computation, and results organization. You propose questions and set directions, AI runs the tasks.)*

**Promotional Banner**: 新用户注册送30天Plus体验会员，首次登录客户端再领10,000光子  
*(New users get 30-day Plus trial membership, first login receives 10,000 photons)*

**CTAs**: 
- 下载 macOS 版 (Download macOS version)
- 下载 Windows 版 (Download Windows version)

### 2. Introduction Section
**Heading**: 从一个科研问题开始，把调研、验证和成果整理连起来  
*(Start from a research question, connect research, verification, and results organization)*

**Subheading**: 你不必再在文献、数据、软件和计算环境之间反复切换。  
*(No need to constantly switch between literature, data, software, and computing environments.)*

### 3. Feature Section 1 - Research & Hypothesis
**Label**: 1. 调研与假设 (Research & Hypothesis)

**Heading**: 先看清问题，再决定研究什么  
*(See the problem clearly first, then decide what to research)*

**Description**: 提出研究问题，SciMaster 会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。

**Feature List**:
- 关键证据带有来源 (Key evidence with sources)
- 结论按共识、争议和空白整理 (Conclusions organized by consensus, controversy, and gaps)
- 可以把研究假设继续转成实验方案 (Can continue to turn research hypotheses into experimental plans)

### 4. Feature Section 2 - Research Execution
**Label**: 2. 科研执行 (Research Execution)

**Heading**: 把想法交给 AI 跑起来  
*(Hand ideas over to AI to run)*

**Description**: 确定方向后，AI 科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。

**Feature List**:
- 少花时间配置环境和参数 (Spend less time configuring environments and parameters)
- 过程和结果都可以查看 (Both process and results can be viewed)
- 可以根据结果继续追问和调整 (Can continue to inquire and adjust based on results)

### 5. Feature Section 3 - Results & Review
**Label**: 3. 成果与审查 (Results & Review)

**Heading**: 把结果整理成可以继续使用的成果  
*(Organize results into outcomes that can continue to be used)*

**Description**: AI 会把数据和分析结果整理为报告、图表或 LaTeX，并检查引用、数据和结论是否一致。

**Feature List**:
- 输出内容可以继续编辑 (Output content can be further edited)
- 证据、图表与结论可以核对 (Evidence, charts, and conclusions can be checked)
- 发现问题可以继续补充和修改 (Problems found can be supplemented and modified)

### 6. AI Specialist Section
**Heading**: 按研究任务，选择合适的 AI 学科专家  
*(Choose appropriate AI subject experts according to research tasks)*

**Description**: SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master 接手执行。

**Specialists Featured**:
- BioMaster · 生物医学研究 (Biomedical Research)
- Additional specialists (partially visible)

---

## Typography System

### Heading Scales
- **H1 (Hero)**: 60px / 600 weight / 84px line-height / rgb(9, 9, 9)
- **H2 (Section)**: 50px / 600 weight / 70px line-height / rgb(9, 9, 9)
- **H2 (Feature)**: 40px / 600 weight / 52px line-height / rgb(9, 9, 9)
- **Body Large**: 22px / 400 weight / rgb(51, 51, 51)
- **Body Regular**: 16px / 400 weight / rgb(115, 115, 123)
- **Label**: 16px / 600 weight / rgb(23, 23, 26)

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", 
             "Segoe UI Emoji", "Segoe UI Symbol"
```

For Chinese characters, the system uses PingFang SC, Microsoft YaHei, or similar.

---

## Color Tokens

### Design System Variables (extracted from CSS)
```css
/* Text Colors */
--ds-color-text-primary: #1f2329
--ds-color-text-secondary: #4e5969
--ds-color-text-tertiary: #86909c
--ds-color-text-inverse: #ffffff

/* Background Colors */
--ds-color-bg-primary: #ffffff
--ds-color-bg-secondary: #f7f8fa
--ds-color-bg-tertiary: #eef0f3

/* Brand Colors */
--ds-color-brand-primary: #165dff
--ds-color-brand-hover: #4080ff
--ds-color-brand-active: #0e42d2

/* Border Colors */
--ds-color-border-primary: #e5e6eb
--ds-color-border-secondary: #c9cdd4

/* Status Colors */
--color-success: #0ab268
--color-warning: #ff7d00
--color-error: #f47474
--color-info: #3b45e5
--color-primary: #3b45e5
```

### Actual Usage
- **Primary Text**: rgb(9, 9, 9) - Near black for headings
- **Secondary Text**: rgb(51, 51, 51) - Dark gray for body
- **Tertiary Text**: rgb(115, 115, 123) - Medium gray for descriptions
- **Accent Purple**: Used for labels, icons, and highlights
- **Button Primary**: rgb(9, 9, 9) black background with white text
- **Button Secondary**: White background with thin border

---

## Layout Measurements

### Container
- **Max Width**: Content sections use 120px horizontal margins (effectively ~1200px centered content area at 1440px viewport)
- **Section Padding**: Generous vertical spacing (80-120px between major sections)
- **Grid Layout**: Alternating 50/50 split for feature sections (text left/image right, then reversed)

### Spacing System
```css
--ds-spacing-xs: 4px
--ds-spacing-sm: 8px
--ds-spacing-md: 12px
--ds-spacing-lg: 16px
--ds-spacing-xl: 24px
--ds-spacing-xxl: 32px
```

### Border Radius
```css
--ds-radius-sm: 2px
--ds-radius-md: 4px
--ds-radius-lg: 8px
--border-radius-lg: 12px
--border-radius-xl: 16px
--border-radius-pill: 999px
```

### Shadows
- **Card Shadow**: Soft, subtle shadows on floating UI mockups
- **Typical Value**: `0px 4px 10px 0px rgba(159, 186, 220, 0.2)`

---

## Asset Inventory

### Logo & Brand Assets
- **Primary Logo**: Purple square icon with "Bh" in white
- **Brand Name**: 玻尔科学空间 + Beta badge

### Images (from extraction)
All images served from CDN, high-resolution mockups of:
1. Product interface screenshots (SciMaster, BioMaster)
2. Scientific visualizations (cell diagrams, phase portraits)
3. Document/report mockups
4. Background gradient patterns with dot matrix

### Social/OG Image
- **URL**: https://cdn1.deepmd.net/static/img/ce7d26512.png
- Used for Twitter/OpenGraph previews

### Background Patterns
- Subtle dot matrix patterns in light purple
- Gradient overlays (white to light lavender)
- Geometric/molecular iconography for specialist cards

### Video Assets
- Hero section may contain auto-playing product demo video
- Format: MP4 with controls and progress bar visible in screenshots

---

## Interaction Notes

### Header Behavior
- **Sticky/Fixed**: Header remains visible during scroll
- **Navigation Buttons**: 
  - "去体验" (Try it) - Secondary style, likely opens demo
  - "立即下载" (Download) - Primary style, triggers download modal/dropdown

### Download Buttons
- **Hover State**: Likely opacity change or slight background shift
- **Click Behavior**: Dropdown appears with platform options (Apple Silicon vs Intel, Windows variants)
- Both macOS and Windows options available

### Button Styles
- **Primary**: Black background (`rgb(9,9,9)`), white text, 16px border-radius
- **Secondary**: White background, thin border, rounded
- **Label Pills**: Light purple background, dark purple text, pill-shaped

### List Items
- Purple chevron (`>`) icons indicate key features
- Likely static, not interactive links

### Scroll Animations
- Feature sections likely fade-in or slide-up as user scrolls
- Product mockups may have parallax or reveal effects

### Modal/Popover
- Download buttons trigger popovers with specific download options
- Footer links trigger consultation/contact modals

---

## Responsive Differences

### Desktop (1440x900)
- Full two-column grid layouts
- Large typography (60px H1, 50px H2)
- Wide horizontal margins (120px)
- Side-by-side download buttons
- Product mockups shown at full size

### Mobile (390x844)
- Single column stacking
- Reduced font sizes
- Centered content with side padding
- Download buttons stack vertically
- Simplified "Please download on web" CTA replaces platform-specific buttons
- Navigation likely collapses to hamburger menu (not visible in captured viewport)

### Breakpoint Notes
- Major layout shift appears around 768px
- Mobile view is significantly simplified
- Hero promotional banner text wraps or condenses

---

## Technical Stack

### Framework
- **Next.js**: Evident from `_next/static` script paths and React structure
- **React**: Component-based architecture

### Styling
- **CSS Modules**: Class names follow pattern `module-name__hash__class-name`
- **Design System**: Comprehensive CSS custom properties for theming
- **System Fonts**: Uses native system font stack for performance

### Special Libraries
- **KaTeX**: Mathematical typesetting support detected (`katexEqnNo` counter)
- Suggests platform handles scientific notation/equations

### Performance
- **Lazy Loading**: Images use loading="lazy" attribute
- **CDN**: Assets served from `cdn.bohrium.com` and `cdn1.deepmd.net`

---

## Issues & Observations

### 1. Language Mismatch ⚠️
- **URL Path**: `/en/bohrscience` suggests English version
- **Actual Content**: 100% Simplified Chinese
- **Metadata**: English Twitter/OG descriptions but Chinese title
- **Possible Causes**: 
  - Geo-location redirect
  - Cookie/localStorage language preference
  - EN version not yet translated
  - Browser language header detection

### 2. Test Environment
- OG URL metadata points to `https://www.test.bohrium.com/bohrscience`
- Suggests this may be staging/preview environment

### 3. Beta Status
- Prominent "Beta" badge on logo
- Indicates product is in active development

### 4. Content Loading
- Page uses `overflow: hidden` on body
- Custom scrolling container likely for smooth animations
- May affect standard browser behavior

---

## Screenshot Inventory

### Desktop (1440x900)
- ✅ `desktop-hero.png` - Hero section with download buttons
- ✅ `desktop-full.png` - Complete page scroll capture
- ✅ `desktop-section-1.png` - Hero at scroll position 0
- ✅ `desktop-section-2.png` - Introduction + Feature 1 at 800px
- ✅ `desktop-section-3.png` - Features 2-3 at 1600px
- ✅ `desktop-section-4.png` - Feature 3 + Specialists at 2400px
- ✅ `desktop-section-5.png` - Footer at 3200px

### Mobile (390x844)
- ✅ `mobile-hero.png` - Mobile hero section
- ✅ `mobile-full.png` - Complete mobile page

### Data Files
- ✅ `extracted-data.json` - Basic extraction (sections, images, CSS vars)
- ✅ `detailed-data.json` - Comprehensive extraction (navigation, detailed styles, assets)

---

## Clone Implementation Notes

### Priority Elements
1. **Design System**: Implement CSS custom properties first
2. **Typography**: Set up font scales and system font stack
3. **Layout Grid**: 120px margins, centered content, alternating sections
4. **Components**: Button variants, label pills, feature lists with chevron icons
5. **Assets**: Prepare high-quality mockup images, background patterns

### Technical Recommendations
- Use Next.js for consistency with original
- Implement CSS Modules or Tailwind with design tokens
- Create reusable Section component with alternating layout prop
- Add scroll-triggered animations (Framer Motion or similar)
- Implement sticky header with blur backdrop
- Handle mobile responsiveness with single breakpoint at 768px

### Content Strategy
- **For EN Version**: Translate all Chinese text or verify if EN version exists elsewhere
- **For CN Version**: Use extracted text as-is
- Maintain exact typography hierarchy and spacing
- Preserve promotional messaging and CTAs

---

**Documentation Generated**: 2026-11-12  
**Tool**: Playwright + Custom extraction scripts  
**Viewport**: Desktop 1440x900, Mobile 390x844  
**Status**: ✅ Complete

---

## Lower Sections Evidence

### Additional Screenshots Captured

**New Desktop Screenshots (1440x900)**:
- ✅ `desktop-intro.png` (147KB) - Introduction section
- ✅ `desktop-feature-1.png` (284KB) - Feature 1: 调研与假设
- ✅ `desktop-feature-2.png` (189KB) - Feature 2: 科研执行
- ✅ `desktop-feature-3.png` (194KB) - Feature 3: 成果与审查
- ✅ `desktop-specialists.png` (203KB) - AI Specialists overview
- ✅ `desktop-specialists-biomaster.png` (267KB) - BioMaster tab active
- ✅ `desktop-specialists-pharmmaster.png` (227KB) - PharmMaster tab active
- ✅ `desktop-specialists-matmaster.png` (293KB) - MatMaster tab active
- ✅ `desktop-capabilities.png` (177KB) - Capabilities section
- ✅ `desktop-cta.png` (62KB) - Final CTA section
- ✅ `desktop-footer.png` (91KB) - Footer section
- ✅ `desktop-download-dropdown.png` (36KB) - Download dropdown

**Total**: 12 additional screenshots (2.2MB)

---

### Video Assets Discovered

All videos hosted on CDN: `cdn.bohrium.com/bohrium/web/static/media/`

1. **Scimaster0819.mp4**
   - URL: `https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4`
   - Autoplay: true
   - Loop: true
   - Controls: true
   - Usage: Main hero/feature video

2. **bohr001.mp4** through **bohr006.mp4**
   - URLs: `https://cdn.bohrium.com/bohrium/web/static/media/bohr00[1-6].mp4`
   - Autoplay: false
   - Loop: true
   - Controls: false
   - Usage: Feature section background videos or demonstrations

**Total Videos**: 7 MP4 files

---

### Image Assets Inventory (Lower Sections)

#### Logo & Brand Assets
```
https://cdn1.deepmd.net/static/img/db7c5c85bohrium-mark.png
- Bohrium mark logo (1024x1024)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/wordmark-bohr.11clfujxkkpk1.svg
- "Bohr" wordmark SVG (42x19)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/wordmark-space.0uwl1n3iiyrgi.svg
- "Space" wordmark SVG (77x19)
```

#### Icon Assets
```
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-photon.14esds0g3usvm.png
- Photon icon (104x104)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-apple.16ty3ogr0l0rb.svg
- Apple icon (44x52)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-windows.1q09-xkf9viwq.svg
- Windows icon (64x64)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-download.0b16a3d_9q7wi.svg
- Download icon (18x18)

https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-beian.1ehmtrtyqa_48.png
- Beian icon (36x40) - Chinese compliance badge
```

#### Hero Background
```
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/hero-background.3e0cprv3c08an.png
- Background pattern/gradient for hero section
```

#### Feature Illustration
```
https://cdn1.deepmd.net/static/img/4852bc0cimg_v3_0214p_016eca98-f60b-4053-bec9-902f0c4f36eg.png
- Large workflow diagram (4800x2568)
- Alt text: "科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
- Shows research workflow: input problem → AI breakdown → execution → output
```

---

### Computed Styles (Lower Sections)

#### Feature Section Headings

**Intro Heading** (50px):
```css
font-size: 50px;
font-weight: 600;
color: rgb(9, 9, 9);
line-height: 70px;
margin-bottom: 0px;
```

**Feature Headings** (40px):
```css
font-size: 40px;
font-weight: 600;
color: rgb(9, 9, 9);
line-height: 52px;
margin-bottom: 10px;
```

**Specialists Heading** (50px):
```css
font-size: 50px;
font-weight: 600;
color: rgb(9, 9, 9);
line-height: 70px;
margin-bottom: 0px;
```

#### Feature List Items
```css
padding: 0px;
margin: 0px;
font-size: 15px;
```

#### Specialist Cards (Active State)
```css
padding: 0px;
border-radius: 14px;
background: rgb(247, 247, 248); /* Light gray when active */
box-shadow: none;
```

#### Footer
```css
background: rgb(0, 0, 0); /* Black background */
padding: 0px;
color: rgb(9, 9, 9); /* Note: Color computed on child elements */
```

---

### AI Specialists Section Details

**Interactive Tabs**: Successfully identified and captured all three specialists:

1. **BioMaster** (生物医学研究)
   - Screenshot: `desktop-specialists-biomaster.png`
   - Tab clickable and shows unique content
   - Icon: Teal/cyan hexagonal molecular symbol
   
2. **PharmMaster** (药物研发)
   - Screenshot: `desktop-specialists-pharmmaster.png`
   - Tab clickable and shows unique content
   - Icon: Distinct from BioMaster
   
3. **MatMaster** (材料科学)
   - Screenshot: `desktop-specialists-matmaster.png`
   - Tab clickable and shows unique content
   - Icon: Distinct design

**Tab Behavior**:
- Clicking each tab changes the displayed content
- Active tab receives light gray background (rgb(247, 247, 248))
- Border radius: 14px
- Content includes description text and video/image demonstrations

---

### Download Button Interactions

#### Header Download Button ("立即下载")
- **Behavior**: Clickable, triggers dropdown
- **Screenshot**: `desktop-download-dropdown.png`
- **Link Found**: `https://www.bohrium.com/en/bohrscience#downloads`
- **Dropdown Style**: Appears below button, shows platform options

#### Hero Download Buttons
- **macOS Button**: Includes Apple icon, likely has hover dropdown
- **Windows Button**: Includes Windows icon
- **Hover Behavior**: Timeout during capture suggests hover state exists but may require specific timing
- **Expected Content**: Platform-specific download options (Apple Silicon, Intel, Windows variants)

**Note**: Direct download URLs not exposed in href attributes; likely handled by JavaScript/backend routing.

---

### Scroll Container Behavior

**Finding**: Page uses custom scroll container
- Body has `overflow: hidden`
- Actual scrolling happens in a child container with ID `#scroll-container`
- Standard `window.scrollTo()` does not work
- Must use mouse wheel events or scroll the specific container element

**Scroll Method Used**: 
```javascript
page.mouse.wheel(0, 300); // Scroll down 300px at a time
```

---

### Language Toggle Investigation

**Finding**: No visible language toggle found
- Tested with `Accept-Language: en-US` header
- Searched for buttons/links with "EN", "中文", "lang", "language"
- Content remains 100% Chinese despite `/en/` URL path
- Metadata contains English Twitter/OG descriptions but UI is Chinese

**Conclusion**: 
- Either no English version exists yet
- Or language switching requires cookie/localStorage setting not exposed in UI
- Or geo-based redirect overrides URL parameter

---

### Section Measurements Summary

| Section | Heading Size | Line Height | Content |
|---------|--------------|-------------|---------|
| Intro | 50px / 600 | 70px | 从一个科研问题开始... |
| Feature 1 | 40px / 600 | 52px | 先看清问题，再决定研究什么 |
| Feature 2 | 40px / 600 | 52px | 把想法交给 AI 跑起来 |
| Feature 3 | 40px / 600 | 52px | 把结果整理成可以继续使用的成果 |
| Specialists | 50px / 600 | 70px | 按研究任务，选择合适的 AI 学科专家 |

**Consistent Pattern**:
- Major section headings: 50px
- Feature subsection headings: 40px
- All headings use 600 font weight
- Color consistently rgb(9, 9, 9) (near black)

---

### Footer Structure

**Background**: Black (rgb(0, 0, 0))

**Expected Sections** (based on user query):
1. 关于玻尔 (About Bohrium)
2. 携手科研 (Collaboration in Research)
3. 法律与合规 (Legal & Compliance)
4. 帮助与支持 (Help & Support)

**Links Found in Footer**:
- EDU科研加速计划: `https://www.bohrium.com/edu-page`
- 隐私政策: `https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=2&business=Bohrium`
- 服务协议: `https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium`
- 帮助中心: `https://bohrium-doc.dp.tech/docs/`
- 更新日志: `https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c`
- 用户共建: `https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview`

---

### Asset URL Summary (Complete)

**CDN Domains**:
- `cdn.bohrium.com` - Primary CDN for Next.js assets and videos
- `cdn1.deepmd.net` - Static images and large assets
- `platform.bohrium.com` - Platform pages (agreements)
- `bohrium-doc.dp.tech` - Documentation
- `dptechnology.feishu.cn` - Collaboration docs (Feishu/Lark)

**Total Assets Extracted**:
- 15 Images (PNG, SVG)
- 7 Videos (MP4)
- 1 Background image
- Multiple icon sets for download buttons

**All assets served via HTTPS with lazy loading where appropriate.**

---

### Additional Observations

1. **Video Strategy**: 
   - Main feature video (`Scimaster0819.mp4`) has controls and autoplay
   - Supporting videos (`bohr001-006.mp4`) loop silently as backgrounds
   - No poster images specified (videos load directly)

2. **Image Optimization**:
   - SVG used for icons and wordmarks
   - PNG for photos and complex graphics
   - Lazy loading on non-critical images
   - Large images (4800px) served for high-DPI displays

3. **Scroll Behavior**:
   - Smooth custom scrolling
   - Fixed header persists
   - Sections animate in on scroll (likely)

4. **Interactive Elements**:
   - Specialist tabs fully functional
   - Download buttons trigger dropdowns
   - Hover states exist but may be subtle

5. **Footer Compliance**:
   - Beian icon present (Chinese regulatory requirement)
   - Legal links point to platform subdomain
   - Documentation hosted separately

---

**Documentation Updated**: November 12, 2026, 2:47 PM UTC  
**New Screenshots**: 12 files, 2.2MB  
**New Assets Catalogued**: 23 items (15 images + 7 videos + 1 background)  
**Status**: ✅ Complete lower sections documented

