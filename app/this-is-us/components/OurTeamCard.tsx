'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    id: 1,
    client: 'Director',
    title: 'David Schwartz',
    description: 'David was a founding Director of Primewest Management and was instrumental in growing its property portfolio to over $5bn prior to their merge with Centuria (ASX: CNI) in 2021.',
    readMore: 'David is a professional property investor with over 25 years of experience in negotiating acquisitions and overseeing the development of property across a wide range of asset classes. Over the past 40 years David has been involved in many different businesses including Pascoes Pty Ltd, Stefani Pty Ltd and Gelflex Pty Ltd. David is a Non-Executive Director of Schaffer Corporation Ltd (ASX: SFC)',
    image: '/this-is-us/David_Schwartz.jpg',
  },
  {
    id: 2,
    client: 'Director',
    title: 'Ian Schwartz',
    description: 'Ian holds a B.Sc. (Agric) and has amassed over 40 years of diverse business experience in manufacturing, retail and agriculture. He was the Managing Director of Pascoes Pty Ltd',
    readMore: 'for 23 years, where he led the growth and development of one of Australia’s largest independent chemical manufacturing operations. Currently, Ian is actively involved in several businesses, including Stefani Pty Ltd, Gelflex, BH Fine Foods Pty Ltd, and Diamondtree Stud Pty Ltd. His extensive background includes significant expertise in business acquisitions, operations and strategic growth.',
    image: '/this-is-us/Ian_Schwartz.jpg',
  },
  {
    id: 3,
    client: 'Director',
    title: 'Marc Schwartz',
    description: 'Marc has enjoyed a great career in business, beginning as Manager of Structured Finance Products at Macquarie Bank in 2007. From 2008 to 2018, he served as Director of Pascoes Pty Ltd',
    readMore: 'overseeing a company with 150 employees across two manufacturing sites and managing the production and distribution of over 400 items to retailers. Currently, Marc is a Director at Gelflex Laboratories and at Blackfox Property, a property syndication firm. He also serves as the current Chair of YPO Sydney Pacific. His expertise lies in operational and financial efficiency, investment, and strategic planning.',
    image: '/this-is-us/Marc_Schwartz.png',
  },
];

export default function OurTeamCard() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // Horizontal progress line animation (0% to 100%)
      timeline.fromTo(
        progressLineRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 2.4, // Total duration for all cards
          ease: 'power1.inOut',
        },
        0 // Start at the same time as cards
      );

      // Sequential card reveal from left to right
      timeline.fromTo(
        '.team-card',
        {
          y: 60,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.5, // 0.5s delay between each card
          ease: 'power2.out',
        },
        0 // Start simultaneously with the progress line
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full font-sans antialiased overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>

      {/* Subtle red gradient glow effect in background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 800px 400px at 50% 20%, rgba(198, 40, 40, 0.08) 0%, transparent 70%)`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--color-dark-red)" }}>
            The Visionaries Behind <br /> Pascom&apos;s Success
          </h2>
          <p className="text-base font-medium leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--color-primary-red)" }}>
            Meet the dedicated professionals driving our chemical manufacturing excellence and delivering innovative solutions to elevate your industrial projects.
          </p>
        </div>

        {/* 3-Column Staircase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-16">

          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-card relative w-full group"
              style={{
                // THE STAIRCASE EFFECT: Increases top margin for each subsequent card on desktop
                marginTop: index === 0 ? '0px' : index === 1 ? '40px' : '80px',
              }}
            >
              {/* Main Card Container */}
              <div
                className={`relative w-full rounded-[2rem] overflow-hidden shadow-lg transition-all duration-700 ease-in-out border border-red-100 ${
                  expandedId === member.id ? 'h-[650px] md:h-[600px]' : 'h-[500px]'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(198, 40, 40, 0.05) 0%, rgba(198, 40, 40, 0.02) 100%)'
                }}
              >
                {/* Background Profile Image */}
                <Image 
                  src={member.image} 
                  alt={member.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay to ensure text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 pointer-events-none"></div>

                {/* Frosted Glass Overlay (Bottom Info Panel) */}
                <div
                  className={`absolute bottom-3 left-3 right-3 rounded-[1.5rem] backdrop-blur-md flex flex-col justify-end transition-all duration-500 overflow-hidden ${
                    expandedId === member.id ? 'p-6 h-auto' : 'p-6'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(198, 40, 40, 0.15)',
                    boxShadow: '0 4px 24px rgba(198, 40, 40, 0.1)'
                  }}
                >
                  
                  {/* Expand / Collapse Button (Floating Top Right inside the glass) */}
                  <button
                    onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                    className="absolute top-4 right-4 w-8 h-8 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                    style={{
                      backgroundColor: expandedId === member.id ? "var(--color-primary-red)" : "rgba(198, 40, 40, 0.1)",
                      border: expandedId === member.id ? "1px solid var(--color-primary-red)" : "1px solid rgba(198, 40, 40, 0.2)"
                    }}
                  >
                    <i className={`fa-solid fa-arrow-up-right text-xs transition-transform duration-300 ${expandedId === member.id ? 'rotate-180' : ''}`} style={{ color: expandedId === member.id ? "white" : "var(--color-dark-red)" }}></i>
                  </button>

                  <div className="relative z-10 w-full pr-8">
                    {/* Title / Name */}
                    <h3 className="font-bold text-2xl mb-1 leading-snug tracking-tight" style={{ color: "var(--color-dark-red)" }}>
                      {member.title}
                    </h3>

                    {/* Role */}
                    <span className="text-sm font-semibold tracking-wide block mb-4" style={{ color: "var(--color-primary-red)" }}>
                      {member.client}
                    </span>

                    {/* Short Description */}
                    <p className={`text-sm leading-relaxed font-medium transition-all duration-300 ${expandedId === member.id ? 'mb-4' : 'mb-6 line-clamp-3'}`} style={{ color: "rgba(69, 10, 10, 0.7)" }}>
                      {member.description}
                    </p>

                    {/* Expanded Content (Read More) */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        expandedId === member.id ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm leading-relaxed font-medium pt-2" style={{ color: "rgba(69, 10, 10, 0.7)", borderTop: "1px solid rgba(198, 40, 40, 0.2)" }}>
                        {member.readMore}
                      </p>
                    </div>

                    {/* Social Icons Footer */}
                    <div className="flex items-center gap-3">
                      <a href="#" className="w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "var(--color-primary-red)" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
                        <i className="fa-brands fa-linkedin-in text-[10px]"></i>
                      </a>
                      <a href="#" className="w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "var(--color-primary-red)" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
                        <i className="fa-solid fa-envelope text-[10px]"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}