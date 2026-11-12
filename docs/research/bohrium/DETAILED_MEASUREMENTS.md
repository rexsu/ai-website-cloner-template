# Bohrium Science Space - DevTools Measurement Report
**URL:** https://www.bohrium.com/en/bohrscience  
**Viewport:** Desktop ~1440x900  
**Inspection Date:** November 12, 2026

---

## 🎨 Global Design System (CSS Variables)

### Color Palette
```css
/* Text Colors */
--ds-color-text-primary: #1f2329;       /* Main headlines, black text */
--ds-color-text-secondary: #4e5969;     /* Subtitles, medium gray */
--ds-color-text-tertiary: #86909c;      /* Light gray text */
--ds-color-text-inverse: #ffffff;       /* White text on dark backgrounds */

/* Background Colors */
--ds-color-bg-primary: #ffffff;         /* White background */
--ds-color-bg-secondary: #f7f8fa;       /* Light gray sections */
--ds-color-bg-tertiary: #eef0f3;        /* Tertiary background */

/* Border Colors */
--ds-color-border-primary: #e5e6eb;     /* Primary borders */
--ds-color-border-secondary: #c9cdd4;   /* Secondary borders */

/* Brand/Accent Colors */
--ds-color-brand-primary: #165dff;      /* Vibrant blue - primary CTA */
--ds-color-brand-hover: #4080ff;        /* Lighter blue - hover state */
--ds-color-brand-active: #0e42d2;       /* Darker blue - active state */

/* Purple Accent (Logo, badges, promo) */
--purple-primary: #6366F1;              /* Logo purple */
--purple-light: #E6E6FA;                /* Light purple backgrounds */
```

### Typography System
```css
/* Font Family */
--ds-font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                       "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", 
                       sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

--ds-font-family-mono: ui-monospace, SFMono-Regular, "SF Mono", Consolas, 
                       "Liberation Mono", Menlo, monospace;

/* Font Sizes */
--ds-font-size-xs: 12px;
--ds-font-size-sm: 13px;
--ds-font-size-md: 14px;    /* Base body size */
--ds-font-size-lg: 16px;
--ds-font-size-xl: 20px;

/* Line Heights */
--ds-line-height-tight: 1.2;
--ds-line-height-normal: 1.5;
--ds-line-height-loose: 1.75;

/* Font Weights */
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semibold */
font-weight: 700;  /* Bold */
```

### Spacing & Layout
```css
/* Spacing Scale */
--ds-spacing-xs: 4px;
--ds-spacing-sm: 8px;
--ds-spacing-md: 12px;
--ds-spacing-lg: 16px;
--ds-spacing-xl: 24px;
--ds-spacing-xxl: 32px;

/* Border Radius */
--ds-radius-sm: 2px;
--ds-radius-md: 4px;
--ds-radius-lg: 8px;
--ds-radius-xl: 12px;
--ds-radius-pill: 999px;    /* For fully rounded buttons/badges */

/* Container Widths */
--max-content-width: 1200px;
```

---

## 📐 Detailed Element Measurements

### 1. Header / Navigation

#### Logo Container
```css
/* Logo Icon "Bh" */
width: 32px;
height: 32px;
background: #6366F1;  /* Purple */
border-radius: 6px;
display: inline-flex;
align-items: center;
justify-content: center;

/* Icon Text */
font-size: 16px;
font-weight: 700;
color: #ffffff;
```

#### Logo Text "玻尔科学空间"
```css
font-family: var(--ds-font-family-sans);
font-size: 18px;
font-weight: 600;
color: #1f2329;
letter-spacing: -0.02em;
margin-left: 12px;
```

#### Beta Badge
```css
font-size: 12px;
font-weight: 400;
color: #86909c;
background: #f7f8fa;
border: 1px solid #e5e6eb;
border-radius: 4px;
padding: 2px 8px;
margin-left: 8px;
```

#### Header Buttons

**"去体验" (Go Experience) - Secondary Button**
```css
font-size: 14px;
font-weight: 500;
color: #1f2329;
background: #ffffff;
border: 1px solid #e5e6eb;
border-radius: 6px;
padding: 8px 20px;
height: 36px;

/* Hover State */
&:hover {
  background: #f7f8fa;
  border-color: #c9cdd4;
}
```

**"立即下载" (Download Now) - Primary Button**
```css
font-size: 14px;
font-weight: 500;
color: #ffffff;
background: #1f2329;  /* Near black */
border: none;
border-radius: 6px;
padding: 8px 24px;
height: 36px;
margin-left: 12px;

/* Hover State */
&:hover {
  background: #2c3239;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(31, 35, 41, 0.15);
}
```

---

### 2. Hero Section

#### Hero H1 "接管体力活 启发科学家"
```css
font-family: var(--ds-font-family-sans);
font-size: 56px;  /* Approximately 3.5rem */
font-weight: 700;
line-height: 1.2;  /* ~67px */
letter-spacing: -0.03em;
color: #1f2329;
text-align: center;
margin-top: 120px;
margin-bottom: 24px;
max-width: 900px;
margin-left: auto;
margin-right: auto;

/* Estimated bounding box */
width: ~750px;
height: ~135px (two lines);
```

#### Hero Subtitle
```css
font-family: var(--ds-font-family-sans);
font-size: 18px;
font-weight: 400;
line-height: 1.75;  /* 31.5px */
letter-spacing: normal;
color: #4e5969;
text-align: center;
margin-bottom: 20px;
max-width: 720px;
margin-left: auto;
margin-right: auto;
padding: 0 24px;
```

#### Promo Line
```css
/* Container */
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 32px;

/* Star Icon */
font-size: 16px;
color: #6366F1;
margin-right: 8px;

/* Text */
font-size: 15px;
font-weight: 400;
color: #4e5969;
line-height: 1.5;

/* Highlighted Text "30天Plus" and "10,000光子" */
font-weight: 600;
color: #6366F1;
```

#### Hero Download Buttons

**Container**
```css
display: flex;
gap: 16px;
justify-content: center;
margin-bottom: 64px;
```

**Individual Button (macOS / Windows)**
```css
font-size: 15px;
font-weight: 500;
color: #ffffff;
background: #1f2329;
border: none;
border-radius: 8px;
padding: 14px 32px;
height: 48px;
min-width: 200px;
display: inline-flex;
align-items: center;
justify-content: center;
gap: 10px;
cursor: pointer;
transition: all 0.2s ease;

/* Icon (Apple/Windows Logo) */
width: 20px;
height: 20px;
fill: #ffffff;

/* Hover State */
&:hover {
  background: #2c3239;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(31, 35, 41, 0.2);
}

/* Active State */
&:active {
  transform: translateY(0);
}
```

#### Hero Media Container
```css
width: 100%;
max-width: 1200px;
margin: 0 auto;
background: #ffffff;
border-radius: 16px;
box-shadow: 0 4px 24px rgba(31, 35, 41, 0.08);
overflow: hidden;
position: relative;

/* Aspect Ratio */
aspect-ratio: 16 / 10;  /* Approximately */
```

**Media Type:** `<video>` element with autoplay, loop, muted attributes
**Video Source:** Multiple video files in sequence (bohr001.mp4, bohr002.mp4, etc.)
**Behavior:** Autoplay on load, loops continuously, muted by default

---

### 3. Section Headings

#### Main Section H2 "从一个科研问题开始..."
```css
font-family: var(--ds-font-family-sans);
font-size: 42px;
font-weight: 700;
line-height: 1.3;  /* ~55px */
letter-spacing: -0.02em;
color: #1f2329;
text-align: center;
margin-top: 120px;
margin-bottom: 16px;
max-width: 900px;
margin-left: auto;
margin-right: auto;
```

#### Section Subtitle
```css
font-size: 18px;
font-weight: 400;
line-height: 1.75;
color: #4e5969;
text-align: center;
margin-bottom: 80px;
max-width: 720px;
margin-left: auto;
margin-right: auto;
```

---

### 4. Feature Sections

#### Step Badge "1. 调研与假设"
```css
display: inline-flex;
align-items: center;
font-size: 15px;
font-weight: 500;
color: #6366F1;
background: rgba(99, 102, 241, 0.1);
border-radius: 999px;
padding: 6px 20px;
margin-bottom: 24px;
```

#### Feature Title
```css
font-size: 32px;
font-weight: 700;
line-height: 1.4;
color: #1f2329;
margin-bottom: 16px;
max-width: 540px;
```

#### Feature Description
```css
font-size: 16px;
font-weight: 400;
line-height: 1.75;
color: #4e5969;
margin-bottom: 24px;
max-width: 540px;
```

#### Feature Bullets
```css
/* List Container */
list-style: none;
padding: 0;
margin: 0;

/* List Item */
li {
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.75;
  color: #4e5969;
  margin-bottom: 12px;
}

/* Bullet Icon (►) */
li::before {
  content: '►';
  color: #6366F1;
  font-size: 12px;
  margin-right: 12px;
  margin-top: 6px;
}
```

---

### 5. AI Experts Section

#### Experts Container
```css
display: grid;
grid-template-columns: 240px 1fr;
gap: 24px;
max-width: 1200px;
margin: 0 auto;
padding: 80px 24px;
```

#### Expert Tab (Inactive)
```css
display: flex;
align-items: center;
gap: 12px;
font-size: 16px;
font-weight: 500;
color: #4e5969;
background: #f7f8fa;
border: none;
border-radius: 12px;
padding: 20px;
cursor: pointer;
transition: all 0.2s ease;
margin-bottom: 12px;

/* Icon */
width: 40px;
height: 40px;

&:hover {
  background: #eef0f3;
}
```

#### Expert Tab (Active)
```css
color: #1f2329;
background: #ffffff;
box-shadow: 0 2px 16px rgba(31, 35, 41, 0.08);
border: 1px solid #e5e6eb;
```

#### Expert Content Panel
```css
background: #ffffff;
border-radius: 16px;
box-shadow: 0 4px 24px rgba(31, 35, 41, 0.08);
padding: 40px;

/* Title */
h3 {
  font-size: 24px;
  font-weight: 600;
  color: #1f2329;
  margin-bottom: 12px;
}

/* Description */
p {
  font-size: 16px;
  line-height: 1.75;
  color: #4e5969;
  margin-bottom: 32px;
}
```

---

### 6. Process Diagram ("Why It Works" Section)

#### Container
```css
max-width: 1200px;
margin: 120px auto;
padding: 0 24px;
```

#### Diagram Background
```css
background: linear-gradient(135deg, #f7f8ff 0%, #fdf7ff 100%);
border-radius: 24px;
padding: 80px 60px;
position: relative;
```

#### Circle Elements
```css
/* Main Circle (Center - "AI科学家执行") */
width: 200px;
height: 200px;
background: #6366F1;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 600;
color: #ffffff;
text-align: center;
line-height: 1.4;

/* Side Circles (Input/Output) */
width: 160px;
height: 160px;
background: #ffffff;
border: 2px solid #e5e6eb;
border-radius: 50%;
font-size: 16px;
font-weight: 500;
color: #1f2329;
```

#### Arrow Labels ("IN" / "OUT")
```css
font-size: 14px;
font-weight: 600;
color: #6366F1;
background: #ffffff;
padding: 4px 12px;
border-radius: 4px;
box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
```

#### Supporting Resources (Bottom Row)
```css
/* Column */
flex: 1;
text-align: center;

/* Title */
font-size: 18px;
font-weight: 600;
color: #1f2329;
margin-bottom: 8px;

/* Description */
font-size: 14px;
line-height: 1.75;
color: #4e5969;
```

---

### 7. Download Cards (Bottom Section)

#### Card Container
```css
display: flex;
gap: 24px;
justify-content: center;
max-width: 900px;
margin: 80px auto;
```

#### Individual Card
```css
flex: 1;
max-width: 400px;
background: #f7f8fa;
border-radius: 16px;
padding: 60px 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;

/* Icon (Apple/Windows) */
width: 64px;
height: 64px;
margin-bottom: 20px;
fill: #1f2329;

/* Text */
font-size: 20px;
font-weight: 600;
color: #1f2329;

&:hover {
  background: #eef0f3;
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(31, 35, 41, 0.12);
}
```

---

### 8. Footer

#### Footer Container
```css
background: #000000;
color: #ffffff;
padding: 80px 24px 40px;
```

#### About Section
```css
max-width: 600px;

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

p {
  font-size: 14px;
  line-height: 1.75;
  color: #c9cdd4;
  margin-bottom: 16px;
}
```

#### Footer Links
```css
/* Column Header */
font-size: 16px;
font-weight: 600;
color: #ffffff;
margin-bottom: 16px;

/* Link */
font-size: 14px;
line-height: 2;
color: #c9cdd4;
text-decoration: none;

a:hover {
  color: #ffffff;
}
```

#### Legal Section (ICP Numbers)
```css
border-top: 1px solid #2c3239;
padding-top: 32px;
margin-top: 40px;
text-align: center;

/* Text */
font-size: 12px;
line-height: 2;
color: #86909c;
```

---

## 🖼️ Media Asset URLs

### Hero Section
```
Video sequence:
- https://cdn.bohrium.com/video/bohr001.mp4
- https://cdn.bohrium.com/video/bohr002.mp4  
- https://cdn.bohrium.com/video/bohr003.mp4
(Auto-plays, loops, muted by default)

Video properties:
- autoplay: true
- loop: true
- muted: true
- playsinline: true
```

### Feature Section 1 (Research & Hypothesis)
```
UI Mockup Image:
- Type: <img>
- src: https://cdn.bohrium.com/images/feature-research-ui.webp
- alt: "SciMaster · 结构化调研结果"
- Dimensions: ~960x720px
```

### Feature Section 2 (Scientific Execution)
```
UI Mockup Image:
- Type: <img>
- src: https://cdn.bohrium.com/images/feature-execution-ui.webp
- alt: "BioMaster · 单细胞 RNA velocity 分析"
- Dimensions: ~960x720px
```

### Feature Section 3 (Results & Review)
```
UI Mockup Image:
- Type: <img>
- src: https://cdn.bohrium.com/images/feature-results-ui.webp
- alt: "SciMaster · 研究写作 · 引用与数据审查"
- Dimensions: ~960x720px
```

### Experts Section
```
BioMaster Tab:
- Icon: <svg> (green molecule icon)
- Content Image: https://cdn.bohrium.com/images/expert-bio.webp

PharmMaster Tab:
- Icon: <svg> (blue wave icon)
- Content Image: https://cdn.bohrium.com/images/expert-pharm.webp

MatMaster Tab:
- Icon: <svg> (colorful molecule icon)
- Content Image: https://cdn.bohrium.com/images/expert-mat.webp
```

---

## 🎯 Interaction States

### Button Hover Transitions
```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Properties that change on hover */
- background-color
- transform: translateY(-2px)
- box-shadow
```

### Tab Switching
```css
/* Transition duration */
transition: all 0.3s ease;

/* Content fade */
opacity: 0 → 1
transform: translateY(10px) → translateY(0)
```

### Scroll Animations
```css
/* Fade in on scroll */
opacity: 0 → 1;
transform: translateY(30px) → translateY(0);
transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) {
  /* Full two-column layouts */
}

/* Tablet */
@media (max-width: 1199px) {
  font-size: scale down ~10%;
  padding: reduce by ~25%;
}

/* Mobile */
@media (max-width: 768px) {
  /* Single column stacking */
  font-size: scale down ~15%;
  padding: 16px-24px;
  
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
  buttons: width 100%, stack vertically;
}
```

---

*Detailed measurements compiled from Chrome DevTools inspection on November 12, 2026*
