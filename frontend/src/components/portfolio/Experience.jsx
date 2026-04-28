import React from "react";
import { experience, education, collaborations } from "../../mock";
import { Squiggle, Star } from "./Doodles";

export default function Experience() {
  return (
    <section id="resume" className="relative px-5 md:px-10 py-24 md:py-32 bg-[#EFE6D2] border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="font-hand text-xl text-[#E8532C]">§ the receipts</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
              places i've<br />
              <span className="italic">designed at</span>
            </h2>
            <Squiggle width={160} color="#2D5F3F" className="mt-4" />

            <div className="mt-10 bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
              <div className="font-hand text-lg text-[#E8532C] mb-3">school of design</div>
              {education.map((e) => (
                <div key={e.degree} className="py-2 border-b last:border-0 border-dashed border-[#1A1A1A]/15">
                  <div className="font-display text-xl font-semibold">{e.degree}</div>
                  <div className="text-sm text-[#1A1A1A]/70">{e.school} · {e.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <ol className="relative border-l border-[#1A1A1A]/25 ml-3">
              {experience.map((job, i) => (
                <li key={i} className="mb-10 ml-6">
                  <span
                    className="absolute -left-[9px] w-4 h-4 rounded-full border-2 border-[#1A1A1A] bg-[#F7F2E7] flex items-center justify-center"
                    style={{ background: i === 0 ? "#E8532C" : "#FFFBF2" }}
                  />
                  <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="font-display text-2xl font-semibold leading-tight">{job.company}</div>
                        <div className="text-sm text-[#1A1A1A]/70 mt-1">{job.role}</div>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/60 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-3 text-[#1A1A1A]/85">{job.blurb}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* collaborations */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Star color="#E8532C" size={20} />
            <span className="font-hand text-xl text-[#E8532C]">§ industry collabs (proud moments)</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {collaborations.map((c) => (
              <div key={c.brand} className="relative bg-[#1A1A1A] text-[#F7F2E7] rounded-2xl p-6 hover:bg-[#E8532C] transition-colors group">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-4xl font-semibold tracking-tight">{c.brand}</div>
                  <span className="font-hand text-xl text-[#F4C430] group-hover:text-[#FFFBF2]">{c.year}</span>
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-[#F7F2E7]/70 group-hover:text-[#FFFBF2]/90">
                  {c.label}
                </div>
                <p className="mt-4 text-sm text-[#F7F2E7]/85 group-hover:text-[#FFFBF2]">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
