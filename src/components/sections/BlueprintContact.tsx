"use client";

import React, { useState } from "react";
import { Phone, MapPin, AtSign, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/cynbitContent";

export default function BlueprintContact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        fullName: "",
        email: "",
        company: "",
        industry: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Top Badge & Headers ─── */}
        <div className="mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF0E3] dark:bg-[#3D2314] border border-[#F5D5B8] dark:border-[#5C3218] text-[#7A4B1A] dark:text-[#FED7AA] text-xs font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E07A2B] shrink-0" />
            <span>Project Intelligence</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-4 leading-[1.1]">
            <span className="font-serif italic font-bold">The </span>
            <span className="italic text-[#006067] dark:text-[#2DD4BF]">
              Blueprint.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Tell us what you’re building. Our team will analyze your requirements
            and prepare a tailored strategic overview before we connect.
          </p>
        </div>

        {/* ─── Two-Column Grid: Form & Info Cards ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ─── Left Side: Form Container ─── */}
          <div className="lg:col-span-7 rounded-[32px] bg-white dark:bg-[#0C171C] border border-gray-200/80 dark:border-white/[0.08] p-6 sm:p-10 shadow-xl shadow-gray-200/40 dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#F4F6F6] dark:bg-[#121F25] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:border-[#006067]/40 dark:focus:border-[#2DD4BF]/40 focus:bg-white dark:focus:bg-[#0C171C] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#F4F6F6] dark:bg-[#121F25] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:border-[#006067]/40 dark:focus:border-[#2DD4BF]/40 focus:bg-white dark:focus:bg-[#0C171C] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Company & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Organization"
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#F4F6F6] dark:bg-[#121F25] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:border-[#006067]/40 dark:focus:border-[#2DD4BF]/40 focus:bg-white dark:focus:bg-[#0C171C] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-2">
                    Industry (Optional)
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={formState.industry}
                    onChange={handleChange}
                    placeholder="e.g. Fintech, Healthcare"
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#F4F6F6] dark:bg-[#121F25] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:border-[#006067]/40 dark:focus:border-[#2DD4BF]/40 focus:bg-white dark:focus:bg-[#0C171C] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you architect your next chapter?"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#F4F6F6] dark:bg-[#121F25] text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:border-[#006067]/40 dark:focus:border-[#2DD4BF]/40 focus:bg-white dark:focus:bg-[#0C171C] focus:outline-none transition-all duration-200 resize-none min-h-[130px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="footer-cta relative w-full h-14 rounded-full bg-[#006067] dark:bg-[#00747c] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.18em] shadow-lg shadow-[#006067]/25 hover:shadow-xl hover:shadow-[#006067]/35 active:scale-[0.99] transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 animate-in zoom-in" />
                      <span>Inquiry Dispatched</span>
                    </>
                  ) : (
                    <span>Send Inquiry</span>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* ─── Right Side: Cards & Direct Contact ─── */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-4">
            {/* Top 2 Cards: 24H Response Sync & Global Delivery Hub */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: 24H Response Sync */}
              <div className="footer-hq-card rounded-[28px] p-6 bg-[#EAF0F0] dark:bg-[#0C171C] border border-gray-200/60 dark:border-white/[0.08] flex flex-col justify-between aspect-square">
                {/* Stopwatch Icon */}
                <div className="w-11 h-11 rounded-full bg-[#D6E3E3] dark:bg-[#15252D] flex items-center justify-center text-[#006067] dark:text-[#2DD4BF]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2 2" />
                    <path d="M12 2v3" />
                    <path d="M10 2h4" />
                  </svg>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight flex items-baseline">
                    <span>24</span>
                    <span className="text-base font-bold uppercase ml-0.5">
                      H
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mt-1">
                    Response Sync
                  </p>
                </div>
              </div>

              {/* Card 2: Global Delivery Hub */}
              <div className="footer-hq-card rounded-[28px] p-6 bg-[#0B5C9E] text-white flex flex-col justify-between aspect-square shadow-xl shadow-[#0B5C9E]/20">
                {/* Custom Asterisk / Spark Icon in Translucent Circle */}
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="2" />
                    {/* 6 rounded rays radiating outward */}
                    <rect x="11" y="2" width="2" height="6" rx="1" />
                    <rect x="11" y="16" width="2" height="6" rx="1" />
                    <rect
                      x="11"
                      y="2"
                      width="2"
                      height="6"
                      rx="1"
                      transform="rotate(60 12 12)"
                    />
                    <rect
                      x="11"
                      y="16"
                      width="2"
                      height="6"
                      rx="1"
                      transform="rotate(60 12 12)"
                    />
                    <rect
                      x="11"
                      y="2"
                      width="2"
                      height="6"
                      rx="1"
                      transform="rotate(120 12 12)"
                    />
                    <rect
                      x="11"
                      y="16"
                      width="2"
                      height="6"
                      rx="1"
                      transform="rotate(120 12 12)"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                    Global
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 mt-1">
                    Delivery Hub
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-6 pt-2">
              {/* Row 1: Mail Us At */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#EAF0F0] dark:bg-[#121F25] flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <AtSign className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-1">
                    Mail Us At:
                  </p>
                  <a
                    href="mailto:opportunities@cynbit.in"
                    className="text-base font-bold text-gray-900 dark:text-white hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors block"
                  >
                    opportunities@cynbit.in
                  </a>
                  <a
                    href="mailto:support@cynbit.in"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors block"
                  >
                    support@cynbit.in
                  </a>
                </div>
              </div>

              {/* Row 2: Contact Us At */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#EAF0F0] dark:bg-[#121F25] flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-1">
                    Contact Us At:
                  </p>
                  <a
                    href="tel:+918947962667"
                    className="text-base font-bold text-gray-900 dark:text-white hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors block"
                  >
                    +91 89479 62667
                  </a>
                  <a
                    href="tel:+917891209777"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#006067] dark:hover:text-[#2DD4BF] transition-colors block"
                  >
                    +91 78912 09777
                  </a>
                </div>
              </div>

              {/* Row 3: Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#EAF0F0] dark:bg-[#121F25] flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#006067] dark:text-[#2DD4BF] mb-1">
                    Address:
                  </p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    32/115 Pratap Nagar,
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Jaipur, RJ 302033
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

