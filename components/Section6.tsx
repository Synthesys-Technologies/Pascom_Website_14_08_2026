'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DATA MAPPING ---
const blockAData = {
  eyebrow: "Capabilities",
  headline: "Decades of Formulation Excellence.",
  paragraph: "Pascom is your specialist partner for end-to-end chemical manufacturing. We employ a full spectrum of advanced blending methodologies, delivering precision formulations tailored to your exact industrial requirements.",
  buttonText: "Discover Our Capabilities",
  bgColor: "bg-red-950", // Dark Red
  image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
  carousel: [
    { title: "Toll Blending", desc: "High-quality custom chemical blending services tailored to your specific volume and quality requirements." },
    { title: "Custom Formulation", desc: "Crafting bespoke chemical formulations designed for the unique needs of diverse industrial sectors." },
    { title: "Packaging & IBC", desc: "Reliable Intermediate Bulk Containers and packaging solutions for safe chemical storage and transport." },
    { title: "Bulk Supply", desc: "Delivering industrial-scale chemical supplies with an emphasis on consistency and competitive pricing." },
    { title: "Logistics", desc: "Safe chemical transportation and storage with a focus on safety, compliance, and operational efficiency." },
  ]
};

const blockBData = {
  eyebrow: "Industry Leaders in Safety & Compliance",
  headline: "Quality, Safety & Compliance First.",
  paragraph: "Pascom is committed to setting the benchmark for safety within the chemical industry. We adhere strictly to ISO 9001 standards, ensuring our products and processes meet the highest levels of quality and regulatory compliance.",
  buttonText: "Discover Safety & Training",
  bgColor: "bg-red-900", // Red
  image: "	https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
  carousel: [
    { title: "Quality Assurance", desc: "Strict control measures and protocols to ensure our chemical products consistently meet performance benchmarks." },
    { title: "SDS & Compliance", desc: "Comprehensive Safety Data Sheets and regulatory documentation provided with every product delivery." },
    { title: "Lab Testing", desc: "Advanced laboratory services for precise chemical analysis, supporting strict quality control." },
    { title: "Safe Handling", desc: "Investing heavily in employee training to secure safe handling procedures across all operational facilities." },
    { title: "Quarantine Inspection", desc: "Dedicated platforms and teams for rigorous quarantine inspections of larger volumes and diverse cargo." },
  ]
};

// --- REUSABLE SPLIT BLOCK COMPONENT ---
interface BlockData {
  eyebrow: string;
  headline: string;
  paragraph: string;
  buttonText: string;
  bgColor: string;
  image: string;
  carousel: { title: string; desc: string }[];
}

const SplitBlock = ({ data, reversed }: { data: BlockData, reversed: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-advance Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.carousel.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [data.carousel.length, activeIndex]); // Resets timer if user manually clicks

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % data.carousel.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + data.carousel.length) % data.carousel.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [data.carousel.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.carousel.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.carousel.length) % data.carousel.length);
  };

  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[700px]`}>
      
      {/* 1. SOLID COLOR TEXT PANEL */}
      <div className={`w-full lg:w-1/2 ${data.bgColor} relative overflow-hidden flex flex-col justify-center p-10 md:p-16 lg:p-24`}>
        
        {/* Giant Faint Watermark (Pascom 'P' Motif) */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-white">
            <path d="M20 20 H60 C80 20 80 50 60 50 H40 V80 H20 V20 Z M40 35 V40 H60 C65 40 65 35 60 35 H40 Z" fillRule="evenodd"/>
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="relative z-10 reveal-text">
          <span className="block text-white/80 font-bold text-[10px] uppercase tracking-widest mb-4">
            {data.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.05] tracking-tight mb-6">
            {data.headline}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium mb-10 max-w-md">
            {data.paragraph}
          </p>

          {/* Pill CTA Button */}
          <button className="group flex items-center justify-between gap-6 border border-white/40 rounded-full pl-6 pr-1.5 py-1.5 hover:bg-white/10 transition-colors w-max">
            <span className="text-white text-xs font-bold tracking-wide">
              {data.buttonText}
            </span>
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-arrow-right text-white text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
            </div>
          </button>
        </div>
      </div>

      {/* 2. IMAGE PANEL & FLOATING CARD */}
      <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden">
        {/* Full Bleed Photo */}
        <div className="absolute inset-0 w-full h-full reveal-img">
          <Image 
            src={data.image} 
            alt="Pascom Industrial Background" 
            fill 
            className="object-cover"
          />
          {/* Subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Floating White Content Card - Carousel */}
        <div
          ref={carouselRef}
          role="region"
          aria-label="Capability carousel"
          aria-live="polite"
          aria-atomic="true"
          tabIndex={0}
          onClick={handleNext}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNext();
            }
          }}
          className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 lg:left-1/2 lg:-translate-x-1/2 lg:w-[420px] bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer group focus:outline-2 focus:outline-red-600 focus:outline-offset-2 transition-all"
        >
          {/* Content that fades when changing */}
          <div key={activeIndex} className="animate-fadeIn min-h-[140px] flex flex-col justify-center text-center">
            <span className="block text-gray-400 font-bold text-[9px] uppercase tracking-widest mb-2">
              Capability {activeIndex + 1} of {data.carousel.length}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-snug">
              {data.carousel[activeIndex].title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              {data.carousel[activeIndex].desc}
            </p>
          </div>

          {/* Carousel Progress & Navigation */}
          <div className="mt-8 flex items-center justify-between w-full gap-4">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  handlePrev();
                }
              }}
              aria-label="Previous capability"
              className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-red-600 hover:scale-110 transition-all focus:outline-2 focus:outline-red-600 focus:outline-offset-1 rounded"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-0.5 bg-gray-200 rounded-full overflow-hidden relative">
              <div
                key={activeIndex}
                className="absolute top-0 left-0 h-full bg-red-600 animate-fillProgress"
              ></div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNext();
                }
              }}
              aria-label="Next capability"
              className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-red-600 hover:scale-110 transition-all focus:outline-2 focus:outline-red-600 focus:outline-offset-1 rounded"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>

            {/* Indicator */}
            <span className="text-[10px] font-bold text-gray-900 ml-2 min-w-fit">
              {activeIndex + 1}/{data.carousel.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function SplitShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Scroll Reveal Animations
    const ctx = gsap.context(() => {
      // Reveal Text Panels
      gsap.utils.toArray('.reveal-text').forEach((el: any) => {
        // @ts-ignore - GSAP scroll trigger type compatibility
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: "top 85%" }
          }
        );
      });

      // Scale-in Images
      gsap.utils.toArray('.reveal-img').forEach((el: any) => {
        // @ts-ignore - GSAP scroll trigger type compatibility
        gsap.fromTo(el,
          { scale: 1.15 },
          {
            scale: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: "top bottom", scrub: true }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full font-sans antialiased overflow-hidden">

      {/* Block A: Text Left, Image Right */}
      <SplitBlock data={blockAData} reversed={false} />

      {/* Block B: Image Left, Text Right */}
      <SplitBlock data={blockBData} reversed={true} />

      {/* Tailwind Custom Animations for the Carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-fillProgress {
          animation: fillProgress 5s linear forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />

    </section>
  );
}