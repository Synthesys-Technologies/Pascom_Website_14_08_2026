import OurTeamCard from "./components/OurTeamCard";
import ProcessSection from "./components/Step";
import AboutUs from "./components/WhatWEDo";

export default function page() {
  return (
    <div className="bg-white">
      <AboutUs />
      <ProcessSection />
      <OurTeamCard />
    </div>
  );
}
