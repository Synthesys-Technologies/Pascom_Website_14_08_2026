"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    title: "Oil & Gas",
    subtitle: "Drilling, Production & Refining",
    desc: "Pascom supplies essential chemicals for drilling, production, and refining in the oil and gas industry, enhancing efficiency and sustainability.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Purity", value: "99.9%" },
      { label: "Supply", value: "Bulk" },
      { label: "Rating", value: "4.9" },
    ],
    action: "View Specs",
  },
  {
    id: 2,
    title: "Mining",
    subtitle: "Extraction & Processing",
    desc: "We provide chemicals for mineral processing, dust control, environmental management, and optimizing extraction processes.",
    img: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Volume", value: "High" },
      { label: "Safety", value: "Tier 1" },
      { label: "Rating", value: "4.8" },
    ],
    action: "View Specs",
  },
  {
    id: 3,
    title: "Agriculture",
    subtitle: "Crop Health & Fertility",
    desc: "Pascom develops chemicals that improve crop health, soil fertility, and pest control, supporting sustainable farming practices and higher yields.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Yield", value: "+30%" },
      { label: "Eco", value: "Safe" },
      { label: "Rating", value: "5.0" },
    ],
    action: "View Specs",
  },
  {
    id: 4,
    title: "Water Treatment",
    subtitle: "Municipal & Industrial",
    desc: "Our chemicals ensure clean water supply and wastewater treatment for municipal, industrial, and environmental applications.",
    img: "https://images.unsplash.com/photo-1543419992-628d052ceba4?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Clarity", value: "Max" },
      { label: "Compliant", value: "Yes" },
      { label: "Rating", value: "4.9" },
    ],
    action: "View Specs",
  },
  {
    id: 5,
    title: "Manufacturing",
    subtitle: "Heavy Industrial Supply",
    desc: "Pascom provides high-performance chemicals for heavy manufacturing, ensuring operational efficiency and long-term equipment protection.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Efficiency", value: "+25%" },
      { label: "Supply", value: "24/7" },
      { label: "Rating", value: "4.8" },
    ],
    action: "View Specs",
  },
];

export default function IndustriesCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Initial state
      gsap.set(cards, {
        y: 100,
        scale: 0.94,
        opacity: 0,
      });

      // First card starts visible
      gsap.set(cards[0], {
        y: 0,
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${industries.length * 850}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCards = cards.slice(0, index);

        tl.to(
          card,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          `card-${index}`
        );

        // Slightly scale previous cards backwards
        previousCards.forEach((previousCard) => {
          tl.to(
            previousCard,
            {
              scale: 0.94,
              y: -20,
              opacity: 0.85,
              duration: 0.8,
              ease: "power2.out",
            },
            `card-${index}`
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[900px] bg-[#F8FAFC] overflow-hidden "
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/stardust.png")',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-28">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
        
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
            Discover how Pascom delivers high-performance chemical solutions
            across Australia&apos;s most demanding industries.
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative mx-auto w-full max-w-5xl -mt-20 h-[620px] md:h-[600px]">
          {industries.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                zIndex: index + 1,
              }}
            >
              <article className="w-full max-w-4xl h-[520px] md:h-[500px] bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-[46%] h-[220px] md:h-full shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                    <span className="text-xs font-bold text-gray-900">
                      0{item.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-red-600 text-xs font-bold uppercase tracking-[0.2em]">
                      Industry
                    </span>

                    <h3 className="mt-3 text-3xl md:text-5xl font-bold tracking-[-0.04em] text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      {item.subtitle}
                    </p>

                    <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-500 max-w-xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8">
                    <div className="grid grid-cols-3 gap-3 border-y border-gray-100 py-5">
                      {item.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xs text-gray-400">
                            {stat.label}
                          </p>

                          <p className="mt-1 text-lg md:text-xl font-bold text-gray-900">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">
                          Explore Solutions
                        </p>

                        <p className="text-sm font-bold text-gray-900">
                          {item.action}
                        </p>
                      </div>

                      <button
                        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                        aria-label={`View ${item.title} specifications`}
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}