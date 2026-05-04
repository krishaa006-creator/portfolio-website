import React, { useState } from "react";
import { useDraggable } from "../../hooks/useDraggable";

/* ─── individual draggable sticker ─────────────────────────────── */
function Sticker({ pos: initPos, rotate, children, zBase = 50 }) {
  const [pos, isDragging, handlers] = useDraggable(initPos);
  const [touched, setTouched] = useState(false);

  const onDown = (e) => { setTouched(true); handlers.onMouseDown(e); };
  const onTouch = (e) => { setTouched(true); handlers.onTouchStart(e); };

  return (
    <div
      onMouseDown={onDown}
      onTouchStart={onTouch}
      style={{
        /* ⚠️ CRITICAL: override the overlay's pointer-events:none */
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
          : "drop-shadow(0 4px 10px rgba(0,0,0,0.12))",
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

/* ─── sticker shapes ──────────────────────────────────────────── */
function StickyNote({ bg = "#FFFBF2", accent = "#E8532C", label, body, width = 172 }) {
  return (
    <div
      className="relative rounded-[12px] border border-[#1A1A1A]/12 p-4"
      style={{ background: bg, width }}
    >
      <div className="tape absolute -top-3 left-1/2 -translate-x-1/2" />
      <div className="font-hand text-base leading-snug" style={{ color: accent }}>{label}</div>
      <div className="mt-1.5 text-[12px] leading-snug text-[#1A1A1A]/80">{body}</div>
    </div>
  );
}

function RoundBadge({ bg = "#F4C430", text, sub, emoji }) {
  return (
    <div
      className="w-[106px] h-[106px] rounded-full border-[3px] border-dashed border-[#1A1A1A]/22
        flex flex-col items-center justify-center text-center gap-0.5 p-2"
      style={{ background: bg }}
    >
      {emoji && <div className="text-xl leading-none">{emoji}</div>}
      <div className="font-hand text-[12px] leading-tight text-[#1A1A1A]">{text}</div>
      {sub && <div className="text-[9px] text-[#1A1A1A]/65 leading-tight mt-0.5">{sub}</div>}
    </div>
  );
}

function Pill({ text, bg = "#F3E7D9" }) {
  return (
    <div
      className="px-4 py-2.5 rounded-full border-2 border-[#1A1A1A] font-hand text-[14px] text-[#1A1A1A] whitespace-nowrap"
      style={{ background: bg }}
    >
      {text}
    </div>
  );
}

/* ─── main component ──────────────────────────────────────────── */
export default function DraggableStickers() {
  // Resolve section positions after DOM paints
  const [positions, setPositions] = React.useState(null);

  React.useEffect(() => {
    // Small delay ensures layout is stable before measuring
    const id = setTimeout(() => {
      const hero  = document.getElementById("top");
      const about = document.getElementById("about");
      if (!hero || !about) return;

      const heroRect  = hero.getBoundingClientRect();
      const aboutRect = about.getBoundingClientRect();
      const heroTop   = heroRect.top  + window.scrollY;
      const aboutTop  = aboutRect.top + window.scrollY;
      const vw        = window.innerWidth;

      /* ── Hero section safe zones ──────────────────────────────
         Hero layout (approx at 784px viewport):
           • Nav (fixed): y 0–64px
           • Section padding-top (pt-32 = 128px): y 64–192
           • Greeting "psst – hi there": y ~192–220, x 40–290
           • Headline line 1: y ~220–340   ← wide, avoid
           • Headline line 2: y ~340–450   ← wide, avoid
           • 2-col grid (bio+sticky-note): y ~490–720
           • Section bottom: ~y 800+

         Safe hero sticker positions:
           A) Far right, in the gap BETWEEN greeting end and headline start
              (~y 222–265), where the headline text hasn't begun (x > 58%)
           B) Below the grid / bottom of hero, far-left clear edge (x < 5%)
      ─────────────────────────────────────────────────────────── */

      // A: top-right, between greeting row and headline
      const heroA = {
        x: Math.min(Math.round(vw * 0.70), vw - 195),
        y: heroTop + 228,
      };

      // B: bottom-left of hero, outside the text columns
      const heroB = {
        x: Math.max(8, Math.round(vw * 0.01)),
        y: heroTop + 730,
      };

      /* ── About "brain" section safe zones ─────────────────────
         About layout:
           • Top block (bio + superpower card): ~530px tall
           • mt-20 md:mt-28 gap: ~112px
           • Brain section: text (left 5/12) + polaroid (right 7/12)
           • Brain section starts at aboutTop + ~640px

         Safe brain sticker positions:
           C) Left, BELOW the superpower card row, beside brain text
           D) Right, AFTER the polaroid card (below it), clear of image
      ─────────────────────────────────────────────────────────── */

      const brainOffset = 660; // px into About where the brain section lives

      // C: left margin of brain section text
      const aboutC = {
        x: Math.max(8, Math.round(vw * 0.01)),
        y: aboutTop + brainOffset + 30,
      };

      // D: right side, below the brain polaroid card
      const aboutD = {
        x: Math.min(Math.round(vw * 0.72), vw - 220),
        y: aboutTop + brainOffset + 380,
      };

      setPositions({ heroA, heroB, aboutC, aboutD });
    }, 120);

    return () => clearTimeout(id);
  }, []);

  if (!positions) return null;
  const { heroA, heroB, aboutC, aboutD } = positions;

  return (
    /* pointer-events:none on the overlay, each Sticker overrides to auto */
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
      {/* ── HERO A: top-right, between greeting and headline ── */}
      <Sticker pos={heroA} rotate="-5deg" zBase={46}>
        <StickyNote
          accent="#2D5F3F"
          label="hot take →"
          body="the best design insights happen in the shower. shower not included."
        />
      </Sticker>

      {/* ── HERO B: bottom-left, below the main grid ── */}
      <Sticker pos={heroB} rotate="7deg" zBase={44}>
        <RoundBadge
          bg="#F4C430"
          emoji="🎧"
          text="currently vibing"
          sub="lo-fi + oat milk latte"
        />
      </Sticker>

      {/* ── ABOUT C: left margin, beside brain section text ── */}
      <Sticker pos={aboutC} rotate="-4deg" zBase={42}>
        <StickyNote
          bg="#EFE6D2"
          accent="#E8532C"
          label="confession →"
          body="I once mapped a coffee shop's service journey. nobody asked me to."
          width={178}
        />
      </Sticker>

      {/* ── ABOUT D: right, below polaroid ── */}
      <Sticker pos={aboutD} rotate="4deg" zBase={40}>
        <Pill text="my brain has 17 tabs open minimum 🧠" bg="#F3E7D9" />
      </Sticker>
    </div>
  );
}
