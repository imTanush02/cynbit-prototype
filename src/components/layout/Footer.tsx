"use client";

import Image from "next/image";
import { companyInfo } from "@/data/cynbitContent";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const exploreLinks = [
  { label: "About Us", href: "#company" },
  { label: "Core Team", href: "#team" },
  { label: "Our Services", href: "#pillars" },
  { label: "Product Suite", href: "#products" },
];

const impactLinks = [
  { label: "Social Initiatives", href: "#initiatives" },
  { label: "Expert Blog", href: "#blog" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Contact Support", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cynbit",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cynbit",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/cynbit",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/cynbit",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F3F7F7] dark:bg-[#04080A] border-t border-gray-200/80 dark:border-white/10 transition-colors">
      {/* ─── Main Footer Content ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ─── Column 1: Logo, Socials, Contact ─── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo */}
            <Image
              src="/logo.svg"
              alt="Cynbit Technologies"
              width={120}
              height={50}
              className="h-12 w-auto object-contain dark:brightness-125"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] hover:bg-[#006067]/10 dark:hover:bg-[#2DD4BF]/10 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#006067] dark:text-[#2DD4BF] flex-shrink-0" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#006067] dark:text-[#2DD4BF] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <a
                  href="tel:+918947962667"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                >
                  +91 89479 62667
                </a>
                <a
                  href="tel:+917891209777"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                >
                  +91 78912 09777
                </a>
                <a
                  href="tel:+918302337367"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                >
                  +91 83023 37367
                </a>
              </div>
            </div>
          </div>

          {/* ─── Column 2: Explore Links ─── */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 3: Impact Links ─── */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-5">
              Impact
            </h4>
            <ul className="space-y-3">
              {impactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 4: Stay Connected ─── */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-5">
              Stay Connected
            </h4>

            {/* Newsletter Subscribe Card */}
            <div className="space-y-3">
              <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                Subscribe to our Briefing
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Join 25k+ architects receiving our weekly technical and
                strategic deep-dives.
              </p>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-8 w-full rounded-full text-xs font-bold uppercase tracking-wider bg-[#006067] hover:bg-[#004e54] dark:bg-[#00747c] dark:hover:bg-[#006067] text-white shadow-md shadow-[#006067]/25 hover:shadow-lg hover:shadow-[#006067]/35 active:scale-[0.98] transition-all duration-200"
              >
                Join the Newsletter
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Headquarters Card */}
            <div className="rounded-2xl bg-[#EBF2F2] dark:bg-[#0C171C] border border-gray-200/60 dark:border-white/[0.08] p-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#006067] dark:text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">
                    Headquarters
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    32/115 Pratap Nagar, Jaipur
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Rajasthan, 302033
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-gray-200/80 dark:border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
              © 2026 {companyInfo.name}. Engineered for Optimism.
            </p>
            <div className="flex items-center gap-6">
              {["Terms", "Cookies", "Navigation"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

