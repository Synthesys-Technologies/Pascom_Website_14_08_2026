"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Text Fade-In
      gsap.fromTo(
        ".footer-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        },
      );

      // 2. Oversized Monogram Parallax Drift
      if (monogramRef.current && footerRef.current) {
        gsap.fromTo(
          monogramRef.current,
          { yPercent: -15 },
          {
            yPercent: 15, // Slowly moves down as the user scrolls to the bottom
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden font-sans antialiased text-white pt-24 pb-12 px-6 md:px-12 lg:px-20 min-h-[600px] flex flex-col"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      {/* =========================================
          OVERSIZED BRAND MONOGRAM (Background/Right)
          ========================================= */}
      <div
        ref={monogramRef}
        className="absolute right-[-15%] bottom-[-10%] md:right-[-5%] md:bottom-[-20%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] opacity-90 z-0 pointer-events-none"
        style={{ color: "var(--color-dark-red)" }}
      >
        {/* Custom Massive Pascom 'P' inside a geometric circle */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          className="w-full h-full"
        >
          <circle cx="50" cy="50" r="45" strokeWidth="10" />
          <path
            d="M35 80 V25 H60 C70 25 70 45 60 45 H35"
            strokeWidth="10"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =========================================
          MAIN CONTENT GRID
          ========================================= */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 flex-grow">
        {/* LEFT COLUMN: Brand, Tagline, Contact */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col">
           {/* Wordmark */}
          <div className="footer-reveal text-4xl md:text-5xl font-black tracking-widest uppercase mb-8">
            PASCOM
          </div>

            {/* Accent Tagline */}
          <h2 className="footer-reveal text-3xl md:text-[2.5rem] font-light text-[#DC2626] leading-tight mb-10 tracking-tight">
            Quality. Integrity. <br /> Efficiency.
          </h2>

          {/* Divider */}
          <div
            className="footer-reveal w-full md:w-3/4 h-px mb-10 bg-gray-100"
          ></div>

          {/* Contact Details */}
          <div className="footer-reveal flex flex-col gap-2 mb-10">
            <a
              href="tel:+61891234567"
              className="text-xl md:text-2xl font-medium transition-colors w-max footer-link"
            >
              +61 8 9123 4567
            </a>
            <a
              href="mailto:info@pascom.com.au"
              className="text-xl md:text-2xl font-medium transition-colors w-max footer-link"
            >
              info@pascom.com.au
            </a>
            <p className="text-gray-100 mt-4 max-w-xs text-sm leading-relaxed font-medium">
              14 Casino Street,
              <br />
              Welshpool, WA 6106
              <br />
              Australia
            </p>
          </div>
        </div>

        {/* MIDDLE COLUMN: Sitemap Nav */}
        <div className="md:col-span-6 lg:col-span-3 flex flex-col md:pt-4">
          <h4
            className="footer-reveal text-[14px] font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--color-dark-red)" }}
          >
            Navigation
          </h4>
          <ul className="footer-reveal flex flex-col gap-4">
            {[
              "This Is Us",
              "Products & Services",
              "What's New",
              "SDS Library",
              "Reach Us",
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="group relative inline-block text-lg font-medium text-white hover:text-white transition-colors"
                >
                  {link}
                  {/* Elegant hover underline effect */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: Blank space to let the giant monogram breathe */}
        <div className="hidden lg:block lg:col-span-4"></div>
      </div>

      {/* =========================================
          BOTTOM ROW: Legal & Copyright
          ========================================= */}
      <div
        className="relative z-10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-t-gray-100"
      >
        {/* Legal Links */}
        <div
          className="footer-reveal flex flex-wrap gap-6 text-[11px] font-semibold tracking-wider uppercase"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          <a href="#" className="footer-legal-link transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="footer-legal-link transition-colors">
            Terms of Service
          </a>
          <a href="#" className="footer-legal-link transition-colors">
            Modern Slavery Statement
          </a>
        </div>

        {/* Copyright */}
        <div
          className="footer-reveal text-xs font-medium"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          &copy; {new Date().getFullYear()} Pascom Commercial Pty Ltd. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
