"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // PASCOM text - professional bottom-up entrance animation (all together)
    gsap.fromTo(
      ".hero-char",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.5,
        clearProps: "all",
      },
    );

    // Center logo smooth entrance
    gsap.fromTo(
      ".hero-logo",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.2)",
        delay: 0.2,
        clearProps: "all",
      },
    );

    // Bottom team avatars fade-up
    gsap.fromTo(
      ".hero-team",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        delay: 1.8,
        clearProps: "all",
      },
    );

    // Button fade-up
    gsap.fromTo(
      ".hero-button",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1.2,
        clearProps: "all",
      },
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-200 overflow-hidden font-sans antialiased flex flex-col"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      {/* Bottom Half Background Image with Red Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] z-10">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
          alt="Industrial Facility"
          fill
          className="object-cover"
        />
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
        <div
          className="absolute inset-0"
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
        >
          <div className="mt-10 flex flex-col justify-between items-center">
            <button
              className="hero-button group flex items-center justify-between gap-6 border-4 border-white/30 rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
            >
              <span className="text-white text-xs font-bold tracking-wide">
                Explore Our Products
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--color-dark-red)" }}
              >
                <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
              </div>
            </button>
          </div>

          {/* Heading and subheading */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 md:px-12 py-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
              style={{ color: "var(--color-white)" }}
            >
              Chemical Suppliers{" "}
              <span
                className="block md:inline"
                style={{ color: "var(--color-primary-red)" }}
              >
                Australia
              </span>
            </h2>
            <h3
              className="text-lg md:text-2xl font-semibold text-white mb-8 leading-relaxed"
              style={{ color: "var(--color-white)" }}
            >
              One Stop Solution For All Your Chemical Needs
            </h3>
            <p className="text-white/75 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
              Explore our extensive range of high-quality chemical products
              designed to meet your industry requirements. Contact us today for
              reliable chemical solutions and expert support.
            </p>
          </div>
        </div>
      </div>

      {/* Center logo */}
      {/* <div className="hero-logo absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-15 pointer-events-none select-none">
        <div className="flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h10c3.31 0 6 2.69 6 6s-2.69 6-6 6H8v4H4V4zm4 4v4h6c1.1 0 2-.9 2-2s-.9-2-2-2H8z" />
            </svg>
          </div>
        </div>
      </div> */}

      {/* =========================================
          GIANT EDGE-TO-EDGE TEXT
          ========================================= */}
      <div className="relative -bottom-80 -translate-y-1/2 w-full px-4 z-0 pointer-events-none select-none overflow-hidden">
        <h1
          className="flex justify-between w-full font-black text-[18vw] leading-none tracking-tight m-0 p-0 drop-shadow-xl"
          style={{ color: "var(--color-white)" }}
        >
          <span className="hero-char">P</span>
          <span className="hero-char">A</span>
          <span className="hero-char">S</span>
          <span className="hero-char">C</span>
          <span className="hero-char">O</span>
          <span className="hero-char">M</span>
        </h1>
      </div>

      <div className="relative z-10 flex-1 flex flex-col md:flex-row justify-end items-end px-6 md:px-10 pb-10 w-full">
        {/* Bottom Left: Team Avatars */}
        <div
          className="hero-team backdrop-blur-md border-4 border-white/20 rounded-full p-1.5 pr-8 flex items-center gap-4 mb-6 md:mb-0 shadow-xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        >
          <div className="flex -space-x-3">
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg"
              alt="Team"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
            />
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/DSC1625-600x900.jpeg"
              alt="Team"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
            />
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/DSC16025-600x900.jpeg"
              alt="Team"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-[#0A1E1A] object-cover"
            />
          </div>
          <span className="text-white text-sm font-semibold tracking-wide">
            Meet the Experts Behind Pascom
          </span>
        </div>
      </div>
    </section>
  );
}
