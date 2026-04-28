import React, { useState } from "react";
import { brainPieces } from "../../mock";
import { Sparkle, Squiggle } from "./Doodles";

export default function Brain() {
  const [hover, setHover] = useState(null);

  // Build SVG donut using stroke-dasharray on a single circle
  const R = 90;
  const C = 2 * Math.PI * R;
  let cumulative = 0;

  return (
    <section id="brain" className="relative px-5 md:px-10 py-24 md:py-28 bg-[#EFE6D2] border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative inline-block">
            <div className="absolute inset-0 dot-grid opacity-60 rounded-full" />
            <svg width="300" height="300" viewBox="0 0 220 220" className="relative">
              <circle cx="110" cy="110" r={R} fill="#FFFBF2" stroke="#1A1A1A" strokeWidth="1" />
              {brainPieces.map((p) => {
                const frac = p.value / 100;
                const dash = frac * C;
                const gap = C - dash;
                const rot = (cumulative / 100) * 360 - 90;
                cumulative += p.value;
                const isActive = hover === p.label;
                return (
                  <circle
                    key={p.label}
                    cx="110"
                    cy="110"
                    r={R}
                    fill="transparent"
                    stroke={p.color}
                    strokeWidth={isActive ? 36 : 30}
                    strokeDasharray={`${dash} ${gap}`}
                    transform={`rotate(${rot} 110 110)`}
                    style={{ transition: "stroke-width 0.25s ease", cursor: "pointer" }}
                    onMouseEnter={() => setHover(p.label)}
                    onMouseLeave={() => setHover(null)}
                  />
                );
              })}
              <circle cx="110" cy="110" r="55" fill="#FFFBF2" stroke="#1A1A1A" strokeWidth="1" />
              <text x="110" y="104" textAnchor="middle" fontFamily="Caveat" fontSize="20" fill="#E8532C">
                inside
              </text>
              <text x="110" y="125" textAnchor="middle" fontFamily="Fraunces" fontSize="22" fontWeight="600" fill="#1A1A1A">
                my brain
              </text>
            </svg>
            <Sparkle className="absolute -top-2 -right-2 anim-spinslow" color="#E8532C" size={26} />
          </div>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <span className="font-hand text-xl text-[#E8532C]">§ what's rattling around in here</span>
          <h2 className="mt-2 font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            roughly 87% <span className="italic">design</span>,<br />
            13% <span className="marker">snack planning</span>
          </h2>
          <Squiggle width={140} color="#2D5F3F" className="mt-4" />

          <ul className="mt-8 divide-y divide-[#1A1A1A]/12 border-y border-[#1A1A1A]/12">
            {brainPieces.map((p) => {
              const active = hover === p.label;
              return (
                <li
                  key={p.label}
                  onMouseEnter={() => setHover(p.label)}
                  onMouseLeave={() => setHover(null)}
                  className={`flex items-center justify-between py-3 px-2 transition-colors ${active ? "bg-[#FFFBF2]" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                    <span className={`font-medium ${active ? "text-[#E8532C]" : ""}`}>{p.label}</span>
                  </div>
                  <span className="font-display text-xl md:text-2xl font-semibold">{p.value}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
