"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChemicalMolecule from "./A1";

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
  const sectionRef = useRef<HTMLElement>(null);

  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const dropContainerRef = useRef<HTMLDivElement>(null);

  const dropPathRef = useRef<SVGPathElement>(null);

  const glowPathRef = useRef<SVGPathElement>(null);

  const particleRef = useRef<HTMLDivElement>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /*
   * ==========================================
   * SECTION ENTRANCE
   * ==========================================
   */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = rowsRef.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(rows, {
        opacity: 0,
        y: 35,
      });

      gsap.to(rows, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * ==========================================
   * CHEMICAL DROP SETUP
   * ==========================================
   */

  useEffect(() => {
    if (!dropPathRef.current) return;

    const path = dropPathRef.current;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    if (glowPathRef.current) {
      const glow = glowPathRef.current;

      const glowLength = glow.getTotalLength();

      gsap.set(glow, {
        strokeDasharray: glowLength,
        strokeDashoffset: glowLength,
      });
    }
  }, []);

  /*
   * ==========================================
   * HOVER CHEMICAL DROP ANIMATION
   * ==========================================
   */

  useEffect(() => {
    const path = dropPathRef.current;

    const glow = glowPathRef.current;

    const container = dropContainerRef.current;

    if (!path || !container) return;

    const totalLength = path.getTotalLength();

    /*
     * No card selected
     */

    if (hoveredIndex === null) {
      gsap.to(path, {
        strokeDashoffset: totalLength,
        duration: 0.6,
        ease: "power3.inOut",
      });

      if (glow) {
        gsap.to(glow, {
          strokeDashoffset: totalLength,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }

      gsap.to(container, {
        scale: 0.72,
        opacity: 0.45,
        duration: 0.5,
        ease: "power3.out",
      });

      return;
    }

    /*
     * Each card controls
     * how much of the drop appears.
     */

    const progress = [0.42, 0.72, 1][hoveredIndex];

    const targetOffset = totalLength * (1 - progress);

    /*
     * Draw chemical outline
     */

    gsap.to(path, {
      strokeDashoffset: targetOffset,
      duration: 0.9,
      ease: "power3.inOut",
    });

    /*
     * Glow follows outline
     */

    if (glow) {
      gsap.to(glow, {
        strokeDashoffset: targetOffset,
        duration: 1.1,
        ease: "power3.inOut",
      });
    }

    /*
     * Scale drop according to
     * selected solution.
     */

    const scale = [0.78, 0.9, 1][hoveredIndex];

    gsap.to(container, {
      scale,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    /*
     * Pulse when changing level
     */

    gsap.fromTo(
      container,
      {
        y: 12,
      },
      {
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      },
    );

    /*
     * Chemical particle
     */

    if (particleRef.current) {
      const particle = particleRef.current;

      gsap.killTweensOf(particle);

      gsap.fromTo(
        particle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(2)",
        },
      );

      /*
       * Move particle across
       * the visible path.
       */

      const particleProgress = progress * 0.92;

      const point = path.getPointAtLength(totalLength * particleProgress);

      gsap.to(particle, {
        x: point.x - 250,
        y: point.y - 250,
        duration: 0.9,
        ease: "power2.inOut",
      });
    }
  }, [hoveredIndex]);

  /*
   * ==========================================
   * CONTINUOUS DROP FLOAT
   * ==========================================
   */

  useEffect(() => {
    if (!dropContainerRef.current) return;

    const animation = gsap.to(dropContainerRef.current, {
      y: -8,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      animation.kill();
    };
  }, []);

  /*
   * ==========================================
   * CARD HOVER
   * ==========================================
   */

  const handleEnter = (index: number) => {
    setHoveredIndex(index);

    const row = rowsRef.current[index];

    if (!row) return;

    gsap.to(row, {
      y: -3,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleLeave = (index: number) => {
    setHoveredIndex(null);

    const row = rowsRef.current[index];

    if (!row) return;

    gsap.to(row, {
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  /*
   * ==========================================
   * RENDER
   * ==========================================
   */

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        font-sans
        band-spacing-two
      "
      style={{
        backgroundColor: "var(--color-primary-red)",
      }}
    >
      <div
        className="
          content-max
          flex
          flex-col
          gap-16
        "
      >
        {/* ==================================
            INTRO - LEFT & RIGHT LAYOUT
        ================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  md:h-120">
          {/* LEFT SIDE - TEXT */}
          <div>
            <p
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                leading-relaxed
                font-bold
              "
              style={{
                color: "var(--color-white)",
                letterSpacing: "-1px",
                textTransform: "uppercase",
              }}
            >
              Pascom handles formulation-to-delivery with full transparency, so
              your operation keeps running.
            </p>
          </div>

          {/* RIGHT SIDE - MOLECULE */}
          <div className="flex justify-center items-center">
            <ChemicalMolecule />
          </div>
        </div>

        {/* ==================================
            SOLUTIONS + CHEMICAL DROP
        ================================== */}

        <div className="relative">
          {/* =================================
              SOLUTION CARDS
          ================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-6
            "
          >
            {solutions.map((solution, index) => {
              const active = hoveredIndex === index;

              return (
                <div
                  key={solution.id}
                  ref={(el) => {
                    rowsRef.current[index] = el;
                  }}
                  className="
                      solution-row
                      group
                      relative
                      flex
                      min-h-44
                      cursor-pointer
                      items-center
                      gap-6
                      rounded-2xl
                      p-6
                      transition-colors
                      duration-500
                      md:p-8
                    "
                  style={{
                    background: active
                      ? "linear-gradient(135deg, rgba(198,40,40,0.25) 0%, rgba(198,40,40,0.12) 100%)"
                      : "linear-gradient(135deg, rgba(198,40,40,0.15) 0%, rgba(198,40,40,0.08) 100%)",

                    border: active
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "1px solid rgba(198,40,40,0.25)",

                    boxShadow: active
                      ? "0 15px 35px rgba(0,0,0,0.16)"
                      : "0 4px 12px rgba(198,40,40,0.1)",
                  }}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                >
                  {/* =====================
                        ACTIVE TOP LINE
                    ===================== */}

                  <div
                    className="
                        pointer-events-none
                        absolute
                        left-8
                        right-8
                        top-0
                        h-px
                        origin-left
                        scale-x-0
                        bg-white/50
                        transition-transform
                        duration-700
                        group-hover:scale-x-100
                      "
                  />

                  {/* =====================
                        ICON TILE
                    ===================== */}

                  <div
                    className="
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:scale-105
                        md:h-24
                        md:w-24
                      "
                    style={{
                      background:
                        solution.bgColor === "var(--color-primary-red)"
                          ? "linear-gradient(135deg, rgba(198,40,40,1) 0%, rgba(178,30,30,1) 100%)"
                          : "linear-gradient(135deg, rgba(69,10,10,1) 0%, rgba(50,5,5,1) 100%)",
                    }}
                  >
                    <i
                      className={`
                          fa-solid
                          ${solution.icon}
                          text-2xl
                          text-white
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          md:text-3xl
                        `}
                    />
                  </div>

                  {/* =====================
                        CONTENT
                    ===================== */}

                  <div
                    className="
                        flex
                        flex-1
                        flex-col
                        gap-2
                      "
                  >
                    <h3
                      className="
                          text-lg
                          font-bold
                          tracking-tight
                          text-white
                          md:text-xl
                        "
                      style={{ color: "var(--color-white)" }}
                    >
                      {solution.title}
                    </h3>

                    <p
                      className="
                          text-sm
                          leading-relaxed
                          text-gray-100
                          md:text-base
                        "
                    >
                      {solution.description}
                    </p>
                  </div>

                  {/* =====================
                        LEARN MORE
                    ===================== */}

                  <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                        text-white
                      "
                  >
                    <span
                      className="
                          hidden
                          text-sm
                          font-semibold
                          md:block
                        "
                    >
                      Learn More
                    </span>

                    <div
                      className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border-4
                          border-gray-100
                          transition-all
                          duration-300
                          group-hover:border-red-900
                          group-hover:bg-red-900
                          group-hover:text-white
                        "
                    >
                      <i
                        className="
                            fa-solid
                            fa-arrow-right
                            text-xs
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================
              CHEMICAL DROP
          ================================= */}

          <div
            className="
             absolute
    top-1/2
    left-1/2
    z-10
    -translate-x-1/2
    -translate-y-1/2
    h-[340px]
    w-[340px]
    md:h-[470px]
    md:w-[470px]
            "
          >
            <div
              ref={dropContainerRef}
              className="
                absolute
                inset-0
                opacity-45
              "
            >
              <svg
                viewBox="0 0 500 500"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  overflow-visible
                "
              >
                {/* =========================
                    SOFT BACKGROUND OUTLINE
                ========================= */}

                <path
                  d="
                    M250 28

                    C285 75
                     425 170
                     425 300

                    C425 405
                     350 472
                     250 472

                    C150 472
                     75 405
                     75 300

                    C75 170
                     215 75
                     250 28

                    Z
                  "
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                />

                {/* =========================
                    GLOW PATH
                ========================= */}

                <path
                  ref={glowPathRef}
                  d="
                    M250 28

                    C285 75
                     425 170
                     425 300

                    C425 405
                     350 472
                     250 472

                    C150 472
                     75 405
                     75 300

                    C75 170
                     215 75
                     250 28

                    Z
                  "
                  fill="none"
                  stroke="rgba(255,90,90,0.45)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  filter="blur(8px)"
                />

                {/* =========================
                    MAIN CHEMICAL OUTLINE
                ========================= */}

                <path
                  ref={dropPathRef}
                  d="
                    M250 28

                    C285 75
                     425 170
                     425 300

                    C425 405
                     350 472
                     250 472

                    C150 472
                     75 405
                     75 300

                    C75 170
                     215 75
                     250 28

                    Z
                  "
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* =========================
                    INNER CHEMICAL RING
                ========================= */}

                <path
                  d="
                    M250 100

                    C300 120
                     355 190
                     355 285

                    C355 355
                     310 405
                     250 405

                    C190 405
                     145 355
                     145 285

                    C145 190
                     200 120
                     250 100

                    Z
                  "
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              </svg>

              {/* =================================
                  CENTER CHEMICAL CORE
              ================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-28
                  w-28
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-red-500/10
                  blur-[45px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-20
                  w-20
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  CHEM
                </span>
              </div>

              {/* =================================
                  MOVING CHEMICAL DROP
              ================================= */}

              <div
                ref={particleRef}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-4
                  w-4
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  opacity-0
                  shadow-[0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(255,70,70,0.8)]
                "
              >
                <span
                  className="
                    absolute
                    inset-[-7px]
                    rounded-full
                    bg-red-400/30
                    blur-md
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
