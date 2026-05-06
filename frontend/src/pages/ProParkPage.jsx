import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import ProParkCaseStudy from "../components/portfolio/ProParkCaseStudy";
import { Dots, Sparkle } from "../components/portfolio/Doodles";
import { projects } from "../mock";

const proj = projects.find((p) => p.id === "propark");

const GOLD      = "#F2C040";
const DARK      = "#131210";
const DARK_MID  = "#1A1815";
const DARK_CARD = "#221F18";
const TEXT      = "#FFFFFF";
const TEXT_MUTED = "rgba(255,255,255,0.5)";
const TEXT_DIM   = "rgba(255,255,255,0.28)";
const BORDER     = "rgba(255,255,255,0.08)";

const PROCESS = [
  { num: "01", step: "Empathise", note: "Interviews with residents & drivers" },
  { num: "02", step: "Define",    note: "Mapped motivators & inhibitors for both sides" },
  { num: "03", step: "Structure", note: "IA balancing trust + speed" },
  { num: "04", step: "Design",    note: "Dark-mode flows: onboarding → locator → booking" },
];

function Meta({ label, value }) {
  return (
    <div className="px-3 py-2 rounded-xl border" style={{ background: "rgba(255,255,255,0.06)", borderColor: BORDER }}>
      <div className="text-[10px] uppercase tracking-widest" style={{ color: TEXT_DIM }}>{label}</div>
      <div className="font-medium text-sm" style={{ color: TEXT }}>{value}</div>
    </div>
  );
}

export default function ProParkPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: DARK, color: TEXT }}>
      <Navbar dark />

      {/* ── Fixed floating back button ─────────────────── */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
            shadow-xl backdrop-blur-sm transition-all duration-200"
          style={{
            background: "rgba(19,18,16,0.92)",
            color: TEXT_MUTED,
            border: `1px solid ${BORDER}`,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT_MUTED; }}
        >
          ← portfolio
        </button>
      </div>

      {/* ── HERO HEADER ───────────────────────────────── */}
      <div className="border-b" style={{ background: DARK_MID, borderColor: BORDER }}>

        {/* Back nav (inline) */}
        <div className="px-8 md:px-14 pt-28 pb-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-hand text-lg transition-colors"
            style={{ color: TEXT_DIM }}
            onMouseEnter={e => e.currentTarget.style.color = GOLD}
            onMouseLeave={e => e.currentTarget.style.color = TEXT_DIM}
          >
            ← back to work
          </button>
        </div>

        {/* Title + HMW two-column */}
        <div className="px-8 md:px-14 py-8 grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-hand text-2xl" style={{ color: GOLD }}>01</span>
              <div className="h-px w-8" style={{ background: BORDER }} />
              <span className="text-[11px] tracking-[0.25em] uppercase" style={{ color: TEXT_DIM }}>
                2024 · UX Case Study
              </span>
            </div>
            <h1 className="font-propark text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.93]"
              style={{ color: TEXT }}>
              ProPark
            </h1>
            <p className="mt-3 font-display italic text-xl md:text-2xl" style={{ color: GOLD }}>
              {proj.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Meta label="role"     value={proj.role} />
              <Meta label="duration" value={proj.duration} />
              <Meta label="year"     value={proj.year} />
            </div>
          </div>

          {/* HMW callout */}
          <div className="rounded-2xl p-5 md:p-6 relative overflow-hidden border"
            style={{ background: DARK_CARD, borderColor: `rgba(242,192,64,0.18)` }}>
            <Sparkle color={GOLD} size={26} className="absolute top-4 right-4 opacity-25" />
            <p className="text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: TEXT_DIM }}>
              How Might We
            </p>
            <p className="font-display italic text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}>
              "{proj.hmw}"
            </p>
          </div>
        </div>

        {/* Process strip */}
        <div className="px-8 md:px-14 pb-10">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: TEXT_DIM }}>
            the process
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROCESS.map((s, i) => (
              <div key={s.step}
                className="rounded-2xl p-4 border relative"
                style={{ background: DARK_CARD, borderColor: BORDER }}>
                <span className="font-hand text-xl opacity-45" style={{ color: GOLD }}>{s.num}</span>
                <p className="font-propark font-bold text-lg mt-0.5" style={{ color: TEXT }}>{s.step}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: TEXT_MUTED }}>{s.note}</p>
                {i < 3 && (
                  <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-base z-10 font-bold"
                    style={{ color: TEXT_DIM }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case study body */}
      <ProParkCaseStudy />

      {/* Footer */}
      <div className="px-8 md:px-14 py-10 border-t flex items-center justify-between flex-wrap gap-4"
        style={{ background: DARK, borderColor: BORDER }}>
        <div className="flex items-center gap-2">
          <Dots color={GOLD} count={4} />
          <span className="font-hand text-xl" style={{ color: TEXT_MUTED }}>
            thanks for scrolling — pretty cool, right?
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200"
          style={{ color: TEXT, background: "rgba(255,255,255,0.06)", borderColor: BORDER }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}
        >
          back to the portfolio
        </button>
      </div>
    </div>
  );
}
