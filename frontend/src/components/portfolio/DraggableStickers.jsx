import React, { useState } from "react";
import { useDraggable } from "../../hooks/useDraggable";

/* ── individual draggable sticker ─────────────────── */
function Sticker({ initialPos, rotate, children, zBase = 50 }) {
  const [pos, isDragging, handlers] = useDraggable(initialPos);
  const [everDragged, setEverDragged] = useState(false);

  const onDown = (e) => {
    setEverDragged(true);
    handlers.onMouseDown(e);
  };
  const onTouch = (e) => {
    setEverDragged(true);
    handlers.onTouchStart(e);
  };

  return (
    <div
      {...handlers}
      onMouseDown={onDown}
      onTouchStart={onTouch}
      style={{
        position: "fixed",
        left: pos.x,
        top:  pos.y,
        zIndex: isDragging ? 9999 : zBase,
        rotate: isDragging ? "1deg" : rotate,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        transition: isDragging
          ? "box-shadow 0.15s, rotate 0.15s"
          : "rotate 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s",
        filter: isDragging
          ? "drop-shadow(0 18px 28px rgba(0,0,0,0.22))"
          : "drop-shadow(0 4px 10px rgba(0,0,0,0.13))",
      }}
    >
      {!everDragged && (
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-[#1A1A1A] text-[#F7F2E7] text-[10px] font-medium px-2 py-0.5 rounded-full
            animate-bounce pointer-events-none"
          style={{ animationDuration: "1.4s" }}
        >
          drag me!
        </div>
      )}
      {children}
    </div>
  );
}

/* ── sticker designs ────────────────────────────────── */

function StickyNote({ color = "#FFFBF2", accent = "#E8532C", title, body, tape = true }) {
  return (
    <div
      className="relative rounded-[12px] border border-[#1A1A1A]/12 p-4 w-[175px]"
      style={{ background: color, fontFamily: "inherit" }}
    >
      {tape && (
        <div
          className="tape absolute -top-3 left-1/2 -translate-x-1/2"
          style={{ transform: "translateX(-50%) rotate(-2deg)" }}
        />
      )}
      <div className="font-hand text-base leading-snug" style={{ color: accent }}>{title}</div>
      <div className="mt-1.5 text-[13px] leading-snug text-[#1A1A1A]/80">{body}</div>
    </div>
  );
}

function RoundBadge({ bg = "#E8532C", text, subtext, emoji }) {
  return (
    <div
      className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#1A1A1A]/25
        flex flex-col items-center justify-center text-center gap-0.5 p-3"
      style={{ background: bg }}
    >
      {emoji && <div className="text-2xl leading-none">{emoji}</div>}
      <div className="font-hand text-[13px] leading-tight text-[#1A1A1A] font-medium">{text}</div>
      {subtext && <div className="text-[10px] text-[#1A1A1A]/70 leading-tight">{subtext}</div>}
    </div>
  );
}

function TagPill({ text, color = "#F4C430" }) {
  return (
    <div
      className="px-4 py-2 rounded-full border-2 border-[#1A1A1A] font-hand text-lg text-[#1A1A1A]
        whitespace-nowrap"
      style={{ background: color }}
    >
      {text}
    </div>
  );
}

function DesignCard() {
  return (
    <div className="bg-[#1A1A1A] text-[#F7F2E7] rounded-[14px] p-4 w-[160px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 12px,#fff 12px,#fff 13px)" }} />
      <div className="relative font-hand text-[#F4C430] text-base mb-2">design process</div>
      <div className="relative space-y-1.5">
        {["empathise", "define", "ideate", "prototype", "test"].map((s, i) => (
          <div key={s} className="flex items-center gap-2 text-[12px] text-[#F7F2E7]/90">
            <span className="w-4 h-4 rounded-full border border-[#F7F2E7]/40 flex items-center justify-center text-[9px]
              font-bold text-[#F4C430]">{i + 1}</span>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── layout: positions are % of viewport, set on first render ───── */
function vw(pct) { return (window.innerWidth  * pct) / 100; }
function vh(pct) { return (window.innerHeight * pct) / 100; }

export default function DraggableStickers() {
  return (
    <>
      {/* 1 — sticky note top-right */}
      <Sticker initialPos={{ x: vw(78), y: vh(14) }} rotate="-4deg" zBase={50}>
        <StickyNote
          color="#FFFBF2"
          accent="#E8532C"
          title="psst →"
          body="ask me about my design process. i could talk about it forever."
        />
      </Sticker>

      {/* 2 — open-to-work badge bottom-left */}
      <Sticker initialPos={{ x: vw(3), y: vh(62) }} rotate="6deg" zBase={48}>
        <RoundBadge
          bg="#F4C430"
          emoji="✨"
          text="open to new projects!"
          subtext="(yes, right now)"
        />
      </Sticker>

      {/* 3 — design card mid-right */}
      <Sticker initialPos={{ x: vw(82), y: vh(48) }} rotate="3deg" zBase={46}>
        <DesignCard />
      </Sticker>

      {/* 4 — coffee tag */}
      <Sticker initialPos={{ x: vw(5), y: vh(28) }} rotate="-5deg" zBase={44}>
        <StickyNote
          color="#EFE6D2"
          accent="#2D5F3F"
          title="☕ status"
          body="3 coffees in. peak creativity mode. send snacks."
          tape={true}
        />
      </Sticker>

      {/* 5 — tag pill */}
      <Sticker initialPos={{ x: vw(70), y: vh(75) }} rotate="-3deg" zBase={42}>
        <TagPill text="UX + service design 🎨" color="#F3E7D9" />
      </Sticker>
    </>
  );
}
