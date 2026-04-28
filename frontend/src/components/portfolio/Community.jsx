import React from "react";
import { community } from "../../mock";
import { Heart, Sparkle } from "./Doodles";

export default function Community() {
  return (
    <section className="relative px-5 md:px-10 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Heart color="#E8532C" size={20} />
          <span className="font-hand text-xl text-[#E8532C]">§ community & stages</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-8 max-w-3xl">
          when i'm not designing, i'm usually <span className="italic">talking about it</span>.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {community.map((c) => (
            <div key={c.title} className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6 relative hover:shadow-lg transition-shadow">
              <Sparkle className="absolute top-5 right-5 anim-spinslow" color="#F4C430" size={18} />
              <div className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">{c.date}</div>
              <div className="mt-2 font-display text-2xl font-semibold leading-tight">{c.title}</div>
              <p className="mt-3 text-[#1A1A1A]/80">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
