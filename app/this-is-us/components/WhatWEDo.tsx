'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-red-600 flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans antialiased">
      
      {/* Layout Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-20 md:mt-0">

        {/* 1. The Overlapping Image (Left Side) */}
        {/* On mobile: sits on top. On desktop: overlaps the left edge */}
        <div className="md:absolute left-0 top-1/2 md:-translate-y-1/2 w-[85%] sm:w-72 lg:w-96 aspect-square z-20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden -mb-16 md:mb-0 group cursor-pointer">
          <Image 
            src="https://pascom.com.au/wp-content/uploads/2024/10/pascom-tank-600x898.png" 
            alt="Pascom Manufacturing" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle Red/Orange Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-red-600/40 to-transparent mix-blend-multiply pointer-events-none"></div>
        </div>

        {/* 2. The Main White Content Card */}
        <div className="w-full md:w-[85%] md:ml-auto  shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 pt-24 md:pt-16 md:pb-16 md:pl-48 lg:pl-64 md:pr-16 relative z-10 border-4 border-gray-100/50">

          {/* Right Edge Decorative Dots (from reference image) */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
            <div className="w-1.5 h-5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-whit mb-6 tracking-tight">
            Who We Are, What We Do
          </h2>

          {/* Paragraph Content */}
          <div className="space-y-4 text-white text-sm md:text-[15px] leading-relaxed font-medium mb-8 pr-0 lg:pr-8">
            <p>
              Our journey to becoming a market leader in the Chemical Manufacturing industry has been marked by deliberate growth and steadfast commitment to excellence. Over the past two decades, Pascom has accumulated unparalleled knowledge and expertise, which we leverage to deliver quality and innovative products that our clients can rely on with confidence.
            </p>
            <p>
              Throughout our journey, we have proudly served diverse industries, offering a wide array of services and products tailored to meet their specific needs. Our success is not just ours alone; it is a testament to the trust and collaboration of our esteemed partners and clients, including industry giants whom we are privileged to serve.
            </p>
            <p>
              Explore more about our comprehensive range of products and services in the following sections. At Pascom, we continue to uphold the highest standards of quality, innovation, and customer satisfaction, driving us to exceed expectations and maintain our leadership position in the market.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}