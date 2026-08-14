'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const coreValues = [
  {
    id: 1,
    title: 'Product Range',
    desc: 'Broad spectrum of chemical solutions tailored for diverse industrial applications and unique operational challenges.',
    icon: 'fa-boxes-stacked',
    image: 'https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg',
  },
  {
    id: 2,
    title: 'Reliable Partner',
    desc: 'Unwavering commitment to integrity, transparency, and timely delivery that builds lasting relationships.',
    icon: 'fa-handshake',
    image: 'https://pascom.com.au/wp-content/uploads/2024/10/DSC1625-600x900.jpeg',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    desc: 'Rigorous control measures and safety protocols ensuring every product exceeds performance standards.',
    icon: 'fa-check-circle',
    image: 'https://pascom.com.au/wp-content/uploads/2024/10/DSC16025-600x900.jpeg',
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo('.values-heading',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          }
        }
      );

      // Card stagger animation
      gsap.fromTo('.values-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          }
        }
      );

      // Icon animation on hover
      document.querySelectorAll('.values-card').forEach((card) => {
        const icon = card.querySelector('.card-icon');
        const tl = gsap.timeline({ paused: true });

        tl.to(icon, {
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-red-950 font-sans antialiased overflow-hidden band-spacing"
    >
      <div className="content-max">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="type-xs text-red-300/70 block mb-4">Why Choose Us</span>
          <h2 className="values-heading type-display text-white leading-tight mb-6">
            We Value Your <span className="text-red-500">Partnership</span>
          </h2>
          <p className="type-base text-red-200/80 max-w-xl mx-auto">
            As Australia&apos;s trusted chemical partner, we combine decades of expertise with an unwavering commitment to integrity, transparency, and your operational success.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((item) => (
            <div
              key={item.id}
              className="values-card group"
            >
              {/* Card Container */}
              <div className="relative h-96 md:h-[420px] overflow-hidden card-base bg-black">

                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">

                  {/* Icon Badge */}
                  <div className="card-icon mb-6 w-14 h-14 rounded-2xl bg-red-600/20 backdrop-blur-md border border-red-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-400">
                    <i className={`fa-solid ${item.icon} text-2xl text-red-400 group-hover:text-white transition-colors`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="type-lg text-white mb-3 leading-tight group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="type-sm text-white/70 mb-6 line-clamp-3 group-hover:text-white/90 transition-colors">
                    {item.desc}
                  </p>

                  {/* CTA Link */}
                  <a
                    href="#"
                    aria-label={`Learn more about ${item.title}`}
                    className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm hover:text-red-300 transition-colors group/link w-max"
                  >
                    Explore <i className="fa-solid fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <a
            href="#"
            aria-label="View all core values and learn more about us"
            className="btn-base bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
          >
            Learn More About Us
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}