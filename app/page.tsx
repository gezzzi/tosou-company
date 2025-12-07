"use client";

import { useEffect, useState } from "react";
import { ContactSection } from "./components/contact";
import { CompanySection } from "./components/company";
import { AboutSection } from "./components/about";
import { FeaturesSection } from "./components/features";
import { AreaSection } from "./components/area";
import { FlowSection } from "./components/flow";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { ServicesSection } from "./components/services";
import { SiteFooter } from "./components/site-footer";
import { WorksSection } from "./components/works";

export default function Page() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-[#0f172a] bg-white">
      <Navbar heroLoaded={heroLoaded} />
      <Hero heroLoaded={heroLoaded} />
      <main className="relative -mt-16 space-y-24 bg-transparent pb-24 md:space-y-28 md:pb-32">
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <WorksSection />
        <AreaSection />
        <FlowSection />
        <CompanySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
