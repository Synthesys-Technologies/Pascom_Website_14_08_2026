"use client";

import React from "react";
import Image from "next/image";

export default function WhyChooseUsGrid() {
  return (
    <section className="w-full min-h-fit bg-[#F8FAFC] py-20 px-4 md:px-8 flex items-center justify-center font-sans antialiased">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className=" mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Why Choose Pascom
          </h2>
        </div>

        {/* 3x3 Bento Cross Grid */}
        {/* On mobile: 1 column stacked. On tablet/desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative min-h-[600px]">
          {/* --- ROW 1 --- */}

          {/* 1. Top-Left Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <i className="fa-solid fa-award text-gray-700 text-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug tracking-tight">
              Expertise and Experience
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our experts deliver exceptional, customized solutions in chemical
              manufacturing as a Chemical Supplier Australia, upholding the
              highest standards of excellence and dependability.
            </p>
          </div>

          {/* 2. Top-Center Spacer (Hidden on mobile) */}
          <div className="hidden md:block bg-gradient-to-b from-gray-400 to-transparent rounded-[2rem] h-44 border border-gray-100/50 opacity-50"></div>

          {/* 3. Top-Right Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <i className="fa-solid fa-tags text-gray-700 text-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug tracking-tight">
              Competitive Pricing Options
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We deliver quality chemical products at competitive prices as a
              chemical manufacturer australia. Our efficient processes and team
              ensure we provide cost-effective solutions without compromising on
              quality.
            </p>
          </div>

          {/* --- ROW 2 --- */}

          {/* 4. Left-Center Spacer (Hidden on mobile) */}
          <div className="hidden md:block bg-gradient-to-r from-gray-400 to-transparent rounded-[2rem] h-44 border border-gray-100/50 opacity-50"></div>

          {/* 5. Center Graphic Tile - Absolute Positioned with Grid Placeholder */}
          <div className="hidden md:block bg-gray-100 rounded-[2rem] border border-gray-200"></div>
          <div className="absolute hidden md:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2rem] shadow-xl border border-gray-100 items-center justify-center p-12 w-[90vw] md:w-[400px] h-[400px] overflow-hidden z-10">
              {/* Decorative faint background rings */}
              <div className="absolute inset-0 m-4 rounded-full border border-gray-50"></div>
              <div className="absolute inset-0 m-10 rounded-full border border-gray-50"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-50/80 -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-px h-full bg-gray-50/80 -translate-x-1/2"></div>

              {/* Glowing Segmented Progress Ring */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/home/IBC Tank.jpg"
                  alt="IBC Tank"
                  width={400}
                  height={200}
                  className="w-72 md:w-96 h-auto object-contain drop-shadow-xl hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

          {/* 6. Right-Center Spacer (Hidden on mobile) */}
          <div className="hidden md:block bg-gradient-to-l from-gray-400 to-transparent rounded-[2rem]  border border-gray-100/50 opacity-50"></div>

          {/* --- ROW 3 --- */}

          {/* 7. Bottom-Left Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <i className="fa-solid fa-handshake text-gray-700 text-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug tracking-tight">
              Long-Term Partnership
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pascom values long-term relationships as a chemical supplier
              australia, fostering trust and collaboration through loyalty
              programs, joint development, and continuous improvement
              initiatives.
            </p>
          </div>

          {/* 8. Bottom-Center Spacer (Hidden on mobile) */}
          <div className="hidden md:block bg-gradient-to-t from-gray-400 to-transparent rounded-[2rem] h-44 border border-gray-100/50 opacity-50 self-end"></div>

          {/* 9. Bottom-Right Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <i className="fa-solid fa-headset text-gray-700 text-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug tracking-tight">
              Support, Training, and Services
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pascom offers comprehensive support services as a chemical
              manufacturer australia, including technical assistance, training,
              and educational resources to benefit partners and customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
