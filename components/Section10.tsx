'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidButton from './LiquidButton';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CtaBand() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw SVG Outlines Animation
      // We calculate the length of each path and animate its dash offset
      const paths = gsap.utils.toArray('.draw-path') as SVGPathElement[];
      
      paths.forEach((path) => {
        const length = path.getTotalLength();
        
        // Initial state: line is completely hidden
        gsap.set(path, { 
          strokeDasharray: length, 
          strokeDashoffset: length 
        });

        // Animation: line draws itself
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Starts when section is 75% down the viewport
            once: true,
          }
        });
      });

      // 2. Text & Button Fade Up Reveal
      gsap.fromTo(
        '.reveal-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, // Delays the button slightly after the text
          ease: 'power3.out',
          delay: 0.5, // Waits a moment for the lines to start drawing
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] bg-white flex flex-col items-center justify-center overflow-hidden font-sans antialiased band-spacing"
    >
      
      {/* =========================================
          GEOMETRIC BACKGROUND (SVG Drawing)
          ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[1200px] h-[1200px] md:w-[1500px] md:h-[1500px] opacity-40 text-red-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Outer Rounded Geometric Frame */}
          <rect 
            className="draw-path" 
            x="100" y="100" width="800" height="800" rx="200" 
            transform="rotate(45 500 500)" 
          />
          {/* Middle Rounded Geometric Frame */}
          <rect 
            className="draw-path" 
            x="220" y="220" width="560" height="560" rx="150" 
            transform="rotate(45 500 500)" 
          />
          {/* Inner Rounded Geometric Frame */}
          <rect 
            className="draw-path" 
            x="340" y="340" width="320" height="320" rx="100" 
            transform="rotate(45 500 500)" 
          />
        </svg>
      </div>

      {/* =========================================
          FOREGROUND CONTENT
          ========================================= */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h2 className="reveal-item text-3xl md:text-4xl lg:text-[2.75rem] font-light text-gray-800 leading-[1.3] tracking-tight mb-10">
          WA's leading operations trust Pascom <br className="hidden md:block" />
          to keep their chemistry flowing.
        </h2>

        {/* Accent CTA Button */}
        <div className="reveal-item">
          <LiquidButton
            onClick={() => {}}
            liquidColor="var(--color-primary-red)"
            style={{
              borderColor: "var(--color-primary-red)",
              backgroundColor: "var(--color-dark-red)",
              color: "var(--color-white)",
            }}
            className="text-sm font-bold gap-2"
          >
            <span>Request a Quote</span>
          </LiquidButton>
        </div>

      </div>

      {/* Tailwind Custom Keyframes for Button Hover Shine */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { margin-left: 100%; }
        }
        .animate-shine {
          animation: shine 1s ease-in-out infinite;
        }
      `}} />

    </section>
  );
}