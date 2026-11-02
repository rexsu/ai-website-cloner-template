"use client";

/* eslint-disable @next/next/no-img-element -- login art is sized by the source rem scale */

import Link from "next/link";
import { useState } from "react";

import { sourceChatUrl } from "./content";

type LoginScreenProps = {
  from: string;
  intent?: string;
  agentId?: string;
};

const protocols = [
  {
    name: "《用户协议》",
    href: "https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#/homePage/agent/protocolInfo?protocolId=2897",
  },
  {
    name: "《消费者权益》",
    href: "https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#/homePage/agent/protocolInfo?protocolId=2898",
  },
];

export function LoginScreen({ from, intent, agentId }: LoginScreenProps) {
  const [agreed, setAgreed] = useState(true);
  const [notice, setNotice] = useState("");
  const back = from || "/m/166282";
  const continueHref = agentId ? sourceChatUrl(agentId, intent) : "";

  return (
    <div className="ykyw-app">
      <main className="login-page">
        <img className="login-bg" src="/sites/ykyw/login/auth-bg.jpg" alt="" />
        <img className="login-logo" src="/sites/ykyw/login/logo.png" alt="" />
        <h1 className="login-title">创客匠人商家运营</h1>
        <p className="login-sub">登录即可查看详情内容</p>
        <button
          className="wechat-btn"
          type="button"
          onClick={() => {
            if (!agreed) {
              setNotice("请先阅读并同意协议");
              return;
            }
            setNotice("oauth");
          }}
        >
          微信快捷登录
        </button>
        <div className="agreement">
          <button
            type="button"
            className={agreed ? "is-on" : ""}
            aria-pressed={agreed}
            aria-label="已阅读并同意"
            onClick={() => setAgreed((value) => !value)}
          >
            {agreed ? "✓" : ""}
          </button>
          <span>
            已阅读并同意{" "}
            {protocols.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ))}
          </span>
        </div>
        {notice && notice !== "oauth" ? <p className="login-toast">{notice}</p> : null}
        {notice === "oauth" ? (
          <p className="login-note">
            微信授权只在微信内打开源站时可用，本地页面不能完成登录。
            {continueHref ? (
              <>
                {" "}
                <a href={continueHref} target="_blank" rel="noreferrer">
                  在源站继续
                </a>
              </>
            ) : null}
            {intent ? <span> 待发送：{intent}</span> : null}
          </p>
        ) : null}
        <div className="login-actions">
          <Link className="login-action" href={back}>
            <i aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M5.5 19.2c1.3-3 3.6-4.4 6.5-4.4s5.2 1.4 6.5 4.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </i>
            游客模式
          </Link>
          <button className="login-action is-exit" type="button" onClick={() => window.history.back()}>
            <i aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M10 7H6.5A3.5 3.5 0 0 0 6.5 14H14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 11.2L15.2 14 12 16.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            退出，暂不登录
          </button>
        </div>
      </main>
    </div>
  );
}
