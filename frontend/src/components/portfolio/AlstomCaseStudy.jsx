import React, { useEffect, useRef, useState } from "react";

/* ── palette ── */
const BG       = "#F7F2E7";
const BG_ALT   = "#EDE8DA";
const CARD     = "#FFFFFF";
const CARD2    = "#FAF8F3";
const BLUE     = "#1B3F72";
const BLUE_L   = "#4A6FA5";
const BLUEBG2  = "rgba(27,63,114,0.07)";
const TEXT     = "#1A1A1A";
const MUTED    = "rgba(26,26,26,0.55)";
const DIM      = "rgba(26,26,26,0.32)";
const BORDER   = "rgba(26,26,26,0.09)";

/* ── fade-up reveal ── */
function useFadeUp(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
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
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
    }}>{children}</div>
  );
}

function Section({ children, alt = false }) {
  return (
    <section style={{ background: alt ? BG_ALT : BG, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">{children}</div>
    </section>
  );
}

function Label({ num, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-propark text-sm font-medium" style={{ color: BLUE }}>{num}</span>
      <div className="h-px w-5" style={{ background: BORDER }} />
      <span className="text-[11px] tracking-[0.28em] uppercase font-semibold" style={{ color: BLUE }}>{children}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   01  TEAM
══════════════════════════════════════════════════════ */
const CONTRIBUTIONS = [
  { title: "Research & Sensemaking",             body: "Mapped service ecosystems, spotted patterns in messy data, and turned findings into opportunities the team could act on." },
  { title: "Service design and System Thinking",  body: "Applied a system-thinking lens to analyse service challenges, uncover root causes, and surface optimisation opportunities end-to-end." },
  { title: "Design Conceptualisation",            body: "Re-imagined the train ecosystem to account for modularity, suiting multiple user personas at various stages of their journey." },
  { title: "3D modelling",                        body: "Built and surfaced various components of the railway ecosystem to simulate the final proposed solution." },
  { title: "CMF and Interior Visualization",      body: "Re-interpreted train interiors to break from monotony and traditional blue spaces — creating a fun, fresh feel in a mundane environment." },
];

function TeamSection() {
  return (
    <Section>
      <Reveal>
        <Label num="01" children="The team" />
      </Reveal>
      <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start mt-2">

        {/* LEFT — photo */}
        <Reveal>
          <div className="rounded-[24px] overflow-hidden">
            <img src="/alstom/team-photo.png" alt="Meet the team" className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>

        {/* RIGHT — key contributions */}
        <Reveal delay={80}>
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold mb-5" style={{ color: TEXT }}>
            Key Contributions
          </p>
          <div className="relative">
            {/* dotted vertical connector */}
            <div className="absolute left-[11px] top-4 bottom-4"
              style={{ width: 1, borderLeft: `2px dashed ${BORDER}`, zIndex: 0 }} />

            <div className="flex flex-col gap-0">
              {CONTRIBUTIONS.map((c, i) => (
                <div key={i} className="relative flex items-start gap-3 pb-4">
                  {/* dot */}
                  <div className="shrink-0 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center mt-0.5 z-10"
                    style={{ background: BG_ALT, borderColor: BORDER }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: BLUE_L }} />
                  </div>
                  {/* card */}
                  <div className="rounded-[14px] border px-4 py-3 flex-1 shadow-sm"
                    style={{ background: CARD, borderColor: BORDER }}>
                    <p className="font-propark font-semibold text-xs mb-1" style={{ color: TEXT }}>{c.title}</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: MUTED }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   02  INDUSTRY BRIEF
══════════════════════════════════════════════════════ */
function BriefSection() {
  return (
    <Section alt>
      <Reveal>
        <Label num="02" children="Industry brief" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-start mt-2">

        {/* LEFT */}
        <div>
          <Reveal>
            {/* slide-style heading: INDUSTRY BRIEF bold, "from Alstom" normal */}
            <h2 className="font-propark leading-tight mb-4"
              style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: TEXT }}>
              <strong style={{ fontWeight: 800 }}>INDUSTRY BRIEF</strong>{" "}
              <span style={{ fontWeight: 400 }}>from Alstom</span>
            </h2>
            <p className="font-propark font-semibold text-sm mb-2" style={{ color: TEXT }}>
              Commuter of the future in Bangalore by 2030:
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Towards social inclusivity through{" "}
              <strong style={{ color: TEXT, textDecoration: "underline" }}>sustainable mobility</strong>{" "}
              connecting the city center to suburban areas to explore an{" "}
              <strong style={{ color: TEXT, textDecoration: "underline" }}>inclusive</strong>{" "}
              city case which will face{" "}
              <strong style={{ color: TEXT, textDecoration: "underline" }}>urbanization</strong>{" "}
              growth with social, environmental &amp; economic challenge.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6 rounded-[20px] overflow-hidden">
              <img src="/alstom/negative-narratives.png" alt="Indian Railways negative narratives"
                className="w-full h-auto block" loading="lazy" />
            </div>
            <p className="mt-2 text-[11px] text-center italic" style={{ color: DIM }}>
              Indian Railways are synonymous with Negative Narratives
            </p>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div>
          <Reveal delay={40}>
            <div className="rounded-[20px] overflow-hidden">
              <img src="/alstom/research-cards.png" alt="Research insights"
                className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>

          {/* Contextually-informed REBRIEF */}
          <Reveal delay={80}>
            <div className="mt-6 rounded-[20px] border p-6 shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
              <h3 className="font-propark leading-tight mb-4"
                style={{ fontSize: "clamp(1rem,2.5vw,1.35rem)", color: TEXT }}>
                <span style={{ fontWeight: 400 }}>Contextually-informed</span>{" "}
                <strong style={{ fontWeight: 800 }}>REBRIEF</strong>
              </h3>
              <p className="text-xs mb-3" style={{ color: MUTED }}>How Might We</p>

              {/* Three annotated lines */}
              <div className="flex flex-col gap-3">
                {[
                  { line: <>Design a Suburban Train that <strong style={{ color: TEXT }}>meets the INDIVIDUAL PREFERENCES</strong></>, tag: "The Goal" },
                  { line: <>of a diverse range of commuters by <strong style={{ color: TEXT }}>including the Positive Traits of Personal Mobility</strong></>, tag: "How to achieve it?" },
                  { line: <>to create a more <strong style={{ color: TEXT }}>Enjoyable Commute</strong></>, tag: "The Why?" },
                ].map(({ line, tag }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <p className="text-sm leading-snug flex-1" style={{ color: MUTED }}>{line}</p>
                    <div className="shrink-0 flex items-center gap-1.5">
                      {/* dashed arrow */}
                      <svg width="28" height="10" viewBox="0 0 28 10">
                        <line x1="0" y1="5" x2="20" y2="5" stroke={DIM} strokeWidth="1" strokeDasharray="2,2" />
                        <polyline points="16,2 21,5 16,8" fill="none" stroke={DIM} strokeWidth="1" />
                      </svg>
                      <span className="text-[10px] italic whitespace-nowrap" style={{ color: BLUE_L }}>{tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   03  USERS
══════════════════════════════════════════════════════ */
const PERSONAS = [
  {
    name: "White Collared Worker",
    avatar: "👩‍💻",
    desc: "Bangalore has a huge IT crowd who prefer to stay in amenity rich settlements concentrated in suburbs. They commute cityward few days a week.",
    quote: "I want a comfortable commute and I prefer to work on the go sometimes",
    criteria: ["Comfort", "Time", "Convenience", "Status"],
  },
  {
    name: "Blue Collared Worker",
    avatar: "👷",
    desc: "Bangalore employs a huge population from towns nearby in small factories. This population commutes everyday sometimes even on weekends.",
    quote: "I want a cost friendly commute option that keeps up on time or else I lose my wage",
    criteria: ["Cost", "Time", "Connectivity", "Convenience"],
  },
];

function UsersSection() {
  return (
    <Section>
      {/* slide-style double-line heading */}
      <Reveal>
        <Label num="03" children="Understanding users" />
        <h2 className="font-propark leading-tight" style={{ fontSize: "clamp(1.5rem,4vw,2.4rem)", color: TEXT }}>
          Who are our <strong style={{ fontWeight: 800 }}>USERS?</strong>
        </h2>
        <h2 className="font-propark leading-tight mt-1" style={{ fontSize: "clamp(1.25rem,3.5vw,2.1rem)", color: TEXT }}>
          What are their <strong style={{ fontWeight: 800 }}>INDIVIDUAL PREFERENCES?</strong>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start mt-10">

        {/* LEFT — two persona cards */}
        <div className="flex flex-col gap-0">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className={`px-1 py-4 ${i < PERSONAS.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: BORDER }}>
                <div className="flex items-start gap-4">
                  {/* circular avatar */}
                  <div className="shrink-0 w-16 h-16 rounded-full border flex items-center justify-center text-3xl"
                    style={{ background: CARD2, borderColor: BORDER }}>
                    {p.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-propark font-semibold text-base mb-1" style={{ color: TEXT }}>{p.name}</p>
                    <p className="text-xs leading-relaxed mb-2" style={{ color: MUTED }}>{p.desc}</p>
                    <p className="font-propark italic text-xs mb-3" style={{ color: BLUE_L, fontWeight: 300 }}>
                      "{p.quote}"
                    </p>
                    <p className="text-[9px] tracking-[0.25em] uppercase font-semibold mb-1.5" style={{ color: DIM }}>
                      Criterias for choosing mode of commute
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.criteria.map(c => (
                        <span key={c} className="px-2.5 py-0.5 rounded text-[10px] font-semibold border"
                          style={{ background: BLUEBG2, color: BLUE, borderColor: "rgba(27,63,114,0.18)" }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* RIGHT — commute map */}
        <Reveal delay={60}>
          <div className="rounded-[20px] overflow-hidden">
            <img src="/alstom/commute-map.png" alt="Bangalore commute patterns"
              className="w-full h-auto block" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   04  DIVERSITY GAP
══════════════════════════════════════════════════════ */
const GAP_ROWS = [
  { aspect: "Control",       con: "Fixed system, no personalization",   pro: "Full customization and choice" },
  { aspect: "Comfort",       con: "Shared, static, compromised",        pro: "Private, adjustable, optimized" },
  { aspect: "Functionality", con: "Limited activity support",           pro: "Multi-purpose capability" },
  { aspect: "Reliability",   con: "Inconsistent experience",            pro: "Predictable service" },
  { aspect: "User Agency",   con: "Passive passenger role",             pro: "Active journey management" },
];

function DiversitySection() {
  return (
    <Section alt>
      <Reveal>
        <Label num="04" children="Research insight" />
        <h2 className="font-propark leading-tight mb-2"
          style={{ fontSize: "clamp(1.4rem,3.5vw,2.2rem)", color: TEXT }}>
          <strong style={{ fontWeight: 800 }}>THE DIVERSITY GAP</strong>{" "}
          <span style={{ fontWeight: 400 }}>in public transit</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: MUTED }}>
          Field research combined with experience mapping of peak and off-peak journeys revealed
          critical service gaps leading to stress and dissatisfaction across the user journey.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start mt-8">

        {/* LEFT — table */}
        <Reveal>
          <div className="rounded-[20px] overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: CARD2, borderBottom: `1px solid ${BORDER}` }}>
                  {["Service Aspect", "Public Transport Con", "Personal Mobility Pros"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-propark font-semibold text-xs"
                      style={{ color: TEXT, fontWeight: 600 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ background: CARD }}>
                {GAP_ROWS.map((r, i) => (
                  <tr key={r.aspect}
                    style={{ borderBottom: i < GAP_ROWS.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <td className="px-4 py-3 font-propark font-medium text-xs" style={{ color: TEXT }}>{r.aspect}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{r.con}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium"
                        style={{ background: BLUEBG2, color: BLUE }}>
                        {r.pro}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* "drives user preference toward PERSONAL MOBILITY" */}
          <div className="mt-5 flex items-center gap-3">
            {/* curved dashed arrow */}
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
              <path d="M4 4 C4 16, 20 20, 30 20" stroke={DIM} strokeWidth="1.5" strokeDasharray="3,2" fill="none" />
              <polyline points="26,16 31,21 25,24" fill="none" stroke={DIM} strokeWidth="1.5" />
            </svg>
            <p className="font-propark text-sm leading-tight" style={{ color: MUTED, fontWeight: 300 }}>
              drives user preference toward{" "}
              <strong className="font-propark" style={{ color: TEXT, fontWeight: 800, fontSize: "0.95rem" }}>
                PERSONAL MOBILITY
              </strong>
            </p>
          </div>
        </Reveal>

        {/* RIGHT — journey maps, tilted stacked */}
        <Reveal delay={80}>
          <div className="relative" style={{ height: 380 }}>
            <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-md"
              style={{ transform: "rotate(2deg) translateY(8px)", zIndex: 1 }}>
              <img src="/alstom/journey-map-2.png" alt="Journey map part 2"
                className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-lg"
              style={{ transform: "rotate(-1deg)", zIndex: 2 }}>
              <img src="/alstom/journey-map-1.png" alt="Journey map part 1"
                className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   05  SYSTEM MAPPING
══════════════════════════════════════════════════════ */
function SystemSection() {
  return (
    <section style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
      {/* full-bleed image */}
      <Reveal className="max-w-5xl mx-auto px-6 md:px-12 pt-16">
        <Label num="05" children="Systems thinking" />
        <div className="rounded-[24px] overflow-hidden">
          <img src="/alstom/system-map.png" alt="Service system map"
            className="w-full h-auto block" loading="lazy" />
        </div>
      </Reveal>

      {/* caption below image, matching slide layout */}
      <Reveal delay={60} className="max-w-5xl mx-auto px-6 md:px-12 pt-6 pb-16">
        <h2 className="font-propark leading-tight mb-2"
          style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: TEXT }}>
          <strong style={{ fontWeight: 800 }}>SYSTEM</strong>{" "}
          <span style={{ fontWeight: 400 }}>mapping</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-md" style={{ color: MUTED }}>
          Service ecosystem mapping exposed stakeholder interdependencies, process flows and service
          gaps across the suburban rail network, revealing opportunities for coordinated improvements.
        </p>
      </Reveal>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   PRODUCT DIVIDER
══════════════════════════════════════════════════════ */
function Divider() {
  return (
    <div style={{ background: BLUE, borderTop: `1px solid rgba(0,0,0,0.1)`, borderBottom: `1px solid rgba(0,0,0,0.1)` }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3">
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>✦</span>
        <p className="font-propark text-base text-white" style={{ fontWeight: 400 }}>and here's what we designed →</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   06  BOARDING
══════════════════════════════════════════════════════ */
function BoardingSection() {
  return (
    <Section alt>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <Label num="06" children="Boarding experience" />
          <h2 className="font-propark font-semibold text-4xl md:text-5xl leading-[1.06] tracking-tight" style={{ color: TEXT }}>
            Getting on <em className="font-light italic" style={{ color: BLUE_L }}>without the chaos.</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
            External gated platforms with RFID detection eliminate crowding at train doors.
            Smart Cards and Smart Tags make fare handling seamless for both user types.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {[
              { icon: "🚪", title: "External gates",   body: "Platform gates limit crowding near doors — passengers queue, not swarm." },
              { icon: "📡", title: "RFID detection",   body: "Auto-deduct on entry and exit. Smart Tag for wallets; Smart Card for daily commuters." },
              { icon: "📺", title: "Capacity screens", body: "Screens at each coach door show live vacancy as the train approaches the station." },
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
            <div className="rounded-[24px] overflow-hidden">
              <img src="/alstom/32.png" alt="Boarding and deboarding" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="rounded-[24px] overflow-hidden">
              <img src="/alstom/33.png" alt="Station digital screens" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   07  ESSENTIAL COACH
══════════════════════════════════════════════════════ */
function EssentialSection() {
  return (
    <Section>
      <Reveal>
        <Label num="07" children="The Essential Coach" />
        <h2 className="font-propark font-semibold text-4xl md:text-5xl leading-[1.06] tracking-tight" style={{ color: TEXT }}>
          Designed for <em className="font-light italic" style={{ color: BLUE_L }}>the everyday commuter.</em>
        </h2>
        <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
          Built for economic short-distance commutes. Combines{" "}
          <strong style={{ color: TEXT }}>48 fixed seats</strong> with{" "}
          <strong style={{ color: TEXT }}>33 adaptive semi-seats</strong> — serving peak crowds
          and off-peak flexibility within the same coach.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 rounded-[24px] overflow-hidden">
          <img src="/alstom/34.png" alt="The Essential Coach" className="w-full h-auto block" loading="lazy" />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-4 grid md:grid-cols-[3fr_2fr] gap-6 items-center">
          <div className="rounded-[24px] overflow-hidden">
            <img src="/alstom/35.png" alt="Seating" className="w-full h-auto block" loading="lazy" />
          </div>
          <div>
            <p className="font-propark font-semibold text-xl mb-1" style={{ color: TEXT }}>Adaptive seating</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Transforms the static train environment into a dynamic, user-controlled space — commuters
              optimise for relaxation or productivity throughout their journey.
            </p>
            <p className="font-propark font-semibold text-xl mb-1" style={{ color: TEXT }}>Semi seating</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Ergonomic standing-lean for short hops — accessible, space-efficient, and comfortable
              without taking up a full seat.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-4 rounded-[24px] overflow-hidden">
          <img src="/alstom/36.png" alt="Usability" className="w-full h-auto block" loading="lazy" />
        </div>
        <p className="mt-2 text-xs text-center" style={{ color: DIM }}>
          Informative displays + crowd management inside the Essential Coach
        </p>
      </Reveal>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   08  COMFORT COACH
══════════════════════════════════════════════════════ */
function ComfortSection() {
  return (
    <Section alt>
      <Reveal>
        <Label num="08" children="The Comfort Coach" />
        <h2 className="font-propark font-semibold text-4xl md:text-5xl leading-[1.06] tracking-tight" style={{ color: TEXT }}>
          Premium travel <em className="font-light italic" style={{ color: BLUE_L }}>on the suburban line.</em>
        </h2>
        <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
          61 seats designed specifically for premium long-distance commuters — pre-bookable,
          personally navigable, and thoughtfully adaptive.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 rounded-[24px] overflow-hidden">
          <img src="/alstom/37.png" alt="The Comfort Coach" className="w-full h-auto block" loading="lazy" />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6 grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <div>
            <p className="font-propark font-semibold text-2xl mb-2" style={{ color: TEXT }}>Prebook your seat.</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              The Namma Sarathi app lets passengers search trains, compare fare tiers, pick their
              exact seat, and download an e-ticket — the whole flow in under two minutes.
            </p>
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="/alstom/38.png" alt="Pre-book app" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            { src: "/alstom/39.png", title: "LED seat navigation", desc: "When you board, an LED strip on your reserved seat lights up — no hunting, no confusion." },
            { src: "/alstom/40.png", title: "Adaptive privacy",    desc: "A sliding glass panel in the centre aisle gives commuters the choice to socialise or travel quietly." },
          ].map(s => (
            <div key={s.title} className="rounded-[24px] border overflow-hidden shadow-sm"
              style={{ borderColor: BORDER, background: CARD }}>
              <img src={s.src} alt={s.title} className="w-full h-auto block" loading="lazy" />
              <div className="px-5 py-4 border-t" style={{ borderColor: BORDER }}>
                <p className="font-propark font-semibold text-base" style={{ color: TEXT }}>{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════
   09  OUTCOMES
══════════════════════════════════════════════════════ */
function OutcomesSection() {
  return (
    <Section>
      <Reveal>
        <Label num="09" children="Outcomes" />
        <h2 className="font-propark font-semibold text-4xl md:text-5xl leading-[1.06] tracking-tight" style={{ color: TEXT }}>
          What shipped, <em className="font-light italic" style={{ color: BLUE_L }}>and what it taught us.</em>
        </h2>
      </Reveal>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          { icon: "🏆", title: "Shortlisted by Alstom",  body: "Out of all submissions, Namma Sarathi was selected by Alstom for further development consideration." },
          { icon: "🚃", title: "Two coach typologies",   body: "Essential + Comfort coaches serving distinct commuter personas with tailored spatial and service design." },
          { icon: "🔬", title: "Research-led throughout", body: "Field research, system mapping, journey analysis, and ecosystem thinking shaped every single touchpoint." },
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
  );
}

/* ══════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════ */
export default function AlstomCaseStudy() {
  return (
    <div>
      <TeamSection />
      <BriefSection />
      <UsersSection />
      <DiversitySection />
      <SystemSection />
      <Divider />
      <BoardingSection />
      <EssentialSection />
      <ComfortSection />
      <OutcomesSection />
    </div>
  );
}
