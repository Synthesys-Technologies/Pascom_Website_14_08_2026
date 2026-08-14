"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 1,
    title: "Toll Blending & Contract Manufacturing",
    description: "Your formula, our plant. Batched, QC'd, delivered.",
    icon: "fa-truck-fast",
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Custom & Specialty Formulations",
    description: "Chemistry engineered for your process and industry.",
    icon: "fa-vial",
    bgColor: "bg-red-600",
  },
  {
    id: 3,
    title: "Chemical Logistics & Storage",
    description: "IBC supply, tank hire and compliant storage across WA.",
    icon: "fa-truck-fast",
    bgColor: "bg-red-200",
  },
];

export default function FeaturesList() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Get all row elements directly
      const rows = document.querySelectorAll(".solution-row");

      if (rows.length > 0) {
        // Set initial state
        gsap.set(rows, {
          opacity: 0,
          y: 30,
        });

        // Animate in with stagger
        gsap.to(rows, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
            markers: false,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-red-950 font-sans band-spacing-two"
    >
      <div className="content-max flex flex-col gap-16">
        {/* Intro Section */}
        <div className="text-center">
          <p className=" text-4xl text-red-300 leading-relaxed max-w-2xl mx-auto">
            Pascom handles formulation-to-delivery with full transparency, so
            your operation keeps running.
          </p>
        </div>

        {/* Solutions List */}
        <div className="flex flex-col gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="solution-row grouph min-h-44 flex items-center gap-6 p-6 md:p-8 border border-red-800 rounded-2xl bg-transparent hover:border-red-500 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Tile */}
              <div
                className={`${solution.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                <i
                  className={`fa-solid ${solution.icon} text-2xl md:text-3xl text-white`}
                ></i>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-white text-lg md:text-xl font-bold tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-red-300 text-sm md:text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-colors duration-300 shrink-0">
                <span className="text-sm font-semibold">Learn More</span>
                <i className="fa-solid fa-arrow-right text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
