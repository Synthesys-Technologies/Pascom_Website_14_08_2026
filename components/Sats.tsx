"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const cards: ServiceCard[] = [
  {
    id: "toll-blending",
    title: "Toll Blending",
    description: "Pascom offers expert custom chemical blending services, precisely tailored to meet each client's unique needs with quality and precision.",
    icon: "fa-blender",
  },
  {
    id: "chemical-formulation",
    title: "Chemical Formulation",
    description: "Crafting custom formulations for diverse industries, meeting unique needs effectively.",
    icon: "fa-vial",
  },
  {
    id: "commodity-specialty",
    title: "Commodity & Specialty",
    description: "Supplying a broad range of industrial chemicals and specialty formulations.",
    icon: "fa-boxes-stacked",
  },
  {
    id: "offshore-tank",
    title: "Offshore Tank Hire",
    description: "Secure chemical storage solutions designed specifically for the unique needs of offshore operations, ensuring safety.",
    icon: "fa-water",
  },
  {
    id: "ibc-supplying",
    title: "IBC Supplying",
    description: "Reliable Intermediate Bulk Containers (IBCs) for safe chemical storage and transport, ensuring durability and efficiency across all operations.",
    icon: "fa-cube",
  },
  {
    id: "chemical-logistics",
    title: "Chemical Logistics",
    description: "Safe chemical transportation and storage with an emphasis on compliance.",
    icon: "fa-truck-fast",
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    description: "Comprehensive testing to ensure exceptional quality and full compliance.",
    icon: "fa-microscope",
  },
  {
    id: "leak-proof",
    title: "Leak Proof Testing",
    description: "Rigorous testing to ensure safety and integrity for containers.",
    icon: "fa-shield-halved",
  },
  {
    id: "analytical",
    title: "Analytical Services",
    description: "Pascom delivers precise chemical analysis services to effectively support quality control and ensure full regulatory compliance.",
    icon: "fa-chart-pie",
  },
  {
    id: "quarantine",
    title: "Quarantine Inspection",
    description: "Dedicated team for larger volumes and diverse cargo processing.",
    icon: "fa-clipboard-check",
  },
  {
    id: "particle-analyzing",
    title: "Particle Analyzing",
    description: "Introducing advanced particle analysis services, featuring cutting-edge technology designed for water-glycol samples in the offshore industry.",
    icon: "fa-atom",
  },
  {
    id: "oxygen-analysing",
    title: "Oxygen Analysing",
    description: "Specialized de-oxygenation services and precise measurement of low dissolved oxygen levels using advanced techniques & equipment.",
    icon: "fa-wind",
  },
];

export default function AboutSection() {
  const yearsRef = useRef<HTMLSpanElement>(null);
  const productsRef = useRef<HTMLSpanElement>(null);
  const industriesRef = useRef<HTMLSpanElement>(null);
  
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Counter Animations
      const animateCounter = (element: HTMLElement | null, endValue: number, duration = 2) => {
        if (!element) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: endValue,
          duration: duration,
          ease: "power2.out",
          onUpdate() {
            element.innerText = String(Math.floor(obj.value));
          },
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      };

      animateCounter(yearsRef.current, 25, 2);
      animateCounter(productsRef.current, 500, 2.5);
      animateCounter(industriesRef.current, 4, 1.5);

      // 2. Horizontal Scroll & Progress Bar Logic
      const pinContainer = pinContainerRef.current;
      const cardsWrap = cardsWrapperRef.current;
      const progressBar = progressBarRef.current;

      if (pinContainer && cardsWrap && progressBar) {
        
        // Calculate exactly how far left the cards need to slide
        const getScrollAmount = () => {
          const containerWidth = cardsWrap.scrollWidth;
          const viewportWidth = window.innerWidth;
          // Subtracted 48px to account for the padding on the right side
          return -(containerWidth - viewportWidth + 48); 
        };

        // Create a Timeline bound to the scroll position
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1, // Smooth scrubbing
            start: "top top", // Pin when the top of the container hits the top of the screen
            end: () => `+=${cardsWrap.scrollWidth}`, // Unpin after scrolling the entire width of the cards
            invalidateOnRefresh: true, // Recalculate on window resize
          }
        });

        // Animate the cards moving to the left
        tl.to(cardsWrap, {
          x: getScrollAmount,
          ease: "none"
        }, 0);

        // Simultaneously animate the progress bar width from 0% to 100%
        tl.to(progressBar, {
          width: "100%",
          ease: "none"
        }, 0);
      }

      // 3. Keyboard Navigation for Carousel
      const handleCarouselKeyboard = (e: KeyboardEvent) => {
        if (!cardsWrapperRef.current) return;

        if (e.key === 'ArrowRight') {
          e.preventDefault();
          cardsWrapperRef.current.scrollBy({
            left: 340,
            behavior: 'smooth'
          });
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          cardsWrapperRef.current.scrollBy({
            left: -340,
            behavior: 'smooth'
          });
        }
      };

      window.addEventListener('keydown', handleCarouselKeyboard);
      return () => window.removeEventListener('keydown', handleCarouselKeyboard);
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="w-full bg-red-950  font-sans antialiased overflow-hidden band-spacing">

      {/* =========================================
          HERO TEXT SECTION (Not Pinned)
          ========================================= */}
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Australia&apos;s Leading Specialist{" "}
              <span className="text-[#DC2626]">Chemical Manufacturing Supplier.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-start pt-2">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-lg">
              With decades of experience in formulating, blending and supplying
              commodity and specialty chemicals, Pascom delivers quality-driven
              solutions with integrity across demanding industries.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex items-center justify-between gap-6 border border-white/40 rounded-full pl-6 pr-1.5 py-1.5 hover:bg-white/10 transition-colors">
                <span className="text-white text-xs font-bold tracking-wide">
                  Explore Our Products
                </span>
                <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                </div>
              </button>

              <button className="group flex items-center justify-between gap-6 border border-white/40 rounded-full pl-6 pr-1.5 py-1.5 hover:bg-white/10 transition-colors">
                <span className="text-white text-xs font-bold tracking-wide">
                  Download Capability
                </span>
                <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          PINNED SCROLL SECTION (Progress + Stats + Cards)
          ========================================= */}
      <div ref={pinContainerRef} className="h-screen w-full flex flex-col justify-center relative">

        <div className="content-max flex flex-col">
          
          {/* Divider & Progress Bar */}
          <div className="relative w-full mb-12">
            {/* Background Track */}
            <div className="w-full h-[1px] bg-white/20"></div>
            {/* Active Progress Fill */}
            <div 
              ref={progressBarRef}
              className="absolute top-0 left-0 h-[1px] bg-[#DC2626] w-0 shadow-[0_0_10px_#DC2626]"
            ></div>
            
            {/* LinkedIn Badge */}
            <a href="#" className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#DC2626] hover:bg-red-700 transition-colors flex items-center justify-center text-white text-lg">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          {/* STATISTICS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">ISO 9001</h3>
              <p className="text-white/80 text-sm font-medium">Certified</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">
                <span ref={yearsRef}>25</span>+
              </h3>
              <p className="text-white/80 text-sm font-medium">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">
                <span ref={productsRef}>500</span>+
              </h3>
              <p className="text-white/80 text-sm font-medium">Products/Formulations</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">
                <span ref={industriesRef}>4</span>
              </h3>
              <p className="text-white/80 text-sm font-medium">Core Industries</p>
            </div>
          </div>
        </div>

        {/* HORIZONTAL SCROLLING CARDS WRAPPER */}
        {/* Overflow hidden ensures no horizontal scrollbars appear on the browser */}
        <div className="w-full overflow-hidden pl-6 md:pl-12 py-8">
          {/* Navigation Hint for Accessibility */}
          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            Horizontal scrolling carousel. Use arrow keys or swipe to navigate through service cards.
          </div>

          {/* The actual flex container that gets animated to the left */}
          <div
            ref={cardsWrapperRef}
            role="region"
            aria-label="Service cards carousel"
            className="flex gap-6 w-max flex-nowrap pr-12"
            tabIndex={0}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[320px] md:w-[360px] bg-red-900 rounded-2xl p-6 md:p-8 flex flex-col shrink-0 hover:bg-red-800 transition-colors border border-white/5 shadow-xl"
              >
                {/* Circular Icon Placeholder (Matches the reference circular images) */}
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 shrink-0">
                  <i className={`fa-solid ${card.icon} text-3xl text-[#ffffff]`}></i>
                </div>

                {/* Text Content */}
                <div className="mb-10 flex-1">
                  <span className="text-white/70 font-bold text-[10px] tracking-wider uppercase mb-2 block">
                    {card.id.replace("-", " ")}
                  </span>
                  <h4 className="text-white font-medium text-2xl leading-tight mb-4 pr-4">
                    {card.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Card Button */}
                <button className="group mt-auto w-full border border-white/30 rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <span className="text-white text-xs font-bold">Discover More</span>
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}