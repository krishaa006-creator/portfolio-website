import React, { useState } from "react";
import { useDraggable } from "../../hooks/useDraggable";

/* ─── individual draggable sticker ─────────────────────────────── */
function Sticker({ pos: initPos, rotate, children, zBase = 50 }) {
  const [pos, isDragging, handlers] = useDraggable(initPos);
  const [touched, setTouched] = useState(false);

  const onDown  = (e) => { setTouched(true); handlers.onMouseDown(e); };
  const onTouch = (e) => { setTouched(true); handlers.onTouchStart(e); };

  return (
    <div
      onMouseDown={onDown}
      onTouchStart={onTouch}
      style={{
        pointerEvents: "auto",
        position: "absolute",
        left: pos.x,
        top:  pos.y,
        zIndex: isDragging ? 9999 : zBase,
        rotate: isDragging ? "0deg" : rotate,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        filter: isDragging
          ? "drop-shadow(0 22px 36px rgba(0,0,0,0.26))"
          : "drop-shadow(0 4px 12px rgba(0,0,0,0.13))",
        transition: isDragging
          ? "filter 0.12s, rotate 0.12s"
          : "filter 0.3s, rotate 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {!touched && (
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-[#1A1A1A]/8 text-[#1A1A1A]/55 text-[10px] font-medium px-2.5 py-1
            rounded-full border border-[#1A1A1A]/10
            pointer-events-none select-none"
          style={{ letterSpacing: "0.04em" }}
        >
          drag me
        </div>
      )}
      {children}
    </div>
  );
}

/* ─── Sticker A: hot-take sticky note ─────────────────────────── */
function HotTakeNote() {
  return (
    <div
      className="relative rounded-[14px] border border-[#1A1A1A]/10 p-4 pt-5"
      style={{ background: "#FFFBF2", width: 196 }}
    >
      <div className="tape absolute -top-3 left-1/2 -translate-x-1/2" />
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-base leading-none">🔥</span>
        <span className="font-hand text-[15px] text-[#E8532C]">hot take →</span>
      </div>
      <div className="h-px bg-[#1A1A1A]/10 mb-3" />
      <p className="text-[12px] leading-snug text-[#1A1A1A]/80">
        UX, product, service — pick your favourite label. I'll be over here making things make sense.
      </p>
      <div className="mt-3 flex items-center gap-1 opacity-40">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-px flex-1 bg-[#1A1A1A]" style={{ opacity: 0.5 - i * 0.08 }} />
        ))}
        <span className="text-[10px]">✦</span>
      </div>
    </div>
  );
}

/* ─── Sticker B: Krishaa avatar ────────────────────────────────── */
function AvatarSticker() {
  return (
    <div className="relative" style={{ width: 150 }}>
      <div
        className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
          bg-white border border-[#1A1A1A]/12 rounded-full px-3 py-1
          font-hand text-[12px] text-[#1A1A1A] shadow-sm"
      >
        coffee? ☕
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-[#1A1A1A]/12 rotate-45" />
      </div>
      <img
        src="/krishaa-avatar-sticker-nobg.png"
        alt="Krishaa drinking coffee"
        style={{ width: 150, height: 150, objectFit: "contain", display: "block" }}
        draggable={false}
      />
    </div>
  );
}

/* ─── Sticker C: angry/dead/on-fire laptop ──────────────────────
   Exhausted, on fire, absolutely done. SVG doodle sticker.
─────────────────────────────────────────────────────────────────*/
function LaptopOnFire() {
  return (
    <div style={{ position: "relative", width: 200 }}>
      <svg
        viewBox="0 0 200 160"
        width="200"
        height="160"
        style={{ display: "block", overflow: "visible" }}
        aria-hidden
      >
        {/* ── flames left ── */}
        <path d="M18 138 Q8 120 16 108 Q20 120 26 110 Q28 124 22 130 Q30 118 36 106 Q38 122 30 134Z"
          fill="#F4A429" />
        <path d="M22 138 Q12 122 20 112 Q24 126 30 116 Q30 130 24 136Z"
          fill="#E8532C" opacity="0.85" />

        {/* ── flames right ── */}
        <path d="M182 138 Q192 120 184 108 Q180 120 174 110 Q172 124 178 130 Q170 118 164 106 Q162 122 170 134Z"
          fill="#F4A429" />
        <path d="M178 138 Q188 122 180 112 Q176 126 170 116 Q170 130 176 136Z"
          fill="#E8532C" opacity="0.85" />

        {/* ── screen lid ── */}
        <rect x="22" y="4" width="156" height="108" rx="8"
          fill="#D4D1CA" stroke="#1A1A1A" strokeWidth="2.5" />

        {/* camera */}
        <circle cx="100" cy="11" r="3" fill="#B0ADA6" />

        {/* screen (cracked) */}
        <rect x="30" y="15" width="140" height="90" rx="5" fill="#1C1C1E" />

        {/* cracks */}
        <polyline points="55,15 48,40 62,50 52,75"
          fill="none" stroke="#FFFBF2" strokeWidth="1.2" opacity="0.45" />
        <polyline points="62,50 70,60 65,70"
          fill="none" stroke="#FFFBF2" strokeWidth="0.8" opacity="0.3" />

        {/* ── face: angry dead eyes ── */}
        {/* left eye — X */}
        <line x1="62" y1="40" x2="78" y2="56" stroke="#FFFBF2" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="78" y1="40" x2="62" y2="56" stroke="#FFFBF2" strokeWidth="3.5" strokeLinecap="round" />
        {/* left angry brow */}
        <line x1="58" y1="32" x2="80" y2="36" stroke="#FFFBF2" strokeWidth="2.5" strokeLinecap="round" />

        {/* right eye — X */}
        <line x1="122" y1="40" x2="138" y2="56" stroke="#FFFBF2" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="138" y1="40" x2="122" y2="56" stroke="#FFFBF2" strokeWidth="3.5" strokeLinecap="round" />
        {/* right angry brow */}
        <line x1="120" y1="36" x2="142" y2="32" stroke="#FFFBF2" strokeWidth="2.5" strokeLinecap="round" />

        {/* angry squiggly mouth */}
        <path d="M72 75 Q82 69 90 75 Q98 81 108 75 Q118 69 128 75"
          fill="none" stroke="#FFFBF2" strokeWidth="2.5" strokeLinecap="round" />

        {/* steam / smoke wisps rising */}
        <path d="M85 15 Q81 8 85 2 Q89 8 85 15" fill="none" stroke="#888" strokeWidth="1.5"
          strokeLinecap="round" opacity="0.5" />
        <path d="M100 15 Q96 6 100 0 Q104 6 100 15" fill="none" stroke="#888" strokeWidth="1.5"
          strokeLinecap="round" opacity="0.4" />
        <path d="M115 15 Q111 8 115 2 Q119 8 115 15" fill="none" stroke="#888" strokeWidth="1.5"
          strokeLinecap="round" opacity="0.5" />

        {/* sparks flying */}
        <text x="148" y="30" fill="#F4C430" fontSize="11" fontWeight="900">✦</text>
        <text x="38"  y="26" fill="#E8532C" fontSize="9"  fontWeight="900">✦</text>
        <text x="154" y="55" fill="#F4A429" fontSize="7"  fontWeight="900">✦</text>
        <text x="32"  y="50" fill="#F4C430" fontSize="7"  fontWeight="900">✦</text>

        {/* battery 0% */}
        <rect x="136" y="86" width="22" height="9" rx="2"
          fill="none" stroke="#E8532C" strokeWidth="1.5" opacity="0.8" />
        <rect x="158" y="88" width="2.5" height="5" rx="1" fill="#E8532C" opacity="0.7" />
        <text x="138" y="94" fill="#E8532C" fontSize="5.5" fontWeight="700" opacity="0.85">0%</text>

        {/* ── keyboard base ── */}
        <rect x="14" y="112" width="172" height="16" rx="5"
          fill="#C8C5BE" stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="72" y="115" width="56" height="9" rx="2.5" fill="#B5B2AB" />
        <line x1="14" y1="112" x2="186" y2="112" stroke="#1A1A1A" strokeWidth="1" opacity="0.35" />

        {/* bottom foot */}
        <rect x="8" y="126" width="184" height="10" rx="3.5"
          fill="#BFBCB5" stroke="#1A1A1A" strokeWidth="2" />

        {/* ── small floor flames under base ── */}
        <path d="M55 136 Q50 128 56 122 Q60 128 58 135Z" fill="#F4A429" opacity="0.7" />
        <path d="M100 136 Q94 126 100 119 Q106 126 100 136Z" fill="#E8532C" opacity="0.75" />
        <path d="M145 136 Q140 128 146 122 Q150 128 148 135Z" fill="#F4A429" opacity="0.7" />
      </svg>

      {/* speech bubble — upper right, always on top */}
      <div
        style={{
          position: "absolute",
          top: "-18px",
          right: "-162px",
          background: "#FFFBF2",
          border: "2px solid #1A1A1A",
          borderRadius: "14px",
          padding: "8px 12px 8px 11px",
          fontFamily: "Caveat, cursive",
          fontSize: "13px",
          fontWeight: 700,
          color: "#1A1A1A",
          whiteSpace: "nowrap",
          lineHeight: 1.35,
          zIndex: 2,
        }}
      >
        pls ask her to stop 😭
        {/* bubble tail pointing left */}
        <div style={{
          position: "absolute",
          left: "-9px",
          top: "50%",
          transform: "translateY(-50%) rotate(45deg)",
          width: "13px",
          height: "13px",
          background: "#FFFBF2",
          borderLeft: "2px solid #1A1A1A",
          borderBottom: "2px solid #1A1A1A",
        }} />
      </div>
    </div>
  );
}

/* ─── design stamp (kept, not rendered but available) ───────────── */
function DesignStamp() { return null; }

/* ─── main component ──────────────────────────────────────────── */
export default function DraggableStickers() {
  const [positions, setPositions] = React.useState(null);

  React.useEffect(() => {
    const id = setTimeout(() => {
      const vw    = window.innerWidth;
      const card  = document.getElementById("hero-world-card");
      const about = document.getElementById("about");

      const cardRect  = card  ? card.getBoundingClientRect()  : null;
      const aboutRect = about ? about.getBoundingClientRect() : null;

      /* ── A: hot take note — just above the world card ── */
      const hotTakeH = 210;
      const heroA = cardRect
        ? {
            x: Math.min(Math.round(vw * 0.77), vw - 215),
            y: Math.round(cardRect.top + window.scrollY) - hotTakeH - 32,
          }
        : { x: Math.min(Math.round(vw * 0.77), vw - 215), y: 260 };

      /* ── E: avatar sticker — bottom-left of world card ── */
      const avatarW = 150;
      const heroE = cardRect
        ? {
            x: Math.round(cardRect.left + window.scrollX) - avatarW - 20,
            y: Math.round(cardRect.bottom + window.scrollY) - avatarW + 20,
          }
        : { x: Math.min(Math.round(vw * 0.52), vw - 165), y: Math.round(window.innerHeight * 0.62) };

      /* ── C: laptop on fire — right side of the about section ── */
      const laptopC = aboutRect
        ? {
            // sits to the right edge of the about section, roughly 60% down it
            x: Math.min(Math.round(vw * 0.78), vw - 380),
            y: Math.round(aboutRect.top + window.scrollY) + Math.round(aboutRect.height * 0.55),
          }
        : { x: Math.min(Math.round(vw * 0.72), vw - 380), y: Math.round(window.innerHeight * 1.8) };

      setPositions({ heroA, heroE, laptopC });
    }, 120);

    return () => clearTimeout(id);
  }, []);

  if (!positions) return null;
  const { heroA, heroE, laptopC } = positions;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 40,
      }}
    >
      <Sticker pos={heroA}   rotate="-5deg"  zBase={46}><HotTakeNote /></Sticker>
      <Sticker pos={heroE}   rotate="-8deg"  zBase={44}><AvatarSticker /></Sticker>
      <Sticker pos={laptopC} rotate="6deg"   zBase={45}><LaptopOnFire /></Sticker>
    </div>
  );
}
