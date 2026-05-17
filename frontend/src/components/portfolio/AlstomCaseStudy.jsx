import React, { useEffect, useRef, useState } from "react";

/* ── palette ── */
const BG      = "#F7F2E7";
const BG_ALT  = "#EDE8DA";
const CARD    = "#FFFFFF";
const CARD2   = "#FAF8F3";
const BLUE    = "#1B3F72";
const BLUE_L  = "#4A6FA5";
const BLUE_BG = "rgba(27,63,114,0.07)";
const TEXT    = "#1A1A1A";
const MUTED   = "rgba(26,26,26,0.55)";
const DIM     = "rgba(26,26,26,0.32)";
const BORDER  = "rgba(26,26,26,0.09)";

/* ── reveal ── */
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
      transform: visible ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
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
      <span className="text-[11px] tracking-[0.28em] uppercase font-semibold" style={{ color: BLUE }}>
        {children}
      </span>
    </div>
  );
}

function H2({ children }) {
  return (
    <h2 className="font-propark font-semibold text-4xl md:text-5xl leading-[1.06] tracking-tight"
      style={{ color: TEXT }}>{children}</h2>
  );
}

function Chip({ children, blue = false }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs border font-medium"
      style={blue
        ? { background: BLUE_BG, color: BLUE, borderColor: "rgba(27,63,114,0.2)" }
        : { background: "rgba(26,26,26,0.04)", color: MUTED, borderColor: BORDER }
      }>{children}</span>
  );
}

function SlideImg({ src, alt, className = "", caption }) {
  return (
    <div>
      <div className={`rounded-[20px] overflow-hidden border shadow-sm ${className}`} style={{ borderColor: BORDER }}>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
      {caption && <p className="mt-2 text-xs text-center" style={{ color: DIM }}>{caption}</p>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function AlstomCaseStudy() {
  return (
    <div>

      {/* ── 01 THE TEAM ─────────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="01" children="The team" />
          <H2>Five people.<br /><em className="font-normal italic" style={{ color: BLUE_L }}>One rail system.</em></H2>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: MUTED }}>
            A cross-disciplinary team of designers, researchers, and engineers working alongside Alstom and Strate School of Design.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8">
            <SlideImg src="/alstom/27.png" alt="The team" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid md:grid-cols-5 gap-3">
            {[
              { name: "Krishaa",       role: "UX Research, CMF, Interior Visualisation & Service Design", highlight: true },
              { name: "Adrika Molakala", role: "Team Lead · UX Research, Storyboarding, UI Design, Service Design" },
              { name: "Varun RSS",     role: "Sketching, Ideation, 3D Modelling & Post Processing" },
              { name: "Pranjal Daga",  role: "Branding & Visual Design" },
              { name: "Shashank B.",   role: "Engineering aspects & 3D Modelling" },
            ].map((m) => (
              <div key={m.name} className="rounded-[16px] p-4 border"
                style={{ background: m.highlight ? BLUE_BG : CARD, borderColor: m.highlight ? "rgba(27,63,114,0.2)" : BORDER }}>
                <p className="font-propark font-semibold text-sm" style={{ color: m.highlight ? BLUE : TEXT }}>{m.name}</p>
                <p className="mt-1 text-xs leading-snug" style={{ color: MUTED }}>{m.role}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 02 INDUSTRY BRIEF ───────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="02" children="Industry brief" />
          <H2>The brief <em className="font-normal italic" style={{ color: BLUE_L }}>from Alstom.</em></H2>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-8 rounded-[20px] p-6 border shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
            <p className="text-[10px] tracking-widest uppercase font-semibold mb-3" style={{ color: DIM }}>Alstom brief</p>
            <p className="font-propark font-semibold text-lg mb-2" style={{ color: TEXT }}>
              Commuter of the future in Bangalore by 2030
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Towards social inclusivity through <strong style={{ color: TEXT }}>sustainable mobility</strong> connecting
              the city center to suburban areas to explore an <strong style={{ color: TEXT }}>inclusive city case</strong> which
              will face <strong style={{ color: TEXT }}>urbanisation</strong> growth with social, environmental & economic challenge.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <SlideImg src="/alstom/28.png" alt="Industry brief and rebrief" className="mt-6" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 rounded-[20px] p-6 border shadow-sm" style={{ background: CARD, borderColor: "rgba(27,63,114,0.15)" }}>
            <p className="text-[10px] tracking-widest uppercase font-semibold mb-3" style={{ color: DIM }}>Contextually-informed rebrief</p>
            <p className="font-propark font-semibold text-base mb-1" style={{ color: TEXT }}>How Might We</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Design a Suburban Train that <strong style={{ color: TEXT }}>meets the INDIVIDUAL PREFERENCES</strong> of
              a diverse range of commuters by <strong style={{ color: TEXT }}>including the Positive Traits of Personal Mobility</strong> to
              create a more <strong style={{ color: TEXT }}>Enjoyable Commute</strong>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["The Goal", "How to achieve it?", "The Why?"].map(t => <Chip key={t} blue>{t}</Chip>)}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── 03 USERS ────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="03" children="Understanding users" />
          <H2>Two commuters.<br /><em className="font-normal italic" style={{ color: BLUE_L }}>One system.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Bangalore's rail must serve both the IT professional heading to Whitefield and the factory worker
            commuting in from Tumkur every morning.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <SlideImg src="/alstom/29.png" alt="User personas and commute patterns" className="mt-8" />
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              type: "White Collared Worker", emoji: "💼",
              desc: "Bangalore's IT crowd prefer amenity-rich suburbs and commute cityward a few days a week.",
              quote: "\"I want a comfortable commute and I prefer to work on the go sometimes\"",
              criteria: ["Comfort", "Time", "Convenience", "Status"],
            },
            {
              type: "Blue Collared Worker", emoji: "🏗️",
              desc: "Factory workers from nearby towns commute every day — sometimes on weekends too.",
              quote: "\"I want a cost friendly commute option that keeps up on time or else I lose my wage\"",
              criteria: ["Cost", "Time", "Connectivity", "Convenience"],
            },
          ].map((u, i) => (
            <Reveal key={u.type} delay={i * 70}>
              <div className="rounded-[20px] border overflow-hidden shadow-sm h-full" style={{ borderColor: BORDER }}>
                <div className="px-6 py-4 border-b flex items-center gap-3" style={{ background: CARD2, borderColor: BORDER }}>
                  <span className="text-2xl">{u.emoji}</span>
                  <p className="font-propark font-semibold text-base" style={{ color: TEXT }}>{u.type}</p>
                </div>
                <div className="px-6 py-5" style={{ background: CARD }}>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: MUTED }}>{u.desc}</p>
                  <p className="font-propark italic text-sm mb-4" style={{ color: BLUE_L, fontWeight: 300 }}>{u.quote}</p>
                  <p className="text-[10px] tracking-widest uppercase font-semibold mb-2" style={{ color: DIM }}>Criteria for commute</p>
                  <div className="flex flex-wrap gap-1.5">{u.criteria.map(c => <Chip key={c} blue>{c}</Chip>)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 04 DIVERSITY GAP ─────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="04" children="Research insight" />
          <H2>The diversity gap<br /><em className="font-normal italic" style={{ color: BLUE_L }}>in public transit.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Field research and experience mapping revealed why commuters prefer personal mobility — across
            every dimension that matters, public transport falls short.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <SlideImg src="/alstom/30.png" alt="Diversity gap in public transit" className="mt-8" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { aspect: "Control",      con: "Fixed, no personalisation",   pro: "Full customisation" },
              { aspect: "Comfort",      con: "Shared, static, compromised", pro: "Private, adjustable" },
              { aspect: "Functionality",con: "Limited activity support",    pro: "Multi-purpose" },
              { aspect: "Reliability",  con: "Inconsistent experience",     pro: "Predictable service" },
              { aspect: "User Agency",  con: "Passive passenger role",      pro: "Active journey mgmt" },
            ].map(r => (
              <div key={r.aspect} className="rounded-[16px] border p-3" style={{ background: CARD, borderColor: BORDER }}>
                <p className="font-propark font-semibold text-xs mb-2" style={{ color: TEXT }}>{r.aspect}</p>
                <p className="text-[10px] leading-snug mb-1.5" style={{ color: MUTED }}>{r.con}</p>
                <div className="rounded px-2 py-1" style={{ background: BLUE_BG }}>
                  <p className="text-[10px] font-medium leading-snug" style={{ color: BLUE }}>{r.pro}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 05 SYSTEM MAPPING ────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="05" children="Systems thinking" />
          <H2>Mapping <em className="font-normal italic" style={{ color: BLUE_L }}>the whole system.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Service ecosystem mapping exposed stakeholder interdependencies, process flows, and service gaps
            across the suburban rail network — revealing opportunities for coordinated improvements.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <SlideImg src="/alstom/31.png" alt="System map" className="mt-8" />
        </Reveal>
      </Section>

      {/* ── SECTION DIVIDER ──────────────────────────────── */}
      <div style={{ background: BLUE, borderTop: `1px solid rgba(0,0,0,0.1)`, borderBottom: `1px solid rgba(0,0,0,0.1)` }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3">
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>✦</span>
          <p className="font-propark text-sm text-white" style={{ fontWeight: 400 }}>
            and here's what we designed →
          </p>
        </div>
      </div>

      {/* ── 06 BOARDING EXPERIENCE ───────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="06" children="Boarding experience" />
          <H2>Getting on <em className="font-normal italic" style={{ color: BLUE_L }}>without the chaos.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            External gated platforms with RFID detection eliminate crowding at train doors. Smart Cards and
            Smart Tags make fare handling seamless.
          </p>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal delay={0}><SlideImg src="/alstom/32.png" alt="Boarding and deboarding" caption="RFID gates & smart ticketing" /></Reveal>
          <Reveal delay={60}><SlideImg src="/alstom/33.png" alt="Station digital screens" caption="Live capacity & platform displays" /></Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {[
              { icon: "🚪", title: "External gates",    body: "Platform gates limit crowding near train doors — passengers queue, not swarm." },
              { icon: "📡", title: "RFID detection",    body: "Gates with RFID sensors enable efficient entry and auto-deduct fare on exit." },
              { icon: "📺", title: "Capacity screens",  body: "Screens at each coach door show vacant seats as the train approaches the station." },
            ].map((f, i) => (
              <div key={f.title} className="rounded-[16px] border p-5 shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
                <span className="text-2xl">{f.icon}</span>
                <p className="mt-2 font-propark font-semibold text-sm" style={{ color: TEXT }}>{f.title}</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 07 ESSENTIAL COACH ───────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="07" children="The Essential Coach" />
          <H2>Designed for <em className="font-normal italic" style={{ color: BLUE_L }}>the everyday commuter.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            Built for economic short-distance commutes. Combines 48 fixed seats with 33 adaptive semi-seats —
            serving peak crowds and off-peak flexibility.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <SlideImg src="/alstom/34.png" alt="The Essential Coach interior" className="mt-8" />
        </Reveal>

        <Reveal delay={80}>
          <SlideImg src="/alstom/35.png" alt="Seating in the Essential Coach" className="mt-4" />
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Reveal delay={0}>
            <div className="rounded-[20px] border p-6 shadow-sm h-full" style={{ background: CARD, borderColor: BORDER }}>
              <p className="font-propark font-semibold text-base mb-2" style={{ color: TEXT }}>Adaptive Seats</p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Transforms the static train environment into a dynamic, user-controlled experience — commuters
                can optimise their space for relaxation or productivity throughout their journey.
              </p>
              <div className="mt-3 flex gap-2">
                <Chip blue>48 seats</Chip>
                <Chip blue>Flexible config</Chip>
              </div>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="rounded-[20px] border p-6 shadow-sm h-full" style={{ background: CARD, borderColor: BORDER }}>
              <p className="font-propark font-semibold text-base mb-2" style={{ color: TEXT }}>Semi Seating</p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Adapts to individual users' physical needs — ensuring comfortable, non-strenuous experiences
                for all commuters while maintaining cost accessibility.
              </p>
              <div className="mt-3 flex gap-2">
                <Chip blue>33 seats</Chip>
                <Chip blue>Ergonomic</Chip>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <SlideImg src="/alstom/36.png" alt="Usability considerations" className="mt-4"
            caption="Informative displays + crowd management inside the Essential Coach" />
        </Reveal>
      </Section>

      {/* ── 08 COMFORT COACH ─────────────────────────────── */}
      <Section alt>
        <Reveal>
          <Label num="08" children="The Comfort Coach" />
          <H2>Premium travel <em className="font-normal italic" style={{ color: BLUE_L }}>on the suburban line.</em></H2>
          <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: MUTED }}>
            61 seats designed specifically for premium long-distance commuters — pre-bookable, personally
            navigable, and thoughtfully adaptive.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <SlideImg src="/alstom/37.png" alt="The Comfort Coach" className="mt-8" />
        </Reveal>

        {/* Pre-book app */}
        <Reveal delay={80}>
          <div className="mt-6 rounded-[20px] border p-6 shadow-sm" style={{ background: CARD, borderColor: "rgba(27,63,114,0.12)" }}>
            <p className="text-[10px] tracking-widest uppercase font-semibold mb-1" style={{ color: DIM }}>Digital experience</p>
            <p className="font-propark font-semibold text-lg mb-2" style={{ color: TEXT }}>Prebook your seat to travel in comfort.</p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>
              The Namma Sarathi app lets passengers search trains, compare fare tiers, pick their exact seat,
              and download an e-ticket — the whole flow in under two minutes.
            </p>
            <SlideImg src="/alstom/38.png" alt="Pre-book app screens" />
          </div>
        </Reveal>

        {/* LED seat finder + adaptive seating */}
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Reveal delay={0}><SlideImg src="/alstom/39.png" alt="LED seat finder" caption="LED strip guides you to your seat the moment you board" /></Reveal>
          <Reveal delay={60}><SlideImg src="/alstom/40.png" alt="Adaptive seating" caption="Sliding glass panel — choose to socialise or have privacy" /></Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {[
              { icon: "💡", title: "LED seat navigation",   body: "When you board, an LED strip on your reserved seat lights up — no hunting, no confusion." },
              { icon: "🪟", title: "Adaptive privacy",      body: "A sliding glass panel in the center aisle gives commuters the choice to socialise or commute quietly." },
              { icon: "📱", title: "Personal screen",       body: "A seat-back display shows boarding point, destination, arrival time, and personalised content." },
            ].map((f) => (
              <div key={f.title} className="rounded-[16px] border p-5 shadow-sm" style={{ background: CARD, borderColor: BORDER }}>
                <span className="text-2xl">{f.icon}</span>
                <p className="mt-2 font-propark font-semibold text-sm" style={{ color: TEXT }}>{f.title}</p>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: MUTED }}>{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── 09 OUTCOMES ──────────────────────────────────── */}
      <Section>
        <Reveal>
          <Label num="09" children="Outcomes" />
          <H2>Shortlisted.<br /><em className="font-normal italic" style={{ color: BLUE_L }}>And what that taught us.</em></H2>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: "🏆", title: "Shortlisted by Alstom",      body: "Out of all proposals, Namma Sarathi was selected for further development consideration by Alstom." },
            { icon: "🚃", title: "Two coach typologies",        body: "Essential + Comfort coaches serving two distinct commuter personas with tailored spatial design." },
            { icon: "🔬", title: "Research-led design",         body: "Months of field research, ecosystem mapping, and service design thinking shaped every touchpoint." },
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
          <div className="mt-4 rounded-[24px] p-6 border shadow-sm" style={{ background: CARD, borderColor: "rgba(27,63,114,0.12)" }}>
            <p className="font-propark text-sm mb-2" style={{ color: MUTED, fontWeight: 300 }}>in retrospect →</p>
            <p className="font-propark italic text-xl leading-snug max-w-2xl" style={{ color: TEXT, fontWeight: 300 }}>
              "Designing for a system meant holding the entire journey in your head — from the app to the
              seat to the exit gate. Complexity is where service design earns its keep."
            </p>
          </div>
        </Reveal>
      </Section>

    </div>
  );
}
