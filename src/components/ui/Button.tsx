"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#006067] hover:bg-[#004e54] text-white dark:bg-[#007b83] dark:hover:bg-[#006067] shadow-md shadow-[#006067]/20 hover:shadow-lg hover:shadow-[#006067]/30 active:scale-[0.98]",
  secondary:
    "bg-white dark:bg-[#0C171C] text-[#006067] dark:text-[#2DD4BF] border border-[#006067]/20 dark:border-white/10 hover:bg-[#006067]/5 dark:hover:bg-white/[0.06] shadow-sm active:scale-[0.98]",
  ghost:
    "bg-transparent text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] hover:bg-[#006067]/5 dark:hover:bg-white/[0.06] active:scale-[0.98]",
  outline:
    "bg-transparent text-[#006067] dark:text-[#2DD4BF] border border-[#006067]/35 dark:border-[#2DD4BF]/40 hover:bg-[#006067]/10 dark:hover:bg-[#2DD4BF]/10 active:scale-[0.98]",
};

const sizeStyles: Record<string, string> = {
  sm: "h-8 px-4 text-xs rounded-full",
  md: "h-10 px-5 text-sm rounded-full",
  lg: "h-12 px-7 text-base rounded-full",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 leading-none whitespace-nowrap",
        "font-semibold transition-all duration-200 cursor-pointer select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006067]/40 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
