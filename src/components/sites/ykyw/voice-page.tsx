"use client";

/* eslint-disable @next/next/no-img-element -- course art follows the source rem scale */

import Link from "next/link";
import { useState } from "react";

import { payHref, speedOptions, type VoiceCourse } from "./voice-courses";

const tabs = ["详情", "目录", "评论", "推荐"] as const;

type VoicePageProps = {
  course: VoiceCourse | null;
  requestedId?: string;
};

export function VoicePage({ course, requestedId }: VoicePageProps) {
  const [gate, setGate] = useState(true);
  const [speedOpen, setSpeedOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [tab, setTab] = useState<(typeof tabs)[number]>("详情");
  const [speed, setSpeed] = useState("1.0x");
  const [liked, setLiked] = useState(false);

  function showToast(text: string) {
    setToast(text);
    window.setTimeout(() => setToast(""), 1600);
  }

  if (!course) {
    return (
      <div className="ykyw-app">
        <main className="missing-page">
          <h1>没有这门音频课</h1>
          <p>
            {requestedId ? `courseId=${requestedId} 不在已抓到的音频课里。` : "请从下面进入。"}
            游客接口能打开的是 4623772 和 4619943，目录都是 0 节，没有可播放的音频地址。
          </p>
          <Link href="/homePage/course/voice?courseId=4623772&ckFrom=5">果妈阅读400+经典书</Link>
          <Link href="/homePage/course/voice?courseId=4619943&ckFrom=5">每日冥想疗愈音频</Link>
          <Link href="/m/166282">返回微页面</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="ykyw-app">
      <main className="voice-page">
        <header className="voice-nav">
          <Link href="/m/166282" aria-label="返回">
            <i className="iconfont icon-fanhui" />
          </Link>
          <div className="nav-actions">
            <button className="nav-chip" type="button" onClick={() => showToast("关注需要在微信里完成")}>
              <img src="/sites/ykyw/course/nav-follow.png" alt="" />
              关注
            </button>
            <Link className="nav-chip" href="/m/166282">
              <img src="/sites/ykyw/course/nav-home.png" alt="" />
              首页
            </Link>
          </div>
        </header>

        <section className="audio-shell">
          <button className="poster-btn" type="button" onClick={() => showToast("海报需要微信分享，本地不会生成")}>
            <img src="/sites/ykyw/course/poster.png" alt="" />
            海报
          </button>
          <div className="audio-stage">
            <div className="audio-playing-ani" aria-hidden="true">
              {Array.from({ length: 36 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <img className="audio-cover" src={course.cover} alt="" />
          </div>
          <div className="audio-progress">
            <button className="icon-hit" type="button" aria-label="后退15秒" onClick={() => showToast("未购买，不能拖动进度")}>
              <i className="iconfont icon-kuaitui15miao1" />
            </button>
            <div className="audio-rail">
              <span>00:00</span>
              <div className="audio-line" />
              <span>00:00</span>
            </div>
            <button className="icon-hit" type="button" aria-label="前进15秒" onClick={() => showToast("未购买，不能拖动进度")}>
              <i className="iconfont icon-kuaijin15miao1" />
            </button>
          </div>
          <div className="audio-controls">
            <button className="mode-btn" type="button" onClick={() => showToast("当前没有可播放的课时")}>
              <i className="iconfont icon-danjiebofang2" />
              <span>单节播放</span>
            </button>
            <button
              className="play-circle"
              type="button"
              aria-label="播放"
              onClick={() => {
                if (course.restricted) showToast("指定用户可购买");
                else setGate(true);
              }}
            >
              <i className="iconfont icon-bofang9" />
            </button>
            <button className="mode-btn" type="button" onClick={() => setSpeedOpen(true)}>
              <i className="iconfont icon-beishu1" />
              <span>倍速</span>
            </button>
          </div>
        </section>

        <div className="price-line">
          <strong>￥{course.price}</strong>
          <s>￥{course.crossedPrice}</s>
        </div>
        {course.pointsNote ? <p className="points-note">{course.pointsNote}</p> : null}
        <div className="vip-card">
          <button className="vip-row" type="button" onClick={() => showToast("开通会员需要微信登录，本地不会开通")}>
            <span>{course.vipNote}</span>
            <i className="iconfont icon-crmyoujiantou" />
          </button>
          <button className="vip-row" type="button" onClick={() => showToast("开通会员需要微信登录，本地不会开通")}>
            <span>{course.svipNote}</span>
            <i className="iconfont icon-crmyoujiantou" />
          </button>
        </div>

        <h1 className="course-title">{course.name}</h1>
        <div className="course-meta">
          <span>
            <i className="iconfont icon-kechengxianxing" />共{course.lessons}节
          </span>
          <span>
            <i className="iconfont icon-yanjing1" />{course.plays}人收听
          </span>
          <span>
            <i className="iconfont icon-jiantou" />{course.validity}
          </span>
          {course.canGift ? (
            <button className="gift-btn" type="button" onClick={() => showToast("赠送需要微信登录，本地不会下单")}>
              赠送
            </button>
          ) : null}
          <button
            className={`fav-btn${liked ? " is-on" : ""}`}
            type="button"
            onClick={() => setLiked((value) => !value)}
          >
            <i className={`iconfont ${liked ? "icon-yishoucang1" : "icon-shoucang1"}`} />
            {liked ? "已收藏" : "收藏"}
          </button>
        </div>

        <div className="course-tabs" role="tablist">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              className={tab === item ? "is-on" : ""}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === "详情" ? (
          course.detail.length ? (
            <article className="detail-copy">
              {course.detail.map((line, index) =>
                line.endsWith("亮点") || line.endsWith("介绍") || line.endsWith("人群") || line.endsWith("大纲") || line.endsWith("效果") || line === "徒手燃脂" ? (
                  <h3 key={`${index}-${line}`}>{line}</h3>
                ) : (
                  <p key={`${index}-${line}`}>{line}</p>
                ),
              )}
            </article>
          ) : (
            <div className="empty-box">
              <img src="/sites/ykyw/course/empty-box.png" alt="" />
              <span>暂无介绍</span>
            </div>
          )
        ) : null}
        {tab === "目录" ? (
          <div className="empty-box">
            <img src="/sites/ykyw/course/empty-box.png" alt="" />
            <span>共{course.lessons}节，游客看不到课时音频</span>
          </div>
        ) : null}
        {tab === "评论" ? (
          <div className="empty-box">
            <img src="/sites/ykyw/course/empty-box.png" alt="" />
            <span>暂无评论</span>
          </div>
        ) : null}
        {tab === "推荐" ? (
          course.recommend ? (
            <a className="recommend-card" href={course.recommend.sourceUrl} target="_blank" rel="noreferrer">
              <img src={course.recommend.cover} alt="" />
              <div>
                <strong>{course.recommend.name}</strong>
                <em>￥{course.recommend.price}</em>
              </div>
            </a>
          ) : (
            <div className="empty-box">
              <img src="/sites/ykyw/course/empty-box.png" alt="" />
              <span>暂无推荐</span>
            </div>
          )
        ) : null}

        <div className="shop-links">
          <Link href="/m/166282">店铺主页</Link>
          <span>|</span>
          <Link href="/login?from=/m/166282">个人中心</Link>
          <span>|</span>
          <a href="http://www.ckjr001.com" target="_blank" rel="noreferrer">
            店铺信息
          </a>
        </div>
        <footer className="tech-footer voice-footer">
          <div>创客匠人技术支持</div>
          <a href="http://www.ckjr001.com" target="_blank" rel="noreferrer">
            http://www.ckjr001.com
          </a>
        </footer>

        <div className="buy-bar">
          {course.restricted ? (
            <button className="is-locked" type="button" onClick={() => showToast("指定用户可购买")}>
              仅指定用户可购买
            </button>
          ) : (
            <Link className="is-buy" href={payHref(course.id)}>
              立即购买
            </Link>
          )}
        </div>
      </main>

      {gate ? (
        <>
          <button className="gate" type="button" aria-label="关闭" onClick={() => setGate(false)} />
          <section className="gate-card" role="dialog" aria-label="浏览器限制">
            <button className="iconfont icon-guanbi gate-close" type="button" onClick={() => setGate(false)} aria-label="关闭" />
            <img className="gate-illu" src="/sites/ykyw/course/disable-play.png" alt="" />
            <p>当前课程不支持在此浏览器访问</p>
            <button className="scan-btn" type="button" onClick={() => { setGate(false); setQrOpen(true); }}>
              扫码开始学习
            </button>
          </section>
        </>
      ) : null}

      {speedOpen ? (
        <>
          <button className="sheet-mask" type="button" aria-label="关闭倍速" onClick={() => setSpeedOpen(false)} />
          <div className="sheet" role="dialog" aria-label="倍速">
            {speedOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={speed === item ? "is-on" : ""}
                onClick={() => {
                  setSpeed(item);
                  setSpeedOpen(false);
                  showToast("未购买，倍速不会开始播放");
                }}
              >
                {item}
              </button>
            ))}
            <button type="button" onClick={() => setSpeedOpen(false)}>
              取消
            </button>
          </div>
        </>
      ) : null}

      {qrOpen ? (
        <>
          <button className="sheet-mask" type="button" aria-label="关闭二维码" onClick={() => setQrOpen(false)} />
          <section className="qr-card" role="dialog" aria-label="扫码学习">
            <img src="/sites/ykyw/course/mp-qrcode.jpg" alt="店铺二维码" />
            <p>扫码到微信继续。本地扫码不会解锁这门课。</p>
            <button className="scan-btn" type="button" onClick={() => setQrOpen(false)}>
              关闭
            </button>
          </section>
        </>
      ) : null}

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
