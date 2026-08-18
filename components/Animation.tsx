"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

export default function ChemicalDropFill() {
  const liquidRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const [filled, setFilled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (
      filled ||
      isAnimating ||
      !liquidRef.current ||
      !waveRef.current ||
      !shineRef.current
    ) {
      return;
    }

    setIsAnimating(true);

    const liquid = liquidRef.current;
    const wave = waveRef.current;
    const shine = shineRef.current;

    // Reset
    gsap.killTweensOf([liquid, wave, shine]);

    gsap.set(liquid, {
      height: "0%",
    });

    gsap.set(wave, {
      scaleX: 0.35,
      opacity: 0,
    });

    gsap.set(shine, {
      y: 120,
      opacity: 0,
    });

    const timeline = gsap.timeline({
      onComplete: () => {
        setFilled(true);
        setIsAnimating(false);
      },
    });

    /*
     * ========================================
     * LIQUID FILL
     * ========================================
     */

    timeline.to(liquid, {
      height: "100%",
      duration: 2,
      ease: "power2.inOut",
    });

    /*
     * ========================================
     * WAVE
     * ========================================
     */

    timeline.fromTo(
      wave,
      {
        scaleX: 0.35,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=1.7"
    );

    /*
     * Wave movement
     */

    timeline
      .to(
        wave,
        {
          scaleX: 1.15,
          duration: 0.4,
          ease: "sine.inOut",
        },
        "-=0.8"
      )
      .to(wave, {
        scaleX: 1,
        duration: 0.4,
        ease: "sine.inOut",
      });

    /*
     * ========================================
     * GLASS SHINE
     * ========================================
     */

    timeline
      .to(
        shine,
        {
          y: -120,
          opacity: 0.8,
          duration: 1.5,
          ease: "power1.inOut",
        },
        "-=1.5"
      )
      .to(
        shine,
        {
          opacity: 0,
          duration: 0.4,
        },
        "-=0.3"
      );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071A16] px-6">
      <div className="flex flex-col items-center">

        {/* ==========================================
            DROP
        ========================================== */}

        <button
          type="button"
          onClick={handleClick}
          disabled={filled || isAnimating}
          aria-label="Fill chemical drop"
          className="
            group
            relative
            h-[440px]
            w-[340px]
            cursor-pointer
            bg-transparent
            outline-none
            disabled:cursor-default
          "
        >

          {/* ========================================
              SVG DROP
          ======================================== */}

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

              {/* Smooth drop shape */}

              <clipPath id="chemicalDropClip">
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

              {/* Drop gradient */}

              <linearGradient
                id="glassGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="rgba(255,255,255,0.12)"
                />

                <stop
                  offset="50%"
                  stopColor="rgba(255,255,255,0.025)"
                />

                <stop
                  offset="100%"
                  stopColor="rgba(0,0,0,0.08)"
                />
              </linearGradient>

              {/* Chemical gradient */}

              <linearGradient
                id="chemicalGradient"
                x1="0"
                y1="1"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#5c0000"
                />

                <stop
                  offset="45%"
                  stopColor="#b40000"
                />

                <stop
                  offset="80%"
                  stopColor="#e60000"
                />

                <stop
                  offset="100%"
                  stopColor="#ff4b4b"
                />
              </linearGradient>

              {/* Glow */}

              <filter id="chemicalGlow">
                <feGaussianBlur
                  stdDeviation="7"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* ======================================
                DROP BACKGROUND
            ====================================== */}

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
              fill="rgba(255,255,255,0.025)"
            />

            {/* ======================================
                LIQUID
            ====================================== */}

            <foreignObject
              x="0"
              y="0"
              width="200"
              height="260"
              clipPath="url(#chemicalDropClip)"
            >
              <div
                className="relative h-full w-full"
                style={{
                  background: "transparent",
                }}
              >

                {/* Liquid layer */}

                <div
                  ref={liquidRef}
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    overflow-hidden
                  "
                  style={{
                    height: "0%",
                    background:
                      "linear-gradient(to top, #5c0000 0%, #a80000 45%, #dc0000 75%, #ff4444 100%)",
                  }}
                >

                  {/* =================================
                      WAVE
                  ================================= */}

                  <div
                    ref={waveRef}
                    className="
                      absolute
                      -top-[10px]
                      left-[-15%]
                      h-[22px]
                      w-[130%]
                      rounded-[50%]
                      bg-[#ff4b4b]
                    "
                    style={{
                      boxShadow:
                        "0 0 18px rgba(255, 70, 70, 0.45)",
                    }}
                  />

                  {/* Secondary wave */}

                  <div
                    className="
                      absolute
                      -top-[5px]
                      left-[-25%]
                      h-[17px]
                      w-[150%]
                      rounded-[50%]
                      bg-white/10
                    "
                  />

                  {/* Liquid glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.07]
                      to-transparent
                    "
                  />

                </div>

              </div>
            </foreignObject>

            {/* ======================================
                GLASS OVERLAY
            ====================================== */}

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
              fill="url(#glassGradient)"
              clipPath="url(#chemicalDropClip)"
            />

            {/* ======================================
                OUTER SMOOTH OUTLINE
            ====================================== */}

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
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Inner outline */}

            <path
              d="
                M100 16
                C94 25 78 47 61 72
                C43 99 33 125 33 153
                C33 198 61 233 100 233
                C139 233 167 198 167 153
                C167 125 157 99 139 72
                C122 47 106 25 100 16
                Z
              "
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />

          </svg>

          {/* ========================================
              MOVING GLASS SHINE
          ======================================== */}

          <div
            ref={shineRef}
            className="
              pointer-events-none
              absolute
              left-[25%]
              top-[30%]
              z-30
              h-[100px]
              w-[20px]
              rotate-[14deg]
              rounded-full
              bg-white/20
              blur-lg
            "
          />

          {/* ========================================
              STATIC GLASS REFLECTION
          ======================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[27%]
              top-[18%]
              z-30
              h-[90px]
              w-[5px]
              rotate-[14deg]
              rounded-full
              bg-white/30
              blur-[2px]
            "
          />

          {/* ========================================
              CLICK CONTENT
          ======================================== */}

          {!filled && (
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-40
                flex
                items-center
                justify-center
              "
            >
              <div className="text-center">

                <div
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/[0.05]
                    text-xl
                    text-white/50
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  +
                </div>

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-white/50
                  "
                >
                  Click
                </p>

                <p className="mt-2 text-xs text-white/30">
                  Fill Chemical
                </p>

              </div>
            </div>
          )}

        </button>

        {/* ==========================================
            STATUS
        ========================================== */}

        <div className="mt-8 text-center">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white/30
            "
          >
            {filled
              ? "Chemical Ready"
              : "Chemical Drop"}
          </p>

          <p className="mt-2 text-sm text-white/40">
            {filled
              ? "100% Filled"
              : isAnimating
                ? "Filling..."
                : "Click to fill"}
          </p>

        </div>

      </div>
    </main>
  );
}