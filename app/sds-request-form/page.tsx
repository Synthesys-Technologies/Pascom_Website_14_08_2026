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
    <section className="min-h-screen bg-red-950 py-28 px-4 md:px-8 lg:px-16 font-sans antialiased text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            Request <span className="text-red-400">SDS</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Request Safety Data Sheets for our chemical products. Fill out the form below and we&apos;ll send the SDS to your email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left Column - Information */}
          <div className="lg:col-span-1 space-y-8">

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                How it Works
              </h3>
              <ol className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</span>
                  <span>Fill out the contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</span>
                  <span>Select the products you need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</span>
                  <span>Submit your request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5">4</span>
                  <span>Receive SDS via email</span>
                </li>
              </ol>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                Product Not Listed?
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                Select &quot;Other Product&quot; from the list and provide the product name in the details section below.
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                 General Inquiries
              </h3>
              <a href="mailto:info@pascom.com.au" className="text-red-300 hover:text-red-200 font-semibold transition-colors text-lg">
                info@pascom.com.au
              </a>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Product Selection */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    Select Product(s)*
                </h2>

                <input
                  type="text"
                  placeholder="Search for a product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 px-0 py-2 outline-none focus:border-red-400 transition-all text-base"
                />

                <div className="py-4 h-84 overflow-y-auto custom-scrollbar flex flex-wrap gap-2 content-start">
                  {filteredProducts.map((product) => {
                    const isSelected = selectedProducts.includes(product);
                    return (
                      <button
                        key={product}
                        type="button"
                        onClick={() => toggleProduct(product)}
                        className={`text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                          isSelected
                            ? 'bg-red-600 text-white shadow-lg border border-red-500'
                            : 'bg-red-900/30 text-white/80 hover:text-white hover:bg-red-900/50 border border-red-700/40 hover:border-red-600/60'
                        }`}
                      >
                        {product}
                      </button>
                    );
                  })}
                  {filteredProducts.length === 0 && (
                    <p className="text-sm text-white/50 p-4 w-full">No products found matching &quot;{searchTerm}&quot;</p>
                  )}
                </div>

                {selectedProducts.length > 0 && (
                  <div className="mt-4 text-sm text-red-300 font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-check-circle"></i> {selectedProducts.length} product(s) selected
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                 Contact Details*
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-red-300 font-semibold mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 px-0 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-red-300 font-semibold mb-2 block">Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 px-0 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm text-red-300 font-semibold mb-2 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 px-0 py-2 outline-none focus:border-red-400 transition-all text-base"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm text-red-300 font-semibold mb-2 block">Additional Details</label>
                    <textarea
                      rows={4}
                      placeholder="If 'Other Product' is selected, please specify the product name here..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-transparent border-b border-red-700/40 text-white placeholder-white/40 px-0 py-2 outline-none focus:border-red-400 transition-all text-base resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
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
                  className="bg-red-900/30 hover:bg-red-900/50 text-white font-bold px-8 py-4 rounded-lg transition-all border border-red-700/40 hover:border-red-600/60"
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
      `}} />
    </section>
  );
}
