import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden py-32 px-6 md:px-12">
      {/* Candlestick focus ambiance light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[700px] w-[700px] rounded-full bg-[#f5f2eb]/[0.018] blur-[180px] pointer-events-none" />
      
      {/* Endpaper geometric book grid pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.018] bg-[radial-gradient(#f5f2eb_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />

      <div className="text-center max-w-5xl px-4">
        <h2 className="global-reveal text-xs md:text-sm font-bold tracking-[0.6em] text-[#dcd7ca]/50 uppercase mb-6" style={{ fontFamily: "var(--font-sans)" }}>
          — VOLUME I // LEGACY ARCHIVE —
        </h2>
        
        <h1 className="global-reveal font-black tracking-tight text-[#f5f2eb] uppercase mb-10 select-none" style={{ fontSize: "var(--font-hero)", fontFamily: "var(--font-serif-display)", lineHeight: "0.9" }}>
          SANVI RAI
        </h1>
        
        <div className="global-reveal w-40 h-[1px] bg-gradient-to-r from-transparent via-[#dcd7ca]/30 to-transparent mx-auto my-10" />
        
        <p className="global-reveal italic text-[#dcd7ca] max-w-3xl mx-auto leading-relaxed text-xl md:text-2xl font-light tracking-wide whitespace-pre-line" style={{ fontFamily: "var(--font-serif-body)" }}>
          9th Ncsd
          "When life gives u oranges 🍊 make lemonade 🍋 cause the sun rises frm the east☀️"
          wish me on 25 august🥳
          i luv dogs🐶
        </p>
      </div>

      <div className="global-reveal absolute bottom-16 flex flex-col items-center gap-4 select-none pointer-events-none">
        <span className="text-[9px] tracking-[0.5em] text-[#dcd7ca]/30 uppercase font-semibold">REVEAL FOLIO</span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-[#dcd7ca]/30 to-transparent" />
      </div>
    </section>
  );
}
