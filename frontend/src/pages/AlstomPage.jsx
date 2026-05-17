import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import AlstomCaseStudy from "../components/portfolio/AlstomCaseStudy";

const BG      = "#F7F2E7";
const BG_ALT  = "#EDE8DA";
const CARD    = "#FFFFFF";
const BLUE    = "#1B3F72";
const TEXT    = "#1A1A1A";
const MUTED   = "rgba(26,26,26,0.5)";
const DIM     = "rgba(26,26,26,0.32)";
const BORDER  = "rgba(26,26,26,0.1)";

const PROCESS = [
  { n: "01", label: "Research"     },
  { n: "02", label: "Systems"      },
  { n: "03", label: "Touchpoints"  },
  { n: "04", label: "Coach Design" },
];

const HMW = "Design a suburban train that meets the individual preferences of a diverse range of commuters — borrowing the best traits of personal mobility to make the commute genuinely enjoyable.";

export default function AlstomPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <Navbar />

      {/* ── fixed back pill ── */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 border shadow-sm"
          style={{ background: BG, color: MUTED, borderColor: BORDER }}
          onMouseEnter={e => { e.currentTarget.style.color = BLUE; e.currentTarget.style.borderColor = BLUE; }}
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
            <div className="w-6 h-[1.5px]" style={{ background: BLUE }} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: BLUE }}>
              Service Design · 2023
            </span>
          </div>

          {/* title + image */}
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              {/* partner logos */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded"
                  style={{ background: BLUE, color: "#fff", fontSize: 10 }}>ALSTOM</span>
                <span style={{ color: DIM, fontSize: 12 }}>×</span>
                <span className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded"
                  style={{ background: TEXT, color: "#fff", fontSize: 10 }}>STRATE</span>
              </div>

              <h1 className="font-propark font-bold leading-none"
                style={{ fontSize: "clamp(4rem,12vw,8rem)", color: TEXT, letterSpacing: "-0.03em" }}>
                Namma<br />Sarathi
              </h1>
              <p className="mt-3 font-propark italic leading-snug"
                style={{ fontSize: "clamp(1.2rem,3vw,1.65rem)", color: BLUE, fontWeight: 300 }}>
                A suburban rail for Bangalore 2030.
              </p>
            </div>

            <div className="flex items-end justify-end shrink-0" style={{ height: 360 }}>
              <img src="/alstom/37.png" alt="Namma Sarathi Comfort Coach"
                className="h-full w-auto block object-contain object-bottom rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-lg"
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
                      <span className="font-propark text-sm" style={{ color: BLUE, fontWeight: 500 }}>{s.n}</span>
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
              <p className="font-propark italic text-base leading-relaxed" style={{ color: MUTED, fontWeight: 300 }}>
                "{HMW}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <AlstomCaseStudy />

      {/* footer */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: BG_ALT }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between flex-wrap gap-4">
          <p className="font-propark text-lg" style={{ color: MUTED, fontWeight: 300 }}>thanks for reading ✦</p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border transition-all duration-200 shadow-sm"
            style={{ color: TEXT, borderColor: BORDER, background: CARD }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}
          >
            ← back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
