# Bohrium Science Space - Interactive Elements Report
**Inspection Date:** November 12, 2026
**Focus:** Expert tabs, overlay captions, button styles, hover states

---

## Header Navigation - Button Styles ✅

Located in sticky header (top right):

### 1. "去体验" (Go to Experience)
- **Style:** OUTLINED / GHOST button
- **Background:** White / Transparent
- **Border:** Thin black/gray outline (~1-2px)
- **Text:** Black
- **Border-radius:** ~8px (rounded corners)

### 2. "立即下载" (Download Now)
- **Style:** FILLED / PRIMARY button
- **Background:** Solid black (#000000 or dark navy)
- **Border:** None
- **Text:** White
- **Border-radius:** ~8px (rounded corners)

**Comparison:** Clear visual hierarchy — outlined for secondary action (try), filled for primary action (download)

---

## Overlay Captions on Videos/Demos 🎬

All captions are displayed as rounded pill-shaped overlays with semi-transparent purple/blue background and white text.

### Hero Section
**Caption:** "清单完整、步骤清晰，可直接"
- Translation: "The list is complete, steps are clear, can be directly..."
- Location: Over LaTeX document demo
- Video duration: 1:02/1:06

### Additional Hero Caption (alternate view)
**Caption:** "10分钟完成近千篇文献资料深度分析，并精准溯源"
- Translation: "In 10 minutes, complete in-depth analysis of nearly a thousand pieces of literature and accurately trace the source"
- Location: Over research interface screenshot
- Style: Bold purple text overlay

### Feature 1: Research & Hypothesis (1. 调研与假设)
**Section title:** "先看清问题，再决定研究什么"
**Overlay caption:** "提出可验证的高质量假设"
- Translation: "Propose verifiable high-quality hypotheses"
- Location: Over SciMaster structured research results document
- Component: SciMaster · 结构化调研结果

### Feature 2: Scientific Execution (2. 科研执行)
**Section title:** "把想法交给 AI 跑起来"
**Overlay caption:** "推测小鼠胰腺内分泌的发育轨迹"
- Translation: "Speculate on the developmental trajectory of mouse pancreatic endocrine secretion"
- Location: Over BioMaster interface with chat prompt
- Component: BioMaster · 单细胞 RNA velocity 分析

**Additional caption (same section, different view):**
**Overlay caption:** "自动做出RNA隐时间图"
- Translation: "Automatically create RNA latent time plot"
- Location: Over BioMaster analysis results showing UMAP/t-SNE visualization
- Style: Purple pill-shaped badge

### Feature 3: Results & Review (3. 成果与审查)
**Section title:** "把结果整理成可以继续使用的成果"
**Overlay caption:** "格式严谨，引用准确"
- Translation: "Strict format, accurate citations"
- Location: Over SciMaster research writing interface
- Component: SciMaster · 研究写作 · 引用与数据审查

**Additional caption (same section):**
**Overlay caption:** "基于已有研究记录，按要求撰写论文初稿"
- Translation: "Write the first draft of the paper as required based on existing research records"
- Location: Over chat interface with long user prompt
- Shows: User requesting LaTeX paper draft with 40+ references

---

## AI Expert Tabs Section 🔬

**Section Headline:** "按研究任务，选择合适的 AI 学科专家"
(Choose the appropriate AI subject expert based on research task)

**Sub-headline:** "SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master 接手执行。"
(SciMaster first understands your goals. When professional analysis is needed, the Master in the corresponding field takes over and executes.)

### Tab Layout
- **Position:** Vertical tabs on left, content area on right
- **Container:** Light gray rounded rectangle
- **Active state:** White background with drop shadow
- **Inactive state:** Light gray background, no shadow

---

### Tab 1: BioMaster (Active by default)

**Tab Label:**
- Icon: Teal/green molecular structure (double helix/DNA)
- Text: "BioMaster · 生物医学研究"
- Translation: BioMaster · Biomedical Research

**Content when active:**
- **Heading:** "论文分析复现"
  - Translation: Paper analysis reproduction
- **Description:** "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。"
  - Translation: Obtain data, run author's code and check results, also supports single-cell analysis and genetic variation interpretation.
- **Demo visual:** Shows complex heatmap with red/blue color scheme and file browser
- **File indicators:** "产出文件（已标记交付物）" (Output files - marked deliverables)

---

### Tab 2: PharmMaster

**Tab Label:**
- Icon: Purple/blue pill/capsule in circle
- Text: "PharmMaster · 药物研发"
- Translation: PharmMaster · Drug R&D

**Content when active:**
- **Heading:** "ITK 靶点抑制剂研发"
  - Translation: ITK target inhibitor development
- **Description:** "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。"
  - Translation: From target investigation and patent analysis to candidate molecule design, activity and drugability assessment.
- **Demo visual:** Shows interface with line graphs (Enrichment Score), file explorer, and data preview
- **Overlay caption:** "论文复现任务" (Paper reproduction task)
  - Style: Purple border button/label at bottom
- **Additional overlay:** "自动计算和重现" (Automatic calculation and reproduction)
  - Style: Blue-to-purple gradient pill badge

---

### Tab 3: MatMaster

**Tab Label:**
- Icon: Dark blue crystal/atomic grid pattern
- Text: "MatMaster · 材料与化学"
- Translation: MatMaster · Materials & Chemistry

**Content when active:**
- **Heading:** "高温介电薄膜设计"
  - Translation: High-temperature dielectric film design
- **Description:** "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。"
  - Translation: Based on performance and material constraints, complete candidate design and computational simulation to find directions worthy of prioritized verification.
- **Additional description (alternate view):** "在复杂的材料和化学体系中，利用 AI 解决多尺度模拟、性能预测等任务。"
  - Translation: In complex material and chemical systems, use AI to solve multi-scale simulation and performance prediction tasks.
- **Demo visual:** Shows heatmap analysis, file directory, and markdown notes
- **Overlay caption:** "自动计算和复现" (Automatic calculation and reproduction)
  - Style: Blue text overlay, bottom-right corner

---

## Download Cards - Hover States 💾

**Section Headline:** "从一个真实科研问题开始"
(Start from a real scientific research problem)

### macOS Card
**Default state:**
- Large black Apple logo
- Text: "macOS"
- Background: Light gray (#F5F5F5)
- Border-radius: ~12-16px

**Hover state:** ✅ REVEALED
Displays two stacked black buttons with download icons:
1. **"↓ Apple 芯片"**
   - Translation: Apple chip (M1/M2/M3 etc.)
2. **"↓ Intel 处理器"**
   - Translation: Intel processor

Both buttons are:
- Black background
- White text
- Rounded corners
- Stacked vertically
- Download arrow icon (↓) prefix

### Windows Card
**Default state:**
- Large black Windows logo (four-pane window)
- Text: "Windows"
- Background: Light gray (#F5F5F5)
- Border-radius: ~12-16px

**Hover state:** ⚠️ NOT DETECTED
- Multiple hover attempts did not reveal additional buttons
- May require actual click or may not have hover state
- Could be single download option (no architecture variants)

---

## All Overlay Caption Text (Complete List)

1. "清单完整、步骤清晰，可直接" (Hero video)
2. "10分钟完成近千篇文献资料深度分析，并精准溯源" (Hero alternate)
3. "提出可验证的高质量假设" (Feature 1: Research)
4. "推测小鼠胰腺内分泌的发育轨迹" (Feature 2: Execution - alt 1)
5. "自动做出RNA隐时间图" (Feature 2: Execution - alt 2)
6. "格式严谨，引用准确" (Feature 3: Results - alt 1)
7. "基于已有研究记录，按要求撰写论文初稿" (Feature 3: Results - alt 2)
8. "论文复现任务" (PharmMaster expert tab)
9. "自动计算和重现" (PharmMaster/MatMaster expert tabs)

**Total:** 9 unique overlay captions identified

---

## Visual Design Pattern

### Overlay Caption Style
```css
/* Typical overlay caption */
.overlay-caption {
  background: rgba(107, 70, 255, 0.9); /* Semi-transparent purple */
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 999px; /* Fully rounded pill */
  font-weight: 500;
  font-size: 14-16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  backdrop-filter: blur(4px); /* Possible glassmorphism */
}
```

### Tab Active State
```css
.tab-active {
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #E5E6EB;
  z-index: 1;
}

.tab-inactive {
  background: #F7F8FA;
  border: 1px solid transparent;
}
```

---

## Screenshots Saved

New files added to `/workspace/docs/design-references/bohrium/`:
- `feature1-overlay-caption.png` - Research hypothesis section
- `feature2-overlay-caption.png` - Scientific execution section (2 captions visible)
- `feature3-overlay-caption.png` - Results & review section (2 captions visible)
- `expert-bio-initial.png` - BioMaster tab initial view
- `expert-bio-full.png` - BioMaster tab full content
- `expert-pharm-full.png` - PharmMaster tab active state
- `expert-mat-full.png` - MatMaster tab active state
- `download-macos-hover.png` - macOS card hover with revealed buttons

**Total new screenshots:** 8 files

---

## Key Findings

1. **Header buttons** have clear visual hierarchy: outlined secondary vs filled primary
2. **9 unique overlay captions** identified across hero, features, and expert tabs
3. **Tab system** works with active/inactive states - content updates dynamically
4. **macOS download card** reveals architecture-specific options on hover (Apple chip vs Intel)
5. **Windows card** appears to have no hover state (single download option)
6. All captions use consistent **purple pill-shaped badge** style
7. Expert tabs use **drop shadow for active state** to indicate selection

---

**Report Status:** ✅ COMPLETE
**Language:** All content in Simplified Chinese (no English version found)
**Interaction Test:** Successful tab switching and hover state capture
