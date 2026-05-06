import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import ProParkCaseStudy from "../components/portfolio/ProParkCaseStudy";
import { Dots, Sparkle } from "../components/portfolio/Doodles";
import { projects } from "../mock";

const proj = projects.find((p) => p.id === "propark");

const PROCESS = [
  { num: "01", step: "Empathise", note: "Interviews with residents & drivers" },
  { num: "02", step: "Define",    note: "Mapped motivators & inhibitors for both sides" },
  { num: "03", step: "Structure", note: "IA balancing trust + speed" },
  { num: "04", step: "Design",    note: "Dark-mode flows: onboarding → locator → booking" },
];

function Meta({ label, value }) {
  return (
    <div className="px-3 py-2 rounded-xl border border-white/12" style={{ background: "rgba(255,255,255,0.07)" }}>
      <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(242,237,228,0.38)" }}>{label}</div>
      <div className="font-medium text-sm" style={{ color: "#F2EDE4" }}>{value}</div>
    </div>
  );
}

export default function ProParkPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen text-[#F2EDE4] overflow-x-hidden" style={{ background: "#0E0E0E" }}>
      <Navbar dark />

      {/* ── Fixed floating back button ─────────────────── */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
            border border-white/15 shadow-xl backdrop-blur-sm transition-all duration-200
            hover:border-[#E8532C] hover:text-[#E8532C]"
          style={{ background: "rgba(20,20,20,0.9)", color: "#F2EDE4" }}
        >
          ← portfolio
        </button>
      </div>

      {/* ── HERO HEADER ───────────────────────────────── */}
      <div className="border-b border-white/08" style={{ background: "#141414" }}>

        {/* Back nav (inline, top) */}
        <div className="px-8 md:px-14 pt-28 pb-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-hand text-lg transition-colors"
            style={{ color: "rgba(242,237,228,0.4)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#E8532C"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(242,237,228,0.4)"}
          >
            ← back to work
          </button>
        </div>

        {/* Title + HMW two-column */}
        <div className="px-8 md:px-14 py-8 grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-hand text-2xl" style={{ color: "#E8532C" }}>01</span>
              <div className="h-px w-8" style={{ background: "rgba(242,237,228,0.2)" }} />
              <span className="text-[11px] tracking-[0.25em] uppercase" style={{ color: "rgba(242,237,228,0.4)" }}>
                2024 · UX Case Study
              </span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.93] tracking-tight"
              style={{ color: "#F2EDE4" }}>
              ProPark
            </h1>
            <p className="mt-3 font-display italic text-xl md:text-2xl" style={{ color: "#E8532C" }}>
              {proj.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Meta label="role"     value={proj.role} />
              <Meta label="duration" value={proj.duration} />
              <Meta label="year"     value={proj.year} />
            </div>
          </div>

          {/* HMW callout card */}
          <div className="rounded-2xl p-5 md:p-6 relative overflow-hidden border border-white/08"
            style={{ background: "#1C1C1C" }}>
            <Sparkle color="#E8532C" size={26} className="absolute top-4 right-4 opacity-25" />
            <p className="text-[10px] uppercase tracking-[0.35em] mb-3"
              style={{ color: "rgba(242,237,228,0.35)" }}>
              How Might We
            </p>
            <p className="font-display italic text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(242,237,228,0.88)" }}>
              "{proj.hmw}"
            </p>
          </div>
        </div>

        {/* Process strip */}
        <div className="px-8 md:px-14 pb-10">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-4"
            style={{ color: "rgba(242,237,228,0.28)" }}>
            the process
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROCESS.map((s, i) => (
              <div key={s.step}
                className="rounded-2xl p-4 border border-white/08 relative"
                style={{ background: "#1C1C1C" }}>
                <span className="font-hand text-xl opacity-45" style={{ color: "#E8532C" }}>{s.num}</span>
                <p className="font-display text-xl font-semibold mt-0.5 tracking-tight"
                  style={{ color: "#F2EDE4" }}>{s.step}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: "rgba(242,237,228,0.45)" }}>
                  {s.note}
                </p>
                {i < 3 && (
                  <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-base z-10 font-bold"
                    style={{ color: "rgba(242,237,228,0.2)" }}>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case study body */}
      <ProParkCaseStudy />

      {/* Footer */}
      <div className="px-8 md:px-14 py-10 border-t border-white/08
        flex items-center justify-between flex-wrap gap-4"
        style={{ background: "#0E0E0E" }}>
        <div className="flex items-center gap-2">
          <Dots color="#E8532C" count={4} />
          <span className="font-hand text-xl" style={{ color: "rgba(242,237,228,0.6)" }}>
            thanks for scrolling — pretty cool, right?
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-full text-sm font-medium border border-white/15
            transition-all duration-200 hover:border-[#E8532C] hover:text-[#E8532C]"
          style={{ color: "#F2EDE4", background: "rgba(255,255,255,0.06)" }}
        >
          back to the portfolio
        </button>
      </div>
    </div>
  );
}
