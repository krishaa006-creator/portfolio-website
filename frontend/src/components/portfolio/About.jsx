import React, { useRef, useState, useEffect } from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Brain Tabs Widget ─────────────────────────────────────────────
   A tiny fake browser window showing "tabs open in Krishaa's brain"
   Each tab is clickable and reveals a different inner thought.
───────────────────────────────────────────────────────────────────*/
const TABS = [
  {
    icon: "📐",
    short: "figma v47 FINAL",
    full: "figma file v47 (FINAL).fig",
    thought: "no wait, v48. v49. ok this is the actual final one i promise",
    type: "text",
  },
  {
    icon: "🙋",
    short: "did we test tho?",
    full: "did we do user research tho?",
    thought: "probably should. adding it to the list for the eighth time",
    type: "text",
  },
  {
    icon: "✨",
    short: "what if we redesigned",
    full: "what if we just... redesigned it?",
    thought: "genuinely asking. what if we did tho. i'm serious. what if.",
    type: "text",
    default: true,
  },
  {
    icon: "☕",
    short: "coffee: 3 (send help)",
    full: "coffee count: 3 (send help)",
    thought: "at this point it's medicine, not caffeine",
    type: "text",
  },
  {
    icon: "📧",
    short: "13 unread emails",
    full: "13 unread emails (no guilt)",
    thought: "",
    type: "loading",
  },
  {
    icon: "🔍",
    short: "1px off. i see it.",
    full: "why is this 1px off??",
    thought: "it's always a 1px issue. every. single. time.",
    type: "text",
  },
];

function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 14,
        height: 14,
        border: "2px solid rgba(26,26,26,0.15)",
        borderTop: "2px solid #E8532C",
        borderRadius: "50%",
        animation: "spin360 0.7s linear infinite",
        verticalAlign: "middle",
        marginRight: 6,
      }}
    />
  );
}

function BrainTabsWidget() {
  const defaultIdx = TABS.findIndex((t) => t.default) ?? 2;
  const [active, setActive] = useState(defaultIdx);
  const [blink, setBlink] = useState(true);

  /* blinking cursor */
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  const tab = TABS[active];

  return (
    <div
      className="select-none"
      style={{
        transform: "rotate(-1.5deg)",
        filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.13))",
        maxWidth: 460,
      }}
    >
      {/* window chrome */}
      <div
        style={{
          background: "#F0EDE7",
          borderRadius: "12px 12px 0 0",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderBottom: "1px solid rgba(26,26,26,0.09)",
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF6058", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
        <span
          style={{
            marginLeft: 8,
            fontFamily: "Caveat, cursive",
            fontSize: 12,
            color: "rgba(26,26,26,0.45)",
            letterSpacing: "0.02em",
          }}
        >
          krishaa's brain.exe — {TABS.length} tabs open
        </span>
      </div>

      {/* tab bar */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          background: "#E8E5DF",
          borderBottom: "1px solid rgba(26,26,26,0.09)",
          scrollbarWidth: "none",
        }}
      >
        {TABS.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            title={t.full}
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "7px 12px",
              fontSize: 11,
              fontFamily: "Caveat, cursive",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              border: "none",
              borderRight: "1px solid rgba(26,26,26,0.08)",
              cursor: "pointer",
              transition: "background 0.15s",
              background: active === i ? "#FFFBF2" : "transparent",
              borderBottom: active === i ? "2px solid #E8532C" : "2px solid transparent",
              color: active === i ? "#1A1A1A" : "rgba(26,26,26,0.5)",
              fontWeight: active === i ? 700 : 400,
              maxWidth: 120,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span style={{ fontSize: 13 }}>{t.icon}</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{t.short}</span>
          </button>
        ))}
      </div>

      {/* content area */}
      <div
        style={{
          background: "#FFFBF2",
          borderRadius: "0 0 12px 12px",
          padding: "16px 18px 18px",
          minHeight: 62,
          fontFamily: "Caveat, cursive",
          fontSize: 18,
          color: "#1A1A1A",
          lineHeight: 1.45,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {tab.type === "loading" ? (
          <span style={{ color: "rgba(26,26,26,0.5)", fontSize: 16 }}>
            <Spinner />
            opening inbox… this may take a while
          </span>
        ) : (
          <span>
            {tab.thought}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "#E8532C",
                marginLeft: 3,
                verticalAlign: "middle",
                opacity: blink ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            />
          </span>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const leftRef       = useReveal("left",  0);
  const rightRef      = useReveal("right", 120);
  const brainLeftRef  = useReveal("left",  0);
  const brainRightRef = useReveal("right", 100);

  const [dangled, setDangled] = useState(false);
  const wrapperRef  = useRef(null);
  const polaroidRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setDangled(true), 400);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative px-5 md:px-10 pt-20 md:pt-28 pb-8 md:pb-12">

      {/* ── Top block: bio + superpower ── */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div ref={leftRef} className="md:col-span-5 md:sticky md:top-32">
          <span className="font-hand text-xl text-[#E8532C]">§ about</span>
          <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
            a little<br />
            <span className="italic">about me</span>
            <Heart className="inline-block ml-3 align-middle anim-floaty" color="#E8532C" size={30} />
          </h2>
          <Underline width={180} color="#2D5F3F" className="mt-3" />

          <div className="mt-8 relative inline-block">
            <CircleDoodle className="absolute -inset-3 -z-0 anim-spinslow" color="#E8532C" size={260} />
            <div className="relative z-10 bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-[22px] p-6 w-[260px]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
              <div className="font-hand text-lg text-[#2D5F3F]">my superpower</div>
              <div className="mt-1 font-display text-xl leading-snug">
                seeing how <span className="marker">physical</span> and{" "}
                <span className="marker-orange">digital</span> experiences connect.
              </div>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="md:col-span-7 flex flex-col gap-8">
          <div>
            <p className="text-xl md:text-2xl leading-[1.55] text-[#1A1A1A]/85">
              {personal.longIntro}
            </p>
            <p className="mt-6 font-display italic text-3xl md:text-4xl text-[#E8532C] leading-[1.15]">
              "{personal.happyPlace}"
            </p>
          </div>
        </div>
      </div>

      {/* ── Brain polaroid block ── */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 border-t border-[#1A1A1A]/10 pt-16 md:pt-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">

          {/* left — text */}
          <div ref={brainLeftRef} className="md:col-span-5 order-2 md:order-1">
            <span className="font-hand text-xl text-[#E8532C]">§ what's rattling around in here</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              roughly 87% <span className="italic">design</span>,<br />
              13% <span className="marker">snack planning</span>
            </h3>
            <Squiggle width={140} color="#2D5F3F" className="mt-4" />
            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/80 max-w-md">
              On any given day, my head is roughly this: a journey map, six open questions, one
              suspiciously catchy song, and the steady hum of{" "}
              <span className="marker-orange">when's lunch?</span>
            </p>
            <div className="mt-6 flex items-center gap-2 font-hand text-xl text-[#2D5F3F]">
              <Sparkle color="#F4C430" size={18} className="anim-spinslow" />
              percentages may shift after coffee.
            </div>
          </div>

          {/* right — polaroid + brain tabs widget */}
          <div ref={brainRightRef} className="md:col-span-7 order-1 md:order-2 flex flex-col gap-6">

            {/* polaroid with tapes */}
            <div ref={wrapperRef} className="relative">
              <div className="absolute -top-3 left-10 z-20 tape"
                style={{ transform: "rotate(-6deg)" }} />
              <div className="absolute -top-3 right-10 z-20 tape"
                style={{ transform: "rotate(5deg)" }} />

              <div
                ref={polaroidRef}
                className={`relative z-10 bg-[#FFFBF2] p-3 pb-12 rounded-[6px]
                  shadow-[0_22px_45px_-22px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.08)]
                  ${dangled ? "polaroid-dangle" : ""}`}
                style={dangled ? {} : { transform: "rotate(-1.5deg)" }}
              >
                <img
                  src={BRAIN_IMG}
                  alt="What's inside Krishaa's brain"
                  className="w-full h-auto block"
                  loading="lazy"
                />
                <div className="absolute left-0 right-0 bottom-3 px-4 flex items-center justify-between">
                  <span className="font-hand text-base text-[#1A1A1A]">
                    candid. unfiltered. mostly accurate.
                  </span>
                  <span className="font-hand text-sm text-[#1A1A1A]/60">'25</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between
                text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/55">
                <span>fig. 01 — Krishaa's brain, mapped</span>
                <span>circa right now</span>
              </div>
            </div>

            {/* brain tabs widget — lives below the polaroid */}
            <BrainTabsWidget />

          </div>
        </div>
      </div>
    </section>
  );
}
