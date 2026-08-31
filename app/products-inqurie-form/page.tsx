"use client";

import React, { useState } from "react";

const productsList = [
  "Other Product",
  "Acetic acid 90%",
  "Alcohol hand sanitizer gel",
  "Ammonia solution 10-35%",
  "Ammonia solution 19%",
  "Ammonia solution 25%",
  "Ammonium bifluoride 98%",
  "Borax 3.5%",
  "Calcium chloride 94%",
  "Calcium hypochlorite 65%",
  "Calcium hypochlorite 70%",
  "Caustic soda",
  "Caustic soda 10%",
  "Caustic soda 10-20%",
  "Caustic soda 20%",
  "Caustic soda 31.5%",
  "Caustic soda 40%",
  "Caustic soda 50%",
  "Citric acid monohydrate",
  "Citric acid 10%",
  "Citric acid 50%",
  "Citric acid anhydrous",
  "Cobalt sulphate",
  "Copper sulphate",
  "D.Nitro UV",
  "DI water",
  "EDTA 40%",
  "Ferric chloride 40%",
  "Ferric chloride 42%",
  "Ferric sulphate 40-50%",
  "Ferric sulphate 41%",
  "Fluoresceine",
  "Fluoresceine 40%",
  "High Flash Kerosene",
  "Hydrochloric acid 10-35%",
  "Hydrochloric acid 15%",
  "Hydrochloric acid 20%",
  "Hydrochloric acid 28%",
  "Hydrochloric acid 32%",
  "Hydrochloric acid 5%",
  "Hydrogen peroxide 30%",
  "Hydrogen peroxide 50%",
  "Methanol",
  "Methylene Chloride",
  "Monoethylene Glycol",
  "Monoethylene Glycol Fiber grade",
  "Nickel Catalysed Ammonium bisulfite 65%",
  "Potassium chloride (KCl)",
  "Potassium chloride 98%",
  "Potassium hydroxide 45%",
  "Potassium hydroxide 49%",
  "Potassium hydroxide 90%",
  "Silfax 1000",
  "Soda Ash Dense",
  "Soda Ash Dense FCC (Food Grade)",
  "Sodium acetate anhydrous",
  "Sodium bicarbonate",
  "Sodium bicarbonate 7.2%",
  "Sodium bisulfite 30%",
  "Sodium bisulfite 40%",
  "Sodium bromide photo grade",
  "Sodium carbonate 10%",
  "Sodium carbonate 20%",
  "Sodium chlorite 31%",
  "Sodium hexametaphosphate",
  "Sodium hydrochlorite 12.5%",
  "Sodium hypochlorite 5%",
  "Sodium metabisulfite HP",
  "Sodium molybdate dihydrate",
  "Sodium silicate N grade 38%",
  "Solvent 150",
  "Sulfamic acid 100%",
  "Sulfamic acid 15%",
  "Sulfuric acid 60%",
  "Sulfuric acid 93%",
  "Sulfuric acid 98%",
  "Tetrakis (Hydroxymethyl) Phosphonium Sulfate 75%",
  "Tetrapotassium Pyrophosphate",
  "Triethylene glycol",
  "Trisodium Phosphate 5%",
  "Trisodium Phosphate 98%",
  "Urea",
  "Urea solution 20%",
  "Urea solution 50%",
  "Xylene Isomer",
];

export default function ProductInquiryForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    remarks: "",
  });

  const filteredProducts = productsList.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleProduct = (productName: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.company ||
      !formData.email ||
      !formData.phone ||
      !formData.remarks ||
      selectedProducts.length === 0
    ) {
      alert("Please fill all required fields and select at least one product");
      return;
    }
    console.log({ selectedProducts, ...formData });
    alert(
      "Inquiry submitted successfully! We will respond as soon as possible.",
    );
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      remarks: "",
    });
    setSelectedProducts([]);
    setSearchTerm("");
  };

  return (
    <section
      className="min-h-screen py-32 px-4 md:px-8 lg:px-16 font-sans antialiased text-white"
      style={{ backgroundColor: "var(--color-primary-red)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white"
          style={{ color: "var(--color-white)" }}
          >
            Send us your <span style={{ color: "var(--color-dark-red)" }}>requirement</span>
          </h1>
          <p className="text-gray-100 text-lg max-w-2xl leading-relaxed">
            ease select your product and complete the form. Once submitted, we will respond to your inquiry as soon as possible.If the product you are interested in is not listed below, please select the “Other Product” option and provide the product name in the comment section for further details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            <div className="p-8 md:p-10 bg-white rounded-4xl">
              <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                Your Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 block">
                      Company *
                    </label>
                    <input
                      type="text"
                      placeholder="Your organization"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 block">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>
                </div>

                {/* Remarks */}
                <div>
                  <label className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2 block">
                    Remarks / Comments *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Additional details or special requirements..."
                    required
                    value={formData.remarks}
                    onChange={(e) =>
                      setFormData({ ...formData, remarks: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 py-2 outline-none focus:border-red-400 transition-all text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                  >
                    <i className="fa-solid fa-paper-plane"></i> Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Product Selector */}
          <div>
            <div className="p-8 md:p-10 h-full flex flex-col">
              {/* Header & Search */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className=" text-white text-2xl font-bold uppercase tracking-widest px-4 py-1.5">
                    Select Your Product *
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search 80+ chemical formulations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-red-900/30 border border-red-700/40 text-white placeholder-white/40 px-5 py-3 rounded-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-base"
                  />
                  <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-red-300 pointer-events-none"></i>
                </div>
              </div>

              {/* Products List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-2">
                {filteredProducts.map((product) => {
                  const isSelected = selectedProducts.includes(product);
                  return (
                    <button
                      key={product}
                      type="button"
                      onClick={() => toggleProduct(product)}
                      className={`text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 text-left flex items-center justify-between group ${
                        isSelected
                          ? "bg-red-600 text-white shadow-lg border border-red-500"
                          : "bg-red-900/30 text-white/80 hover:text-white hover:bg-red-900/50 border border-red-700/40 hover:border-red-600/60"
                      }`}
                    >
                      <span className="truncate">{product}</span>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 transition-all ${
                          isSelected
                            ? "border-white bg-white/20"
                            : "border-red-400/40 group-hover:border-red-300"
                        }`}
                      >
                        {isSelected && (
                          <i className="fa-solid fa-check text-white text-xs"></i>
                        )}
                      </div>
                    </button>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <p className="text-sm text-white/50 p-4 text-center mt-8">
                    No products found matching &quot;{searchTerm}&quot;
                  </p>
                )}
              </div>

              {/* Selected Count */}
              {selectedProducts.length > 0 && (
                <div className="mt-6 pt-4 border-t border-red-700/30">
                  <p className="text-sm text-red-300 font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-check-circle"></i>{" "}
                    {selectedProducts.length} product(s) selected
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(127, 29, 29, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.6);
        }
      `,
        }}
      />
    </section>
  );
}
