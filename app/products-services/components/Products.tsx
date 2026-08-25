"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopIndustries from "./TopIndustries";
import LiquidButton from "@/components/LiquidButton";
import { productsList } from "@/product_data/ProductData";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const progress = progressBarRef.current;

      if (!track || !section || !progress) return;

      // 1. Calculate how far the track needs to move horizontally
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      // 2. The Main Horizontal Scroll Timeline
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 3. Progress Bar Animation
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 0.1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="relative w-full min-h-screen font-sans antialiased overflow-x-hidden m-0 p-0"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      {/* HERO SECTION */}
      <section className="w-full bg-[#db0000] pt-32 pb-16 px-4 md:px-8 font-sans antialiased overflow-hidden">
        <div className="max-w-350 mx-auto">
          {/* =========================================
            TOP ROW (Text & Button)
            ========================================= */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12 lg:mb-16 px-2">
            {/* Left: Text Content */}
            <div className="w-full lg:w-2/3">
              {/* Main Headline */}
              <h1
                className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium text-white tracking-tight leading-[1.05] mb-6"
                style={{ color: "var(--color-White)" }}
              >
                Products & Services
              </h1>

              {/* Sub-paragraph */}
              <p className="text-gray-100 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
                We understand what&apos;s important to you. Pascom has evolved
                significantly, rising to prominence as one of the top chemical
                blenders and distributor of chemicals, ingredients, and raw
                materials Australia-Wide.
              </p>
            </div>

            {/* Right: CTA Button */}
            <div className="w-full lg:w-1/3 flex lg:justify-end pb-1">
              <LiquidButton
                onClick={() => {}}
                style={{
                      borderColor: "var(--color-dark-red)",
                      color: "var(--color-white)",
                      background: "var(--color-dark-red)",
                    }}
                className="text-sm font-medium tracking-wide gap-3"
              >
                <span style={{ color: "var(--color-white)",}}>View case study</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </LiquidButton>
            </div>
          </div>

          {/* =========================================
            BOTTOM ROW (Massive Image)
            ========================================= */}
          <div className="w-full h-[400px] md:h-[600px] lg:h-[75vh] relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/5">
            <Image
              // You can replace this with any Pascom industrial/chemical image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
              alt="Offshore Tank Logistics"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Subtle dark gradient overlay to ensure it feels grounded */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section>
        <TopIndustries />
      </section>

      {/* CHEMICAL PRODUCTS GRID - HORIZONTAL SCROLL */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-[#f5f5f7] font-sans antialiased overflow-hidden text-white flex flex-col"
        style={{ backgroundColor: "var(--color-primary-red)" }}
      >
        {/* HEADER */}
        <div className="w-full px-6 md:px-16 pt-36 md:pt-32 shrink-0">
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4"
            style={{ color: "var(--color-white)" }}
          >
            Comprehensive Product{" "}
            <span style={{ color: "var(--color-white)" }}>Catalog</span>
          </h2>
          <p className="text-gray-100 text-sm md:text-base font-medium max-w-2xl">
            Scroll to explore our extensive range of chemical products tailored
            to your industry needs.
          </p>
        </div>

        {/* HORIZONTAL SCROLL TRACK */}
        <div className="flex-1 w-full flex items-center relative z-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 w-max flex-nowrap items-center h-full"
          >
            {/* Product Card */}
            {productsList.map((product, index) => (
              <Link
                key={`product-${index}`}
                href={`/products-services/product/${product.slug || ""}`}
                className="group relative flex flex-col w-60 h-115 md:w-80 lg:w-96 shrink-0 overflow-hidden bg-white hover:shadow-xl transition-all duration-500 cursor-pointer rounded-3xl md:rounded-2xl"
                style={{
                  transform:
                    index % 2 === 0 ? "translateY(-12px)" : "translateY(12px)",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-black">
                  <div className="product-card-img w-full h-full relative">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpi-SdHUtLAa1jPLek_N2YeStJ_U0Mu2d8JJboInVPBg&s=10"
                      alt={product.name || "Product"}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>


                  {/* Gradient Overlay on Image */}
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.3) 100%)`,
                    }}
                  ></div>
                </div>

                {/* Title & Description - Below Image */}
                <div className="flex flex-col flex-1 p-4 md:p-5 lg:p-6 bg-white">
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight mb-2 tracking-tight"
                    style={{ color: "var(--color-primary-red)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium line-clamp-2 md:line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="absolute mt-10 -bottom-20 left-6 right-6 md:left-16 md:right-16 flex items-center gap-4 z-50">
          <div className="flex-1 h-0.5 bg-red-700/30 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute top-0 left-0 h-full bg-red-600 w-full origin-left scale-x-0 shadow-lg"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
