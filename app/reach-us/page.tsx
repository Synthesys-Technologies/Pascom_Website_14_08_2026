"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What exactly is Toll Blending?",
    answer:
      "In Toll Blending and Contract Manufacturing, companies outsource product formulas to a Manufacturer with expertise in managing the production process. This includes sourcing raw materials and producing the final product in a licensed, controlled environment.\n\nThe Manufacturer ensures compliance with ISO, GHS, ADG, and NDA standards. They handle production, packaging, private labeling, and distribution, ensuring quality and regulatory adherence throughout the process.",
  },
  {
    id: "2",
    question: "Are you able to handle the disposal of unwanted chemicals?",
    answer:
      "Yes, we adhere to strict environmental guidelines to ensure the safe and compliant disposal of unwanted chemical byproducts generated during our manufacturing process.",
  },
  {
    id: "3",
    question: "Who do you provide blending services to?",
    answer:
      "We provide comprehensive blending services to a variety of commercial and industrial sectors, including Oil & Gas, Mining, Agriculture, and Water Treatment facilities across Australia.",
  },
  {
    id: "4",
    question: "Can I tour Pascom's facility?",
    answer:
      "Tours of our Welshpool facility can be arranged for prospective wholesale clients and partners by appointment. Please contact our support team to schedule a visit.",
  },
  {
    id: "5",
    question: "Is your business Australian owned?",
    answer:
      "Yes, Pascom Commercial is a 100% Australian owned and operated chemical manufacturing and distribution company.",
  },
  {
    id: "6",
    question: "Do you offer shipping across all of Australia?",
    answer:
      "Absolutely. We have a robust logistics network capable of safely transporting chemicals to any commercial site across Australia.",
  },
  {
    id: "7",
    question: "How can I obtain an SDS?",
    answer:
      "Safety Data Sheets (SDS) are provided with all product deliveries. Existing clients can also request digital copies directly through our client portal or by emailing support.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("1");
  const [interested, setInterested] = useState("");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#db0000] font-sans antialiased">
      {/* =========================================
          DARK HERO SECTION
          ========================================= */}
      <section
        className="w-full py-32 pb-48 px-6 md:px-12 text-center relative z-0"
        style={{ backgroundColor: "var(--color-primary-red)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ color: "var(--color-white)" }}
          >
            Speak to the Pascom Team
          </h1>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
            Whether you have a custom formulation project you&apos;d like to
            discuss in detail, a general enquiry, or an interest in our toll
            blending capabilities, we&apos;d love to hear from you.
          </p>

          {/* Outlined Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full border-4 border-white/70 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              General Enquiries
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-full border-4 border-white/70 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              Product Information
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          OVERLAPPING CONTACT INFO & MAP CARD
          ========================================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-24 relative z-10 mb-24">
        <div className="w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Address */}
              <div>
                <span
                  className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
                  style={{ color: "var(--color-primary-red)" }}
                >
                  Address
                </span>
                <p className="text-lg md:text-xl font-medium text-gray-900 leading-snug">
                  14 Casino St
                  <br />
                  Welshpool
                  <br />
                  WA 6106
                  <br />
                  Australia
                </p>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col gap-10">
                <div>
                  <span
                    className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
                    style={{ color: "var(--color-primary-red)" }}
                  >
                    Email Address
                  </span>
                  <a
                    href="mailto:info@pascom.com.au"
                    className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                  >
                    info@pascom.com.au
                  </a>
                </div>
                <div>
                  <span
                    className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
                    style={{ color: "var(--color-primary-red)" }}
                  >
                    Telephone Number
                  </span>
                  <a
                    href="tel:+61891234567"
                    className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                  >
                    +61 8 9123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Icon Button */}
            <div className="mt-12">
              <a
                href="#"
                className="w-14 h-14 bg-[#DC2626] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right: Map Iframe */}
          <div className="w-full lg:w-1/2 h-100 lg:h-auto bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.929517986375!2d115.95590471062128!3d-31.9899260738941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bea4d00876fd%3A0xefb47ee4c7c29bdf!2sPascom!5e0!3m2!1sen!2slk!4v1786472284087!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Overlay to blend map slightly until hovered */}
            <div className="absolute inset-0 bg-white/10 pointer-events-none transition-opacity duration-700 hover:opacity-0"></div>
          </div>
        </div>
      </section>

      {/* =========================================
          MESSAGE FORM & FAQ SECTION
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-32">
        {/* LEFT: The Message Form */}
        <div className="flex  flex-col bg-white p-8 md:p-12 md:h-180 rounded-4xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900"
          style={{ color: "var(--color-primary-red)" }}
          >
            Send a Message
          </h2>
          <p className="text-sm mb-10 leading-relaxed font-medium text-gray-500">
            Reach out to our team to discuss custom chemical formulations, toll
            blending volumes, or logistics inquiries. Our experts are ready to
            assist.
          </p>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col group">
                <label className="text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 group-focus-within:text-red-600 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-300 focus:border-red-600"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col group">
                <label className="text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 group-focus-within:text-red-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-300 focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Select */}
              <div className="flex flex-col relative group">
                <label className="text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 group-focus-within:text-red-600 transition-colors">
                  Interested In
                </label>
                <select
                  value={interested}
                  onChange={(e) => setInterested(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none transition-colors text-sm appearance-none cursor-pointer text-gray-900 focus:border-red-600"
                >
                  <option value="" disabled>
                    Select an option...
                  </option>
                  <option value="toll">Toll Blending</option>
                  <option value="formulation">Chemical Formulation</option>
                  <option value="logistics">Logistics & Supply</option>
                </select>
                <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-xs text-gray-400 pointer-events-none group-focus-within:text-red-600"></i>
              </div>
              {/* Phone */}
              <div className="flex flex-col group">
                <label className="text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 group-focus-within:text-red-600 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+61 400 000 000"
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-300 focus:border-red-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col group">
              <label className="text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 group-focus-within:text-red-600 transition-colors">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="How can we help you?"
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-300 focus:border-red-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="button"
                className="bg-[#DC2626] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full flex items-center gap-3 transition-all duration-300 shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:-translate-y-0.5"
              >
                Submit Inquiry{" "}
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: Frequently Asked Questions */}
        <div className="flex flex-col">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900"
            style={{ color: "var(--color-white)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-sm leading-relaxed font-medium text-gray-100">
              Find answers to common questions about our chemical solutions and
              services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 bg-white ${
                  openFaq === faq.id
                    ? "border-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.1)]"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group"
                >
                  <h3
                    className={`text-base font-bold transition-colors ${openFaq === faq.id ? "text-red-600" : "text-gray-900 group-hover:text-red-600"}`}
                  >
                    {faq.question}
                  </h3>
                  <div className="shrink-0 ml-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === faq.id ? "bg-red-600" : "bg-gray-100 group-hover:bg-red-100"}`}
                    >
                      <i
                        className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${openFaq === faq.id ? "rotate-180 text-white" : "text-gray-600 group-hover:text-red-600"}`}
                      ></i>
                    </div>
                  </div>
                </button>

                {openFaq === faq.id && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-sm leading-relaxed font-medium text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
