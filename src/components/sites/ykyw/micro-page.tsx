"use client";

/* Local covers are sized by the source rem layout, not by next/image. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

import {
  microPages,
  priceLabel,
  themeAssets,
  themeVars,
  type Agent,
  type MicroPageData,
  type Shortcut,
} from "./content";
import { Chevron, WbIcon } from "./icons";

type MicroPageProps = {
  page: MicroPageData | null;
  requestedId?: string;
};

function loginHref(from: string, intent?: string, agentId?: string): string {
  const query = new URLSearchParams({ from });
  if (intent) query.set("intent", intent);
  if (agentId) query.set("agent", agentId);
  return `/login?${query.toString()}`;
}

function useTypewriter(text: string): string {
  const [progress, setProgress] = useState({ text, count: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current.text !== text) return { text, count: 1 };
        if (current.count >= text.length) return current;
        return { text, count: current.count + 1 };
      });
    }, 45);
    return () => window.clearInterval(timer);
  }, [text]);

  if (progress.text !== text) return "";
  return text.slice(0, progress.count);
}

function GuestBar({ from }: { from: string }) {
  return (
    <div className="visitor-bar">
      <span>当前为游客模式，登录享受更多精彩服务</span>
      <Link className="visitor-login" href={loginHref(from)}>
        立即登录
      </Link>
    </div>
  );
}

function TechFooter() {
  return (
    <footer className="tech-footer">
      <div>创客匠人技术支持</div>
      <a href="http://www.ckjr001.com" target="_blank" rel="noreferrer">
        http://www.ckjr001.com
      </a>
    </footer>
  );
}

function AgentPopup({
  agents,
  currentId,
  title,
  onClose,
  onSelect,
}: {
  agents: Agent[];
  currentId: string;
  title: string;
  onClose: () => void;
  onSelect: (agent: Agent) => void;
}) {
  return (
    <>
      <button className="overlay" type="button" aria-label="关闭" onClick={onClose} />
      <section className="teacher-popup" role="dialog" aria-label={title}>
        <button className="popup-close" type="button" onClick={onClose} aria-label="关闭">
          ×
        </button>
        <h2>{title}</h2>
        <div className="teacher-grid">
          {agents.map((agent, index) => (
            <button
              key={agent.id}
              type="button"
              className="teacher-item"
              onClick={() => onSelect(agent)}
            >
              <span
                className={`teacher-avatar is-bg-${index % 3}${
                  agent.id === currentId ? " is-active" : ""
                }`}
              >
                <img src={agent.cover} alt="" />
              </span>
              <span className={`teacher-name${agent.id === currentId ? " is-active" : ""}`}>
                {agent.name}
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function AgentSwitch({
  agents,
  current,
  variant,
  showTitle,
  onChange,
  onMore,
}: {
  agents: Agent[];
  current: Agent;
  variant: "pill" | "group";
  showTitle: boolean;
  onChange: (agent: Agent) => void;
  onMore: () => void;
}) {
  if (agents.length < 2) return null;

  const groupAgents = [
    current,
    ...agents.filter((agent) => agent.id !== current.id),
  ].slice(0, 3);

  return (
    <section className={`agent-switch${variant === "group" ? " is-group" : ""}`}>
      {showTitle ? (
        <div className="agent-switch-head">
          <h2>请选择智能体</h2>
          <button className="more-button" type="button" onClick={onMore}>
            更多
            <Chevron />
          </button>
        </div>
      ) : null}
      {variant === "group" ? (
        <button className="agent-group" type="button" onClick={onMore}>
          {groupAgents.map((agent, index) => (
            <span key={agent.id} className={`group-avatar is-bg-${index % 3}`}>
              <img src={agent.cover} alt="" />
            </span>
          ))}
          <span className="agent-group-label">换老师</span>
        </button>
      ) : (
        <div className="agent-scroll">
          {agents.map((agent) => {
            const active = agent.id === current.id;
            return (
              <button
                key={agent.id}
                type="button"
                className={`agent-pill${active ? " is-active" : ""}`}
                onClick={() => onChange(agent)}
              >
                {active ? (
                  <svg className="agent-pill-bg" viewBox="0 0 86 35" aria-hidden="true">
                    <defs>
                      <linearGradient id={`tab-${agent.id}`} x1="0" y1="0" x2="86" y2="0">
                        <stop offset="0" stopColor="var(--wb-active-tab-start)" />
                        <stop offset="1" stopColor="var(--wb-active-tab-end)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M14 0.5H72C79.46 0.5 85.5 6.54 85.5 14C85.5 21.46 79.46 27.5 72 27.5H49.5C49.1 27.5 48.8 27.6 48.6 27.9L45.4 31C44.9 31.5 43.1 31.5 42.6 31L39.4 27.9C39.2 27.6 38.9 27.5 38.5 27.5H14C6.54 27.5 0.5 21.46 0.5 14C0.5 6.54 6.54 0.5 14 0.5Z"
                      fill={`url(#tab-${agent.id})`}
                      stroke="#fff"
                    />
                  </svg>
                ) : null}
                <span className="agent-avatar">
                  <img src={agent.cover} alt="" />
                </span>
                <span className="agent-pill-name">{agent.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ChatEntry({
  placeholder,
  variant,
  onAsk,
}: {
  placeholder: string;
  variant: "plain" | "themed" | "filled";
  onAsk: () => void;
}) {
  return (
    <button type="button" className={`chat-entry is-${variant}`} onClick={onAsk}>
      <span className="chat-entry-text">{placeholder}</span>
      {variant === "filled" ? null : (
        <span className="chat-arrow">
          <Chevron />
        </span>
      )}
    </button>
  );
}

function TemplateOne({
  page,
  agent,
  typed,
  onChange,
  onMore,
  onAsk,
}: {
  page: MicroPageData;
  agent: Agent;
  typed: string;
  onChange: (agent: Agent) => void;
  onMore: () => void;
  onAsk: (message?: string) => void;
}) {
  const actions = agent.shortcuts.slice(0, 4);

  return (
    <div className="tpl1">
      <img className="women-bg" src={themeAssets.womenBg} alt="" />
      <AgentSwitch
        agents={page.agents}
        current={agent}
        variant="pill"
        showTitle
        onChange={onChange}
        onMore={onMore}
      />
      <section className="main-card">
        <h1>{typed || agent.greeting}</h1>
        <p className="slogan">{agent.slogan}</p>
        <div className="wisdom-photo">
          <img className="wisdom-glow" src={themeAssets.womenGlow} alt="" />
          <img className="wisdom-avatar" src={agent.cover} alt={agent.name} />
        </div>
        {actions.map((action, index) => (
          <button
            key={action.label}
            type="button"
            className={`glass-button action-${index}`}
            onClick={() => onAsk(action.content)}
          >
            <span className="glass-label">
              <img src={themeAssets.sparkle} alt="" />
              <em>{Array.from(action.label).slice(0, 6).join("")}</em>
            </span>
            <span className="glass-arrow">
              <Chevron />
            </span>
          </button>
        ))}
      </section>
      {page.agents.length > 1 ? (
        <div className="dots">
          {page.agents.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`dot${item.id === agent.id ? " is-active" : ""}`}
              aria-label={item.name}
              onClick={() => onChange(item)}
            />
          ))}
        </div>
      ) : null}
      <div className="chat-wrap">
        <ChatEntry placeholder={agent.placeholder} variant="themed" onAsk={() => onAsk()} />
      </div>
    </div>
  );
}

function QuoteBubble({
  text,
  role,
  gradientId,
  onClick,
}: {
  text: string;
  role: "prev" | "active" | "next";
  gradientId: string;
  onClick: () => void;
}) {
  const grad = gradientId;
  return (
    <button type="button" className={`quote-card is-${role}`} onClick={onClick}>
      <svg className="quote-shape" viewBox="0 0 149.53 128.88" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
            {role === "active" ? (
              <>
                <stop offset="0%" stopColor="#FFFBF0" />
                <stop offset="100%" stopColor="#ffffff" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="var(--wb-psychology-quote-card-start)" />
                <stop offset="100%" stopColor="#ffffff" />
              </>
            )}
          </linearGradient>
        </defs>
        <path
          d="M139.954483 13.653328C139.954483 6.1128 133.841668 0 126.30114 0H13.653332C6.112804 0 0 6.112806 0 13.653334V115.226662C0 122.76719 6.112806 128.880005 13.653334 128.880005H126.301147C133.841675 128.880005 139.954483 122.767197 139.954483 115.226669V31.010838C139.954483 28.90097 140.736109 26.865907 142.148483 25.298508L149.310684 17.350174C149.855464 16.745598 149.325248 15.794097 148.52449 15.939301L141.965652 17.128639C140.918262 17.318566 139.954483 16.51383 139.954483 15.449359V13.653328Z"
          fill={`url(#${grad})`}
          stroke="#ffffff"
          strokeWidth={role === "active" ? 2 : 2}
        />
      </svg>
      <span className="quote-mark open">“</span>
      <span className="quote-text">{text}</span>
      <span className="quote-mark close">“</span>
      <span className="quote-arrow">›</span>
    </button>
  );
}

function TemplateTwo({
  page,
  agent,
  typed,
  onChange,
  onMore,
  onAsk,
}: {
  page: MicroPageData;
  agent: Agent;
  typed: string;
  onChange: (agent: Agent) => void;
  onMore: () => void;
  onAsk: (message?: string) => void;
}) {
  const questions = agent.questions;
  const [quote, setQuote] = useState({ agentId: agent.id, index: 0 });
  const active = quote.agentId === agent.id ? quote.index : 0;
  const index = questions.length ? active % questions.length : 0;
  const prev = questions.length ? (index - 1 + questions.length) % questions.length : 0;
  const next = questions.length ? (index + 1) % questions.length : 0;
  const selectQuote = (nextIndex: number) => setQuote({ agentId: agent.id, index: nextIndex });

  return (
    <div className="tpl2">
      <img className="tpl2-bg" src={themeAssets.psychologyTop} alt="" />
      <AgentSwitch
        agents={page.agents}
        current={agent}
        variant="pill"
        showTitle
        onChange={onChange}
        onMore={onMore}
      />
      <section className="hero">
        <div className="portrait-glow">
          <img className="portrait-glow-img" src={themeAssets.psychologyGlow} alt="" />
          <img className="portrait-photo" src={agent.cover} alt={agent.name} />
        </div>
        <h1>{typed || agent.greeting}</h1>
        <p className="slogan">{agent.slogan}</p>
      </section>
      {questions.length ? (
        <div className="quote-row">
          {questions.length > 1 ? (
            <QuoteBubble
              text={questions[prev]}
              role="prev"
              gradientId={`quote-prev-${prev}`}
              onClick={() => selectQuote(prev)}
            />
          ) : null}
          <QuoteBubble
            text={questions[index]}
            role="active"
            gradientId={`quote-active-${index}`}
            onClick={() => onAsk(questions[index])}
          />
          {questions.length > 2 ? (
            <QuoteBubble
              text={questions[next]}
              role="next"
              gradientId={`quote-next-${next}`}
              onClick={() => selectQuote(next)}
            />
          ) : null}
        </div>
      ) : null}
      {agent.shortcuts.length ? (
        <div className="quick-scroll">
          {agent.shortcuts.map((item: Shortcut) => (
            <button
              key={item.label}
              type="button"
              className="quick-btn"
              onClick={() => onAsk(item.content)}
            >
              <WbIcon name={item.icon || "agent"} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}
      <div className="chat-wrap">
        <ChatEntry placeholder={agent.placeholder} variant="plain" onAsk={() => onAsk()} />
      </div>
    </div>
  );
}

function TemplateFour({
  page,
  agent,
  typed,
  onChange,
  onMore,
  onAsk,
}: {
  page: MicroPageData;
  agent: Agent;
  typed: string;
  onChange: (agent: Agent) => void;
  onMore: () => void;
  onAsk: (message?: string) => void;
}) {
  const rows = useMemo(() => {
    const even = agent.questions.filter((_, index) => index % 2 === 0);
    const odd = agent.questions.filter((_, index) => index % 2 === 1);
    return [even, odd].filter((row) => row.length > 0);
  }, [agent.questions]);

  return (
    <div className="tpl4">
      <div className="tpl4-bg">
        <img src={themeAssets.familyHero} alt="" />
      </div>
      <AgentSwitch
        agents={page.agents}
        current={agent}
        variant="group"
        showTitle={false}
        onChange={onChange}
        onMore={onMore}
      />
      <section className="family-hero">
        <div className="family-card" />
        <div className="family-panel" />
        <img className="family-photo" src={agent.cover} alt={agent.name} />
        <div className="family-greeting">
          <span>{typed || agent.greeting}</span>
        </div>
        <p className="family-slogan">{agent.slogan}</p>
        {agent.capabilities.length ? (
          <div className="ability-row">
            {agent.capabilities.map((item) => (
              <button
                key={item.label}
                type="button"
                className="ability-card"
                onClick={() => onAsk(item.content)}
              >
                <WbIcon name={item.icon || "agent-2"} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </section>
      {rows.length ? (
        <section className="ask-block">
          <div className="ask-header">
            <h2 className="section-title">猜你想问</h2>
          </div>
          {rows.map((row, rowIndex) => (
            <div className="question-track" key={`row-${rowIndex}`}>
              <div className="question-marquee">
                {[0, 1].map((copy) => (
                  <div className="question-group" key={copy} aria-hidden={copy === 1}>
                    {row.map((question) => (
                      <button
                        key={`${copy}-${question}`}
                        type="button"
                        className="question-pill"
                        onClick={() => onAsk(question)}
                      >
                        <span>{question}</span>
                        <Chevron />
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {page.products.length ? (
        <section className="product-block">
          <h2 className="section-title">商品推荐</h2>
          {page.products.map((product) => (
            <a
              key={product.id}
              className="product-row"
              href={product.sourceUrl || page.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img className="product-cover" src={product.cover} alt="" />
              <span className="product-meta">
                <strong>{product.name}</strong>
                <span className="price-row">
                  <em>{priceLabel(product)}</em>
                  <span className="buy-button">购买</span>
                </span>
              </span>
            </a>
          ))}
        </section>
      ) : null}
      <div className="tpl4-space" />
      <div className="fixed-chat">
        <ChatEntry placeholder={agent.placeholder} variant="filled" onAsk={() => onAsk()} />
      </div>
    </div>
  );
}

export function MicroPage({ page, requestedId }: MicroPageProps) {
  const [agentId, setAgentId] = useState(page?.agents[0]?.id ?? "");
  const [popup, setPopup] = useState<"teachers" | "more" | null>(null);
  const agent = page?.agents.find((item) => item.id === agentId) ?? page?.agents[0];
  const typed = useTypewriter(agent?.greeting ?? "");
  const from = page ? `/m/${page.mId}` : "/m/166282";

  function ask(message?: string) {
    if (!agent) return;
    const href = loginHref(from, message ?? agent.placeholder, agent.id);
    window.location.href = href;
  }

  if (!page || !agent) {
    return (
      <div className="ykyw-app" style={themeVars as CSSProperties}>
        <GuestBar from={from} />
        <main className="ykyw-main missing-page">
          <h1>这个微页面没有公开数据</h1>
          <p>
            {requestedId
              ? `mId=${requestedId} 不在本次抓到的三个公开页面里。`
              : "请从下面三个已抓取的微页面进入。"}
            游客接口只返回了 166282、166280、166279。
          </p>
          {microPages.map((item) => (
            <Link key={item.mId} href={`/m/${item.mId}`}>
              {item.pageName}（mId {item.mId}）
            </Link>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="ykyw-app" style={themeVars as CSSProperties}>
      <GuestBar from={from} />
      <main className="ykyw-main">
        {page.templateType === 1 ? (
          <TemplateOne
            page={page}
            agent={agent}
            typed={typed}
            onChange={(next) => setAgentId(next.id)}
            onMore={() => setPopup("more")}
            onAsk={ask}
          />
        ) : null}
        {page.templateType === 2 ? (
          <TemplateTwo
            page={page}
            agent={agent}
            typed={typed}
            onChange={(next) => setAgentId(next.id)}
            onMore={() => setPopup("more")}
            onAsk={ask}
          />
        ) : null}
        {page.templateType === 4 ? (
          <TemplateFour
            page={page}
            agent={agent}
            typed={typed}
            onChange={(next) => setAgentId(next.id)}
            onMore={() => setPopup("teachers")}
            onAsk={ask}
          />
        ) : null}
        <TechFooter />
      </main>
      {popup ? (
        <AgentPopup
          agents={page.agents}
          currentId={agent.id}
          title={popup === "teachers" ? "换老师" : "请选择智能体"}
          onClose={() => setPopup(null)}
          onSelect={(next) => {
            setAgentId(next.id);
            setPopup(null);
          }}
        />
      ) : null}
    </div>
  );
}

