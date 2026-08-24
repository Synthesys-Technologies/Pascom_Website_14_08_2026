"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const bondPaths = [
  "#bond-1",
  "#bond-2",
  "#bond-3",
  "#bond-4",
  "#bond-5",
  "#bond-6",

  "#bond-8",
  "#bond-9",

  "#bond-10",
  "#bond-11",

  "#bond-13",
  "#bond-14",
  "#bond-15",
  "#bond-16",

  "#bond-17",
  "#bond-18",
  "#bond-19",
];

export default function ChemicalMolecule() {
  const moleculeRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!particleRef.current) return;

    const particle = particleRef.current;

    /*
    ==========================================
    MAIN TIMELINE
    ==========================================
    */

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.25,
    });

    /*
    ==========================================
    MOVE RED PARTICLE THROUGH BONDS
    ==========================================
    */

    bondPaths.forEach((path) => {
      timeline.to(particle, {
        duration: 0.45,

        ease: "none",

        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
        },
      });

      /*
      Small pulse when reaching the
      end of each chemical bond
      */

      timeline.to(particle, {
        scale: 1.5,
        duration: 0.1,
        ease: "power2.out",
      });

      timeline.to(particle, {
        scale: 1,
        duration: 0.12,
        ease: "power2.in",
      });
    });

    /*
    ==========================================
    CLEANUP
    ==========================================
    */

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6">

        {/* =====================================
            MOLECULE CONTAINER
        ===================================== */}

        <div
          ref={moleculeRef}
          className="
            relative
            flex
            items-center
            justify-center
            w-95
            h-112.5
          "
        >

          {/* ===================================
              SVG MOLECULE
          =================================== */}

          <svg
            viewBox="0 0 100 120"
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-full
              w-full
              overflow-visible
            "
          >

            {/* =================================
                SVG DEFINITIONS
            ================================= */}

            <defs>

              {/* Molecule shadow */}

              <filter
                id="moleculeShadow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="1"
                  stdDeviation="1"
                  floodColor="#64748B"
                  floodOpacity="0.12"
                />
              </filter>

              {/* Red particle glow */}

              <filter
                id="particleGlow"
                x="-300%"
                y="-300%"
                width="600%"
                height="600%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="1.8"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Red glow */}

              <radialGradient id="particleGradient">

                <stop
                  offset="0%"
                  stopColor="#EF4444"
                />

                <stop
                  offset="55%"
                  stopColor="#DC2626"
                />

                <stop
                  offset="100%"
                  stopColor="#B91C1C"
                />

              </radialGradient>

            </defs>

            {/* =================================
                CHEMICAL BONDS
            ================================= */}

            <g
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#moleculeShadow)"
            >

              {/* ==============================
                  CENTRAL HEXAGON
              ============================== */}

              <path
                id="bond-1"
                d="M 50 45 L 66 53"
              />

              <path
                id="bond-2"
                d="M 66 53 L 66 73"
              />

              <path
                id="bond-3"
                d="M 66 73 L 50 81"
              />

              <path
                id="bond-4"
                d="M 50 81 L 34 73"
              />

              <path
                id="bond-5"
                d="M 34 73 L 34 53"
              />

              <path
                id="bond-6"
                d="M 34 53 L 50 45"
              />

              {/* ==============================
                  INNER DOUBLE BOND
              ============================== */}

              <path
                id="bond-7"
                d="M 39 57 L 48 51"
                strokeWidth="1"
              />

              {/* ==============================
                  BOTTOM BRANCHES
              ============================== */}

              <path
                id="bond-8"
                d="M 34 73 L 24 81"
              />

              <path
                id="bond-9"
                d="M 50 81 L 40 89"
              />

              {/* ==============================
                  TOP BACKBONE
              ============================== */}

              <path
                id="bond-10"
                d="M 50 45 L 50 28"
              />

              {/* ==============================
                  TOP RIGHT
              ============================== */}

              <path
                id="bond-11"
                d="M 50 28 L 66 18"
              />

              <path
                id="bond-12"
                d="M 53 33 L 69 23"
                strokeWidth="1"
              />

              {/* ==============================
                  TOP LEFT
              ============================== */}

              <path
                id="bond-13"
                d="M 50 28 L 30 23"
              />

              <path
                id="bond-14"
                d="M 30 23 L 20 31"
              />

              <path
                id="bond-15"
                d="M 20 31 L 20 43"
              />

              <path
                id="bond-16"
                d="M 30 23 L 15 33"
              />

              {/* ==============================
                  RIGHT BRANCH
              ============================== */}

              <path
                id="bond-17"
                d="M 66 53 L 82 43"
              />

              <path
                id="bond-18"
                d="M 82 43 L 82 28"
              />

              <path
                id="bond-19"
                d="M 82 28 L 94 20"
              />

            </g>

            {/* =================================
                ATOMS
            ================================= */}

            <g>

              {/* ==============================
                  HOLLOW ATOMS
              ============================== */}

              <circle
                cx="34"
                cy="73"
                r="5"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />

              <circle
                cx="50"
                cy="28"
                r="5"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />

              <circle
                cx="82"
                cy="43"
                r="5"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />

              {/* ==============================
                  SOLID ATOMS
              ============================== */}

              <circle
                cx="50"
                cy="45"
                r="5.5"
                fill="#FFFFFF"
              />

              <circle
                cx="66"
                cy="73"
                r="5.5"
                fill="#FFFFFF"
              />

              <circle
                cx="30"
                cy="23"
                r="5.5"
                fill="#FFFFFF"
              />

            </g>

            {/* =================================
                MOVING CHEMICAL PARTICLE
            ================================= */}

            <circle
              ref={particleRef}
              cx="50"
              cy="45"
              r="1.8"
              fill="url(#particleGradient)"
              filter="url(#particleGlow)"
            />

          </svg>

        </div>
      </div>
    </section>
  );
}