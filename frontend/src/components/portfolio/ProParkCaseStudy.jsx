import React from "react";
import { Arrow, Squiggle } from "./Doodles";

const ACCENT = "#E8532C";

function SectionHeader({ n, label }) {
  return (
    <div className="flex items-center gap-3 mb-7">
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

function Tag({ children, dark }) {
  return (
    <span
      className={`px-3 py-1 rounded-full border text-xs ${
        dark
          ? "border-[#F7F2E7]/25 text-[#F7F2E7]/90"
          : "border-[#1A1A1A]/25 text-[#1A1A1A] bg-white/60"
      }`}
    >
      {children}
    </span>
  );
}

function GoalTag({ children }) {
  return (
    <span className="border-b-2 border-[#1A1A1A] font-hand text-base italic text-[#1A1A1A]">{children}</span>
  );
}

export default function ProParkCaseStudy() {
  return (
    <div className="divide-y divide-[#1A1A1A]/10">

      {/* ── 01. CONTEXT SETTING & DESIGN BRIEF ── */}
      <div className="px-8 md:px-12 py-10">
        <SectionHeader n="01" label="Context Setting & Design Brief" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">CONTEXT</span> Setting
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Urban areas face a growing parking shortage, with limited public spaces and increasing vehicle numbers, forcing drivers to circle endlessly while many private spots remain unused and inaccessible.
            </p>
            <p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/80">
              These spaces are a missed <strong>opportunity for both income and utility.</strong>
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">DESIGN</span> Brief
            </h3>

            <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#1A1A1A]/80">
              <p className="italic">How Might We — Design a peer to peer parking app that</p>

              <div className="flex items-start justify-between gap-4 pl-3 border-l-2" style={{ borderColor: ACCENT }}>
                <p>
                  <strong className="text-[#1A1A1A]">that MAKES PARKING SPACES MORE ACCESSIBLE</strong> in urban spaces
                </p>
                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <Arrow color={ACCENT} width={36} />
                  <GoalTag>The Goal</GoalTag>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pl-3 border-l-2 border-[#1A1A1A]/20">
                <p>
                  for a wide range of urban drivers and space owners by{" "}
                  <strong className="text-[#1A1A1A]">unlocking and connecting unused private parking spots</strong>
                </p>
                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <Arrow color="#1A1A1A" width={36} />
                  <span className="font-hand text-sm italic whitespace-nowrap">How to achieve it?</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pl-3 border-l-2 border-[#1A1A1A]/20">
                <p>
                  to reduce parking frustration and{" "}
                  <strong className="text-[#1A1A1A]">turn idle space into opportunity.</strong>
                </p>
                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <Arrow color="#1A1A1A" width={36} />
                  <span className="font-hand text-sm italic">The Why?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/propark/context-bg.png" alt="Urban building with car — context" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </div>

      {/* ── 02. EMPATHISING WITH OUR USERS ── */}
      <div className="px-8 md:px-12 py-10">
        <SectionHeader n="02" label="Empathising with Our Users" />

        {/* Persona photos banner */}
        <div className="rounded-2xl overflow-hidden mb-8 bg-black">
          <img src="/propark/personas.png" alt="Persona portraits" className="w-full h-auto block" loading="lazy" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Residents */}
          <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
            <div className="mb-3">
              <p className="font-display text-lg font-semibold">Residents, The Space Providers</p>
              <p className="text-sm text-[#1A1A1A]/70 mt-1 leading-relaxed">
                Urban cities, especially residential areas have unused parking spaces during most part of the day when people are at work. These spaces are often close to crowded commercial areas that lack parking facilities.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {[
                `"I want to make some extra income, but I worry about strangers damaging my property or leaving a mess."`,
                `"Trust is a big issue for me—how do I know the person parking won't misuse the space or cause trouble?"`,
              ].map((q, i) => (
                <blockquote key={i} className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic" style={{ borderColor: ACCENT }}>
                  {q}
                </blockquote>
              ))}
            </div>

            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Source of passive income", "Better Utilization of Space", "Control Over Availability"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Trust and Security Concerns", "Liability and Legal Issues", "Lack of Flexibility"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Drivers */}
          <div className="bg-[#FFFBF2] border border-[#1A1A1A]/12 rounded-2xl p-6">
            <div className="mb-3">
              <p className="font-display text-lg font-semibold">Drivers, The Space Seekers</p>
              <p className="text-sm text-[#1A1A1A]/70 mt-1 leading-relaxed">
                In crowded Indian cities, finding parking around commercial centers is always a challenge. During peak hours, the limited pay and park is full leaving them in a frustrated endless hunt for a parking spot.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {[
                `"I wish I could park my car in the empty parking space in that compound. I'm tired of this wild goose chase"`,
                `"I avoid driving to certain areas altogether because I know parking there will be a nightmare and cost me time and stress."`,
              ].map((q, i) => (
                <blockquote key={i} className="border-l-2 pl-3 py-1 text-sm text-[#1A1A1A]/75 italic" style={{ borderColor: ACCENT }}>
                  {q}
                </blockquote>
              ))}
            </div>

            <div className="space-y-2 text-xs">
              <p className="uppercase tracking-widest text-[#1A1A1A]/50">Drivers</p>
              <div className="flex flex-wrap gap-1.5">
                {["Convenience and Proximity", "Real-Time Availability", "Cost-Effectiveness"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="uppercase tracking-widest text-[#1A1A1A]/50 mt-2">Inhibitors</p>
              <div className="flex flex-wrap gap-1.5">
                {["Unsafe parking conditions", "Outdated payment systems", "Inflexible Booking Changes"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Common Goals */}
        <div className="mt-6 bg-[#1A1A1A] rounded-2xl px-6 py-4">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#F7F2E7]/60 mb-3">Common Goals</p>
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
      <div className="px-8 md:px-12 py-10">
        <SectionHeader n="03" label="UX Perspective on Indian Parking" />
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">UX PERSPECTIVE</span> on Indian Parking
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/85">
              <strong>There is 1 parking spot for every 3650 cars in India</strong> making it chaotic, unpredictable and deeply tied to local habits of jugaad.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/80">
              Parking in India is more than just finding a spot, it's a daily test of patience, intuition, and sometimes, creativity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Arrow color={ACCENT} width={40} />
              <span className="font-hand text-lg text-[#2D5F3F]">source: poidata.io / public-parking-space / india</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#1A1A1A]/10">
            <img src="/propark/ux-photos.png" alt="Parking problems in India" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </div>

      {/* ── 04. INFORMATION ARCHITECTURE ── */}
      <div className="px-8 md:px-12 py-10">
        <SectionHeader n="04" label="Information Architecture for Mobile App" />
        <div className="rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm bg-white">
          <img src="/propark/ia.png" alt="Information Architecture" className="w-full h-auto block" loading="lazy" />
        </div>
      </div>

      {/* ── 05. THE FINAL PRODUCT ── */}
      <div className="px-8 md:px-12 py-10 bg-[#111] rounded-none">
        <SectionHeader n="05" label="The Final Product" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-black text-[#F4C430]">✦</span>
              <span className="font-display text-3xl font-black text-white tracking-tight">PRO PARK</span>
            </div>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              A parking solution built by leveraging shared economy to ease parking congestions in major Indian cities.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Arrow color="#F4C430" width={40} />
              <span className="font-hand text-lg text-[#F4C430]">built in 1 week · dark mode first</span>
            </div>
          </div>
          <div>
            <img src="/propark/product.png" alt="ProPark final product screens" className="w-full h-auto block drop-shadow-2xl" loading="lazy" />
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
        imageAlt="Onboarding screens"
        imgRight
      />

      {/* ── 07. HOME SCREEN ── */}
      <ScreenSection
        n="07"
        label="Home Screen"
        title="HOME"
        subtitle="Screen"
        description="The Home Screen provides users with a seamless way to search, view, and manage their parking needs. With a vehicle-first approach, users can select the car they are driving, quickly search for nearby or saved parking spots, and view upcoming bookings at a glance."
        image="/propark/home.png"
        imageAlt="Home screen with persona-specific UI"
      />

      {/* ── 08. PARKING LOCATOR ── */}
      <ScreenSection
        n="08"
        label="Parking Locator Screens"
        title="PARKING LOCATOR"
        subtitle="Screens"
        description="Users can set their desired date and time, explore available spots on an interactive map, and compare options. Each parking space displays key details such as availability, hourly rates, and customer ratings, ensuring transparency and informed decisions."
        image="/propark/locator.png"
        imageAlt="Parking locator screens"
        imgRight
      />

      {/* ── 09. PARKING BOOKING ── */}
      <ScreenSection
        n="09"
        label="Parking Booking Screens"
        title="PARKING BOOKING"
        subtitle="Screens"
        description="From reviewing space details, hourly rates, and vehicle selection to calculating total charges with platform fees and taxes, the flow ensures complete clarity before payment. A confirmation prompt adds an extra layer of security, while the final 'Booking Confirmed' screen reassures users with instant feedback."
        image="/propark/booking.png"
        imageAlt="Parking booking screens"
      />

      {/* ── 10. OTHER SCREENS ── */}
      <ScreenSection
        n="10"
        label="Other Screens"
        title="OTHER"
        subtitle="Screens"
        description="Users can manage upcoming or past reservations, while space owners can track availability, unlist spaces, or block them for personal use. Vehicle and space management features further streamline bookings, making the app efficient for both drivers and providers."
        image="/propark/other.png"
        imageAlt="Other screens — bookings, spaces, vehicle management"
        imgRight
      />

      {/* ── 11. NOTIFICATION SCREEN ── */}
      <div className="px-8 md:px-12 py-10">
        <SectionHeader n="11" label="Notification Screen" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <span className="font-black">NOTIFICATION</span> Screen
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/80">
              The notification widget provides users with real-time updates on their parking reservations, showing exactly how much time is left. This quick-access feature ensures drivers stay informed without opening the app, helping them plan departures and avoid overstays with ease.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Arrow color={ACCENT} width={40} />
              <span className="font-hand text-lg text-[#1A1A1A]/70">live activity on lock screen</span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/propark/notification.png"
              alt="Notification on lock screen"
              className="w-full max-w-[280px] h-auto block rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ── 12. FINAL SHOWCASE ── */}
      <div className="px-8 md:px-12 py-10 bg-[#0D0D0D]">
        <SectionHeader n="12" label="Final Showcase" />
        <div className="rounded-2xl overflow-hidden">
          <img src="/propark/showcase.png" alt="ProPark all screens showcase" className="w-full h-auto block" loading="lazy" />
        </div>
      </div>

    </div>
  );
}

function ScreenSection({ n, label, title, subtitle, description, image, imageAlt, imgRight }) {
  const text = (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
        <span className="font-black">{title}</span> {subtitle}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-white/75">{description}</p>
      <div className="mt-5 flex items-center gap-2">
        <Arrow color="#F4C430" width={36} />
        <span className="font-hand text-base text-[#F4C430]">tap to explore</span>
      </div>
    </div>
  );

  const img = (
    <div>
      <img src={image} alt={imageAlt} className="w-full h-auto block drop-shadow-xl" loading="lazy" />
    </div>
  );

  return (
    <div className="px-8 md:px-12 py-10 bg-[#111]">
      <SectionHeader n={n} label={label} />
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {imgRight ? <>{text}{img}</> : <>{img}{text}</>}
      </div>
    </div>
  );
}
