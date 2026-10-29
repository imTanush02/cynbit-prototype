"use client";

import * as LucideIcons from "lucide-react";
import { processSteps } from "@/data/cynbitContent";
import { cn } from "@/lib/utils";

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

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-3">
            Engineering Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            How We Construct Digital Success
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A proven 6-step lifecycle refined across dozens of enterprise deployments.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <div
              key={step.step}
              className={cn(
                "group relative rounded-3xl p-7 h-full flex flex-col justify-between",
                "bg-white dark:bg-[#0C171C] border border-gray-200/80 dark:border-white/10",
                "shadow-sm hover:shadow-xl hover:shadow-[#006067]/10 hover:border-[#006067]/30 dark:hover:border-[#2DD4BF]/30",
                "transition-all duration-300"
              )}
            >
              <div>
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-[#006067]/15 dark:text-white/10 group-hover:text-[#006067]/35 dark:group-hover:text-[#2DD4BF]/30 transition-colors select-none font-mono">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#006067]/10 dark:bg-[#2DD4BF]/15 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon
                      name={step.icon}
                      className="w-5 h-5 text-[#006067] dark:text-[#2DD4BF]"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 dark:border-white/[0.06] flex items-center gap-2 text-[11px] font-semibold text-[#006067] dark:text-[#2DD4BF]">
                <span>Phase {step.step}</span>
                <span className="w-1 h-1 rounded-full bg-[#006067] dark:bg-[#2DD4BF]" />
                <span className="text-gray-400 font-normal">Rigorous QA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
