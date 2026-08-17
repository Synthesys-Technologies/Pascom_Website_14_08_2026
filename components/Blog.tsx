'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    excerpt: "At Pascom, we understand that efficient chemical logistical operations are essential to keeping your supply chain moving without delays.",
    category: "Logistics",
    image: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    readTime: "4 min read",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom",
    excerpt: "In the dynamic world of oil and gas exploration and refining, having a dependable partner is critical.",
    category: "Oil & Gas",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    readTime: "5 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "3",
    title: "Rapid Growth of the Mining Industry in WA",
    excerpt: "Western Australia has long been a powerhouse in the mining sector, driving immense demand for specialized chemicals.",
    category: "Mining",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    readTime: "6 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals in Water Treatment",
    excerpt: "Ensuring safe and clean water is essential for public health and industrial operations worldwide. Here are the leading solutions.",
    category: "Water Treatment",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    readTime: "7 min read",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    excerpt: "When it comes to ensuring robust agricultural production, reliable formulations are necessary for high yield.",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

export default function LatestUpdates() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Dynamically calculate category counts for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter posts. If filtered, we strip the custom grid spans so it doesn't look broken.
  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <section className="w-full min-h-screen bg-[#f5f5f7] font-sans antialiased band-spacing">
      <div className="content-max">
        
        {/* Huge Corporate Header */}
        <h1 className="text-5xl font-serif md:text-6xl text-red-600 font-medium tracking-tight mb-16">
          Latest Updates
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* =========================================
              LEFT SIDEBAR (Filters)
              ========================================= */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24">
            <h3 className="text-red-600 font-medium text-sm mb-4">
              Filter by category
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  {category} <sup className="ml-0.5">{count}</sup>
                </button>
              ))}
            </div>

            {/* Reset Filters Link */}
            <button 
              onClick={() => setActiveCategory(null)}
              className={`text-sm text-red-600 underline underline-offset-4 hover:text-red-700 transition-opacity ${
                activeCategory ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Reset filters
            </button>
          </aside>

          {/* =========================================
              RIGHT CONTENT (Staircase / Bento Grid)
              ========================================= */}
          <div className="flex-1 w-full">
            <Link  href="/blog" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  // Apply custom colSpan/rowSpan ONLY if no filter is active to maintain the perfect "Staircase" puzzle
                  className={`group bg-red-50 rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer min-h-96 ${
                    !activeCategory ? (post.colSpan + " " + post.rowSpan) : "col-span-1"
                  }`}
                  
                >
                  {/* Image Container (Padded inside the card like the reference) */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5 bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta Tags (Category & Read Time) */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-red-100 text-red-600 text-[11px] font-semibold px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="bg-red-100 text-red-600 text-[11px] font-semibold px-2.5 py-1 rounded">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="flex flex-col flex-1 min-h-0">
                    <h3 className="text-red-600 text-lg md:text-xl font-semibold leading-snug tracking-tight mb-2 group-hover:underline decoration-2 underline-offset-4 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* The excerpt is included for all cards */}
                    <p className="text-red-500/70 text-sm leading-relaxed mt-auto line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}