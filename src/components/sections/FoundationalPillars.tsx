"use client";

import * as LucideIcons from "lucide-react";
import { pillars, products, bitElevate } from "@/data/cynbitContent";
import { cn } from "@/lib/utils";

// Dynamic icon resolver
function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const LucideIcon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
}

const accentMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  cyan: {
    border: "border-[#006067]/30 dark:border-[#2DD4BF]/30",
    text: "text-[#006067] dark:text-[#2DD4BF]",
    bg: "bg-[#006067]/10 dark:bg-[#2DD4BF]/15",
    glow: "group-hover:shadow-[#006067]/10",
  },
  blue: {
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    glow: "group-hover:shadow-blue-500/10",
  },
  emerald: {
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "group-hover:shadow-emerald-500/10",
  },
};

export default function FoundationalPillars() {
  return (
    <section
      id="pillars"
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-3">
            Architectural Domains
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            Foundational Pillars
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Four engineering disciplines converging to deliver end-to-end digital transformation.
          </p>
        </div>

        {/* ─── Bento Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={cn(
                "group relative h-full flex flex-col justify-between rounded-3xl p-6",
                "bg-white dark:bg-[#0C171C] border border-gray-200/80 dark:border-white/10",
                "shadow-sm hover:shadow-xl hover:shadow-[#006067]/10 dark:hover:border-white/20",
                "transition-all duration-300"
              )}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#006067]/10 dark:bg-[#2DD4BF]/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  <Icon name={pillar.icon} className="w-6 h-6 text-[#006067] dark:text-[#2DD4BF]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#006067] dark:text-[#2DD4BF] mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  {pillar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                  {pillar.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-gray-50 dark:bg-white/[0.05] border border-gray-200/70 dark:border-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Products Suite ─────────────────────────────── */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-3">
              Proprietary SaaS
            </p>
            <h2 id="products" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Product Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => {
              const accent = accentMap[product.accentColor] ?? accentMap.cyan;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={cn(
                    "group h-full flex flex-col justify-between rounded-3xl p-7",
                    "bg-white dark:bg-[#0C171C] border border-gray-200/80 dark:border-white/10",
                    "shadow-sm hover:shadow-xl hover:shadow-[#006067]/10 dark:hover:border-white/20",
                    "transition-all duration-300"
                  )}
                >
                  {/* Icon + Name */}
                  <div>
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-5",
                        accent.bg
                      )}
                    >
                      <Icon name={product.icon} className={cn("w-6 h-6", accent.text)} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-1.5">
                      {product.name}
                    </h3>
                    <p className={cn("text-xs font-bold mb-3.5", accent.text)}>
                      {product.tagline}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 pt-5 border-t border-gray-100 dark:border-white/[0.06]">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300"
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            accent.text.replace("text-", "bg-")
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── BitElevate ─────────────────────────────────── */}
        <div className="mt-16" id="bitelevate">
          <div
            className={cn(
              "relative rounded-3xl p-8 md:p-12 overflow-hidden",
              "bg-gradient-to-br from-[#E6F4F1] via-white to-[#F0FAF8] dark:from-[#0B1519] dark:via-[#0C171C] dark:to-[#060D10]",
              "border border-[#006067]/20 dark:border-white/10 shadow-lg shadow-[#006067]/5"
            )}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#006067]/[0.08] dark:from-[#2DD4BF]/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              {/* Left */}
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-[#006067]/10 dark:bg-[#2DD4BF]/15 flex items-center justify-center mb-5">
                  <Icon name={bitElevate.icon} className="w-7 h-7 text-[#006067] dark:text-[#2DD4BF]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white mb-2">
                  {bitElevate.name}
                </h3>
                <p className="text-sm text-[#006067] dark:text-[#2DD4BF] font-bold mb-4">
                  {bitElevate.tagline}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  {bitElevate.description}
                </p>
              </div>

              {/* Right — Features Grid */}
              <div className="grid grid-cols-2 gap-3 flex-shrink-0 w-full lg:w-80">
                {bitElevate.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#006067] dark:bg-[#2DD4BF] flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
