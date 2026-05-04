import React, { useState, useId } from "react";
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
            bg-[#1A1A1A] text-[#F7F2E7] text-[10px] font-medium px-2.5 py-1 rounded-full
            animate-bounce pointer-events-none select-none"
          style={{ animationDuration: "1.4s" }}
        >
          drag me!
        </div>
      )}
      {children}
    </div>
  );
}

/* ─── Sticker A: hot-take sticky note ────────────────────────────
   Rich sticky note with tape, label, body and a small visual divider
─────────────────────────────────────────────────────────────────── */
function HotTakeNote() {
  return (
    <div
      className="relative rounded-[14px] border border-[#1A1A1A]/10 p-4 pt-5"
      style={{ background: "#FFFBF2", width: 196 }}
    >
      {/* tape */}
      <div className="tape absolute -top-3 left-1/2 -translate-x-1/2" />

      {/* flame row */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-base leading-none">🔥</span>
        <span className="font-hand text-[15px] text-[#E8532C]">hot take →</span>
      </div>

      {/* divider */}
      <div className="h-px bg-[#1A1A1A]/10 mb-3" />

      {/* body */}
      <p className="text-[12px] leading-snug text-[#1A1A1A]/80">
        UX, product, service — pick your favourite label. I'll be over here making things make sense.
      </p>

      {/* bottom doodle row */}
      <div className="mt-3 flex items-center gap-1 opacity-40">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-px flex-1 bg-[#1A1A1A]" style={{ opacity: 0.5 - i * 0.08 }} />
        ))}
        <span className="text-[10px]">✦</span>
      </div>
    </div>
  );
}

/* ─── Sticker B: circular design stamp ───────────────────────────
   SVG stamp with curved text "CONSTANTLY CURIOUS" around the edge
─────────────────────────────────────────────────────────────────── */
function DesignStamp() {
  const uid = useId().replace(/:/g, "");
  const SIZE = 118;
  const R    = 52;   // text path radius
  const CX = SIZE / 2;
  const CY = SIZE / 2;

  // Arc paths for curved text
  const topArc = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;
  const botArc = `M ${CX - R} ${CY} A ${R} ${R} 0 0 0 ${CX + R} ${CY}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {/* Background fill */}
        <circle cx={CX} cy={CY} r={57} fill="#2D5F3F" />
        {/* Outer dashed ring */}
        <circle cx={CX} cy={CY} r={53} fill="none" stroke="#FFFBF2" strokeWidth="1.5" strokeDasharray="3 2.5" />
        {/* Inner thin ring */}
        <circle cx={CX} cy={CY} r={40} fill="none" stroke="#FFFBF2" strokeWidth="0.8" opacity="0.45" />

        {/* Curved text paths */}
        <defs>
          <path id={`top-${uid}`} d={topArc} />
          <path id={`bot-${uid}`} d={botArc} />
        </defs>

        {/* Top arc — "CONSTANTLY CURIOUS" */}
        <text fill="#FFFBF2" fontSize="7.8" letterSpacing="2.2" fontWeight="600">
          <textPath href={`#top-${uid}`} startOffset="50%" textAnchor="middle">
            CONSTANTLY CURIOUS
          </textPath>
        </text>

        {/* Bottom arc — "designer · thinker" */}
        <text fill="#FFFBF2" fontSize="7" letterSpacing="1.8" opacity="0.7">
          <textPath href={`#bot-${uid}`} startOffset="50%" textAnchor="middle">
            designer · thinker
          </textPath>
        </text>

        {/* Stars flanking bottom text */}
        <text x={CX - 44} y={CY + 8} fill="#F4C430" fontSize="7" textAnchor="middle">★</text>
        <text x={CX + 44} y={CY + 8} fill="#F4C430" fontSize="7" textAnchor="middle">★</text>
      </svg>

      {/* Center emoji */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 2,
      }}>
        <span style={{ fontSize: 22, lineHeight: 1 }}>🔍</span>
        <span style={{
          fontFamily: "serif", fontSize: 8.5, color: "#FFFBF2",
          letterSpacing: "0.1em", opacity: 0.75, textTransform: "uppercase",
        }}>always</span>
      </div>
    </div>
  );
}

/* ─── Sticker C: confession note ─────────────────────────────────
   Earthy tone, pushpin decoration, coffee emoji, handwritten feel
─────────────────────────────────────────────────────────────────── */
function ConfessionNote() {
  return (
    <div
      className="relative rounded-[13px] border border-[#1A1A1A]/10 p-4"
      style={{ background: "#EFE6D2", width: 182 }}
    >
      {/* pushpin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-[#E8532C] border-2 border-[#1A1A1A]/20
          shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
        <div className="w-0.5 h-2.5 bg-[#1A1A1A]/40" />
      </div>

      <div className="mt-1 flex items-center gap-1.5 mb-2">
        <span className="text-base leading-none">☕</span>
        <span className="font-hand text-[15px] text-[#E8532C]">confession →</span>
      </div>

      <p className="text-[12px] leading-snug text-[#1A1A1A]/80">
        I once mapped a coffee shop's entire service journey. unprompted. on a napkin.
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1">
          {["☕","📍","🗺️"].map((e) => (
            <span key={e} className="text-[11px] opacity-60">{e}</span>
          ))}
        </div>
        <span className="font-hand text-[10px] text-[#1A1A1A]/50">true story</span>
      </div>
    </div>
  );
}

/* ─── Sticker D: tab-count pill ──────────────────────────────────
   Playful pill shape with tab indicator dots
─────────────────────────────────────────────────────────────────── */
function TabPill() {
  return (
    <div
      className="rounded-full border-2 border-[#1A1A1A] px-5 py-3"
      style={{ background: "#F3E7D9" }}
    >
      {/* mini "browser tabs" row */}
      <div className="flex gap-1 mb-1.5 justify-center">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-sm"
            style={{
              width: i === 2 ? 14 : 8,
              background: i === 2 ? "#E8532C" : "#1A1A1A",
              opacity: i === 2 ? 1 : 0.25,
            }}
          />
        ))}
        <span className="text-[9px] text-[#1A1A1A]/50 leading-none self-end">+10</span>
      </div>
      <div className="font-hand text-[14px] text-[#1A1A1A] whitespace-nowrap text-center leading-tight">
        my brain has 17 tabs open 🧠
      </div>
    </div>
  );
}

/* ─── main component ──────────────────────────────────────────── */
export default function DraggableStickers() {
  const [positions, setPositions] = React.useState(null);

  React.useEffect(() => {
    const id = setTimeout(() => {
      const hero  = document.getElementById("top");
      const about = document.getElementById("about");
      if (!hero || !about) return;

      const heroTop  = hero.getBoundingClientRect().top  + window.scrollY;
      const aboutTop = about.getBoundingClientRect().top + window.scrollY;
      const vw       = window.innerWidth;

      /* Hero positions — calibrated from reference screenshot:
         A) Top-right: just below nav, before the headline begins
            Reference shows sticker at ~64% from left, ~37px from top  */
      const heroA = {
        x: Math.min(Math.round(vw * 0.63), vw - 210),
        y: heroTop + 37,
      };

      /* B) Bottom-left: below the CTA buttons, left side
            Reference shows badge at ~13% from left, ~670px from top   */
      const heroB = {
        x: Math.max(8, Math.round(vw * 0.10)),
        y: heroTop + 668,
      };

      /* About "brain" section safe zones:
         C) Left margin of brain text column                  */
      const aboutC = {
        x: Math.max(8, Math.round(vw * 0.01)),
        y: aboutTop + 660,
      };

      /* D) Right side, clearly below the polaroid image      */
      const aboutD = {
        x: Math.min(Math.round(vw * 0.68), vw - 240),
        y: aboutTop + 1020,
      };

      setPositions({ heroA, heroB, aboutC, aboutD });
    }, 120);

    return () => clearTimeout(id);
  }, []);

  if (!positions) return null;
  const { heroA, heroB, aboutC, aboutD } = positions;

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
      <Sticker pos={heroA}  rotate="-5deg" zBase={46}><HotTakeNote /></Sticker>
      <Sticker pos={heroB}  rotate="6deg"  zBase={44}><DesignStamp /></Sticker>
      <Sticker pos={aboutC} rotate="-4deg" zBase={42}><ConfessionNote /></Sticker>
      <Sticker pos={aboutD} rotate="3deg"  zBase={40}><TabPill /></Sticker>
    </div>
  );
}
