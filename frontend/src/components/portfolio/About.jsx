import React, { useRef, useState, useEffect } from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Tired laptop SVG sticker ─────────────────────────────────── */
function LaptopSticker() {
  return (
    <div className="select-none" style={{ width: 220, position: "relative" }}>
      <svg
        viewBox="0 0 220 150"
        width="220"
        height="150"
        style={{ display: "block", overflow: "visible" }}
        aria-hidden
      >
        {/* ── screen lid ── */}
        <rect x="14" y="2" width="192" height="118" rx="10" fill="#D9D6CF" stroke="#1A1A1A" strokeWidth="2.5" />
        {/* camera bump */}
        <circle cx="110" cy="11" r="3.5" fill="#B0ADA6" />
        {/* display */}
        <rect x="22" y="17" width="176" height="96" rx="6" fill="#1C1C1E" />

        {/* ── face ── */}
        {/* left eye white */}
        <ellipse cx="78" cy="57" rx="20" ry="15" fill="#1A1A1E" />
        <ellipse cx="78" cy="60" rx="14" ry="10" fill="#FFFBF2" />
        <circle  cx="78" cy="62"  r="6"  fill="#1C1C1E" />
        <circle  cx="81" cy="60"  r="2"  fill="white" opacity="0.75" />
        {/* left droopy eyelid — heavy, covering top half of eye */}
        <path d="M58 57 Q78 43 98 57" fill="#1C1C1E" />

        {/* right eye white */}
        <ellipse cx="142" cy="57" rx="20" ry="15" fill="#1A1A1E" />
        <ellipse cx="142" cy="60" rx="14" ry="10" fill="#FFFBF2" />
        <circle  cx="142" cy="62"  r="6"  fill="#1C1C1E" />
        <circle  cx="145" cy="60"  r="2"  fill="white" opacity="0.75" />
        {/* right droopy eyelid */}
        <path d="M122 57 Q142 43 162 57" fill="#1C1C1E" />

        {/* tired mouth — downward curve */}
        <path d="M90 88 Q110 81 130 88"
          stroke="#FFFBF2" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* sweat drop (right side) */}
        <path d="M155 28 Q153 19 157 13 Q162 19 160 28 Q158 34 155 28Z"
          fill="#88C8F0" opacity="0.9" />

        {/* zzz rising */}
        <text x="34" y="36" fill="#FFFBF2" fontSize="13" fontWeight="700" opacity="0.55"
          fontFamily="serif">z</text>
        <text x="26" y="26" fill="#FFFBF2" fontSize="10" fontWeight="700" opacity="0.35"
          fontFamily="serif">z</text>
        <text x="20" y="18" fill="#FFFBF2" fontSize="7" fontWeight="700" opacity="0.2"
          fontFamily="serif">z</text>

        {/* ── keyboard base ── */}
        <rect x="8"  y="120" width="204" height="17" rx="5"
          fill="#C8C5BE" stroke="#1A1A1A" strokeWidth="2.5" />
        {/* trackpad */}
        <rect x="82" y="123" width="56" height="10" rx="3" fill="#B5B2AB" />
        {/* hinge line */}
        <line x1="8" y1="120" x2="212" y2="120" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
        {/* bottom foot bar */}
        <rect x="2" y="135" width="216" height="10" rx="4"
          fill="#BFBCB5" stroke="#1A1A1A" strokeWidth="2" />

        {/* low battery indicator — bottom right of screen */}
        <rect x="160" y="102" width="24" height="10" rx="2"
          fill="none" stroke="#FFFBF2" strokeWidth="1.5" opacity="0.5" />
        <rect x="162" y="104" width="6" height="6" rx="1"
          fill="#E8532C" opacity="0.7" />
        <rect x="184" y="105" width="3" height="5" rx="1"
          fill="#FFFBF2" opacity="0.5" />
      </svg>

      {/* speech bubble — floats to the right, always on top */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "-145px",
          zIndex: 30,
          background: "#FFFBF2",
          border: "1.5px solid rgba(26,26,26,0.14)",
          borderRadius: "14px",
          padding: "8px 12px",
          fontSize: "11px",
          fontFamily: "Caveat, cursive",
          color: "#1A1A1A",
          whiteSpace: "nowrap",
          boxShadow: "0 3px 10px rgba(0,0,0,0.10)",
          lineHeight: 1.4,
        }}
      >
        ask her to give me a break!
        {/* tail pointing left */}
        <div style={{
          position: "absolute",
          left: "-7px",
          top: "50%",
          transform: "translateY(-50%) rotate(45deg)",
          width: "12px",
          height: "12px",
          background: "#FFFBF2",
          borderLeft: "1.5px solid rgba(26,26,26,0.14)",
          borderBottom: "1.5px solid rgba(26,26,26,0.14)",
        }} />
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

  /* trigger dangle once wrapper is 30% in view */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* slight delay so scroll-reveal opacity is done first */
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
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
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

          <div ref={brainRightRef} className="md:col-span-7 order-1 md:order-2">
            {/*
              Visual stack (normal flow, no absolute tricks):
              ┌─────────────────────────────┐  ← tapes (absolute on polaroid wrapper)
              │       polaroid (z-10)        │  ← dangles on scroll
              └─────────────────────────────┘
              [  fig. caption  ]
              ┌─────────────────────┐          ← overlaps polaroid by 20px via -mt-5
              │  laptop screen+face │  z-0 (behind polaroid overlap)  [bubble →]
              │  keyboard + base    │  clearly visible below
              └─────────────────────┘
            */}
            <div ref={wrapperRef} className="relative">

              {/* tapes */}
              <div className="absolute -top-3 left-10 z-20 tape"
                style={{ transform: "rotate(-6deg)" }} />
              <div className="absolute -top-3 right-10 z-20 tape"
                style={{ transform: "rotate(5deg)" }} />

              {/* ── polaroid card ── */}
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

              {/* caption */}
              <div className="mt-4 relative z-10 flex items-center justify-between
                text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/55">
                <span>fig. 01 — Krishaa's brain, mapped</span>
                <span>circa right now</span>
              </div>

              {/* ── laptop sticker ──
                  Sits below the caption in normal flow. No z-fighting.
                  Speech bubble (z:30 inline) always floats above everything. */}
              <div className="mt-2 pl-6">
                <LaptopSticker />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
