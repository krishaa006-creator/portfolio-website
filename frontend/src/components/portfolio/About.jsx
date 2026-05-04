import React from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Googly-eye panic face — overlaid on the brain polaroid photo ─
   Style ref: big cartoon eyes (pupils dart around), wide open mouth,
   spiky starburst speech bubble with lightning bolts shaking.
   All animation via CSS classes defined in index.css.
──────────────────────────────────────────────────────────────────*/
function BrainFace() {
  /*
    SVG viewBox "0 0 100 75" scales 1:1 with the image.
    Face sits center-left on the image so the starburst bubble
    (upper-right) has room and doesn't overflow.

    Left eye  center: (27, 44)   sclera r=11
    Right eye center: (50, 44)   sclera r=11
    Mouth center:     (38, 60)
    Starburst center: (76, 22)   8-point star
  */
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      <svg
        viewBox="0 0 100 75"
        width="100%"
        height="100%"
        style={{ display: "block", overflow: "visible" }}
        aria-hidden
      >

        {/* ══ STARBURST SPEECH BUBBLE (upper-right) ══ */}
        {/* Lightning bolt 1 */}
        <path
          d="M88,5 L85.5,10 L88.5,10 L86,15.5"
          stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round"
          strokeLinejoin="round" fill="none"
        />
        {/* Lightning bolt 2 */}
        <path
          d="M92,2.5 L89.5,8 L92.5,8 L90,14"
          stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round"
          strokeLinejoin="round" fill="none"
        />

        {/* 8-point starburst — computed at center (76,22) outerR=15 innerR=9 */}
        <g className="brain-bubble">
          <path
            d="M76,7 L79.5,13.7 L86.6,11.4 L84.3,18.6 L91,22
               L84.3,25.5 L86.6,32.6 L79.5,30.3 L76,37
               L72.6,30.3 L65.4,32.6 L67.7,25.5 L61,22
               L67.7,18.6 L65.4,11.4 L72.6,13.7 Z"
            fill="white"
            stroke="#1A1A1A"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          {/* Text inside starburst */}
          <text
            x="76" y="19.5"
            textAnchor="middle"
            fontSize="3.8"
            fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif"
            fill="#1A1A1A"
          >
            SEND HELP
          </text>
          <text
            x="76" y="25"
            textAnchor="middle"
            fontSize="3.8"
            fontWeight="900"
            fontFamily="'Arial Black', Impact, sans-serif"
            fill="#1A1A1A"
          >
            FAST
          </text>
        </g>

        {/* ══ LEFT EYE ══ */}
        {/* sclera */}
        <circle cx="27" cy="44" r="11" fill="white" stroke="#1A1A1A" strokeWidth="1.6" />
        {/* upper eyelid arc (always visible — reference has prominent upper lids) */}
        <path
          d="M16.5 40 Q27 33 37.5 40"
          fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"
        />
        {/* iris + pupil + highlight — this whole group translates to look around */}
        <g className="brain-iris">
          <circle cx="27" cy="45" r="7"   fill="#5B8FB9" />
          <circle cx="27" cy="45" r="4.2" fill="#1A1A1A" />
          <circle cx="29.5" cy="42.8" r="2" fill="white" opacity="0.85" />
        </g>
        {/* eyelid — sweeps down from top to blink */}
        <circle className="brain-lid" cx="27" cy="44" r="11.2" fill="#1A1A1A" opacity="0.9" />

        {/* ══ RIGHT EYE ══ */}
        <circle cx="50" cy="44" r="11" fill="white" stroke="#1A1A1A" strokeWidth="1.6" />
        <path
          d="M39.5 40 Q50 33 60.5 40"
          fill="none" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"
        />
        <g className="brain-iris brain-iris-r">
          <circle cx="50" cy="45" r="7"   fill="#5B8FB9" />
          <circle cx="50" cy="45" r="4.2" fill="#1A1A1A" />
          <circle cx="52.5" cy="42.8" r="2" fill="white" opacity="0.85" />
        </g>
        <circle className="brain-lid brain-lid-r" cx="50" cy="44" r="11.2" fill="#1A1A1A" opacity="0.9" />

        {/* ══ MOUTH — wide open panicked ══ */}
        <g className="brain-mouth-g">
          {/* outer dark shape */}
          <ellipse cx="38" cy="60" rx="13" ry="8.5" fill="#1A1A1A" />
          {/* red inner */}
          <ellipse cx="38" cy="61.5" rx="10.2" ry="6.5" fill="#C13030" />
          {/* upper teeth */}
          <rect x="27.5" y="54.5" width="21" height="5.5" rx="2.5" fill="white" />
          {/* bottom lip shadow line */}
          <path
            d="M25.5 60 Q38 70 50.5 60"
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
                  {/* Googly eyes + panicked mouth + starburst bubble */}
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
