import React, { useEffect, useRef, useState, useCallback } from "react";
import { Arrow } from "./Doodles";

const ACCENT = "#E8532C";
const PEACH  = "#F3E7D9";
const PAGE   = "#F7F2E7";
const CREAM  = "#FFFBF2";
const INK    = "#1A1A1A";

/* ── Global keyframes injected once ──────────────── */
const KEYFRAMES = `
@keyframes ppFloat {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
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
@keyframes ppBarGrow {
  from { width:0; }
  to   { width:100%; }
}
@keyframes ppChipPop {
  0%   { opacity:0; transform:scale(0.7); }
  70%  { transform:scale(1.08); }
  100% { opacity:1; transform:scale(1); }
}
`;

function injectKeyframes() {
  if (document.getElementById("pp-keyframes")) return;
  const s = document.createElement("style");
  s.id = "pp-keyframes";
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
}

/* ── Scroll reveal hook ───────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref  = useRef(null);
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

/* ── Counter hook ─────────────────────────────────── */
function useCountUp(target, duration = 1800) {
  const ref     = useRef(null);
  const [val, setVal] = useState(0);
  const [go, setGo]   = useState(false);
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
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [go, target, duration]);
  return [ref, val, go];
}

/* ── Reveal wrapper ───────────────────────────────── */
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

/* ── Arrow annotation ─────────────────────────────── */
function Note({ label, color = ACCENT }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <Arrow color={color} width={48} />
      <span className="font-hand italic text-base" style={{ color }}>{label}</span>
    </div>
  );
}

/* ── Section eyebrow ──────────────────────────────── */
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

/* ── Compound heading ─────────────────────────────── */
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
  const [statRef, statVal, statGo] = useCountUp(3650);

  return (
    <div>

      {/* ══ 01  CONTEXT ══════════════════════════════
          Text left ~55%, image right ~45%            */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="grid md:grid-cols-[11fr_9fr] gap-12 items-start">

          <Reveal anim="ppSlideRight">
            <Eyebrow>Context Setting</Eyebrow>
            <Heading heavy="THE" light="problem space." size="text-5xl md:text-7xl" />
            <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/70 max-w-lg">
              Urban areas face a growing parking shortage — limited public spaces, endless circling,
              and many private spots sitting empty and inaccessible.
            </p>
            <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">
              These idle spaces are a missed opportunity for both income and utility.
            </p>

            <div className="mt-12">
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
                  <div key={i} className="pl-4 border-l-2 transition-all duration-300"
                    style={{ borderColor: i === 0 ? ACCENT : `${INK}22` }}>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{text}</p>
                    <Note label={note} color={color} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal anim="ppSlideLeft" delay={120}>
            <div className="pt-10">
              <img src="/propark/context-bg.png" alt="Urban building with car"
                className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>

        </div>
      </section>

      {/* ══ STAT MOMENT ════════════════════════════════ */}
      <div className="border-y border-[#1A1A1A]/10" style={{ background: PEACH }}>
        <div className="px-8 md:px-16 py-14 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div ref={statRef} className="shrink-0 text-center md:text-left">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#1A1A1A]/40 mb-1">India parking reality</p>
            <p className="font-display font-black leading-none"
              style={{
                fontSize: "clamp(4.5rem,13vw,9rem)",
                color: ACCENT,
                animation: statGo ? "ppCountUp 700ms cubic-bezier(.22,1,.36,1) both" : "none",
              }}>
              1:{statVal.toLocaleString()}
            </p>
            <p className="font-hand text-lg text-[#1A1A1A]/55 mt-1">parking spots per car</p>
          </div>
          <div className="hidden md:block w-px self-stretch bg-[#1A1A1A]/12" />
          <Reveal anim="ppFadeUp">
            <p className="text-base leading-relaxed text-[#1A1A1A]/65 max-w-sm">
              Parking in India is more than just finding a spot — it's a daily test of patience, intuition,
              and <em>jugaad</em>. The scarcity makes it chaotic and deeply frustrating.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ══ 02  EMPATHISING ════════════════════════════
          Full-width persona image, then 2-col cards    */}
      <section className="py-16" style={{ background: PAGE }}>
        <Reveal>
          <div className="mb-10 overflow-hidden">
            <img src="/propark/personas.png" alt="Persona portraits"
              className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        <div className="px-8 md:px-16">
          <Reveal>
            <Eyebrow>Empathising with Our Users</Eyebrow>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-2">
            {[
              {
                title: "Residents",
                role: "The Space Providers",
                intro: "Urban residential areas have unused parking spaces during most of the day — often close to crowded commercial zones that desperately lack parking.",
                quotes: [
                  "I want to make extra income, but I worry about strangers damaging my property.",
                  "Trust is a big issue — how do I know the person parking won't misuse the space?",
                ],
                drivers: ["Passive income", "Better space utilization", "Control availability"],
                inhibitors: ["Trust & security concerns", "Liability issues", "Lack of flexibility"],
              },
              {
                title: "Drivers",
                role: "The Space Seekers",
                intro: "In crowded Indian cities, finding parking near commercial areas is a nightmare. During peak hours, limited spots vanish, leaving drivers in a frustrated endless loop.",
                quotes: [
                  "I wish I could park in that empty compound. I'm tired of this wild goose chase.",
                  "I avoid certain areas altogether because parking there is a nightmare every time.",
                ],
                drivers: ["Convenience & proximity", "Real-time availability", "Cost-effectiveness"],
                inhibitors: ["Unsafe conditions", "Outdated payments", "Inflexible bookings"],
              },
            ].map((p, idx) => (
              <Reveal key={p.title} anim="ppFadeUp" delay={idx * 100}>
                <div className="rounded-3xl overflow-hidden border border-[#1A1A1A]/10
                  transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
                  <div className="px-6 pt-5 pb-4" style={{ background: PEACH }}>
                    <p className="font-display text-3xl font-black tracking-tight">{p.title}</p>
                    <p className="font-display italic text-lg" style={{ color: ACCENT }}>{p.role}</p>
                  </div>
                  <div className="p-6" style={{ background: CREAM }}>
                    <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-4">{p.intro}</p>
                    <div className="space-y-2 mb-5">
                      {p.quotes.map((q, i) => (
                        <p key={i} className="font-display italic text-[1.05rem] leading-snug text-[#1A1A1A]">
                          <span style={{ color: ACCENT }}>"</span>{q}<span style={{ color: ACCENT }}>"</span>
                        </p>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="uppercase tracking-widest text-[#1A1A1A]/35 mb-2">Motivators</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.drivers.map((t, ti) => (
                            <span key={t} className="px-2.5 py-1 rounded-full text-xs"
                              style={{
                                background: PEACH,
                                animation: `ppChipPop 400ms ${ti * 60 + 200}ms both`,
                              }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="uppercase tracking-widest text-[#1A1A1A]/35 mb-2">Inhibitors</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.inhibitors.map((t, ti) => (
                            <span key={t}
                              className="px-2.5 py-1 rounded-full border border-[#1A1A1A]/15 text-xs bg-white/70"
                              style={{ animation: `ppChipPop 400ms ${ti * 60 + 300}ms both` }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal anim="ppFadeUp" delay={80}>
            <div className="mt-5 rounded-2xl px-6 py-4" style={{ background: ACCENT }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/50 text-center mb-2.5">
                Common Design Goals
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {["Design for Trust", "Design for Security", "Systematic Scheduling", "Defined Pricing Models"].map((g, gi) => (
                  <span key={g}
                    className="px-3.5 py-1.5 rounded-full text-sm text-white font-medium border border-white/25
                      transition-colors duration-200 hover:bg-white/25 cursor-default"
                    style={{ background: "rgba(255,255,255,0.12)", animation: `ppChipPop 350ms ${gi * 70 + 150}ms both` }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 03  UX PERSPECTIVE ══════════════════════════
          Image 60% left, text 40% right               */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <Reveal>
          <Eyebrow>UX Perspective on Indian Parking</Eyebrow>
        </Reveal>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center mt-2">
          <Reveal anim="ppSlideRight">
            <img src="/propark/ux-photos.png" alt="Real parking scenes in India"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <Heading heavy="CHAOS" light="by numbers." size="text-3xl md:text-4xl" />
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70">
              More than finding a spot — a daily test of patience, intuition, and sometimes creativity.
            </p>
            <Note label="source: poidata.io · india" color="#2D5F3F" />
          </Reveal>
        </div>
      </section>

      {/* ══ 04  INFORMATION ARCHITECTURE ════════════════
          Header padded, diagram full-width             */}
      <section className="py-16" style={{ background: PAGE }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Information Architecture</Eyebrow>
          <Heading heavy="HOW IT ALL" light="connects." size="text-4xl md:text-5xl" />
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <img src="/propark/ia.png" alt="Information Architecture"
            className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

      {/* ══ PRODUCT REVEAL — orange accent strip ════════ */}
      <Reveal anim="ppFadeIn">
        <div className="px-8 md:px-16 py-5 flex items-center gap-4" style={{ background: ACCENT }}>
          <p className="font-hand text-2xl text-white">and here's what we built →</p>
        </div>
      </Reveal>

      {/* ══ 05  FINAL PRODUCT ═══════════════════════════
          Text left, product image floats right         */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>The Final Product</Eyebrow>
            <Heading heavy="ONE WEEK," light="twelve screens." size="text-4xl md:text-6xl" />
            <p className="mt-4 text-base text-[#1A1A1A]/60 max-w-sm leading-relaxed">
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

      {/* ══ 06  ONBOARDING ══════════════════════════════
          Heading + desc side by side, image full below  */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="flex items-end justify-between gap-8 mb-10 flex-wrap">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Onboarding Screens</Eyebrow>
            <Heading heavy="ZERO" light="to parked." size="text-4xl md:text-6xl" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={80}>
            <p className="text-base leading-relaxed text-[#1A1A1A]/60 max-w-sm">
              Phone number + OTP — minimal friction, maximum trust. Auto OTP detection means the process
              completes before you even look at the screen.
            </p>
          </Reveal>
        </div>
        <Reveal anim="ppFadeUp" delay={120}>
          <div className="max-w-4xl mx-auto">
            <img src="/propark/onboarding.png" alt="Onboarding screens"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* ══ 07  HOME SCREEN ═════════════════════════════
          Image 60% left, text 40% right               */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          <Reveal anim="ppSlideRight">
            <img src="/propark/home.png" alt="Home screen"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <Eyebrow>Home Screen</Eyebrow>
            <Heading heavy="YOUR" light="dashboard." size="text-3xl md:text-4xl" />
            <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/65">
              Vehicle-first: pick your car, search nearby spots, and see upcoming bookings — all in one glance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08  LOCATOR ═════════════════════════════════
          Text 40% left, image 60% right               */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Parking Locator</Eyebrow>
            <Heading heavy="FIND" light="your spot." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/65">
              Set date and time, explore an interactive map, compare spots by availability, rate, and rating.
              Full transparency before committing.
            </p>
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <img src="/propark/locator.png" alt="Parking locator screens"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ══ 09  BOOKING ═════════════════════════════════
          Text header, image full-width below           */}
      <section className="py-16" style={{ background: PEACH }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Parking Booking</Eyebrow>
          <Heading heavy="LOCK" light="it in." size="text-4xl md:text-6xl" />
          <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-lg">
            Space details, rates, fees, taxes — all calculated before payment.
            Confirmation prompt for an extra layer of security.
          </p>
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <img src="/propark/booking.png" alt="Booking screens"
            className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

      {/* ══ 10  OTHER SCREENS ════════════════════════════
          Text 50% left, image 50% right                */}
      <section className="px-8 md:px-16 py-16" style={{ background: PAGE }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal anim="ppSlideRight">
            <Eyebrow>Other Screens</Eyebrow>
            <Heading heavy="EVERYTHING" light="else." size="text-4xl md:text-5xl" />
            <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/65">
              Manage upcoming and past reservations. Space owners can track, unlist, or block availability.
              Vehicle and space management for both sides of the platform.
            </p>
          </Reveal>
          <Reveal anim="ppSlideLeft" delay={100}>
            <img src="/propark/other.png" alt="Other screens"
              className="w-full h-auto block rounded-2xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ══ 11  NOTIFICATION ════════════════════════════
          Text centred, portrait phone centred below    */}
      <section className="px-8 md:px-16 py-16" style={{ background: PEACH }}>
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-10">
            <Eyebrow>Notification Screen</Eyebrow>
            <Heading heavy="LIVE" light="Activity." size="text-4xl md:text-6xl" />
            <p className="mt-4 text-base text-[#1A1A1A]/60">
              Real-time parking countdown on the lock screen — leave on time, every time.
            </p>
            <Note label="live activity on lock screen" />
          </div>
        </Reveal>
        <Reveal anim="ppFadeUp" delay={100}>
          <div className="flex justify-center">
            <div className="w-full max-w-[260px]">
              <img src="/propark/notification.png" alt="Notification screen"
                className="w-full h-auto block"
                loading="lazy"
                style={{ animation: "ppFloat 6s ease-in-out infinite" }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ 12  FINAL SHOWCASE ══════════════════════════
          Full-bleed showcase                           */}
      <section className="py-16" style={{ background: PAGE }}>
        <Reveal className="px-8 md:px-16 mb-8">
          <Eyebrow>Final Showcase</Eyebrow>
          <Heading heavy="ALL SCREENS," light="all at once." size="text-5xl md:text-7xl" />
        </Reveal>
        <Reveal anim="ppFadeUp" delay={80}>
          <img src="/propark/showcase.png" alt="ProPark — all screens showcase"
            className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

    </div>
  );
}
