import React from "react";
import { personal, skills } from "../../mock";
import { CircleDoodle, Heart, Underline, Dots } from "./Doodles";

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
    </section>
  );
}
