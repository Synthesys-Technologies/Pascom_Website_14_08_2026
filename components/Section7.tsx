'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    id: '01',
    client: 'Mining Sector',
    headline: 'Optimizing Extraction Efficiency',
    description: 'Challenge: High dust levels and inefficient mineral processing. Result: 30% increase in yield and fully compliant environmental management.',
    image: 'https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg',
    solutions: [
      { name: 'Toll Blending', icon: 'fa-blender', bg: 'bg-red-500', iconColor: 'text-white' },
      { name: 'Logistics', icon: 'fa-truck-fast', bg: 'bg-red-600', iconColor: 'text-white' }
    ]
  },
  {
    id: '02',
    client: 'Oil & Gas',
    headline: 'Deep Sea Drilling Solutions',
    description: 'Challenge: Extreme pressure environments degrading equipment. Result: Extended machinery lifespan by 40% using custom anti-corrosive chemical solutions.',
    image: 'https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-768x512.jpg',
    solutions: [
      { name: 'Custom Formulation', icon: 'fa-vial', bg: 'bg-red-500', iconColor: 'text-white' },
      { name: 'Offshore Tank Hire', icon: 'fa-water', bg: 'bg-red-600', iconColor: 'text-white' }
    ]
  },
  {
    id: '03',
    client: 'Agriculture',
    headline: 'Sustainable Farming Solutions',
    description: 'Challenge: Poor soil nutrient retention reducing crop yields. Result: Delivered specialized fertilizers leading to a 25% boost in harvest efficiency.',
    image: 'https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg',
    solutions: [
      { name: 'Commodity & Specialty', icon: 'fa-boxes-stacked', bg: 'bg-red-500', iconColor: 'text-white' },
      { name: 'Quality Assurance', icon: 'fa-check-double', bg: 'bg-red-600', iconColor: 'text-white' }
    ]
  },
  {
    id: '04',
    client: 'Water Treatment',
    headline: 'Municipal Water Purification',
    description: 'Challenge: High contaminant levels violating municipal standards. Result: Achieved 99.9% purity levels and full compliance with environmental regulations.',
    image: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg',
    solutions: [
      { name: 'Laboratory Services', icon: 'fa-microscope', bg: 'bg-red-500', iconColor: 'text-white' },
      { name: 'Analytical Services', icon: 'fa-chart-pie', bg: 'bg-red-600', iconColor: 'text-white' }
    ]
  }
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Progress Bar Scroll Animation
      if (progressBarRef.current && containerRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80px',
            end: 'bottom bottom',
            scrub: 0.3,
          }
        });
      }

      // 2. Card Entrance Animations
      const cards = gsap.utils.toArray('.card-inner') as HTMLElement[];

      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              once: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F8FAFC] font-sans antialiased pt-16">
      
      {/* 
        Sticky Header + Progress Bar
        Fixed the invalid class. Used top-[80px] assuming you have a fixed navbar above it.
      */}
      <div className="sticky top-0 md:top-28 z-10 w-full bg-[#F8FAFC] backdrop-blur-xl px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
            How Industries Rely on <span className="text-red-600">Pascom</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl font-medium">
            Real-world solutions delivering tangible results across multiple sectors
          </p>
        </div>

        {/* Top-Right Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
            Progress
          </span>
          <div className="w-32 md:w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              ref={progressBarRef} 
              className="h-full bg-red-600 origin-left scale-x-0"
            ></div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid - Stacking Layout */}
      <div className="w-full mt-12 md:mt-12">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="sticky top-60 w-full mb-16 md:mb-0"
          >
            {/* 
              card-inner: This is the div that GSAP animates. 
              We use Tailwind group/hover states for flawlessly smooth interactive lifting.
            */}
            <div className="card-inner group w-full min-h-125 md:h-[65vh] overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col lg:flex-row cursor-pointer">

              {/* Left: Image (55%) */}
              <div className="w-full lg:w-[55%] h-[35vh] lg:h-full relative overflow-hidden bg-gray-900">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Right: Content (45%) */}
              <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#F8FAFC] overflow-y-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4 block">
                  Case Study {study.id}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  {study.client}
                </h3>

                <p className="text-lg font-bold text-gray-800 mb-3">
                  {study.headline}
                </p>
                <p className="text-sm md:text-[15px] text-gray-600 mb-8 leading-relaxed font-medium">
                  {study.description}
                </p>

                {/* Solutions */}
                <div className="mb-8">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                    Solutions Deployed
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {study.solutions.map((sol, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 transition-colors group-hover:border-red-200">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${sol.bg}`}>
                          <i className={`fa-solid ${sol.icon} text-[10px] ${sol.iconColor}`}></i>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{sol.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-red-600 font-bold mt-auto w-max group-hover:text-red-700 transition-colors">
                  Read Case Study
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}