"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SPOTLIGHT_R = 110;
const GRID_CELL = 48;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const gridOffsetRef = useRef({ x: 0, y: 0 });

  const maskRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Handle window resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize mouse position
  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseRef.current = { x: centerX, y: centerY };
    smoothMouseRef.current = { x: centerX, y: centerY };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    let rafId: number;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const loop = () => {
      // 1. Ease mouse with responsive speed
      const easeSpeed = isMobile ? 0.15 : 0.1;
      smoothMouseRef.current.x +=
        (mouseRef.current.x - smoothMouseRef.current.x) * easeSpeed;
      smoothMouseRef.current.y +=
        (mouseRef.current.y - smoothMouseRef.current.y) * easeSpeed;

      const sx = smoothMouseRef.current.x;
      const sy = smoothMouseRef.current.y;

      // 2. Grid offset with responsive calculation
      if (containerRef.current && gridRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerSize = Math.min(rect.width, rect.height);
        const offsetMultiplier = Math.max(
          0.5,
          Math.min(1, containerSize / 1200),
        );

        const cx = (sx - rect.left) / rect.width - 0.5;
        const cy = (sy - rect.top) / rect.height - 0.5;

        const maxOffset = isMobile ? 8 : 16;
        gridOffsetRef.current.x +=
          (cx * maxOffset * offsetMultiplier - gridOffsetRef.current.x) * 0.06;
        gridOffsetRef.current.y +=
          (cy * maxOffset * offsetMultiplier - gridOffsetRef.current.y) * 0.06;

        gridRef.current.style.transform = `translate(${gridOffsetRef.current.x}px, ${gridOffsetRef.current.y}px)`;
      }

      // 3. Draw mask (Spotlight) - Fixed canvas rendering
      if (canvas && ctx && maskRef.current) {
        const rect = maskRef.current.getBoundingClientRect();

        // Match canvas size to the image container
        const dpr = window.devicePixelRatio || 1;
        const width = rect.width;
        const height = rect.height;

        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          canvas.style.width = width + "px";
          canvas.style.height = height + "px";
          ctx.scale(dpr, dpr);
        }

        ctx.clearRect(0, 0, width, height);

        // Convert viewport coordinates to local canvas coordinates
        const localX = sx - rect.left;
        const localY = sy - rect.top;

        // Adjust spotlight radius for mobile
        const spotlightRadius = isMobile ? SPOTLIGHT_R * 0.7 : SPOTLIGHT_R;

        const grad = ctx.createRadialGradient(
          localX,
          localY,
          0,
          localX,
          localY,
          spotlightRadius,
        );
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.3, "rgba(255,255,255,1)");
        grad.addColorStop(0.5, "rgba(255,255,255,0.8)");
        grad.addColorStop(0.7, "rgba(255,255,255,0.4)");
        grad.addColorStop(0.85, "rgba(255,255,255,0.15)");
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(localX, localY, spotlightRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Update mask
        const dataUrl = canvas.toDataURL();
        maskRef.current.style.webkitMaskImage = `url(${dataUrl})`;
        maskRef.current.style.maskImage = `url(${dataUrl})`;
        maskRef.current.style.webkitMaskSize = "100% 100%";
        maskRef.current.style.maskSize = "100% 100%";
        maskRef.current.style.webkitMaskRepeat = "no-repeat";
        maskRef.current.style.maskRepeat = "no-repeat";
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  return (
    <section className="bg-black">
      <div
        ref={containerRef}
        className="hero-section max-w-7xl mx-auto w-full flex items-center justify-center relative overflow-hidden"
        style={{
          minHeight: isMobile
            ? "clamp(500px, 100vh, 800px)"
            : "clamp(600px, 100vh, 1200px)",
        }}
      >
        {/* Grid background */}
        <svg
          ref={gridRef}
          className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%] opacity-10 pointer-events-none z-0"
        >
          <pattern
            id="grid"
            width={GRID_CELL}
            height={GRID_CELL}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Main Glassmorphic Container */}
        <div
          className="glass-panel w-full relative overflow-hidden flex flex-col justify-between backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{
            height: isMobile
              ? "clamp(500px, 85vh, 700px)"
              : "clamp(600px, 90vh, 1000px)",
            margin: isMobile ? "0.5rem" : "1rem",
            borderRadius: isMobile ? "1rem" : "2rem",
          }}
        >
          {/* Giant Background Text - Fixed responsive sizing */}
          <div
            className="giant-text select-none uppercase absolute top-[2%] md:top-[5%] left-1/2 -translate-x-1/2 z-0 pointer-events-none font-black tracking-tight text-transparent bg-clip-text"
            style={{
              fontSize: isMobile
                ? "clamp(2.5rem, 15vw, 6rem)"
                : "clamp(3rem, 18vw, 24rem)",
              lineHeight: isMobile ? 1 : 0.8,
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: isMobile ? 0.4 : 1,
            }}
          >
            PASCOM
          </div>

          {/* Abstract 3D Glass Planes - Hidden on mobile */}
          <div
            className="glass-plane plane-1 hidden md:block absolute pointer-events-none w-[150%] h-[50vh] top-[45%] -left-[20%] bg-gradient-to-br from-white/20 to-white/[0.02] backdrop-blur-[8px] border-t border-l border-white/50"
            style={{
              transform: "perspective(1200px) rotateX(70deg) rotateZ(-15deg)",
            }}
          />
          <div
            className="glass-plane plane-2 hidden md:block absolute pointer-events-none w-[80%] h-[40vh] top-[40%] -right-[10%] bg-gradient-to-tl from-white/15 to-white/0 backdrop-blur-[8px] border-t border-l border-white/50"
            style={{
              transform: "perspective(1000px) rotateX(65deg) rotateZ(25deg)",
            }}
          />

          {/* Central Hero Product Image with Spotlight Reveal - Fixed responsive positioning */}
          <div
            className="absolute inset-0 flex items-center justify-center lg:justify-end z-10 pointer-events-none"
            style={{
              paddingRight: isMobile ? "0" : "clamp(0px, 5vw, 80px)",
              paddingTop: isMobile ? "2rem" : "3rem",
            }}
          >
            <div
              className="relative drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-auto cursor-pointer"
              style={{
                width: isMobile
                  ? "clamp(180px, 60%, 350px)"
                  : "clamp(280px, 70%, 600px)",
                aspectRatio: isMobile ? "4/3" : "1",
              }}
            >
              {/* Base Image */}
              <div
                className="absolute inset-0 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url('/home/hero_image.png')` }}
              />

              {/* Reveal Layer with Spotlight Mask */}
              <div
                ref={maskRef}
                className="absolute inset-0 bg-center bg-contain bg-no-repeat w-full h-full"
                style={{
                  backgroundImage: `url('/home/hero_image - Copy.png')`,
                }}
              />

              {/* Canvas for mask generation - Now visible but transparent */}
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
            </div>
          </div>

          {/* Bottom Content Area - Fixed responsive layout */}
          <div
            className="relative border border-white/20 z-20 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4 lg:gap-6 pointer-events-none"
            style={{
              marginTop: isMobile
                ? "clamp(1rem, 5vh, 3rem)"
                : "clamp(2rem, 10vh, 15rem)",
              padding: isMobile
                ? "clamp(0.75rem, 3vw, 1.5rem)"
                : "clamp(1rem, 5vw, 3rem)",
            }}
          >
            {/* Left Side: Headline & Text */}
            <div
              className="w-full bg-black/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:rounded-none pointer-events-auto"
              style={{
                marginTop: isMobile
                  ? "clamp(1rem, 3vw, 1.5rem)"
                  : "clamp(1.5rem, 5vw, 3rem)",
                padding: isMobile
                  ? "clamp(0.75rem, 2vw, 1rem)"
                  : "clamp(1rem, 2vw, 1.5rem)",
                maxWidth: "clamp(280px, 90%, 900px)",
              }}
            >
              <h1
                className="font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg"
                style={{
                  fontSize: isMobile
                    ? "clamp(1.2rem, 5vw, 2rem)"
                    : "clamp(1.5rem, 5vw, 2.8rem)",
                  marginBottom: isMobile
                    ? "clamp(0.5rem, 2vw, 1rem)"
                    : "clamp(1rem, 2vw, 1.2rem)",
                }}
              >
                Chemical Suppliers{" "}
                <span className="text-red-600">Australia</span> <br />
                <span
                  className="opacity-90 block"
                  style={{
                    fontSize: isMobile
                      ? "clamp(0.8rem, 3vw, 1.2rem)"
                      : "clamp(1rem, 3vw, 1.8rem)",
                    marginTop: isMobile
                      ? "clamp(0.25rem, 1vw, 0.5rem)"
                      : "clamp(0.5rem, 1.5vw, 0.75rem)",
                  }}
                >
                  One Stop Solution For All Your Chemical Needs
                </span>
              </h1>
              <p
                className="text-white/90 font-medium leading-relaxed drop-shadow-md"
                style={{
                  fontSize: isMobile
                    ? "clamp(0.75rem, 1.8vw, 0.875rem)"
                    : "clamp(0.875rem, 1.5vw, 0.95rem)",
                  marginBottom: isMobile
                    ? "clamp(1rem, 2vw, 1.5rem)"
                    : "clamp(1.5rem, 2vw, 1.8rem)",
                  maxWidth: "clamp(250px, 100%, 500px)",
                }}
              >
                Explore our extensive range of high-quality chemical products
                designed to meet your industry requirements. Contact us today
                for reliable chemical solutions and expert support.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-[0_10px_25px_rgba(220,38,38,0.4)] whitespace-nowrap w-full sm:w-auto justify-center"
                style={{
                  padding: isMobile
                    ? "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)"
                    : "clamp(0.75rem, 1.5vw, 0.9rem) clamp(1.5rem, 3vw, 1.8rem)",
                  fontSize: isMobile
                    ? "clamp(0.75rem, 1.8vw, 0.875rem)"
                    : "clamp(0.8rem, 1.5vw, 0.9rem)",
                }}
              >
                Discover Our Products & Services
                <i className="fas fa-bolt text-sm"></i>
              </a>
            </div>

            {/* Right Side: Stats & Rating - Fixed responsive sizing */}
            <div
              className="flex flex-col items-center lg:items-end pointer-events-auto w-full lg:w-auto"
              style={{ gap: "clamp(0.75rem, 2vw, 1.5rem)" }}
            >
              {/* Stat Cards - Fixed width and layout */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
                <div
                  className="bg-white/20 backdrop-blur-md rounded-3xl text-center shadow-xl border border-white/30 flex-1 sm:flex-none"
                  style={{
                    padding: isMobile
                      ? "clamp(0.75rem, 2vw, 1rem)"
                      : "clamp(1rem, 3vw, 1.5rem)",
                    minWidth: isMobile ? "120px" : "140px",
                    maxWidth: isMobile ? "160px" : "180px",
                    width: "100%",
                  }}
                >
                  <div
                    className="font-black text-white mb-1"
                    style={{
                      fontSize: isMobile
                        ? "clamp(1.2rem, 3vw, 1.8rem)"
                        : "clamp(1.5rem, 4vw, 2.5rem)",
                    }}
                  >
                    300+
                  </div>
                  <div
                    className="font-semibold text-white leading-tight"
                    style={{
                      fontSize: isMobile
                        ? "clamp(0.6rem, 1.2vw, 0.7rem)"
                        : "clamp(0.7rem, 1.5vw, 0.75rem)",
                    }}
                  >
                    Custom
                    <br />
                    Formulations
                  </div>
                </div>
                <div
                  className="bg-white/20 backdrop-blur-md rounded-3xl text-center shadow-xl border border-white/30 flex-1 sm:flex-none"
                  style={{
                    padding: isMobile
                      ? "clamp(0.75rem, 2vw, 1rem)"
                      : "clamp(1rem, 3vw, 1.5rem)",
                    minWidth: isMobile ? "120px" : "140px",
                    maxWidth: isMobile ? "160px" : "180px",
                    width: "100%",
                  }}
                >
                  <div
                    className="font-black text-white mb-1"
                    style={{
                      fontSize: isMobile
                        ? "clamp(1.2rem, 3vw, 1.8rem)"
                        : "clamp(1.5rem, 4vw, 2.5rem)",
                    }}
                  >
                    24/7
                  </div>
                  <div
                    className="font-semibold text-white leading-tight"
                    style={{
                      fontSize: isMobile
                        ? "clamp(0.6rem, 1.2vw, 0.7rem)"
                        : "clamp(0.7rem, 1.5vw, 0.75rem)",
                    }}
                  >
                    Logistics &<br />
                    Support
                  </div>
                </div>
              </div>

              {/* Rating Pill - Fixed responsive sizing */}
              <div
                className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center shadow-xl w-full sm:w-auto justify-center sm:justify-start"
                style={{
                  padding: isMobile
                    ? "clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)"
                    : "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.25rem)",
                  gap: isMobile
                    ? "clamp(0.5rem, 1.5vw, 0.75rem)"
                    : "clamp(0.75rem, 2vw, 1.5rem)",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="flex"
                  style={{ gap: isMobile ? "-0.3rem" : "-0.5rem" }}
                >
                  {[
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
                  ].map((src, index) => (
                    <Image
                      key={index}
                      className="rounded-full border-2 border-white object-cover"
                      src={src}
                      alt={`User ${index + 1}`}
                      width={40}
                      height={40}
                      style={{
                        width: isMobile
                          ? "clamp(1.5rem, 3vw, 2rem)"
                          : "clamp(1.75rem, 4vw, 2.5rem)",
                        height: isMobile
                          ? "clamp(1.5rem, 3vw, 2rem)"
                          : "clamp(1.75rem, 4vw, 2.5rem)",
                        borderColor: "rgba(255,255,255,0.5)",
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-col justify-center">
                  <div
                    className="flex gap-1 text-red-600 mb-0.5 drop-shadow-md"
                    style={{
                      fontSize: isMobile
                        ? "clamp(0.5rem, 1.2vw, 0.65rem)"
                        : "clamp(0.625rem, 1.5vw, 0.75rem)",
                    }}
                  >
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span
                    className="text-white font-bold tracking-wide whitespace-nowrap"
                    style={{
                      fontSize: isMobile
                        ? "clamp(0.5rem, 1.2vw, 0.65rem)"
                        : "clamp(0.625rem, 1.5vw, 0.75rem)",
                    }}
                  >
                    Trusted B2B Partners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
