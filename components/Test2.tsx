'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const processNodes = [
  {
    id: '01',
    label: 'Oil & Gas',
    x: '15%',
    y: '30%',
    align: 'left',
  },
  {
    id: '02',
    label: 'Mining',
    x: '35%',
    y: '70%',
    align: 'right',
  },
  {
    id: '03',
    label: 'Agriculture',
    x: '65%',
    y: '70%',
    align: 'left',
  },
  {
    id: '04',
    label: 'Water Treatment',
    x: '85%',
    y: '30%',
    align: 'right',
  }
];

export default function TopIndustries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the SVG "Chemical Bonds" (Lines drawing themselves)
      const paths = gsap.utils.toArray('.bond-line') as SVGPathElement[];
      
      paths.forEach((path) => {
        const length = path.getTotalLength();
        
        // Set initial state (invisible)
        gsap.set(path, { 
          strokeDasharray: length, 
          strokeDashoffset: length 
        });

        // Draw the lines dynamically on scroll
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1, // Ties the drawing animation directly to the user's scroll speed
          }
        });
      });

      // 2. Fade in the "Atoms" (Nodes and Text)
      gsap.fromTo('.process-node', 
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[800px] md:min-h-screen bg-[#FDFDFD] font-sans antialiased overflow-hidden flex flex-col items-center justify-start pt-32 pb-24">
      
      {/* =========================================
          HERO TEXT & CTA
          ========================================= */}
      <div className="relative z-20 text-center max-w-2xl px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight mb-6">
          The world&apos;s most innovative industries trust Pascom to keep their chemistry flowing.
        </h2>
        <a href="#" className="inline-flex items-center gap-3 bg-[#DC2626] text-white text-sm font-bold px-6 py-2.5 rounded-sm hover:bg-red-700 transition-colors shadow-md group">
          Get in Touch
          <div className="w-4 h-4 bg-white flex items-center justify-center rounded-[2px]">
            <i className="fa-solid fa-arrow-up-right text-[8px] text-[#DC2626] group-hover:translate-x-px group-hover:-translate-y-px transition-transform"></i>
          </div>
        </a>
      </div>

      {/* =========================================
          SVG CHEMICAL BOND LINES (Background)
          ========================================= */}
      {/* We use a specific viewBox and preserveAspectRatio="none" to stretch the lines across the container while maintaining node intersections */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none mt-20">
        <svg 
          viewBox="0 0 1000 500" 
          preserveAspectRatio="none" 
          className="w-full h-full opacity-60"
        >
          {/* Main Bond Track 1 */}
          <path 
            className="bond-line" 
            d="M -50 150 L 150 150 L 350 350 L 650 350 L 850 150 L 1050 150" 
            fill="none" 
            stroke="#DC2626" 
            strokeWidth="1.5" 
            strokeLinejoin="miter" 
          />
          {/* Parallel Bond Track 2 (Faded) */}
          <path 
            className="bond-line" 
            d="M -50 120 L 165 120 L 365 320 L 635 320 L 835 120 L 1050 120" 
            fill="none" 
            stroke="#9CA3AF" 
            strokeWidth="1" 
            strokeLinejoin="miter" 
          />
          {/* Parallel Bond Track 3 (Faded) */}
          <path 
            className="bond-line" 
            d="M -50 180 L 135 180 L 335 380 L 665 380 L 865 180 L 1050 180" 
            fill="none" 
            stroke="#9CA3AF" 
            strokeWidth="1" 
            strokeLinejoin="miter" 
          />
        </svg>
      </div>

      {/* =========================================
          HTML OVERLAY NODES ("Atoms")
          ========================================= */}
      {/* Positioned absolutely using percentages to perfectly match the SVG vertices */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none mt-20">
        {processNodes.map((node, index) => (
          <div 
            key={index}
            className="process-node absolute flex items-center justify-center"
            style={{ 
              left: node.x, 
              top: node.y, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            
            {/* The Hexagonal "Atom" Node */}
            <div className="relative flex items-center justify-center pointer-events-auto group cursor-pointer">
              {/* Outer pulsing ring */}
              <div className="absolute w-8 h-8 rounded-full bg-red-100 animate-ping opacity-70"></div>
              
              {/* Hexagon Shape */}
              <div 
                className="w-5 h-5 bg-[#DC2626] flex items-center justify-center transition-transform group-hover:scale-125 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Text Label (Blueprint/Monospace style matching reference) */}
              <div 
                className={`absolute w-max ${node.align === 'left' ? 'right-8 pr-2' : 'left-8 pl-2'} text-left`}
              >
                <span className="block text-[11px] font-mono font-bold text-[#111111] uppercase tracking-[0.15em] bg-white/80 backdrop-blur-sm py-1 px-2 rounded border border-gray-100 shadow-sm group-hover:text-[#DC2626] transition-colors">
                  {node.label}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}