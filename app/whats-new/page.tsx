'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

// Pascom Blog Data
const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    category: "Logistics",
    date: "8.28.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom as Their Chemical Supplier",
    category: "Oil & Gas",
    date: "6.23.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
  },
  {
    id: "3",
    title: "The Rapid Growth of the Mining Industry in WA and Its Benefits",
    category: "Mining",
    date: "6.15.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals Used in the Water Treatment Industry",
    category: "Water Treatment",
    date: "6.10.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    category: "Agriculture",
    date: "5.02.2024",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Newsroom() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Dynamically calculate category counts for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter posts based on active category
  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <section className="w-full min-h-screen bg-red-950 py-20 md:py-32 px-6 md:px-12 font-sans antialiased">
      <div className="max-w-350 mx-auto">

        {/* Hero Header */}
        <div className="mb-20 md:mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Newsroom
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl font-medium">
            Stay updated with the latest insights, industry trends, and innovations from Pascom.
            Discover how we&apos;re shaping the chemical industry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* =========================================
              LEFT SIDEBAR (Filters)
              ========================================= */}
          <aside className="w-full lg:w-48 shrink-0 lg:sticky lg:top-24">
            <h3 className="text-red-300 font-medium text-[13px] mb-4">
              Filter by category
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-xs font-medium transition-colors border ${
                    activeCategory === category
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-red-100 text-red-700 border-transparent hover:border-red-300'
                  }`}
                >
                  {category} <sup className="ml-0.5 text-[9px] font-bold">{count}</sup>
                </button>
              ))}
            </div>

            {/* Reset Filters Link */}
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-[13px] text-red-300 underline underline-offset-4 hover:text-red-200 transition-colors ${
                activeCategory ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
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
                  className="group bg-red-50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md cursor-pointer border border-transparent hover:border-red-200"
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
                      <span className="bg-red-100 text-red-700 text-[11px] px-2 py-0.5 rounded-sm font-medium">
                        {post.category}
                      </span>
                      <span className="bg-red-100 text-red-700 text-[11px] px-2 py-0.5 rounded-sm font-medium">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-red-900 text-lg md:text-[19px] font-medium leading-snug tracking-tight group-hover:underline decoration-1 underline-offset-4">
                      {post.title}
                    </h3>

                  </div>
                </article>
              ))}
            </div>

            {/* Empty State Fallback */}
            {filteredPosts.length === 0 && (
              <div className="w-full py-20 text-center text-red-300 font-medium">
                No articles found in this category.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}