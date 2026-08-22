"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const coreValues = [
  {
    id: 1,
    category: "OUR OFFERING",
    title: "Product Range",
    desc: "Pascom offers a broad range as chemical manufacturers Australia to meet diverse industrial needs. From raw materials to custom formulations, we provide tailored solutions for various applications.",
    date: "AUG 3, 2026",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg",
    link: "#",
  },
  {
    id: 2,
    category: "TRUSTED APPROACH",
    title: "Reliable Partner",
    desc: "We pride ourselves on being a reliable partner. As Chemical Suppliers Australia, our unwavering commitment to integrity, transparency, and timely delivery ensures lasting relationships with our clients.",
    date: "AUG 3, 2026",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/10/DSC1625-600x900.jpeg",
    link: "#",
  },
  {
    id: 3,
    category: "STANDARD OF EXCELLENCE",
    title: "Quality Assurance",
    desc: "Quality assurance is central to our operations as a trusted chemical supplier Australia. We follow strict control measures to ensure products meet safety & performance. Our commitment guarantees each product is reliable and performs optimally.",
    date: "JUL 10, 2026",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/10/DSC16025-600x900.jpeg",
    link: "#",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".values-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      // Card stagger animation
      gsap.fromTo(
        ".values-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full font-sans antialiased overflow-hidden band-spacing"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20 items-start">
        {/* Left Column: Heading and CTA (Matches ABTC left sidebar) */}
        <div className="lg:col-span-1 flex flex-col justify-between h-full pt-2">
          <div className="values-heading">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase"
              style={{ color: "var(--color-white)" }}
            >
              We Value
              <br />
              Your
              <br />
              <span style={{ color: "var(--color-dark-red)" }}>
                Partnership
              </span>
            </h2>

            <p className="mt-6 text-sm text-white leading-relaxed max-w-xs">
              As Australia&apos;s trusted chemical partner, we combine decades
              of expertise with an unwavering commitment to integrity and
              quality.
            </p>

            <Link
              href="#"
              className="inline-flex items-center border-4 border-gray-100 gap-3 mt-8 text-white text-xs font-semibold tracking-wider uppercase px-5 py-3.5 transition-colors group"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.15)")
              }
            >
              Learn More About Us
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Card Grid (Matches ABTC card layout) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((item) => (
            <article
              key={item.id}
              className="values-card rounded-4xl bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div>
                {/* Image Container with Red Accent Square */}
                <div className="relative w-full h-56 rounded-t-4xl bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Top-left Red Square Accent */}
                  <div
                    className="absolute top-3 left-3 w-2.5 h-2.5 z-10"
                    style={{ backgroundColor: "var(--color-white)" }}
                  />

                  {/* Bottom-right Subtle Red Gradient Block */}
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block mb-3">
                    {item.category}
                  </span>

                  <h3
                    className="text-xl font-bold text-slate-800 leading-snug mb-3 transition-colors group-hover:text-slate-900"
                    style={
                      {
                        "--group-hover-color": "var(--color-primary-red)",
                      } as any
                    }
                  >
                    <Link href={item.link} style={{ color: "inherit" }}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Footer: Date and Action Arrow */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <time
                  className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase"
                  style={{ color: "var(--color-primary-red)" }}
                >
                  Learn More
                </time>
                <Link
                  href={item.link}
                  aria-label={`Read more about ${item.title}`}
                  className="text-slate-700 transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary-red)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#78716c")
                  }
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
