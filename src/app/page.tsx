"use client";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FoundationalPillars from "@/components/sections/FoundationalPillars";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import BlueprintContact from "@/components/sections/BlueprintContact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <FoundationalPillars />
        <ProcessTimeline />
        <BlueprintContact />
      </main>

      {/* ─── Footer ─── */}
      <Footer />
    </>
  );
}
