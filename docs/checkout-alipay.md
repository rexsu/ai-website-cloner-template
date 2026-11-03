# 七仔戒指 · ¥1299 支付宝一次性

## 可用路径
- 页面：`/checkout`
- 创建订单 API：`POST /api/alipay/create`
- 异步通知占位：`POST /api/alipay/notify`

## 无密钥时
`POST /api/alipay/create` 返回 `mode: "qr_fallback"`，`message` 为空字符串。结账页只显示收款码和金额，不提示密钥或文件路径。

商户收款码路径：`public/sites/qizai/payment/alipay-qr.png`。仓库里的这份约 3KB，是占位图。约 660KB 的真实收款码不在 git 历史中，生产环境以 Mac 上已部署的同路径文件为准。不要在 Linux 上改 Tunnel 去替换它。

## 环境变量
见仓库根目录 `.env.example`：`ALIPAY_APP_ID`、`ALIPAY_PRIVATE_KEY`、`ALIPAY_PUBLIC_KEY`、`ALIPAY_NOTIFY_URL`、`ALIPAY_RETURN_URL`。

配置密钥后仍需接入官方 SDK 签名；当前不会伪造签名。
