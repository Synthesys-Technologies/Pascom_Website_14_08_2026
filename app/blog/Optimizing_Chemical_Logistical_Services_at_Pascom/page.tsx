'use client';

import Image from 'next/image';
import Link from 'next/link';

const articleData = {
  category: "News",
  date: "6.23.2024",
  title: "Exploring the Top 10 Chemicals Used in the Water Treatment Industry",
  author: "Pascom Commercial",
  heroImage: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
};

const relatedPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    excerpt: "At Pascom, we understand that efficient chemical logistical operations are essential to keeping your supply chain moving without delays.",
    category: "Logistics",
    image: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    readTime: "4 min read",
    link:"/Optimizing_Chemical_Logistical_Services_at_Pascom"
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom",
    excerpt: "In the dynamic world of oil and gas exploration and refining, having a dependable partner is critical.",
    category: "Oil & Gas",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    readTime: "5 min read",
    link:"/Why_Giants_in_the_Oil_and_Gas_Industry_Choose_Pascom_as_Their_Chemical_Supplier"
  },
  {
    id: "3",
    title: "Rapid Growth of the Mining Industry in WA",
    excerpt: "Western Australia has long been a powerhouse in the mining sector, driving immense demand for specialized chemicals.",
    category: "Mining",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    readTime: "6 min read",
    link:"/The_Rapid_Growth_of_the_Mining_Industry_in_Western_Australia_and_Its_Benefits_for _Chemical_Manufacturing"
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals in Water Treatment",
    excerpt: "Ensuring safe and clean water is essential for public health and industrial operations worldwide. Here are the leading solutions.",
    category: "Water Treatment",
    image: "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    readTime: "7 min read",
    link:"/Exploring_the_Top_10_Chemicals_Used_in_the_Water_Treatment_Industry"
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    excerpt: "When it comes to ensuring robust agricultural production, reliable formulations are necessary for high yield.",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    link:"/Top_Chemical_Suppliers_for_the_Agriculture_Industry"
  },
];

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-red-600 selection:text-white pb-24">

      {/* =========================================
          HERO HEADER SECTION
          ========================================= */}
      <section className="w-full bg-[#db0000]  py-24 lg:py-32 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Meta Tags */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-white/20 border border-red-400/50 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
              {articleData.category}
            </span>
            <span className="bg-white/10 border border-red-300/30 text-white/90 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
              {articleData.date}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight max-w-5xl drop-shadow-lg"
           style={{ color: "var(--color-white)" }}
          >
            {articleData.title}
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 lg:mb-24">
        <div className="w-full h-96 md:h-125 lg:h-150 relative overflow-hidden rounded-2xl shadow-2xl border-4 border-red-200 group">
          <Image
            src={articleData.heroImage}
            alt={articleData.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT GRID (Sidebar + Body)
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* --- LEFT SIDEBAR (Sticky) --- */}
        <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-24 order-2 lg:order-1">

          {/* Current Article Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span className="text-red-700 text-xs font-bold uppercase tracking-wider">
                Current Article
              </span>
            </div>
            <h3 className="text-red-800 text-lg font-bold leading-snug tracking-tight">
              {articleData.title}
            </h3>
          </div>

          {/* Share Box */}
          <div className="bg-red-600 hover:bg-red-700 p-6 rounded-lg flex flex-col gap-4 shadow-lg transition-all duration-300">
            <span className="text-white text-sm font-bold tracking-wide">
              Share This Article
            </span>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors font-bold">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpascom.com.au%2Fchoose-pascom-as-their-chemical-supplier%2F"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f text-sm"></i>
                </a>
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors font-bold">
                <a
                  target="_blank"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpascom.com.au%2Fchoose-pascom-as-their-chemical-supplier%2F&amp;text=Optimizing%20Chemical%20Logistical%20Services%20at%20Pascom"
                >
                  <i className="fa-solid fa-times text-sm"></i>
                </a>
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors font-bold">
                <a
                  href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpascom.com.au%2Fchoose-pascom-as-their-chemical-supplier%2F&amp;title=Optimizing%20Chemical%20Logistical%20Services%20at%20Pascom"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors font-bold">
                <a
                  href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpascom.com.au%2Fchoose-pascom-as-their-chemical-supplier%2F&amp;title=Optimizing%20Chemical%20Logistical%20Services%20at%20Pascom"
                  target="_blank"
                >
                  <i className="fa-brands fa-pinterest-p text-sm"></i>
                </a>
              </button>
            </div>
          </div>

        </aside>

        {/* --- RIGHT CONTENT (Article Body) --- */}
        <article className="lg:col-span-9 flex flex-col text-gray-800 order-1 lg:order-2 space-y-8">

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-700 first-letter:text-2xl first-letter:font-bold first-letter:text-red-600">
            Ensuring safe and clean water is essential for public health and environmental sustainability. Behind the scenes, a variety of chemicals play crucial roles in the water treatment process, each serving specific functions to purify and sanitize water supplies. Let&apos;s delve into the top 10 chemicals that are integral to the water treatment industry:
          </p>

          {/* The Top 10 List */}
          <div className="space-y-8">
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">1. Chlorine</h3>
              <p className="text-base leading-relaxed text-gray-700">Perhaps the most widely recognized chemical used for water disinfection, chlorine effectively kills bacteria, viruses, and other harmful microorganisms present in water sources. Its ability to provide residual disinfection throughout distribution systems makes it indispensable in ensuring water safety.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">2. Chlorine Dioxide</h3>
              <p className="text-base leading-relaxed text-gray-700">Known for its strong oxidizing properties, chlorine dioxide is effective against a broad spectrum of pathogens, including bacteria, viruses, and protozoa. It is also used for controlling tastes, odors, and disinfection by-products in water.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">3. Aluminum Sulfate (Alum)</h3>
              <p className="text-base leading-relaxed text-gray-700">Alum is a common coagulant used in water treatment to clarify water by causing fine particles to clump together and settle out. It helps in the removal of suspended solids, turbidity, and some dissolved substances.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">4. Polyaluminum Chloride (PAC)</h3>
              <p className="text-base leading-relaxed text-gray-700">Similar to alum, PAC is a coagulant used for flocculation and sedimentation in water treatment processes. It offers advantages such as lower dosage requirements and reduced sludge production compared to traditional coagulants.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">5. Polyelectrolytes</h3>
              <p className="text-base leading-relaxed text-gray-700">These are high molecular weight polymers used as flocculants in water treatment. Polyelectrolytes help in aggregating fine particles into larger flocs, which are easier to remove through filtration or sedimentation.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">6. Activated Carbon</h3>
              <p className="text-base leading-relaxed text-gray-700">Often used in water treatment systems for its ability to adsorb organic compounds, disinfection by-products, and some heavy metals. Activated carbon improves water quality by reducing odors, tastes, and certain chemical contaminants.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">7. Sodium Hypochlorite</h3>
              <p className="text-base leading-relaxed text-gray-700">A liquid chlorine disinfectant used in water treatment for its effectiveness in killing pathogens and controlling microbial growth. It is safer and easier to handle than gaseous chlorine.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">8. Sodium Hydroxide (Caustic Soda)</h3>
              <p className="text-base leading-relaxed text-gray-700">Used for pH adjustment in water treatment processes, sodium hydroxide helps stabilize pH levels and facilitates coagulation and precipitation of impurities.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">9. Sulfuric Acid</h3>
              <p className="text-base leading-relaxed text-gray-700">This strong acid is employed in water treatment for pH adjustment, chemical cleaning of water treatment equipment, and as a coagulant aid in some applications.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">10. Hydrogen Peroxide</h3>
              <p className="text-base leading-relaxed text-gray-700">Used as an oxidizing agent in water treatment to eliminate tastes, odors, and organic contaminants. Hydrogen peroxide also aids in the oxidation of iron and manganese in water supplies.</p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-8 my-8">
            <h2 className="text-3xl text-red-700 font-bold mb-6">Choosing the Right Chemicals for Water Treatment</h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700">
              <p>
                The selection and use of these chemicals in water treatment are carefully regulated to ensure compliance with health and environmental standards. Water treatment facilities and professionals must consider factors such as water quality parameters, dosage requirements, safety protocols, and environmental impacts when choosing and applying these chemicals.
              </p>
              <p>
                In conclusion, the effective use of these top 10 chemicals in water treatment processes is fundamental to providing safe, clean, and reliable drinking water to communities worldwide. Their roles in disinfection, coagulation, pH adjustment, and contaminant removal contribute significantly to maintaining public health and sustainable water management practices. As advancements in technology and environmental awareness continue to evolve, so too will the methods and chemicals used in water treatment, ensuring continued improvements in water quality and safety for future generations.
              </p>
            </div>
          </div>

          {/* Author Tag */}
          <div className="border-t-2 border-b-2 border-red-200 py-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold flex-shrink-0">
              <i className="fa-solid fa-flask text-2xl"></i>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">{articleData.author}</p>
              <p className="text-sm text-gray-500 font-medium">Articles: 27</p>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex flex-col md:flex-row justify-between gap-6 my-12">
            <Link href="#" className="flex-1 p-6 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-all duration-300 group">
              <span className="text-xs text-red-600 font-bold uppercase tracking-wider block mb-2 group-hover:text-red-700">← Previous Post</span>
              <p className="text-red-800 font-bold leading-snug group-hover:text-red-900">Top Chemical Suppliers for the Agriculture Industry</p>
            </Link>
            <Link href="#" className="flex-1 p-6 bg-red-50 border border-red-200 rounded-lg text-right hover:bg-red-100 hover:border-red-300 transition-all duration-300 group">
              <span className="text-xs text-red-600 font-bold uppercase tracking-wider block mb-2 group-hover:text-red-700">Next Post →</span>
              <p className="text-red-800 font-bold leading-snug group-hover:text-red-900">The Rapid Growth of the Mining Industry in WA</p>
            </Link>
          </div>

          {/* =========================================
              LEAVE A REPLY (Comment Form)
              ========================================= */}
          <div className="mt-16 pt-12 border-t-2 border-red-200">
            <h3 className="text-3xl text-red-700 font-bold mb-2">Leave a Reply</h3>
            <p className="text-sm text-gray-500 mb-8">Your email address will not be published. Required fields are marked <span className="text-red-600 font-bold">*</span></p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Website (Optional)</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Add Comment *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Share your thoughts..."
                  className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-4 h-4 text-red-600 bg-white border-2 border-red-300 rounded focus:ring-2 focus:ring-red-200 cursor-pointer"
                />
                <label htmlFor="save-info" className="text-sm text-gray-700 cursor-pointer">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i> Post Comment
              </button>
            </form>
          </div>

        </article>
      </section>

      {/* =========================================
          RELATED POSTS GRID
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10 pt-20 border-t-2 border-red-200">
        <h2 className="text-4xl text-red-700 font-bold mb-12">Related Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              href={"/blog"+post.link}
              className="group bg-red-50 border-2 border-red-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-red-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-red-500 text-xs font-bold">•</span>
                  <span className="text-gray-500 text-xs font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-red-700 text-lg font-bold leading-snug tracking-tight group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-grow line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
