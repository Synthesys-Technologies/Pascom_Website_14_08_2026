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
import ChemicalDrop from "@/components/Animation";
import CaseStudies2 from "@/components/Test";
import MolecularAnimation from "@/components/Test2";
import ChemicalBondsProcess from "@/components/Test3";
import FeaturesList2 from "@/components/Test4";
import LatestUpdate from "@/components/LatestUpdate";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutSection />
      {/* <WhatWeDo /> */}
      {/* <FeaturesList /> */}
      <FeaturesList2 />
      {/* <WhyChooseUs /> */}
      <PartnersMarquee />
      <SplitShowcase />
      {/* <CaseStudies /> */}
      <CaseStudies2 />
      <AccreditationsStrip />
      <FeaturedProducts />
      <LatestNews />
      {/* <CoreValues /> */}
      <CtaBand />
      <FAQ />
      {/* <Blog /> */}
      {/* <LatestUpdate /> */}
      {/* <WhyChooseUsGrid/>
      <LookingForProducts />
      <TopIndustries />
      <FAQ />
      <Blog /> */}
      <ChemicalBondsProcess />
    </main>
  );
}
