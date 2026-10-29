"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  Terminal,
  Activity,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { metrics, companyInfo } from "@/data/cynbitContent";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onOpenBlueprint?: () => void;
}

export default function HeroSection({ onOpenBlueprint }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Ambient background glow matching the light mint & deep teal palette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-10 right-10 md:right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#006067]/[0.07] dark:from-[#2DD4BF]/[0.08] via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-[350px] h-[350px] bg-gradient-radial from-[#FEEAD2]/40 dark:from-[#78350F]/20 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Subtle geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#006067 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── Left Column: Hero Content & Messaging ─────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* The Optimistic Architect Badge - Exactly matching screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEEAD2] dark:bg-[#78350F]/40 border border-[#FCD3A1] dark:border-[#92400E]/50 shadow-sm mb-6 transition-transform hover:scale-[1.02]">
              <span className="w-2 h-2 rounded-full bg-[#4A2800] dark:bg-[#FED7AA]" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#4A2800] dark:text-[#FED7AA]">
                The Optimistic Architect
              </span>
            </div>

            {/* Main Headline - Bold, tight, with italic teal punchline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.06] mb-6">
              Architecting
              <br />
              the future with
              <br />
              <span className="italic text-[#006067] dark:text-[#2DD4BF] font-extrabold">
                AI automation.
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-9">
              Cynbit Technologies architects the digital future with{" "}
              <a
                href="#pillars"
                className="text-[#006067] dark:text-[#2DD4BF] font-semibold underline underline-offset-4 decoration-[#006067]/40 dark:decoration-[#2DD4BF]/40 hover:decoration-[#006067] transition-all"
              >
                autonomous AI agents
              </a>
              , custom software development, and scalable business platforms.
              Based in Jaipur, Rajasthan, we bridge the gap between technical
              precision and global business growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenBlueprint) {
                    e.preventDefault();
                    onOpenBlueprint();
                  }
                }}
                className={cn(
                  "inline-flex items-center justify-center gap-2.5",
                  "h-12 px-7 rounded-full text-sm font-bold tracking-wide",
                  "bg-[#006067] hover:bg-[#004e54] text-white",
                  "dark:bg-[#007b83] dark:hover:bg-[#006067]",
                  "shadow-lg shadow-[#006067]/25 hover:shadow-xl hover:shadow-[#006067]/35",
                  "active:scale-[0.98] transition-all duration-200 cursor-pointer"
                )}
              >
                <span>Start Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pillars"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "h-12 px-6 rounded-full text-sm font-semibold",
                  "bg-white dark:bg-[#0C171C] text-[#006067] dark:text-[#2DD4BF]",
                  "border border-[#006067]/20 dark:border-[#2DD4BF]/25",
                  "hover:bg-[#006067]/5 dark:hover:bg-white/[0.05]",
                  "shadow-sm transition-all duration-200 cursor-pointer"
                )}
              >
                <span>Explore Disciplines</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#006067]" />
              </a>
            </div>

            {/* Metric counters matching the palette */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg pt-6 border-t border-gray-200/80 dark:border-white/10">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Orbital Radar Interactive Visual ─────────── */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              
              {/* Outer soft orbit circle */}
              <div className="absolute inset-0 rounded-full border border-[#006067]/15 dark:border-[#2DD4BF]/20 animate-spin-slow pointer-events-none" />
              
              {/* Middle orbit circle */}
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#006067]/15 dark:border-[#2DD4BF]/15 pointer-events-none" />
              
              {/* Center White Disc Pedestal */}
              <div className="w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] rounded-full bg-white dark:bg-[#0C171C] shadow-2xl shadow-[#006067]/15 dark:shadow-black/60 border border-[#006067]/10 dark:border-white/10 flex flex-col items-center justify-center transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#006067]/10 dark:bg-[#2DD4BF]/15 flex items-center justify-center text-[#006067] dark:text-[#2DD4BF] mb-1.5 animate-pulse-subtle">
                  <Bot className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                  Cynbit Core
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    Active
                  </span>
                </div>
              </div>

              {/* ─── Floating Card 1: Top-Right (Automation Card) ──────── */}
              <div className="absolute -top-3 -right-2 sm:top-2 sm:right-0 bg-white/95 dark:bg-[#0E191E]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl shadow-[#006067]/10 dark:shadow-black/60 border border-gray-100 dark:border-white/10 flex items-center gap-3 animate-float select-none">
                <div className="w-9 h-9 rounded-xl bg-[#006067] text-white flex items-center justify-center shadow-md">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#006067] dark:text-[#2DD4BF]">
                    Automation
                  </div>
                  {/* Progress Bar */}
                  <div className="w-28 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden my-1">
                    <div className="h-full bg-[#006067] dark:bg-[#2DD4BF] rounded-full w-[95%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400">
                    <span>Efficiency</span>
                    <span className="font-bold text-[#006067] dark:text-[#2DD4BF]">95%</span>
                  </div>
                </div>
              </div>

              {/* ─── Floating Pill 2: Mid-Left (Sky Blue Lightbulb Badge) ── */}
              <div className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 w-11 h-11 rounded-full bg-[#DCEBFC] dark:bg-[#1E3A5F] text-[#1E40AF] dark:text-[#93C5FD] shadow-lg shadow-blue-500/10 flex items-center justify-center animate-float-reverse select-none">
                <Lightbulb className="w-5 h-5" />
              </div>

              {/* ─── Floating Card 3: Bottom-Left (Runtime Status) ──────── */}
              <div className="absolute -bottom-4 left-4 sm:bottom-2 sm:left-4 bg-white/95 dark:bg-[#0E191E]/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl shadow-[#006067]/10 dark:shadow-black/60 border border-gray-100 dark:border-white/10 flex items-center gap-3 animate-float select-none">
                <div className="w-8 h-8 rounded-xl bg-[#FEEAD2] dark:bg-[#78350F]/50 text-[#B45309] dark:text-[#FCD3A1] flex items-center justify-center">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Runtime
                  </div>
                  <div className="text-xs font-bold text-[#006067] dark:text-[#2DD4BF] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Active now</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
