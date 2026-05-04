import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";
import ProParkCaseStudy from "../components/portfolio/ProParkCaseStudy";
import { Dots } from "../components/portfolio/Doodles";
import { Arrow } from "../components/portfolio/Doodles";

export default function ProParkPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      {/* Page header */}
      <div className="px-8 md:px-12 pt-28 pb-10 border-b border-[#1A1A1A]/10 bg-[#F3E7D9]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[#1A1A1A]/55 hover:text-[#E8532C] transition-colors mb-8 font-hand text-lg"
        >
          ← back to work
        </button>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-hand text-2xl text-[#E8532C]">01</span>
          <div className="h-px w-10 bg-[#1A1A1A]/25" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/55">2024 · case study</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1] tracking-tight">
          ProPark
        </h1>
        <p className="mt-2 font-display italic text-xl md:text-2xl text-[#E8532C]">
          Turning idle driveways into parking gold.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Meta label="role" value="Solo · UX Design" />
          <Meta label="duration" value="1 week sprint" />
          <Meta label="year" value="2024" />
        </div>
      </div>

      {/* Case study body */}
      <ProParkCaseStudy />

      {/* Footer */}
      <div className="px-8 md:px-12 py-10 border-t border-[#1A1A1A]/15 flex items-center justify-between flex-wrap gap-4 bg-[#FFFBF2]">
        <div className="flex items-center gap-2">
          <Dots color="#E8532C" count={4} />
          <span className="font-hand text-xl">thanks for scrolling — pretty cool, right?</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn-ink px-5 py-2.5 rounded-full text-sm"
        >
          back to the portfolio
        </button>
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="px-3 py-2 rounded-xl bg-white/60 border border-[#1A1A1A]/15">
      <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">{label}</div>
      <div className="font-medium text-sm">{value}</div>
    </div>
  );
}
