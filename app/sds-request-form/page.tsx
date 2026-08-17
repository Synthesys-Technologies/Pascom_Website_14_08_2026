'use client';

import { useState } from 'react';

const productsList = [
  "Other Product",
  "Acetic acid 90%", "Alcohol hand sanitizer gel", "Ammonia solution 10-35%", "Ammonia solution 19%",
  "Ammonia solution 25%", "Ammonium bifluoride 98%", "Borax 3.5%", "Calcium chloride 94%",
  "Calcium hypochlorite 65%", "Calcium hypochlorite 70%", "Caustic soda", "Caustic soda 10%",
  "Caustic soda 10-20%", "Caustic soda 20%", "Caustic soda 31.5%", "Caustic soda 40%", "Caustic soda 50%",
  "Citric acid monohydrate", "Citric acid 10%", "Citric acid 50%", "Citric acid anhydrous",
  "Cobalt sulphate", "Copper sulphate", "D.Nitro UV", "DI water", "EDTA 40%", "Ferric chloride 40%",
  "Ferric chloride 42%", "Ferric sulphate 40-50%", "Ferric sulphate 41%", "Fluoresceine",
  "Fluoresceine 40%", "High Flash Kerosene", "Hydrochloric acid 10-35%", "Hydrochloric acid 15%",
  "Hydrochloric acid 20%", "Hydrochloric acid 28%", "Hydrochloric acid 32%", "Hydrochloric acid 5%",
  "Hydrogen peroxide 30%", "Hydrogen peroxide 50%", "Methanol", "Methylene Chloride",
  "Monoethylene Glycol", "Monoethylene Glycol Fiber grade", "Nickel Catalysed Ammonium bisulfite 65%",
  "Potassium chloride (KCl)", "Potassium chloride 98%", "Potassium hydroxide 45%", "Potassium hydroxide 49%",
  "Potassium hydroxide 90%", "Silfax 1000", "Soda Ash Dense", "Soda Ash Dense FCC (Food Grade)",
  "Sodium acetate anhydrous", "Sodium bicarbonate", "Sodium bicarbonate 7.2%", "Sodium bisulfite 30%",
  "Sodium bisulfite 40%", "Sodium bromide photo grade", "Sodium carbonate 10%", "Sodium carbonate 20%",
  "Sodium chlorite 31%", "Sodium hexametaphosphate", "Sodium hydrochlorite 12.5%", "Sodium hypochlorite 5%",
  "Sodium metabisulfite HP", "Sodium molybdate dihydrate", "Sodium silicate N grade 38%", "Solvent 150",
  "Sulfamic acid 100%", "Sulfamic acid 15%", "Sulfuric acid 60%", "Sulfuric acid 93%", "Sulfuric acid 98%",
  "Tetrakis (Hydroxymethyl) Phosphonium Sulfate 75%", "Tetrapotassium Pyrophosphate", "Triethylene glycol",
  "Trisodium Phosphate 5%", "Trisodium Phosphate 98%", "Urea", "Urea solution 20%"
];

export default function SDSRequestPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    details: ''
  });

  const filteredProducts = productsList.filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleProduct = (productName: string) => {
    setSelectedProducts(prev =>
      prev.includes(productName)
        ? prev.filter(p => p !== productName)
        : [...prev, productName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.company || !formData.email || selectedProducts.length === 0) {
      alert('Please fill all required fields and select at least one product');
      return;
    }
    console.log({ selectedProducts, ...formData });
    alert('Request submitted successfully! We will email the SDS to your address shortly.');
    setFormData({ fullName: '', company: '', email: '', details: '' });
    setSelectedProducts([]);
    setSearchTerm('');
  };

  return (
    <section className="min-h-screen bg-[#f5f5f7] py-32 px-4 md:px-8 lg:px-16 font-sans antialiased" style={{ color: "var(--color-dark-red)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ color: "var(--color-dark-red)" }}>
            Request <span style={{ color: "var(--color-primary-red)" }}>SDS</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(69, 10, 10, 0.7)" }}>
            Request Safety Data Sheets for our chemical products. Fill out the form below and we&apos;ll send the SDS to your email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left Column - Information */}
          <div className="lg:col-span-1 space-y-8">

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: "var(--color-dark-red)" }}>
                How it Works
              </h3>
              <ol className="space-y-3" style={{ color: "rgba(69, 10, 10, 0.8)" }}>
                <li className="flex items-start gap-3">
                  <span className="font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5" style={{ backgroundColor: "var(--color-primary-red)", color: "var(--color-white)" }}>1</span>
                  <span>Fill out the contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5" style={{ backgroundColor: "var(--color-primary-red)", color: "var(--color-white)" }}>2</span>
                  <span>Select the products you need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5" style={{ backgroundColor: "var(--color-primary-red)", color: "var(--color-white)" }}>3</span>
                  <span>Submit your request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5" style={{ backgroundColor: "var(--color-primary-red)", color: "var(--color-white)" }}>4</span>
                  <span>Receive SDS via email</span>
                </li>
              </ol>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: "var(--color-dark-red)" }}>
                Product Not Listed?
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(69, 10, 10, 0.7)" }}>
                Select &quot;Other Product&quot; from the list and provide the product name in the details section below.
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: "var(--color-dark-red)" }}>
                 General Inquiries
              </h3>
              <a href="mailto:info@pascom.com.au" className="font-semibold transition-colors text-lg" style={{ color: "var(--color-primary-red)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-dark-red)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary-red)")}>
                info@pascom.com.au
              </a>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Product Selection */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--color-dark-red)" }}>
                    Select Product(s)*
                </h2>

                <input
                  type="text"
                  placeholder="Search for a product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/40 px-0 py-2 outline-none transition-all text-base"
                  style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-dark-red)")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255, 255, 255, 0.2)")}
                />

                <div className="py-4 h-84 overflow-y-auto custom-scrollbar flex flex-wrap gap-2 content-start">
                  {filteredProducts.map((product) => {
                    const isSelected = selectedProducts.includes(product);
                    return (
                      <button
                        key={product}
                        type="button"
                        onClick={() => toggleProduct(product)}
                        className="text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap text-white"
                        style={
                          isSelected
                            ? { backgroundColor: "var(--color-primary-red)", boxShadow: "0 4px 12px rgba(198, 40, 40, 0.3)", border: "1px solid rgba(255, 255, 255, 0.3)" }
                            : { backgroundColor: "rgba(69, 10, 10, 0.3)", border: "1px solid rgba(69, 10, 10, 0.4)" }
                        }
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = "rgba(69, 10, 10, 0.5)";
                            e.currentTarget.style.borderColor = "rgba(69, 10, 10, 0.6)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = "rgba(69, 10, 10, 0.3)";
                            e.currentTarget.style.borderColor = "rgba(69, 10, 10, 0.4)";
                          }
                        }}
                      >
                        {product}
                      </button>
                    );
                  })}
                  {filteredProducts.length === 0 && (
                    <p className="text-sm p-4 w-full" style={{ color: "rgba(69, 10, 10, 0.5)" }}>No products found matching &quot;{searchTerm}&quot;</p>
                  )}
                </div>

                {selectedProducts.length > 0 && (
                  <div className="mt-4 text-sm font-semibold flex items-center gap-2" style={{ color: "var(--color-primary-red)" }}>
                    <i className="fa-solid fa-check-circle"></i> {selectedProducts.length} product(s) selected
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="p-8" style={{ border: "2px solid var(--color-primary-red)", borderRadius: "8px", backgroundColor: "rgba(198, 40, 40, 0.02)" }}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--color-dark-red)" }}>
                 Contact Details*
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "rgba(198, 40, 40, 0.9)" }}>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-transparent px-0 py-2 outline-none transition-all text-base"
                      style={{ color: "var(--color-dark-red)", borderBottom: "2px solid var(--color-primary-red)" }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-dark-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-primary-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "rgba(198, 40, 40, 0.9)" }}>Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-transparent px-0 py-2 outline-none transition-all text-base"
                      style={{ color: "var(--color-dark-red)", borderBottom: "2px solid var(--color-primary-red)" }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-dark-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-primary-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "rgba(198, 40, 40, 0.9)" }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent px-0 py-2 outline-none transition-all text-base"
                      style={{ color: "var(--color-dark-red)", borderBottom: "2px solid var(--color-primary-red)" }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-dark-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-primary-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold mb-2 block" style={{ color: "rgba(198, 40, 40, 0.9)" }}>Additional Details</label>
                    <textarea
                      rows={4}
                      placeholder="If 'Other Product' is selected, please specify the product name here..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-transparent px-0 py-2 outline-none transition-all text-base resize-none"
                      style={{ color: "var(--color-dark-red)", borderBottom: "2px solid var(--color-primary-red)" }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-dark-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-primary-red)", e.currentTarget.style.borderBottomWidth = "2px")}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: "var(--color-primary-red)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(198, 40, 40, 0.4)", e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(198, 40, 40, 0.3)", e.currentTarget.style.transform = "translateY(0)")}
                >
                  <i className="fa-solid fa-paper-plane"></i> Submit Request
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    setFormData({ fullName: '', company: '', email: '', details: '' });
                    setSelectedProducts([]);
                    setSearchTerm('');
                  }}
                  className="text-white font-bold px-8 py-4 rounded-lg transition-all"
                  style={{ backgroundColor: "rgba(69, 10, 10, 0.3)", border: "1px solid rgba(69, 10, 10, 0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(69, 10, 10, 0.5)", e.currentTarget.style.borderColor = "rgba(69, 10, 10, 0.6)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(69, 10, 10, 0.3)", e.currentTarget.style.borderColor = "rgba(69, 10, 10, 0.4)")}
                >
                  Clear Form
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(69, 10, 10, 0.15);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 40, 40, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 40, 40, 0.6);
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(69, 10, 10, 0.5);
        }
      `}} />
    </section>
  );
}
