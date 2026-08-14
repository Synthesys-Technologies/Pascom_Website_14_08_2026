"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto font-sans text-gray-800 antialiased">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            We Value Your Partnership
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            We create meaningful connections and deliver tailored,
            results-driven solutions. With advanced manufacturing and a
            client-focused approach, we help your operations succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* CARD 1: Product Range */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg"
              alt="Product Range"
              width={500}
              height={500}
              className="w-full h-60 object-cover"
            />

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                Product Range
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                Pascom offers a broad range as chemical manufacturers Australia
                to meet diverse industrial needs. From raw materials to custom
                formulations, we provide tailored solutions for various
                applications.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* CARD 2: Reliable Partner */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-100 h-60">
              <Image
                src="https://pascom.com.au/wp-content/uploads/2024/10/DSC1625-600x900.jpeg"
                alt="Product Range"
                width={600}
                height={900}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                Reliable Partner
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                We pride ourselves on being a reliable partner. As Chemical
                Suppliers Australia, our unwavering commitment to integrity,
                transparency, and timely delivery ensures lasting relationships
                with our clients.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* CARD 3: Quality Assurance */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/DSC16025-600x900.jpeg"
              alt="Product Range"
              width={1500}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                Quality Assurance
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                Quality assurance is central to our operations as a trusted
                chemical supplier Australia. We follow strict control measures
                to ensure products meet safety & performance. Our commitment
                guarantees each product is reliable.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* CARD 4: Partnership */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="https://pascom.com.au/wp-content/uploads/2024/10/IMG_1763-600x940.jpeg"
              alt="Product Range"
              width={500}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                We Value Your Partnership
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                As a trusted chemical supplier Australia, we highly value the
                partnerships we forge with every customer, embracing a
                philosophy of mutual growth and success.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More About Us <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
