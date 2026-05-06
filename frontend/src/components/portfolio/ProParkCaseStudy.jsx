import React, { useEffect, useRef, useState } from "react";
import { Arrow, Sparkle } from "./Doodles";

/* ── ProPark brand palette ──────────────────────────────────── */
const GOLD       = "#F2C040";          // ProPark golden yellow
const DARK       = "#131210";          // main bg
const DARK_MID   = "#1A1815";          // alternating section bg
const DARK_CARD  = "#221F18";          // card surfaces
const DARK_CARD2 = "#2A2720";          // slightly lighter card
const TEXT       = "#FFFFFF";
const TEXT_MUTED = "rgba(255,255,255,0.55)";
const TEXT_DIM   = "rgba(255,255,255,0.28)";
const BORDER     = "rgba(255,255,255,0.08)";
const GOLD_BG    = "rgba(242,192,64,0.12)";  // subtle gold tint for chips

/* ── keyframes ─────────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes ppFloat {
  0%,100% { transform:translateY(0); }
  50%      { transform:translateY(-10px); }
}
@keyframes ppFadeUp {
  from { opacity:0; transform:translateY(28px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes ppFadeIn {
  from { opacity:0; }
  to   { opacity:1; }
}
@keyframes ppSlideRight {
  from { opacity:0; transform:translateX(-24px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes ppSlideLeft {
  from { opacity:0; transform:translateX(24px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes ppCountUp {
  from { opacity:0; transform:scale(0.85); }
  to   { opacity:1; transform:scale(1); }
}
@keyframes ppChipPop {
  0%   { opacity:0; transform:scale(0.7); }
  70%  { transform:scale(1.08); }
  100% { opacity:1; transform:scale(1); }
}
`;

function injectKeyframes() {
  if (document.getElementById("pp-kf")) return;
  const s = document.createElement("style");
  s.id = "pp-kf";
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
}

/* ── hooks ──────────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    injectKeyframes();
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, on];
}

function useCountUp(target, duration = 1800) {
  const ref  = useRef(null);
  const [val, setVal] = useState(0);
  const [go,  setGo]  = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setGo(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!go) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [go, target, duration]);
  return [ref, val, go];
}

/* ── primitives ─────────────────────────────────────────────── */
function Reveal({ children, anim = "ppFadeUp", delay = 0, duration = 600, className = "", style = {} }) {
  const [ref, on] = useReveal();
  return (
    <div ref={ref} className={className}
      style={{
        animation: on ? `${anim} ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms both` : "none",
        opacity: on ? undefined : 0,
        ...style,
      }}>
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-[2px] w-5 rounded-full shrink-0" style={{ background: GOLD }} />
      <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
        {children}
      </span>
    </div>
  );
}

/* Astro Space for the bold part, Fraunces italic for the light part */
function Heading({ heavy, light, size = "text-4xl md:text-6xl" }) {
  return (
    <h2 className={`leading-[1.05] ${size}`}>
      <span className="font-propark font-bold" style={{ color: TEXT }}>{heavy} </span>
      {light && <span className="font-display font-light italic" style={{ color: GOLD }}>{light}</span>}
    </h2>
  );
}

function Note({ label, color = GOLD }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <Arrow color={color} width={44} />
      <span className="font-hand italic text-base" style={{ color }}>{label}</span>
    </div>
  );
}

function PullQuote({ quote }) {
  return (
    <div className="rounded-xl p-4 relative overflow-hidden border" style={{ background: DARK_CARD2, borderColor: BORDER }}>
      <span className="font-propark text-5xl leading-none absolute top-1 left-3 opacity-15"
        style={{ color: GOLD }}>"</span>
      <p className="font-display italic text-base leading-snug relative z-10 pl-2 pt-3"
        style={{ color: TEXT }}>
        {quote}
      </p>
    </div>
  );
}

function StatCard({ stat, label, color = GOLD, delay = 0 }) {
  return (
    <Reveal anim="ppCountUp" delay={delay}>
      <div className="rounded-2xl p-5 h-full border" style={{ background: DARK_CARD, borderColor: BORDER }}>
        <p className="font-propark font-bold text-3xl md:text-4xl leading-none" style={{ color }}>
          {stat}
        </p>
        <p className="mt-2 text-sm leading-snug" style={{ color: TEXT_MUTED }}>{label}</p>
      </div>
    </Reveal>
  );
}

function OutcomeCard({ icon, label, delay = 0 }) {
  return (
    <Reveal anim="ppFadeUp" delay={delay}>
      <div className="rounded-2xl p-5 border flex items-start gap-3 h-full"
        style={{ background: DARK_CARD, borderColor: BORDER }}>
        <span className="text-2xl shrink-0">{icon}</span>
        <p className="text-sm leading-relaxed font-medium" style={{ color: TEXT }}>{label}</p>
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function ProParkCaseStudy() {
  const [statRef, statVal, statGo] = useCountUp(3650);

  return (
    <div>

      {/* ══ 01  CONTEXT ═══════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK }}>
        <div className="grid md:grid-cols-[11fr_9fr] gap-12 items-start">

          <Reveal anim="ppSlideRight">
            <Eyebrow>Context Setting</Eyebrow>
            <Heading heavy="The" light="problem space." size="text-5xl md:text-7xl" />
            <p className="mt-5 text-lg leading-relaxed max-w-lg" style={{ color: TEXT_MUTED }}>
              Urban areas face a growing parking shortage — limited public spaces, endless circling,
              and many private spots sitting empty and inaccessible. These idle spaces are a
              <strong style={{ color: TEXT }}> missed opportunity</strong> for both income and utility.
            </p>

            {/* Pain-point stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <StatCard stat="1:3,650"  label="parking spots per car in Indian cities"           color={GOLD}  delay={0}   />
              <StatCard stat="20+ min"  label="average time lost circling for a single spot"     color={TEXT}  delay={80}  />
              <StatCard stat="₹0"       label="earned from millions of idle private driveways"   color={GOLD}  delay={160} />
            </div>

            {/* Design brief */}
            <div className="mt-12">
              <Eyebrow>Design Brief</Eyebrow>
              <p className="text-sm italic mb-6" style={{ color: TEXT_DIM }}>
                How Might We — Design a peer-to-peer parking app that…
              </p>
              <div className="space-y-4">
                {[
                  { text: <><strong style={{ color: TEXT }}>Makes parking spaces more accessible</strong> in urban spaces</>,     note: "The goal",            color: GOLD },
                  { text: <>by <strong style={{ color: TEXT }}>unlocking and connecting unused private parking spots</strong></>,  note: "How to achieve it?",  color: TEXT_MUTED },
                  { text: <>to reduce frustration and <strong style={{ color: TEXT }}>turn idle space into opportunity.</strong></>, note: "The why?",            color: TEXT_MUTED },
                ].map(({ text, note, color }, i) => (
                  <div key={i} className="pl-4 border-l-2"
                    style={{ borderColor: i === 0 ? GOLD : BORDER }}>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{text}</p>
                    <Note label={note} color={color} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal anim="ppSlideLeft" delay={120}>
            <div className="pt-10">
              <img src="/propark/context-bg.png" alt="Urban building with car"
                className="w-full h-auto block rounded-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STAT MOMENT — gold pop ════════════════════════════════ */}
      <div style={{ background: GOLD }}>
        <div className="px-8 md:px-16 py-14 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div ref={statRef} className="shrink-0 text-center md:text-left">
            <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ color: "rgba(19,18,16,0.5)" }}>
              India parking reality
            </p>
            <p className="font-propark font-bold leading-none"
              style={{
                fontSize: "clamp(4.5rem,13vw,9rem)",
                color: DARK,
                animation: statGo ? "ppCountUp 700ms cubic-bezier(.22,1,.36,1) both" : "none",
              }}>
              1:{statVal.toLocaleString()}
            </p>
            <p className="font-hand text-lg mt-1" style={{ color: "rgba(19,18,16,0.55)" }}>
              parking spots per car
            </p>
          </div>
          <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(19,18,16,0.2)" }} />
          <Reveal anim="ppFadeUp">
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(19,18,16,0.7)" }}>
              Parking in India is more than just finding a spot — it's a daily test of patience, intuition,
              and <em>jugaad</em>. The scarcity makes it chaotic and deeply frustrating.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ══ 02  EMPATHISING ═══════════════════════════════════════ */}
      <section className="py-16" style={{ background: DARK_MID }}>
        <Reveal>
          <div className="mb-10 overflow-hidden">
            <img src="/propark/personas.png" alt="Persona portraits"
              className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        <div className="px-8 md:px-16">
          <Reveal>
            <Eyebrow>Empathising with our users</Eyebrow>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-2">
            {[
              {
                title: "Residents",
                role: "The Space Providers",
                emoji: "🏠",
                intro: "Urban residential areas have unused parking spaces during most of the day — often close to crowded commercial zones that desperately lack parking.",
                quotes: [
                  "I want to make extra income, but I worry about strangers damaging my property.",
                  "Trust is a big issue — how do I know the person parking won't misuse the space?",
                ],
                drivers:    ["Passive income", "Better space utilization", "Control availability"],
                inhibitors: ["Trust & security concerns", "Liability issues", "Lack of flexibility"],
              },
              {
                title: "Drivers",
                role: "The Space Seekers",
                emoji: "🚗",
                intro: "In crowded Indian cities, finding parking near commercial areas is a nightmare. During peak hours, limited spots vanish, leaving drivers in a frustrated endless loop.",
                quotes: [
                  "I wish I could park in that empty compound. I'm tired of this wild goose chase.",
                  "I avoid certain areas altogether because parking there is a nightmare every time.",
                ],
                drivers:    ["Convenience & proximity", "Real-time availability", "Cost-effectiveness"],
                inhibitors: ["Unsafe conditions", "Outdated payments", "Inflexible bookings"],
              },
            ].map((p, idx) => (
              <Reveal key={p.title} anim="ppFadeUp" delay={idx * 100}>
                <div className="rounded-3xl overflow-hidden border transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderColor: BORDER }}>
                  <div className="px-6 pt-5 pb-4 flex items-center justify-between"
                    style={{ background: DARK_CARD2 }}>
                    <div>
                      <p className="font-propark text-2xl font-bold" style={{ color: TEXT }}>{p.title}</p>
                      <p className="font-display italic text-lg" style={{ color: GOLD }}>{p.role}</p>
                    </div>
                    <span className="text-4xl">{p.emoji}</span>
                  </div>

                  <div className="p-6" style={{ background: DARK_CARD }}>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_MUTED }}>{p.intro}</p>

                    <div className="space-y-3 mb-6">
                      {p.quotes.map((q, i) => (
                        <PullQuote key={i} quote={q} />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="uppercase tracking-widest mb-2" style={{ color: TEXT_DIM }}>Motivators</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.drivers.map((t, ti) => (
                            <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium"
                              style={{
                                background: GOLD_BG,
                                color: GOLD,
                                border: `1px solid rgba(242,192,64,0.2)`,
                                animation: `ppChipPop 400ms ${ti * 60 + 200}ms both`,
                              }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="uppercase tracking-widest mb-2" style={{ color: TEXT_DIM }}>Inhibitors</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.inhibitors.map((t, ti) => (
                            <span key={t} className="px-2.5 py-1 rounded-full text-xs border"
                              style={{
                                borderColor: BORDER,
                                color: TEXT_MUTED,
                                background: "rgba(255,255,255,0.04)",
                                animation: `ppChipPop 400ms ${ti * 60 + 300}ms both`,
                              }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Shared goals strip */}
          <Reveal anim="ppFadeUp" delay={80}>
            <div className="mt-5 rounded-2xl px-6 py-4 border" style={{ background: DARK_CARD2, borderColor: `rgba(242,192,64,0.2)` }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-center mb-3" style={{ color: TEXT_DIM }}>
                Common design goals
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {["Design for trust", "Design for security", "Systematic scheduling", "Defined pricing models"].map((g, gi) => (
                  <span key={g}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
                    style={{
                      background: GOLD_BG,
                      color: GOLD,
                      border: `1px solid rgba(242,192,64,0.25)`,
                      animation: `ppChipPop 350ms ${gi * 70 + 150}ms both`,
                    }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 03  UX PERSPECTIVE ════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK }}>
        <Reveal>
          <Eyebrow>UX perspective on Indian parking</Eyebrow>
        </Reveal>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center mt-2">
          <Reveal anim="ppSlideRight">
            <img src="/propark/ux-photos.png" alt="Real parking scenes in India"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <Heading heavy="Chaos" light="by numbers." size="text-3xl md:text-4xl" />
            <p className="mt-4 text-base leading-relaxed" style={{ color: TEXT_MUTED }}>
              More than finding a spot — a daily test of patience, intuition, and sometimes creativity.
            </p>
            <Note label="source: poidata.io · india" />
          </Reveal>
        </div>
      </section>

      {/* ══ 04  INFORMATION ARCHITECTURE ════════════════════════ */}
      <section className="py-16" style={{ background: DARK_MID }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Information Architecture</Eyebrow>
          <Heading heavy="How it all" light="connects." size="text-4xl md:text-5xl" />
          <p className="mt-3 text-base max-w-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
            Two parallel user journeys — Space Providers and Space Seekers — share a common trust layer
            that ties bookings, payments, and live status together.
          </p>
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <img src="/propark/ia.png" alt="Information Architecture"
            className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

      {/* ══ PRODUCT REVEAL strip ══════════════════════════════════ */}
      <Reveal anim="ppFadeIn">
        <div className="px-8 md:px-16 py-5 flex items-center gap-4" style={{ background: GOLD }}>
          <p className="font-hand text-2xl" style={{ color: DARK }}>and here's what we built →</p>
        </div>
      </Reveal>

      {/* ══ 05  FINAL PRODUCT ════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK }}>
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>The final product</Eyebrow>
            <Heading heavy="One week," light="twelve screens." size="text-4xl md:text-6xl" />
            <p className="mt-4 text-base max-w-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
              A peer-to-peer parking platform built to ease congestion in major Indian cities.
            </p>
            <Note label="built in 1 week · dark mode first" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <img src="/propark/product.png" alt="ProPark final product"
              className="w-full h-auto block"
              loading="lazy"
              style={{ animation: "ppFloat 5s ease-in-out infinite" }} />
          </Reveal>
        </div>
      </section>

      {/* ══ 06  ONBOARDING ═══════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK_MID }}>
        <div className="flex items-end justify-between gap-8 mb-8 flex-wrap">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Onboarding screens</Eyebrow>
            <Heading heavy="Zero" light="to parked." size="text-4xl md:text-6xl" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={80}>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: TEXT_MUTED }}>
              Phone number + OTP — minimal friction, maximum trust.
              Auto OTP detection means the process completes before you even look at the screen.
            </p>
          </Reveal>
        </div>
        <Reveal anim="ppFadeUp" delay={120}>
          <div className="max-w-2xl mx-auto">
            <img src="/propark/onboarding.png" alt="Onboarding screens"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* ══ 07  HOME SCREEN ══════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK }}>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          <Reveal anim="ppSlideRight">
            <div className="max-w-lg">
              <img src="/propark/home.png" alt="Home screen"
                className="w-full h-auto block rounded-2xl" loading="lazy" />
            </div>
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <Eyebrow>Home screen</Eyebrow>
            <Heading heavy="Your" light="dashboard." size="text-3xl md:text-4xl" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
              Vehicle-first: pick your car, search nearby spots, and see upcoming bookings — all in one glance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08  LOCATOR ══════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK_MID }}>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Parking locator</Eyebrow>
            <Heading heavy="Find" light="your spot." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
              Set date and time, explore an interactive map, compare spots by availability, rate, and rating.
              Full transparency before committing.
            </p>
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <div className="max-w-lg ml-auto">
              <img src="/propark/locator.png" alt="Parking locator screens"
                className="w-full h-auto block rounded-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 09  BOOKING ══════════════════════════════════════════ */}
      <section className="py-16" style={{ background: DARK }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Parking booking</Eyebrow>
          <Heading heavy="Lock" light="it in." size="text-4xl md:text-6xl" />
          <p className="mt-3 text-base max-w-lg" style={{ color: TEXT_MUTED }}>
            Space details, rates, fees, taxes — all calculated before payment.
            Confirmation prompt for an extra layer of security.
          </p>
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <div className="max-w-4xl mx-auto px-8 md:px-16">
            <img src="/propark/booking.png" alt="Booking screens"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* ══ 10  OTHER SCREENS ════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK_MID }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Other screens</Eyebrow>
            <Heading heavy="Everything" light="else." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-base leading-relaxed" style={{ color: TEXT_MUTED }}>
              Manage upcoming and past reservations. Space owners can track, unlist, or block availability.
              Vehicle and space management for both sides of the platform.
            </p>
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <div className="max-w-md ml-auto">
              <img src="/propark/other.png" alt="Other screens"
                className="w-full h-auto block rounded-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 11  NOTIFICATION ══════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: DARK }}>
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-10">
            <Eyebrow>Notification screen</Eyebrow>
            <Heading heavy="Live" light="activity." size="text-4xl md:text-6xl" />
            <p className="mt-4 text-base" style={{ color: TEXT_MUTED }}>
              Real-time parking countdown on the lock screen — leave on time, every time.
            </p>
            <Note label="live activity on lock screen" />
          </div>
        </Reveal>
        <Reveal anim="ppFadeUp" delay={100}>
          <div className="flex justify-center">
            <div className="w-full max-w-[220px]">
              <img src="/propark/notification.png" alt="Notification screen"
                className="w-full h-auto block"
                loading="lazy"
                style={{ animation: "ppFloat 6s ease-in-out infinite" }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ OUTCOMES ══════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 py-16" style={{ background: "#0C0B09" }}>
        <Reveal>
          <Eyebrow>Outcomes</Eyebrow>
          <Heading heavy="What we" light="shipped." size="text-5xl md:text-7xl" />
          <p className="mt-4 text-base max-w-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
            One week. One designer. A complete dual-sided platform — from blank canvas to working prototype.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <OutcomeCard icon="🔒" label="End-to-end booking flow with clear trust signals at every step"              delay={0}   />
          <OutcomeCard icon="👥" label="Dual persona system — Space Providers & Space Seekers — with shared goals"  delay={80}  />
          <OutcomeCard icon="🔔" label="Notification & past-bookings architecture for both user types"              delay={160} />
        </div>

        <Reveal anim="ppFadeUp" delay={200}>
          <div className="mt-6 rounded-2xl p-6 border relative overflow-hidden"
            style={{ background: DARK_CARD, borderColor: `rgba(242,192,64,0.15)` }}>
            <Sparkle color={GOLD} size={22} className="absolute top-4 right-4 opacity-30" />
            <p className="font-hand text-xl mb-2" style={{ color: TEXT_MUTED }}>in retrospect →</p>
            <p className="font-display italic text-xl leading-snug max-w-xl" style={{ color: TEXT }}>
              "A 1-week sprint taught me how to move fast <em>and</em> design with empathy.
              Constraints are just hidden design decisions."
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══ 12  FINAL SHOWCASE ════════════════════════════════════ */}
      <section className="py-16" style={{ background: DARK_MID }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Final showcase</Eyebrow>
          <Heading heavy="All screens," light="all at once." size="text-5xl md:text-7xl" />
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <img src="/propark/showcase.png" alt="ProPark — all screens showcase"
            className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

    </div>
  );
}
