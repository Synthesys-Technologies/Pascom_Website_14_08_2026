'use client';

const processSteps = [
  {
    num: '1',
    title: 'Customer-Centric Approach',
    desc: 'Pascom meticulously understands and prioritizes specific needs and provides nimble tailored service that exceeds customer expectations.',
    icon: 'fa-users',
  },
  {
    num: '2',
    title: 'Reliability and Consistency',
    desc: 'Pascom maintains high standards of product quality and reliability through rigorous quality control measures and efficient supply chain management.',
    icon: 'fa-leaf',
  },
  {
    num: '3',
    title: 'Innovation and Research',
    desc: 'Continual improvement and innovation are in our genes. Challenging the status quo is part of our day-to-day business at Pascom, setting us apart.',
    icon: 'fa-flask',
  },
  {
    num: '4',
    title: 'Sustainability Initiatives',
    desc: 'Pascom implements eco-friendly practices in manufacturing, reducing waste and using renewable resources to support environmental sustainability.',
    icon: 'fa-leaf',
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#F8F9FB] py-24 px-4 md:px-8 font-sans antialiased overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Principles<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Interactive Process Container */}
        <div className="relative w-full lg:h-[500px] mt-12 lg:mt-0">
          
          {/* Responsive SVG Wave Line (Visible only on Desktop) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg 
              viewBox="0 0 1000 500" 
              preserveAspectRatio="none" 
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dc2626" />   {/* Tailwind red-600 */}
                  <stop offset="50%" stopColor="#ef4444" />  {/* Tailwind red-500 */}
                  <stop offset="100%" stopColor="#f87171" /> {/* Tailwind red-400 */}
                </linearGradient>
              </defs>

              {/* Blurred Glow Path */}
              <path
                d="M -50 325 C 37 325, 37 325, 125 325 C 250 325, 250 175, 375 175 C 500 175, 500 325, 625 325 C 750 325, 750 175, 875 175 C 962 175, 1050 175, 1050 175"
                fill="none"
                stroke="rgba(220, 38, 38, 0.2)"
                strokeWidth="16"
                vectorEffect="non-scaling-stroke"
                filter="blur(8px)"
              />
              
              {/* Main Crisp Path */}
              <path 
                d="M -50 325 C 37 325, 37 325, 125 325 C 250 325, 250 175, 375 175 C 500 175, 500 325, 625 325 C 750 325, 750 175, 875 175 C 962 175, 1050 175, 1050 175" 
                fill="none" 
                stroke="url(#waveGrad)" 
                strokeWidth="3" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* 4-Step Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 h-full relative z-10 gap-12 lg:gap-0">
            {processSteps.map((step, index) => {
              // Mathematical layout logic to perfectly align with the SVG curve
              const isTopText = index % 2 === 0; 
              
              return (
                <div key={index} className="relative flex flex-col items-center lg:block h-full">
                  
                  {/* Hexagon Icon (Absolute on Desktop, Static on Mobile) */}
                  <div className={`
                    lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 mb-6 lg:mb-0
                    ${isTopText ? 'lg:top-[65%]' : 'lg:top-[35%]'}
                    drop-shadow-[0_15px_25px_rgba(220,38,38,0.3)]
                  `}>
                    <div
                      className="w-16 h-16 bg-white flex items-center justify-center shadow-inner"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                      <i className={`fa-solid ${step.icon} text-red-600 text-xl`}></i>
                    </div>
                  </div>

                  {/* Text Content Block */}
                  <div className={`
                    relative w-full max-w-sm mx-auto text-center lg:text-left px-6
                    lg:absolute lg:left-0 lg:w-full
                    ${isTopText ? 'lg:top-12' : 'lg:bottom-12'}
                  `}>
                    
                    {/* Giant Faded Background Number */}
                    <span className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-4 -top-12 lg:-top-16 text-[10rem] font-black text-slate-300 opacity-20 -z-10 select-none pointer-events-none">
                      {step.num}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}