"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidButton from "@/components/LiquidButton";
import { productsList } from "@/product_data/ProductData";

gsap.registerPlugin(ScrollTrigger);

interface ProductDetailsPageProps {
  slug?: string;
}

export default function ProductDetailsPage({ slug }: ProductDetailsPageProps) {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const product = productsList.find((p) => p.slug === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section fade-in animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // Section animations on scroll
      const productSections = document.querySelectorAll(".product-section");
      productSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  if (!product) {
    return (
      <main className="w-full min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you are looking for does not exist.
          </p>
          <LiquidButton
            onClick={() => router.push("/products-services")}
            liquidColor="var(--color-primary-red)"
            style={{
              borderColor: "var(--color-white)",
              color: "var(--color-primary-red)",
            }}
            className="text-sm font-bold gap-2"
          >
            <i className="fa-solid fa-arrow-left text-[11px]"></i>
            <span>Back to Products</span>
          </LiquidButton>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white font-sans antialiased">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[70vh] flex items-center bg-[#db0000] py-32 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Image */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200"
              style={{ height: "400px", maxHeight: "500px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1578997505550-4315498bda77?q=80&w=1000&auto=format&fit=crop"
                alt={product?.name || "Product"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ color: "var(--color-white)" }}
              >
                {product.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <LiquidButton
                  onClick={() => {}}
                  liquidColor="var(--color-primary-red)"
                  style={{
                    borderColor: "var(--color-white)",
                    color: "var(--color-primary-red)",
                    backgroundColor: "var(--color-dark-red)",
                  }}
                  className="text-sm font-bold gap-2"
                >
                  <span style={{ color: "var(--color-white)" }}>
                    Request Quote
                  </span>
                  <i
                    className="fa-solid fa-arrow-right text-[11px]"
                    style={{ color: "var(--color-white)" }}
                  ></i>
                </LiquidButton>
                <LiquidButton
                  onClick={() => {}}
                  liquidColor="var(--color-primary-red)"
                  style={{
                    borderColor: "var(--color-white)",
                    color: "var(--color-primary-red)",
                    backgroundColor: "var(--color-dark-red)",
                  }}
                  className="text-sm font-bold gap-2"
                >
                  <span>Download SDS</span>
                  <i className="fa-solid fa-download text-[11px]"></i>
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section ref={sectionRef} className="w-full py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {product?.sections
            ? product.sections.map((section, index) => {
                const isSafety = section.type === "safety";
                const isProperties =
                  section.properties && section.properties.length > 0;

                return (
                  <div
                    key={index}
                    className="product-section mb-20 pb-12 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Section Title */}
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h2>
                      {section.sub && (
                        <p
                          className="text-sm font-semibold tracking-wide uppercase"
                          style={{ color: "var(--color-primary-red)" }}
                        >
                          {section.sub}
                        </p>
                      )}
                    </div>

                    {/* Section Content */}
                    {section.content && (
                      <div className="mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </p>
                      </div>
                    )}

                    {/* Properties Grid */}
                    {isProperties && (
                      <div
                        className={`grid gap-6 ${
                          isSafety
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        }`}
                      >
                        {section.properties?.map((prop, propIndex) => (
                          <div
                            key={propIndex}
                            className="p-6 rounded-xl bg-red-50"
                          >
                            <p
                              className="text-sm font-bold uppercase tracking-wide mb-2"
                              style={{
                                color: "var(--color-primary-red)",
                              }}
                            >
                              {prop.label}
                            </p>
                            <p className="text-gray-800 font-medium">
                              {prop.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            : null}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="w-full py-24 px-6 md:px-12"
        style={{ backgroundColor: "var(--color-primary-red)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss your chemical needs and get a
            competitive quote on {product.name}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiquidButton
              onClick={() => {}}
              liquidColor="rgba(255, 255, 255, 0.8)"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "var(--color-white)",
              }}
              className="text-sm font-bold gap-2"
            >
              <span style={{ color: "var(--color-dark-red)" }}>
                Contact Sales Team
              </span>
              <i
                className="fa-solid fa-phone text-[11px]"
                style={{ color: "var(--color-dark-red)" }}
              ></i>
            </LiquidButton>
            <LiquidButton
              onClick={() => router.push("/products-services")}
              liquidColor="rgba(255, 255, 255, 0.3)"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "var(--color-white)",
              }}
              className="text-sm font-bold gap-2"
            >
              <i
                className="fa-solid fa-arrow-left text-[11px]"
                style={{ color: "var(--color-dark-red)" }}
              ></i>
              <span style={{ color: "var(--color-dark-red)" }}>
                Back to Products
              </span>
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="w-full py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Related Products
            </h2>
            <p className="text-lg text-gray-600">
              Explore other chemical solutions from our catalog
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsList.slice(0, 3).map((relatedProduct, index) => (
              <Link
                key={index}
                href={`/products-services/product/${relatedProduct.slug || "product"}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578997505550-4315498bda77?q=80&w=600&auto=format&fit=crop"
                    alt={relatedProduct.name || "Product"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <div className="mt-4 flex items-center text-red-600 font-semibold">
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
