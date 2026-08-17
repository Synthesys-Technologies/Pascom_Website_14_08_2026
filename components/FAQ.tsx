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

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['1'])); // Open first item by default

  const toggleFAQ = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8 font-sans antialiased" style={{ backgroundColor: "var(--color-primary-red)" }}>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* =========================================
            LEFT COLUMN (Headers & CTA Card)
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col sticky top-24">

          {/* Main Headline (Serif Font to match the elegant image style) */}
          <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight mb-6" style={{ color: "var(--color-white)" }}>
            Clear answers for complex operations
          </h2>

          {/* Sub-paragraph */}
          <p className="text-[15px] font-medium leading-relaxed max-w-md mb-12" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Clear answers on blending timelines, engagement models, compliance reporting, and measurable industrial outcomes.
          </p>

        </div>

        {/* =========================================
            RIGHT COLUMN (Accordion FAQ Items)
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqItems.map((item) => {
            const isOpen = expandedItems.has(item.id);

            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 md:p-8 transition-all duration-300 border"
                style={{
                  backgroundColor: isOpen ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
                  borderColor: isOpen ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.15)",
                  boxShadow: isOpen ? "0 8px 24px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="font-serif text-xl md:text-2xl pr-8 leading-snug" style={{ color: "var(--color-white)" }}>
                    {item.question}
                  </span>

                  {/* Dynamic Chevron Button */}
                  <div
                    className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{
                      backgroundColor: isOpen ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.12)",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <i className="fa-solid fa-chevron-down text-sm"></i>
                  </div>
                </button>

                {/* Answer Area (Smooth Accordion Dropdown) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-[15px] font-medium leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                      {item.answer.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}