import React from "react";
import { Arrow, Squiggle } from "./Doodles";

const ACCENT = "#E8532C";
const YELLOW = "#F4C430";

/* Warm neutrals in theme with the portfolio cream palette */
const BG_WARM = "#EDE6D8";   /* slightly deeper than page cream — for screen sections */
const BG_CARD = "#FFFBF2";   /* card / panel surfaces */

function SectionHeader({ n, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white shrink-0"
        style={{ background: ACCENT }}
      >
        {n}
      </span>
      <span className="font-hand text-2xl text-[#1A1A1A]">{label}</span>
      <Squiggle width={80} color="#2D5F3F" />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="px-3 py-1 rounded-full border border-[#1A1A1A]/25 text-xs bg-white/60 text-[#1A1A1A]">
      {children}
    </span>
  );
}

/* Arrow annotation placed below each clause, pointing right to its label */
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
  FadeImage — shows an image with soft radial/directional fade at the edges,
  matching the "no borders/shadows, use fades" style from the reference slides.
*/
function FadeImage({ src, alt, className = "", style = {}, fadeDir = "radial" }) {
  const masks = {
    radial:  "radial-gradient(ellipse 88% 88% at 50% 50%, black 45%, transparent 100%)",
    bottom:  "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
    left:    "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
    right:   "linear-gradient(to left, transparent 0%, black 20%, black 100%)",
    sides:   "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    topbot:  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
  };
  const mask = masks[fadeDir] || masks.radial;
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto block ${className}`}
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        ...style,
      }}
      loading="lazy"
    />
  );
}

export default function ProParkCaseStudy() {
  return (
    <div className="divide-y divide-[#1A1A1A]/10">

      {/* ── 01. CONTEXT SETTING & DESIGN BRIEF ── */}
      <div className="px-8 md:px-12 py-12 bg-[#F7F2E7]">
        <SectionHeader n="01" label="Context Setting & Design Brief" />
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">CONTEXT</span> Setting
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Urban areas face a growing parking shortage, with limited public spaces and increasing vehicle
              numbers, forcing drivers to circle endlessly while many private spots remain unused and inaccessible.
            </p>
            <p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/80">
              These spaces are a missed <strong>opportunity for both income and utility.</strong>
            </p>

            <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">DESIGN</span> Brief
            </h3>
            <p className="mt-3 text-sm italic text-[#1A1A1A]/60 leading-relaxed">
              How Might We — Design a peer to peer parking app that
            </p>

            <div className="mt-5 space-y-6 text-sm leading-relaxed text-[#1A1A1A]/80">
              <div>
                <p>
                  that <strong className="text-[#1A1A1A]">MAKES PARKING SPACES MORE ACCESSIBLE</strong> in urban spaces
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

          {/* Context image — has a built-in left fade from Figma, show as-is */}
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

      {/* ── 02. EMPATHISING WITH OUR USERS ── */}
      <div className="px-8 md:px-12 py-12 bg-[#F7F2E7]">
        <SectionHeader n="02" label="Empathising with Our Users" />

        {/* Persona portraits — radial fade so they sit naturally on cream */}
        <div className="mb-8">
          <FadeImage
            src="/propark/personas.png"
            alt="Persona portraits"
            fadeDir="radial"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
            <p className="font-display text-lg font-semibold mb-1">Residents, The Space Providers</p>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mb-4">
              Urban cities, especially residential areas have unused parking spaces during most part of the day
              when people are at work. These spaces are often close to crowded commercial areas that lack parking.
            </p>
            <div className="space-y-2 mb-4">
              {[
                `"I want to make some extra income, but I worry about strangers damaging my property."`,
                `"Trust is a big issue — how do I know the person parking won't misuse the space?"`,
              ].map((q, i) => (
                <blockquote key={i} className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic" style={{ borderColor: ACCENT }}>
                  {q}
                </blockquote>
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Source of passive income", "Better Utilization of Space", "Control Over Availability"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-3">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Trust and Security Concerns", "Liability and Legal Issues", "Lack of Flexibility"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </div>

          <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
            <p className="font-display text-lg font-semibold mb-1">Drivers, The Space Seekers</p>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mb-4">
              In crowded Indian cities, finding parking around commercial centers is always a challenge.
              During peak hours, limited pay-and-park spots fill up, leaving drivers in a frustrated endless hunt.
            </p>
            <div className="space-y-2 mb-4">
              {[
                `"I wish I could park in that empty compound. I'm tired of this wild goose chase."`,
                `"I avoid certain areas altogether because parking there is a nightmare and costs me time."`,
              ].map((q, i) => (
                <blockquote key={i} className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic" style={{ borderColor: ACCENT }}>
                  {q}
                </blockquote>
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Convenience and Proximity", "Real-Time Availability", "Cost-Effectiveness"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-3">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Unsafe parking conditions", "Outdated payment systems", "Inflexible Booking Changes"].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#1A1A1A] rounded-2xl px-6 py-5">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#F7F2E7]/50 mb-3">Common Goals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g) => (
              <span key={g} className="px-4 py-2 bg-[#F7F2E7]/10 border border-[#F7F2E7]/20 rounded-full text-sm text-[#F7F2E7] font-medium">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03. UX PERSPECTIVE ON INDIAN PARKING ── */}
      <div className="px-8 md:px-12 py-12 bg-[#F7F2E7]">
        <SectionHeader n="03" label="UX Perspective on Indian Parking" />
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">UX PERSPECTIVE</span>{" "}
              <span className="italic">on Indian Parking</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/85">
              <strong>There is 1 parking spot for every 3650 cars in India</strong> — making it chaotic,
              unpredictable and deeply tied to local habits of jugaad.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Parking in India is more than just finding a spot, it's a daily test of patience, intuition, and sometimes, creativity.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Arrow color={ACCENT} width={50} />
              <span className="font-hand text-sm text-[#2D5F3F] italic">source: poidata.io · india</span>
            </div>
          </div>
          {/* Ux photo collage — sides fade so it blends into cream */}
          <div>
            <FadeImage
              src="/propark/ux-photos.png"
              alt="Parking problems in India — real-world photos"
              fadeDir="sides"
            />
          </div>
        </div>
      </div>

      {/* ── 04. INFORMATION ARCHITECTURE ── */}
      <div className="px-8 md:px-12 py-12 bg-[#F7F2E7]">
        <SectionHeader n="04" label="Information Architecture for Mobile App" />
        {/* IA diagram — fade top+bottom so the white background blends */}
        <FadeImage
          src="/propark/ia.png"
          alt="Information Architecture diagram"
          fadeDir="topbot"
        />
      </div>

      {/* ── 05. THE FINAL PRODUCT ── */}
      <ScreenSection
        n="05"
        label="The Final Product"
        title="THE FINAL"
        subtitle="Product"
        description="A parking solution built by leveraging shared economy to ease parking congestions in major Indian cities."
        annotationLabel="built in 1 week · dark mode first"
        image="/propark/product.png"
        imageAlt="ProPark final product — two floating phones"
        fadeDir="radial"
      />

      {/* ── 06. ONBOARDING SCREENS ── */}
      <ScreenSection
        n="06"
        label="Onboarding Screens"
        title="ONBOARDING"
        subtitle="Screens"
        description="Users start by entering their phone number to receive an OTP, ensuring quick authentication without lengthy registrations. With auto OTP detection and a clean, minimal interface, the process allows seamless entry into the platform."
        image="/propark/onboarding.png"
        imageAlt="Onboarding — phone number entry and OTP screens"
        fadeDir="radial"
      />

      {/* ── 07. HOME SCREEN ── */}
      <ScreenSection
        n="07"
        label="Home Screen"
        title="HOME"
        subtitle="Screen"
        description="The Home Screen provides users with a seamless way to search, view, and manage their parking needs. With a vehicle-first approach, users can select the car they are driving, quickly search for nearby or saved parking spots, and view upcoming bookings at a glance."
        image="/propark/home.png"
        imageAlt="Home screen — persona-specific widget and search"
        wide
        fadeDir="sides"
      />

      {/* ── 08. PARKING LOCATOR ── */}
      <ScreenSection
        n="08"
        label="Parking Locator Screens"
        title="PARKING LOCATOR"
        subtitle="Screens"
        description="Users can set their desired date and time, explore available spots on an interactive map, and compare options. Each parking space displays key details such as availability, hourly rates, and customer ratings, ensuring transparency."
        image="/propark/locator.png"
        imageAlt="Parking locator — search, map, and listing screens"
        fadeDir="radial"
      />

      {/* ── 09. PARKING BOOKING ── */}
      <ScreenSection
        n="09"
        label="Parking Booking Screens"
        title="PARKING BOOKING"
        subtitle="Screens"
        description="From reviewing space details, hourly rates, and vehicle selection to calculating total charges with platform fees and taxes, the flow ensures complete clarity before payment. A confirmation prompt adds an extra layer of security."
        image="/propark/booking.png"
        imageAlt="Parking booking — detail, confirmation, and success screens"
        wide
        fadeDir="sides"
      />

      {/* ── 10. OTHER SCREENS ── */}
      <ScreenSection
        n="10"
        label="Other Screens"
        title="OTHER"
        subtitle="Screens"
        description="Users can manage upcoming or past reservations, while space owners can track availability, unlist spaces, or block them for personal use. Vehicle and space management features further streamline bookings for both drivers and providers."
        image="/propark/other.png"
        imageAlt="Other screens — bookings, spaces, and vehicle management"
        fadeDir="radial"
      />

      {/* ── 11. NOTIFICATION SCREEN ── */}
      <ScreenSection
        n="11"
        label="Notification Screen"
        title="NOTIFICATION"
        subtitle="Screen"
        description="The notification widget provides users with real-time updates on their parking reservations, showing exactly how much time is left — helping them plan departures and avoid overstays with ease."
        annotationLabel="live activity on lock screen"
        image="/propark/notification.png"
        imageAlt="ProPark notification on iPhone lock screen"
        fadeDir="topbot"
        narrow
      />

      {/* ── 12. FINAL SHOWCASE ── */}
      <div className="px-8 md:px-12 py-12" style={{ background: BG_WARM }}>
        <SectionHeader n="12" label="Final Showcase" />
        <FadeImage
          src="/propark/showcase.png"
          alt="ProPark — all screens in perspective showcase"
          fadeDir="sides"
        />
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   ScreenSection — warm cream bg, text left, image right.
   `wide`   → description above, image full-width below (for landscape sets)
   `narrow` → text left, image centred at reduced max-width (portrait phone)
───────────────────────────────────────────────────────────────────────── */
function ScreenSection({
  n, label, title, subtitle, description, annotationLabel,
  image, imageAlt, fadeDir = "radial", wide, narrow,
}) {
  const header = (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
        <span className="font-black">{title}</span>{" "}
        <span className="italic">{subtitle}</span>
      </h3>
      <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/75">{description}</p>
      <Annotation
        label={annotationLabel || "tap to explore"}
        accentColor={ACCENT}
      />
    </div>
  );

  const img = (
    <FadeImage src={image} alt={imageAlt} fadeDir={fadeDir} />
  );

  return (
    <div className="px-8 md:px-12 py-12" style={{ background: BG_WARM }}>
      <SectionHeader n={n} label={label} />
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
