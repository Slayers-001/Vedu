import React from "react";

export default function Navbar() {
  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#f5f2eb]/5 bg-[#0b0a09]/75 backdrop-blur-xl px-6 md:px-16 py-6 flex justify-between items-center transition-all duration-300">
      <div 
        className="font-bold text-[#f5f2eb] tracking-[0.35em] text-xs uppercase cursor-pointer select-none group" 
        style={{ fontFamily: "var(--font-serif-display)" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        S.R <span className="text-[#dcd7ca]/40 group-hover:text-[#f5f2eb] transition-colors duration-300">//</span> CHRONICLE
      </div>
      
      <div className="flex gap-10 text-[11px] font-bold tracking-[0.25em] text-[#dcd7ca]/60 uppercase select-none">
        <span 
          onClick={() => scrollIntoView("academics-section")}
          className="literary-link hover:text-[#f5f2eb] cursor-pointer transition-colors duration-300"
        >
          SCHOLAR
        </span>
        <span 
          onClick={() => scrollIntoView("athletics-section")}
          className="literary-link hover:text-[#f5f2eb] cursor-pointer transition-colors duration-300"
        >
          ARENA
        </span>
      </div>
    </nav>
  );
}