import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Sparkle, Underline, Dots } from "./Doodles";
import ProParkCaseStudy from "./ProParkCaseStudy";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isProPark = project.id === "propark";

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-0 md:p-6">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#1A1A1A]/55 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        className="relative w-full max-w-5xl bg-[#F7F2E7] rounded-none md:rounded-[28px] border border-[#1A1A1A]/15 shadow-2xl overflow-hidden max-h-screen md:max-h-[92vh] overflow-y-auto"
        style={{ animation: "floaty 0.01s" }}
      >
        {/* ── Close button — always visible ── */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-[#1A1A1A] text-[#F7F2E7] flex items-center justify-center hover:bg-[#E8532C] transition-colors shadow-lg"
          aria-label="close"
        >
          <X size={18} />
        </button>

        {isProPark ? (
          /* ════════════════════════════════════
             PROPARK — full custom case study
          ════════════════════════════════════ */
          <>
            {/* Case study opens directly — no repeated cover/meta */}
            <ProParkCaseStudy />

            {/* Footer */}
            <div className="px-8 md:px-12 py-8 border-t border-[#1A1A1A]/15 flex items-center justify-between flex-wrap gap-4 bg-[#FFFBF2]">
              <div className="flex items-center gap-2">
                <Dots color={project.accent} count={4} />
                <span className="font-hand text-xl">thanks for scrolling — pretty cool, right?</span>
              </div>
              <button onClick={onClose} className="btn-ink px-5 py-2.5 rounded-full text-sm">
                back to the portfolio
              </button>
            </div>
          </>
        ) : (
          /* ════════════════════════════════════
             GENERIC CASE STUDY (all others)
          ════════════════════════════════════ */
          <>
            {/* header */}
            <div className="relative p-8 md:p-12" style={{ background: project.bg }}>
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl" style={{ color: project.accent }}>{project.number}</span>
                <div className="h-px w-16 bg-[#1A1A1A]/30" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60">{project.year} · case study</span>
              </div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
                {project.title}
              </h2>
              <p className="mt-3 font-display italic text-xl md:text-2xl" style={{ color: project.accent }}>
                {project.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <Meta label="role" value={project.role} />
                <Meta label="duration" value={project.duration} />
                <Meta label="year" value={project.year} />
              </div>
            </div>

            {/* body */}
            <div className="p-8 md:p-12 space-y-12">
              <section>
                <Eyebrow>the problem</Eyebrow>
                <p className="mt-3 text-lg md:text-xl leading-relaxed text-[#1A1A1A]/85 max-w-3xl">
                  {project.description}
                </p>
              </section>

              <section>
                <Eyebrow>how might we</Eyebrow>
                <div className="mt-3 rounded-2xl border-l-4 pl-5 py-2 bg-[#FFFBF2]" style={{ borderColor: project.accent }}>
                  <p className="font-display italic text-xl md:text-2xl leading-snug">
                    "{project.hmw}"
                  </p>
                </div>
              </section>

              <section>
                <Eyebrow>context & signals</Eyebrow>
                <ul className="mt-4 grid sm:grid-cols-3 gap-4">
                  {project.context.map((c, i) => (
                    <li key={i} className="relative p-5 rounded-2xl bg-[#FFFBF2] border border-[#1A1A1A]/12">
                      <span className="font-hand text-xl" style={{ color: project.accent }}>0{i + 1}</span>
                      <p className="mt-2 text-sm leading-relaxed">{c}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <Eyebrow>process</Eyebrow>
                <div className="mt-5 relative">
                  <div className="absolute left-5 top-3 bottom-3 w-px bg-[#1A1A1A]/20" />
                  <ol className="space-y-6">
                    {project.process.map((s, i) => (
                      <li key={i} className="pl-14 relative">
                        <span
                          className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-[#F7F2E7]"
                          style={{ background: project.accent }}
                        >
                          0{i + 1}
                        </span>
                        <div className="font-display text-2xl font-semibold leading-tight">{s.step}</div>
                        <p className="mt-1 text-[#1A1A1A]/80">{s.note}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section>
                <Eyebrow>outcomes</Eyebrow>
                <ul className="mt-4 space-y-2">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Sparkle color={project.accent} size={18} />
                      <span className="text-lg">{o}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="pt-6 border-t border-[#1A1A1A]/15 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Dots color={project.accent} count={4} />
                  <span className="font-hand text-xl">thanks for scrolling — pretty cool, right?</span>
                </div>
                <button onClick={onClose} className="btn-ink px-5 py-2.5 rounded-full text-sm">
                  back to the portfolio
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="px-3 py-2 rounded-xl bg-[#FFFBF2] border border-[#1A1A1A]/15">
      <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-hand text-xl text-[#E8532C]">§ {children}</span>
      <Underline width={60} color="#2D5F3F" />
    </div>
  );
}
