import React from "react";
import { personal } from "../../mock";
import { CircleDoodle, Heart, Underline, Sparkle, Squiggle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

/* ── Animated face that overlays on the brain polaroid ──────────
   Big cartoon eyes that blink + an expressive mouth.
   Speech bubble floats to the upper-left of the polaroid.
──────────────────────────────────────────────────────────────── */
function BrainFace() {
  return (
    <>
      {/* speech bubble — sits outside the polaroid to the left */}
      <div
        className="absolute z-30 pointer-events-none"
        style={{ top: "22%", left: "-10px", transform: "translateX(-100%)" }}
      >
        <div
          style={{
            background: "#FFFBF2",
            border: "2.5px solid #1A1A1A",
            borderRadius: "16px",
            padding: "10px 14px",
            fontFamily: "Caveat, cursive",
            fontSize: "15px",
            fontWeight: 700,
            color: "#1A1A1A",
            whiteSpace: "nowrap",
            lineHeight: 1.35,
            position: "relative",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          }}
        >
          pls ask her to stop 😭
          {/* tail pointing right toward the polaroid */}
          <div
            style={{
              position: "absolute",
              right: "-9px",
              top: "50%",
              transform: "translateY(-50%) rotate(45deg)",
              width: "13px",
              height: "13px",
              background: "#FFFBF2",
              borderTop: "2.5px solid #1A1A1A",
              borderRight: "2.5px solid #1A1A1A",
            }}
          />
        </div>
      </div>

      {/* face SVG — absolutely fills the image, eyes blink, mouth moves */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 100 75"
          width="100%"
          height="100%"
          style={{ display: "block" }}
          aria-hidden
        >
          {/* ── left eye ── */}
          <g className="brain-eye" style={{ transformOrigin: "32px 30px" }}>
            {/* white of eye */}
            <ellipse cx="32" cy="30" rx="10" ry="10" fill="white" opacity="0.92" />
            {/* iris */}
            <ellipse cx="32" cy="31" rx="6.5" ry="6.5" fill="#1A1A1A" />
            {/* pupil shine */}
            <ellipse cx="34.5" cy="29" rx="2.2" ry="2.2" fill="white" opacity="0.75" />
            {/* eyelid (covers top, droopy-tired) */}
            <ellipse cx="32" cy="24.5" rx="10.5" ry="5" fill="#C8A87E" opacity="0.55" />
          </g>

          {/* ── right eye ── */}
          <g className="brain-eye" style={{ transformOrigin: "68px 30px", animationDelay: "0.12s" }}>
            <ellipse cx="68" cy="30" rx="10" ry="10" fill="white" opacity="0.92" />
            <ellipse cx="68" cy="31" rx="6.5" ry="6.5" fill="#1A1A1A" />
            <ellipse cx="70.5" cy="29" rx="2.2" ry="2.2" fill="white" opacity="0.75" />
            <ellipse cx="68" cy="24.5" rx="10.5" ry="5" fill="#C8A87E" opacity="0.55" />
          </g>

          {/* ── mouth — open oval, slightly exasperated ── */}
          <g className="brain-mouth" style={{ transformOrigin: "50px 56px" }}>
            <ellipse cx="50" cy="56" rx="10" ry="6" fill="#1A1A1A" opacity="0.82" />
            {/* inner mouth */}
            <ellipse cx="50" cy="57" rx="7.5" ry="4" fill="#8B3A3A" opacity="0.75" />
            {/* teeth */}
            <rect x="44" y="53" width="12" height="3.5" rx="1.5" fill="white" opacity="0.85" />
          </g>
        </svg>
      </div>
    </>
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
            {/* polaroid — the speech bubble is anchored relative to this wrapper */}
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
                  {/* animated eyes + mouth + speech bubble */}
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
