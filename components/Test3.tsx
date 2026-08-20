'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Your provided Blog Posts array
const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    excerpt: "At Pascom, we understand that efficient chemical logistical operations are essential to keeping your supply chain moving without delays.",
    category: "Logistics",
    image: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    readTime: "4 min read",
    link: "/Optimizing_Chemical_Logistical_Services_at_Pascom",
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom",
    excerpt: "In the dynamic world of oil and gas exploration and refining, having a dependable partner is critical.",
    category: "Oil & Gas",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    readTime: "5 min read",
    link: "/Why_Giants_in_the_Oil_and_Gas_Industry_Choose_Pascom_as_Their_Chemical_Supplier",
  },
  {
    id: "3",
    title: "Rapid Growth of the Mining Industry in WA",
    excerpt: "Western Australia has long been a powerhouse in the mining sector, driving immense demand for specialized chemicals.",
    category: "Mining",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    readTime: "6 min read",
    link: "/The_Rapid_Growth_of_the_Mining_Industry",
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals in Water Treatment",
    excerpt: "Ensuring safe and clean water is essential for public health and industrial operations worldwide. Here are the leading solutions.",
    category: "Water Treatment",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    readTime: "7 min read",
    link: "/Exploring_the_Top_10_Chemicals_Used_in_the_Water_Treatment_Industry",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    excerpt: "When it comes to ensuring robust agricultural production, reliable formulations are necessary for high yield.",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    link: "/Top_Chemical_Suppliers_for_the_Agriculture_Industry",
  },
  {
    id: "6",
    title: "Best Place for all your chemical needs in Perth Australia",
    excerpt: "Looking for a reliable source for your chemical requirements in Perth? Look no further than Pascom, your trusted partner.",
    category: "News",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop",
    readTime: "3 min read",
    link: "/best-place-perth",
  },
];

// Map the blog posts to their alternating zig-zag layout coordinates
const mappedPosts = blogPosts.map((post, index) => {
  const isLeft = index % 2 === 0;
  // We divide the Y-axis into 6 equal sections along the 180-unit SVG ViewBox
  const yValues = [15, 45, 75, 105, 135, 165]; 
  
  return {
    ...post,
    x: isLeft ? '40%' : '60%',
    y: `${(yValues[index] / 180) * 100}%`,
    align: isLeft ? 'left' : 'right',
  };
});

export default function ChemicalBlogTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Draw the Chemical Bonds dynamically on scroll
      const bonds = gsap.utils.toArray('.chem-bond') as SVGPathElement[];
      bonds.forEach((bond) => {
        const length = bond.getTotalLength();
        gsap.set(bond, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(bond, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1, 
          }
        });
      });

      // 2. Pop in the Atoms (Nodes)
      const nodes = gsap.utils.toArray('.chem-atom');
      nodes.forEach((node: any) => {
        gsap.fromTo(node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: node,
              start: 'top 75%',
            }
          }
        );
      });

      // 3. Slide in the Blog Edge Cards
      const cards = gsap.utils.toArray('.edge-card');
      cards.forEach((card: any) => {
        const isLeft = card.classList.contains('card-left');
        gsap.fromTo(card,
          { x: isLeft ? -50 : 50, opacity: 0, y: 20 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full md:h-[190rem] bg-[#F8FAFC]  font-sans antialiased overflow-hidden">
      
      {/* Header */}
      <div className="pt-24 pb-12 text-center max-w-3xl mx-auto px-6 relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Top Industries We Serve
        </h2>
        <p className="mt-6 text-lg text-gray-600 font-medium">
          Follow our latest updates, industry breakthroughs, and logistical achievements across Australia.
        </p>
      </div>

      {/* =========================================
          DESKTOP: CHEMICAL EDGE LAYOUT
          ========================================= */}
      <div ref={containerRef} className="relative w-full max-w-[1400px] mx-auto h-[2200px] px-6 hidden lg:block mb-32">
        
        {/* --- SVG CHEMICAL MOLECULE (Background) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg viewBox="0 0 100 180" className="w-full h-full" preserveAspectRatio="none">
            <g strokeLinecap="round" strokeLinejoin="round">
              
              {/* --- MAIN POLYMER BACKBONE (Extended for 6 items) --- */}
              <path className="chem-bond" 
                d="M 50 0 L 40 15 L 50 30 L 60 45 L 50 60 L 40 75 L 50 90 L 60 105 L 50 120 L 40 135 L 50 150 L 60 165 L 50 180" 
                stroke="#DC2626" strokeWidth="0.3" fill="none" 
              />
              
              {/* Chemical Double Bonds (Offset parallel lines) */}
              <path className="chem-bond" d="M 42 16.5 L 50 28.5" stroke="#DC2626" strokeWidth="0.1" fill="none" />
              <path className="chem-bond" d="M 58 46.5 L 50 58.5" stroke="#DC2626" strokeWidth="0.1" fill="none" />
              <path className="chem-bond" d="M 42 76.5 L 50 88.5" stroke="#DC2626" strokeWidth="0.1" fill="none" />
              <path className="chem-bond" d="M 58 106.5 L 50 118.5" stroke="#DC2626" strokeWidth="0.1" fill="none" />
              <path className="chem-bond" d="M 42 136.5 L 50 148.5" stroke="#DC2626" strokeWidth="0.1" fill="none" />

              {/* --- SECONDARY BRANCHING GROUPS (Grey Atoms) --- */}
              <path className="chem-bond" d="M 50 30 L 56 30" stroke="#94A3B8" strokeWidth="0.2" fill="none" />
              <circle className="chem-atom" cx="56" cy="30" r="0.8" fill="#94A3B8" />

              <path className="chem-bond" d="M 50 60 L 44 60" stroke="#94A3B8" strokeWidth="0.2" fill="none" />
              <circle className="chem-atom" cx="44" cy="60" r="0.8" fill="#94A3B8" />

              <path className="chem-bond" d="M 50 90 L 56 90" stroke="#94A3B8" strokeWidth="0.2" fill="none" />
              <circle className="chem-atom" cx="56" cy="90" r="0.8" fill="#94A3B8" />

              <path className="chem-bond" d="M 50 120 L 44 120" stroke="#94A3B8" strokeWidth="0.2" fill="none" />
              <circle className="chem-atom" cx="44" cy="120" r="0.8" fill="#94A3B8" />

              <path className="chem-bond" d="M 50 150 L 56 150" stroke="#94A3B8" strokeWidth="0.2" fill="none" />
              <circle className="chem-atom" cx="56" cy="150" r="0.8" fill="#94A3B8" />

              {/* --- HORIZONTAL TIE-LINES CONNECTING TO BLOG CARDS --- */}
              <path className="chem-bond" d="M 40 15 L 35 15" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />
              <path className="chem-bond" d="M 60 45 L 65 45" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />
              <path className="chem-bond" d="M 40 75 L 35 75" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />
              <path className="chem-bond" d="M 60 105 L 65 105" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />
              <path className="chem-bond" d="M 40 135 L 35 135" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />
              <path className="chem-bond" d="M 60 165 L 65 165" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="0.5, 0.5" fill="none" />

            </g>
          </svg>
        </div>

        {/* --- HTML MAIN ATOMS & EDGE BLOG CARDS --- */}
        {mappedPosts.map((post) => (
          <div key={post.id} className="absolute w-full left-0" style={{ top: post.y }}>
            
            {/* The Main Atom (Node) placed exactly on the zigzag vertex */}
            <div 
              className="chem-atom absolute w-8 h-8 bg-white border-[6px] border-[#DC2626] rounded-full shadow-lg z-20"
              style={{ left: post.x, transform: 'translate(-50%, -50%)' }}
            >
               <div className="absolute -inset-4 bg-red-500/20 rounded-full animate-pulse pointer-events-none"></div>
            </div>

            {/* The Blog Card - Pushed to the extreme left or right edges! */}
            <Link 
              href={"/blog"+post.link}
              target='_blank'
              className={`edge-card ${post.align === 'left' ? 'card-left left-0' : 'card-right right-0'} absolute top-0 -translate-y-1/2 w-[35%] bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] hover:border-red-200 transition-all duration-300 z-30 group flex flex-col`}
            >
              {/* Card Image */}
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Tags */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-50 text-[#DC2626] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs font-semibold">
                  <i className="fa-regular fa-clock mr-1"></i> {post.readTime}
                </span>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-gray-900 font-bold text-xl md:text-2xl tracking-tight leading-snug mb-3 group-hover:text-[#DC2626] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#DC2626]">
                Read Article <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>

          </div>
        ))}
      </div>

      {/* =========================================
          MOBILE FALLBACK (Standard Stack)
          ========================================= */}
      {/* Structural SVG plotting breaks on mobile screens, so we drop to a clean vertical stack. */}
      <div className="w-full px-6 flex flex-col gap-8 lg:hidden relative z-10 pb-20">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog${post.link}`} target='_blank' className="bg-white border border-gray-100 shadow-lg p-5 rounded-3xl group">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-gray-100">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-50 text-[#DC2626] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                {post.category}
              </span>
              <span className="text-gray-400 text-xs font-semibold">
                {post.readTime}
              </span>
            </div>
            <h3 className="text-gray-900 font-bold text-xl leading-snug mb-2 group-hover:text-[#DC2626] transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

    </section>
  );
}