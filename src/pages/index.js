import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Academics from "../components/Academics";
import Athletics from "../components/Athletics";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const ambientGlowRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Master timeline orchestration for premium academic presentation reveal
    const masterTimeline = gsap.timeline();
    
    masterTimeline.fromTo(
      ".global-reveal",
      { 
        opacity: 0, 
        y: 45,
        letterSpacing: "0.05em"
      },
      { 
        opacity: 1, 
        y: 0, 
        letterSpacing: "normal",
        duration: 1.8, 
        ease: "power4.out", 
        stagger: 0.15 
      }
    );

    // Advanced dynamic cursor coordinates tracker for the custom environmental ambiance layer
    const handleAmbientMouseMovement = (event) => {
      if (!ambientGlowRef.current) return;
      
      const { clientX, clientY } = event;
      
      gsap.to(ambientGlowRef.current, {
        x: clientX - 350,
        y: clientY - 350,
        duration: 2.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleAmbientMouseMovement);
    
    return () => {
      window.removeEventListener("mousemove", handleAmbientMouseMovement);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0a09] selection:bg-[#f5f2eb] selection:text-[#0b0a09] overflow-hidden">
      <Head>
        <title>Vedika Sharma // The Scholastic Archive</title>
        <meta name="description" content="The digital chronicle of Sanvi Rai. Scholar, Archivist, and Athlete." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Interactive Background Candlelight Aura Grid */}
      <div 
        ref={ambientGlowRef}
        className="fixed top-0 left-0 h-[700px] w-[700px] rounded-full bg-[#f5f2eb]/[0.012] blur-[140px] pointer-events-none z-0 select-none will-change-transform"
        style={{ transform: "translate3d(-1000px, -1000px, 0)" }}
      />
      
      {/* Master Static Layer Grid Mesh representing vintage endpapers */}
      <div className="fixed inset-0 -z-10 opacity-[0.015] bg-[radial-gradient(#f5f2eb_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none select-none" />
      
      <Navbar />
      
      {/* Layout Grid wrapper rendering optimized component lifecycles sequentially */}
      <main className={`relative z-10 w-full flex flex-col items-center transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}>
        
        <Hero />
        
        <div className="w-full h-[1px] vintage-divider" />
        
        <Academics />
        
        <div className="w-full h-[1px] vintage-divider" />
        
        <Athletics />
        
      </main>

      <footer className="w-full py-16 text-center text-[10px] tracking-[0.5em] text-[#dcd7ca]/20 uppercase border-t border-[#f5f2eb]/5 relative z-20 bg-[#0b0a09]">
        © 2026 ARCHIVE ENGINE // DESIGNED BY PVP_PRO // ALL HARDWARE DATA VALIDATED // Good friend of Vedika I guess 
      </footer>
    </div>
  );
}
