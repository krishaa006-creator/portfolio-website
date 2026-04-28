import React from "react";

// Reusable SVG doodles — subtle, hand-drawn feel.

export const Squiggle = ({ className = "", color = "#1A1A1A", width = 120 }) => (
  <svg viewBox="0 0 120 20" width={width} className={className} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
    <path d="M2 10 Q 12 1, 22 10 T 42 10 T 62 10 T 82 10 T 102 10 T 118 10" />
  </svg>
);

export const Star = ({ className = "", color = "#E8532C", size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={color}>
    <path d="M12 1 L14 9 L22 10 L15.5 15 L18 23 L12 18 L6 23 L8.5 15 L2 10 L10 9 Z" />
  </svg>
);

export const Sparkle = ({ className = "", color = "#1A1A1A", size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={color}>
    <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
  </svg>
);

export const Arrow = ({ className = "", color = "#1A1A1A", width = 90 }) => (
  <svg viewBox="0 0 100 50" width={width} className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 42 C 20 10, 55 6, 92 18" />
    <path d="M82 8 L92 18 L80 22" />
  </svg>
);

export const Underline = ({ className = "", color = "#E8532C", width = 160 }) => (
  <svg viewBox="0 0 160 12" width={width} className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
    <path d="M4 7 Q 40 1, 80 6 T 156 5" />
  </svg>
);

export const CircleDoodle = ({ className = "", color = "#2D5F3F", size = 60 }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M8 30 C 8 12, 30 6, 48 14 C 56 18, 54 44, 34 50 C 18 54, 6 44, 8 30 Z" />
  </svg>
);

export const Dots = ({ className = "", color = "#1A1A1A", count = 5 }) => (
  <svg viewBox={`0 0 ${count * 14} 14`} width={count * 14} className={className} fill={color}>
    {Array.from({ length: count }).map((_, i) => (
      <circle key={i} cx={7 + i * 14} cy="7" r="2.5" />
    ))}
  </svg>
);

export const Heart = ({ className = "", color = "#E8532C", size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={color}>
    <path d="M12 21 C 6 16, 2 12, 2 8 A5 5 0 0 1 12 6 A5 5 0 0 1 22 8 C 22 12, 18 16, 12 21 Z" />
  </svg>
);

export const Lightning = ({ className = "", color = "#F4C430", size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={color} stroke="#1A1A1A" strokeWidth="1" strokeLinejoin="round">
    <path d="M13 2 L3 14 L11 14 L9 22 L20 9 L12 9 Z" />
  </svg>
);

export const EyeBlink = ({ className = "", color = "#1A1A1A", size = 32 }) => (
  <svg viewBox="0 0 40 20" width={size} className={className} fill="none" stroke={color} strokeWidth="2">
    <g className="anim-blink">
      <path d="M2 10 C 10 2, 30 2, 38 10 C 30 18, 10 18, 2 10 Z" />
      <circle cx="20" cy="10" r="3" fill={color} />
    </g>
  </svg>
);

export const TapeStrip = ({ className = "", color = "rgba(244,196,48,0.55)", rotate = -4 }) => (
  <div
    className={className}
    style={{
      width: 88,
      height: 22,
      background: color,
      transform: `rotate(${rotate}deg)`,
      borderLeft: "1px dashed rgba(0,0,0,0.15)",
      borderRight: "1px dashed rgba(0,0,0,0.15)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
    }}
  />
);
