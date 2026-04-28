import React from "react";
import { Star } from "./Doodles";

const phrases = [
  "ux designer",
  "service designer",
  "problem untangler",
  "journey mapper",
  "pattern spotter",
  "question asker",
  "experience stitcher",
];

export default function Marquee() {
  const loop = [...phrases, ...phrases, ...phrases];
  return (
    <section aria-hidden className="relative border-y border-[#1A1A1A]/15 bg-[#1A1A1A] text-[#F7F2E7] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap anim-marquee gap-10">
        {loop.map((p, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl md:text-5xl font-medium tracking-tight">
            {p}
            <Star color="#E8532C" size={20} />
          </span>
        ))}
      </div>
    </section>
  );
}
