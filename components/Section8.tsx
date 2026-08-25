'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom-built CSS/SVG badges mapping to Pascom's compliance signals
const accreditations = [
  {
    id: 'iso-9001',
    name: 'ISO 9001',
    element: (
      <div className="flex items-center gap-3 border-2 border-blue-800 px-4 py-2 rounded-sm bg-white">
        <i className="fa-solid fa-check-to-slot text-blue-800 text-2xl"></i>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase leading-none mb-0.5">BUREAU VERITAS</span>
          <span className="text-sm font-black text-blue-900 leading-none">Certified</span>
        </div>
      </div>
    )
  },
  {
    id: 'isn',
    name: 'ISN Networld',
    element: (
      <div className="flex items-center gap-3 border border-gray-300 px-4 py-2 rounded-md bg-gray-50">
        <div className="w-8 h-8 bg-orange-500 text-white font-black text-lg flex items-center justify-center rounded">ISN</div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase leading-none mb-0.5">Class A</span>
          <span className="text-sm font-black text-gray-800 leading-none">Contractor</span>
        </div>
      </div>
    )
  },
  {
    id: 'wa-owned',
    name: 'WA Owned',
    element: (
      <div className="flex items-center gap-3 px-4 py-2 rounded-md border border-yellow-400 bg-yellow-50">
        <i className="fa-solid fa-map-location-dot text-yellow-600 text-xl"></i>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase leading-none mb-0.5">100% Local</span>
          <span className="text-sm font-black text-yellow-700 leading-none">WA Owned</span>
        </div>
      </div>
    )
  }
];

export default function AccreditationsStrip() {
  const stripRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle fade-up reveal on scroll
      if (stripRef.current) {
        gsap.fromTo(
          stripRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stripRef.current,
              start: 'top 90%', // Triggers when the strip enters the bottom 10% of the screen
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Duplicate the array to create a seamless infinite marquee loop
  const duplicatedAccreditations = [...accreditations, ...accreditations, ...accreditations];

  return (
    <section
      ref={stripRef}
      className="w-full bg-[#f5f5f7] overflow-hidden font-sans antialiased band-spacing"
    >
      
      {/* Container for the continuous scroll */}
      <div className="relative w-full flex">
        
        {/* Marquee Track */}
        {/* 'hover:[animation-play-state:paused]' stops the scrolling if the user hovers over a badge */}
        <div className="flex w-max animate-slow-marquee hover:[animation-play-state:paused] items-center gap-16 md:gap-24 pr-16 md:pr-24">
          
          {duplicatedAccreditations.map((item, index) => (
            <div 
              key={index}
              // The core logic for the Muted -> Color interaction
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer shrink-0"
              title={item.name}
            >
              {/* If you have actual logo images later, you would replace '{item.element}' with:
                  <Image src={item.logoUrl} alt={item.name} width={150} height={60} className="object-contain" /> 
              */}
              {item.element}
            </div>
          ))}

        </div>
      </div>

      {/* Global CSS for the infinite marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } /* Translates 1/3 because we tripled the array */
        }
        .animate-slow-marquee {
          /* 40s makes it a "quiet", slow-moving background band */
          animation: slow-marquee 40s linear infinite; 
        }
      `}} />

    </section>
  );
}