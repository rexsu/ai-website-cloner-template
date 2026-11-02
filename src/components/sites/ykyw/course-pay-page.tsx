"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";

import { getVoiceCourse } from "./voice-courses";

type CoursePayPageProps = {
  courseId: string;
};

export function CoursePayPage({ courseId }: CoursePayPageProps) {
  const course = getVoiceCourse(courseId);
  const [agreed, setAgreed] = useState(false);
  const [notice, setNotice] = useState("");

  if (!course) {
    return (
      <div className="ykyw-app">
        <main className="missing-page">
          <h1>没有这笔课程订单</h1>
          <p>收费页只接了已抓到的两门音频课。源站对游客打开结算时会回到微信登录，本地不会创建订单。</p>
          <Link href="/homePage/course/voice?courseId=4623772&ckFrom=5">返回果妈阅读</Link>
        </main>
      </div>
    );
  }

  function confirmPay() {
    if (course?.restricted) {
      setNotice("仅指定用户可购买。本地不会下单，也不会标成已支付。");
      return;
    }
    if (!agreed) {
      setNotice("请先阅读并同意协议");
      return;
    }
    setNotice("微信支付需要在微信内打开源站。本地停留在未支付，课程仍然锁定。");
  }

  return (
    <div className="ykyw-app">
      <main className="pay-page">
        <header className="pay-nav">
          <Link href={`/homePage/course/voice?courseId=${course.id}&ckFrom=5`} aria-label="返回">
            ‹
          </Link>
          <strong className="pay-heading">支付详情</strong>
          <span />
        </header>
        <section className="pay-product">
          <img src={course.cover} alt="" />
          <div>
            <strong>{course.name}</strong>
            <em>￥{course.price}</em>
            <s>￥{course.crossedPrice}</s>
          </div>
        </section>
        {course.restricted ? (
          <p className="lock-banner">这门课在源站底部是「仅指定用户可购买」，结算接口对游客返回未找到用户。</p>
        ) : null}
        <section className="pay-block">
          <h2>支付详情</h2>
          <div className="pay-row">
            <span>合计</span>
            <span>￥{course.price}</span>
          </div>
          <div className="pay-row">
            <span>优惠金额</span>
            <span>￥0.00</span>
          </div>
          <div className="pay-row">
            <span>实付款：</span>
            <b>￥{course.price}</b>
          </div>
        </section>
        <p className="pay-note">
          提示：<span>因汇率的变化，可能导致实付金额会有小幅度波动</span>
        </p>
        <div className="pay-agree">
          <button
            type="button"
            className={agreed ? "is-on" : ""}
            aria-pressed={agreed}
            onClick={() => setAgreed((value) => !value)}
          >
            {agreed ? "✓" : ""}
          </button>
          <span>
            已阅读并同意{" "}
            <a
              href="https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#/homePage/agent/protocolInfo?protocolId=2897"
              target="_blank"
              rel="noreferrer"
            >
              《用户服务协议》
            </a>
            <a
              href="https://wxe946737b2f64dfcd.lrn.nineteenj.cn/kpv2p/ykyw/#/homePage/agent/protocolInfo?protocolId=2898"
              target="_blank"
              rel="noreferrer"
            >
              《隐私政策》
            </a>
          </span>
        </div>
        {notice ? <p className="login-toast">{notice}</p> : null}
        <button className="pay-submit" type="button" onClick={confirmPay}>
          {course.restricted ? "仅指定用户可购买" : `确认支付￥${course.price}`}
        </button>
      </main>
    </div>
  );
}
