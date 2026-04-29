import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  experience,
  collaborations,
  community,
  certifications,
  education,
  skills,
  summary,
} from "../../mock";
import { Squiggle, Star, Sparkle, Underline } from "./Doodles";

/* ----------------- Hover-expand card ----------------- */
function HoverCard({ heading, sub, period, bullets, accent = "#E8532C", initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      tabIndex={0}
      className="group relative bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] hover:border-[#1A1A1A]/30 outline-none focus:ring-2 focus:ring-[#E8532C]/40"
    >
      <div className="flex items-start justify-between gap-5 flex-wrap">
        <div className="min-w-0 flex-1">
          <div className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            {heading}
          </div>
          {sub && <div className="mt-1 text-sm md:text-base text-[#1A1A1A]/70">{sub}</div>}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {period && (
            <span className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/60 whitespace-nowrap">
              {period}
            </span>
          )}
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
            style={{ background: accent, color: "#FFFBF2", transform: open ? "rotate(180deg)" : "rotate(0)" }}
            aria-hidden
          >
            <ChevronDown size={16} />
          </span>
        </div>
      </div>

      {/* expanding panel */}
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pt-4 mt-4 border-t border-dashed border-[#1A1A1A]/20">
            <ul className="space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#1A1A1A]/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* hint */}
      <div
        className="absolute -top-2 right-12 font-hand text-sm text-[#E8532C] transition-opacity duration-300"
        style={{ opacity: open ? 0 : 1 }}
      >
        hover me
      </div>
    </div>
  );
}

/* ----------------- Eyebrow ----------------- */
function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-hand text-xl text-[#E8532C]">§ {children}</span>
      <Underline width={70} color="#2D5F3F" />
    </div>
  );
}

/* ----------------- Resume ----------------- */
export default function Resume() {
  return (
    <section
      id="resume"
      className="relative px-5 md:px-10 py-24 md:py-32 bg-[#EFE6D2] border-y border-[#1A1A1A]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-6">
            <span className="font-hand text-xl text-[#E8532C]">§ the receipts</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
              the<br />
              <span className="italic">resume</span>
              <Sparkle color="#F4C430" size={26} className="inline-block ml-3 align-top anim-spinslow" />
            </h2>
            <Squiggle width={170} color="#2D5F3F" className="mt-4" />
          </div>
          <div className="md:col-span-6 md:pt-12">
            <p className="text-lg md:text-xl leading-relaxed text-[#1A1A1A]/85">{summary}</p>
            <div className="mt-4 flex items-center gap-2 font-hand text-lg text-[#2D5F3F]">
              <Star color="#E8532C" size={16} />
              hover any card to peek at the details →
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="mb-16">
          <Eyebrow>work experience</Eyebrow>
          <div className="grid gap-4">
            {experience.map((job, i) => (
              <HoverCard
                key={job.company}
                heading={job.company}
                sub={`${job.role} \u2014 ${job.blurb}`}
                period={job.period}
                bullets={job.bullets}
                accent={i === 0 ? "#E8532C" : "#1A1A1A"}
              />
            ))}
          </div>
        </div>

        {/* COLLABORATIONS */}
        <div className="mb-16">
          <Eyebrow>milestone industry collaborations</Eyebrow>
          <div className="grid gap-4">
            {collaborations.map((c) => (
              <HoverCard
                key={c.brand}
                heading={`${c.brand} \u00b7 ${c.year}`}
                sub={`${c.label} \u2014 ${c.role}`}
                bullets={c.bullets}
                accent="#2D5F3F"
              />
            ))}
          </div>
        </div>

        {/* EDUCATION + SKILLS row */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-5">
            <Eyebrow>education</Eyebrow>
            <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6 space-y-3">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="py-2 border-b last:border-0 border-dashed border-[#1A1A1A]/15"
                >
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <div className="font-display text-xl font-semibold">{e.degree}</div>
                    <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">{e.period}</span>
                  </div>
                  <div className="text-sm text-[#1A1A1A]/70">{e.school}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <Eyebrow>skills</Eyebrow>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-5">
                <div className="font-hand text-lg text-[#E8532C] mb-3">core design</div>
                <ul className="flex flex-wrap gap-2">
                  {skills.core.map((s) => (
                    <li
                      key={s}
                      className="px-3 py-1.5 rounded-full border border-[#1A1A1A]/25 text-xs bg-white/60 hover:bg-[#1A1A1A] hover:text-[#F7F2E7] transition-colors"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1A1A1A] text-[#F7F2E7] rounded-2xl p-5">
                <div className="font-hand text-lg text-[#F4C430] mb-3">software</div>
                <ul className="flex flex-wrap gap-2">
                  {skills.software.map((s) => (
                    <li
                      key={s}
                      className="px-3 py-1.5 rounded-full border border-[#F7F2E7]/30 text-xs hover:bg-[#E8532C] hover:border-[#E8532C] transition-colors"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* COMMUNITY */}
        <div className="mb-16">
          <Eyebrow>community engagement</Eyebrow>
          <div className="grid md:grid-cols-2 gap-4">
            {community.map((c) => (
              <HoverCard
                key={c.title}
                heading={c.title}
                sub={c.role}
                period={c.date}
                bullets={c.bullets}
                accent="#E8532C"
              />
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <Eyebrow>certifications & upskilling</Eyebrow>
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
