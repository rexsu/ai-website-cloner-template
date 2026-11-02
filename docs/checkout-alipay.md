# 七仔戒指 · ¥1299 支付宝一次性

## 可用路径
- 页面：`/checkout`
- 创建订单 API：`POST /api/alipay/create`
- 异步通知占位：`POST /api/alipay/notify`

## 无密钥时
结账页展示商户收款码：`public/sites/qizai/payment/alipay-qr.png`（可随时替换）。

## 环境变量
见仓库根目录 `.env.example`：`ALIPAY_APP_ID`、`ALIPAY_PRIVATE_KEY`、`ALIPAY_PUBLIC_KEY`、`ALIPAY_NOTIFY_URL`、`ALIPAY_RETURN_URL`。

配置密钥后仍需接入官方 SDK 签名；当前不会伪造签名。
