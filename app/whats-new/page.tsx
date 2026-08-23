'use client';

import React from 'react';
import Image from 'next/image';
import LiquidButton from '@/components/LiquidButton';

// Pascom Blog Data
const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    category: "Logistics",
    date: "8.28.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    desc: "At Pascom, we understand that efficient chemical logistical services are pivotal to maintaining the smooth operations of your supply chain without delays.",
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom as Their Chemical Supplier",
    category: "Oil & Gas",
    date: "6.23.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    desc: "In the dynamic world of oil and gas exploration and production, the choice of chemical partner is critical to ensuring safety and performance.",
  },
  {
    id: "3",
    title: "The Rapid Growth of the Mining Industry in WA and Its Benefits",
    category: "Mining",
    date: "6.15.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    desc: "Western Australia has long been a powerhouse in the mining sector, with its vast mineral resources driving immense demand for specialized chemicals.",
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals Used in the Water Treatment Industry",
    category: "Water Treatment",
    date: "6.10.2024",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    desc: "Ensuring safe and clean water is essential for public health and environmental sustainability. Behind the scenes, these chemicals play a crucial role.",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    category: "Agriculture",
    date: "5.02.2024",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    desc: "When it comes to ensuring robust agricultural production, choosing the right chemical suppliers is crucial for crop yields and soil health.",
  },
  {
    id: "6",
    title: "Best Place for all your chemical needs in Perth Australia",
    category: "News",
    date: "6.23.2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop",
    desc: "Looking for a reliable source for your chemical requirements in Perth, Australia? Look no further than Pascom's advanced facilities.",
  },
];

export default function Newsroom() {
  // Split the data: first post becomes the "Featured", the rest go into the list
  const featuredPost = blogPosts[0];
  const listPosts = blogPosts.slice(1);

  return (
    // Outer Background - Deep Industrial Green (Kept exactly from your reference image)
    <section className="w-full min-h-screen bg-[#db0000] font-sans antialiased text-white py-20 md:py-32">
      <div className="max-w-350 mx-auto px-6 md:px-12">
        
        {/* =========================================
            PAGE HEADER (Newsroom Title & Desc)
            ========================================= */}
        <div className="mb-20 md:mb-14 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            Newsroom
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
            Stay updated with the latest insights, industry trends, and
            innovations from Pascom. Discover how we&apos;re shaping the
            chemical industry.
          </p>
        </div>

        {/* =========================================
            FEATURED ARTICLE (Image 1 Layout)
            ========================================= */}
        <div className="mb-32">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            
            {/* Left: Text Content */}
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                {featuredPost.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                {featuredPost.desc}
              </p>
            </div>

            {/* Right: CTA Button */}
            <LiquidButton
              onClick={() => {}}
              liquidColor="rgba(255, 255, 255, 0.75)"
              style={{
                borderColor: "rgba(255, 255, 255, 0.35)",
                color: "var(--color-white)",
              }}
              className="shrink-0 text-sm font-bold tracking-wide gap-3"
            >
              <span style={{ color: "var(--color-dark-red)"}}>Read Article</span>
              <i className="fa-solid fa-arrow-right text-[11px]"></i>
            </LiquidButton>
          </div>

          {/* Featured Image */}
          <div className="w-full h-100 md:h-[60vh] lg:h-[75vh] relative rounded-4xl overflow-hidden group border border-white/10">
            <Image 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Subtle overlay so it blends into the dark background better */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
        </div>

        {/* =========================================
            LATEST POSTS LIST (Image 2 Layout)
            ========================================= */}
        <div className="flex flex-col gap-24">
          {listPosts.map((post) => (
            <div key={post.id} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group cursor-pointer">
              
              {/* Left: Card Image */}
              <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[480px] rounded-[2rem] overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Right: Data/Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-10 group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>

                <div className="flex flex-col w-full max-w-xl">
                  {/* Meta Row: Date */}
                  <div className="py-5 border-b border-white/20 group-hover:border-white/50 transition-colors">
                    <span className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">
                      Date
                    </span>
                    <span className="block text-lg font-medium text-white">
                      {post.date}
                    </span>
                  </div>

                  {/* Meta Row: Category */}
                  <div className="py-5 border-b border-white/20 group-hover:border-white/50 transition-colors">
                    <span className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">
                      Category
                    </span>
                    <span className="block text-lg font-medium text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Meta Row: Excerpt */}
                  <div className="py-5 border-b border-white/20 group-hover:border-white/50 transition-colors">
                    <span className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">
                      Summary
                    </span>
                    <span className="block text-sm font-medium text-white/90 leading-relaxed line-clamp-2">
                      {post.desc}
                    </span>
                  </div>
                </div>

                {/* Mobile-only CTA */}
                <div className="mt-8 lg:hidden flex items-center gap-2 text-red-500 font-bold text-sm">
                  Read Article <i className="fa-solid fa-arrow-right"></i>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}