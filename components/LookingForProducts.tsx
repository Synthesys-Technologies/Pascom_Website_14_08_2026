'use client';

import Image from 'next/image';

export default function LookingForProducts() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full relative">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">


        {/* RIGHT COLUMN: Search & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* SEARCH SECTION */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
              Looking For
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500"> Products?</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium mb-8">
              We got everything covered, just have a look.
            </p>

            {/* Creative Floating Search Bar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center w-full max-w-2xl bg-white rounded-full p-2 shadow-xl border border-gray-100 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/20">

                {/* Search Icon */}
                <div className="pl-6 pr-3 text-gray-400">
                  <i className="fa-solid fa-magnifying-glass text-lg"></i>
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Search for chemicals, formulations, IBCs..."
                  className="w-full py-4 bg-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
                />

                {/* Gradient Search Button */}
                <button className="shrink-0 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 md:px-10 py-4 rounded-full shadow-md transform hover:scale-[1.02] transition-all flex items-center gap-2">
                  Search
                  <i className="fa-solid fa-arrow-right hidden md:inline-block"></i>
                </button>
              </div>
            </div>
          </div>

          {/* INNOVATION CONTENT SECTION */}
          <div className="relative pl-6 md:pl-10">

            {/* Accent line */}
            <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-red-600 to-red-400 rounded-full"></div>

            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-bold text-[10px] tracking-widest uppercase rounded-md mb-4">
              Our Edge
            </span>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Innovation Keeps Us Ahead
            </h3>

            {/* Content paragraphs */}
            <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed font-medium max-w-2xl">
              <p className="text-gray-700 font-semibold text-base">
                Innovation drives our edge as a chemical supplier Australia. With extensive experience, we deliver high-quality, reliable products.
              </p>
              <p>
                Leveraging industry knowledge, we exceed expectations with pioneering services. Our commitment helps partners thrive, ensuring adaptability and success. Staying ahead of the curve, we provide tools businesses need to stay competitive. Focused on improvement, we drive long-term success, making partners resilient to change.
              </p>
              <p>
                This dedication to excellence fosters growth and innovation in rapidly evolving environments.
              </p>
            </div>
          </div>
        </div>


        {/* LEFT COLUMN: Image Section */}
        <div className="lg:col-span-5 relative">
          {/* Main Large Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] w-full md:w-[90%] z-10">
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/DSC1319-2-768x1152.jpg"
              alt="Industrial Chemical Worker"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
