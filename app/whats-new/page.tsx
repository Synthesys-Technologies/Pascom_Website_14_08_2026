"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Pascom Blog Data
const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    category: "Logistics",
    date: "8.28.2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    desc: "At Pascom, we understand that efficient chemical logistical services are pivotal to maintaining the smooth…",
  },
  {
    id: "2",
    title:
      "Why Giants in the Oil and Gas Industry Choose Pascom as Their Chemical Supplier",
    category: "Oil & Gas",
    date: "6.23.2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    desc: "In the dynamic world of oil and gas exploration and production, the choice of chemical…",
  },
  {
    id: "3",
    title: "The Rapid Growth of the Mining Industry in WA and Its Benefits",
    category: "Mining",
    date: "6.15.2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    desc: "Western Australia has long been a powerhouse in the mining sector, with its vast mineral…",
  },
  {
    id: "4",
    title:
      "Exploring the Top 10 Chemicals Used in the Water Treatment Industry",
    category: "Water Treatment",
    date: "6.10.2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    desc: "Ensuring safe and clean water is essential for public health and environmental sustainability. Behind the…",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    category: "Agriculture",
    date: "5.02.2024",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    desc: "When it comes to ensuring robust agricultural production, choosing the right chemical suppliers is crucial.…",
  },
  {
    id: "6",
    title: "Best Place for all your chemical needs in Perth Australia",
    category: "News",
    date: "6.23.2024",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    desc: "Looking for a reliable source for your chemical requirements in Perth, Australia? Look no further…",
  },
];

export default function Newsroom() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically calculate category counts for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter posts based on active category
  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts;

  // Add smooth reveal animation to blog cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth staggered fade-in with upward movement for blog cards
      gsap.fromTo(
        ".blog-card",
        {
          y: 40,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "cubic.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-[#db0000] py-20 md:py-32 px-6 md:px-12 font-sans antialiased"
    >
      <div className="max-w-350 mx-auto">
        {/* Hero Header */}
        <div className="mb-20 md:mb-28">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ color: "var(--color-white)" }}
          >
            Newsroom
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl font-medium text-gray-100">
            Stay updated with the latest insights, industry trends, and
            innovations from Pascom. Discover how we&apos;re shaping the
            chemical industry.
          </p>
          <div className="mt-5 flex justify-end">
            {/* Outlined Pill Button */}
            <a
              href="#"
              className="group w-max inline-flex items-center gap-3 border border-white rounded-full px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#DC2626] transition-all duration-300"
            >
              Discover More
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* =========================================
              LEFT SIDEBAR (Filters)
              ========================================= */}
          <aside className="w-full lg:w-48 shrink-0 lg:sticky lg:top-36">
            <h3
              className="font-medium text-[20px] mb-4"
              style={{ color: "var(--color-white)" }}
            >
              Filter by category
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-xs font-medium transition-colors border rounded ${
                    activeCategory === category
                      ? "text-white border-transparent"
                      : "border-transparent hover:opacity-80"
                  }`}
                  style={{
                    backgroundColor:
                      activeCategory === category
                        ? "var(--color-white)"
                        : "var(--primary-100)",
                    color:
                      activeCategory === category
                        ? "var(--color-primary-red)"
                        : "var(--color-primary-red)",
                  }}
                >
                  {category}{" "}
                  <sup className="ml-0.5 text-[9px] font-bold">{count}</sup>
                </button>
              ))}
            </div>

            {/* Reset Filters Link */}
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-[13px] underline underline-offset-4 transition-colors ${
                activeCategory ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{ color: "var(--color-white)" }}
            >
              Reset filters
            </button>
          </aside>

          {/* RIGHT CONTENT (3-Column Grid) */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="blog-card group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer border"
                  style={{
                    backgroundColor: "var(--primary-50)",
                    borderColor: "var(--primary-100)",
                  }}
                >
                  {/* Image Container (Edge-to-edge at the top) */}
                  <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    {/* Meta Tags (Category & Date) */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-sm font-medium"
                        style={{
                          backgroundColor: "var(--primary-100)",
                          color: "var(--color-primary-red)",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-sm font-medium"
                        style={{
                          backgroundColor: "var(--primary-100)",
                          color: "var(--color-primary-red)",
                        }}
                      >
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg md:text-[19px] font-medium leading-snug tracking-tight group-hover:underline decoration-1 underline-offset-4 md:h-16"
                      style={{ color: "var(--color-primary-red)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="mt-5"
                      style={{ color: "var(--color-dark-red)" }}
                    >
                      {post.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State Fallback */}
            {filteredPosts.length === 0 && (
              <div
                className="w-full py-20 text-center font-medium"
                style={{ color: "var(--color-primary-red)" }}
              >
                No articles found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
