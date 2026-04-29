import React, { useEffect, useState } from "react";
import { navLinks, personal } from "../../mock";
import { Sparkle } from "./Doodles";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md bg-[#F7F2E7]/80 border-b border-[#1A1A1A]/10" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Sparkle color="#E8532C" size={18} className="anim-spinslow" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            krishaa<span className="text-[#E8532C]">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-draw text-sm font-medium tracking-wide text-[#1A1A1A]/80 hover:text-[#1A1A1A]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F7F2E7] hover:border-[#1A1A1A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            resume
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 btn-ink px-4 py-2 rounded-full text-sm font-medium"
          >
            let's chat
            <span className="text-base">→</span>
          </a>
        </div>

        <button
          aria-label="menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center"
        >
          <div className="flex flex-col gap-1">
            <span className={`block w-4 h-[2px] bg-[#1A1A1A] transition ${open ? "rotate-45 translate-y-[3px]" : ""}`}></span>
            <span className={`block w-4 h-[2px] bg-[#1A1A1A] transition ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 mx-5 rounded-2xl border border-[#1A1A1A]/15 bg-[#FFFBF2] px-5 py-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-1 font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 mt-2">
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 btn-outline px-4 py-2 rounded-full text-sm font-medium border border-[#1A1A1A]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                download resume
              </a>
              <a href={`mailto:${personal.email}`} className="inline-flex btn-ink px-4 py-2 rounded-full text-sm">
                let's chat →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
