"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "Toll Blending",
    badge: "Core",
    desc: "Pascom provides high-quality custom chemical blending services tailored to meet the specific needs of each client.",
    longDesc:
      "As a Perth-based chemical manufacturing company, Pascom offers specialized toll blending services to meet the diverse needs of our clients. Our toll blending services provide businesses with a cost-effective and efficient solution for producing customized chemical formulations without the need for significant investment in new facilities or equipment.We work closely with our clients to understand their specific blending requirements, utilizing our state-of-the-art equipment and expertise to achieve precise and consistent results.Whether you need to scale up production, create new formulations, or simply optimize existing products, our dedicated team ensures that every batch meets the highest quality standards and regulatory requirements. With a commitment to reliability and flexibility, Pascom’s toll blending services support a wide range of industries, helping clients achieve their chemical processing goals with exceptional quality and efficiency with great peace of mind.",
    img: "	https://pascom.com.au/wp-content/uploads/2024/08/iStock-1307245429-1024x683.jpg",
    color: "#1A4D66", // Deep Teal
    rating: "4.9",
    tags: ["Custom", "Precision"],
  },
  {
    id: 2,
    title: "Chemical Formulation",
    badge: "Custom",
    desc: "Pascom specializes in crafting customized chemical formulations designed for the unique needs of various industries.",
    longDesc:
      "At Pascom, we specialize in custom chemical formulation tailored to diverse industry needs. Our expertise allows us to develop precise formulations that meet specific requirements, whether it’s enhancing existing products, creating new blends, or optimizing production processes.We collaborate closely with clients to understand their exact formulation goals, utilizing advanced equipment and industry knowledge to ensure consistent quality and compliance with regulatory standards.With our commitment to innovation and reliability, Pascom delivers solutions that empower businesses to achieve their chemical formulation objectives efficiently and effectively.",
    img: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1354700049-1024x683.jpg",
    color: "#2A3B4C", // Dark Slate
    rating: "4.8",
    tags: ["Industry", "Unique"],
  },
  {
    id: 3,
    title: "Commodity & Specialty",
    badge: "Supply",
    desc: "Pascom supplies a range of industrial chemicals, including specialty formulations tailored to meet industry needs.",
    longDesc:
      "Pascom specializes in producing a wide range of Commodity & Specialty chemicals tailored to meet diverse industrial needs. Our Perth-based manufacturing facility is equipped to deliver high-quality chemical solutions that include essential commodities and specialized formulations.We work closely with clients to understand their specific requirements, ensuring our products meet the highest standards of performance and reliability. Whether you need standard commodities or custom specialty chemicals, Pascom is committed to providing efficient and effective solutions that support your business objectives.Our dedication to quality and flexibility ensures that we can meet the unique demands of various industries with precision and consistency.",
    img: "https://pascom.com.au/wp-content/uploads/2024/08/0-11-1024x683.jpg",
    color: "#4A3424", // Dark Brown
    rating: "4.7",
    tags: ["Industrial", "Bulk"],
  },
  {
    id: 4,
    title: "IBC Supplying",
    badge: "Storage",
    desc: "Pascom supplies high-quality IBC containers that are designed for secure chemical storage and transportation.",
    longDesc:
      "Pascom excels in IBC (Intermediate Bulk Container) supplying, offering reliable solutions tailored to diverse industrial needs. From standard IBCs to customized configurations, our Perth-based operations ensure prompt delivery and exceptional quality. We collaborate closely with clients to understand their specific requirements, providing flexible options that meet regulatory standards and operational efficiency.Whether you need to scale up storage capacity or streamline logistics, Pascom’s commitment to reliability and customer satisfaction ensures seamless integration into your supply chain.",
    img: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1278934193-768x513.jpg",
    color: "#214E34", // Forest Green
    rating: "4.9",
    tags: ["Containers", "Secure"],
  },
  {
    id: 5,
    title: "Chemical Logistics",
    badge: "Transit",
    desc: "Pascom ensures safe chemical transportation and storage with a focus on safety, compliance, and efficiency.",
    longDesc:
      "Pascom specializes in chemical logistics, providing tailored solutions to meet diverse industrial needs. Based in Perth, our expertise ensures efficient and reliable transportation and storage of chemical products.We work closely with clients to optimize supply chain efficiency, offering flexible logistics solutions that meet regulatory standards and operational requirements.Whether you require warehousing, transportation, or distribution services, Pascom delivers comprehensive solutions with a focus on safety, reliability, and customer satisfaction.",
    img: "https://pascom.com.au/wp-content/uploads/2024/08/iStock-1924474256-1024x683.jpg",
    color: "#2C3A5A", // Dark Indigo
    rating: "4.8",
    tags: ["Transport", "Safety"],
  },
  {
    id: 6,
    title: "Offshore Tank Hire",
    badge: "Marine",
    desc: "Pascom provides secure chemical storage solutions that are customized for the complexities of offshore operations.",
    longDesc:
      "Pascom offers specialized Offshore Tank Hire services tailored to diverse industrial needs. Based in Perth, our comprehensive solutions ensure efficient transportation and storage of liquids offshore.We provide a range of tank sizes and configurations to meet specific project requirements, supported by our commitment to safety, reliability, and regulatory compliance, despite the fact of short term or long term projects.Pascom’s Offshore Tank Hire services deliver flexible and cost-effective solutions to support your offshore activities with confidence and efficiency.",
    img: "https://pascom.com.au/wp-content/uploads/2026/02/DSC7200-1024x683.jpg",
    color: "#102E4A", // Deep Ocean Blue
    rating: "4.9",
    tags: ["Offshore", "Hire"],
  },
  {
    id: 7,
    title: "Laboratory Services",
    badge: "Testing",
    desc: "We offer comprehensive chemical testing and analysis services to ensure quality and compliance.",
    longDesc:
      "Pascom provides specialized Chemical Laboratory Services tailored to diverse industrial needs.Located in Perth, our state-of-the-art facilities offer comprehensive testing and analysis to ensure product quality and regulatory compliance.We collaborate closely with clients to develop customized testing protocols and provide accurate, timely results. Whether you need routine testing, product development support, or regulatory compliance verification, Pascom’s dedicated team delivers reliable and efficient laboratory services. Our commitment to excellence ensures that your chemical products meet the highest standards of quality and safety.",
    img: "https://pascom.com.au/wp-content/uploads/2024/07/0-40-1024x683.jpg",
    color: "#382B47", // Deep Purple
    rating: "5.0",
    tags: ["Testing", "Quality"],
  },
  {
    id: 8,
    title: "Leak Proof Testing",
    badge: "Safety",
    desc: "Pascom conducts rigorous testing to ensure the integrity and leak-proof safety of chemical containers.",
    longDesc:
      "Pascom offers specialized Leak Proof Testing services tailored to diverse industrial needs.Based in Perth, our dedicated facilities ensure precise testing and analysis to guarantee product integrity and regulatory compliance.We work closely with clients to develop customized testing protocols and provide accurate, timely results. Whether for routine testing, product development support, or regulatory compliance verification, Pascom’s experienced team delivers reliable and efficient Leak Proof Testing services. Our commitment to excellence ensures that your products meet the highest standards of quality and safety.",
    img: "https://pascom.com.au/wp-content/uploads/2024/08/leak-proof-1024x683.png",
    color: "#5A2A2A", // Crimson Slate
    rating: "4.8",
    tags: ["Integrity", "Inspection"],
  },
  {
    id: 9,
    title: "Analytical Services",
    badge: "QC",
    desc: "Pascom delivers precise chemical analysis to support quality control and regulatory compliance needs.",
    longDesc:
      "Pascom provides specialized Chemical Analytical Services tailored to diverse industrial needs. Based in Perth, our advanced laboratory facilities offer comprehensive testing and analysis to ensure product quality and regulatory compliance.We collaborate closely with clients to develop customized testing protocols and deliver accurate, timely results. Whether you require routine analysis, product development support, or regulatory compliance verification, Pascom’s dedicated team delivers reliable and efficient Chemical Analytical Services.Our commitment to excellence ensures that your chemical products consistently meet the highest standards of quality and safety.",
    img: "https://pascom.com.au/wp-content/uploads/2024/09/image-1024x683.png",
    color: "#1B4958", // Dark Cyan
    rating: "4.9",
    tags: ["Analysis", "Compliance"],
  },
  {
    id: 10,
    title: "Quarantine Inspection",
    badge: "Verify",
    desc: "We’ve enhanced our quarantine inspection with a new platform and dedicated team for larger volumes and diverse cargo.",
    longDesc:
      "Pascom specializes in Quarantine Inspection services tailored to diverse industrial needs. Based in Perth, we offer thorough inspection protocols to ensure compliance with regulatory standards.Our dedicated team utilizes advanced techniques and equipment to provide accurate assessments and timely results. Whether you’re importing goods or need local compliance checks, Pascom’s commitment to excellence guarantees reliable and efficient Quarantine Inspection services.We work closely with clients to safeguard against potential risks, ensuring the smooth flow of goods while maintaining the highest standards of safety and regulatory compliance.",
    img: "https://pascom.com.au/wp-content/uploads/2024/07/0-40-1024x683.jpg",
    color: "#3E422C", // Olive Drab
    rating: "4.7",
    tags: ["Cargo", "Dedicated"],
  },
  {
    id: 11,
    title: "Particle Analyzing",
    badge: "Tech",
    desc: "Introducing advanced particle analysis for water-glycol samples in offshore oil and gas, using cutting-edge technology.",
    longDesc:
      "We are thrilled to announce the expansion of our services to include advanced particle analysis, now available with exceptional precision. Our cutting-edge particle counting system is specifically designed for bottle samples, including water-based hydraulic fluids (Water-Glycol) used in the offshore oil & gas industry.This high-tech system boasts automation, impressive accuracy, repeatability, and features like rapid purging and back-flushing. Integrated with sophisticated software, it ensures comprehensive analysis and compliance with established quality standards.Our skilled chemists are prepared to tackle a diverse range of particle analysis tasks across industries such as oil and gas, materials science. Whether you’re focused on research and development or product compliance for subsea applications, our advanced particle analysis solutions are here to deliver precise, reliable, and actionable insights to elevate your projects.",
    img: "	https://pascom.com.au/wp-content/uploads/2024/08/iStock-1184908200-1024x683.jpg",
    color: "#233038", // Charcoal Blue
    rating: "4.9",
    tags: ["Advanced", "Offshore"],
  },
  {
    id: 12,
    title: "Oxygen Analyzing",
    badge: "Precise",
    desc: "Pascom delivers precise chemical analysis to support quality control and regulatory compliance needs.",
    longDesc:
      "We provide specialized product de-oxygenation services and precise measurement of very low dissolved oxygen (DO) levels to meet your specific needs. Our advanced techniques ensure effective removal of oxygen from your samples, while our state-of-the-art equipment accurately measures even the smallest concentrations of dissolved oxygen.In addition to our comprehensive de-oxygenation services, we also offer the option to hire Orbispheres, renowned for their accuracy and reliability in DO measurement.Whether you require these services for research, quality control, or any other application, we are equipped to deliver accurate results and support your needs with our expert solutions.",
    img: "https://pascom.com.au/wp-content/uploads/2024/09/New-Project-5-1-1024x683.png",
    color: "#483226", // Rust Slate
    rating: "4.8",
    tags: ["De-oxygenation", "Meters"],
  },
];

export default function ServicesHorizontal() {
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
      className="relative w-full h-screen bg-red-950 font-sans antialiased overflow-hidden text-white flex flex-col"
    >
      {/* HEADER */}
      <div className="w-full px-6 md:px-16 pt-16 md:pt-24 shrink-0">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Our Core <span className="text-red-600">Services</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base font-medium max-w-2xl">
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
          {services.map((item, index) => (
            <Link
              key={item.id}
              href={`/products-services/enquiry/${item.id}`}
              className="group relative block w-75 md:w-100 lg:w-112.5 h-[60vh] min-h-112.5 max-h-162.5 shrink-0 overflow-hidden bg-red-900/40 border border-red-700/50 hover:border-red-500/80 transition-all duration-500 cursor-pointer rounded-2xl"
              style={{
                transform:
                  index % 2 === 0 ? "translateY(-20px)" : "translateY(20px)",
              }}
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-[65%] overflow-hidden bg-black z-0">
                <div className="card-img w-[130%] h-full relative left-[-15%]">
                  <Image
                    src={item.img}
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
                    {item.badge}
                  </span>

                  {/* Chemical Drop Button */}
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300 shadow-lg rounded-full hover:scale-125 z-30 relative hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                    <i className="fa-solid fa-droplet text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                {/* Bottom Row: Title & Description */}
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium line-clamp-3">
                    {item.desc}
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
