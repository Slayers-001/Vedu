import React, { useState } from "react";
import { Trophy, Shield } from "lucide-react";

export default function Athletics() {
  const [activeTab, setActiveTab] = useState("basketball");

  const matrixData = {
    basketball: {
      title: "COURT COMMANDER",
      role: "Point Guard // Strategy Lead",
      summary: "Abhi nhi pta.",
      metrics: ["High-IQ Setup Play", "Clinical Vision", "Unbroken Transition Rhythm"]
    },
    swimming: {
      title: "AQUATIC MASTER",
      role: "Freestyle Speed Catalyst",
      summary: "Abhi nhi pta.",
      metrics: ["Aerobic Engine Max", "Precision Flip Turns", "Explosive Blocks Drive"]
    },
    skating: {
      title: "VELOCITY CARVER",
      role: "Track Line Strategist",
      summary: "Abhi nhi pta.",
      metrics: ["Max Lean Velocity", "Cross-Over Cadence", "Track Line Mastery"]
    }
  };

  const current = matrixData[activeTab];

  return (
    <section id="athletics-section" className="relative w-full max-w-7xl bg-[#0b0a09] py-40 px-6 md:px-16 flex flex-col items-center">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div>
            <span className="text-xs font-bold tracking-[0.5em] text-[#dcd7ca]/50 uppercase block mb-3">PHYSICAL DISCIPLINE</span>
            <h3 className="font-bold tracking-tight text-[#f5f2eb] uppercase" style={{ fontSize: "var(--font-section)", fontFamily: "var(--font-serif-display)" }}>
              THE ARENA MANIFESTO
            </h3>
          </div>

          {/* Book-spine layout configuration tab switcher */}
          <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-[#2c2520]/30 rounded-2xl border border-[#f5f2eb]/5 w-full lg:w-auto">
            {Object.keys(matrixData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 w-full sm:w-auto ${
                  activeTab === key
                    ? "bg-[#f5f2eb] text-[#0b0a09] shadow-2xl scale-[1.02]"
                    : "text-[#dcd7ca]/50 hover:text-[#f5f2eb] hover:bg-[#f5f2eb]/5"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Detailed Performance Canvas */}
          <div className="lg:col-span-8 parchment-panel p-8 md:p-14 rounded-2xl border border-[#f5f2eb]/10 flex flex-col justify-between min-h-[400px] transition-all duration-500">
            <div>
              <span className="text-[10px] font-bold tracking-[0.35em] text-[#dcd7ca]/40 uppercase block mb-4">
                REGISTRY // ATHLETIC LEDGER METRICS
              </span>
              <h4 className="text-3xl md:text-5xl font-bold text-[#f5f2eb] uppercase tracking-wide mb-3 transition-all duration-300" style={{ fontFamily: "var(--font-serif-display)" }}>
                {current.title}
              </h4>
              <span className="text-xs italic text-[#dcd7ca]/60 tracking-widest block mb-10" style={{ fontFamily: "var(--font-serif-body)" }}>
                {current.role}
              </span>
              <p className="text-base text-[#dcd7ca]/80 leading-relaxed font-light max-w-3xl" style={{ fontFamily: "var(--font-sans)" }}>
                {current.summary}
              </p>
            </div>

            <div className="mt-14 pt-6 border-t border-[#f5f2eb]/5 flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] text-[#dcd7ca]/30 uppercase select-none">
              <Shield className="w-4 h-4 text-[#dcd7ca]/40" /> SYSTEM ARCHIVE STATE RECORDED IN ACTIVE FRAME
            </div>
          </div>

          {/* Metric Status Check boxes */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {current.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="parchment-panel p-6 rounded-xl border border-[#f5f2eb]/10 flex items-center justify-between transition-all duration-300 hover:border-[#f5f2eb]/20 group"
              >
                <span className="text-xs font-semibold text-[#dcd7ca]/80 uppercase tracking-wider group-hover:text-[#f5f2eb] transition-colors duration-300">{metric}</span>
                <span className="text-[10px] font-bold text-[#f5f2eb] bg-[#f5f2eb]/5 px-2.5 py-1.5 rounded border border-[#f5f2eb]/10 tracking-widest">ACTIVE</span>
              </div>
            ))}
            
            {/* Historical Placement Badge */}
            <div className="parchment-panel p-8 rounded-xl border border-[#f5f2eb]/10 flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-[#2c2520]/15 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#f5f2eb]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <Trophy className="w-8 h-8 text-[#f5f2eb] mb-4 stroke-[1.2] transition-transform duration-500 group-hover:scale-110" />
              <span className="text-4xl md:text-5xl font-bold text-[#f5f2eb] tracking-tight mb-2" style={{ fontFamily: "var(--font-serif-display)" }}>
                RANK I
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#dcd7ca]/30 uppercase">COMPETITIVE STANDING LOG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
