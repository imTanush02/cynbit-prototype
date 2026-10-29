"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FoundationalPillars from "@/components/sections/FoundationalPillars";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import { companyInfo } from "@/data/cynbitContent";
import { MapPin, Mail, ArrowRight } from "lucide-react";

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

        {/* ─── Inline CTA Section Strip ───────────────────────── */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-[#006067] via-[#005157] to-[#00383C] dark:from-[#0C1A20] dark:via-[#091418] dark:to-[#050B0D] text-white border border-[#006067]/30 dark:border-white/10 shadow-2xl shadow-[#006067]/20">
              
              {/* Subtle ambient decorative lighting */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 dark:bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FEEAD2]/15 dark:from-[#2DD4BF]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
                  <span>Jaipur AI & Engineering Hub</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
                  Ready to Architect Your Next Breakthrough?
                </h2>
                
                <p className="text-sm sm:text-base text-white/85 dark:text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
                  Partner with Cynbit to engineer autonomous AI agents, full-stack enterprise cloud systems, and scalable digital architectures with 24-hour turnaround.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`mailto:${companyInfo.email}?subject=Project%20Inquiry%20-%20Cynbit`}
                    className="inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full text-sm font-bold bg-white text-[#006067] hover:bg-[#F0FAF8] shadow-lg shadow-black/15 active:scale-98 transition-all duration-200"
                  >
                    <span>Initiate Project Sync</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-sm font-semibold border border-white/30 text-white hover:bg-white/10 active:scale-98 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Modern Light/Dark Footer ───────────────────────────── */}
      <footer className="py-12 bg-[#F3F7F7] dark:bg-[#04080A] border-t border-gray-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Cynbit Technologies"
                width={120}
                height={48}
                className="h-8 w-auto object-contain dark:brightness-125"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400 pl-3 border-l border-gray-300 dark:border-gray-800">
                Jaipur, Rajasthan
              </span>
            </div>

            {/* Location & Email */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#006067] dark:text-[#2DD4BF]" />
                {companyInfo.location}
              </span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#006067] dark:text-[#2DD4BF]" />
                {companyInfo.email}
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2026 {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
