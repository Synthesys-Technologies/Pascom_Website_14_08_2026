'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  { name: "Oil & Gas", icon: "fa-fire-flame-simple" },
  { name: "Mining", icon: "fa-gem" },
  { name: "Agriculture", icon: "fa-wheat-awn" },
  { name: "Water Treatment", icon: "fa-droplet" },
  { name: "Chemical Formulation", icon: "fa-flask" },
  { name: "Logistics", icon: "fa-truck-fast" },
  { name: "Offshore Tanks", icon: "fa-anchor" },
];

export default function PartnersMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Headline Scroll Reveal (Fades up smoothly)
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%", // Triggers when top of section hits 80% of viewport
            },
          }
        );
      }

      // 2. Watermark Parallax Drift
      if (watermarkRef.current && sectionRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: "-10%" },
          {
            y: "10%", // Slowly drifts downward as user scrolls past
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true, // Ties animation perfectly to the scrollbar
            },
          }
        );
      }
    });

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  // Duplicate the array to create a seamless infinite loop
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAFAFA] overflow-hidden font-sans antialiased band-spacing flex flex-col items-center justify-center"
    >

      {/* =========================================
          BACKGROUND WATERMARK (Parallax)
          ========================================= */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]"
      >
        {/* Giant Monogram/Chemical Emblem SVG */}
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] text-red-600">
          <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="40" />
          <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="40" />
          <path d="M250 50 L250 450" stroke="currentColor" strokeWidth="40" strokeLinecap="round"/>
          <path d="M50 250 L450 250" stroke="currentColor" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>

      {/* =========================================
          CONTENT: EYEBROW & HEADLINE
          ========================================= */}
      <div
        ref={headlineRef}
        className="relative z-10 text-center content-max mb-16 md:mb-24"
      >
        <span className="type-xs text-red-700 mb-4">
          Decades of reliable supply.
        </span>
        <h2 className="type-display text-gray-800">
          Your operations demand <br className="hidden md:block" />
          <span className="text-red-600">reliable chemistry.</span><br />
          We deliver it.
        </h2>
      </div>

      {/* =========================================
          CONTINUOUS SCROLLING MARQUEE
          ========================================= */}
      <div className="relative z-10 w-full overflow-hidden flex">
        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-6 pr-6">
          {duplicatedIndustries.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-[0_10px_20px_rgba(220,38,38,0.15)] hover:bg-red-700 transition-colors cursor-pointer shrink-0"
            >
              <i className={`fa-solid ${item.icon} text-lg md:text-xl`}></i>
              <span className="font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Global Style for the Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />

    </section>
  );
}