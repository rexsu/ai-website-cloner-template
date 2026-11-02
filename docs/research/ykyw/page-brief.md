# ykyw 微页面观察记录

本地运行：`npm run dev`，然后打开 <http://localhost:3000>。完整检查是 `npm run check`（lint、类型、生产构建）。需要 Node.js 24 或更高版本。

源站是创客匠人（ckjr）知识付费 H5，域名 `wxe946737b2f64dfcd.lrn.nineteenj.cn`，路径 `/kpv2p/ykyw/`，Vue hash 路由。商家 id 为 `ykyw`。三个链接是同一路由的不同 `mId`，不是三套站点。

## 路由

| 源站 hash | 本地 |
| --- | --- |
| `#/homePage/microPage/microPage?mId=166282` | `/homePage/microPage/microPage?mId=166282` 与 `/m/166282` |
| `#/homePage/microPage/microPage?mId=166280` | `/homePage/microPage/microPage?mId=166280` 与 `/m/166280` |
| `#/homePage/microPage/microPage?mId=166279` | `/homePage/microPage/microPage?mId=166279` 与 `/m/166279` |
| `#/homePage/login/wechatAuthPage` | `/login` |
| `/` | 重定向到 mId `166282` |

推荐人 `refereeId=xzr8jrz` 只出现在源站分享参数里，本地页面不依赖它渲染。

## 怎么打开内容

无登录、普通浏览器会先被转到「微信登录」。页面文案是「创客匠人商家运营 / 登录即可查看详情内容」，主色 `#1696ff`，公司名与 logo 来自 `api/protocols/getGeneralProtocol?companyId=ykyw`。

点「游客模式」会请求公开接口 `api/common/getAnonUserToken?companyId=ykyw`，写入访客 token 后才能打开微页面。本地复刻不保存这个 token。对话、购买、立即登录都会回到本地登录墙，并说明微信 OAuth 只能在源站完成。

## 三个页面实际是什么

接口：

- `GET /api/company/customTemplates?id={mId}`
- `GET /api/company/getTemplateModules?templateId={mId}&page2=1&limit=10`

模块类型 `modelType = 1000`（智能体工作台），每个页面只有 1 个模块、3 个智能体。

| mId | 标题 | templateType | 版式 |
| --- | --- | --- | --- |
| 166282 | 家庭教育 AI 智能服务 | 4 | 换老师、人物卡片、能力、猜你想问、商品推荐、底部对话按钮 |
| 166280 | AI 助手中心 | 2 | 智能体胶囊、立绘、问题气泡、快捷按钮、白底输入条 |
| 166279 | 家庭成长中心 | 1 | 智能体胶囊、玻璃卡片、快捷气泡、圆点、紫色箭头输入条 |

主题色是工作台蓝色（`#6352FC` 一带），游客条用店铺色 `#ff7100`。设计宽 640px，`1rem = 40px`，窄屏按 `6.25vw` 缩放，超过 640px 居中。

## 素材

- 智能体封面、商品图：`public/sites/ykyw/agents`、`public/sites/ykyw/products`
- 工作台背景与按钮：`public/sites/ykyw/theme`
- 登录 logo 与顶图：`public/sites/ykyw/login`
- 图标来自源站 `chunk-icon` 里的 `icon-wb-*` 符号，见 `src/components/sites/ykyw/icon-markup.ts`
- 页面没有单独的中文网页字体，字体栈与源站工作台一致：PingFang SC / Helvetica Neue / Microsoft YaHei

对照图在 `docs/design-references/`：`ykyw-login-mobile.png`、`ykyw-166282-mobile.png`、`ykyw-166280-mobile.png`、`ykyw-166279-mobile.png`。

## 音频课和收费页

源站 `#/homePage/course/voice?courseId=4623772&ckFrom=5` 是微页面商品「果妈阅读400+经典书」。

微信里的游客会被送回登录，而且这次登录没有「游客模式」。用非微信访客可以打开播放壳：

- 封面、进度 `00:00/00:00`、单节播放、倍速、`￥399.00` / 划线 `￥999.00`
- VIP / SVIP 文案是「本课程免费学习」
- 共 0 节，51 人收听，450 天有效，详情为「暂无介绍」
- 底部是灰色「仅指定用户可购买」，点击只出现「指定用户可购买」
- 非微信环境会盖一层「当前课程不支持在此浏览器访问 / 扫码开始学习」
- 目录接口对游客返回空列表，没有音频地址，所以本地播放键不会出声

同店另一门音频课 `4619943`（每日冥想疗愈音频，`￥6.80`）底部是「立即购买」，用来对照真正的购买入口。它的详情正文按页面可见文字保存；课程 JSON 里没有单独的简介字段。

`#/homePage/course/coursePay` 对游客直接回到微信登录，结算接口 `common/payShow` 返回「未找到该用户」。本地收费页用课程价和结算包里的「支付详情 / 合计 / 实付款 / 确认支付」拼出未支付状态，确认后不会变成已购买。

本地路由：

- `/homePage/course/voice?courseId=4623772&ckFrom=5`
- `/homePage/course/voice?courseId=4619943&ckFrom=5`
- `/homePage/course/coursePay?cId=4623772&extId=-1&ckFrom=5&courseType=1`
- 微页面里 `prodType=111` 的商品改为站内链接，其它商品仍去源站

## 还缺什么

- 微信快捷登录无法在本地完成，没有用户资料、订单或真实对话回复。
- 「更多」在源站会去 `/ai/aiAgentList`。本地只打开当前页已有的 3 个智能体。
- 购买跳到源站商品路由（音频课、图文、商城、预约），那些详情页没有复刻。
- 协议全文没有抓下来，登录页链到源站 `protocolId` 2897 / 2898。
- 打字机、问题跑马灯、气泡轮播是按源站节奏做的近似，不是逐帧动画还原。
- `schedule-2`、`diagnose-2` 不在源站图标白名单里，源站会退回默认图标，本地同样处理。
