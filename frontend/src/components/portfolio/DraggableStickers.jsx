import React, { useState, useEffect } from "react";
import { useDraggable } from "../../hooks/useDraggable";

/* ─── individual draggable sticker ──────────────────────────────── */
function Sticker({ pos: initPos, rotate, children, zBase = 50 }) {
  const [pos, isDragging, handlers] = useDraggable(initPos);
  const [touched, setTouched] = useState(false);

  const onDown = (e) => { setTouched(true); handlers.onMouseDown(e); };
  const onTouch = (e) => { setTouched(true); handlers.onTouchStart(e); };

  return (
    <div
      {...handlers}
      onMouseDown={onDown}
      onTouchStart={onTouch}
      style={{
        position: "absolute",
        left: pos.x,
        top:  pos.y,
        zIndex: isDragging ? 9999 : zBase,
        rotate: isDragging ? "0deg" : rotate,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        filter: isDragging
          ? "drop-shadow(0 20px 32px rgba(0,0,0,0.24))"
          : "drop-shadow(0 4px 10px rgba(0,0,0,0.12))",
        transition: isDragging
          ? "filter 0.12s, rotate 0.12s"
          : "filter 0.3s, rotate 0.55s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* "drag me" hint — disappears after first touch */}
      {!touched && (
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-[#1A1A1A] text-[#F7F2E7] text-[10px] font-medium px-2 py-0.5 rounded-full
            animate-bounce pointer-events-none select-none"
          style={{ animationDuration: "1.3s" }}
        >
          drag me!
        </div>
      )}
      {children}
    </div>
  );
}

/* ─── reusable sticker shapes ─────────────────────────────────── */
function StickyNote({ bg = "#FFFBF2", accent = "#E8532C", title, body }) {
  return (
    <div
      className="relative rounded-[12px] border border-[#1A1A1A]/12 p-4 w-[168px]"
      style={{ background: bg }}
    >
      <div className="tape absolute -top-3 left-1/2 -translate-x-1/2" />
      <div className="font-hand text-base leading-snug" style={{ color: accent }}>{title}</div>
      <div className="mt-1.5 text-[12px] leading-snug text-[#1A1A1A]/80">{body}</div>
    </div>
  );
}

function RoundBadge({ bg = "#F4C430", text, sub, emoji }) {
  return (
    <div
      className="w-[108px] h-[108px] rounded-full border-[3px] border-dashed border-[#1A1A1A]/25
        flex flex-col items-center justify-center text-center gap-0.5 p-3"
      style={{ background: bg }}
    >
      {emoji && <div className="text-xl leading-none">{emoji}</div>}
      <div className="font-hand text-[12px] leading-tight text-[#1A1A1A] font-medium">{text}</div>
      {sub && <div className="text-[9px] text-[#1A1A1A]/60 leading-tight">{sub}</div>}
    </div>
  );
}

function Pill({ text, bg = "#F3E7D9" }) {
  return (
    <div
      className="px-4 py-2 rounded-full border-2 border-[#1A1A1A] font-hand text-base text-[#1A1A1A] whitespace-nowrap"
      style={{ background: bg }}
    >
      {text}
    </div>
  );
}

/* ─── main component ──────────────────────────────────────────── */
export default function DraggableStickers() {
  // We resolve section offsets after mount so positions are accurate.
  // heroEl  → <section id="top">   (the hero)
  // aboutEl → <section id="about"> (the about, which contains the brain section)
  const [heroTop,  setHeroTop]  = useState(null);
  const [aboutTop, setAboutTop] = useState(null);

  useEffect(() => {
    const hero  = document.getElementById("top");
    const about = document.getElementById("about");
    if (hero)  setHeroTop(hero.getBoundingClientRect().top   + window.scrollY);
    if (about) setAboutTop(about.getBoundingClientRect().top + window.scrollY);
  }, []);

  // Don't render until we know where the sections are
  if (heroTop === null || aboutTop === null) return null;

  const vw = (pct) => window.innerWidth * pct / 100;

  /* ── Hero section stickers ──────────────────────────────────
     Layout: nav(64) → pt-32(128) → greeting(40) → headline(2 lines)
             → mt-12(48) → 2-col grid [bio+buttons | sticky-note card]
     Left col ends at ~7/12 of content width.
     Safe zones:
       A) Far RIGHT of "hi there" greeting row — above the headline
       B) Below both columns (after the underline doodle, before marquee)
  ─────────────────────────────────────────────────────────── */

  // A) Top-right, in the gap between nav and the greeting line
  //    y ≈ heroTop + 70px, x near right edge but not over nav buttons
  const heroStickerA = {
    x: Math.min(vw(72), window.innerWidth - 190),
    y: heroTop + 72,
  };

  // B) Bottom-right — below the 2-col grid, right side margin
  //    y ≈ heroTop + pt(128) + greeting(40) + gap(24) + headline(220) + mt(48) + grid(200) + mt(56) ≈ heroTop + 716
  const heroStickerB = {
    x: Math.min(vw(74), window.innerWidth - 130),
    y: heroTop + 700,
  };

  /* ── About "snack planning" (brain) section stickers ────────
     The About component has two halves:
       1st half: bio text, sticky md:top-32
       2nd half: brain map polaroid — starts after mt-20 md:mt-28 (≈112px gap)
     Safe zones:
       C) Left margin of the brain sub-section text column
       D) Right edge of the polaroid card
  ─────────────────────────────────────────────────────────── */

  // About top half is roughly pt-20 md:pt-28 (≈112px) + grid (~420px) → brain section at +530px
  const brainY = aboutTop + 530;

  // C) Far left, beside the "snack planning" heading
  const aboutStickerC = {
    x: Math.max(8, vw(2)),
    y: brainY + 60,
  };

  // D) Right side, beside or below the polaroid card
  const aboutStickerD = {
    x: Math.min(vw(78), window.innerWidth - 140),
    y: brainY + 280,
  };

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
      {/* ── Hero sticker A: between nav and headline ── */}
      <Sticker pos={heroStickerA} rotate="-4deg" zBase={45}>
        <StickyNote
          accent="#2D5F3F"
          title="for the record →"
          body="every project starts with a sticky note. usually several hundred."
        />
      </Sticker>

      {/* ── Hero sticker B: below the 2-col grid, right side ── */}
      <Sticker pos={heroStickerB} rotate="5deg" zBase={43}>
        <RoundBadge
          bg="#F4C430"
          emoji="✨"
          text="open to new projects"
          sub="(yes, right now!)"
        />
      </Sticker>

      {/* ── About sticker C: left of brain section text ── */}
      <Sticker pos={aboutStickerC} rotate="-6deg" zBase={41}>
        <StickyNote
          bg="#EFE6D2"
          accent="#E8532C"
          title="true story →"
          body="the snack thing is 100% accurate. no notes."
        />
      </Sticker>

      {/* ── About sticker D: right of polaroid ── */}
      <Sticker pos={aboutStickerD} rotate="3deg" zBase={39}>
        <Pill text="87% design 🧠  13% snacks 🍕" bg="#F3E7D9" />
      </Sticker>
    </div>
  );
}
