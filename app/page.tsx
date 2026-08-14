import Hero from "@/components/Hero";
import AboutSection from "@/components/Sats";
import FeaturesList from "@/components/Section3";
import PartnersMarquee from "@/components/Section5";
import SplitShowcase from "@/components/Section6";
import CaseStudies from "@/components/Section7";
import FeaturedProducts from "@/components/Section9";
import CtaBand from "@/components/Section10";
import AccreditationsStrip from "@/components/Section8";
import LatestNews from "@/components/Latest";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import StackingSections from "@/components/Practise";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutSection />
      {/* <WhatWeDo /> */}
      <FeaturesList />
      {/* <WhyChooseUs /> */}
      <PartnersMarquee />
      <SplitShowcase />
      <CaseStudies />
      <AccreditationsStrip />
      <FeaturedProducts />
      <LatestNews />
      {/* <CoreValues /> */}
      <CtaBand />
      <FAQ />
      <Blog />
      {/* <WhyChooseUsGrid/>
      <LookingForProducts />
      <TopIndustries />
      <FAQ />
      <Blog /> */}
      {/* <StackingSections/>  */}
    </main>
  );
}
