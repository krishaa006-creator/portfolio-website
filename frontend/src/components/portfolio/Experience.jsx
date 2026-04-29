import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  experience,
  education,
  collaborations,
  certifications,
} from "../../mock";
import { Squiggle, Star, Sparkle } from "./Doodles";

/* Job card with hover-expand */
function JobCard({ job, isFirst }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="mb-7 ml-6 relative">
      <span
        className="absolute -left-[33px] top-5 w-4 h-4 rounded-full border-2 border-[#1A1A1A]"
        style={{ background: isFirst ? "#E8532C" : "#FFFBF2" }}
      />
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        className="group bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] hover:border-[#1A1A1A]/30 outline-none focus:ring-2 focus:ring-[#E8532C]/40"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="min-w-0 flex-1">
            <div className="font-display text-2xl font-semibold leading-tight">{job.company}</div>
            <div className="text-sm text-[#1A1A1A]/70 mt-1">{job.role}</div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/60 whitespace-nowrap">
              {job.period}
            </span>
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
              style={{
                background: isFirst ? "#E8532C" : "#1A1A1A",
                color: "#FFFBF2",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
              aria-hidden
            >
              <ChevronDown size={14} />
            </span>
          </div>
        </div>
        <p className="mt-3 text-[#1A1A1A]/85">{job.blurb}</p>

        {/* expanding bullets */}
        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="pt-4 mt-4 border-t border-dashed border-[#1A1A1A]/20">
              <ul className="space-y-2.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#1A1A1A]/85">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: isFirst ? "#E8532C" : "#1A1A1A" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

/* Collab dark card with hover-expand */
function CollabCard({ c }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      tabIndex={0}
      className="relative bg-[#1A1A1A] text-[#F7F2E7] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.4)] outline-none focus:ring-2 focus:ring-[#E8532C]/60"
    >
      <div className="flex items-baseline justify-between">
        <div className="font-display text-4xl font-semibold tracking-tight">{c.brand}</div>
        <span className="font-hand text-xl text-[#F4C430]">{c.year}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-[#F7F2E7]/70">{c.label}</div>
      <p className="mt-4 text-sm text-[#F7F2E7]/85">{c.role}</p>

      {/* expanding bullets */}
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pt-4 mt-4 border-t border-dashed border-[#F7F2E7]/25">
            <ul className="space-y-2.5">
              {c.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#F7F2E7]/90">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F4C430] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Experience() {
  return (
    <section id="resume" className="relative px-5 md:px-10 py-24 md:py-32 bg-[#EFE6D2] border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          {/* left column: header + education */}
          <div className="md:col-span-5">
            <span className="font-hand text-xl text-[#E8532C]">§ the receipts</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
              places i've<br />
              <span className="italic">designed at</span>
            </h2>
            <Squiggle width={160} color="#2D5F3F" className="mt-4" />

            <p className="mt-6 font-hand text-xl text-[#2D5F3F] flex items-center gap-2">
              <Sparkle color="#F4C430" size={16} className="anim-spinslow" />
              hover any card for the deeper story →
            </p>

            <div className="mt-8 bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
              <div className="font-hand text-lg text-[#E8532C] mb-3">school of design</div>
              {education.map((e) => (
                <div key={e.degree} className="py-2 border-b last:border-0 border-dashed border-[#1A1A1A]/15">
                  <div className="font-display text-xl font-semibold">{e.degree}</div>
                  <div className="text-sm text-[#1A1A1A]/70">{e.school} · {e.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right column: timeline of jobs */}
          <div className="md:col-span-7">
            <ol className="relative border-l border-[#1A1A1A]/25 pl-1">
              {experience.map((job, i) => (
                <JobCard key={job.company} job={job} isFirst={i === 0} />
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
              <CollabCard key={c.brand} c={c} />
            ))}
          </div>
        </div>

        {/* certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-5">
            <Sparkle color="#F4C430" size={18} className="anim-spinslow" />
            <span className="font-hand text-xl text-[#E8532C]">§ certifications & upskilling</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <div className="font-display text-xl font-semibold leading-snug">{c.title}</div>
                <div className="text-sm text-[#1A1A1A]/70 mt-1">{c.issuer}</div>
                <p className="mt-3 text-sm text-[#1A1A1A]/85">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
