import React, { useEffect, useRef, useState } from "react";

/* ── palette ── */
const BG       = "#F7F2E7";
const BG_ALT   = "#EDE8DA";
const CARD     = "#FFFFFF";
const CARD2    = "#FAF8F3";
const BLUE     = "#1B3F72";
const BLUE_L   = "#4A6FA5";
const BLUEBG   = "rgba(27,63,114,0.12)";
const BLUEBG2  = "rgba(27,63,114,0.07)";
const TEXT     = "#1A1A1A";
const MUTED    = "rgba(26,26,26,0.55)";
const DIM      = "rgba(26,26,26,0.32)";
const BORDER   = "rgba(26,26,26,0.09)";

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
      <span className="font-propark text-sm font-medium" style={{ color: BLUE }}>{num}</span>
      <div className="h-px w-5" style={{ background: BORDER }} />
      <span className="text-[11px] tracking-[0.28em] uppercase font-semibold" style={{ color: BLUE }}>
        {children}
      </span>
    </div>
  );
}

function H2({ children, size = "text-4xl md:text-5xl" }) {
  return (
    <h2 className={`font-propark font-semibold leading-[1.06] tracking-tight ${size}`}
      style={{ color: TEXT }}>
      {children}
    </h2>
  );
}

/* Arrow SVG — mirrors ProPark's Note annotation */
function ArrowBlue({ width = 36 }) {
  return (
    <svg width={width} height="14" viewBox="0 0 36 14" fill="none">
      <path d="M0 7h32M26 1l6 6-6 6" stroke={BLUE_L} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Note({ children }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <ArrowBlue width={36} />
      <span className="font-propark italic text-sm" style={{ color: BLUE_L, fontWeight: 300 }}>{children}</span>
    </div>
  );
}

function Quote({ children }) {
  return (
    <blockquote className="border-l-2 pl-4 py-1 my-3"
      style={{ borderColor: "rgba(27,63,114,0.3)" }}>
      <p className="font-propark italic text-sm leading-relaxed" style={{ color: MUTED, fontWeight: 300 }}>
        "{children}"
      </p>
    </blockquote>
  );
}

function Chip({ children, blue = false }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium"
      style={blue
        ? { background: BLUEBG2, color: BLUE, borderColor: "rgba(27,63,114,0.2)" }
        : { background: "rgba(26,26,26,0.04)", color: MUTED, borderColor: BORDER }
      }>
      {children}
    </span>
  );
}

function Img({ src, alt, caption, className = "" }) {
  return (
    <div className={className}>
      <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
      {caption && <p className="mt-2 text-xs text-center" style={{ color: DIM }}>{caption}</p>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════ */
export default function AlstomCaseStudy() {
  return (
    <div>

      {/* ── 01 THE TEAM ─────────────────────────────────── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Label num="01" children="The team" />
            <H2>Five people. <em className="font-light italic" style={{ color: BLUE_L }}>One rail system.</em></H2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: MUTED }}>
              A cross-disciplinary team of designers, researchers, and engineers working in collaboration
              with <strong style={{ color: TEXT }}>Alstom</strong> and{" "}
              <strong style={{ color: TEXT }}>Strate School of Design</strong> over 16 weeks.
            </p>
            <Note>team · Design Research + Service Design</Note>

            <div className="mt-8 flex flex-col gap-2">
              {[
                { name: "Krishaa",         role: "UX Research, CMF, Interior Visualisation & Service Design", me: true },
                { name: "Adrika Molakala", role: "Team Lead · UX Research, Storyboarding, UI Design, Service Design" },
                { name: "Varun RSS",       role: "Sketching, Ideation, 3D Modelling & Post Processing" },
                { name: "Pranjal Daga",    role: "Branding & Visual Design" },
                { name: "Shashank B.",     role: "Engineering & 3D Modelling" },
              ].map(m => (
                <div key={m.name} className="flex items-start gap-3 px-4 py-3 rounded-[14px] border"
                  style={{ background: m.me ? BLUEBG2 : CARD, borderColor: m.me ? "rgba(27,63,114,0.2)" : BORDER }}>
                  <div className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]"
                    style={{ background: m.me ? BLUE : DIM }} />
                  <div>
                    <span className="font-propark font-semibold text-sm" style={{ color: m.me ? BLUE : TEXT }}>{m.name}</span>
                    <span className="text-xs ml-2" style={{ color: MUTED }}>{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/alstom/team-photo.png" alt="The team" className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── 02 CONTEXT ──────────────────────────────────── */}
      <Section alt>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/alstom/negative-narratives.png" alt="Negative narratives" className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Label num="02" children="Context" />
            <H2>The <em className="font-light italic" style={{ color: BLUE_L }}>problem space.</em></H2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              Indian Railways carry millions daily — but the experience is defined by{" "}
              <strong style={{ color: TEXT }}>overcrowding, hygiene failures, unsafe boarding</strong>, and
              a deep sense that the train is the last resort, not a first choice.
            </p>
            <Note>field observation · Bangalore suburban rail</Note>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-10 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/research-cards.png" alt="Research insights" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-2 text-xs text-center" style={{ color: DIM }}>
            Research synthesis across waiting, boarding, the journey, and exiting the station
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 rounded-[20px] p-6 border shadow-sm" style={{ background: CARD, borderColor: "rgba(27,63,114,0.15)" }}>
            <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: DIM }}>
              Industry brief from Alstom
            </p>
            <p className="font-propark italic text-base leading-relaxed" style={{ color: MUTED, fontWeight: 300 }}>
              Commuter of the future in Bangalore by 2030: Towards{" "}
              <strong style={{ color: TEXT }}>social inclusivity through sustainable mobility</strong>{" "}
              — connecting city centre to suburban areas, exploring an{" "}
              <strong style={{ color: TEXT }}>inclusive city case</strong> facing urbanisation with social,
              environmental &amp; economic challenge.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── STAT CALLOUT ────────────────────────────────── */}
      <div style={{ background: BLUE, borderTop: `1px solid rgba(0,0,0,0.12)`, borderBottom: `1px solid rgba(0,0,0,0.12)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 text-center md:text-left">
            <p className="font-propark font-bold leading-none"
              style={{ fontSize: "clamp(3.5rem,10vw,7rem)", color: "#fff", letterSpacing: "-0.03em" }}>
              2030
            </p>
            <p className="font-propark text-base mt-1" style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
              Bangalore's suburban rail horizon
            </p>
          </div>
          <div className="hidden md:block w-px self-stretch opacity-20" style={{ background: "#fff" }} />
          <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Shortlisted by Alstom for further development — Namma Sarathi set out to prove
            that inclusive design and enjoyable commuting are not contradictions.
          </p>
        </div>
      </div>

      {/* ── 03 USERS ────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="03" children="Empathising with users" />
          <H2>Two commuters. <em style={{ color: BLUE_L }}>One system.</em></H2>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Bangalore's rail must serve both the IT professional heading to Whitefield and
            the factory worker commuting in from Tumkur — with radically different needs.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/commute-map.png" alt="Bangalore commute patterns" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-2 text-xs text-center" style={{ color: DIM }}>
            White collar commuters cluster inside Bengaluru's ring; blue collar workers radiate in from surrounding towns
          </p>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            {
              emoji: "💼", title: "White Collared Worker", role: "The Comfort Seeker",
              intro: "Bangalore's IT crowd prefer amenity-rich suburbs and commute cityward a few days a week.",
              quotes: [
                "I want a comfortable commute and I prefer to work on the go sometimes.",
                "Status and convenience matter — I want the commute to feel premium.",
              ],
              green: ["Comfort", "Time", "Convenience", "Status"],
              grey:  ["Overcrowding", "No work space", "Unpredictability"],
            },
            {
              emoji: "🏗️", title: "Blue Collared Worker", role: "The Reliable Commuter",
              intro: "Factory workers from nearby towns commute every day — sometimes weekends too.",
              quotes: [
                "I want a cost friendly option that's on time, or else I lose my daily wage.",
                "I need it to connect my town directly — autos to the station eat my money.",
              ],
              green: ["Cost", "Time", "Connectivity", "Convenience"],
              grey:  ["High fares", "Remote stations", "Seat availability"],
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="rounded-[24px] border overflow-hidden h-full shadow-sm" style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b"
                  style={{ background: CARD2, borderColor: BORDER }}>
                  <div>
                    <p className="font-propark font-semibold text-2xl" style={{ color: TEXT }}>{p.title}</p>
                    <p className="font-propark italic text-base" style={{ color: BLUE_L, fontWeight: 300 }}>{p.role}</p>
                  </div>
                  <span className="text-3xl">{p.emoji}</span>
                </div>
                <div className="px-6 py-5" style={{ background: CARD }}>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{p.intro}</p>
                  {p.quotes.map((q, qi) => <Quote key={qi}>{q}</Quote>)}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold mb-2" style={{ color: DIM }}>Priorities</p>
                      <div className="flex flex-wrap gap-1.5">{p.green.map(t => <Chip key={t} blue>{t}</Chip>)}</div>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase font-semibold mb-2" style={{ color: DIM }}>Pain points</p>
                      <div className="flex flex-wrap gap-1.5">{p.grey.map(t => <Chip key={t}>{t}</Chip>)}</div>
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
            {["Dignity in transit", "Predictable timing", "Affordable access", "Seat availability"].map(g => (
              <Chip key={g} blue>{g}</Chip>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 04 DIVERSITY GAP ─────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="04" children="Research insight" />
          <H2>The diversity gap <em style={{ color: BLUE_L }}>in public transit.</em></H2>
          <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Step-by-step journey mapping across three modes exposed every point where public
            transport loses commuters to personal mobility.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Img src="/alstom/journey-map-1.png" alt="Journey comparison part 1"
              caption="From identifying a route to boarding — three very different stories" />
            <Img src="/alstom/journey-map-2.png" alt="Journey comparison part 2"
              caption="Finding space, exiting, and last-mile — where the train consistently fails" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { aspect: "Control",       con: "Fixed, no personalisation",    pro: "Full customisation" },
              { aspect: "Comfort",       con: "Shared, static, compromised",  pro: "Private, adjustable" },
              { aspect: "Functionality", con: "Limited activity support",     pro: "Multi-purpose" },
              { aspect: "Reliability",   con: "Inconsistent experience",      pro: "Predictable service" },
              { aspect: "User Agency",   con: "Passive passenger role",       pro: "Active journey mgmt" },
            ].map(r => (
              <div key={r.aspect} className="rounded-[16px] border p-3 shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
                <p className="font-propark font-semibold text-xs mb-2" style={{ color: TEXT }}>{r.aspect}</p>
                <p className="text-[10px] leading-snug mb-1.5" style={{ color: MUTED }}>{r.con}</p>
                <div className="rounded px-2 py-1" style={{ background: BLUEBG2 }}>
                  <p className="text-[10px] font-medium leading-snug" style={{ color: BLUE }}>{r.pro}</p>
                </div>
              </div>
            ))}
          </div>
          <Note>drives user preference toward personal mobility</Note>
        </Reveal>
      </Section>

      {/* ── 05 SYSTEM MAPPING ────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="05" children="Systems thinking" />
          <H2>Mapping <em style={{ color: BLUE_L }}>the whole system.</em></H2>
          <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Service ecosystem mapping exposed stakeholder interdependencies, process flows, and
            service gaps — across five zones from ticket purchase to exit.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/system-map.png" alt="Full service system map" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-2 text-xs text-center" style={{ color: DIM }}>
            Five zones: buying the ticket → entering the train → boarding → in the train → exiting
          </p>
        </Reveal>
      </Section>

      {/* ── PRODUCT DIVIDER ─────────────────────────────── */}
      <div style={{ background: BLUE, borderTop: `1px solid rgba(0,0,0,0.1)`, borderBottom: `1px solid rgba(0,0,0,0.1)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3">
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>✦</span>
          <p className="font-propark text-base text-white" style={{ fontWeight: 400 }}>and here's what we designed →</p>
        </div>
      </div>

      {/* ── 06 BOARDING ─────────────────────────────────── */}
      <Section alt>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Label num="06" children="Boarding experience" />
            <H2>Getting on <em style={{ color: BLUE_L }}>without the chaos.</em></H2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              External gated platforms with RFID detection eliminate crowding at train doors.
              Smart Cards and Smart Tags make fare handling seamless for both user types.
            </p>
            <Note>RFID boarding · smart ticketing</Note>

            <div className="mt-6 flex flex-col gap-3">
              {[
                { icon: "🚪", title: "External gates",   body: "Platform gates limit crowding near doors — passengers queue, not swarm." },
                { icon: "📡", title: "RFID detection",   body: "Auto-deduct on entry and exit. Smart Tag for wallets; Smart Card for daily commuters." },
                { icon: "📺", title: "Capacity screens", body: "Screens at each coach door show live vacancy as the train approaches." },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-[14px] border"
                  style={{ background: CARD, borderColor: BORDER }}>
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-propark font-semibold text-sm" style={{ color: TEXT }}>{f.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: MUTED }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col gap-4">
              <Img src="/alstom/32.png" alt="Boarding and deboarding" />
              <Img src="/alstom/33.png" alt="Station digital screens" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── 07 ESSENTIAL COACH ───────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="07" children="The Essential Coach" />
          <H2>Designed for <em style={{ color: BLUE_L }}>the everyday commuter.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Built for economic short-distance commutes. Combines{" "}
            <strong style={{ color: TEXT }}>48 fixed seats</strong> with{" "}
            <strong style={{ color: TEXT }}>33 adaptive semi-seats</strong> — serving
            peak crowds and off-peak flexibility within the same coach.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/34.png" alt="The Essential Coach interior" className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-4 grid md:grid-cols-[3fr_2fr] gap-6 items-center">
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/alstom/35.png" alt="Seating in the Essential Coach" className="w-full h-auto block" loading="lazy" />
            </div>
            <div>
              <p className="font-propark font-semibold text-xl mb-1" style={{ color: TEXT }}>Adaptive seating</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                Transforms the static train environment into a dynamic, user-controlled space —
                commuters optimise for relaxation or productivity.
              </p>
              <p className="font-propark font-semibold text-xl mb-1" style={{ color: TEXT }}>Semi seating</p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Ergonomic standing-lean supports physical diversity — comfortable for short hops
                without taking up full seat volume.
              </p>
              <Note>48 fixed + 33 semi seats</Note>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-4 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/36.png" alt="Usability considerations" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-2 text-xs text-center" style={{ color: DIM }}>
            Informative displays + crowd management inside the Essential Coach
          </p>
        </Reveal>
      </Section>

      {/* ── 08 COMFORT COACH ─────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="08" children="The Comfort Coach" />
          <H2>Premium travel <em style={{ color: BLUE_L }}>on the suburban line.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            61 seats designed specifically for premium long-distance commuters — pre-bookable,
            personally navigable, and thoughtfully adaptive.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
            <img src="/alstom/37.png" alt="The Comfort Coach" className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        {/* Pre-book app */}
        <Reveal delay={80}>
          <div className="mt-6 grid md:grid-cols-[2fr_3fr] gap-10 items-center">
            <div>
              <p className="font-propark font-semibold text-2xl mb-2" style={{ color: TEXT }}>
                Prebook your seat.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                The Namma Sarathi app lets passengers search trains, compare fare tiers,
                pick their exact seat, and download an e-ticket — the whole flow in under two minutes.
              </p>
              <Note>digital experience · Comfort Coach</Note>
            </div>
            <div className="rounded-[24px] overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
              <img src="/alstom/38.png" alt="Pre-book app screens" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-[24px] border overflow-hidden shadow-sm" style={{ borderColor: BORDER, background: CARD }}>
              <img src="/alstom/39.png" alt="LED seat finder" className="w-full h-auto block" loading="lazy" />
              <div className="px-5 py-4 border-t" style={{ borderColor: BORDER }}>
                <p className="font-propark font-semibold text-base" style={{ color: TEXT }}>LED seat navigation</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>
                  When you board, an LED strip on your reserved seat lights up — no hunting, no confusion.
                </p>
              </div>
            </div>
            <div className="rounded-[24px] border overflow-hidden shadow-sm" style={{ borderColor: BORDER, background: CARD }}>
              <img src="/alstom/40.png" alt="Adaptive seating comfort coach" className="w-full h-auto block" loading="lazy" />
              <div className="px-5 py-4 border-t" style={{ borderColor: BORDER }}>
                <p className="font-propark font-semibold text-base" style={{ color: TEXT }}>Adaptive privacy</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>
                  A sliding glass panel in the centre aisle gives commuters the choice to socialise or travel quietly.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── 09 OUTCOMES ──────────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="09" children="Outcomes" />
          <H2>What shipped, <em style={{ color: BLUE_L }}>and what it taught us.</em></H2>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: "🏆", title: "Shortlisted by Alstom",   body: "Out of all submissions, Namma Sarathi was selected by Alstom for further development consideration." },
            { icon: "🚃", title: "Two coach typologies",     body: "Essential + Comfort coaches serving distinct commuter personas with tailored spatial and service design." },
            { icon: "🔬", title: "Research-led throughout",  body: "Field research, system mapping, journey analysis, and ecosystem thinking shaped every single touchpoint." },
          ].map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <div className="rounded-[24px] border p-6 h-full shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
                <span className="text-2xl">{o.icon}</span>
                <p className="mt-3 font-propark font-semibold text-base" style={{ color: TEXT }}>{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-4 rounded-[24px] p-6 border shadow-sm"
            style={{ background: CARD, borderColor: "rgba(27,63,114,0.15)" }}>
            <p className="font-propark text-sm mb-2" style={{ color: MUTED, fontWeight: 300 }}>in retrospect →</p>
            <p className="font-propark italic text-xl leading-snug max-w-2xl" style={{ color: TEXT, fontWeight: 300 }}>
              "Designing for a system meant holding the entire journey in your head —
              from the app to the seat to the exit gate. Complexity is where service design earns its keep."
            </p>
          </div>
        </Reveal>
      </Section>

    </div>
  );
}
