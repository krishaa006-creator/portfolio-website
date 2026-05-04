import React from "react";
import { Arrow } from "./Doodles";

const ACCENT = "#E8532C";
const PEACH  = "#F3E7D9";
const PAGE   = "#F7F2E7";
const CREAM  = "#FFFBF2";
const INK    = "#1A1A1A";

/* ── Soft-edge image fade ─────────────────────────── */
function FadeImage({ src, alt, className = "", style = {}, fadeDir = "radial" }) {
  const masks = {
    radial: "radial-gradient(ellipse 88% 88% at 50% 50%, black 48%, transparent 100%)",
    sides:  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    topbot: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
    right:  "linear-gradient(to right, black 60%, transparent 100%)",
    left:   "linear-gradient(to left, black 60%, transparent 100%)",
  };
  const mask = masks[fadeDir] || masks.radial;
  return (
    <img src={src} alt={alt}
      className={`w-full h-auto block ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask, ...style }}
      loading="lazy"
    />
  );
}

/* ── Arrow annotation ─────────────────────────────── */
function Note({ label, color = ACCENT }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <Arrow color={color} width={48} />
      <span className="font-hand italic text-base" style={{ color }}>{label}</span>
    </div>
  );
}

/* ── Section eyebrow (no duplicate numbers) ──────── */
function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-[2px] w-6 rounded-full shrink-0" style={{ background: ACCENT }} />
      <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
        {children}
      </span>
    </div>
  );
}

/* ── Compound heading (heavy + italic light on same element) ── */
function Heading({ heavy, light, size = "text-4xl md:text-6xl" }) {
  return (
    <h2 className={`font-display leading-[1.05] tracking-tight ${size}`}>
      <span className="font-black text-[#1A1A1A]">{heavy} </span>
      {light && <span className="font-light italic" style={{ color: ACCENT }}>{light}</span>}
    </h2>
  );
}

/* ═══════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════ */
export default function ProParkCaseStudy() {
  return (
    <div>

      {/* ══ 01  CONTEXT & DESIGN BRIEF ══════════════════
          Layout: text 55% left, image 45% right          */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="grid md:grid-cols-[11fr_9fr] gap-12 items-start">
          <div>
            <Eyebrow>Context Setting</Eyebrow>
            <Heading heavy="THE" light="problem space." size="text-5xl md:text-7xl" />
            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/70 max-w-lg">
              Urban areas face a growing parking shortage — limited public spaces, endless circling,
              and many private spots sitting empty and inaccessible.
            </p>
            <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">
              These idle spaces are a missed opportunity for both income and utility.
            </p>

            {/* Design Brief */}
            <div className="mt-12 space-y-0">
              <Eyebrow>Design Brief</Eyebrow>
              <p className="text-sm italic text-[#1A1A1A]/40 mb-6">
                How Might We — Design a peer to peer parking app that
              </p>
              <div className="space-y-5">
                {[
                  { text: <><strong style={{ color: INK }}>MAKES PARKING SPACES MORE ACCESSIBLE</strong> in urban spaces</>, note: "The Goal", color: ACCENT },
                  { text: <>for a wide range of users by <strong>unlocking and connecting unused private parking spots</strong></>, note: "How to achieve it?" },
                  { text: <>to reduce parking frustration and <strong>turn idle space into opportunity.</strong></>, note: "The Why?" },
                ].map(({ text, note, color = INK }, i) => (
                  <div key={i} className="pl-4 border-l-2" style={{ borderColor: i === 0 ? ACCENT : `${INK}22` }}>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{text}</p>
                    <Note label={note} color={color} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Context image — built-in left fade from Figma */}
          <div className="pt-10">
            <img src="/propark/context-bg.png" alt="Urban building with car" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ══ STAT MOMENT ════════════════════════════════
          Full-width peach band, huge display number     */}
      <div className="border-y border-[#1A1A1A]/10" style={{ background: PEACH }}>
        <div className="px-8 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="shrink-0 text-center md:text-left">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#1A1A1A]/40 mb-0.5">India parking reality</p>
            <p className="font-display font-black leading-none" style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: ACCENT }}>
              1:3650
            </p>
            <p className="font-hand text-lg text-[#1A1A1A]/55 mt-1">parking spots per car</p>
          </div>
          <div className="hidden md:block w-px self-stretch bg-[#1A1A1A]/12" />
          <p className="text-base leading-relaxed text-[#1A1A1A]/65 max-w-sm">
            Parking in India is more than just finding a spot — it's a daily test of patience, intuition,
            and <em>jugaad</em>. The scarcity makes it chaotic and deeply frustrating.
          </p>
        </div>
      </div>

      {/* ══ 02  EMPATHISING ════════════════════════════
          Full-bleed persona image, then side-by-side cards */}
      <section className="py-16" style={{ background: PAGE }}>
        {/* Full-bleed image — no horizontal padding */}
        <div className="mb-10 overflow-hidden">
          <FadeImage src="/propark/personas.png" alt="Persona portraits" fadeDir="sides" />
        </div>

        <div className="px-8 md:px-16">
          <Eyebrow>Empathising with Our Users</Eyebrow>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Residents",
                role: "The Space Providers",
                intro: "Urban residential areas have unused parking spaces during most of the day — often close to crowded commercial zones that desperately lack parking.",
                quotes: [
                  `I want to make extra income, but I worry about strangers damaging my property.`,
                  `Trust is a big issue — how do I know the person parking won't misuse the space?`,
                ],
                drivers: ["Passive income", "Better space utilization", "Control availability"],
                inhibitors: ["Trust & security concerns", "Liability issues", "Lack of flexibility"],
              },
              {
                title: "Drivers",
                role: "The Space Seekers",
                intro: "In crowded Indian cities, finding parking near commercial areas is a nightmare. During peak hours, limited spots vanish, leaving drivers in a frustrated endless loop.",
                quotes: [
                  `I wish I could park in that empty compound. I'm tired of this wild goose chase.`,
                  `I avoid certain areas altogether because parking there is a nightmare every time.`,
                ],
                drivers: ["Convenience & proximity", "Real-time availability", "Cost-effectiveness"],
                inhibitors: ["Unsafe conditions", "Outdated payments", "Inflexible bookings"],
              },
            ].map((p) => (
              <div key={p.title} className="rounded-3xl overflow-hidden border border-[#1A1A1A]/10">
                <div className="px-6 pt-5 pb-4" style={{ background: PEACH }}>
                  <p className="font-display text-3xl font-black tracking-tight">{p.title}</p>
                  <p className="font-display italic text-lg" style={{ color: ACCENT }}>{p.role}</p>
                </div>
                <div className="p-6" style={{ background: CREAM }}>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-4">{p.intro}</p>
                  <div className="space-y-2 mb-5">
                    {p.quotes.map((q, i) => (
                      <p key={i} className="font-display italic text-[1.1rem] leading-snug text-[#1A1A1A]">
                        <span style={{ color: ACCENT }}>"</span>{q}<span style={{ color: ACCENT }}>"</span>
                      </p>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="uppercase tracking-widest text-[#1A1A1A]/35 mb-2">Motivators</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.drivers.map((t) => <span key={t} className="px-2.5 py-1 rounded-full text-xs" style={{ background: PEACH }}>{t}</span>)}
                      </div>
                    </div>
                    <div>
                      <p className="uppercase tracking-widest text-[#1A1A1A]/35 mb-2">Inhibitors</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.inhibitors.map((t) => <span key={t} className="px-2.5 py-1 rounded-full border border-[#1A1A1A]/15 text-xs bg-white/70">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common goals — orange strip */}
          <div className="mt-5 rounded-2xl px-6 py-4" style={{ background: ACCENT }}>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50 text-center mb-2.5">Common Design Goals</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g) => (
                <span key={g} className="px-3.5 py-1.5 rounded-full text-sm text-white font-medium border border-white/25" style={{ background: "rgba(255,255,255,0.12)" }}>{g}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 03  UX PERSPECTIVE ══════════════════════════
          Photos 70%, text 30% — image leads            */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <Eyebrow>UX Perspective on Indian Parking</Eyebrow>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          <FadeImage src="/propark/ux-photos.png" alt="Real parking scenes in India" fadeDir="sides" />
          <div>
            <Heading heavy="CHAOS" light="by numbers." size="text-3xl md:text-4xl" />
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70">
              More than finding a spot — a daily test of patience, intuition, and sometimes creativity.
            </p>
            <Note label="source: poidata.io · india" color="#2D5F3F" />
          </div>
        </div>
      </section>

      {/* ══ 04  INFORMATION ARCHITECTURE ═══════════════
          Full-bleed, no side padding                   */}
      <section className="py-16" style={{ background: PAGE }}>
        <div className="px-8 md:px-16 mb-8">
          <Eyebrow>Information Architecture</Eyebrow>
          <Heading heavy="HOW IT ALL" light="connects." size="text-4xl md:text-5xl" />
        </div>
        {/* No side padding — edge to edge */}
        <FadeImage src="/propark/ia.png" alt="Information Architecture" fadeDir="topbot" />
      </section>

      {/* ══ PRODUCT REVEAL — orange accent strip ═══════ */}
      <div className="px-8 md:px-16 py-5 flex items-center gap-4" style={{ background: ACCENT }}>
        <p className="font-hand text-2xl text-white">and here's what we built →</p>
      </div>

      {/* ══ 05  FINAL PRODUCT ══════════════════════════
          Centered hero — product takes centre stage    */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <Eyebrow>The Final Product</Eyebrow>
        <Heading heavy="ONE WEEK," light="twelve screens." size="text-5xl md:text-7xl" />
        <p className="mt-4 text-base text-[#1A1A1A]/60 max-w-lg">
          A peer-to-peer parking platform built to ease congestion in major Indian cities.
        </p>
        <Note label="built in 1 week · dark mode first" />
        <div className="mt-10 max-w-2xl mx-auto">
          <FadeImage src="/propark/product.png" alt="ProPark final product" fadeDir="radial" />
        </div>
      </section>

      {/* ══ 06  ONBOARDING ═════════════════════════════
          Text full-width above, image 80% centred below */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="flex items-end justify-between gap-8 mb-10 flex-wrap">
          <div>
            <Eyebrow>Onboarding Screens</Eyebrow>
            <Heading heavy="ZERO" light="to parked." size="text-4xl md:text-6xl" />
          </div>
          <p className="text-base leading-relaxed text-[#1A1A1A]/60 max-w-sm">
            Phone number + OTP — minimal friction, maximum trust. Auto OTP detection means the process
            completes before you even look at the screen.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FadeImage src="/propark/onboarding.png" alt="Onboarding screens" fadeDir="radial" />
        </div>
      </section>

      {/* ══ 07  HOME SCREEN ════════════════════════════
          Image 65% left, text 35% right               */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <div className="grid md:grid-cols-[13fr_7fr] gap-10 items-center">
          <FadeImage src="/propark/home.png" alt="Home screen" fadeDir="sides" />
          <div>
            <Eyebrow>Home Screen</Eyebrow>
            <Heading heavy="YOUR" light="dashboard." size="text-3xl md:text-4xl" />
            <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/65">
              Vehicle-first: pick your car, search nearby spots, and see upcoming bookings — all in one glance.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 08  LOCATOR ════════════════════════════════
          Text 40% left, image 60% right               */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          <div>
            <Eyebrow>Parking Locator</Eyebrow>
            <Heading heavy="FIND" light="your spot." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/65">
              Set date and time, explore an interactive map, compare spots by availability, rate, and rating.
              Full transparency before committing.
            </p>
          </div>
          <FadeImage src="/propark/locator.png" alt="Parking locator screens" fadeDir="radial" />
        </div>
      </section>

      {/* ══ 09  BOOKING ════════════════════════════════
          Image full-width, text below it              */}
      <section className="py-16" style={{ background: PEACH }}>
        <div className="px-8 md:px-16 mb-8">
          <Eyebrow>Parking Booking</Eyebrow>
          <Heading heavy="LOCK" light="it in." size="text-4xl md:text-6xl" />
          <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-lg">
            Space details, rates, fees, taxes — all calculated before payment. Confirmation prompt for an extra layer of security.
          </p>
        </div>
        <FadeImage src="/propark/booking.png" alt="Booking screens" fadeDir="sides" />
      </section>

      {/* ══ 10  OTHER SCREENS ══════════════════════════
          Equal 50/50 split                            */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <Eyebrow>Other Screens</Eyebrow>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Heading heavy="EVERYTHING" light="else." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/65">
              Manage upcoming and past reservations. Space owners can track, unlist, or block availability.
              Vehicle and space management for both sides of the platform.
            </p>
          </div>
          <FadeImage src="/propark/other.png" alt="Other screens" fadeDir="radial" />
        </div>
      </section>

      {/* ══ 11  NOTIFICATION ═══════════════════════════
          Portrait phone centred, text above           */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <div className="max-w-xl mx-auto text-center mb-8">
          <Eyebrow>Notification Screen</Eyebrow>
          <Heading heavy="LIVE" light="Activity." size="text-4xl md:text-6xl" />
          <p className="mt-4 text-base text-[#1A1A1A]/60">
            Real-time parking countdown on the lock screen — leave on time, every time.
          </p>
          <Note label="live activity on lock screen" />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[280px]">
            <FadeImage src="/propark/notification.png" alt="Notification screen" fadeDir="topbot" />
          </div>
        </div>
      </section>

      {/* ══ 12  FINAL SHOWCASE ══════════════════════════
          Full-bleed showcase image, text above        */}
      <section className="py-16" style={{ background: PAGE }}>
        <div className="px-8 md:px-16 mb-8">
          <Eyebrow>Final Showcase</Eyebrow>
          <Heading heavy="ALL SCREENS," light="all at once." size="text-5xl md:text-7xl" />
        </div>
        <FadeImage src="/propark/showcase.png" alt="ProPark — all screens showcase" fadeDir="sides" />
      </section>

    </div>
  );
}
