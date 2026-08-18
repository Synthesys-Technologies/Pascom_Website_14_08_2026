"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    // Outer Dark Background
    <section className="w-full min-h-screen bg-[#db0000] flex items-center justify-center p-4 md:py-40 font-sans antialiased">
      {/* 
        Main Split Card Container 
      */}
      <div className="w-full max-w-350 flex flex-col lg:flex-row rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* =========================================
            LEFT SIDE: Full Bleed Image
            ========================================= */}
        {/* Adjusted minimum height to reduce overall card size */}
        <div className="relative w-full lg:w-1/2 h-87.5 md:h-112.5 lg:h-auto lg:min-h-135.5 bg-black group">
          <Image
            src="https://pascom.com.au/wp-content/uploads/2024/10/pascom-tank-600x898.png"
            alt="Pascom Chemical Manufacturing"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-100"
            priority
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        </div>

        {/* =========================================
            RIGHT SIDE: Solid Color Content Panel
            ========================================= */}
        {/* Reduced padding to tighten up the content height */}
        <div
          className="w-full lg:w-1/2 p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center text-white"
          style={{ backgroundColor: "var(--color-dark-red)" }}
        >
          {/* Eyebrow Text */}
          <span className="text-white font-medium text-sm md:text-base tracking-wide mb-3 block">
            About Us
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-[1.1] tracking-tight mb-6 text-white"
          style={{ color: "var(--color-white)" }}
          >
            Who We Are, <br className="hidden lg:block" />
            What We Do.
          </h2>

          {/* Paragraphs - Reduced space between paragraphs */}
          <div className="space-y-4 text-white/90 text-sm md:text-[15px] leading-relaxed font-medium mb-10">
            <p>
              Our journey to becoming a market leader in the Chemical
              Manufacturing industry has been marked by deliberate growth and
              steadfast commitment to excellence. Over the past two decades,
              Pascom has accumulated unparalleled knowledge and expertise, which
              we leverage to deliver quality and innovative products that our
              clients can rely on with confidence.
            </p>
            <p>
              Throughout our journey, we have proudly served diverse industries,
              offering a wide array of services and products tailored to meet
              their specific needs. Our success is not just ours alone; it is a
              testament to the trust and collaboration of our esteemed partners
              and clients, including industry giants whom we are privileged to
              serve.
            </p>
            <p>
              Explore more about our comprehensive range of products and
              services in the following sections. At Pascom, we continue to
              uphold the highest standards of quality, innovation, and customer
              satisfaction, driving us to exceed expectations and maintain our
              leadership position in the market.
            </p>
          </div>

          {/* Outlined Pill Button */}
          <a
            href="#"
            className="group w-max inline-flex items-center gap-3 border border-white rounded-full px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#DC2626] transition-all duration-300"
          >
            Discover More
            <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
