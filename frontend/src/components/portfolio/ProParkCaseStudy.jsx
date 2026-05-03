import React from "react";
import { Arrow, Squiggle } from "./Doodles";

/* ── ProPark brand palette ─────────────────────────── */
const ACCENT  = "#E8532C";   /* ProPark orange */
const YELLOW  = "#F4C430";   /* ProPark yellow */
const NAVY    = "#141C2E";   /* ProPark dark — rich navy, not black */
const PEACH   = "#F3E7D9";   /* ProPark warm bg — research / analysis sections */
const CREAM   = "#FFFBF2";   /* surface cards on peach */

/* ── Section header ───────────────────────────────── */
function SectionHeader({ n, label, dark }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white shrink-0"
        style={{ background: ACCENT }}
      >
        {n}
      </span>
      <span className={`font-hand text-2xl ${dark ? "text-[#F7F2E7]" : "text-[#1A1A1A]"}`}>{label}</span>
      <Squiggle width={80} color={dark ? YELLOW : "#2D5F3F"} />
    </div>
  );
}

/* ── Tag pill ─────────────────────────────────────── */
function Tag({ children, dark }) {
  return (
    <span
      className={`px-3 py-1 rounded-full border text-xs ${
        dark
          ? "border-white/20 bg-white/10 text-[#F7F2E7]"
          : "border-[#1A1A1A]/25 bg-white/60 text-[#1A1A1A]"
      }`}
    >
      {children}
    </span>
  );
}

/* ── Arrow annotation below clause ───────────────── */
function Annotation({ label, color = "#1A1A1A", accentColor }) {
  return (
    <div className="flex items-center gap-2 mt-2 pl-4">
      <Arrow color={accentColor || color} width={60} />
      <span className="font-hand text-base italic" style={{ color: accentColor || color }}>
        {label}
      </span>
    </div>
  );
}

/*
  FadeImage — CSS mask-image for soft edge fades.
  The mask creates transparency so the parent section bg shows through —
  on dark navy sections the phones dissolve into navy,
  on peach sections assets dissolve into peach.
*/
function FadeImage({ src, alt, className = "", style = {}, fadeDir = "radial" }) {
  const masks = {
    radial:  "radial-gradient(ellipse 88% 88% at 50% 50%, black 45%, transparent 100%)",
    bottom:  "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
    sides:   "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    topbot:  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
  };
  const mask = masks[fadeDir] || masks.radial;
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto block ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask, ...style }}
      loading="lazy"
    />
  );
}

/* ══════════════════════════════════════════════════════
   ROOT COMPONENT
══════════════════════════════════════════════════════ */
export default function ProParkCaseStudy() {
  return (
    <div className="divide-y divide-[#1A1A1A]/10">

      {/* ── 01  CONTEXT SETTING & DESIGN BRIEF ─────── PEACH */}
      <div className="px-8 md:px-12 py-12" style={{ background: PEACH }}>
        <SectionHeader n="01" label="Context Setting & Design Brief" />
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
              <span className="font-black">CONTEXT</span> Setting
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Urban areas face a growing parking shortage, with limited public spaces and increasing
              vehicle numbers, forcing drivers to circle endlessly while many private spots remain
              unused and inaccessible.
            </p>
            <p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/80">
              These spaces are a missed{" "}
              <strong>opportunity for both income and utility.</strong>
            </p>

            <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
              <span className="font-black">DESIGN</span> Brief
            </h3>
            <p className="mt-3 text-sm italic text-[#1A1A1A]/55 leading-relaxed">
              How Might We — Design a peer to peer parking app that
            </p>

            <div className="mt-5 space-y-6 text-sm leading-relaxed text-[#1A1A1A]/80">
              <div>
                <p>
                  <strong className="text-[#1A1A1A]">MAKES PARKING SPACES MORE ACCESSIBLE</strong> in urban spaces
                </p>
                <Annotation label="The Goal" accentColor={ACCENT} />
              </div>
              <div>
                <p>
                  for a wide range of urban drivers and space owners by{" "}
                  <strong className="text-[#1A1A1A]">unlocking and connecting unused private parking spots</strong>
                </p>
                <Annotation label="How to achieve it?" color="#1A1A1A" />
              </div>
              <div>
                <p>
                  to reduce parking frustration and{" "}
                  <strong className="text-[#1A1A1A]">turn idle space into opportunity.</strong>
                </p>
                <Annotation label="The Why?" color="#1A1A1A" />
              </div>
            </div>
          </div>

          {/* context image already has a built-in left fade from Figma */}
          <div>
            <img
              src="/propark/context-bg.png"
              alt="Urban building with car — context"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 02  EMPATHISING WITH OUR USERS ─────────── PEACH */}
      <div className="px-8 md:px-12 py-12" style={{ background: PEACH }}>
        <SectionHeader n="02" label="Empathising with Our Users" />

        <div className="mb-8">
          <FadeImage src="/propark/personas.png" alt="Persona portraits" fadeDir="radial" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Residents, The Space Providers",
              intro: "Urban cities, especially residential areas have unused parking spaces during most part of the day when people are at work. These spaces are often close to crowded commercial areas that lack parking.",
              quotes: [
                `"I want to make some extra income, but I worry about strangers damaging my property."`,
                `"Trust is a big issue — how do I know the person parking won't misuse the space?"`,
              ],
              drivers: ["Source of passive income", "Better Utilization of Space", "Control Over Availability"],
              inhibitors: ["Trust and Security Concerns", "Liability and Legal Issues", "Lack of Flexibility"],
            },
            {
              title: "Drivers, The Space Seekers",
              intro: "In crowded Indian cities, finding parking around commercial centers is always a challenge. During peak hours, limited pay-and-park spots fill up, leaving drivers in a frustrated endless hunt.",
              quotes: [
                `"I wish I could park in that empty compound. I'm tired of this wild goose chase."`,
                `"I avoid certain areas altogether because parking there is a nightmare and costs me time."`,
              ],
              drivers: ["Convenience and Proximity", "Real-Time Availability", "Cost-Effectiveness"],
              inhibitors: ["Unsafe parking conditions", "Outdated payment systems", "Inflexible Booking Changes"],
            },
          ].map((persona) => (
            <div key={persona.title} className="rounded-2xl p-6 border border-[#1A1A1A]/12" style={{ background: CREAM }}>
              <p className="font-display text-lg font-semibold mb-1 text-[#1A1A1A]">{persona.title}</p>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mb-4">{persona.intro}</p>
              <div className="space-y-2 mb-4">
                {persona.quotes.map((q, i) => (
                  <blockquote key={i} className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic" style={{ borderColor: ACCENT }}>
                    {q}
                  </blockquote>
                ))}
              </div>
              <p className="uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mt-3 mb-1">Drivers</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {persona.drivers.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <p className="uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mb-1">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {persona.inhibitors.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>

        {/* Common Goals — use ProPark navy instead of black */}
        <div className="mt-6 rounded-2xl px-6 py-5" style={{ background: NAVY }}>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#F7F2E7]/50 mb-3">Common Goals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g) => (
              <span
                key={g}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(247,242,231,0.10)", border: "1px solid rgba(247,242,231,0.2)", color: "#F7F2E7" }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03  UX PERSPECTIVE ON INDIAN PARKING ────── PEACH */}
      <div className="px-8 md:px-12 py-12" style={{ background: PEACH }}>
        <SectionHeader n="03" label="UX Perspective on Indian Parking" />
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
              <span className="font-black">UX PERSPECTIVE</span>{" "}
              <span className="italic">on Indian Parking</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/85">
              <strong>There is 1 parking spot for every 3650 cars in India</strong> — making it chaotic,
              unpredictable and deeply tied to local habits of jugaad.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Parking in India is more than just finding a spot — it's a daily test of patience,
              intuition, and sometimes, creativity.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Arrow color={ACCENT} width={50} />
              <span className="font-hand text-sm italic" style={{ color: "#2D5F3F" }}>source: poidata.io · india</span>
            </div>
          </div>
          <FadeImage src="/propark/ux-photos.png" alt="Parking problems in India" fadeDir="sides" />
        </div>
      </div>

      {/* ── 04  INFORMATION ARCHITECTURE ────────────── PEACH */}
      <div className="px-8 md:px-12 py-12" style={{ background: PEACH }}>
        <SectionHeader n="04" label="Information Architecture for Mobile App" />
        <FadeImage src="/propark/ia.png" alt="Information Architecture diagram" fadeDir="topbot" />
      </div>

      {/* ── 05–12  SCREEN SECTIONS ──────────────────── NAVY */}

      <ScreenSection
        n="05" label="The Final Product"
        title="THE FINAL" subtitle="Product"
        description="A parking solution built by leveraging shared economy to ease parking congestions in major Indian cities."
        annotationLabel="built in 1 week · dark mode first"
        image="/propark/product.png" imageAlt="ProPark final product — two floating phones"
        fadeDir="radial"
      />
      <ScreenSection
        n="06" label="Onboarding Screens"
        title="ONBOARDING" subtitle="Screens"
        description="Users start by entering their phone number to receive an OTP, ensuring quick authentication without lengthy registrations. With auto OTP detection and a clean, minimal interface, the process allows seamless entry into the platform."
        image="/propark/onboarding.png" imageAlt="Onboarding — phone number entry and OTP screens"
        fadeDir="radial"
      />
      <ScreenSection
        n="07" label="Home Screen"
        title="HOME" subtitle="Screen"
        description="The Home Screen provides users with a seamless way to search, view, and manage their parking needs. With a vehicle-first approach, users can select the car they are driving, quickly search for nearby or saved parking spots, and view upcoming bookings at a glance."
        image="/propark/home.png" imageAlt="Home screen — persona-specific widget and search"
        fadeDir="sides" wide
      />
      <ScreenSection
        n="08" label="Parking Locator Screens"
        title="PARKING LOCATOR" subtitle="Screens"
        description="Users can set their desired date and time, explore available spots on an interactive map, and compare options. Each parking space displays key details such as availability, hourly rates, and customer ratings, ensuring transparency."
        image="/propark/locator.png" imageAlt="Parking locator — search, map, and listing screens"
        fadeDir="radial"
      />
      <ScreenSection
        n="09" label="Parking Booking Screens"
        title="PARKING BOOKING" subtitle="Screens"
        description="From reviewing space details, hourly rates, and vehicle selection to calculating total charges with platform fees and taxes, the flow ensures complete clarity before payment. A confirmation prompt adds an extra layer of security."
        image="/propark/booking.png" imageAlt="Parking booking — detail, confirmation, and success screens"
        fadeDir="sides" wide
      />
      <ScreenSection
        n="10" label="Other Screens"
        title="OTHER" subtitle="Screens"
        description="Users can manage upcoming or past reservations, while space owners can track availability, unlist spaces, or block them for personal use. Vehicle and space management features further streamline bookings for both drivers and providers."
        image="/propark/other.png" imageAlt="Other screens — bookings, spaces, and vehicle management"
        fadeDir="radial"
      />
      <ScreenSection
        n="11" label="Notification Screen"
        title="NOTIFICATION" subtitle="Screen"
        description="The notification widget provides users with real-time updates on their parking reservations, showing exactly how much time is left — helping them plan departures and avoid overstays with ease."
        annotationLabel="live activity on lock screen"
        image="/propark/notification.png" imageAlt="ProPark notification on iPhone lock screen"
        fadeDir="topbot" narrow
      />

      {/* ── 12  FINAL SHOWCASE ───────────────────────── NAVY */}
      <div className="px-8 md:px-12 py-12" style={{ background: NAVY }}>
        <SectionHeader n="12" label="Final Showcase" dark />
        <FadeImage src="/propark/showcase.png" alt="ProPark — all screens in perspective showcase" fadeDir="sides" />
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ScreenSection — ProPark navy bg, light text, fade images.
   wide   → description above + image full-width below
   narrow → two-col with centred portrait phone
──────────────────────────────────────────────────────── */
function ScreenSection({
  n, label, title, subtitle, description, annotationLabel,
  image, imageAlt, fadeDir = "radial", wide, narrow,
}) {
  const textColor = "text-[#F7F2E7]";
  const mutedColor = "text-[#F7F2E7]/65";

  const header = (
    <div>
      <h3 className={`font-display text-2xl font-semibold tracking-tight ${textColor}`}>
        <span className="font-black">{title}</span>{" "}
        <span className="italic">{subtitle}</span>
      </h3>
      <p className={`mt-4 text-base leading-relaxed ${mutedColor}`}>{description}</p>
      <Annotation
        label={annotationLabel || "tap to explore"}
        accentColor={YELLOW}
      />
    </div>
  );

  const img = <FadeImage src={image} alt={imageAlt} fadeDir={fadeDir} />;

  return (
    <div className="px-8 md:px-12 py-12" style={{ background: NAVY }}>
      <SectionHeader n={n} label={label} dark />
      {wide ? (
        <div>
          <div className="max-w-2xl mb-8">{header}</div>
          {img}
        </div>
      ) : narrow ? (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {header}
          <div className="flex justify-center">
            <div className="w-full max-w-[280px]">{img}</div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          {header}
          {img}
        </div>
      )}
    </div>
  );
}
