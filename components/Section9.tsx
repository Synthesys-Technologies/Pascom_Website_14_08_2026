"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidButton from "./LiquidButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredProducts = [
  {
    id: 1,
    category: "Featured Solutions",
    title: "Acetic acid 90%",
    image: "/products/A-90.png",
    meta: [
      { label: "Primary Industry", value: "Chemical Manufacturing" },
      { label: "Grade Standard", value: "Industrial Grade" },
    ],
  },
  {
    id: 2,
    category: "Industrial Supply",
    title: "Alcohol gel hand sanitizer",
    image: "/products/hand-gel.jpg",
    meta: [
      { label: "Primary Industry", value: "Healthcare & Hygiene" },
      { label: "Product Type", value: "Alcohol-Based Hand Sanitizer" },
    ],
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;

      const cards = Array.from(
        cardsRef.current.querySelectorAll<HTMLElement>(".featured-card"),
      );

      // =========================================
      // CARD ENTRANCE REVEAL
      // =========================================
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      // =========================================
      // GSAP MATCHMEDIA (Desktop Only Hover)
      // =========================================
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // 1. Set initial widths securely
        gsap.set(cards[0], { width: "60%" });
        gsap.set(cards[1], { width: "40%" });

        // 2. Attach hover logic
        cards.forEach((card, index) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(cards[0], {
              width: index === 0 ? "60%" : "40%",
              duration: 0.8,
              ease: "expo.out",
              overwrite: "auto",
            });

            gsap.to(cards[1], {
              width: index === 1 ? "60%" : "40%",
              duration: 0.8,
              ease: "expo.out",
              overwrite: "auto",
            });
          });

          // Reset to default when leaving the container
          card.addEventListener("mouseleave", () => {
            gsap.to(cards[0], {
              width: "60%",
              duration: 0.8,
              ease: "expo.out",
              overwrite: "auto",
            });

            gsap.to(cards[1], {
              width: "40%",
              duration: 0.8,
              ease: "expo.out",
              overwrite: "auto",
            });
          });
        });
      });

      // Mobile cleanup state
      mm.add("(max-width: 1023px)", () => {
        gsap.set(cards, { width: "100%" });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f5f7] font-sans antialiased overflow-hidden band-spacing"
    >
      <div className="content-max">
        {/* =========================================
            SECTION HEADER
            ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
            style={{ color: "var(--color-primary-red)" }}
          >
            Explore Our{" "}
            <span style={{ color: "var(--color-dark-red)" }}>Products</span>
          </h2>

          <LiquidButton
            onClick={() => {}}
            style={{
              borderColor: "var(--color-dark-red)",
              color: "var(--color-dark-red)",
              backgroundColor: "var(--color-dark-red)",
            }}
            className="text-xs md:text-sm font-bold gap-3"
          >
            <span style={{ color: "var(--color-white)" }}>
              View All Products
            </span>
            <i
              style={{ color: "var(--color-primary-red)" }}
              className="fa-solid fa-arrow-right text-[10px]"
            />
          </LiquidButton>
        </div>

        {/* =========================================
            PRODUCT CARDS
            ========================================= */}
        <div
          ref={cardsRef}
          className="flex flex-col lg:flex-row gap-6 items-stretch"
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="
                featured-card
                group
                bg-white
                rounded-[2rem]
                p-4
                flex
                flex-col
                shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                transition-shadow
                duration-500
                cursor-pointer
                w-full 
                will-change-[width] 
              "
            >
              {/* =========================================
                  IMAGE
                  Fixed Height applied here so they don't bounce vertically
                  ========================================= */}
              <div
                className="
                  relative
                  w-full
                  h-[250px] md:h-[320px] /* <-- Changed to fixed height here */
                  rounded-[1.5rem]
                  overflow-hidden
                  bg-gray-100
                  shrink-0
                "
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* =========================================
                  CONTENT
                  ========================================= */}
              <div
                className="
                  flex
                  flex-col
                  xl:flex-row
                  justify-between
                  items-start
                  gap-6
                  xl:gap-8
                  pt-8
                  pb-6
                  px-2
                  md:px-4
                "
              >
                {/* LEFT CONTENT */}
                <div className="flex-1 min-w-0">
                  <span className="block text-gray-900 font-bold text-[10px] tracking-wide mb-2 uppercase">
                    {product.category}
                  </span>

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-medium
                      text-gray-900
                      tracking-tight
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    {product.title}
                  </h3>
                </div>

                {/* META */}
                <div className="flex flex-col sm:flex-row gap-6 md:gap-12 shrink-0">
                  {product.meta.map((metaItem, i) => (
                    <div key={i} className="flex flex-col whitespace-nowrap">
                      <span className="text-gray-900 font-bold text-[10px] mb-1 uppercase tracking-wider">
                        {metaItem.label}
                      </span>
                      <span className="text-gray-600 text-xs font-medium">
                        {metaItem.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
