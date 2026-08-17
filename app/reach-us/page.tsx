'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What exactly is Toll Blending?',
    answer:
      'In Toll Blending and Contract Manufacturing, companies outsource product formulas to a Manufacturer with expertise in managing the production process. This includes sourcing raw materials and producing the final product in a licensed, controlled environment.\n\nThe Manufacturer ensures compliance with ISO, GHS, ADG, and NDA standards. They handle production, packaging, private labeling, and distribution, ensuring quality and regulatory adherence throughout the process.',
  },
  {
    id: '2',
    question: 'Are you able to handle the disposal of unwanted chemicals?',
    answer:
      'Yes, we adhere to strict environmental guidelines to ensure the safe and compliant disposal of unwanted chemical byproducts generated during our manufacturing process.',
  },
  {
    id: '3',
    question: 'Who do you provide blending services to?',
    answer:
      'We provide comprehensive blending services to a variety of commercial and industrial sectors, including Oil & Gas, Mining, Agriculture, and Water Treatment facilities across Australia.',
  },
  {
    id: '4',
    question: "Can I tour Pascom's facility?",
    answer:
      'Tours of our Welshpool facility can be arranged for prospective wholesale clients and partners by appointment. Please contact our support team to schedule a visit.',
  },
  {
    id: '5',
    question: 'Is your business Australian owned?',
    answer:
      'Yes, Pascom Commercial is a 100% Australian owned and operated chemical manufacturing and distribution company.',
  },
  {
    id: '6',
    question: 'Do you offer shipping across all of Australia?',
    answer:
      'Absolutely. We have a robust logistics network capable of safely transporting chemicals to any commercial site across Australia.',
  },
  {
    id: '7',
    question: 'How can I obtain an SDS?',
    answer:
      'Safety Data Sheets (SDS) are provided with all product deliveries. Existing clients can also request digital copies directly through our client portal or by emailing support.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>('1');
  const [interested, setInterested] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <main className="min-h-screen font-sans text-gray-900 antialiased py-20 md:py-32 px-6 md:px-12" style={{ backgroundColor: "#f5f5f7" }}>
      <div className="max-w-350 mx-auto">

        {/* Hero Header */}
        <div className="mb-20 md:mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ color: "var(--color-dark-red)" }}>
            Get in Touch
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl font-medium" style={{ color: "var(--color-primary-red)" }}>
            Have questions about our chemical solutions, toll blending services, or logistics?
            Our team is ready to help you find the perfect fit for your business.
          </p>
        </div>

        {/* TOP SECTION: FORM & CONTACT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* LEFT: Minimalist Form */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-dark-red)" }}>Send a Message</h2>
            <p className="text-sm mb-10 leading-relaxed pr-8 font-medium text-gray-600">
              Reach out to our team to discuss custom chemical formulations, toll blending volumes, or logistics inquiries. Our experts are ready to assist.
            </p>

            <form className="space-y-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-red)" }}>Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b py-3 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400"
                    style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--color-primary-red)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(198, 40, 40, 0.3)"}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-red)" }}>Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b py-3 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400"
                    style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--color-primary-red)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(198, 40, 40, 0.3)"}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative">
                  <label className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-red)" }}>Interested In</label>
                  <select
                    value={interested}
                    onChange={(e) => setInterested(e.target.value)}
                    className="w-full bg-transparent border-b py-3 outline-none transition-colors text-sm appearance-none cursor-pointer text-gray-900"
                    style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--color-primary-red)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(198, 40, 40, 0.3)"}
                  >
                    <option value="">Select an option</option>
                    <option value="toll">Toll Blending</option>
                    <option value="formulation">Chemical Formulation</option>
                    <option value="logistics">Logistics & Supply</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-xs pointer-events-none" style={{ color: "var(--color-primary-red)" }}></i>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-red)" }}>Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b py-3 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400"
                    style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--color-primary-red)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(198, 40, 40, 0.3)"}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <label className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-primary-red)" }}>Message</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b py-3 outline-none transition-colors text-sm text-gray-900 placeholder:text-gray-400"
                  style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--color-primary-red)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(198, 40, 40, 0.3)"}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button
                  type="button"
                  className="text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "var(--color-primary-red)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-dark-red)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-primary-red)"}
                >
                  <i className="fa-solid fa-arrow-right text-[10px]"></i> Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Contact Information Blocks */}
          <div className="flex flex-col gap-12">

            {/* Call Us */}
            <div className="rounded-xl p-8 border bg-white" style={{ borderColor: "var(--color-primary-red)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-dark-red)" }}>Call Us</h2>
              <p className="text-sm mb-6 leading-relaxed font-medium text-gray-600">
                Speak directly with our chemical experts for immediate assistance with your supply chain and manufacturing needs.
              </p>
              <a href="tel:+61891234567" className="inline-flex items-center gap-3 font-semibold text-sm transition-colors" style={{ color: "var(--color-primary-red)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-red)" }}>
                  <i className="fa-solid fa-phone text-xs text-white"></i>
                </div>
                +61 8 9123 4567
              </a>
            </div>

            {/* Visit Us */}
            <div className="rounded-xl p-8 border bg-white" style={{ borderColor: "var(--color-primary-red)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-dark-red)" }}>Visit Us</h2>
              <p className="text-sm mb-6 leading-relaxed font-medium text-gray-600">
                Tour our state-of-the-art facility to see our ISO 9001 certified blending and formulation processes in action.
              </p>
              <div className="inline-flex items-center gap-3 font-semibold text-sm" style={{ color: "var(--color-primary-red)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-red)" }}>
                  <i className="fa-solid fa-location-dot text-xs text-white"></i>
                </div>
                14 Casino St, Welshpool, WA 6106
              </div>
            </div>
          </div>

        </div>

        {/* MAP SECTION */}
        <div className="w-full rounded-3xl overflow-hidden mb-24 shadow-2xl border" style={{ borderColor: "rgba(198, 40, 40, 0.3)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.929517986375!2d115.95590471062128!3d-31.9899260738941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bea4d00876fd%3A0xefb47ee4c7c29bdf!2sPascom!5e0!3m2!1sen!2slk!4v1786472284087!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          ></iframe>
        </div>

        {/* BOTTOM SECTION: FAQ */}
        <div className="mt-20 md:mt-28">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--color-dark-red)" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl font-medium text-gray-600">
              Find answers to common questions about our chemical solutions and services.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqItems.map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg overflow-hidden border bg-white transition-all duration-300"
                style={{
                  borderColor: openFaq === faq.id ? "var(--color-primary-red)" : "rgba(198, 40, 40, 0.2)",
                  boxShadow: openFaq === faq.id ? "0 4px 12px rgba(198, 40, 40, 0.1)" : "none",
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <h3 className="text-base md:text-lg font-semibold" style={{ color: "var(--color-dark-red)" }}>
                    {faq.question}
                  </h3>
                  <div className="shrink-0 ml-4">
                    <i
                      className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      style={{ color: "var(--color-primary-red)" }}
                    ></i>
                  </div>
                </button>

                {openFaq === faq.id && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: "rgba(198, 40, 40, 0.15)" }}>
                    <p className="text-sm md:text-base leading-relaxed font-medium text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}