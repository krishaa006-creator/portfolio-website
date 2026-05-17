import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import ProParkCaseStudy from "../components/portfolio/ProParkCaseStudy";
import { projects } from "../mock";

const proj = projects.find((p) => p.id === "propark");

/* ── palette ── */
const GOLD    = "#F2C040";
const DARK    = "#0E0D0C";
const SURFACE = "#171512";
const CARD    = "#1E1B15";
const TEXT    = "#F0EDE6";
const MUTED   = "rgba(240,237,230,0.5)";
const DIM     = "rgba(240,237,230,0.22)";
const BORDER  = "rgba(240,237,230,0.07)";

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
    <div className="min-h-screen" style={{ background: DARK, color: TEXT }}>
      <Navbar dark />

      {/* ── fixed back pill ── */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm backdrop-blur-sm
            transition-all duration-200 border"
          style={{ background: "rgba(14,13,12,0.85)", color: MUTED, borderColor: BORDER }}
          onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = `rgba(242,192,64,0.4)`; }}
          onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = BORDER; }}
        >
          ← portfolio
        </button>
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <div style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-16">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-[1.5px]" style={{ background: GOLD }} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-medium" style={{ color: GOLD }}>
              UX Case Study · 2024
            </span>
          </div>

          {/* title + HMW */}
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h1 className="font-propark leading-none" style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: TEXT }}>
                ProPark
              </h1>
              <p className="mt-3 font-display italic leading-snug"
                style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: GOLD }}>
                {proj.subtitle}
              </p>
            </div>

            {/* meta pills */}
            <div className="flex md:flex-col gap-2 flex-wrap pb-1">
              {[
                { l: "Role",     v: proj.role },
                { l: "Sprint",   v: proj.duration },
                { l: "Year",     v: proj.year },
              ].map(({ l, v }) => (
                <div key={l} className="rounded-xl px-4 py-2.5 border"
                  style={{ background: CARD, borderColor: BORDER, minWidth: 140 }}>
                  <p className="text-[10px] tracking-widest uppercase" style={{ color: DIM }}>{l}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: TEXT }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* divider */}
          <div className="mt-12 h-px" style={{ background: BORDER }} />

          {/* process + HMW — two columns */}
          <div className="mt-8 grid md:grid-cols-[1fr_1fr] gap-8">

            {/* process steps */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: DIM }}>
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

            {/* HMW */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: DIM }}>
                How might we
              </p>
              <p className="font-display italic text-base leading-relaxed" style={{ color: MUTED }}>
                "{proj.hmw}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* case study body */}
      <ProParkCaseStudy />

      {/* footer */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: SURFACE }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="font-hand text-lg" style={{ color: MUTED }}>
            thanks for reading ✦
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border
              transition-all duration-200"
            style={{ color: TEXT, borderColor: BORDER, background: CARD }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(242,192,64,0.4)`; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}
          >
            ← back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
