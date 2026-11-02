# 七仔 · 源站到本地路由

结构来自 Oura 营销站（2026-11 抓取，ecom-website v1.144.0），文案与品牌换成七仔 / 七智。根路径是七仔首页，不保留模板占位页。

| 源 | 本地 | 说明 |
| --- | --- | --- |
| https://ouraring.com/ | `/` | 首页：顶栏、主视觉、主题卡、同伴陈述、场景卡、身心观察、手记、页脚 |
| https://ouraring.com/store | `/store` | 选购。不复制 Ring 4 / 配件标价 |
| https://ouraring.com/store/rings/oura-ring-5 | `/store/rings/qizai-ring` | 戒指故事：暗色主视觉、轻、颜色、感知、规格 |
| https://ouraring.com/why-oura | `/why-qizai` | 为何七仔 |
| https://ouraring.com/how-it-works | `/how-it-works` | 一天里的时刻 |
| https://ouraring.com/membership | `/membership` | 七仔同行。不写月费 |
| https://ouraring.com/health-radar | `/health-radar` | 身心观察。明确非诊断 |
| 新闻外链 | `/stories`、`/stories/sleep`、`/stories/aftercare`、`/stories/boundaries` | 不冒充卫报 / Esquire / CNET |
| https://ouraring.com/sizing | `/sizing` | 不套用 Oura 毫米表 |
| 页脚法律链接 | `/privacy` `/terms` `/accessibility` | 方向说明，非法务定稿 |
| For Organizations | `/organizations` | 无客户名单 |
| https://ouraring.com/cart | `/cart` | 空购物袋，无结账 |

首页主按钮进入戒指页。主题卡「+」展开说明并链到对应本地页。颜色按钮进入 `/contact?topic=`，表单只留在浏览器。

## 文件

- 组件：`src/components/sites/qizai/`
- 样式：`src/app/qizai.css`
- 图片与字体：`public/sites/qizai/`
- 源站截图：`docs/design-references/oura/`
- 本地对照：`docs/design-references/qizai/`
