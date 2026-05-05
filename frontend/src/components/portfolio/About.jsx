import React from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Googly-eye panic face — matches reference sticker scale ──────
   viewBox: 0 0 100 80
   Eyes: LARGE (r=15), nearly touching, dominate the face just like
   the reference image. Starburst bubble upper-right.
──────────────────────────────────────────────────────────────────*/
function BrainFace() {
  /*
    Left eye  center: (21, 43)  sclera r=15
    Right eye center: (51, 43)  sclera r=15   gap ≈ 0 (touching)
    Mouth center:     (36, 70)
    Starburst center: (76, 21)  8-point star outer=17 inner=10
  */
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      <svg
        viewBox="0 0 100 80"
        width="100%"
        height="100%"
        style={{ display: "block", overflow: "visible" }}
        aria-hidden
      >

        {/* ══ SPEECH BUBBLE — spiky starburst upper-right ══ */}

        {/* Lightning bolt 1 */}
        <path
          d="M88,4 L85.5,9.5 L88.5,9.5 L86,15"
          stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" fill="none"
        />
        {/* Lightning bolt 2 */}
        <path
          d="M92,2 L89.5,8 L92.5,8 L90,13.5"
          stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" fill="none"
        />

        {/*
          8-point starburst: center (76,21) outerR=17 innerR=10
          M74,3 → computed below, rounding to 1dp
          angle step = 22.5°, start at -90°
          outer points: 0,2,4,6,8,10,12,14
          inner points: 1,3,5,7,9,11,13,15
        */}
        <g className="brain-bubble">
          <path
            d="M76,4 L79.8,10.8 L86,8 L83.2,16.2
               L91,21 L83.2,25.8 L86,34 L79.8,31.2
               L76,38 L72.2,31.2 L66,34 L68.8,25.8
               L61,21 L68.8,16.2 L66,8 L72.2,10.8 Z"
            fill="white"
            stroke="#1A1A1A"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          {/* 4 lines of text — centered at (76,21) */}
          <text x="76" y="15.5" textAnchor="middle"
            fontSize="3.2" fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif" fill="#1A1A1A">
            ask her to
          </text>
          <text x="76" y="21" textAnchor="middle"
            fontSize="3.2" fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif" fill="#1A1A1A">
            give me
          </text>
          <text x="76" y="26.5" textAnchor="middle"
            fontSize="3.2" fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif" fill="#1A1A1A">
            a rest...
          </text>
          <text x="76" y="33" textAnchor="middle"
            fontSize="4.2" fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif" fill="#C13030">
            PLEASE!!
          </text>
        </g>

        {/* ══ LEFT EYE ══ */}
        {/* sclera */}
        <circle cx="27" cy="44" r="9" fill="white" stroke="#1A1A1A" strokeWidth="1.5" />
        {/* upper eyelid arc */}
        <path
          d="M18,41 Q27,35 36,41"
          fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"
        />
        {/* iris + pupil + catchlight — animates to look around */}
        <g className="brain-iris">
          <circle cx="27" cy="45" r="5.5" fill="#5B8FB9" />
          <circle cx="27" cy="45" r="3.4" fill="#1A1A1A" />
          <circle cx="29"  cy="43" r="1.5" fill="white" opacity="0.88" />
        </g>
        {/* eyelid — sweeps down from top to blink */}
        <circle className="brain-lid" cx="27" cy="44" r="9.3"
          fill="#1A1A1A" opacity="0.92" />

        {/* ══ RIGHT EYE ══ */}
        <circle cx="50" cy="44" r="9" fill="white" stroke="#1A1A1A" strokeWidth="1.5" />
        <path
          d="M41,41 Q50,35 59,41"
          fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"
        />
        <g className="brain-iris brain-iris-r">
          <circle cx="50" cy="45" r="5.5" fill="#5B8FB9" />
          <circle cx="50" cy="45" r="3.4" fill="#1A1A1A" />
          <circle cx="52"  cy="43" r="1.5" fill="white" opacity="0.88" />
        </g>
        <circle className="brain-lid brain-lid-r" cx="50" cy="44" r="9.3"
          fill="#1A1A1A" opacity="0.92" />

        {/* ══ MOUTH — wide-open panicked ══ */}
        <g className="brain-mouth-g">
          {/* dark outer */}
          <ellipse cx="38" cy="61" rx="12" ry="7"  fill="#1A1A1A" />
          {/* red interior */}
          <ellipse cx="38" cy="62.5" rx="9.5" ry="5.2" fill="#C13030" />
          {/* upper teeth */}
          <rect x="27.5" y="56" width="21" height="5" rx="2.5" fill="white" />
          {/* bottom lip curve */}
          <path
            d="M26.5,61 Q38,70 49.5,61"
            fill="none" stroke="#1A1A1A" strokeWidth="1.3" strokeLinecap="round"
          />
        </g>

      </svg>
    </div>
  );
}

export default function About() {
  const leftRef       = useReveal("left",  0);
  const rightRef      = useReveal("right", 120);
  const brainLeftRef  = useReveal("left",  0);
  const brainRightRef = useReveal("right", 100);

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
            <div className="relative">

              {/* tapes */}
              <div className="absolute -top-3 left-10 z-20 tape"
                style={{ transform: "rotate(-6deg)" }} />
              <div className="absolute -top-3 right-10 z-20 tape"
                style={{ transform: "rotate(5deg)" }} />

              {/* polaroid card */}
              <div
                className="relative z-10 bg-[#FFFBF2] p-3 pb-12 rounded-[6px]
                  shadow-[0_22px_45px_-22px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.08)]"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                {/* image + face overlay container */}
                <div className="relative">
                  <img
                    src={BRAIN_IMG}
                    alt="What's inside Krishaa's brain"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <BrainFace />
                </div>

                <div className="absolute left-0 right-0 bottom-3 px-4 flex items-center justify-between">
                  <span className="font-hand text-base text-[#1A1A1A]">
                    candid. unfiltered. mostly accurate.
                  </span>
                  <span className="font-hand text-sm text-[#1A1A1A]/60">'25</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between
                text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/55">
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
