import React, { useState, useEffect, useRef, useCallback } from "react";
import { personal, funFacts } from "../../mock";
import { Underline, Sparkle, Arrow, EyeBlink, Lightning } from "./Doodles";

/* ── 3D tilt on the sticky note ─────────────────── */
function useTilt(baseRotate = "rotate(1.5deg)") {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: baseRotate });

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setStyle({
      transform: `rotate(${1.5 - x * 3}deg) rotateX(${-y * 14}deg) rotateY(${x * 14}deg)`,
      transition: "transform 0.08s ease",
    });
  }, []);

  const onLeave = useCallback(() => {
    setStyle({ transform: baseRotate, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)" });
  }, [baseRotate]);

  return [ref, style, onMove, onLeave];
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [noteRef, tiltStyle, onTiltMove, onTiltLeave] = useTilt();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const word = (delay) =>
    mounted
      ? { animation: `heroWord 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}ms both` }
      : { opacity: 0 };

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-5 md:px-10">
      <Sparkle className="absolute top-[62%] left-[2%] anim-spinslow" color="#2D5F3F" size={16} />
      <Lightning className="absolute bottom-16 right-[14%] anim-wiggle" color="#F4C430" size={26} />

      <div className="max-w-7xl mx-auto">
        {/* greeting slides in first */}
        <div className="flex items-center gap-3 mb-6" style={word(0)}>
          <div className="w-10 h-[1.5px] bg-[#1A1A1A]" />
          <span className="font-hand text-xl md:text-2xl text-[#E8532C]">
            psst — hi there {personal.emoji}
          </span>
        </div>

        {/* headline — each word animates in with a stagger */}
        <h1 className="font-display text-[52px] leading-[1.02] md:text-[112px] md:leading-[0.98] font-semibold tracking-tight">
          <span className="inline-block" style={word(80)}>i make </span>
          <span className="inline-block italic text-[#E8532C]" style={word(180)}>messy</span>
          <span className="inline-block" style={word(260)}> things</span>
          <br />
          <span className="inline-block" style={word(360)}>make </span>
          <span className="inline-block marker" style={word(450)}>sense.</span>
        </h1>

        <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* left col */}
          <div className="md:col-span-7" style={word(500)}>
            <p className="text-lg md:text-2xl leading-relaxed text-[#1A1A1A]/80 max-w-2xl">
              Hi, I'm{" "}
              <span className="font-display font-semibold text-[#1A1A1A]">Krishaa</span> — a{" "}
              <span className="marker-orange font-medium">UX &amp; service designer</span> based in Bangalore.
              I take complex, tangled problems and turn them into experiences that feel — well, obvious in hindsight.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="btn-ink px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
              >
                peek at my work
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="btn-outline-ink px-6 py-3 rounded-full text-sm font-medium"
              >
                say hi first
              </a>
              <div className="flex items-center gap-2 ml-2">
                <EyeBlink size={36} color="#1A1A1A" />
                <span className="font-hand text-lg text-[#1A1A1A]/70">i don't bite, promise</span>
              </div>
            </div>
          </div>

          {/* right col — sticky note with 3D tilt */}
          <div className="md:col-span-5 relative perspective-wrap" style={word(580)}>
            <div className="absolute -top-3 left-10 tape" style={{ transform: "rotate(-4deg)" }} />
            <div
              ref={noteRef}
              className="sticky-note bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-[20px] p-6 md:p-7 relative cursor-default"
              style={{ transformStyle: "preserve-3d", ...tiltStyle }}
              onMouseMove={onTiltMove}
              onMouseLeave={onTiltLeave}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-hand text-xl text-[#E8532C]">today, in Krishaa's world →</span>
                <Sparkle color="#F4C430" size={18} className="anim-spinslow" />
              </div>
              <ul className="space-y-3">
                {funFacts.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-baseline justify-between gap-3 text-sm border-b border-dashed border-[#1A1A1A]/15 pb-2 last:border-0"
                  >
                    <span className="text-[#1A1A1A]/60 uppercase tracking-wider text-[11px]">{f.label}</span>
                    <span className="font-medium text-right">{f.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-dashed border-[#1A1A1A]/15 flex items-center gap-2">
                <Arrow color="#2D5F3F" width={60} className="anim-wiggle" />
                <span className="font-hand text-lg">currently taking on new projects!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14" style={word(640)}>
          <Underline width={220} color="#2D5F3F" className="anim-draw" />
        </div>
      </div>
    </section>
  );
}
