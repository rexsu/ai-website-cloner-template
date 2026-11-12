# Lower Sections Documentation - Bohrium BohrScience

**Date**: November 12, 2026  
**Focus**: Detailed capture of sections below the hero  
**Method**: Custom scroll container with mouse wheel events

---

## Execution Summary ✅

Successfully captured all lower sections with proper scrolling technique after identifying that the page uses a custom scroll container (`#scroll-container`) instead of standard body scrolling.

### Scrolling Method Used
```javascript
// Body has overflow: hidden
// Must use mouse wheel or scroll specific container
page.mouse.click(720, 450);  // Focus page
page.mouse.wheel(0, 300);     // Scroll 300px at a time
```

---

## Screenshots Captured (12 new files, 2.2MB)

| File | Size | Description |
|------|------|-------------|
| `desktop-intro.png` | 147KB | Introduction "从一个科研问题开始..." |
| `desktop-feature-1.png` | 284KB | Feature 1: 调研与假设 (Research & Hypothesis) |
| `desktop-feature-2.png` | 189KB | Feature 2: 科研执行 (Research Execution) |
| `desktop-feature-3.png` | 194KB | Feature 3: 成果与审查 (Results & Review) |
| `desktop-specialists.png` | 203KB | AI Specialists overview |
| `desktop-specialists-biomaster.png` | 267KB | BioMaster tab active |
| `desktop-specialists-pharmmaster.png` | 227KB | PharmMaster tab active |
| `desktop-specialists-matmaster.png` | 293KB | MatMaster tab active |
| `desktop-capabilities.png` | 177KB | "为什么能把科研任务真正做下去" |
| `desktop-cta.png` | 62KB | Final CTA with download buttons |
| `desktop-footer.png` | 91KB | Footer with navigation |
| `desktop-download-dropdown.png` | 36KB | Header download dropdown |

**Location**: `/opt/cursor/artifacts/bohrscience-source/`

---

## Video Assets (7 MP4 files)

All hosted at: `https://cdn.bohrium.com/bohrium/web/static/media/`

### Primary Video
**Scimaster0819.mp4**
- Autoplay: ✅ Yes
- Loop: ✅ Yes
- Controls: ✅ Yes
- Usage: Main feature demonstration video

### Supporting Videos (Background/Loop)
**bohr001.mp4** through **bohr006.mp4**
- Autoplay: ❌ No
- Loop: ✅ Yes
- Controls: ❌ No
- Usage: Silent looping backgrounds for feature sections

**Total**: 7 video files, all MP4 format

---

## Image Assets (15 images + 1 background)

### Logo & Branding
```
Bohrium Mark:
https://cdn1.deepmd.net/static/img/db7c5c85bohrium-mark.png
Size: 1024x1024

Bohr Wordmark (SVG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/wordmark-bohr.11clfujxkkpk1.svg
Size: 42x19

Space Wordmark (SVG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/wordmark-space.0uwl1n3iiyrgi.svg
Size: 77x19
```

### Platform Icons
```
Apple Icon (SVG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-apple.16ty3ogr0l0rb.svg
Size: 44x52

Windows Icon (SVG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-windows.1q09-xkf9viwq.svg
Size: 64x64

Download Icon (SVG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-download.0b16a3d_9q7wi.svg
Size: 18x18

Photon Icon (PNG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-photon.14esds0g3usvm.png
Size: 104x104

Beian Icon (PNG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/icon-beian.1ehmtrtyqa_48.png
Size: 36x40 (Chinese compliance badge)
```

### Feature Illustration
```
Workflow Diagram (PNG):
https://cdn1.deepmd.net/static/img/4852bc0cimg_v3_0214p_016eca98-f60b-4053-bec9-902f0c4f36eg.png
Size: 4800x2568 (high-resolution)
Alt: "科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
```

### Background
```
Hero Background (PNG):
https://cdn.bohrium.com/bohrium/web/front-x/_next/static/media/hero-background.3e0cprv3c08an.png
Usage: Gradient/pattern overlay for hero section
```

---

## Section Measurements

### Typography Hierarchy

| Section | Font Size | Weight | Line Height | Color | Bottom Margin |
|---------|-----------|--------|-------------|-------|---------------|
| **Intro Heading** | 50px | 600 | 70px | rgb(9,9,9) | 0px |
| **Feature 1 Heading** | 40px | 600 | 52px | rgb(9,9,9) | 10px |
| **Feature 2 Heading** | 40px | 600 | 52px | rgb(9,9,9) | 10px |
| **Feature 3 Heading** | 40px | 600 | 52px | rgb(9,9,9) | 10px |
| **Specialists Heading** | 50px | 600 | 70px | rgb(9,9,9) | 0px |
| **Feature List Items** | 15px | - | - | - | 0px |

### Pattern Analysis
- **Major sections** (Intro, Specialists): 50px headings
- **Feature subsections**: 40px headings
- **Consistent weight**: 600 (semibold) for all headings
- **Consistent color**: rgb(9, 9, 9) - near black
- **List items**: Significantly smaller at 15px

---

## AI Specialists Section - Interactive Tabs

Successfully clicked and captured all three specialist tabs:

### BioMaster (生物医学研究)
- **Screenshot**: `desktop-specialists-biomaster.png` (267KB)
- **Icon**: Teal/cyan hexagonal molecular symbol
- **Interactive**: ✅ Tab clicks successfully
- **Content**: Unique to BioMaster specialist

### PharmMaster (药物研发)
- **Screenshot**: `desktop-specialists-pharmmaster.png` (227KB)
- **Interactive**: ✅ Tab clicks successfully
- **Content**: Shows pharmaceutical research features

### MatMaster (材料科学)
- **Screenshot**: `desktop-specialists-matmaster.png` (293KB)
- **Interactive**: ✅ Tab clicks successfully
- **Content**: Materials science focused

### Active Tab Styling
```css
background: rgb(247, 247, 248);  /* Light gray */
border-radius: 14px;
padding: 0px;  /* Padding likely on inner content */
box-shadow: none;
```

---

## Download Button Interactions

### Header "立即下载" Button
- **Found**: ✅ Yes
- **Clickable**: ✅ Yes
- **Dropdown Captured**: ✅ `desktop-download-dropdown.png`
- **Link**: `https://www.bohrium.com/en/bohrscience#downloads`

### Hero Download Buttons
**macOS Button**:
- Includes Apple icon
- Expected hover: Dropdown with Apple Silicon / Intel options
- **Hover capture**: ⚠️ Timeout (may require precise timing)

**Windows Button**:
- Includes Windows icon
- Expected hover: Dropdown with Windows variants
- **Hover capture**: ⚠️ Timeout (may require precise timing)

**Note**: Direct download URLs not exposed in href attributes. Likely handled by JavaScript with backend routing to latest versions.

---

## Footer Section

### Background & Style
```css
background: rgb(0, 0, 0);  /* Black */
padding: 0px;
```

### Footer Links Extracted

**Education & Collaboration**:
- EDU科研加速计划: `https://www.bohrium.com/edu-page`
- 用户共建: `https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview`

**Legal & Compliance**:
- 隐私政策 (Privacy Policy): `https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=2&business=Bohrium`
- 服务协议 (Terms of Service): `https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium`

**Help & Support**:
- 帮助中心 (Help Center): `https://bohrium-doc.dp.tech/docs/`
- 更新日志 (Changelog): `https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c`

### External Domains
- **bohrium.com** - Main site
- **platform.bohrium.com** - Platform/legal pages
- **bohrium-doc.dp.tech** - Documentation site
- **dptechnology.feishu.cn** - Feishu (Lark) collaboration docs

---

## Language Toggle Investigation

### Attempts Made
1. ✅ Set `Accept-Language: en-US` header
2. ✅ Searched DOM for language toggle elements
3. ✅ Looked for "EN", "中文", "lang", "language" buttons/links

### Result
❌ **No visible language toggle found**

### Findings
- URL path contains `/en/` but content is 100% Chinese
- English metadata exists (Twitter/OG tags) but UI is Chinese
- No client-side language switcher visible
- Likely reasons:
  - English version not yet implemented
  - Geo-based redirect overrides URL
  - Language set via cookie/localStorage without UI toggle

---

## Technical Discoveries

### Custom Scroll Container
**Problem**: Standard `window.scrollTo()` doesn't work  
**Reason**: `body { overflow: hidden }`  
**Solution**: 
- Identified actual scrollable container: `#scroll-container`
- Used mouse wheel events: `page.mouse.wheel(0, 300)`
- Scrolled 300px at a time with 800ms delays

### Video Implementation
- Main video has controls for user interaction
- Background videos loop silently (no controls, no autoplay)
- No poster images - videos load directly
- All MP4 format

### Image Strategy
- SVG for icons and logos (scalable, small file size)
- PNG for complex graphics and photos
- Lazy loading on non-critical images
- High-resolution images (4800px) for retina displays

### Asset Hosting
- Primary CDN: `cdn.bohrium.com`
- Image CDN: `cdn1.deepmd.net`
- Consistent HTTPS across all assets

---

## Clone Implementation Notes

### Video Handling
```jsx
// Main feature video
<video 
  src="https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4"
  autoplay 
  loop 
  controls
/>

// Background videos
<video 
  src="https://cdn.bohrium.com/bohrium/web/static/media/bohr001.mp4"
  loop
  muted
  playsInline
/>
```

### Specialist Tabs Component
```jsx
// Tabs with active state
const [activeTab, setActiveTab] = useState('BioMaster');

<Tab 
  active={activeTab === 'BioMaster'}
  onClick={() => setActiveTab('BioMaster')}
  style={{
    background: activeTab === 'BioMaster' ? 'rgb(247, 247, 248)' : 'transparent',
    borderRadius: '14px'
  }}
/>
```

### Custom Scroll Container
```jsx
// Set up scroll container instead of body scroll
<div 
  id="scroll-container"
  style={{
    height: '100vh',
    overflowY: 'auto',
    scrollBehavior: 'smooth'
  }}
>
  {/* Page sections */}
</div>

// Body style
<style>
  body {
    overflow: hidden;
    overscroll-behavior: none;
  }
</style>
```

### Download Button with Dropdown
```jsx
<button 
  onClick={() => setShowDownload(!showDownload)}
  className="download-btn"
>
  立即下载
</button>

{showDownload && (
  <Dropdown>
    <a href="#downloads">
      <AppleIcon /> Apple Silicon
    </a>
    <a href="#downloads">
      <AppleIcon /> Intel Processor
    </a>
    <a href="#downloads">
      <WindowsIcon /> Windows
    </a>
  </Dropdown>
)}
```

---

## Data Files Generated

**lower-sections-data.json**:
- Complete asset inventory (images, videos, backgrounds)
- Computed styles for all sections
- Specialist tab information
- Download links
- Screenshot metadata

**Size**: ~10KB JSON

---

## Summary Statistics

| Category | Count | Total Size |
|----------|-------|------------|
| Screenshots | 12 | 2.2 MB |
| Videos | 7 | N/A (CDN hosted) |
| Images | 15 | N/A (CDN hosted) |
| Background Images | 1 | N/A (CDN hosted) |
| Specialist Tabs | 3 | Interactive |
| Footer Links | 6 | Extracted |
| Download Options | 2+ | macOS, Windows |

---

## Completion Checklist

- [x] Open page at 1440x900 desktop
- [x] Identify custom scroll container
- [x] Use mouse wheel for scrolling
- [x] Capture intro section
- [x] Capture Feature 1 (调研与假设)
- [x] Capture Feature 2 (科研执行)
- [x] Capture Feature 3 (成果与审查)
- [x] Capture AI specialists overview
- [x] Click BioMaster tab and capture
- [x] Click PharmMaster tab and capture
- [x] Click MatMaster tab and capture
- [x] Capture capabilities section
- [x] Capture final CTA section
- [x] Capture footer
- [x] Click header download button
- [x] Capture download dropdown
- [x] Attempt macOS button hover (timeout)
- [x] Attempt Windows button hover (timeout)
- [x] Extract computed styles
- [x] Inventory all images/videos
- [x] Test Accept-Language header
- [x] Document findings

**Status**: ✅ **100% Complete**

---

**Generated**: November 12, 2026, 2:48 PM UTC  
**Tool**: Playwright with custom scroll handling  
**Browser**: Chromium (headless=false for interaction)  
**Viewport**: 1440x900 desktop

