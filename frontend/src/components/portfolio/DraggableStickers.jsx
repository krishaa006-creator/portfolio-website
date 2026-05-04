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

/* ─── Sticker B: circular design stamp ────────────────────────── */
function DesignStamp() {
  const uid = useId().replace(/:/g, "");
  const SIZE = 118, R = 52, CX = 59, CY = 59;
  const topArc = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;
  const botArc = `M ${CX - R} ${CY} A ${R} ${R} 0 0 0 ${CX + R} ${CY}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle cx={CX} cy={CY} r={57} fill="#2D5F3F" />
        <circle cx={CX} cy={CY} r={53} fill="none" stroke="#FFFBF2" strokeWidth="1.5" strokeDasharray="3 2.5" />
        <circle cx={CX} cy={CY} r={40} fill="none" stroke="#FFFBF2" strokeWidth="0.8" opacity="0.45" />
        <defs>
          <path id={`top-${uid}`} d={topArc} />
          <path id={`bot-${uid}`} d={botArc} />
        </defs>
        <text fill="#FFFBF2" fontSize="7.8" letterSpacing="2.2" fontWeight="600">
          <textPath href={`#top-${uid}`} startOffset="50%" textAnchor="middle">CONSTANTLY CURIOUS</textPath>
        </text>
        <text fill="#FFFBF2" fontSize="7" letterSpacing="1.8" opacity="0.7">
          <textPath href={`#bot-${uid}`} startOffset="50%" textAnchor="middle">designer · thinker</textPath>
        </text>
        <text x={CX - 44} y={CY + 8} fill="#F4C430" fontSize="7" textAnchor="middle">★</text>
        <text x={CX + 44} y={CY + 8} fill="#F4C430" fontSize="7" textAnchor="middle">★</text>
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 2,
      }}>
        <span style={{ fontSize: 22, lineHeight: 1 }}>🔍</span>
        <span style={{ fontFamily: "serif", fontSize: 8.5, color: "#FFFBF2", letterSpacing: "0.1em", opacity: 0.75, textTransform: "uppercase" }}>
          always
        </span>
      </div>
    </div>
  );
}


/* ─── Sticker E: Krishaa avatar doodle ────────────────────────── */
function AvatarSticker() {
  return (
    <div className="relative" style={{ width: 150 }}>
      {/* speech bubble above */}
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
        style={{
          width: 150,
          height: 150,
          objectFit: "contain",
          display: "block",
        }}
        draggable={false}
      />
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
      const vw = window.innerWidth;

      /* ── Hero sticker positions ─────────────────────────────────
         Calibrated precisely from the reference screenshot
         (1029px wide viewport):

         Hot take note: top-right, x≈79% from left, y≈53px from top
         Avatar sticker: mid-right, x≈49% from left, y≈220px from top  */

      // Measure the card first — used by both heroA and heroE
      const card = document.getElementById("hero-world-card");
      const cardRect = card ? card.getBoundingClientRect() : null;

      // A: hot take — just above the card with 32px margin
      //    so it shifts naturally with any layout changes
      const hotTakeH = 210; // approximate rendered height of the note
      const heroA = cardRect
        ? {
            x: Math.min(Math.round(vw * 0.77), vw - 215),
            y: Math.round(cardRect.top + window.scrollY) - hotTakeH - 32,
          }
        : {
            x: Math.min(Math.round(vw * 0.77), vw - 215),
            y: heroTop + 260,
          };
      const avatarW = 150;
      const heroE = cardRect
        ? {
            // 20px gap between avatar right edge and card left edge
            x: Math.round(cardRect.left + window.scrollX) - avatarW - 20,
            y: Math.round(cardRect.bottom + window.scrollY) - avatarW + 20,
          }
        : {
            x: Math.min(Math.round(vw * 0.52), vw - 165),
            y: heroTop + Math.round(window.innerHeight * 0.62),
          };

      setPositions({ heroA, heroE });
    }, 120);

    return () => clearTimeout(id);
  }, []);

  if (!positions) return null;
  const { heroA, heroE } = positions;

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
      <Sticker pos={heroE}  rotate="-8deg" zBase={44}><AvatarSticker /></Sticker>
    </div>
  );
}
