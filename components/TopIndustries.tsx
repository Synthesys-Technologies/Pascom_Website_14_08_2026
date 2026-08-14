'use client';

import React from 'react';

const industries = [
  {
    id: 1,
    title: 'Oil & Gas',
    tag: 'Core Sector',
    desc: 'Pascom supplies essential chemicals for drilling, production, and refining in the oil and gas industry, enhancing efficiency and sustainability.',
    icon: 'fa-gas-pump',
    // Slack-style orange/peach theme
    theme: {
      bg: 'bg-gradient-to-b from-[#FCE1CC] to-[#FE9F7C]',
      text: 'text-[#511F11]',
      accent: 'text-[#D35A35]',
      border: 'border-[#D35A35]',
      hover: 'hover:shadow-[0_30px_60px_rgba(254,159,124,0.4)]',
      // Dynamic flex layout styling for desktop
      desktopStyle: 'lg:-rotate-6 lg:translate-y-8 z-10',
    }
  },
  {
    id: 2,
    title: 'Mining',
    tag: 'Heavy Industry',
    desc: 'Our chemicals cater to mineral processing, environmental control, and dust management, optimizing extraction efficiency and sustainability.',
    icon: 'fa-helmet-safety',
    // Notion-style white/slate theme
    theme: {
      bg: 'bg-gradient-to-b from-[#FFFFFF] to-[#F0F2F4]',
      text: 'text-gray-900',
      accent: 'text-gray-800',
      border: 'border-gray-300',
      hover: 'hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]',
      desktopStyle: 'lg:rotate-3 lg:-translate-y-4 lg:-ml-24 z-20',
    }
  },
  {
    id: 3,
    title: 'Water Treatment',
    tag: 'Environmental',
    desc: 'Our innovative chemicals guarantee clean water solutions and wastewater treatment for municipal, industrial, and environmental standards.',
    icon: 'fa-water',
    // Trello-style blue theme
    theme: {
      bg: 'bg-gradient-to-b from-[#E2F0F9] to-[#C1DCEF]',
      text: 'text-[#1C3E5A]',
      accent: 'text-[#2C5F86]',
      border: 'border-[#9FCAE6]',
      hover: 'hover:shadow-[0_30px_60px_rgba(193,220,239,0.5)]',
      desktopStyle: 'lg:-rotate-3 lg:translate-y-4 lg:-ml-24 z-30',
    }
  },
  {
    id: 4,
    title: 'Agriculture',
    tag: 'Essential Service',
    desc: 'Pascom develops chemicals that improve crop health, soil fertility, and pest control, supporting sustainable farming practices and higher yields.',
    icon: 'fa-leaf',
    // Custom green theme to complete the set
    theme: {
      bg: 'bg-gradient-to-b from-[#E7F6E7] to-[#A3D9A5]',
      text: 'text-[#16421A]',
      accent: 'text-[#2E6B34]',
      border: 'border-[#7BC380]',
      hover: 'hover:shadow-[0_30px_60px_rgba(163,217,165,0.5)]',
      desktopStyle: 'lg:rotate-6 lg:-translate-y-8 lg:-ml-24 z-40',
    }
  }
];

export default function TopIndustries() {
  return (
    <section className="w-full min-h-200 bg-[#F7F9FA] px-4 py-20 flex flex-col items-center font-sans overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12 md:mb-16 relative z-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Top Industries We Serve
        </h2>
      </div>

      {/* Responsive Cards Container */}
      {/* Mobile: 1-col flex | Tablet: 2x2 Grid | Desktop: Overlapping Flex row */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-8 lg:gap-0 lg:h-[500px]">
        
        {industries.map((item) => (
          <div
            key={item.id}
            className={`
              relative w-full max-w-[340px] mx-auto
              transition-all duration-500 ease-out cursor-pointer
              /* Hover effects standard for all sizes, enhanced for Desktop */
              hover:z-50 hover:scale-105 hover:-translate-y-2 lg:hover:rotate-0 lg:hover:-translate-y-12
              ${item.theme.desktopStyle}
            `}
          >
            {/* The Card */}
            <div className={`
              w-full h-full rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/40 
              flex flex-col overflow-hidden ${item.theme.bg} ${item.theme.text} ${item.theme.hover}
              transition-shadow duration-500
            `}>
              
              {/* Top Bar (Icon & Tag) */}
              <div className={`px-6 py-5 border-b border-opacity-20 flex items-center gap-2.5 ${item.theme.border}`}>
                <div className={`w-8 h-8 rounded-xl bg-white/50 flex items-center justify-center shadow-sm`}>
                  <i className={`fa-solid ${item.icon} ${item.theme.accent} text-[13px]`}></i>
                </div>
                <span className={`font-bold text-sm tracking-wide ${item.theme.accent}`}>
                  {item.tag}
                </span>
              </div>

              {/* Middle Section (Title) */}
              <div className="px-6 pt-8 pb-8 flex-1">
                <p className={`text-xs opacity-70 mb-2 font-medium`}>Industry Focus:</p>
                <h3 className="text-2xl font-bold leading-tight tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Section (Description & Action) */}
              <div className={`px-6 pt-5 pb-6 border-t border-opacity-20 flex flex-col gap-4 ${item.theme.border}`}>
                <p className="text-[13px] font-medium opacity-90 leading-relaxed min-h-[80px]">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between mt-2">
                  <a href="#" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 transition-opacity ${item.theme.accent}`}>
                    Learn more <i className="fa-solid fa-arrow-right text-[10px] mt-0.5"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}