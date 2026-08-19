"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    num: "1",
    title: "Customer Centric Approach",
    desc: "Pascom meticulously understands and prioritizes specific needs and provides nimble tailored service that exceeds customer expectations.",
    icon: "fa-users",
  },
  {
    num: "2",
    title: "Reliability and Consistency",
    desc: "Pascom maintains high standards of product quality and reliability through rigorous quality control measures and efficient supply chain management.",
    icon: "fa-leaf",
  },
  {
    num: "3",
    title: "Innovation and Research",
    desc: "Continual improvement and innovation are in our genes. Challenging the status quo is part of our day-to-day business at Pascom, setting us apart.",
    icon: "fa-flask",
  },
  {
    num: "4",
    title: "Sustainability Initiatives",
    desc: "Pascom implements eco-friendly practices in manufacturing, reducing waste and using renewable resources to support environmental sustainability.",
    icon: "fa-leaf",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const path = progressPathRef.current;
    const glow = glowPathRef.current;

    const cards = gsap.utils.toArray(
      ".process-step"
    ) as HTMLElement[];

    const icons = gsap.utils.toArray(
      ".hexagon-icon"
    ) as HTMLElement[];

    if (!path) return;

    /*
     * ==========================================
     * SVG PATH
     * ==========================================
     */

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    if (glow) {
      gsap.set(glow, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
    }

    /*
     * ==========================================
     * INITIAL CARD STATE
     * ==========================================
     */

    gsap.set(cards, {
      opacity: 0,
      y: 50,
      scale: 0.94,
    });

    gsap.set(icons, {
      opacity: 0,
      scale: 0.7,
    });

    /*
     * ==========================================
     * MAIN SCROLL TIMELINE
     * ==========================================
     */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,

        /*
         * Section reaches the top
         */

        start: "top 30px",

        /*
         * Keep the section pinned while
         * animation progresses.
         *
         * 450vh = long enough for the
         * user to experience the animation.
         */

        end: "+=450%",

        pin: true,

        scrub: 1,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        /*
         * markers: true,
         */
      },
    });

    /*
     * ==========================================
     * RED WAVE DRAW
     * ==========================================
     */

    tl.to(
      path,
      {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1,
      },
      0
    );

    /*
     * ==========================================
     * RED GLOW DRAW
     * ==========================================
     */

    if (glow) {
      tl.to(
        glow,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0
      );
    }

    /*
     * ==========================================
     * CARD REVEALS
     * ==========================================
     */

    cards.forEach((card, index) => {
      const start = index * 0.23;

      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.22,
          ease: "power2.out",
        },
        start
      );

      /*
       * Icon appears just after card
       */

      tl.to(
        icons[index],
        {
          opacity: 1,
          scale: 1,
          duration: 0.16,
          ease: "back.out(2)",
        },
        start + 0.04
      );
    });

    /*
     * ==========================================
     * FINAL HOLD
     *
     * Keeps the completed design visible
     * briefly before releasing the pin.
     * ==========================================
     */

    tl.to(
      {},
      {
        duration: 0.25,
      }
    );
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={containerRef}
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-24
        font-sans
        antialiased
        md:px-8
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mb-16 lg:mb-0">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-gray-900
              md:text-5xl
            "
          >
            Our Principles
            <span className="text-red-500">
              .
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-500
              md:text-base
            "
          >
            The principles that guide how
            Pascom works with customers,
            develops solutions and delivers
            reliable chemical services.
          </p>
        </div>

        {/* ========================================
            PROCESS CONTAINER
        ======================================== */}

        <div
          className="
            relative
            mt-12
            w-full
            lg:mt-0
            lg:h-[500px]
          "
        >

          {/* ======================================
              SVG CHEMICAL WAVE
          ====================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              hidden
              lg:block
            "
          >
            <svg
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              className="
                h-full
                w-full
                overflow-visible
              "
            >

              <defs>

                <linearGradient
                  id="processWaveGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#991b1b"
                  />

                  <stop
                    offset="40%"
                    stopColor="#dc2626"
                  />

                  <stop
                    offset="70%"
                    stopColor="#ef4444"
                  />

                  <stop
                    offset="100%"
                    stopColor="#f87171"
                  />
                </linearGradient>

                <filter
                  id="processGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    stdDeviation="7"
                  />
                </filter>

              </defs>

              {/* ==================================
                  VERY LIGHT TRACK
              ================================== */}

              <path
                d="
                  M -50 325
                  C 37 325,
                    37 325,
                    125 325

                  C 250 325,
                    250 175,
                    375 175

                  C 500 175,
                    500 325,
                    625 325

                  C 750 325,
                    750 175,
                    875 175

                  C 962 175,
                    1050 175,
                    1050 175
                "
                fill="none"
                stroke="rgba(220,38,38,0.08)"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />

              {/* ==================================
                  RED GLOW
              ================================== */}

              <path
                ref={glowPathRef}
                d="
                  M -50 325
                  C 37 325,
                    37 325,
                    125 325

                  C 250 325,
                    250 175,
                    375 175

                  C 500 175,
                    500 325,
                    625 325

                  C 750 325,
                    750 175,
                    875 175

                  C 962 175,
                    1050 175,
                    1050 175
                "
                fill="none"
                stroke="rgba(220,38,38,0.35)"
                strokeWidth="18"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                filter="url(#processGlow)"
              />

              {/* ==================================
                  MAIN ANIMATED LINE
              ================================== */}

              <path
                ref={progressPathRef}
                d="
                  M -50 325
                  C 37 325,
                    37 325,
                    125 325

                  C 250 325,
                    250 175,
                    375 175

                  C 500 175,
                    500 325,
                    625 325

                  C 750 325,
                    750 175,
                    875 175

                  C 962 175,
                    1050 175,
                    1050 175
                "
                fill="none"
                stroke="url(#processWaveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />

              {/* ==================================
                  MOLECULAR NODES
              ================================== */}

              <circle
                cx="125"
                cy="325"
                r="7"
                fill="#dc2626"
              />

              <circle
                cx="375"
                cy="175"
                r="7"
                fill="#dc2626"
              />

              <circle
                cx="625"
                cy="325"
                r="7"
                fill="#dc2626"
              />

              <circle
                cx="875"
                cy="175"
                r="7"
                fill="#dc2626"
              />

            </svg>
          </div>

          {/* ======================================
              PROCESS CARDS
          ====================================== */}

          <div
            className="
              relative
              z-10
              grid
              h-full
              grid-cols-1
              gap-12
              lg:grid-cols-4
              lg:gap-0
            "
          >

            {processSteps.map(
              (step, index) => {

                const isTopText =
                  index % 2 === 0;

                return (
                  <div
                    key={step.num}
                    className="
                      process-step
                      relative
                      flex
                      h-full
                      flex-col
                      items-center
                      lg:block
                    "
                  >

                    {/* ==================================
                        ICON
                    ================================== */}

                    <div
                      className={`
                        hexagon-icon
                        z-20
                        mb-6
                        drop-shadow-[0_15px_25px_rgba(220,38,38,0.3)]
                        lg:absolute
                        lg:left-1/2
                        lg:mb-0
                        lg:-translate-x-1/2
                        lg:-translate-y-1/2
                        ${
                          isTopText
                            ? "lg:top-[65%]"
                            : "lg:top-[35%]"
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          bg-white
                          shadow-inner
                        "
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      >
                        <i
                          className={`
                            fa-solid
                            ${step.icon}
                            text-xl
                            text-red-600
                          `}
                        />
                      </div>
                    </div>

                    {/* ==================================
                        CONTENT
                    ================================== */}

                    <div
                      className={`
                        relative
                        mx-auto
                        w-full
                        max-w-sm
                        px-6
                        text-center
                        lg:absolute
                        lg:left-0
                        lg:w-full
                        lg:text-left
                        ${
                          isTopText
                            ? "lg:top-12"
                            : "lg:bottom-12"
                        }
                      `}
                    >

                      {/* Giant Number */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          -top-12
                          left-1/2
                          -z-10
                          -translate-x-1/2
                          select-none
                          text-[10rem]
                          font-black
                          text-slate-300
                          opacity-20
                          lg:-top-16
                          lg:left-0
                          lg:-translate-x-4
                        "
                      >
                        {step.num}
                      </span>

                      {/* Title */}

                      <h3
                        className="
                          mb-3
                          text-xl
                          font-bold
                          tracking-tight
                          text-gray-900
                        "
                      >
                        {step.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          text-sm
                          font-medium
                          leading-relaxed
                          text-gray-500
                        "
                      >
                        {step.desc}
                      </p>

                    </div>
                  </div>
                );
              }
            )}

          </div>
        </div>
      </div>
    </section>
  );
}