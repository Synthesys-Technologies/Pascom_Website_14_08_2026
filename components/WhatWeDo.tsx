"use client";

import { useEffect } from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconBg: string;
  colSpan?: string;
  rowSpan?: string;
  layout?: "vertical" | "horizontal";
  isDark?: boolean;
}

const services: ServiceCard[] = [
  {
    id: "toll-blending",
    title: "Toll Blending",
    description:
      "Pascom offers expert custom chemical blending services, precisely tailored to meet each client's unique needs with quality and precision.",
    icon: "fa-blender",
    bgColor: "from-gray-900 to-gray-900",
    iconBg: "bg-white/10",
    colSpan: "md:col-span-2 xl:col-span-2",
    rowSpan: "xl:row-span-2",
    isDark: true,
  },
  {
    id: "chemical-formulation",
    title: "Chemical Formulation",
    description:
      "Crafting custom formulations for diverse industries, meeting unique needs effectively.",
    icon: "fa-vial",
    bgColor: "bg-white",
    iconBg: "bg-red-50",
  },
  {
    id: "commodity-specialty",
    title: "Commodity & Specialty",
    description:
      "Supplying a broad range of industrial chemicals and specialty formulations.",
    icon: "fa-boxes-stacked",
    bgColor: "bg-white",
    iconBg: "bg-red-50",
  },
  {
    id: "offshore-tank",
    title: "Offshore Tank Hire",
    description:
      "Secure chemical storage solutions designed specifically for the unique needs of offshore operations, ensuring safety.",
    icon: "fa-water",
    bgColor: "bg-white",
    iconBg: "bg-white",
    colSpan: "md:col-span-2 xl:col-span-2",
    layout: "horizontal",
  },
  {
    id: "ibc-supplying",
    title: "IBC Supplying",
    description:
      "Reliable Intermediate Bulk Containers (IBCs) for safe chemical storage and transport, ensuring durability and efficiency across all operations.",
    icon: "fa-cube",
    bgColor: "bg-white",
    iconBg: "bg-emerald-50",
    rowSpan: "xl:row-span-2",
  },
  {
    id: "chemical-logistics",
    title: "Chemical Logistics",
    description:
      "Safe chemical transportation and storage with an emphasis on compliance.",
    icon: "fa-truck-fast",
    bgColor: "bg-white",
    iconBg: "bg-orange-50",
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    description:
      "Comprehensive testing to ensure exceptional quality and full compliance.",
    icon: "fa-microscope",
    bgColor: "bg-white",
    iconBg: "bg-purple-50",
  },
  {
    id: "leak-proof",
    title: "Leak Proof Testing",
    description:
      "Rigorous testing to ensure safety and integrity for containers.",
    icon: "fa-shield-halved",
    bgColor: "bg-white",
    iconBg: "bg-red-50",
  },
  {
    id: "analytical",
    title: "Analytical Services",
    description:
      "Pascom delivers precise chemical analysis services to effectively support quality control and ensure full regulatory compliance.",
    icon: "fa-chart-pie",
    bgColor: "bg-white",
    iconBg: "bg-white/10",
    colSpan: "md:col-span-2 xl:col-span-2",
    isDark: true,
  },
  {
    id: "quarantine",
    title: "Quarantine Inspection",
    description:
      "Dedicated team for larger volumes and diverse cargo processing.",
    icon: "fa-clipboard-check",
    bgColor: "bg-white",
    iconBg: "bg-yellow-50",
  },
  {
    id: "particle-analyzing",
    title: "Particle Analyzing",
    description:
      "Introducing advanced particle analysis services, featuring cutting-edge technology designed for water-glycol samples in the offshore industry.",
    icon: "fa-atom",
    bgColor: "bg-white",
    iconBg: "bg-teal-50",
    colSpan: "md:col-span-2 xl:col-span-2",
    layout: "horizontal",
  },
  {
    id: "oxygen-analysing",
    title: "Oxygen Analysing",
    description:
      "Specialized de-oxygenation services and precise measurement of low dissolved oxygen levels using advanced techniques & equipment.",
    icon: "fa-wind",
    bgColor: "bg-white",
    iconBg: "bg-sky-50",
    colSpan: "md:col-span-2 xl:col-span-2",
    layout: "horizontal",
  },
];

export default function WhatWeDo() {
  useEffect(() => {
    // Load FontAwesome
    const link = document.createElement("link");
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
            Exceeding Industry
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">
              {" "}
              Standards.
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            In addition to our core competency in chemical manufacturing, we
            offer a diverse range of services aimed at exceeding industry
            standards and ensuring customer satisfaction.
          </p>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className={`
                  group rounded-2xl overflow-hidden flex flex-col justify-between relative
                  ${
                    service.bgColor.includes("from-") ||
                    service.bgColor.includes("to-")
                      ? `bg-linear-to-br ${service.bgColor}`
                      : service.bgColor
                  }
                  ${
                    service.bgColor.includes("gray-900") ||
                    service.bgColor.includes("from-gray-900")
                      ? "text-white border-0"
                      : "border border-slate-200/60 text-gray-900"
                  }
                  p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-fit
                `}
              >
                {/* Animated Background Elements for Dark Cards */}
                {(service.bgColor.includes("gray-900") ||
                  service.bgColor.includes("from-gray-900")) && (
                  <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
                )}

                {service.layout === "horizontal" ? (
                  // Horizontal Layout
                  <>
                    <div className="flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl ${service.iconBg} ${
                          service.bgColor.includes("gray-900") ||
                          service.bgColor.includes("from-gray-900")
                            ? "text-white"
                            : "text-red-600"
                        } flex items-center justify-center text-xl mb-4 md:mb-6 relative z-10`}
                      >
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 relative z-10">
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed max-w-md relative z-10 ${
                          service.bgColor.includes("gray-900") ||
                          service.bgColor.includes("from-gray-900")
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                    <a
                      href="#"
                      className={`shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all relative z-10 ${
                        service.bgColor.includes("gray-900") ||
                        service.bgColor.includes("from-gray-900")
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-slate-50 border border-slate-200 text-gray-900 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
                      }`}
                    >
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </>
                ) : (
                  // Vertical Layout
                  <>
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 rounded-xl ${service.iconBg} ${
                          service.bgColor.includes("gray-900") ||
                          service.bgColor.includes("from-gray-900")
                            ? "text-white"
                            : "text-red-600"
                        } flex items-center justify-center text-xl mb-6`}
                      >
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base leading-relaxed ${
                          service.bgColor.includes("gray-900") ||
                          service.bgColor.includes("from-gray-900")
                            ? "text-slate-300"
                            : "text-slate-500"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                    <a
                      href="#"
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors relative z-10 ${
                        service.bgColor.includes("gray-900") ||
                        service.bgColor.includes("from-gray-900")
                          ? "text-white hover:text-red-300"
                          : "text-gray-900 group-hover:text-red-600"
                      }`}
                    >
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
