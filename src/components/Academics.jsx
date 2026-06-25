import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Book, Compass, Feather } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Academics() {
  useEffect(() => {
    // Advanced individual block timeline configuration triggered on entry scroll
    gsap.utils.toArray(".academic-item").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const logs = [
    {
      icon: <Feather className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "01",
      title: "Marks",
      desc: "95.02% (def cheating kiya hoga)"
    },
    {
      icon: <Compass className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "02",
      title: "Friends",
      desc: "Got a good a good looking HB."
    },
    {
      icon: <Book className="w-5 h-5 text-[#f5f2eb] stroke-[1.5]" />,
      index: "03",
      title: "Fav Thing",
      desc: "Dog"
    }
  ];

  return (
    <section id="academics-section" className="relative w-full max-w-7xl bg-[#0b0a09] py-40 px-6 md:px-16 flex flex-col items-center">
      <div className="w-full">
        <div className="mb-28 text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.5em] text-[#dcd7ca]/50 uppercase block mb-3">SCHOLASTIC FOUNDATION</span>
          <h3 className="font-bold tracking-tight text-[#f5f2eb] uppercase" style={{ fontSize: "var(--font-section)", fontFamily: "var(--font-serif-display)" }}>
            THE TOPPER LOGS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {logs.map((log, i) => (
            <div 
              key={i} 
              className="academic-item parchment-panel p-9 rounded-2xl flex flex-col justify-between h-[420px] border border-[#f5f2eb]/10 transition-all duration-500 hover:border-[#f5f2eb]/20 group hover:-translate-y-2"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 bg-[#f5f2eb]/5 rounded-xl border border-[#f5f2eb]/5 group-hover:bg-[#f5f2eb]/10 group-hover:border-[#f5f2eb]/10 transition-all duration-300">
                  {log.icon}
                </div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#dcd7ca]/30" style={{ fontFamily: "var(--font-serif-display)" }}>
                  LOG_FOLIO // {log.index}
                </span>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-[#f5f2eb] uppercase tracking-wide mb-4 transition-colors duration-300 group-hover:text-[#f5f2eb]" style={{ fontFamily: "var(--font-serif-display)", lineHeight: "1.2" }}>
                  {log.title}
                </h4>
                <p className="text-sm text-[#dcd7ca]/70 leading-relaxed font-light font-sans" style={{ fontFamily: "var(--font-sans)" }}>
                  {log.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#f5f2eb]/5 flex items-center justify-between text-[9px] tracking-[0.25em] text-[#dcd7ca]/30 uppercase font-semibold">
                <span>INDEX METRICS ARCHIVE</span>
                <span className="text-[#f5f2eb]/40">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
