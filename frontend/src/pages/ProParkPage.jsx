import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import ProParkCaseStudy from "../components/portfolio/ProParkCaseStudy";
import { projects } from "../mock";

const proj = projects.find((p) => p.id === "propark");

const BG      = "#F7F2E7";
const BG_ALT  = "#EDE8DA";
const CARD    = "#FFFFFF";
const GOLD    = "#C8920A";
const GOLDBG  = "#F2C040";
const TEXT    = "#1A1A1A";
const MUTED   = "rgba(26,26,26,0.5)";
const DIM     = "rgba(26,26,26,0.32)";
const BORDER  = "rgba(26,26,26,0.1)";

const PROCESS = [
  { n: "01", label: "Empathise" },
  { n: "02", label: "Define" },
  { n: "03", label: "Structure" },
  { n: "04", label: "Design" },
];

export default function ProParkPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <Navbar />

      {/* ── fixed back pill ── */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
            transition-all duration-200 border shadow-sm"
          style={{ background: BG, color: MUTED, borderColor: BORDER }}
          onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = BORDER; }}
        >
          ← portfolio
        </button>
      </div>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <div style={{ background: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-16">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-[1.5px]" style={{ background: GOLD }} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: GOLD }}>
              UX Case Study · 2024
            </span>
          </div>

          {/* title + image */}
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <h1 className="font-propark font-bold leading-none"
                style={{ fontSize: "clamp(4rem,12vw,8rem)", color: TEXT, letterSpacing: "-0.03em" }}>
                ProPark
              </h1>
              <p className="mt-3 font-display italic leading-snug"
                style={{ fontSize: "clamp(1.2rem,3vw,1.65rem)", color: GOLD }}>
                {proj.subtitle}
              </p>
            </div>

            <div className="flex items-end justify-center md:justify-end shrink-0" style={{ height: 220 }}>
              <img
                src="/propark/cover-hand.png"
                alt="ProPark app on phone"
                className="h-full w-auto block object-contain object-bottom"
              />
            </div>
          </div>

          <div className="mt-10 h-px" style={{ background: BORDER }} />

          {/* process + HMW */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: DIM }}>
                Design process
              </p>
              <div className="flex items-center gap-1 flex-wrap">
                {PROCESS.map((s, i) => (
                  <React.Fragment key={s.n}>
                    <div className="flex items-center gap-2 py-1">
                      <span className="font-hand text-base" style={{ color: GOLD }}>{s.n}</span>
                      <span className="text-sm font-medium" style={{ color: TEXT }}>{s.label}</span>
                    </div>
                    {i < PROCESS.length - 1 && (
                      <span className="text-xs mx-1" style={{ color: DIM }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold" style={{ color: DIM }}>
                How might we
              </p>
              <p className="font-display italic text-base leading-relaxed" style={{ color: MUTED }}>
                "{proj.hmw}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProParkCaseStudy />

      {/* footer */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: BG_ALT }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="font-hand text-lg" style={{ color: MUTED }}>thanks for reading ✦</p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border
              transition-all duration-200 shadow-sm"
            style={{ color: TEXT, borderColor: BORDER, background: CARD }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}
          >
            ← back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
