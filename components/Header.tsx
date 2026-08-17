"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300" style={{ backgroundColor: isScrolled ? "var(--color-primary-red)" : "var(--color-primary-red)" }}>
      {/* =========================================
          TOP NAVIGATION
          ========================================= */}
      <nav className="relative z-50 w-full px-4 md:px-6 lg:px-10 py-4 md:py-8 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Left Links (Outlined Pills) - Hidden on mobile */}
        <div className="hidden lg:flex gap-2 lg:gap-4 lg:w-1/3">
          <Link
            href="#"
            className="border-4 border-white text-white text-xs lg:text-sm font-semibold px-3 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all whitespace-nowrap"
            style={{ borderColor: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "white";
            }}
          >
            Capabilities
          </Link>
          <Link
            href="#"
            className="border-4 border-white text-white text-xs lg:text-sm font-semibold px-3 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all whitespace-nowrap"
            style={{ borderColor: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "white";
            }}
          >
            Safety & Compliance
          </Link>
        </div>

        {/* Right Links (White Pill Container) - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-[80%] lg:justify-end">
          <div className="bg-white rounded-full p-1.5 pl-8 flex items-center gap-4 lg:gap-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Link
              href="/"
              className="text-xs lg:text-sm font-bold text-gray-900 relative transition-colors"
              style={{ color: "var(--color-dark-red)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-red)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-dark-red)"}
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-0.75 rounded-t-md" style={{ backgroundColor: "var(--color-primary-red)" }}></span>
            </Link>
            <Link
              href="/this-is-us"
              className="text-xs lg:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              This Is Us
            </Link>
            <Link
              href="/products-services"
              className="text-xs lg:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Product & Services
            </Link>
            <Link
              href="/whats-new"
              className="text-xs lg:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              What&apos;s New
            </Link>
            <Link
              href="/reach-us"
              className="text-white text-xs lg:text-sm font-bold px-6 lg:px-8 py-2 lg:py-2.5 rounded-full transition-colors ml-2"
              style={{ backgroundColor: "var(--color-primary-red)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-dark-red)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-primary-red)"}
            >
              Reach Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu - Visible only on mobile when open */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 py-6" style={{ backgroundColor: "var(--color-dark-red)" }}>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white text-sm font-medium hover:text-primary-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/this-is-us"
              className="text-white text-sm font-medium hover:text-primary-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              This Is Us
            </Link>
            <Link
              href="/products-services"
              className="text-white text-sm font-medium hover:text-primary-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product & Services
            </Link>
            <Link
              href="/whats-new"
              className="text-white text-sm font-medium hover:text-primary-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              What&apos;s New
            </Link>
            <Link
              href="/reach-us"
              className="text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors text-center mt-2"
              style={{ backgroundColor: "var(--color-primary-red)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-dark-red)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-primary-red)"}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reach Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
