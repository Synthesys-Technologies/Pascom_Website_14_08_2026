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
    bgColor: "var(--color-primary-red)",
  },
  {
    id: 2,
    title: "Custom & Specialty Formulations",
    description: "Chemistry engineered for your process and industry.",
    icon: "fa-vial",
    bgColor: "var(--color-dark-red)",
  },
  {
    id: 3,
    title: "Chemical Logistics & Storage",
    description: "IBC supply, tank hire and compliant storage across WA.",
    icon: "fa-truck-fast",
    bgColor: "var(--color-primary-red)",
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
      className="w-full font-sans band-spacing-two"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      <div className="content-max flex flex-col gap-16">
        {/* Intro Section */}
        <div className="text-center">
          <p
            className="text-4xl leading-relaxed max-w-5xl mx-auto"
            style={{
              color: "var(--color-white)",
              fontSize: "var(--text-display)",
              letterSpacing: "-2px",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            Pascom handles formulation-to-delivery with full transparency, so
            your operation keeps running.
          </p>
        </div>

        {/* Solutions List */}
        <div className="flex flex-col gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="solution-row group min-h-44 flex items-center gap-6 p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(198, 40, 40, 0.15) 0%, rgba(198, 40, 40, 0.08) 100%)",
                border: "1px solid rgba(198, 40, 40, 0.25)",
                boxShadow: "0 4px 12px rgba(198, 40, 40, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(198, 40, 40, 0.2) 0%, rgba(198, 40, 40, 0.12) 100%)";
                e.currentTarget.style.border =
                  "1px solid rgba(198, 40, 40, 0.35)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(198, 40, 40, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(198, 40, 40, 0.15) 0%, rgba(198, 40, 40, 0.08) 100%)";
                e.currentTarget.style.border =
                  "1px solid rgba(198, 40, 40, 0.25)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(198, 40, 40, 0.1)";
              }}
            >
              {/* Icon Tile */}
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg"
                style={{
                  background:
                    solution.bgColor === "var(--color-primary-red)"
                      ? "linear-gradient(135deg, rgba(198, 40, 40, 1) 0%, rgba(178, 30, 30, 1) 100%)"
                      : "linear-gradient(135deg, rgba(69, 10, 10, 1) 0%, rgba(50, 5, 5, 1) 100%)",
                }}
              >
                <i
                  className={`fa-solid ${solution.icon} text-2xl md:text-3xl text-white`}
                ></i>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className="text-lg md:text-xl font-bold tracking-tight"
                  style={{ color: "var(--color-white)" }}
                >
                  {solution.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {solution.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div
                className="flex items-center gap-2 transition-all duration-300 shrink-0"
                style={{ color: "var(--color-white)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
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
