"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    id: "01",
    client: "Mining Sector",
    headline: "Optimizing Extraction Efficiency",
    description:
      "Challenge: High dust levels and inefficient mineral processing. Result: 30% increase in yield and fully compliant environmental management.",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    solutions: [
      {
        name: "Toll Blending",
        icon: "fa-blender",
        bg: "bg-red-500",
        iconColor: "text-white",
      },
      {
        name: "Logistics",
        icon: "fa-truck-fast",
        bg: "bg-red-600",
        iconColor: "text-white",
      },
    ],
  },
  {
    id: "02",
    client: "Oil & Gas",
    headline: "Deep Sea Drilling Solutions",
    description:
      "Challenge: Extreme pressure environments degrading equipment. Result: Extended machinery lifespan by 40% using custom anti-corrosive chemical solutions.",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-768x512.jpg",
    solutions: [
      {
        name: "Custom Formulation",
        icon: "fa-vial",
        bg: "bg-red-500",
        iconColor: "text-white",
      },
      {
        name: "Offshore Tank Hire",
        icon: "fa-water",
        bg: "bg-red-600",
        iconColor: "text-white",
      },
    ],
  },
  {
    id: "03",
    client: "Agriculture",
    headline: "Sustainable Farming Solutions",
    description:
      "Challenge: Poor soil nutrient retention reducing crop yields. Result: Delivered specialized fertilizers leading to a 25% boost in harvest efficiency.",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    solutions: [
      {
        name: "Commodity & Specialty",
        icon: "fa-boxes-stacked",
        bg: "bg-red-500",
        iconColor: "text-white",
      },
      {
        name: "Quality Assurance",
        icon: "fa-check-double",
        bg: "bg-red-600",
        iconColor: "text-white",
      },
    ],
  },
  {
    id: "04",
    client: "Water Treatment",
    headline: "Municipal Water Purification",
    description:
      "Challenge: High contaminant levels violating municipal standards. Result: Achieved 99.9% purity levels and full compliance with environmental regulations.",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    solutions: [
      {
        name: "Laboratory Services",
        icon: "fa-microscope",
        bg: "bg-red-500",
        iconColor: "text-white",
      },
      {
        name: "Analytical Services",
        icon: "fa-chart-pie",
        bg: "bg-red-600",
        iconColor: "text-white",
      },
    ],
  },
];

export default function CaseStudies2() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Chemical liquid
  const liquidRef = useRef<HTMLDivElement>(null);

  // Chemical wave
  const waveRef = useRef<HTMLDivElement>(null);

  // Liquid shine
  const shineRef = useRef<HTMLDivElement>(null);

  // Percentage text
  const percentageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * CHEMICAL DROP SCROLL PROGRESS
       * ==========================================
       */

      if (
        containerRef.current &&
        liquidRef.current &&
        waveRef.current &&
        shineRef.current
      ) {
        const progress = {
          value: 0,
        };

        gsap.to(progress, {
          value: 1,

          ease: "none",

          scrollTrigger: {
            trigger: containerRef.current,

            /*
             * Start when section reaches top
             */
            start: "top top",

            /*
             * Finish when entire section is almost completed
             */
            end: "bottom bottom",

            scrub: 0.5,

            onUpdate: (self) => {
              const value = self.progress;

              /*
               * Fill liquid
               */
              gsap.set(liquidRef.current, {
                height: `${value * 100}%`,
              });

              /*
               * Wave movement
               */
              gsap.set(waveRef.current, {
                x: `${Math.sin(value * Math.PI * 8) * 8}px`,
                scaleX: 1 + Math.sin(value * Math.PI * 6) * 0.08,
                opacity: value > 0.01 ? 1 : 0,
              });

              /*
               * Moving glass reflection
               */
              gsap.set(shineRef.current, {
                y: `${120 - value * 240}px`,
                opacity: value > 0.05 ? 0.7 : 0,
              });

              /*
               * Percentage
               */
              if (percentageRef.current) {
                percentageRef.current.textContent = `${Math.round(
                  value * 100
                )}%`;
              }
            },
          },
        });
      }

      /*
       * ==========================================
       * CARD ENTRANCE ANIMATIONS
       * ==========================================
       */

      const cards = gsap.utils.toArray(
        ".card-inner"
      ) as HTMLElement[];

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        bg-[#f5f5f7]
        font-sans
        antialiased
        pt-16
      "
    >

      {/* ==========================================
          STICKY HEADER
      ========================================== */}

      <div
        className="
          sticky
          top-0
          md:top-28
          z-40
          w-full
          bg-[#f5f5f7]/90
          backdrop-blur-xl
          px-6
          md:px-12
          py-6
          md:py-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >

        {/* Header Content */}

        <div>
          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              tracking-tight
              mb-2
            "
            style={{color:"var(--color-primary-red)"}}
          >
            How Industries Rely on{" "}
            <span style={{color:"var(--color-dark-red)"}}>
              Pascom
            </span>
          </h2>

          <p
            className="
              text-sm
              md:text-base
              text-gray-600
              max-w-2xl
              font-medium
            "
          >
            Real-world solutions delivering tangible
            results across multiple sectors
          </p>
        </div>

        {/* ==========================================
            CHEMICAL DROP PROGRESS
        ========================================== */}

        <div
          className="
            flex
            items-center
            gap-4
            shrink-0
          "
        >

          {/* Label */}

          <div className="hidden sm:block text-right">
          </div>

          {/* ======================================
              DROP
          ====================================== */}

          <div className="relative h-[72px] w-[56px]">

            <svg
              viewBox="0 0 200 260"
              className="
                absolute
                inset-0
                h-full
                w-full
                overflow-visible
              "
              preserveAspectRatio="none"
            >
              <defs>

                {/* Smooth chemical drop */}

                <clipPath id="caseStudyChemicalDrop">
                  <path
                    d="
                      M100 7

                      C96 15 76 40 55 70

                      C35 99 23 125 23 154

                      C23 207 57 246 100 246

                      C143 246 177 207 177 154

                      C177 125 165 99 145 70

                      C124 40 104 15 100 7

                      Z
                    "
                  />
                </clipPath>

                {/* Chemical gradient */}

                <linearGradient
                  id="caseStudyChemicalGradient"
                  x1="0"
                  y1="1"
                  x2="0"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#7f0000"
                  />

                  <stop
                    offset="45%"
                    stopColor="#dc0000"
                  />

                  <stop
                    offset="80%"
                    stopColor="#ef4444"
                  />

                  <stop
                    offset="100%"
                    stopColor="#ff6b6b"
                  />
                </linearGradient>

                {/* Glass gradient */}

                <linearGradient
                  id="caseStudyGlassGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(255,255,255,0.25)"
                  />

                  <stop
                    offset="45%"
                    stopColor="rgba(255,255,255,0.02)"
                  />

                  <stop
                    offset="100%"
                    stopColor="rgba(0,0,0,0.05)"
                  />
                </linearGradient>

              </defs>

              {/* ====================================
                  EMPTY DROP
              ==================================== */}

              <path
                d="
                  M100 7
                  C96 15 76 40 55 70
                  C35 99 23 125 23 154
                  C23 207 57 246 100 246
                  C143 246 177 207 177 154
                  C177 125 165 99 145 70
                  C124 40 104 15 100 7
                  Z
                "
                fill="rgba(255,255,255,0.03)"
              />

              {/* ====================================
                  LIQUID
              ==================================== */}

              <foreignObject
                x="0"
                y="0"
                width="200"
                height="260"
                clipPath="url(#caseStudyChemicalDrop)"
              >
                <div className="relative h-full w-full">

                  <div
                    ref={liquidRef}
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                    "
                    style={{
                      height: "0%",
                      background: "#db0000",
                    }}
                  >

                    {/* Wave */}

                    <div
                      ref={waveRef}
                      className="
                        absolute
                        -top-1.25
                        left-[-15%]
                        h-2.5
                        w-[130%]
                        rounded-[50%]
                      "
                      style={{
                        backgroundColor: "#db0000",
                      }}
                    />

                  </div>

                </div>
              </foreignObject>

              {/* ====================================
                  GLASS OVERLAY
              ==================================== */}

              <path
                d="
                  M100 7
                  C96 15 76 40 55 70
                  C35 99 23 125 23 154
                  C23 207 57 246 100 246
                  C143 246 177 207 177 154
                  C177 125 165 99 145 70
                  C124 40 104 15 100 7
                  Z
                "
                fill="url(#caseStudyGlassGradient)"
                clipPath="url(#caseStudyChemicalDrop)"
              />

              {/* ====================================
                  OUTLINE
              ==================================== */}

              <path
                d="
                  M100 7
                  C96 15 76 40 55 70
                  C35 99 23 125 23 154
                  C23 207 57 246 100 246
                  C143 246 177 207 177 154
                  C177 125 165 99 145 70
                  C124 40 104 15 100 7
                  Z
                "
                fill="none"
                stroke="rgba(127,0,0,0.22)"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />

              {/* Inner highlight */}

              <path
                d="
                  M100 15
                  C95 25 79 48 61 74
                  C45 99 34 125 34 153
                  C34 197 62 232 100 232
                  C138 232 166 197 166 153
                  C166 125 155 99 139 74
                  C121 48 105 25 100 15
                  Z
                "
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />

            </svg>

            {/* ======================================
                GLASS SHINE
            ====================================== */}

            <div
              ref={shineRef}
              className="
                pointer-events-none
                absolute
                left-[23%]
                top-[25%]
                h-[28px]
                w-[4px]
                rotate-[14deg]
                rounded-full
                bg-white/40
                blur-[1px]
              "
            />
          </div>
        </div>
      </div>

      {/* ==========================================
          CASE STUDIES
      ========================================== */}

      <div className="w-full mt-12 md:mt-12">

        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="
              sticky
              top-60
              w-full
              mb-16
              md:mb-0
            "
          >

            <div
              className="
                card-inner
                group
                w-full
                min-h-125
                md:h-[75vh]
                overflow-hidden
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                hover:-translate-y-2
                transition-all
                duration-500
                ease-out
                flex
                flex-col
                lg:flex-row
                cursor-pointer
              "
            >

              {/* ====================================
                  IMAGE
              ==================================== */}

              <div
                className="
                  w-full
                  lg:w-[55%]
                  h-[45vh]
                  lg:h-full
                  relative
                  overflow-hidden
                  bg-gray-900
                "
              >
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="
                    object-cover
                    opacity-90
                    group-hover:opacity-100
                    group-hover:scale-105
                    transition-all
                    duration-700
                    ease-out
                  "
                />
              </div>

              {/* ====================================
                  CONTENT
              ==================================== */}

              <div
                className="
                  w-full
                  lg:w-[45%]
                  p-8
                  md:p-12
                  lg:p-16
                  flex
                  flex-col
                  justify-center
                  bg-[#F8FAFC]
                  overflow-y-auto
                "
              >

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    lg:text-5xl
                    font-bold
                    text-gray-900
                    mb-6
                    leading-tight
                    tracking-tight
                  "
                >
                  {study.client}
                </h3>

                <p
                  className="
                    text-lg
                    font-bold
                    text-gray-800
                    mb-3
                  "
                >
                  {study.headline}
                </p>

                <p
                  className="
                    text-sm
                    md:text-[15px]
                    text-gray-600
                    mb-8
                    leading-relaxed
                    font-medium
                  "
                >
                  {study.description}
                </p>

                {/* Solutions */}

                <div className="mb-8">

                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-widest
                      uppercase
                      text-gray-400
                      mb-4
                      block
                    "
                  >
                    Solutions Deployed
                  </span>

                  <div className="flex flex-wrap gap-3">

                    {study.solutions.map((sol, i) => (
                      <div
                        key={i}
                        className="
                          flex
                          items-center
                          gap-2
                          bg-gray-50
                          rounded-full
                          px-4
                          py-2
                          border-4
                          border-gray-200
                          transition-colors
                          group-hover:border-red-200
                        "
                      >

                        <div
                          className={`
                            w-6
                            h-6
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            ${sol.bg}
                          `}
                        >
                          <i
                            className={`
                              fa-solid
                              ${sol.icon}
                              text-[10px]
                              ${sol.iconColor}
                            `}
                          />
                        </div>

                        <span
                          className="
                            text-sm
                            font-semibold
                            text-gray-700
                          "
                        >
                          {sol.name}
                        </span>

                      </div>
                    ))}

                  </div>
                </div>

                {/* CTA */}

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-red-600
                    font-bold
                    mt-auto
                    w-max
                    group-hover:text-red-700
                    transition-colors
                  "
                >
                  Read Case Study

                  <i
                    className="
                      fa-solid
                      fa-arrow-right
                      text-xs
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}