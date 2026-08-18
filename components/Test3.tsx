'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    id: '01',
    title: 'RAW MATERIALS',
    desc: 'Sourcing & Procurement',
    left: '34.37%', // Corresponds to X: 55 in viewBox
    top: '25%',    // Corresponds to Y: 25 in viewBox
    type: 'filled',
    align: 'right', // Text aligns to the right of the node
  },
  {
    id: '02',
    title: 'FORMULATION',
    desc: 'Custom Chemical Blending',
    left: '46.87%', // Corresponds to X: 75 in viewBox
    top: '45%',    // Corresponds to Y: 45 in viewBox
    type: 'filled',
    align: 'left',
  },
  {
    id: '03',
    title: 'QUALITY ASSURANCE',
    desc: 'Rigorous Lab Testing',
    left: '37.50%', // Corresponds to X: 60 in viewBox
    top: '75%',    // Corresponds to Y: 75 in viewBox
    type: 'outlined',
    align: 'right',
  },
  {
    id: '04',
    title: 'LOGISTICS',
    desc: 'Safe & Compliant Transit',
    left: '56.25%', // Corresponds to X: 90 in viewBox
    top: '75%',    // Corresponds to Y: 75 in viewBox
    type: 'filled',
    align: 'left',
  }
];

export default function ChemicalBondsProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Animate SVG Chemical Bonds drawing themselves
      const bonds = gsap.utils.toArray('.chem-bond') as SVGPathElement[];
      
      bonds.forEach((bond) => {
        const length = bond.getTotalLength();
        gsap.set(bond, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(bond, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1, // Binds animation perfectly to scroll
          }
        });
      });

      // 2. Animate Atoms (Nodes) popping in
      gsap.fromTo('.chem-node',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
          }
        }
      );

      // 3. Animate Text Labels fading up
      gsap.fromTo('.chem-label',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 45%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#FAFAFA] py-24 md:py-32 font-sans antialiased overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <span className="text-[#DC2626] font-bold text-xs tracking-widest uppercase mb-4 block">
          Our Process
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
          The Building Blocks of <br /> Pascom Chemistry.
        </h2>
      </div>

      {/* 
        Interactive Chemical Diagram Container 
        Using an exact aspect ratio ensures the HTML elements perfectly overlay the SVG background at all screen sizes!
      */}
      <div className="relative w-full max-w-[1200px] mx-auto aspect-[3/4] md:aspect-[16/10] px-4">
        
        {/* =========================================
            THE SVG CHEMICAL BONDS (Drawn by GSAP)
            ========================================= */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* viewBox 0 0 160 100 creates a 16:10 grid for mapping coordinates */}
          <svg viewBox="0 0 160 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <g stroke="#0F172A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              
              {/* Central Hexagon */}
              <path className="chem-bond" d="M 75 45 L 90 55 L 90 75 L 75 85 L 60 75 L 60 55 Z" />
              {/* Inner Double Bond for Hexagon */}
              <path className="chem-bond" d="M 63 53 L 73 45" />

              {/* Top Link (Node 1 to Node 2) */}
              <path className="chem-bond" d="M 55 25 L 75 25 L 75 45" />

              {/* Far Top Right Double Bond */}
              <path className="chem-bond" d="M 75 25 L 90 10" />
              <path className="chem-bond" d="M 77 27 L 92 12" />

              {/* Top Left Branches */}
              <path className="chem-bond" d="M 55 25 L 55 40" />
              <path className="chem-bond" d="M 55 25 L 45 35" />

              {/* Mid Right Branches (With Outlined Node Placeholder) */}
              <path className="chem-bond" d="M 90 55 L 105 45 L 105 25 L 115 15" />
              <circle className="chem-bond" cx="105" cy="45" r="4" fill="#FAFAFA" />

              {/* Bottom Legs */}
              <path className="chem-bond" d="M 90 75 L 100 85" />
              <path className="chem-bond" d="M 60 75 L 50 85" />

            </g>
          </svg>
        </div>

        {/* =========================================
            HTML INTERACTIVE ATOMS & LABELS
            ========================================= */}
        {processSteps.map((step) => (
          <div 
            key={step.id} 
            className="absolute flex items-center justify-center group"
            style={{ 
              left: step.left, 
              top: step.top, 
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            {/* The Atom (Node) */}
            <div className={`
              chem-node relative w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-125
              ${step.type === 'filled' ? 'bg-[#111111]' : 'bg-white border-4 border-[#111111]'}
            `}>
              {/* Subtle inner highlight to make it look 3D */}
              {step.type === 'filled' && (
                <div className="absolute top-[20%] left-[20%] w-[20%] h-[20%] bg-white/30 rounded-full blur-[1px]"></div>
              )}
            </div>

            {/* The Floating Text Label */}
            <div 
              className={`
                chem-label absolute w-max bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md p-3 md:p-4 rounded-xl pointer-events-none transition-all duration-300 group-hover:border-red-400 group-hover:shadow-red-500/20
                ${step.align === 'left' ? 'right-12 md:right-16 text-right' : 'left-12 md:left-16 text-left'}
              `}
            >
              <span className="text-[#DC2626] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 block">
                0{step.id}
              </span>
              <h3 className="text-gray-900 font-extrabold text-sm md:text-base leading-tight mb-1">
                jo
              </h3>
              <p className="text-gray-500 font-medium text-[11px] md:text-xs">
                {step.desc}
              </p>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
}