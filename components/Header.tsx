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
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-red-900" : "bg-transparent"}`}>
      {/* =========================================
          TOP NAVIGATION
          ========================================= */}
      <nav className="relative z-50 w-full px-4 md:px-6 lg:px-10 py-4 md:py-8 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Left Links (Outlined Pills) - Hidden on mobile */}
        <div className="hidden lg:flex gap-2 lg:gap-4 lg:w-1/3">
          <Link
            href="#"
            className="border border-white/40 text-white text-xs lg:text-sm font-semibold px-3 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Capabilities
          </Link>
          <Link
            href="#"
            className="border border-white/40 text-white text-xs lg:text-sm font-semibold px-3 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Safety & Compliance
          </Link>
        </div>

        {/* Right Links (White Pill Container) - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-[80%] lg:justify-end">
          <div className="bg-white rounded-full p-1.5 pl-8 flex items-center gap-4 lg:gap-6 shadow-lg">
            <Link
              href="/"
              className="text-xs lg:text-sm font-bold text-gray-900 relative hover:text-red-600 transition-colors"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-0.75 bg-red-600 rounded-t-md"></span>
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
              className="bg-red-600 hover:bg-red-700 text-white text-xs lg:text-sm font-bold px-6 lg:px-8 py-2 lg:py-2.5 rounded-full transition-colors ml-2"
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
        <div className="lg:hidden bg-[#0A1E1A] border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/this-is-us"
              className="text-white text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              This Is Us
            </Link>
            <Link
              href="/products-services"
              className="text-white text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product & Services
            </Link>
            <Link
              href="/whats-new"
              className="text-white text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              What&apos;s New
            </Link>
            <Link
              href="/reach-us"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors text-center mt-2"
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
