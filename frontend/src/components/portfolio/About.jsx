import React, { useRef, useState, useEffect } from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Tired laptop SVG sticker ─────────────────────────────────── */
function LaptopSticker() {
  return (
    <div className="relative select-none" style={{ width: 200 }}>
      {/* speech bubble */}
      <div
        className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap
          bg-[#FFFBF2] border border-[#1A1A1A]/15 rounded-[12px] px-3 py-2
          font-hand text-[12px] text-[#1A1A1A] shadow-sm z-10"
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.10))" }}
      >
        ask her to give me a break!
        {/* bubble tail */}
        <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3
          bg-[#FFFBF2] border-r border-b border-[#1A1A1A]/15 rotate-45" />
      </div>

      {/* laptop illustration */}
      <svg viewBox="0 0 200 140" width="200" height="140" aria-hidden>
        {/* screen housing */}
        <rect x="14" y="4" width="172" height="110" rx="10" fill="#D8D5CE" stroke="#1A1A1A" strokeWidth="2.5"/>
        {/* camera dot */}
        <circle cx="100" cy="11" r="3" fill="#A9A6A0"/>
        {/* display area */}
        <rect x="22" y="16" width="156" height="92" rx="6" fill="#1C1C1E"/>

        {/* — tired face on screen — */}
        {/* left eye socket */}
        <ellipse cx="72" cy="52" rx="17" ry="13" fill="#2C2C2E"/>
        <ellipse cx="72" cy="55" rx="12" ry="9" fill="#FFFBF2"/>
        <circle cx="72" cy="57" r="5" fill="#1C1C1E"/>
        <circle cx="74" cy="55" r="1.5" fill="white" opacity="0.7"/>
        {/* left droopy eyelid */}
        <path d="M55 52 Q72 40 89 52" fill="#1C1C1E"/>

        {/* right eye socket */}
        <ellipse cx="128" cy="52" rx="17" ry="13" fill="#2C2C2E"/>
        <ellipse cx="128" cy="55" rx="12" ry="9" fill="#FFFBF2"/>
        <circle cx="128" cy="57" r="5" fill="#1C1C1E"/>
        <circle cx="130" cy="55" r="1.5" fill="white" opacity="0.7"/>
        {/* right droopy eyelid */}
        <path d="M111 52 Q128 40 145 52" fill="#1C1C1E"/>

        {/* tired mouth — downward curve */}
        <path d="M82 80 Q100 74 118 80" stroke="#FFFBF2" strokeWidth="2.2" fill="none" strokeLinecap="round"/>

        {/* sweat drop left */}
        <path d="M52 38 Q50 30 54 25 Q58 30 56 38 Q54 43 52 38Z" fill="#88C8F0" opacity="0.85"/>
        {/* sweat drop right */}
        <path d="M148 36 Q146 29 150 24 Q154 29 152 36 Q150 41 148 36Z" fill="#88C8F0" opacity="0.85"/>

        {/* zzz */}
        <text x="155" y="28" fill="#FFFBF2" fontSize="11" fontWeight="600" opacity="0.55">z</text>
        <text x="163" y="21" fill="#FFFBF2" fontSize="9" fontWeight="600" opacity="0.4">z</text>
        <text x="169" y="16" fill="#FFFBF2" fontSize="7" fontWeight="600" opacity="0.25">z</text>

        {/* keyboard base */}
        <rect x="8" y="114" width="184" height="16" rx="5" fill="#C8C5BE" stroke="#1A1A1A" strokeWidth="2.5"/>
        {/* trackpad */}
        <rect x="76" y="117" width="48" height="9" rx="3" fill="#B4B1AA"/>
        {/* bottom foot bar */}
        <rect x="2" y="128" width="196" height="8" rx="4" fill="#BEBBB4" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
    </div>
  );
}

export default function About() {
  const leftRef       = useReveal("left",  0);
  const rightRef      = useReveal("right", 120);
  const brainLeftRef  = useReveal("left",  0);
  const brainRightRef = useReveal("right", 100);

  const [dangled, setDangled] = useState(false);
  const polaroidRef = useRef(null);

  useEffect(() => {
    const el = polaroidRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDangled(true);
          obs.disconnect();
        }
      },
      { threshold: 0.45 }
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

          <div ref={brainRightRef} className="md:col-span-7 order-1 md:order-2 flex justify-center">
            {/* wrapper — laptop lives behind polaroid here */}
            <div className="relative group w-full max-w-[420px]">

              {/* tapes */}
              <div className="absolute -top-3 left-10 z-20 tape" style={{ transform: "rotate(-6deg)" }} />
              <div className="absolute -top-3 right-10 z-20 tape" style={{ transform: "rotate(5deg)" }} />

              {/* laptop sticker — behind the polaroid (z-0), peeks below-left */}
              <div
                className="absolute z-0 pointer-events-none"
                style={{ bottom: "-60px", left: "-30px" }}
              >
                <LaptopSticker />
              </div>

              {/* polaroid card — on top (z-10) */}
              <div
                ref={polaroidRef}
                className={`relative z-10 bg-[#FFFBF2] p-3 pb-12 rounded-[6px]
                  shadow-[0_22px_45px_-22px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.08)]
                  transition-all duration-500
                  group-hover:-translate-y-2 group-hover:rotate-0
                  group-hover:shadow-[0_32px_55px_-22px_rgba(0,0,0,0.35)]
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
                  <span className="font-hand text-base text-[#1A1A1A]">candid. unfiltered. mostly accurate.</span>
                  <span className="font-hand text-sm text-[#1A1A1A]/60">'25</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/55">
                <span>fig. 01 — Krishaa's brain, mapped</span>
                <span>circa right now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
