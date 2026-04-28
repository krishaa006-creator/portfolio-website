import React from "react";
import { personal, skills } from "../../mock";
import { CircleDoodle, Heart, Underline, Dots, Sparkle, Squiggle } from "./Doodles";

const BRAIN_IMG =
  "https://customer-assets.emergentagent.com/job_quirky-portfolio-1/artifacts/rs86p5k3_brain%20map.png";

export default function About() {
  return (
    <section id="about" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
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

        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl leading-[1.55] text-[#1A1A1A]/85">
            {personal.longIntro}
          </p>
          <p className="mt-6 font-display italic text-3xl md:text-4xl text-[#E8532C] leading-[1.15]">
            “{personal.happyPlace}”
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Dots color="#E8532C" count={4} />
                <span className="font-hand text-lg">core skills</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.core.map((s) => (
                  <li key={s} className="px-3 py-1.5 rounded-full border border-[#1A1A1A]/25 text-sm bg-white/60 hover:bg-[#1A1A1A] hover:text-[#F7F2E7] transition-colors">
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
              <ul className="flex flex-wrap gap-2">
                {skills.software.map((s) => (
                  <li key={s} className="px-3 py-1.5 rounded-full border border-[#F7F2E7]/30 text-sm hover:bg-[#E8532C] hover:border-[#E8532C] transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm text-[#F7F2E7]/70 font-hand text-lg">
                also: sticky notes, whiteboards, and way too many tabs.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's in my brain — image based */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-hand text-xl text-[#E8532C]">§ what's rattling around in here</span>
            <h3 className="mt-2 font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
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

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative group">
              {/* tape strips */}
              <div className="absolute -top-3 left-12 tape z-10" style={{ transform: "rotate(-5deg)" }} />
              <div className="absolute -top-3 right-12 tape z-10" style={{ transform: "rotate(4deg)" }} />

              <div
                className="relative rounded-[26px] overflow-hidden bg-[#0E0E0E] border border-[#1A1A1A]/30 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:-translate-y-1"
                style={{ transform: "rotate(-1deg)" }}
              >
                <img
                  src={BRAIN_IMG}
                  alt="What's inside Krishaa's brain — a chart showing the breakdown: 32% user journey mapping, 22% whiteboarding in my mind, 20% questioning everything, 11% UX evaluation, 7% future casting, 5% mental mixtape, 3% hunger pangs."
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-4 font-hand text-base text-[#F4C430]/80">
                  candid. unfiltered. mostly accurate.
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
