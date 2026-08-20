"use client";

import Image from "next/image";
import Link from "next/link";

const articleData = {
  category: "News",
  date: "June 23, 2024",
  title:
    "Why Giants in the Oil and Gas Industry Choose Pascom as Their Chemical Supplier",
  author: "Pascom Commercial",
  heroImage:
    "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-768x512.jpg",
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
  {
    id: "3",
    title:
      "Exploring the Top 10 Chemicals Used in the Water Treatment Industry",
    excerpt:
      "Ensuring safe and clean water is essential for public health and industrial operations worldwide. Here are the leading solutions.",
    category: "Water Treatment",
    date: "June 23, 2024",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    readTime: "7 min read",
    link: "/Exploring_the_Top_10_Chemicals_Used_in_the_Water_Treatment_Industry",
  },
];

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-red-600 selection:text-white pb-24">
      {/* =========================================
          HERO HEADER SECTION
          ========================================= */}
      <section className="w-full bg-[#db0000] py-24 lg:py-32 mb-12">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight max-w-5xl drop-shadow-lg"
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
            In the dynamic world of oil and gas exploration and production, the
            choice of chemical suppliers plays a crucial role in ensuring
            operational efficiency, safety, and environmental responsibility.
            Pascom has emerged as a preferred partner for many giants in the oil
            and gas sector, offering a compelling array of reasons why industry
            leaders trust us with their chemical supply needs.
          </p>

          {/* The Article Points */}
          <div className="space-y-8">
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Commitment to Quality and Innovation
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                At Pascom, we uphold stringent standards of quality and
                innovation, which resonate deeply with our oil and gas partners.
                Our products are meticulously formulated and rigorously tested
                to meet and exceed industry requirements. Whether itâ€™s corrosion
                inhibitors, demulsifiers, or drilling fluids, our chemicals are
                designed to enhance performance, prolong equipment life, and
                optimize operational processes.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Proven Track Record
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                With over two decades of experience in chemical manufacturing,
                Pascom has built a solid reputation for reliability and
                consistency. We have successfully supported numerous oil and gas
                projects, from exploration to production and refining. Our track
                record of delivering on time and within specifications
                underscores our commitment to operational excellence.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Tailored Solutions
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                We understand that every oil and gas operation is unique, with
                specific challenges and requirements. Pascom prides itself on
                offering tailored solutions that address the distinct needs of
                our partners. Whether itâ€™s developing customized blends of
                chemicals or providing technical support for complex
                applications, we collaborate closely with our clients to ensure
                optimal outcomes.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Environmental Stewardship
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                In an era of heightened environmental awareness, sustainability
                is a top priority for both Pascom and our oil and gas partners.
                We prioritize eco-friendly practices throughout our
                manufacturing processes and offer products that help minimize
                environmental impact. From biodegradable chemicals to solutions
                that enhance water management and reduce emissions, Pascom
                contributes to our clientâ€™s sustainability goals.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Global Reach and Support
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Operating in Perth, Australia, Pascom maintains a robust
                logistical network that spans the globe. This ensures prompt
                delivery and dependable supply chain management, crucial for
                supporting large-scale oil and gas operations operating in
                diverse geographical locations.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-2xl text-red-700 font-bold mb-3">
                Partnership Approach
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                At Pascom, we view our relationships with oil and gas giants as
                true partnerships. We strive to foster trust, transparency, and
                collaboration in every interaction. Our dedicated team of
                experts is committed to providing responsive customer service,
                technical expertise, and ongoing support to ensure our partnersâ€™
                success.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-8 my-8">
            <h2 className="text-3xl text-red-700 font-bold mb-6">Conclusion</h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700">
              <p>
                The choice of Pascom as a preferred chemical supplier by giants
                in the oil and gas industry is grounded in our unwavering
                commitment to quality, innovation, sustainability, and
                customer-centric values. As we continue to innovate and expand
                our capabilities, we look forward to further strengthening our
                partnerships and contributing to the continued success and
                growth of our valued clients in the oil and gas sector. Trust
                Pascom for your chemical supply needs and experience the
                difference in quality and service that sets us apart.
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
                The Rapid Growth of the Mining Industry in Western Australia and
                Its Benefits for Chemical Manufacturing
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
                Optimizing Chemical Logistical Services at Pascom
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
              href={"/blog"+post.link}
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


