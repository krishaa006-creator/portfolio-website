import React, { useEffect, useRef, useState } from "react";
import { Arrow, Sparkle } from "./Doodles";

/* ── light palette ── */
const BG      = "#F7F2E7";
const BG_ALT  = "#EDE8DA";
const CARD    = "#FFFFFF";
const CARD2   = "#FAF8F3";
const GOLD    = "#C8920A";   // amber-gold — legible on light bg
const GOLDBG  = "#F2C040";   // bright gold — for background strips / chips
const GOLDBG2 = "rgba(242,192,64,0.12)";
const TEXT    = "#1A1A1A";
const MUTED   = "rgba(26,26,26,0.55)";
const DIM     = "rgba(26,26,26,0.32)";
const BORDER  = "rgba(26,26,26,0.09)";

/* ── fade-up reveal ── */
function useFadeUp(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeUp();
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

function Section({ children, alt = false }) {
  return (
    <section style={{ background: alt ? BG_ALT : BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {children}
      </div>
    </section>
  );
}

function Label({ num, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-hand text-base" style={{ color: GOLD }}>{num}</span>
      <div className="h-px w-5" style={{ background: BORDER }} />
      <span className="text-[11px] tracking-[0.28em] uppercase font-semibold" style={{ color: GOLD }}>
        {children}
      </span>
    </div>
  );
}

function H2({ children, size = "text-4xl md:text-5xl" }) {
  return (
    <h2 className={`font-display font-semibold leading-[1.06] tracking-tight ${size}`}
      style={{ color: TEXT }}>
      {children}
    </h2>
  );
}

function Note({ children }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <Arrow color={GOLD} width={36} />
      <span className="font-hand italic text-sm" style={{ color: GOLD }}>{children}</span>
    </div>
  );
}

function Quote({ children }) {
  return (
    <blockquote className="border-l-2 pl-4 py-1 my-3"
      style={{ borderColor: `rgba(200,146,10,0.35)` }}>
      <p className="font-display italic text-sm leading-relaxed" style={{ color: MUTED }}>
        "{children}"
      </p>
    </blockquote>
  );
}

function Stat({ value, label, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-[20px] p-5 border h-full shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
        <p className="font-propark font-bold text-3xl md:text-4xl leading-none" style={{ color: GOLD }}>{value}</p>
        <p className="mt-2 text-xs leading-snug" style={{ color: MUTED }}>{label}</p>
      </div>
    </Reveal>
  );
}

function Chip({ children, gold = false }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium"
      style={gold
        ? { background: GOLDBG2, color: GOLD, borderColor: "rgba(200,146,10,0.2)" }
        : { background: "rgba(26,26,26,0.04)", color: MUTED, borderColor: BORDER }
      }>
      {children}
    </span>
  );
}

/* ══════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════ */
export default function ProParkCaseStudy() {
  return (
    <div>

      {/* ── 01 CONTEXT ─────────────────────────────────── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Label num="01" children="Context" />
            <H2>The <em className="font-light italic" style={{ color: GOLD }}>problem space.</em></H2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: MUTED }}>
              Urban areas face a growing parking shortage — limited public spaces, endless circling,
              and millions of private spots sitting completely idle. These spaces are a missed
              <strong style={{ color: TEXT }}> opportunity for both income and utility.</strong>
            </p>
            <Note>the gap ProPark was designed to fill</Note>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/propark/context-bg.png" alt="Urban scene"
                className="w-full h-auto block border-t-[#d4ccc400] border-r-[#d4ccc400] border-b-[#d4ccc400] border-l-[#d4ccc400]" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-10">
          <Stat value="1:3650"   label="parking spots per car in Indian cities"               delay={0}   />
          <Stat value="20+ min"   label="average time lost circling for a spot per trip"       delay={60}  />
          <Stat value="₹0 earned" label="from millions of idle private driveways every day"   delay={120} />
        </div>

        <Reveal delay={80}>
          <div className="mt-10 rounded-[20px] p-6 border shadow-sm" style={{ background: CARD2, borderColor: BORDER }}>
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: DIM }}>
              Design brief
            </p>
            <p className="font-display italic text-base leading-relaxed" style={{ color: MUTED }}>
              How might we design a peer-to-peer parking app that{" "}
              <strong style={{ color: TEXT }}>makes parking spaces more accessible</strong>{" "}
              in urban spaces — by unlocking unused private spots and{" "}
              <strong style={{ color: TEXT }}>turning idle space into opportunity</strong>?
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── STAT CALLOUT ─────────────────────────────── */}
      <div style={{ background: GOLDBG, borderTop: `1px solid rgba(26,26,26,0.08)`, borderBottom: `1px solid rgba(26,26,26,0.08)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 text-center md:text-left">
            <p className="font-propark font-bold leading-none"
              style={{ fontSize: "clamp(3.5rem,10vw,7rem)", color: TEXT, letterSpacing: "-0.03em" }}>
              1:3650
            </p>
            <p className="font-hand text-lg mt-1" style={{ color: "rgba(26,26,26,0.5)" }}>
              cars to parking spots — India
            </p>
          </div>
          <div className="hidden md:block w-px self-stretch opacity-20" style={{ background: TEXT }} />
          <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(26,26,26,0.65)" }}>
            Parking in India is more than a logistics problem — it's a daily friction point baked
            into urban life. ProPark set out to fix it from the inside out.
          </p>
        </div>
      </div>

      {/* ── 02 USERS ──────────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="02" children="Empathising with users" />
          <H2>Two sides of <em style={{ color: GOLD }}>the same problem.</em></H2>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: MUTED }}>
            ProPark serves two distinct groups with very different goals — but the same core need:
            trust, reliability, and ease.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/propark/personas.png" alt="Personas" className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            {
              emoji: "🏠", title: "Residents", role: "The Space Providers",
              intro: "Urban homeowners with unused driveways near busy commercial zones — time-rich in space, time-poor in trust.",
              quotes: [
                "I want passive income, but I worry about strangers damaging my property.",
                "Trust is the big issue — how do I know they won't misuse the space?",
              ],
              green: ["Passive income", "Space utilisation", "Flexible control"],
              red:   ["Trust & security", "Liability concerns", "Inflexibility"],
            },
            {
              emoji: "🚗", title: "Drivers", role: "The Space Seekers",
              intro: "Urban commuters stuck in the circling loop — time lost, fuel wasted, patience gone.",
              quotes: [
                "I wish I could park in that empty compound nearby.",
                "I avoid certain areas entirely because parking there is a nightmare.",
              ],
              green: ["Convenience", "Real-time availability", "Cost savings"],
              red:   ["Unsafe spots", "Outdated payment", "Inflexible bookings"],
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="rounded-[24px] border overflow-hidden h-full shadow-sm"
                style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b"
                  style={{ background: CARD2, borderColor: BORDER }}>
                  <div>
                    <p className="font-display font-semibold text-2xl" style={{ color: TEXT }}>{p.title}</p>
                    <p className="font-display italic text-base" style={{ color: GOLD }}>{p.role}</p>
                  </div>
                  <span className="text-3xl">{p.emoji}</span>
                </div>
                <div className="px-6 py-5" style={{ background: CARD }}>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{p.intro}</p>
                  {p.quotes.map((q, qi) => <Quote key={qi}>{q}</Quote>)}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold mb-2" style={{ color: DIM }}>Motivators</p>
                      <div className="flex flex-wrap gap-1.5">{p.green.map(t => <Chip key={t} gold>{t}</Chip>)}</div>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold mb-2" style={{ color: DIM }}>Barriers</p>
                      <div className="flex flex-wrap gap-1.5">{p.red.map(t => <Chip key={t}>{t}</Chip>)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-4 rounded-[20px] px-6 py-4 border flex flex-wrap items-center gap-3"
            style={{ background: CARD, borderColor: BORDER }}>
            <p className="text-[10px] tracking-widest uppercase font-semibold shrink-0" style={{ color: DIM }}>
              Shared design goals
            </p>
            {["Trust by design", "Security-first", "Clear scheduling", "Transparent pricing"].map(g => (
              <Chip key={g} gold>{g}</Chip>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 03 UX PERSPECTIVE ─────────────────────────── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/propark/ux-photos.png" alt="Real parking scenes"
                className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Label num="03" children="UX perspective" />
            <H2>Chaos <em style={{ color: GOLD }}>by design.</em></H2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              Photographing real parking scenes in Bangalore revealed how deeply the friction is
              baked in — and exactly where design could intervene most effectively.
            </p>
            <Note>field observation · Bangalore</Note>
          </Reveal>
        </div>
      </Section>

      {/* ── 04 ARCHITECTURE ───────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="04" children="Information Architecture" />
          <H2>Mapping the <em style={{ color: GOLD }}>whole system.</em></H2>
          <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Two parallel journeys — Providers and Seekers — unified by a shared trust and booking layer.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/propark/ia.png" alt="Information Architecture" className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>
      </Section>

      {/* ── PRODUCT DIVIDER ───────────────────────────── */}
      <div style={{ background: GOLDBG, borderTop: `1px solid rgba(26,26,26,0.08)`, borderBottom: `1px solid rgba(26,26,26,0.08)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3">
          <Sparkle color={TEXT} size={16} />
          <p className="font-hand text-xl" style={{ color: TEXT }}>and here's what we built →</p>
        </div>
      </div>

      {/* ── 05 PRODUCT ────────────────────────────────── */}
      <Section>
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <Reveal>
            <Label num="05" children="Final product" />
            <H2>One week.<br /><em style={{ color: GOLD }}>Twelve screens.</em></H2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              A complete peer-to-peer parking platform — dual persona, end-to-end booking, and
              live activity built in a 1-week solo sprint.
            </p>
            <Note>1-week sprint · solo UX</Note>
          </Reveal>
          <Reveal delay={80}>
            <img src="/propark/product.png" alt="ProPark mockup"
              className="w-full h-auto block" loading="lazy"
              style={{ animation: "ppFloat 5s ease-in-out infinite" }} />
          </Reveal>
        </div>
        <style>{`@keyframes ppFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
      </Section>

      {/* ── 06 SCREENS ────────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="06" children="All screens" />
          <H2>The flows, <em style={{ color: GOLD }}>in full.</em></H2>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid md:grid-cols-[3fr_2fr] gap-6 items-center">
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/propark/onboarding.png" alt="Onboarding" className="w-full h-auto block" loading="lazy" />
            </div>
            <div>
              <p className="font-display font-semibold text-xl" style={{ color: TEXT }}>Onboarding</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                Phone number + auto OTP. Zero friction from first tap to account creation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-5 grid md:grid-cols-2 gap-4">
            {[
              { src: "/propark/home.png",    label: "Home screen",     desc: "Vehicle-first dashboard — pick your car, see upcoming bookings, search nearby." },
              { src: "/propark/locator.png", label: "Parking locator", desc: "Set time, explore the map, compare spots by availability, rate, and distance." },
            ].map(s => (
              <div key={s.label} className="rounded-[24px] border overflow-hidden shadow-sm"
                style={{ borderColor: BORDER, background: CARD }}>
                <img src={s.src} alt={s.label} className="w-full h-auto block" loading="lazy" />
                <div className="px-5 py-4 border-t" style={{ borderColor: BORDER }}>
                  <p className="font-display font-semibold text-base" style={{ color: TEXT }}>{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {[
              { src: "/propark/booking.png",      label: "Booking",      desc: "Full fare breakdown before payment — no surprises." },
              { src: "/propark/notification.png", label: "Live activity", desc: "Countdown on lock screen — leave on time, every time." },
              { src: "/propark/other.png",        label: "My spaces",    desc: "Manage, block, or list spaces as a resident provider." },
            ].map(s => (
              <div key={s.label} className="rounded-[24px] border overflow-hidden shadow-sm"
                style={{ borderColor: BORDER, background: CARD }}>
                <img src={s.src} alt={s.label} className="w-full h-auto block" loading="lazy" />
                <div className="px-4 py-3 border-t" style={{ borderColor: BORDER }}>
                  <p className="font-display font-semibold text-sm" style={{ color: TEXT }}>{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 07 SHOWCASE ───────────────────────────────── */}
      <section style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Reveal className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-6">
          <Label num="07" children="Full showcase" />
          <H2>All screens, <em style={{ color: GOLD }}>all at once.</em></H2>
        </Reveal>
        <Reveal delay={60}>
          <img src="/propark/showcase.png" alt="All screens" className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </section>

      {/* ── 08 OUTCOMES ───────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="08" children="Outcomes" />
          <H2>What shipped, <em style={{ color: GOLD }}>and what I learned.</em></H2>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: "🔒", title: "End-to-end trust",   body: "Booking flow with explicit trust signals, fare breakdowns, and confirmation gates at every step." },
            { icon: "👥", title: "Dual persona system", body: "Providers and Seekers with divergent flows, converging on the same trust and booking layer." },
            { icon: "🔔", title: "Live activity",       body: "Real-time parking countdown on the iOS lock screen — tackling the most common user anxiety." },
          ].map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <div className="rounded-[24px] border p-6 h-full shadow-sm"
                style={{ background: CARD, borderColor: BORDER }}>
                <span className="text-2xl">{o.icon}</span>
                <p className="mt-3 font-display font-semibold text-base" style={{ color: TEXT }}>{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-4 rounded-[24px] p-6 border shadow-sm"
            style={{ background: CARD, borderColor: `rgba(200,146,10,0.15)` }}>
            <p className="font-hand text-base mb-2" style={{ color: MUTED }}>in retrospect →</p>
            <p className="font-display italic text-xl leading-snug max-w-2xl" style={{ color: TEXT }}>
              "A 1-week sprint taught me how to move fast <em>and</em> design with care.
              Constraints aren't blockers — they're just hidden design decisions."
            </p>
          </div>
        </Reveal>
      </Section>

    </div>
  );
}
