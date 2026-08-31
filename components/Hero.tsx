"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidButton from "./LiquidButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const router = useRouter();
  const pascomTextRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    router.push("/products-services");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pascomTextRef.current) return;

      // =========================================
      // PASCOM TEXT SCROLL FADE
      // Opacity: 1 → 0.5
      // Scroll Up: 0.5 → 1
      // =========================================
      gsap.to(pascomTextRef.current, {
        keyframes: [{ opacity: 0.8 }, { opacity: 0.5 }, { opacity: 0.3 }],
        ease: "none",
        scrollTrigger: {
          trigger: pascomTextRef.current.parentElement,
          start: "top top",
          end: "top+=400 top",
          scrub: true,
        },
      });

      // =========================================
      // PASCOM LETTERS ENTRANCE
      // =========================================
      gsap.fromTo(
        ".hero-char",
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.5,
        },
      );

      // =========================================
      // BUTTON ENTRANCE
      // =========================================
      gsap.fromTo(
        ".hero-button",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 1.2,
        },
      );

      // =========================================
      // TEAM AVATARS ENTRANCE
      // =========================================
      gsap.fromTo(
        ".hero-team",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          delay: 1.8,
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* =========================================
          TOP SECTION: 50vh
          PASCOM TEXT
          ========================================= */}
      <section
        className="relative w-full h-[50vh] flex flex-col items-end justify-between overflow-hidden font-sans antialiased p-4 md:p-10"
        style={{
          backgroundColor: "var(--color-primary-red)",
        }}
      >
        {/* GIANT PASCOM TEXT */}
        <div
          ref={pascomTextRef}
          className="absolute -bottom-7 left-0 w-full pointer-events-none select-none overflow-hidden"
        >
          <h1
            className="flex justify-between items-end w-full font-black text-[12vw] md:text-[18vw] leading-none tracking-tight m-0 p-0 px-2 md:px-4"
            style={{
              color: "var(--color-white)",
            }}
          >
            <span
              className="hero-char"
              style={{
                color: "transparent",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "10px var(--color-white)",
              }}
            >
              P
            </span>
            <span className="hero-char">A</span>
            <span className="hero-char">S</span>
            <span className="hero-char">C</span>
            <span className="hero-char">O</span>
            <span className="hero-char">M</span>
          </h1>
        </div>
      </section>

      {/* =========================================
          BOTTOM SECTION: 50vh
          HERO VIDEO
          ========================================= */}
      <section
        className="relative w-full h-[50vh] overflow-hidden font-sans antialiased"
        style={{
          backgroundColor: "var(--color-primary-red)",
        }}
      >
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>

        {/* RED GRADIENT OVERLAY */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                207deg,
                rgba(198, 40, 40, 0) 65%,
                rgba(198, 40, 40, 0.4) 100%
              ),
              linear-gradient(
                90deg,
                var(--color-dark-red) 0%,
                rgba(69, 10, 10, 0.4) 70%
              )
            `,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-12">
          {/* BUTTON */}
          <div className="mb-8 md:mb-10 flex justify-center pointer-events-auto hero-button">
            <LiquidButton onClick={handleExploreClick}>
              <span className="text-xs md:text-sm">Explore Our Products</span>

              <i className="fa-solid fa-arrow-right text-white text-[11px]" />
            </LiquidButton>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2 md:mb-4"
              style={{
                color: "var(--color-white)",
              }}
            >
              Chemical Suppliers{" "}
              <span
                className="block md:inline"
                style={{
                  /* 1. Makes the inside of the text completely see-through */
                  color: "transparent",
                  WebkitTextFillColor: "transparent",

                  /* 2. Creates the clean, professional outline using your brand red */
                  WebkitTextStroke: "3px var(--color-white)",

                  /* 3. Slightly reduces the "heat" (intensity) of the red for a calmer, premium look */
                  opacity: 0.8,
                }}
              >
                Australia
              </span>
            </h2>

            <h3
              className="text-base md:text-2xl font-semibold mb-4 md:mb-8 leading-relaxed"
              style={{
                color: "var(--color-white)",
              }}
            >
              One Stop Solution For All Your Chemical Needs
            </h3>

            <p className="text-white/75 text-xs md:text-base leading-relaxed font-medium max-w-2xl">
              Explore our extensive range of high-quality chemical products
              designed to meet your industry requirements. Contact us today for
              reliable chemical solutions and expert support.
            </p>
          </div>
        </div>

        {/* TEAM AVATARS */}
        <div className="absolute bottom-6 md:bottom-10 right-4 md:right-10 z-20 pointer-events-auto">
          <div
            className="hero-team backdrop-blur-md border-4 border-white/20 rounded-full p-1 md:p-1.5 pr-4 md:pr-8 flex items-center gap-2 md:gap-4 shadow-xl whitespace-nowrap"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* AVATARS */}
            <div className="flex -space-x-2 md:-space-x-3">
              <Image
                src="https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg"
                alt="Team"
                width={40}
                height={40}
                className="w-7 md:w-10 h-7 md:h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
              />

              <Image
                src="https://pascom.com.au/wp-content/uploads/2024/10/DSC1625-600x900.jpeg"
                alt="Team"
                width={40}
                height={40}
                className="w-7 md:w-10 h-7 md:h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
              />

              <Image
                src="https://pascom.com.au/wp-content/uploads/2024/10/DSC16025-600x900.jpeg"
                alt="Team"
                width={40}
                height={40}
                className="w-7 md:w-10 h-7 md:h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
              />
            </div>

            <span className="text-white text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap">
              Meet the Experts
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
