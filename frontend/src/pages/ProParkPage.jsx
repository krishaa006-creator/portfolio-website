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
    <div className="px-3 py-2 rounded-xl border border-[#1A1A1A]/15" style={{ background: "rgba(255,255,255,0.55)" }}>
      <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/45">{label}</div>
      <div className="font-medium text-sm">{value}</div>
    </div>
  );
}

export default function ProParkPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      {/* ── HERO HEADER ───────────────────────────────── */}
      <div className="border-b border-[#1A1A1A]/12" style={{ background: "#F3E7D9" }}>

        {/* Back nav */}
        <div className="px-8 md:px-14 pt-28 pb-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-hand text-lg text-[#1A1A1A]/50 hover:text-[#E8532C] transition-colors"
          >
            ← back to work
          </button>
        </div>

        {/* Title + HMW two-column */}
        <div className="px-8 md:px-14 py-8 grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-hand text-2xl text-[#E8532C]">01</span>
              <div className="h-px w-8 bg-[#1A1A1A]/25" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#1A1A1A]/50">2024 · UX Case Study</span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.93] tracking-tight">
              ProPark
            </h1>
            <p className="mt-3 font-display italic text-xl md:text-2xl text-[#E8532C]">
              {proj.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Meta label="role"     value={proj.role} />
              <Meta label="duration" value={proj.duration} />
              <Meta label="year"     value={proj.year} />
            </div>
          </div>

          {/* HMW callout card */}
          <div className="rounded-2xl p-5 md:p-6 relative overflow-hidden"
            style={{ background: "#1A1A1A", color: "#F7F2E7" }}>
            <Sparkle color="#E8532C" size={28} className="absolute top-4 right-4 opacity-30" />
            <p className="text-[10px] uppercase tracking-[0.35em] opacity-40 mb-3">
              How Might We
            </p>
            <p className="font-display italic text-base md:text-lg leading-relaxed opacity-90">
              "{proj.hmw}"
            </p>
          </div>
        </div>

        {/* ── Process strip ── */}
        <div className="px-8 md:px-14 pb-10">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/35 mb-4">
            the process
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROCESS.map((s, i) => (
              <div key={s.step}
                className="rounded-2xl p-4 border border-[#1A1A1A]/10 relative"
                style={{ background: "rgba(255,255,255,0.55)" }}>
                <span className="font-hand text-xl text-[#E8532C] opacity-50">{s.num}</span>
                <p className="font-display text-xl font-semibold mt-0.5 tracking-tight">{s.step}</p>
                <p className="text-xs text-[#1A1A1A]/55 mt-1 leading-snug">{s.note}</p>
                {i < 3 && (
                  <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#1A1A1A]/25 text-base z-10 font-bold">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDY BODY ── */}
      <ProParkCaseStudy />

      {/* ── FOOTER ── */}
      <div className="px-8 md:px-14 py-10 border-t border-[#1A1A1A]/15
        flex items-center justify-between flex-wrap gap-4"
        style={{ background: "#FFFBF2" }}>
        <div className="flex items-center gap-2">
          <Dots color="#E8532C" count={4} />
          <span className="font-hand text-xl">thanks for scrolling — pretty cool, right?</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn-ink px-5 py-2.5 rounded-full text-sm"
        >
          back to the portfolio
        </button>
      </div>
    </div>
  );
}
