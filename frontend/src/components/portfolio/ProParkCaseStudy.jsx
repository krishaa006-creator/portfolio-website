import React from "react";
import { Arrow, Squiggle } from "./Doodles";

const ACCENT = "#E8532C";
const PEACH  = "#F3E7D9";
const PAGE   = "#F7F2E7";
const CREAM  = "#FFFBF2";
const INK    = "#1A1A1A";

/* ── Soft-edge image fade ─────────────────────────────── */
function FadeImage({ src, alt, className = "", style = {}, fadeDir = "radial" }) {
  const masks = {
    radial: "radial-gradient(ellipse 88% 88% at 50% 50%, black 45%, transparent 100%)",
    sides:  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
    topbot: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
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

/* ── Arrow annotation ─────────────────────────────────── */
function Annotation({ label, color = INK }) {
  return (
    <div className="flex items-center gap-2 mt-2 pl-4">
      <Arrow color={color} width={55} />
      <span className="font-hand text-base italic" style={{ color }}>{label}</span>
    </div>
  );
}

/* ── Small section eyebrow label ──────────────────────── */
function Eyebrow({ n, children }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1.5">
        <div className="h-[2px] w-8 rounded-full" style={{ background: ACCENT }} />
        <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
          {n} — {children}
        </span>
      </div>
    </div>
  );
}

/* ── Big section title (heavy + light italic pair) ────── */
function BigTitle({ heavy, light, size = "text-4xl md:text-6xl" }) {
  return (
    <h2 className={`font-display leading-[1.05] tracking-tight ${size}`}>
      <span className="font-black text-[#1A1A1A]">{heavy}</span>
      {light && (
        <>
          <br />
          <span className="font-light italic" style={{ color: ACCENT }}>{light}</span>
        </>
      )}
    </h2>
  );
}

/* ══════════════════════════════════════════════════
   ROOT COMPONENT
══════════════════════════════════════════════════ */
export default function ProParkCaseStudy() {
  return (
    <div>

      {/* ─── 01  CONTEXT & DESIGN BRIEF ─── */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <Eyebrow n="01">Context Setting & Design Brief</Eyebrow>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">

          {/* Left — text */}
          <div>
            <BigTitle heavy="CONTEXT" light="Setting" size="text-4xl md:text-5xl" />
            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/75 max-w-lg">
              Urban areas face a growing parking shortage, with limited public spaces and increasing
              vehicle numbers, forcing drivers to circle endlessly while many private spots remain
              unused and inaccessible.
            </p>
            <p className="mt-3 text-lg leading-relaxed font-semibold text-[#1A1A1A]">
              These spaces are a missed opportunity for both income and utility.
            </p>

            {/* Design Brief */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 rounded-full" style={{ background: ACCENT }} />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>Design Brief</span>
              </div>
              <p className="text-sm italic text-[#1A1A1A]/45 mb-5">How Might We — Design a peer to peer parking app that</p>
              <div className="space-y-6">
                <div className="pl-5 border-l-2" style={{ borderColor: ACCENT }}>
                  <p className="font-display font-semibold text-[#1A1A1A]">
                    MAKES PARKING SPACES MORE ACCESSIBLE in urban spaces
                  </p>
                  <Annotation label="The Goal" color={ACCENT} />
                </div>
                <div className="pl-5 border-l-2 border-[#1A1A1A]/15">
                  <p className="font-display text-[#1A1A1A]">
                    for a wide range of urban drivers and space owners by{" "}
                    <strong>unlocking and connecting unused private parking spots</strong>
                  </p>
                  <Annotation label="How to achieve it?" color={INK} />
                </div>
                <div className="pl-5 border-l-2 border-[#1A1A1A]/15">
                  <p className="font-display text-[#1A1A1A]">
                    to reduce parking frustration and{" "}
                    <strong>turn idle space into opportunity.</strong>
                  </p>
                  <Annotation label="The Why?" color={INK} />
                </div>
              </div>
            </div>
          </div>

          {/* Right — context image (has built-in left fade from Figma) */}
          <div>
            <img src="/propark/context-bg.png" alt="Urban building with car" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ─── STAT CALLOUT BREAK ─── */}
      <div className="border-y border-[#1A1A1A]/10" style={{ background: PEACH }}>
        <div className="px-8 md:px-16 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left shrink-0">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1A1A1A]/45 mb-1">India parking reality</p>
            <p
              className="font-display font-black leading-none"
              style={{ fontSize: "clamp(3.5rem, 11vw, 7rem)", color: ACCENT }}
            >
              1 : 3650
            </p>
            <p className="font-hand text-lg mt-1 text-[#1A1A1A]/65">parking spots per car</p>
          </div>
          <div className="hidden md:block self-stretch w-px bg-[#1A1A1A]/12" />
          <p className="text-base leading-relaxed text-[#1A1A1A]/70 max-w-sm">
            Parking in India is more than just finding a spot — it's a daily test of patience,
            intuition, and sometimes, creativity. The scarcity makes it chaotic, unpredictable
            and deeply tied to local habits of <em>jugaad</em>.
          </p>
        </div>
      </div>

      {/* ─── 02  EMPATHISING WITH OUR USERS ─── */}
      <section className="py-16" style={{ background: PAGE }}>
        <div className="px-8 md:px-16">
          <Eyebrow n="02">Empathising with Our Users</Eyebrow>
        </div>

        {/* Persona illustration — full-bleed with side fades */}
        <div className="px-4 md:px-8 mb-12">
          <FadeImage src="/propark/personas.png" alt="Persona portraits" fadeDir="sides" />
        </div>

        {/* Persona cards */}
        <div className="px-8 md:px-16 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Residents",
              role: "The Space Providers",
              intro: "Urban residential areas have unused parking spaces during most of the day when people are at work — often close to crowded commercial areas that lack parking.",
              quotes: [
                `I want to make some extra income, but I worry about strangers damaging my property.`,
                `Trust is a big issue — how do I know the person parking won't misuse the space?`,
              ],
              drivers: ["Source of passive income", "Better Utilization of Space", "Control Over Availability"],
              inhibitors: ["Trust and Security Concerns", "Liability and Legal Issues", "Lack of Flexibility"],
            },
            {
              title: "Drivers",
              role: "The Space Seekers",
              intro: "In crowded Indian cities, finding parking around commercial centers is always a challenge. During peak hours, limited spots fill up, leaving drivers in a frustrated endless hunt.",
              quotes: [
                `I wish I could park in that empty compound. I'm tired of this wild goose chase.`,
                `I avoid certain areas altogether because parking there is a nightmare and costs me time.`,
              ],
              drivers: ["Convenience and Proximity", "Real-Time Availability", "Cost-Effectiveness"],
              inhibitors: ["Unsafe parking conditions", "Outdated payment systems", "Inflexible Booking Changes"],
            },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl overflow-hidden border border-[#1A1A1A]/10" style={{ background: CREAM }}>
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 border-b border-[#1A1A1A]/10" style={{ background: PEACH }}>
                <p className="font-display text-3xl font-black tracking-tight text-[#1A1A1A]">{p.title}</p>
                <p className="font-display italic text-lg mt-0.5" style={{ color: ACCENT }}>{p.role}</p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-[#1A1A1A]/60 mb-5">{p.intro}</p>
                {/* Pull quotes — big italic display style */}
                <div className="space-y-3 mb-6">
                  {p.quotes.map((q, i) => (
                    <p key={i} className="font-display italic text-[1.1rem] leading-snug text-[#1A1A1A]">
                      <span style={{ color: ACCENT }}>"</span>{q}<span style={{ color: ACCENT }}>"</span>
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="uppercase tracking-widest text-[#1A1A1A]/40 mb-2">Motivators</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.drivers.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-xs text-[#1A1A1A]" style={{ background: PEACH }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="uppercase tracking-widest text-[#1A1A1A]/40 mb-2">Inhibitors</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.inhibitors.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full border border-[#1A1A1A]/15 text-xs bg-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Goals — orange strip */}
        <div className="mx-8 md:mx-16 mt-6 rounded-2xl px-6 py-5" style={{ background: ACCENT }}>
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-white/60 mb-3">Common Design Goals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g) => (
              <span key={g} className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30" style={{ background: "rgba(255,255,255,0.12)" }}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03  UX PERSPECTIVE ─── */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <Eyebrow n="03">UX Perspective on Indian Parking</Eyebrow>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          <div>
            <BigTitle heavy="UX PERSPECTIVE" light="on Indian Parking" size="text-3xl md:text-4xl" />
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/75">
              Parking in India is more than just finding a spot — it's a daily test of patience,
              intuition, and sometimes, creativity.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Arrow color={ACCENT} width={45} />
              <span className="font-hand text-sm italic text-[#2D5F3F]">source: poidata.io · india</span>
            </div>
          </div>
          <FadeImage src="/propark/ux-photos.png" alt="Parking problems in India" fadeDir="sides" />
        </div>
      </section>

      {/* ─── 04  INFORMATION ARCHITECTURE ─── */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <Eyebrow n="04">Information Architecture for Mobile App</Eyebrow>
        <FadeImage src="/propark/ia.png" alt="Information Architecture diagram" fadeDir="topbot" />
      </section>

      {/* ── thin orange divider — marks the shift to product screens ── */}
      <div className="h-1" style={{ background: ACCENT }} />

      {/* ─── 05  FINAL PRODUCT ─── */}
      <ScreenSection
        n="05" label="The Final Product"
        heavy="THE FINAL" light="Product"
        description="A parking solution built by leveraging shared economy to ease parking congestions in major Indian cities."
        note="built in 1 week · dark mode first"
        image="/propark/product.png" imageAlt="ProPark final product — two phones"
        fadeDir="radial" layout="center" bg={PEACH}
      />

      {/* ─── 06  ONBOARDING ─── */}
      <ScreenSection
        n="06" label="Onboarding Screens"
        heavy="ONBOARDING" light="Screens"
        description="Users start by entering their phone number to receive an OTP, ensuring quick authentication without lengthy registrations. With auto OTP detection and a clean, minimal interface, the process allows seamless entry."
        image="/propark/onboarding.png" imageAlt="Onboarding screens"
        fadeDir="radial" layout="right" bg={PAGE}
      />

      {/* ─── 07  HOME SCREEN ─── */}
      <ScreenSection
        n="07" label="Home Screen"
        heavy="HOME" light="Screen"
        description="The Home Screen provides users with a seamless way to search, view, and manage their parking needs. Vehicle-first approach: select the car, search for nearby spots, and view upcoming bookings at a glance."
        image="/propark/home.png" imageAlt="Home screen"
        fadeDir="sides" layout="wide" bg={PEACH}
      />

      {/* ─── 08  LOCATOR ─── */}
      <ScreenSection
        n="08" label="Parking Locator Screens"
        heavy="PARKING LOCATOR" light="Screens"
        description="Users can set their desired date and time, explore available spots on an interactive map, and compare options — each displaying availability, hourly rates, and ratings for full transparency."
        image="/propark/locator.png" imageAlt="Parking locator screens"
        fadeDir="radial" layout="left" bg={PAGE}
      />

      {/* ─── 09  BOOKING ─── */}
      <ScreenSection
        n="09" label="Parking Booking Screens"
        heavy="PARKING BOOKING" light="Screens"
        description="From reviewing space details and rates to calculating total charges with fees and taxes — the flow ensures complete clarity before payment. A confirmation prompt adds an extra layer of security."
        image="/propark/booking.png" imageAlt="Booking screens"
        fadeDir="sides" layout="wide" bg={PEACH}
      />

      {/* ─── 10  OTHER SCREENS ─── */}
      <ScreenSection
        n="10" label="Other Screens"
        heavy="OTHER" light="Screens"
        description="Users can manage upcoming or past reservations, while space owners can track availability, unlist spaces, or block them for personal use. Vehicle and space management features streamline bookings for both sides."
        image="/propark/other.png" imageAlt="Other screens"
        fadeDir="radial" layout="right" bg={PAGE}
      />

      {/* ─── 11  NOTIFICATION ─── */}
      <ScreenSection
        n="11" label="Notification Screen"
        heavy="NOTIFICATION" light="Screen"
        description="The notification widget provides real-time updates on parking reservations, showing exactly how much time is left — helping users plan departures and avoid overstays with ease."
        note="live activity on lock screen"
        image="/propark/notification.png" imageAlt="Notification screen"
        fadeDir="topbot" layout="narrow" bg={PEACH}
      />

      {/* ─── 12  FINAL SHOWCASE ─── */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <Eyebrow n="12">Final Showcase</Eyebrow>
        <BigTitle heavy="ALL SCREENS" light="in perspective." />
        <div className="mt-10">
          <FadeImage src="/propark/showcase.png" alt="ProPark — all screens showcase" fadeDir="sides" />
        </div>
      </section>

    </div>
  );
}

/* ════════════════════════════════════════════════════════
   ScreenSection
   layout: "center" | "right" | "left" | "wide" | "narrow"
════════════════════════════════════════════════════════ */
function ScreenSection({ n, label, heavy, light, description, note, image, imageAlt, fadeDir, layout, bg }) {
  const img = <FadeImage src={image} alt={imageAlt} fadeDir={fadeDir} />;

  const textBlock = (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-[2px] w-8 rounded-full" style={{ background: ACCENT }} />
        <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
          {n} — {label}
        </span>
      </div>
      <h2 className="font-display font-black leading-none tracking-tight text-3xl md:text-5xl text-[#1A1A1A]">{heavy}</h2>
      <h2 className="font-display font-light italic leading-none tracking-tight text-3xl md:text-5xl mt-1" style={{ color: ACCENT }}>{light}</h2>
      <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/65 max-w-md">{description}</p>
      {note && (
        <div className="flex items-center gap-2 mt-3">
          <Arrow color={ACCENT} width={45} />
          <span className="font-hand italic text-base" style={{ color: ACCENT }}>{note}</span>
        </div>
      )}
    </div>
  );

  return (
    <section className="px-8 md:px-16 py-16" style={{ background: bg }}>
      {layout === "wide" && (
        <>
          <div className="max-w-2xl mb-10">{textBlock}</div>
          {img}
        </>
      )}
      {layout === "center" && (
        <>
          <div className="max-w-2xl mb-10">{textBlock}</div>
          <div className="max-w-3xl mx-auto">{img}</div>
        </>
      )}
      {layout === "right" && (
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          {textBlock}
          {img}
        </div>
      )}
      {layout === "left" && (
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          {img}
          {textBlock}
        </div>
      )}
      {layout === "narrow" && (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {textBlock}
          <div className="flex justify-center">
            <div className="w-full max-w-[260px]">{img}</div>
          </div>
        </div>
      )}
    </section>
  );
}
