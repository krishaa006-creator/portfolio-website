import React from "react";
import { personal } from "../../mock";
import { Heart, Sparkle } from "./Doodles";

export default function Footer() {
  return (
    <footer className="bg-[#F7F2E7] border-t border-[#1A1A1A]/15 px-5 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <Sparkle color="#E8532C" size={16} className="anim-spinslow" />
          <span className="font-display text-xl font-semibold">krishaa<span className="text-[#E8532C]">.</span></span>
          <span className="text-sm text-[#1A1A1A]/55 ml-3">© {new Date().getFullYear()} — designed and coded with lots of</span>
          <Heart color="#E8532C" size={14} />
          <span className="text-sm text-[#1A1A1A]/55">and coffee.</span>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a className="link-draw" href={`mailto:${personal.email}`}>email</a>
          <a className="link-draw" href={personal.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a className="link-draw" href="#top">back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
