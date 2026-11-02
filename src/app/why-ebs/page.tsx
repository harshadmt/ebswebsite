"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  FIFTY_REASONS, 
  REASON_CATEGORIES 
} from "@/data/fiftyReasons";
import {
  Sparkles,
  ArrowRight,
  Search
} from "lucide-react";

function WhyEBSContent() {
  const searchParams = useSearchParams();
  const { openApplyModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const queryFromUrl = searchParams?.get("q") || "";
  const [inputQuery, setInputQuery] = useState<string | null>(null);
  const searchQuery = inputQuery !== null ? inputQuery : queryFromUrl;

  useEffect(() => {
    if (queryFromUrl) {
      const targetEl = document.getElementById("reasons-directory") || document.getElementById("reasons-grid");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [queryFromUrl]);

  const filteredReasons = useMemo(() => {
    return FIFTY_REASONS.filter((reason) => {
      const matchesCategory =
        selectedCategory === "all" || reason.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        reason.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reason.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reason.numberStr.includes(searchQuery.trim());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#002622] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#013e37] blur-3xl pointer-events-none opacity-60" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#ffefb3]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col gap-10">
          {/* Institutional Badge Cluster */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffefb3]/15 text-[#ffefb3] text-xs font-dm-sans uppercase font-bold tracking-wider border border-[#ffefb3]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#ffefb3]" />
              Institutional Manifesto
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#9cd1c7] text-xs font-dm-sans uppercase font-semibold tracking-wider border border-white/10">
              <span>An Initiative Under Mission Malappuram 2050</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-[#c8aa6e] font-dm-sans tracking-wide">
              <span>Learn • Build • Scale • Create Impact</span>
            </div>
          </div>

          {/* Hero Typography & Core Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-dm-sans text-xs uppercase tracking-[0.3em] text-[#ffefb3] font-bold">
                  Not Just A Degree, A Bigger Tomorrow.
                </span>
                <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  50 Powerful Reasons <br />
                  <span className="text-[#ffefb3] italic font-normal">To Choose EBS</span>
                </h1>
              </div>

              <p className="font-inter text-base sm:text-lg text-[#9cd1c7] leading-relaxed max-w-2xl">
                Building entrepreneurs for the Artificial Super Intelligence era. From Malappuram to the world, EBS delivers an immersive, research-driven, 100% residential incubator that creates sovereign founders instead of job seekers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openApplyModal("50-reasons-hero")}
                  type="button"
                  className="inline-flex items-center justify-center bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-md shadow-lg hover:bg-[#fff5d1] transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Apply for Next Cohort
                  <ArrowRight className="ml-2 w-4 h-4 text-[#002622]" />
                </button>
                <a
                  href="#reasons-grid"
                  className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 font-dm-sans font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-md backdrop-blur-sm border border-white/15 transition-all"
                >
                  Explore All 50 Reasons
                </a>
              </div>
            </div>

            {/* Campus Visual Card with Official Institutional Seal */}
            <div className="lg:col-span-4 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#013e37] group">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/assets/campus.jpg"
                    alt="EBS Institutional Campus Architecture in Malappuram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002622] via-[#002622]/40 to-transparent" />
                </div>
                <div className="p-5 relative z-10 -mt-16 bg-[#002622]/95 backdrop-blur-md rounded-b-2xl border-t border-white/10">
                  <div className="flex items-center justify-between text-xs font-dm-sans text-[#ffefb3] font-bold uppercase tracking-wider mb-1">
                    <span>EBS Residential Campus</span>
                    <span className="text-[#9cd1c7]">Malappuram</span>
                  </div>
                  <p className="font-inter text-xs text-[#9cd1c7] leading-relaxed">
                    Same education, different outcome: <strong className="text-white">Entrepreneurs.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. EXECUTIVE NUMERICAL METRICS BAR */}
      {/* ========================================================= */}
      <section className="bg-white border-y border-[#013e37]/10 py-8 px-4 sm:px-6 lg:px-12 shadow-xs">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">₹100 Cr</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              Funding Opportunities
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">₹1,000 Cr</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              Company Scale Target
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">18 Years</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              3G IRPS Research Legacy
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">100%</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              Offline & Residential
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">20+</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              Skill Certifications
            </span>
          </div>
          <div className="flex flex-col border-l-2 border-[#013e37] pl-3.5">
            <span className="font-manrope text-2xl lg:text-3xl font-extrabold text-[#002622]">100%</span>
            <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold mt-0.5">
              Merit Scholarships
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. INTERACTIVE SEARCH & CATEGORY FILTERING */}
      {/* ========================================================= */}
      <section id="reasons-directory" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Header & Live Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#013e37]/10">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-1">
                Institutional Directory
              </span>
              <h2 className="font-manrope text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002622] tracking-tight">
                Explore the 50 Reasons
              </h2>
              <p className="font-inter text-xs sm:text-sm text-[#404946] mt-1">
                Filter by pedagogical category or search specific terms like &ldquo;scholarship&rdquo;, &ldquo;funding&rdquo;, or &ldquo;AI&rdquo;.
              </p>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-[#707976] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search reasons by keyword..."
                value={searchQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#013e37]/15 text-xs font-inter text-[#002622] placeholder:text-[#707976] focus:outline-none focus:ring-2 focus:ring-[#013e37]/20 focus:border-[#013e37]"
              />
              {searchQuery && (
                <button
                  onClick={() => setInputQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-dm-sans font-semibold text-[#707976] hover:text-[#002622]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {REASON_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`relative px-4 py-2 rounded-full font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "text-[#ffefb3]"
                      : "bg-white text-[#404946] hover:bg-[#ebf6f2] hover:text-[#002622] border border-[#013e37]/10"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-reason-category-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-[#002622] rounded-full shadow-xs -z-0"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-[#ffefb3]/20 text-[#ffefb3]" : "bg-[#013e37]/8 text-[#013e37]"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Result Count Counter */}
          <div className="flex items-center justify-between text-xs font-inter text-[#707976] px-1">
            <span>
              Showing <strong className="text-[#002622] font-bold">{filteredReasons.length}</strong> of 50 reasons
              {searchQuery && ` matching &ldquo;${searchQuery}&rdquo;`}
            </span>
            <span className="hidden sm:inline font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold">
              Official EBS Document 2025–2026
            </span>
          </div>

          {/* ========================================================= */}
          {/* 4. THE 50 REASONS GRID */}
          {/* ========================================================= */}
          {filteredReasons.length === 0 ? (
            <div className="w-full bg-white rounded-2xl p-12 text-center border border-[#013e37]/10 flex flex-col items-center gap-3">
              <Search className="w-8 h-8 text-[#707976]" />
              <h3 className="font-manrope text-lg font-bold text-[#002622]">No matching reasons found</h3>
              <p className="font-inter text-xs text-[#707976] max-w-sm">
                Try searching for another keyword or switch category filter to view all 50 reasons.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setInputQuery("");
                }}
                className="mt-2 px-5 py-2 rounded-full bg-[#002622] text-[#ffefb3] font-dm-sans text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredReasons.map((reason) => (
                  <motion.div
                    key={reason.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group relative bg-white rounded-2xl p-6 border border-[#013e37]/10 hover:border-[#013e37]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Number & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-10 h-10 rounded-xl bg-[#002622] text-[#ffefb3] flex items-center justify-center font-mono text-sm font-bold shadow-xs">
                          {reason.numberStr}
                        </span>
                        {reason.badge ? (
                          <span className="text-[10.5px] font-dm-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ffefb3]/40 text-[#695e2f] border border-[#ffefb3]">
                            {reason.badge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-wider text-[#707976] px-2 py-0.5 rounded-full bg-[#ebf6f2]">
                            {reason.category}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-manrope text-lg font-bold text-[#002622] leading-snug group-hover:text-[#013e37] transition-colors">
                        {reason.title}
                      </h3>

                      {/* Description */}
                      <p className="font-inter text-xs sm:text-sm text-[#404946] mt-2.5 leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>

                    {/* Bottom Hairline Highlight */}
                    <div className="mt-5 pt-3.5 border-t border-[#ebf6f2] flex items-center justify-between text-[11px] font-dm-sans text-[#707976]">
                      <span className="capitalize">{reason.category.replace("-", " ")}</span>
                      <span className="text-[#013e37] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        EBS Factor #{reason.numberStr}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INSTITUTIONAL PHILOSOPHY QUOTE BANNER */}
      {/* ========================================================= */}
      <section className="w-full bg-[#002622] text-white py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(1,62,55,0.6),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1100px] mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <span className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[#ffefb3] font-bold">
            The EBS Creed • Mission Malappuram 2050
          </span>
          <blockquote className="font-manrope text-2xl sm:text-3xl lg:text-4xl italic font-bold text-white leading-snug">
            &ldquo;Ideas create people. <br className="hidden sm:inline" />
            People create businesses. <br className="hidden sm:inline" />
            <span className="text-[#ffefb3]">Businesses create a brighter Malappuram.</span>&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-dm-sans text-xs uppercase tracking-wider text-[#9cd1c7] font-semibold">
              An Initiative Under Mission Malappuram 2050 &amp; 3G IRPS
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. ENROLLMENT & FELLOWSHIP ADMISSIONS CALL TO ACTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-[#013e37]/10 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 bg-[#013e37]/8 text-[#002622] px-3.5 py-1 rounded-full text-xs font-bold font-dm-sans uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#695e2f]" />
            Cohort Admissions Cycle 2025–2026
          </div>
          <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] tracking-tight">
            Ready to Build What Matters?
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#404946] max-w-xl leading-relaxed">
            These 50 reasons define the daily reality inside the EBS residential venture incubator. Take the first step toward building your enterprise today.
          </p>
          <div className="pt-3 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => openApplyModal("50-reasons-footer")}
              type="button"
              className="bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#013e37] transition-all shadow-md cursor-pointer"
            >
              Apply for Venture Fellowship
            </button>
            <Link
              href="/programmes"
              className="bg-[#ebf6f2] text-[#002622] hover:bg-[#dfebe7] font-dm-sans font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-md border border-[#013e37]/15 transition-all"
            >
              Explore 5-Stage Curriculum
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function WhyEBSPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#f1fcf8]" />}>
      <WhyEBSContent />
    </Suspense>
  );
}
