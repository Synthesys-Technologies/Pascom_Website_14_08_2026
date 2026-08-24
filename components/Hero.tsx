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
    if (!pascomTextRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pascomTextRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,

        onUpdate: (self) => {
          if (!pascomTextRef.current) return;

          // Scroll progress: 0 → 1
          const progress = self.progress;

          // Opacity: 1 → 0
          const opacity = 1 - progress;

          gsap.set(pascomTextRef.current, {
            opacity,
          });
        },
      });
    }, pascomTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative w-full h-screen min-h-200 overflow-hidden font-sans antialiased flex flex-col"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      {/* Bottom Half Background Image with Red Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] md:h-[50%] z-10 flex flex-col items-stretch">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-0 pointer-events-none"
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

        {/* Button Section - Above overlay */}
        <div className="relative z-20 mt-4 md:mt-10 flex flex-col justify-start items-center pointer-events-auto">
          <LiquidButton onClick={handleExploreClick}>
            <span className="text-xs md:text-sm">Explore Our Products</span>
            <i className="fa-solid fa-arrow-right text-white text-[11px]"></i>
          </LiquidButton>
        </div>

        {/* Heading and subheading */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 md:px-12 py-6 md:py-12">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-2 md:mb-4"
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
            className="text-base md:text-2xl font-semibold text-white mb-4 md:mb-8 leading-relaxed"
            style={{ color: "var(--color-white)" }}
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
      <div
        ref={pascomTextRef}
        className="absolute top-0 left-0 w-full h-[45vh] md:h-[50vh] flex items-end px-2 md:px-4 z-0 pointer-events-none select-none overflow-hidden md:top-4.5"
      >
        <h1
          className="flex justify-between items-end w-full font-black text-[12vw] md:text-[18vw] leading-none tracking-tight m-0 p-0"
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

      <div className="relative z-10 flex-1 flex flex-col justify-end items-end px-4 md:px-10 pb-6 md:pb-10 w-full">
        {/* Bottom: Team Avatars */}
        <div
          className="hero-team backdrop-blur-md border-4 border-white/20 rounded-full p-1 md:p-1.5 pr-4 md:pr-8 flex items-center gap-2 md:gap-4 shadow-xl whitespace-nowrap"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        >
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
  );
}
