'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin);
}

export default function ChemicalMolecule() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Draw the chemical bonds
      const bonds = gsap.utils.toArray('.bond') as SVGElement[];
      bonds.forEach((bond) => {
        // SVG lines might not have getTotalLength in all browsers, fallback to 500
        const length = (bond as any).getTotalLength ? (bond as any).getTotalLength() : 500;
        gsap.set(bond, { strokeDasharray: length, strokeDashoffset: length });
      });

      tl.to('.bond', {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power3.inOut',
        stagger: 0.05,
      });

      // 2. Pop in the Atoms (3D spheres)
      tl.fromTo(
        '.atom',
        { scale: 0, transformOrigin: 'center center' },
        {
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          stagger: 0.02,
        },
        '-=1.5' // Start while bonds are still drawing
      );

      // 3. Continuous gentle floating of the entire molecule
      gsap.to('.molecule-group', {
        y: -15,
        rotation: 2,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // 4. Energy particle traveling along the molecular backbone
      gsap.to('.electron', {
        duration: 10,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#backbone-path',
          align: '#backbone-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full  text-white">
      <div className="max-w-7xl w-full grid grid-cols-1 mx-auto">
        {/* =========================================
            RIGHT CONTENT: Pure SVG 3D Molecule
            ========================================= */}
        <div className="relative w-full aspect-square max-w-150 mx-auto">
          {/* Background ambient glow behind molecule */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full overflow-visible molecule-group drop-shadow-2xl"
          >
            {/* --- DEFINITIONS (Grayscale Gradients for all atoms) --- */}
            <defs>
              {/* Heavy Gray for Carbon, Oxygen, Nitrogen equivalents */}
              <radialGradient id="heavy-gray" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#A1A1AA" /> {/* Light Zinc */}
                <stop offset="50%" stopColor="#450A0A" /> {/* Dark Zinc */}
                <stop offset="100%" stopColor="#CBD5E1" /> {/* Near Black */}
              </radialGradient>

              {/* Light Gray for Hydrogen equivalents */}
              <radialGradient id="light-gray" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#D4D4D8" />
                <stop offset="100%" stopColor="#71717A" />
              </radialGradient>

              {/* Drop shadow for lines to give depth */}
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="5" dy="10" stdDeviation="5" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* --- INVISIBLE MOTION PATH (For the electron to travel on) --- */}
            <path
              id="backbone-path"
              fill="none"
              stroke="none"
              d="M 850 250 L 730 350 L 600 250 L 460 330 L 520 480 L 410 610 L 410 740 L 410 610 L 260 550 L 120 680 L 260 550 L 210 400 L 330 270 L 460 330 L 600 250 L 730 350 L 850 250 Z"
            />

            {/* --- CHEMICAL BONDS (Lines connecting the spheres) --- */}
            <g stroke="#64748B" strokeWidth="12" strokeLinecap="round" filter="url(#shadow)">
              {/* Benzene Ring */}
              <line className="bond" x1="460" y1="330" x2="330" y2="270" />
              <line className="bond" x1="330" y1="270" x2="210" y2="400" />
              <line className="bond" x1="210" y1="400" x2="260" y2="550" />
              <line className="bond" x1="260" y1="550" x2="410" y2="610" />
              <line className="bond" x1="410" y1="610" x2="520" y2="480" />
              <line className="bond" x1="520" y1="480" x2="460" y2="330" />

              {/* Double Bonds in Ring (Inner lines) */}
              <line className="bond" x1="430" y1="355" x2="335" y2="305" strokeWidth="8" />
              <line className="bond" x1="245" y1="415" x2="285" y2="535" strokeWidth="8" />
              <line className="bond" x1="485" y1="490" x2="400" y2="585" strokeWidth="8" />

              {/* Side Chain */}
              <line className="bond" x1="460" y1="330" x2="600" y2="250" />
              <line className="bond" x1="600" y1="250" x2="730" y2="350" />
              <line className="bond" x1="730" y1="350" x2="850" y2="250" />

              {/* Bottom Groups */}
              <line className="bond" x1="260" y1="550" x2="120" y2="680" />
              <line className="bond" x1="410" y1="610" x2="410" y2="740" />

              {/* Bonds to Outer Nodes (small lines) */}
              <line className="bond" x1="330" y1="270" x2="280" y2="180" strokeWidth="8" />
              <line className="bond" x1="210" y1="400" x2="130" y2="380" strokeWidth="8" />
              <line className="bond" x1="520" y1="480" x2="620" y2="490" strokeWidth="8" />
              <line className="bond" x1="600" y1="250" x2="570" y2="150" strokeWidth="8" />
              <line className="bond" x1="600" y1="250" x2="660" y2="170" strokeWidth="8" />
              <line className="bond" x1="730" y1="350" x2="690" y2="440" strokeWidth="8" />
              <line className="bond" x1="730" y1="350" x2="800" y2="420" strokeWidth="8" />
              <line className="bond" x1="850" y1="250" x2="930" y2="290" strokeWidth="8" />
              <line className="bond" x1="850" y1="250" x2="910" y2="170" strokeWidth="8" />
              <line className="bond" x1="120" y1="680" x2="130" y2="760" strokeWidth="8" />
              <line className="bond" x1="410" y1="740" x2="330" y2="800" strokeWidth="8" />
            </g>

            {/* --- ATOMS (All styled in Grayscale) --- */}
            <g>
              {/* Outer smaller atoms (Light Gray) - Radius 25 */}
              <circle className="atom" cx="280" cy="180" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="130" cy="380" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="620" cy="490" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="570" cy="150" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="660" cy="170" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="690" cy="440" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="800" cy="420" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="930" cy="290" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="910" cy="170" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="130" cy="760" r="25" fill="url(#light-gray)" />
              <circle className="atom" cx="330" cy="800" r="25" fill="url(#light-gray)" />

              {/* Core backbone atoms (Heavy Gray) - Radius 45 */}
              <circle className="atom" cx="460" cy="330" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="330" cy="270" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="210" cy="400" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="260" cy="550" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="410" cy="610" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="520" cy="480" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="600" cy="250" r="45" fill="url(#heavy-gray)" />
              <circle className="atom" cx="730" cy="350" r="45" fill="url(#heavy-gray)" />

              {/* Bottom major groups (Heavy Gray) - Radius 50 */}
              <circle className="atom" cx="120" cy="680" r="50" fill="url(#heavy-gray)" />
              <circle className="atom" cx="410" cy="740" r="50" fill="url(#heavy-gray)" />

              {/* Far right major group (Heavy Gray) - Radius 50 */}
              <circle className="atom" cx="850" cy="250" r="50" fill="url(#heavy-gray)" />
            </g>

            {/* --- TRAVELING ELECTRON (Single Red Particle) --- */}
            <g className="electron">
              {/* Core Particle Only */}
              <circle cx="0" cy="0" r="18" fill="#db0000" />
            </g>

          </svg>
        </div>
      </div>
    </section>
  );
}