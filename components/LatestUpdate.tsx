"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
  {
    id: "1",
    title: "Optimizing Chemical Logistical Services at Pascom",
    excerpt:
      "At Pascom, we understand that efficient chemical logistical operations are essential to keeping your supply chain moving without delays.",
    category: "Logistics",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-1-768x513.jpg",
    readTime: "4 min read",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    link: "/Optimizing_Chemical_Logistical_Services_at_Pascom",
    color: "#233038",
  },
  {
    id: "2",
    title: "Why Giants in the Oil and Gas Industry Choose Pascom",
    excerpt:
      "In the dynamic world of oil and gas exploration and refining, having a dependable partner is critical.",
    category: "Oil & Gas",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-umaraffan499-87236-1024x683.jpg",
    readTime: "5 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    link: "/Why_Giants_in_the_Oil_and_Gas_Industry_Choose_Pascom_as_Their_Chemical_Supplier",
    color: "#233038",
  },
  {
    id: "3",
    title: "Rapid Growth of the Mining Industry in WA",
    excerpt:
      "Western Australia has long been a powerhouse in the mining sector, driving immense demand for specialized chemicals.",
    category: "Mining",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-piotr-arnoldes-7862031-6109677-scaled.jpg",
    readTime: "6 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    link: "/The_Rapid_Growth_of_the_Mining_Industry_in_Western_Australia_and_Its_Benefits_for _Chemical_Manufacturing",
    color: "#233038",
  },
  {
    id: "4",
    title: "Exploring the Top 10 Chemicals in Water Treatment",
    excerpt:
      "Ensuring safe and clean water is essential for public health and industrial operations worldwide. Here are the leading solutions.",
    category: "Water Treatment",
    image:
      "https://pascom.com.au/wp-content/uploads/2024/06/pexels-pixabay-432786-768x512.jpg",
    readTime: "7 min read",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    link: "/Exploring_the_Top_10_Chemicals_Used_in_the_Water_Treatment_Industry",
    color: "#233038",
  },
  {
    id: "5",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    excerpt:
      "When it comes to ensuring robust agricultural production, reliable formulations are necessary for high yield.",
    category: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    link: "/Top_Chemical_Suppliers_for_the_Agriculture_Industry",
    color: "#233038",
  },
  {
    id: "6",
    title: "Top Chemical Suppliers for the Agriculture Industry",
    excerpt:
      "When it comes to ensuring robust agricultural production, reliable formulations are necessary for high yield.",
    category: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    link: "/Top_Chemical_Suppliers_for_the_Agriculture_Industry",
    color: "#233038",
  },
];

export default function LatestUpdate() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const progress = progressBarRef.current;

      if (!track || !section || !progress) return;

      // 1. Calculate how far the track needs to move horizontally
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      // 2. The Main Horizontal Scroll Timeline
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1, // Smooth, buttery scrub delay
          invalidateOnRefresh: true, // Recalculates on resize
        },
      });

      // 3. Progress Bar Animation
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 0.1,
        },
      });

      // 4. Parallax Image Effect inside the moving cards
      const images = gsap.utils.toArray(".card-img") as HTMLElement[];
      images.forEach((img) => {
        gsap.to(img, {
          xPercent: 30, // Moves the image slightly to the right as the card moves left
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            containerAnimation: tween, // Ties the parallax to the horizontal movement
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#f5f5f7] font-sans antialiased overflow-hidden text-white flex flex-col"
    >
      {/* HEADER */}
      <div className="w-full px-6 md:px-16 pt-16 md:pt-32 shrink-0">
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4"
          style={{ color: "var(--color-primary-red)" }}
        >
          Latest <span style={{ color: "var(--color-dark-red)" }}>Updates</span>
        </h2>
        <p
          className="text-white/70 text-sm md:text-base font-medium max-w-2xl"
          style={{ color: "var(--color-dark-red)" }}
        >
          Scroll to explore our comprehensive range of chemical solutions and
          expertise.
        </p>
      </div>

      {/* 
        HORIZONTAL SCROLL TRACK 
        This div is translated on the X axis by GSAP
      */}
      <div className="flex-1 w-full flex items-center relative z-10 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-12 px-6 md:px-16 w-max flex-nowrap items-center h-full"
        >
          {blogPosts.map((item, index) => (
            <Link
              target="_blank"
              key={item.id}
              href={"/blog" + item.link}
              className="group relative block w-75 md:w-100 lg:w-112.5 h-[60vh] min-h-112.5 max-h-162.5 shrink-0 overflow-hidden bg-red-900/40  hover:border-red-500/80 transition-all duration-500 cursor-pointer"
              style={{
                transform:
                  index % 2 === 0 ? "translateY(-20px)" : "translateY(20px)",
              }}
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-[65%] overflow-hidden bg-black z-0">
                <div className="card-img w-[130%] h-full relative left-[-30%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </div>

              {/* Thematic Cantor8-style Gradient Overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to bottom, transparent 20%, ${item.color} 60%, ${item.color} 100%)`,
                }}
              ></div>

              {/* Card Foreground Content */}
              <div className="absolute inset-0 z-20 flex flex-col p-6 md:p-8">
                {/* Top Row: Badge & Button */}
                <div className="flex justify-between items-start w-full">
                  <span className="bg-red-600/80 backdrop-blur-md border border-red-500/60 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white shadow-sm rounded">
                    {item.readTime}
                  </span>

                  {/* Chemical Drop Button */}
                  <div className="w-14 h-14 flex items-center justify-center text-white group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300 shadow-lg rounded-full hover:scale-125 z-30 relative hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                    <i className="fa-solid fa-droplet text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                {/* Bottom Row: Title & Description */}
                <div className="mt-auto">
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 tracking-tight"
                    style={{ color: "var(--color-white)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute mt-10 bottom-10 left-6 right-6 md:left-16 md:right-16 flex items-center gap-4 z-50">
        <div className="flex-1 h-0.5 bg-red-700/30 relative overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full bg-red-600 w-full origin-left scale-x-0 shadow-lg"
          ></div>
        </div>
      </div>
    </section>
  );
}
