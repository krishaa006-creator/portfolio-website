import React, { useState } from "react";
import { personal } from "../../mock";
import { Arrow, Star, Sparkle, Underline } from "./Doodles";
import { useToast } from "../../hooks/use-toast";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const leftRef  = useReveal("left",  0);
  const rightRef = useReveal("right", 140);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "hmm, missing a bit!", description: "all three fields please — i wanna know you properly." });
      return;
    }
    setSubmitting(true);
    const existing = JSON.parse(localStorage.getItem("krishaa:messages") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("krishaa:messages", JSON.stringify(existing));
    setTimeout(() => {
      toast({ title: "note received ✨", description: "i'll get back to you faster than a usability test." });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative px-5 md:px-10 py-24 md:py-32 bg-[#1A1A1A] text-[#F7F2E7] overflow-hidden"
    >
      <Star className="absolute top-10 right-[6%] anim-floaty" color="#E8532C" size={24} />
      <Sparkle className="absolute bottom-16 left-[10%] anim-spinslow" color="#F4C430" size={20} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14">
        <div ref={leftRef} className="md:col-span-6">
          <span className="font-hand text-xl text-[#F4C430]">§ say hi, i'll say hi back</span>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.98] tracking-tight">
            let's make<br />
            <span className="italic text-[#E8532C]">something</span><br />
            good.
          </h2>
          <Underline width={180} color="#F4C430" className="mt-4" />

          <p className="mt-8 text-lg md:text-xl text-[#F7F2E7]/80 max-w-md leading-relaxed">
            Whether you have a fuzzy idea, a messy problem, or just want to swap coffee orders — my inbox is delightfully open.
          </p>

          <div className="mt-10 space-y-3">
            {[
              { label: "email",    value: personal.email,         href: `mailto:${personal.email}` },
              { label: "phone",    value: personal.phone,         href: `tel:${personal.phone.replace(/\s/g, "")}` },
              { label: "linkedin", value: "@krishaa-ravishankar", href: personal.linkedin },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-baseline gap-4 py-3 border-b border-[#F7F2E7]/20
                  hover:border-[#E8532C] transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest text-[#F7F2E7]/55 w-20 shrink-0">{label}</span>
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-medium group-hover:text-[#E8532C] transition-colors break-all min-w-0">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 font-hand text-xl md:text-2xl text-[#F4C430] flex items-start gap-2">
            <Arrow color="#F4C430" width={60} className="anim-wiggle" />
            p.s: impatiently, eagerly waiting to hear back!
          </div>
        </div>

        <div ref={rightRef} className="md:col-span-6">
          <form
            onSubmit={onSubmit}
            className="relative bg-[#FFFBF2] text-[#1A1A1A] rounded-[24px] p-7 md:p-9 border border-[#F7F2E7]/10"
            style={{ transform: "rotate(-0.8deg)" }}
          >
            <div className="absolute -top-3 left-10 tape" style={{ transform: "rotate(-4deg)" }} />
            <div className="absolute -top-3 right-10 tape" style={{ transform: "rotate(5deg)" }} />
            <div className="font-hand text-2xl text-[#E8532C] mb-5">drop me a note ↓</div>

            <label className="block mb-4">
              <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">your name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. a future collaborator"
                className="mt-1 w-full bg-transparent border-b-2 border-[#1A1A1A]/30 focus:border-[#E8532C] outline-none py-2 text-lg transition-colors"
              />
            </label>
            <label className="block mb-4">
              <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">your email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@somewhere.cool"
                className="mt-1 w-full bg-transparent border-b-2 border-[#1A1A1A]/30 focus:border-[#E8532C] outline-none py-2 text-lg transition-colors"
              />
            </label>
            <label className="block mb-6">
              <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/55">what's on your mind?</span>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="tell me about the problem, the team, the vibe..."
                className="mt-1 w-full bg-transparent border-b-2 border-[#1A1A1A]/30 focus:border-[#E8532C] outline-none py-2 text-lg resize-none transition-colors"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="btn-ink w-full py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? "sending... ⏳" : "send it my way →"}
            </button>
            <p className="mt-3 text-center text-xs text-[#1A1A1A]/55">
              no spam, no ghosting — pinky promise.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
