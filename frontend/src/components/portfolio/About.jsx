import React from "react";
import { personal, skills } from "../../mock";
import { CircleDoodle, Heart, Underline, Dots, Sparkle, Squiggle } from "./Doodles";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/iwwtv6hz_brain%20map.png";

export default function About() {
  return (
    <section id="about" className="relative px-5 md:px-10 py-20 md:py-28">
      {/* ── Top block: bio + skills ── */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* Left: heading + superpower card */}
        <div className="md:col-span-5 md:sticky md:top-32">
          <span className="font-hand text-xl text-[#E8532C]">§ about</span>
          <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
            a little<br />
            <span className="italic">about me</span>
            <Heart className="inline-block ml-3 align-middle anim-floaty" color="#E8532C" size={30} />
          </h2>
          <Underline width={180} color="#2D5F3F" className="mt-3" />

          <div className="mt-8 relative inline-block">
            <CircleDoodle className="absolute -inset-3 -z-0" color="#E8532C" size={260} />
            <div className="relative z-10 bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-[22px] p-6 w-[260px]">
              <div className="font-hand text-lg text-[#2D5F3F]">my superpower</div>
              <div className="mt-1 font-display text-xl leading-snug">
                seeing how <span className="marker">physical</span> and <span className="marker-orange">digital</span> experiences connect.
              </div>
            </div>
          </div>
        </div>

        {/* Right: bio text + skills boxes */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <div>
            <p className="text-xl md:text-2xl leading-[1.55] text-[#1A1A1A]/85">
              {personal.longIntro}
            </p>
            <p className="mt-6 font-display italic text-3xl md:text-4xl text-[#E8532C] leading-[1.15]">
              "{personal.happyPlace}"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Dots color="#E8532C" count={4} />
                <span className="font-hand text-lg">core skills</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {skills.core.map((s) => (
                  <li
                    key={s}
                    className="px-2.5 py-1 rounded-full border border-[#1A1A1A]/25 text-xs bg-white/60 hover:bg-[#1A1A1A] hover:text-[#F7F2E7] transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1A1A1A] text-[#F7F2E7] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Dots color="#F4C430" count={4} />
                <span className="font-hand text-lg text-[#F4C430]">tools i hug daily</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {skills.software.map((s) => (
                  <li
                    key={s}
                    className="px-2.5 py-1 rounded-full border border-[#F7F2E7]/30 text-xs hover:bg-[#E8532C] hover:border-[#E8532C] transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-[#F7F2E7]/70 font-hand text-lg">
                also: sticky notes, whiteboards, and way too many tabs.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brain polaroid block ── */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 border-t border-[#1A1A1A]/10 pt-16 md:pt-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left: brain copy */}
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-hand text-xl text-[#E8532C]">§ what's rattling around in here</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              roughly 87% <span className="italic">design</span>,<br />
              13% <span className="marker">snack planning</span>
            </h3>
            <Squiggle width={140} color="#2D5F3F" className="mt-4" />

            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/80 max-w-md">
              On any given day, my head is roughly this: a journey map, six open questions, one
              suspiciously catchy song, and the steady hum of <span className="marker-orange">when's lunch?</span>
            </p>

            <div className="mt-6 flex items-center gap-2 font-hand text-xl text-[#2D5F3F]">
              <Sparkle color="#F4C430" size={18} className="anim-spinslow" />
              percentages may shift after coffee.
            </div>
          </div>

          {/* Right: polaroid — centered within its column */}
          <div className="md:col-span-7 order-1 md:order-2 flex justify-center">
            <div className="relative group w-full max-w-[420px]">
              {/* tape strips */}
              <div className="absolute -top-3 left-10 z-20 tape" style={{ transform: "rotate(-6deg)" }} />
              <div className="absolute -top-3 right-10 z-20 tape" style={{ transform: "rotate(5deg)" }} />

              {/* polaroid frame */}
              <div
                className="relative bg-[#FFFBF2] p-3 pb-12 rounded-[6px] shadow-[0_22px_45px_-22px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <img
                  src={BRAIN_IMG}
                  alt="What's inside Krishaa's brain — 32% user journey mapping, 22% whiteboarding in my mind, 20% questioning everything, 11% UX evaluation, 7% future casting, 5% mental mixtape, 3% hunger pangs."
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
