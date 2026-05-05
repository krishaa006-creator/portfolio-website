import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { community } from "../../mock";
import { Heart, Sparkle } from "./Doodles";
import { useReveal } from "../../hooks/useReveal";

function CommunityCard({ c, delay }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal("up", delay);

  return (
    <div ref={ref}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        className="group bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6 relative cursor-pointer
          transition-all duration-300 hover:-translate-y-1
          hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] hover:border-[#1A1A1A]/30
          outline-none focus:ring-2 focus:ring-[#E8532C]/40"
      >
        <Sparkle className="absolute top-5 right-5 anim-spinslow" color="#F4C430" size={18} />
        <div className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">{c.date}</div>
        <div className="mt-2 font-display text-2xl font-semibold leading-tight pr-8">{c.title}</div>
        <div className="mt-1 text-sm text-[#1A1A1A]/70">{c.role}</div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-hand text-base text-[#E8532C] transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}>
            hover for the story →
          </span>
          <span
            className="w-7 h-7 rounded-full bg-[#1A1A1A] text-[#FFFBF2] flex items-center justify-center transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden
          >
            <ChevronDown size={14} />
          </span>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="pt-4 mt-4 border-t border-dashed border-[#1A1A1A]/20">
              <ul className="space-y-2.5">
                {c.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#1A1A1A]/85">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E8532C] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  const headerRef = useReveal("up", 0);

  return (
    <section className="relative px-5 md:px-10 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <div className="flex items-center gap-3 mb-6">
            <Heart color="#E8532C" size={20} />
            <span className="font-hand text-xl text-[#E8532C]">§ community & stages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-8 max-w-3xl">
            when i'm not designing, i'm usually{" "}
            <span className="italic">talking about it</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {community.map((c, i) => (
            <CommunityCard key={c.title} c={c} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}
