"use client";

import Image from "next/image";
import Link from "next/link";

const articleData = {
  category: "News",
  date: "June 23, 2024",
  title: "Top Chemical Suppliers for the Agriculture Industry",
  author: "Pascom Commercial",
  // Agriculture hero image from your previous data
  heroImage:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop",
};

const relatedPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    excerpt:
      "At Pascom, we understand that efficient chemical logistical operations are essential to keeping your supply chain moving without delays.",
    category: "Logistics",
    date: "August 28, 2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    readTime: "4 min read",
    link: "/Optimizing_Chemical_Logistical_Services_at_Pascom",
  },
  {
    id: "2",
    title:
      "Why Giants in the Oil and Gas Industry Choose Pascom as Their Chemical Supplier",
    excerpt:
      "In the dynamic world of oil and gas exploration and refining, having a dependable partner is critical.",
    category: "Oil & Gas",
    date: "June 23, 2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    readTime: "5 min read",
    link: "/Why_Giants_in_the_Oil_and_Gas_Industry_Choose_Pascom_as_Their_Chemical_Supplier",
  },
  {
    id: "3",
    title:
      "The Rapid Growth of the Mining Industry in Western Australia and Its Benefits for Chemical Manufacturing",
    excerpt:
      "Western Australia has long been a powerhouse in the mining sector, driving immense demand for specialized chemicals.",
    category: "Mining",
    date: "June 23, 2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    readTime: "6 min read",
    link: "/The_Rapid_Growth_of_the_Mining_Industry_in_Western_Australia_and_Its_Benefits_for _Chemical_Manufacturing",
  },
];

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-red-600 selection:text-white pb-24">
      {/* =========================================
          HERO HEADER SECTION
          ========================================= */}
      <section className="w-full bg-[#db0000] py-24 lg:py-32 mb-12 border-b-4 border-red-600">
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
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight max-w-5xl drop-shadow-lg"
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
        <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-32 order-2 lg:order-1">
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
          <p className="text-lg leading-relaxed text-gray-700 first-letter:text-3xl first-letter:font-bold first-letter:text-red-600">
            When it comes to ensuring robust agricultural production, choosing
            the right chemical suppliers is crucial. The agriculture industry
            relies heavily on specialized chemicals that enhance crop growth,
            protect against pests and diseases, and optimize soil health. Here,
            we highlight some of the best chemical suppliers known for their
            quality products and reliable service in supporting farmers and
            agribusinesses worldwide.
          </p>

          {/* The Top Suppliers List */}
          <div className="space-y-8 mt-4">
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                1. Pascom Chemicals
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-3">
                Pascom Chemicals stands out as a leading supplier in the
                agriculture sector, offering a comprehensive range of innovative
                solutions tailored to meet the diverse needs of farmers. With
                decades of experience and a commitment to excellence, Pascom
                provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>
                  <strong>Fertilizers:</strong> Tailored formulations that
                  promote nutrient uptake and improve soil fertility.
                </li>
                <li>
                  <strong>Crop Protection:</strong> Effective pesticides and
                  herbicides to combat pests and weeds while ensuring crop
                  safety.
                </li>
                <li>
                  <strong>Soil Conditioners:</strong> Products that enhance soil
                  structure, water retention, and overall productivity.
                </li>
                <li>
                  <strong>Specialty Chemicals:</strong> Customized solutions for
                  specific agricultural challenges, backed by rigorous quality
                  standards and environmental responsibility.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                2. AgroChem Inc.
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-3">
                Known for their extensive research and development in
                agricultural chemicals, AgroChem Inc. offers a wide array of
                products designed to maximize crop yield and quality. Their
                portfolio includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>
                  <strong>Plant Growth Regulators:</strong> Products that
                  stimulate plant growth and development for optimal yield.
                </li>
                <li>
                  <strong>Biopesticides:</strong> Environmentally friendly
                  alternatives to traditional pesticides, promoting sustainable
                  farming practices.
                </li>
                <li>
                  <strong>Adjuvants:</strong> Formulations that enhance the
                  effectiveness of pesticides and herbicides, improving
                  application efficiency.
                </li>
                <li>
                  <strong>Nutrient Management:</strong> Solutions for balanced
                  fertilization and nutrient uptake management.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                3. Syngenta
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-3">
                Syngenta is a global leader in agricultural technology and crop
                protection solutions, providing innovative products that help
                farmers grow more food sustainably. Their offerings include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>
                  <strong>Seed Treatments:</strong> Protecting seeds from pests
                  and diseases while promoting early plant health and vigor.
                </li>
                <li>
                  <strong>Crop Protection:</strong> Herbicides, fungicides, and
                  insecticides that ensure crop safety and maximize yield
                  potential.
                </li>
                <li>
                  <strong>Digital Farming Solutions:</strong> Precision
                  agriculture tools that optimize farm management practices
                  through data-driven insights.
                </li>
                <li>
                  <strong>Biological Solutions:</strong> Harnessing natural
                  processes to enhance crop health and resilience, reducing
                  reliance on synthetic chemicals.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                4. BASF Agricultural Solutions
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-3">
                BASF offers a comprehensive range of agricultural solutions,
                including crop protection, seed treatments, and digital farming
                technologies. Their products focus on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>
                  <strong>Sustainable Agriculture:</strong> Innovations that
                  support biodiversity, soil health, and water management.
                </li>
                <li>
                  <strong>Integrated Pest Management:</strong> Solutions that
                  integrate biological, cultural, and chemical methods to
                  control pests effectively.
                </li>
                <li>
                  <strong>Crop Efficiency:</strong> Products that enhance
                  nutrient uptake and use efficiency, improving crop performance
                  and yield stability.
                </li>
                <li>
                  <strong>Farm Management Tools:</strong> Digital tools and
                  agronomic expertise to help farmers make informed decisions
                  for sustainable agriculture practices.
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-8 my-8">
            <h2 className="text-3xl text-red-700 font-bold mb-6">
              Choosing the Right Supplier
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700">
              <p>
                When selecting a chemical supplier for your agricultural needs,
                consider factors such as product quality, reliability of supply,
                technical support, and commitment to sustainability. Each of
                these suppliers exemplifies excellence in providing cutting-edge
                solutions that meet the challenges of modern agriculture while
                promoting environmental stewardship and farmer profitability.
              </p>
              <p>
                Whether youâ€™re a small-scale farmer or a large agribusiness,
                partnering with a trusted chemical supplier like Pascom
                Chemicals ensures you have access to the best products and
                support to maximize your agricultural productivity and
                sustainability goals. Explore your options, engage with
                suppliers, and make informed decisions that benefit your farm
                operations and contribute to global food security.
              </p>
            </div>
          </div>

          {/* Author Tag */}
          <div className="border-t-2 border-b-2 border-red-200 py-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold flex-shrink-0">
              <i className="fa-solid fa-flask text-2xl"></i>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">
                {articleData.author}
              </p>
              <p className="text-sm text-gray-500 font-medium">Articles: 27</p>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex flex-col md:flex-row justify-between gap-6 my-12">
            <Link
              href="#"
              className="flex-1 p-6 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-all duration-300 group"
            >
              <span className="text-xs text-red-600 font-bold uppercase tracking-wider block mb-2 group-hover:text-red-700">
                â† Previous Post
              </span>
              <p className="text-red-800 font-bold leading-snug group-hover:text-red-900">
                Best Place for all your chemical needs in Perth Australia
              </p>
            </Link>
            <Link
              href="#"
              className="flex-1 p-6 bg-red-50 border border-red-200 rounded-lg text-right hover:bg-red-100 hover:border-red-300 transition-all duration-300 group"
            >
              <span className="text-xs text-red-600 font-bold uppercase tracking-wider block mb-2 group-hover:text-red-700">
                Next Post â†’
              </span>
              <p className="text-red-800 font-bold leading-snug group-hover:text-red-900">
                Exploring the Top 10 Chemicals Used in the Water Treatment
                Industry
              </p>
            </Link>
          </div>

          {/* =========================================
              LEAVE A REPLY (Comment Form)
              ========================================= */}
          <div className="mt-16 pt-12 border-t-2 border-red-200">
            <h3 className="text-3xl text-red-700 font-bold mb-2">
              Leave a Reply
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Your email address will not be published. Required fields are
              marked <span className="text-red-600 font-bold">*</span>
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-transparent border-b border-red-700/40 text-gray-900 placeholder-gray-500 px-0 py-2 outline-none focus:border-red-400 transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">
                  Add Comment *
                </label>
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
                <label
                  htmlFor="save-info"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
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
              target="_blank"
              href={"/blog" + post.link}
              className="group bg-red-50 border-2 border-red-200 overflow-hidden flex flex-col transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:-translate-y-1"
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
                  <span className="text-red-500 text-xs font-bold">â€¢</span>
                  <span className="text-gray-500 text-xs font-medium">
                    {post.date}
                  </span>
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

