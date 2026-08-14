'use client';

import { useState, useEffect } from 'react';

// Mock data adapted for Pascom Chemical Manufacturing
const caseStudies = [
  {
    id: 1,
    client: 'Pascom Enterprise',
    title: 'Custom Toll Blending for Mining Sector',
    description: 'We analyze your workflows, chemical bottlenecks, and production opportunities to deliver high-yield formulations.',
    image: 'https://images.unsplash.com/photo-1605557202133-46b613e51f50?q=80&w=800&auto=format&fit=crop', // Dark fluid abstract
    stats: [
      { value: '+40%', label: 'Yield Output' },
      { value: '+25%', label: 'Cost Savings' },
      { value: '3x', label: 'Efficiency' },
    ],
  },
  {
    id: 2,
    client: 'Pascom Logistics',
    title: 'Offshore Tank & IBC Supply Network',
    description: 'Secure, compliant, and scalable chemical storage solutions designed specifically for unique offshore operations.',
    image: 'https://images.unsplash.com/photo-1587840158498-8cece13fcd4a?q=80&w=800&auto=format&fit=crop', // Industrial tank
    stats: [
      { value: '100%', label: 'Compliance' },
      { value: '-20%', label: 'Transit Time' },
      { value: '0', label: 'Incidents' },
    ],
  },
  {
    id: 3,
    client: 'Pascom Labs',
    title: 'Advanced Particle & Oxygen Analysis',
    description: 'State-of-the-art laboratory testing ensuring exceptional quality, precision, and full regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9db0c28a3?q=80&w=800&auto=format&fit=crop', // Lab/Microscope
    stats: [
      { value: '99.9%', label: 'Purity Level' },
      { value: '24/7', label: 'Monitoring' },
      { value: '10k+', label: 'Tests Run' },
    ],
  },
];

export default function Card() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    // Outer dark noise background to frame the white app window
    <section className="w-full min-h-screen bg-[#cbc6c6] py-12 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle radial glow behind the white container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main White App Window (Matching the image) */}
      <div className="relative w-full max-w-300 bg-white rounded-[3rem] shadow-2xl py-20 px-4 md:px-8 overflow-hidden flex flex-col items-center">
        
        {/* Top Pill Badge */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
          <span className="text-gray-400 text-[10px] font-bold tracking-widest">005</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
          <span className="text-gray-900 text-[10px] font-bold uppercase tracking-widest">Case Studies</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[2.75rem] font-semibold text-gray-900 mb-16 tracking-tight">
          What We&apos;ve Built
        </h2>

        {/* 3D Carousel Container */}
        <div
          role="region"
          aria-label="Case studies carousel"
          aria-live="polite"
          aria-atomic="true"
          className="relative w-full h-112.5 flex items-center justify-center mb-12 perspective-1000"
        >

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                prevSlide();
              }
            }}
            aria-label="Previous case study"
            className="absolute left-4 md:left-[10%] xl:left-[15%] z-40 w-10 h-10 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>

          <button
            onClick={nextSlide}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
              }
            }}
            aria-label="Next case study"
            className="absolute right-4 md:right-[10%] xl:right-[15%] z-40 w-10 h-10 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>

          {/* Cards Mapping */}
          {caseStudies.map((item, index) => {
            // Determine relative position for the 3D effect
            let position = 'hidden';
            if (index === activeIndex) position = 'center';
            else if (index === activeIndex - 1 || (activeIndex === 0 && index === caseStudies.length - 1)) position = 'left';
            else if (index === activeIndex + 1 || (activeIndex === caseStudies.length - 1 && index === 0)) position = 'right';

            return (
              <div
                key={item.id}
                className={`absolute w-full max-w-[850px] h-[400px] transition-all duration-700 ease-in-out cursor-pointer ${
                  position === 'center'
                    ? 'z-30 scale-100 opacity-100 translate-x-0'
                    : position === 'left'
                    ? 'z-20 scale-75 opacity-40 -translate-x-[25%] blur-[4px] pointer-events-none'
                    : position === 'right'
                    ? 'z-20 scale-75 opacity-40 translate-x-[25%] blur-[4px] pointer-events-none'
                    : 'z-10 scale-50 opacity-0 pointer-events-none'
                }`}
                onClick={() => {
                  if (position === 'left') prevSlide();
                  if (position === 'right') nextSlide();
                }}
              >
                {/* The Card Itself */}
                <div className="w-full h-full bg-[#F4F4F6] rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row">
                  
                  {/* Left Dark Image Container */}
                  <div className="w-full md:w-[55%] h-full bg-[#121315] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center group">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Subtle inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                  </div>

                  {/* Right Content */}
                  <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-8 md:px-12 py-8">
                    
                    {/* Logo/Client Name */}
                    <div className="flex items-center gap-2 mb-6">
                      <i className="fa-solid fa-layer-group text-gray-800 text-xl"></i>
                      <span className="font-bold text-gray-900 tracking-tight text-lg">{item.client}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Read More Link */}
                    <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-800 uppercase tracking-wider hover:text-blue-600 transition-colors mb-8">
                      Read More <i className="fa-solid fa-circle-arrow-right text-gray-400 text-sm"></i>
                    </a>

                    {/* Stats Grid */}
                    <div className="flex items-center gap-6 mt-auto">
                      {item.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</span>
                          <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mb-10" role="tablist" aria-label="Slide navigation">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to case study ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 ${
                index === activeIndex
                  ? 'w-6 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300'
                  : 'w-1.5 bg-gray-200 cursor-pointer hover:bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            ></button>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <a href="#" className="relative group inline-block">
          {/* Subtle glow behind button */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <button className="relative bg-[#161719] text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow-lg border border-gray-700/50 hover:bg-black transition-colors">
            Explore all Case Studies
          </button>
        </a>

      </div>
    </section>
  );
}