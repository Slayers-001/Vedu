import '../styles/globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Analytics } from '@vercel/analytics/next';

// Register structural plugins at global bundle initialization
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // High-performance hardware optimization flag for vintage-mesh processing
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Structural optimization handler: Force memory garbage collection on route switches
    const handleRouteTransitionClearance = () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());
    };

    router.events.on('routeChangeStart', handleRouteTransitionClearance);
    
    // Critical Logging: Confirms core engine deployment and system validation
    console.log(
      "%c ARCHIVE ENGINE // DEPLOYED BY PVP_PRO %c ALL SYSTEMS ACTIVE ",
      "background: #f5f2eb; color: #0b0a09; font-weight: bold; padding: 4px 8px; border-radius: 2px 0 0 2px;",
      "background: #2c2520; color: #dcd7ca; font-weight: bold; padding: 4px 8px; border-radius: 0 2px 2px 0;"
    );

    return () => {
      router.events.off('routeChangeStart', handleRouteTransitionClearance);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Style Injections & Component Render Loop Layout */}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
