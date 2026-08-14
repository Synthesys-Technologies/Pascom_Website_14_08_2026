'use client';

import { useState } from 'react';
import FAQ from '@/components/FAQ';

const faqData = [
  {
    id: 0,
    question: 'What kind of operational problems do you solve?',
    answer: 'We help companies reduce delays, improve process visibility, remove workflow bottlenecks, optimize team coordination, and increase operational efficiency across chemical manufacturing departments.'
  },
  {
    id: 1,
    question: 'How long does an operations consulting engagement take?',
    answer: 'Depending on the complexity of your supply chain and formulation requirements, initial consultations take 1-2 weeks, with full deployment strategies rolling out within 30-60 days.'
  },
  {
    id: 2,
    question: 'Do you work with growing mid-sized companies?',
    answer: 'Yes, we scale our toll blending and logistics solutions to fit mid-sized operations looking to expand their market footprint safely and efficiently.'
  },
  {
    id: 3,
    question: 'How do you measure operational improvement?',
    answer: 'We track key performance indicators (KPIs) including formulation yield rates, logistical transit times, and adherence to ISO and compliance standards.'
  },
  {
    id: 4,
    question: 'Will this disrupt our current operations?',
    answer: 'No. Our integration processes are designed to be seamless, ensuring your daily production and supply chain experience zero downtime during the transition.'
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [interested, setInterested] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-red-950 font-sans text-gray-900 antialiased py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-350 mx-auto">

        {/* Hero Header */}
        <div className="mb-20 md:mb-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl font-medium">
            Have questions about our chemical solutions, toll blending services, or logistics?
            Our team is ready to help you find the perfect fit for your business.
          </p>
        </div>

        {/* TOP SECTION: FORM & CONTACT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* LEFT: Minimalist Form */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-3">Send a Message</h2>
            <p className="text-sm text-white/70 mb-10 leading-relaxed pr-8 font-medium">
              Reach out to our team to discuss custom chemical formulations, toll blending volumes, or logistics inquiries. Our experts are ready to assist.
            </p>

            <form className="space-y-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-red-400/50 py-3 outline-none focus:border-red-400 transition-colors text-sm text-white placeholder:text-white/40"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-red-400/50 py-3 outline-none focus:border-red-400 transition-colors text-sm text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative">
                  <label className="text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">Interested In</label>
                  <select
                    value={interested}
                    onChange={(e) => setInterested(e.target.value)}
                    className="w-full bg-transparent border-b border-red-400/50 py-3 outline-none focus:border-red-400 transition-colors text-sm appearance-none cursor-pointer text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="toll">Toll Blending</option>
                    <option value="formulation">Chemical Formulation</option>
                    <option value="logistics">Logistics & Supply</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-0 bottom-3 text-xs text-red-400 pointer-events-none"></i>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-red-400/50 py-3 outline-none focus:border-red-400 transition-colors text-sm text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">Message</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-red-400/50 py-3 outline-none focus:border-red-400 transition-colors text-sm text-white placeholder:text-white/40"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="fa-solid fa-arrow-right text-[10px]"></i> Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Contact Information Blocks */}
          <div className="flex flex-col gap-12">

            {/* Call Us */}
            <div className="bg-red-900/30 rounded-xl p-8 border border-red-700/50">
              <h2 className="text-xl font-bold text-white mb-3">Call Us</h2>
              <p className="text-sm text-white/70 mb-6 leading-relaxed font-medium">
                Speak directly with our chemical experts for immediate assistance with your supply chain and manufacturing needs.
              </p>
              <a href="tel:+61891234567" className="inline-flex items-center gap-3 text-red-300 font-semibold text-sm hover:text-red-200 transition-colors">
                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <i className="fa-solid fa-phone text-xs text-white"></i>
                </div>
                +61 8 9123 4567
              </a>
            </div>

            {/* Visit Us */}
            <div className="bg-red-900/30 rounded-xl p-8 border border-red-700/50">
              <h2 className="text-xl font-bold text-white mb-3">Visit Us</h2>
              <p className="text-sm text-white/70 mb-6 leading-relaxed font-medium">
                Tour our state-of-the-art facility to see our ISO 9001 certified blending and formulation processes in action.
              </p>
              <div className="inline-flex items-center gap-3 text-red-300 font-semibold text-sm">
                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-xs text-white"></i>
                </div>
                14 Casino St, Welshpool, WA 6106
              </div>
            </div>
          </div>

        </div>

        {/* MAP SECTION */}
        <div className="w-full rounded-3xl overflow-hidden mb-24 border border-red-700/50 shadow-2xl">
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
          <FAQ/>
        </div>

      </div>
    </main>
  );
}