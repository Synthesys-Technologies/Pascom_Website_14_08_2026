'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const processNodes = [
  {
    id: '01',
    label: 'Oil & Gas',
    desc: 'Pascom supplies essential chemicals for drilling, production, and refining in the oil and gas industry, enhancing efficiency and sustainability',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop',
    x: '15%',
    y: '30%',
    align: 'left', // Label/Card aligns to the right of the node
  },
  {
    id: '02',
    label: 'Mining',
    desc: 'Our chemicals cater to mineral processing, environmental control, and dust management, optimizing extraction efficiency and sustainability.',
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=400&auto=format&fit=crop',
    x: '35%',
    y: '70%',
    align: 'right', // Label/Card aligns to the left of the node
  },
  {
    id: '03',
    label: 'Agriculture',
    desc: 'Pascom develops chemicals that improve crop health, soil fertility, and pest control, supporting sustainable farming practices and higher yields',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop',
    x: '65%',
    y: '70%',
    align: 'left',
  },
  {
    id: '04',
    label: 'Water Treatment',
    desc: 'Our innovative chemicals guarantee clean water solutions and wastewater treatment for municipal, industrial, and environmental and standards.',
    image: 'https://images.unsplash.com/photo-1543419992-628d052ceba4?q=80&w=400&auto=format&fit=crop',
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
            scrub: 8, // Ties the drawing animation directly to the user's scroll speed
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
    // Removed overflow-hidden so the popup cards don't get cut off at the bottom edges
    <section ref={containerRef} className="relative w-full min-h-200 md:min-h-screen bg-[#FDFDFD] font-sans antialiased flex flex-col items-center justify-start pt-32 pb-40">
      
      {/* =========================================
          HERO TEXT & CTA
          ========================================= */}
      <div className="relative z-20 text-center max-w-2xl px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight mb-6">
          The world&apos;s most innovative industries trust Pascom to keep their chemistry flowing.
        </h2>
      </div>

      {/* =========================================
          SVG CHEMICAL BOND LINES (Background)
          ========================================= */}
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
          HTML OVERLAY NODES & POPUP CARDS
          ========================================= */}
      <div className="absolute inset-0 w-full h-full z-10 mt-20 pointer-events-none">
        {processNodes.map((node, index) => (
          <div 
            key={index}
            className="process-node absolute flex items-center justify-center pointer-events-auto"
            style={{ 
              left: node.x, 
              top: node.y, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            
            {/* The Hexagonal "Atom" Node (Wrapper contains the 'group' class for hover targeting) */}
            <div className="relative flex items-center justify-center cursor-pointer group">
              {/* Outer pulsing ring */}
              <div className="absolute w-8 h-8 rounded-full bg-red-100 animate-ping opacity-70"></div>
              
              {/* Hexagon Shape */}
              <div 
                className="w-5 h-5 bg-[#DC2626] flex items-center justify-center transition-transform group-hover:scale-125 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Default Text Label (Blueprint/Monospace style) */}
              <div 
                className={`absolute w-max z-10 transition-opacity duration-300 group-hover:opacity-0 ${node.align === 'left' ? 'left-8' : 'right-8'} text-left`}
              >
                <span className="block text-[11px] font-mono font-bold text-[#111111] uppercase tracking-[0.15em] bg-white/80 backdrop-blur-sm py-1 px-2 rounded border border-gray-100 shadow-sm transition-colors">
                  {node.label}
                </span>
              </div>

              {/* =========================================
                  THE HOVER POPUP CARD VIEW
                  ========================================= */}
              <div 
                className={`
                  absolute top-6 w-[280px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden z-50
                  opacity-0 invisible translate-y-4 scale-95
                  transition-all duration-300 ease-out pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                  ${node.align === 'left' ? 'left-4 origin-top-left' : 'right-4 origin-top-right'}
                `}
              >
                {/* Small Image Place on Top */}
                <div className="relative w-full h-32 bg-gray-100 overflow-hidden">
                  <Image 
                    src={node.image} 
                    alt={node.label} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-white font-bold tracking-tight text-lg drop-shadow-md">
                    {node.label}
                  </span>
                </div>

                {/* Description & Button */}
                <div className="p-5 flex flex-col gap-4">
                  <p className="text-gray-600 text-[13px] font-medium leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}