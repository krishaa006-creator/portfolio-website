import React from "react";
import { Arrow, Squiggle } from "./Doodles";

const ACCENT = "#E8532C";
const YELLOW = "#F4C430";

/* Section header — adapts text colour for dark/light backgrounds */
function SectionHeader({ n, label, dark }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white shrink-0"
        style={{ background: ACCENT }}
      >
        {n}
      </span>
      <span className={`font-hand text-2xl ${dark ? "text-white" : "text-[#1A1A1A]"}`}>{label}</span>
      <Squiggle width={80} color={dark ? YELLOW : "#2D5F3F"} />
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

/* Arrow annotation placed below a clause, pointing right to its label */
function Annotation({ label, color = "#1A1A1A", accentColor }) {
  return (
    <div className="flex items-center gap-2 mt-2 pl-4">
      <Arrow color={accentColor || color} width={60} />
      <span
        className="font-hand text-base italic"
        style={{ color: accentColor || color }}
      >
        {label}
      </span>
    </div>
  );
}

export default function ProParkCaseStudy() {
  return (
    <div className="divide-y divide-[#1A1A1A]/10">

      {/* ── 01. CONTEXT SETTING & DESIGN BRIEF ── */}
      <div className="px-8 md:px-12 py-12">
        <SectionHeader n="01" label="Context Setting & Design Brief" />
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">

          {/* Left: text */}
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

              {/* Clause 1 — The Goal */}
              <div>
                <p>
                  that <strong className="text-[#1A1A1A]">MAKES PARKING SPACES MORE ACCESSIBLE</strong> in urban spaces
                </p>
                <Annotation label="The Goal" accentColor={ACCENT} />
              </div>

              {/* Clause 2 — How to achieve it? */}
              <div>
                <p>
                  for a wide range of urban drivers and space owners by{" "}
                  <strong className="text-[#1A1A1A]">unlocking and connecting unused private parking spots</strong>
                </p>
                <Annotation label="How to achieve it?" color="#1A1A1A" />
              </div>

              {/* Clause 3 — The Why? */}
              <div>
                <p>
                  to reduce parking frustration and{" "}
                  <strong className="text-[#1A1A1A]">turn idle space into opportunity.</strong>
                </p>
                <Annotation label="The Why?" color="#1A1A1A" />
              </div>

            </div>
          </div>

          {/* Right: context image — no overflow-hidden, natural proportions */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/propark/context-bg.png"
              alt="Urban building with car"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 02. EMPATHISING WITH OUR USERS ── */}
      <div className="px-8 md:px-12 py-12">
        <SectionHeader n="02" label="Empathising with Our Users" />

        {/* Persona portraits — full natural width, dark neutral bg */}
        <div className="rounded-2xl overflow-hidden mb-8 bg-[#111111]">
          <img
            src="/propark/personas.png"
            alt="Persona portraits"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Residents */}
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
                <blockquote
                  key={i}
                  className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic"
                  style={{ borderColor: ACCENT }}
                >
                  {q}
                </blockquote>
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Source of passive income", "Better Utilization of Space", "Control Over Availability"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-3">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Trust and Security Concerns", "Liability and Legal Issues", "Lack of Flexibility"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Drivers */}
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
                <blockquote
                  key={i}
                  className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic"
                  style={{ borderColor: ACCENT }}
                >
                  {q}
                </blockquote>
              ))}
            </div>
            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Convenience and Proximity", "Real-Time Availability", "Cost-Effectiveness"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-3">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Unsafe parking conditions", "Outdated payment systems", "Inflexible Booking Changes"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Common Goals */}
        <div className="mt-6 bg-[#1A1A1A] rounded-2xl px-6 py-5">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#F7F2E7]/50 mb-3">Common Goals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g) => (
              <span
                key={g}
                className="px-4 py-2 bg-[#F7F2E7]/10 border border-[#F7F2E7]/20 rounded-full text-sm text-[#F7F2E7] font-medium"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03. UX PERSPECTIVE ON INDIAN PARKING ── */}
      <div className="px-8 md:px-12 py-12">
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
              Parking in India is more than just finding a spot, it's a daily test of patience, intuition,
              and sometimes, creativity.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Arrow color={ACCENT} width={50} />
              <span className="font-hand text-sm text-[#2D5F3F] italic">
                source: poidata.io · public-parking-space · india
              </span>
            </div>
          </div>
          {/* Photo grid — no overflow clipping */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#1A1A1A]/10 bg-[#F0ECE4]">
            <img
              src="/propark/ux-photos.png"
              alt="Parking problems in India — real-world photos"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 04. INFORMATION ARCHITECTURE ── */}
      <div className="px-8 md:px-12 py-12">
        <SectionHeader n="04" label="Information Architecture for Mobile App" />
        <div className="rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm bg-[#F0ECE4]">
          <img
            src="/propark/ia.png"
            alt="Information Architecture diagram"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── 05. THE FINAL PRODUCT ── */}
      <div className="px-8 md:px-12 py-12 bg-[#111111]">
        <SectionHeader n="05" label="The Final Product" dark />
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl font-black text-[#F4C430]">✦</span>
              <span className="font-display text-3xl font-black text-white tracking-tight">PRO PARK</span>
            </div>
            <p className="text-base leading-relaxed text-white/75">
              A parking solution built by leveraging shared economy to ease parking congestions in major Indian cities.
            </p>
            <div className="mt-5">
              <Annotation label="built in 1 week · dark mode first" color={YELLOW} />
            </div>
          </div>
          <div className="bg-[#111111] rounded-2xl overflow-hidden">
            <img
              src="/propark/product.png"
              alt="ProPark final product — two floating phones"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 06. ONBOARDING SCREENS ── */}
      <ScreenSection
        n="06"
        label="Onboarding Screens"
        title="ONBOARDING"
        subtitle="Screens"
        description="Users start by entering their phone number to receive an OTP, ensuring quick authentication without lengthy registrations. With auto OTP detection and a clean, minimal interface, the process allows seamless entry into the platform."
        image="/propark/onboarding.png"
        imageAlt="Onboarding — phone number entry and OTP screens"
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
      />

      {/* ── 08. PARKING LOCATOR ── */}
      <ScreenSection
        n="08"
        label="Parking Locator Screens"
        title="PARKING LOCATOR"
        subtitle="Screens"
        description="Users can set their desired date and time, explore available spots on an interactive map, and compare options. Each parking space displays key details such as availability, hourly rates, and customer ratings, ensuring transparency and informed decisions."
        image="/propark/locator.png"
        imageAlt="Parking locator — search, map, and listing screens"
      />

      {/* ── 09. PARKING BOOKING ── */}
      <ScreenSection
        n="09"
        label="Parking Booking Screens"
        title="PARKING BOOKING"
        subtitle="Screens"
        description="From reviewing space details, hourly rates, and vehicle selection to calculating total charges with platform fees and taxes, the flow ensures complete clarity before payment. A confirmation prompt adds an extra layer of security, while the final 'Booking Confirmed' screen reassures users with instant feedback."
        image="/propark/booking.png"
        imageAlt="Parking booking — detail, confirmation, and success screens"
        wide
      />

      {/* ── 10. OTHER SCREENS ── */}
      <ScreenSection
        n="10"
        label="Other Screens"
        title="OTHER"
        subtitle="Screens"
        description="Users can manage upcoming or past reservations, while space owners can track availability, unlist spaces, or block them for personal use. Vehicle and space management features further streamline bookings, making the app efficient for both drivers and providers."
        image="/propark/other.png"
        imageAlt="Other screens — bookings, spaces, and vehicle management"
      />

      {/* ── 11. NOTIFICATION SCREEN ── */}
      <div className="px-8 md:px-12 py-12 bg-[#111111]">
        <SectionHeader n="11" label="Notification Screen" dark />
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              <span className="font-black">NOTIFICATION</span>{" "}
              <span className="italic">Screen</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              The notification widget provides users with real-time updates on their parking reservations,
              showing exactly how much time is left. This quick-access feature ensures drivers stay informed
              without opening the app, helping them plan departures and avoid overstays with ease.
            </p>
            <Annotation label="live activity on lock screen" color={YELLOW} />
          </div>
          {/* Show notification phone at natural proportions, centred */}
          <div className="flex items-center justify-center bg-[#111111] rounded-2xl py-8 px-6">
            <img
              src="/propark/notification.png"
              alt="ProPark notification on iPhone lock screen"
              className="w-full max-w-[260px] h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 12. FINAL SHOWCASE ── */}
      <div className="px-8 md:px-12 py-12 bg-[#111111]">
        <SectionHeader n="12" label="Final Showcase" dark />
        <div className="rounded-2xl overflow-hidden bg-[#111111]">
          <img
            src="/propark/showcase.png"
            alt="ProPark — all screens in perspective showcase"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   Reusable screen section: dark bg, text left,
   image right. `wide` flag gives image full row.
───────────────────────────────────────────── */
function ScreenSection({ n, label, title, subtitle, description, image, imageAlt, wide }) {
  return (
    <div className="px-8 md:px-12 py-12 bg-[#111111]">
      <SectionHeader n={n} label={label} dark />

      {wide ? (
        /* Wide layout: text above, image full-width below */
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              <span className="font-black">{title}</span>{" "}
              <span className="italic">{subtitle}</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">{description}</p>
            <Annotation label="tap to explore" color={YELLOW} />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#111111]">
            <img src={image} alt={imageAlt} className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      ) : (
        /* Standard layout: text left (40%), image right (60%) */
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              <span className="font-black">{title}</span>{" "}
              <span className="italic">{subtitle}</span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">{description}</p>
            <Annotation label="tap to explore" color={YELLOW} />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#111111]">
            <img src={image} alt={imageAlt} className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      )}
    </div>
  );
}
