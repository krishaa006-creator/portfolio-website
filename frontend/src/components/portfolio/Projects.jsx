import React from "react";
import { projects } from "../../mock";
import { Arrow, Underline, Sparkle } from "./Doodles";

export default function Projects({ onOpen }) {
  return (
    <section id="work" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14 flex-wrap">
          <div>
            <span className="font-hand text-xl text-[#E8532C]">§ selected work</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
              things i've<br />
              <span className="italic">untangled</span>
              <Sparkle color="#F4C430" size={28} className="inline-block ml-3 align-top anim-spinslow" />
            </h2>
            <Underline width={220} color="#E8532C" className="mt-3" />
          </div>
          <p className="font-hand text-xl max-w-sm text-[#1A1A1A]/70">
            click any project to peek behind the curtain →
          </p>
        </div>

        <div className="grid gap-8 md:gap-10">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => onOpen(p)}
              className="group text-left block relative"
            >
              <article
                className="rounded-[28px] border border-[#1A1A1A]/15 overflow-hidden grid md:grid-cols-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)]"
                style={{ background: p.bg }}
              >
                <div className="md:col-span-5 p-8 md:p-10 relative">
                  <div className="flex items-center gap-3">
                    <span className="font-hand text-2xl" style={{ color: p.accent }}>{p.number}</span>
                    <div className="h-px flex-1 bg-[#1A1A1A]/25" />
                    <span className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/60">{p.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-display italic text-xl md:text-2xl" style={{ color: p.accent }}>
                    {p.subtitle}
                  </p>
                </div>

                <div className="md:col-span-7 p-8 md:p-10 bg-[#FFFBF2] border-t md:border-t-0 md:border-l border-[#1A1A1A]/10 flex flex-col justify-between">
                  <div>
                    <p className="text-base md:text-lg leading-relaxed text-[#1A1A1A]/85">
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-[#1A1A1A]/25 text-xs bg-[#F7F2E7]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex gap-5 text-sm">
                      <div>
                        <div className="uppercase tracking-widest text-[10px] text-[#1A1A1A]/50">role</div>
                        <div className="font-medium">{p.role}</div>
                      </div>
                      <div>
                        <div className="uppercase tracking-widest text-[10px] text-[#1A1A1A]/50">duration</div>
                        <div className="font-medium">{p.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-hand text-xl text-[#1A1A1A] group-hover:text-[#E8532C] transition-colors">
                      open case study
                      <Arrow color="currentColor" width={50} />
                    </div>
                  </div>
                </div>
              </article>
              {idx === 0 && (
                <span className="absolute -top-3 -right-2 bg-[#E8532C] text-[#F7F2E7] text-xs px-3 py-1 rounded-full rotate-6 font-hand text-lg">
                  fresh ✨
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
