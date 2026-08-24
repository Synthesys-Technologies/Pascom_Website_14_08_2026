'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: 'Toll Blending',
    badge: 'Core',
    desc: 'Pascom provides high-quality custom chemical blending services tailored to meet the specific needs of each client.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1307245429-1024x683.jpg',
    color: '#1A4D66',
  },
  {
    id: 2,
    title: 'Chemical Formulation',
    badge: 'Custom',
    desc: 'Pascom specializes in crafting customized chemical formulations designed for the unique needs of various industries.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1354700049-1024x683.jpg',
    color: '#2A3B4C',
  },
  {
    id: 3,
    title: 'Commodity & Specialty',
    badge: 'Supply',
    desc: 'Pascom supplies a range of industrial chemicals, including specialty formulations tailored to meet industry needs.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/0-11-1024x683.jpg',
    color: '#4A3424',
  },
  {
    id: 4,
    title: 'IBC Supplying',
    badge: 'Storage',
    desc: 'Pascom supplies high-quality IBC containers that are designed for secure chemical storage and transportation.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-768x513.jpg',
    color: '#214E34',
  },
  {
    id: 5,
    title: 'Chemical Logistics',
    badge: 'Transit',
    desc: 'Pascom ensures safe chemical transportation and storage with a focus on safety, compliance, and efficiency.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1924474256-1024x683.jpg',
    color: '#2C3A5A',
  },
  {
    id: 6,
    title: 'Offshore Tank Hire',
    badge: 'Marine',
    desc: 'Pascom provides secure chemical storage solutions that are customized for the complexities of offshore operations.',
    img: 'https://pascom.com.au/wp-content/uploads/2026/02/DSC7200-1024x683.jpg',
    color: '#102E4A',
  },
  {
    id: 7,
    title: 'Laboratory Services',
    badge: 'Testing',
    desc: 'We offer comprehensive chemical testing and analysis services to ensure quality and compliance.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/07/0-40-1024x683.jpg',
    color: '#382B47',
  },
  {
    id: 8,
    title: 'Leak Proof Testing',
    badge: 'Safety',
    desc: 'Pascom conducts rigorous testing to ensure the integrity and leak-proof safety of chemical containers.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/leak-proof-1024x683.png',
    color: '#5A2A2A',
  },
  {
    id: 9,
    title: 'Analytical Services',
    badge: 'QC',
    desc: 'Pascom delivers precise chemical analysis to support quality control and regulatory compliance needs.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/09/image-1024x683.png',
    color: '#1B4958',
  },
  {
    id: 10,
    title: 'Quarantine Inspection',
    badge: 'Verify',
    desc: 'We’ve enhanced our quarantine inspection with a new platform and dedicated team for larger volumes and diverse cargo.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/07/0-40-1024x683.jpg',
    color: '#3E422C',
  },
  {
    id: 11,
    title: 'Particle Analyzing',
    badge: 'Tech',
    desc: 'Introducing advanced particle analysis for water-glycol samples in offshore oil and gas, using cutting-edge technology.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/08/iStock-1184908200-1024x683.jpg',
    color: '#233038',
  },
  {
    id: 12,
    title: 'Oxygen Analyzing',
    badge: 'Precise',
    desc: 'Pascom delivers precise chemical analysis to support quality control and regulatory compliance needs.',
    img: 'https://pascom.com.au/wp-content/uploads/2024/09/New-Project-5-1-1024x683.png',
    color: '#483226',
  }
];

export default function ServicesHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;

      if (!track || !section) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      // 1. HORIZONTAL SCROLL TIMELINE
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1, 
          invalidateOnRefresh: true,
        },
      });

      // 2. PARALLAX IMAGE EFFECT INSIDE CARDS
      const images = gsap.utils.toArray('.card-img') as HTMLElement[];
      images.forEach((img) => {
        gsap.to(img, {
          xPercent: 30, 
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            containerAnimation: tween,
            start: 'left right',
            end: 'right left',
            scrub: true,
          },
        });
      });

      // 3. CHEMICAL BOND PATH-DRAWING PROGRESS BAR
      const drawPaths = gsap.utils.toArray('.chem-progress-draw') as SVGGeometryElement[];
      
      // Calculate length and set initially hidden (offset = length)
      drawPaths.forEach((el) => {
        const length = el.getTotalLength ? el.getTotalLength() : 100;
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
      });

      // Draw the red lines as user scrolls horizontally
      gsap.to('.chem-progress-draw', {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 0.1, // Super smooth tracking
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#f5f5f7] font-sans antialiased overflow-hidden text-white flex flex-col"
    >
      {/* =========================================
          HEADER & CHEMICAL PROGRESS SVG
          ========================================= */}
      <div className="w-full px-6 md:px-16 pt-12 md:pt-24 shrink-0 flex justify-between items-start relative z-50">
        
        {/* Left: Text */}
        <div className="max-w-2xl">
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4"
            style={{ color: 'var(--color-primary-red)' }}
          >
            Our Core{" "}
            <span style={{ color: 'var(--color-dark-red)' }}>Services</span>
          </h2>
          <p
            className="text-white/70 text-sm md:text-base font-medium"
            style={{ color: 'var(--color-dark-red)' }}
          >
            Scroll to explore our comprehensive range of chemical solutions and
            expertise.
          </p>
        </div>

        {/* Right: SVG Chemical Bond Drawing Progress */}
        <div className="hidden md:flex flex-col items-center mt-5 gap-2 mr-8">
          <div className="relative w-[130px] h-[130px]">
            {/* Base Gray Molecule Background (Always visible) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible z-0">
              <g stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 50 37 L 66 45 L 66 65 L 50 73 L 34 65 L 34 45 Z" />
                <path d="M 39 49 L 48 43" strokeWidth="1.5" /> 
                <path d="M 34 65 L 22 75" />
                <path d="M 50 73 L 38 83" />
                <path d="M 50 37 L 50 20" />
                <path d="M 50 20 L 66 10" />
                <path d="M 53 25 L 69 15" strokeWidth="1.5" /> 
                <path d="M 50 20 L 30 15" />
                <path d="M 30 15 L 20 23 L 20 35" />
                <path d="M 30 15 L 15 25" />
                <path d="M 66 45 L 82 35" />
                <path d="M 82 35 L 82 20 L 94 12" />
              </g>
              <g stroke="#CBD5E1" strokeWidth="2.5">
                {/* Hollow Atoms */}
                <circle cx="50" cy="20" r="5.5" fill="#F5F5F7" />
                <circle cx="34" cy="65" r="5.5" fill="#F5F5F7" />
                <circle cx="82" cy="35" r="5.5" fill="#F5F5F7" />
                {/* Solid Atoms */}
                <circle cx="50" cy="37" r="6" fill="#CBD5E1" stroke="none" />
                <circle cx="66" cy="65" r="6" fill="#CBD5E1" stroke="none" />
                <circle cx="30" cy="15" r="6" fill="#CBD5E1" stroke="none" />
              </g>
            </svg>

            {/* Red Highlight Molecule (Draws itself based on scroll) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(220,38,38,0.7)] z-10">
              <g stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Bonds */}
                <path className="chem-progress-draw" d="M 50 37 L 66 45 L 66 65 L 50 73 L 34 65 L 34 45 Z" />
                <path className="chem-progress-draw" d="M 39 49 L 48 43" strokeWidth="1.5" /> 
                <path className="chem-progress-draw" d="M 34 65 L 22 75" />
                <path className="chem-progress-draw" d="M 50 73 L 38 83" />
                <path className="chem-progress-draw" d="M 50 37 L 50 20" />
                <path className="chem-progress-draw" d="M 50 20 L 66 10" />
                <path className="chem-progress-draw" d="M 53 25 L 69 15" strokeWidth="1.5" /> 
                <path className="chem-progress-draw" d="M 50 20 L 30 15" />
                <path className="chem-progress-draw" d="M 30 15 L 20 23 L 20 35" />
                <path className="chem-progress-draw" d="M 30 15 L 15 25" />
                <path className="chem-progress-draw" d="M 66 45 L 82 35" />
                <path className="chem-progress-draw" d="M 82 35 L 82 20 L 94 12" />
              </g>
              <g stroke="#DC2626" strokeWidth="2.5" fill="none">
                {/* Circles drawn over atoms */}
                <circle className="chem-progress-draw" cx="50" cy="20" r="5.5" />
                <circle className="chem-progress-draw" cx="34" cy="65" r="5.5" />
                <circle className="chem-progress-draw" cx="82" cy="35" r="5.5" />
                <circle className="chem-progress-draw" cx="50" cy="37" r="6" />
                <circle className="chem-progress-draw" cx="66" cy="65" r="6" />
                <circle className="chem-progress-draw" cx="30" cy="15" r="6" />
              </g>
            </svg>

          </div>
        </div>

      </div>

      {/* =========================================
          HORIZONTAL SCROLL TRACK
          ========================================= */}
      <div className="flex-1 w-full flex items-center relative z-10 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-12 px-6 md:px-16 w-max flex-nowrap items-center h-full"
        >
          {services.map((item, index) => (
            <Link
              key={item.id}
              href={`/products-services/enquiry/${item.id}`}
              className="group relative block w-[300px] md:w-[400px] lg:w-[450px] h-[60vh] min-h-[450px] max-h-[650px] shrink-0 overflow-hidden bg-red-900/40 hover:border-red-500/80 transition-all duration-500 cursor-pointer"
              style={{
                transform: index % 2 === 0 ? "translateY(-20px)" : "translateY(20px)",
                borderRadius: '1.5rem',
              }}
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-[65%] overflow-hidden bg-black z-0 rounded-t-[1.5rem]">
                <div className="card-img w-[130%] h-full relative left-[-30%]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to bottom, transparent 20%, ${item.color} 60%, ${item.color} 100%)`,
                }}
              ></div>

              {/* Card Foreground Content */}
              <div className="absolute inset-0 z-20 flex flex-col p-6 md:p-8">
                
                {/* Top Row: Badge & Chemical Drop Icon */}
                <div className="flex justify-between items-start w-full">
                  <span className="bg-red-600/80 backdrop-blur-md border border-red-500/60 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white shadow-sm rounded">
                    {item.badge}
                  </span>

                  {/* Chemical Drop Button */}
                  <div className="w-12 h-12 flex items-center justify-center text-white group-hover:text-red-400 transition-colors duration-300 z-30 relative drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <i className="fa-solid fa-droplet text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                {/* Bottom Row: Title & Description */}
                <div className="mt-auto">
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 tracking-tight"
                    style={{ color: "var(--color-white)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}