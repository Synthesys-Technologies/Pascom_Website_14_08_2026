'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Dummy Data mapped to Pascom's Chemical Context
const featuredProducts = [
  {
    id: 1,
    category: 'Featured Solutions',
    title: 'Acetic acid 90%',
    image: '	https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg',
    meta: [
      { label: 'Primary Industry', value: 'Oil & Gas, Mining' },
      { label: 'Format / Volume', value: 'Liquid / Bulk IBCs' }
    ]
  },
  {
    id: 2,
    category: 'Industrial Supply',
    title: 'Alcohol gel hand sanitizer',
    image: 'https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg',
    meta: [
      { label: 'Primary Industry', value: 'Water Treatment' },
      { label: 'Grade Standard', value: 'Technical & Purified' }
    ]
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Card Reveal on Scroll
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.featured-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );

        // 2. Hover animation - subtle smooth width and elevation
        cards.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            // Animate hovered card - subtle width expand and lift
            gsap.to(card, {
              flexGrow: 1.12,
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              duration: 0.6,
              ease: 'power2.out',
            });

            // Animate other cards - subtle shrink and fade
            cards.forEach((otherCard) => {
              if (otherCard !== card) {
                gsap.to(otherCard, {
                  flexGrow: 0.94,
                  opacity: 0.87,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  duration: 0.6,
                  ease: 'power2.out',
                });
              }
            });
          });

          card.addEventListener('mouseleave', () => {
            // Reset all cards smoothly to normal state
            cards.forEach((resetCard) => {
              gsap.to(resetCard, {
                flexGrow: 1,
                y: 0,
                opacity: 1,
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                duration: 0.6,
                ease: 'power2.out',
              });
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f5f7] font-sans antialiased overflow-hidden band-spacing"
    >
      <div className="content-max">
        
        {/* =========================================
            SECTION HEADER ROW
            ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight"
          style={{color:"var(--color-primary-red)"}}
          >
            Explore Our <span style={{color:"var(--color-dark-red)"}}>Products</span>
          </h2>
          
          {/* Pill CTA Button */}
          <a href="#" className="group flex items-center justify-between gap-6 border-4 border-gray-900 rounded-full pl-6 pr-1.5 py-1.5 hover:bg-gray-900/5 transition-colors shrink-0">
            <span className="text-gray-900 text-xs md:text-sm font-bold tracking-wide">
              View All Products
            </span>
            {/* Kept Pascom's Red here for brand consistency, but can easily be swapped back to #00C16E (Green) if preferred */}
            <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center transition-transform group-hover:scale-105">
              <i className="fa-solid fa-arrow-right text-white text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
            </div>
          </a>
        </div>

        {/* =========================================
            GRID OF LARGE CARDS
            ========================================= */}
        <div
          ref={cardsRef}
          className="flex flex-col lg:flex-row gap-8 md:gap-2 items-stretch"
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="featured-card group flex-1 bg-white rounded-[2rem] p-4 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer"
            >
              
              {/* Large Image Area (Inset rounded corners) */}
              <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100">
                <Image 
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              {/* Bottom Text & Meta Block */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-8 pb-6 px-2 md:px-4">
                
                {/* Left: Category & Title */}
                <div className="flex-1">
                  <span className="block text-gray-900 font-bold text-[10px] tracking-wide mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {product.title}
                  </h3>
                </div>

                {/* Right: Two-Column Meta Table */}
                <div className="flex gap-8 md:gap-12 shrink-0">
                  {product.meta.map((metaItem, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-gray-900 font-bold text-[10px] mb-1">
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