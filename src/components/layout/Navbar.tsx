"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";
import { navLinks } from "@/data/cynbitContent";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  isAuditMode?: boolean;
  onToggleAudit?: () => void;
  onOpenBlueprint?: () => void;
}

export default function Navbar({
  isAuditMode,
  onToggleAudit,
  onOpenBlueprint,
}: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
        "backdrop-blur-md border-b",
        isScrolled
          ? "bg-[#FBFDFD]/90 dark:bg-[#060D10]/90 border-gray-200/80 dark:border-white/10 shadow-md shadow-[#006067]/5"
          : "bg-[#FBFDFD]/80 dark:bg-[#060D10]/80 border-gray-200/50 dark:border-white/[0.06]"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group py-2">
          <Image
            src="/logo.svg"
            alt="Cynbit Technologies"
            width={140}
            height={55}
            className="h-10 sm:h-11 w-auto object-contain transition-all duration-200 group-hover:opacity-90 dark:brightness-125 dark:drop-shadow-[0_0_12px_rgba(45,212,191,0.25)]"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "inline-flex items-center gap-1.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                    openDropdown === link.label
                      ? "text-[#006067] dark:text-[#2DD4BF]"
                      : "text-gray-700 hover:text-[#006067] dark:text-gray-300 dark:hover:text-[#2DD4BF]"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200 opacity-70",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 py-2 rounded-2xl bg-white dark:bg-[#0C171C] border border-gray-200/80 dark:border-white/10 shadow-xl shadow-[#006067]/10 dark:shadow-black/60 animate-in fade-in slide-in-from-top-1 duration-150">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] hover:bg-[#006067]/5 dark:hover:bg-white/[0.05] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-[#006067] dark:text-gray-300 dark:hover:text-[#2DD4BF] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right Actions: Theme Toggle + CTA Button */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={cn(
              "relative z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border",
              "bg-gray-100 hover:bg-gray-200/80 text-gray-700 border-gray-200/90",
              "dark:bg-white/[0.08] dark:hover:bg-white/[0.15] dark:text-amber-300 dark:border-white/10",
              "active:scale-95 shadow-sm"
            )}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#006067] rotate-0 transition-transform duration-300" />
            )}
          </button>

          {/* Join Us CTA Button - Matches screenshot */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenBlueprint) {
                e.preventDefault();
                onOpenBlueprint();
              }
            }}
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "h-10 px-6 rounded-full text-xs font-bold uppercase tracking-wider",
              "bg-[#006067] hover:bg-[#004e54] text-white",
              "dark:bg-[#00747c] dark:hover:bg-[#006067]",
              "shadow-md shadow-[#006067]/25 hover:shadow-lg hover:shadow-[#006067]/35",
              "active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
            )}
          >
            Join Us
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="lg:hidden absolute top-20 inset-x-0 bg-white/95 dark:bg-[#0A1014]/95 backdrop-blur-2xl border-b border-gray-200/80 dark:border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:text-[#006067] dark:hover:text-[#2DD4BF] rounded-lg transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children?.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className="pl-7 pr-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] rounded-lg transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </React.Fragment>
            ))}

            <div className="flex items-center gap-3 pt-4 mt-2 border-t border-gray-200/80 dark:border-white/10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleTheme();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full text-xs font-semibold border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#006067]" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center h-10 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#006067] text-white"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
