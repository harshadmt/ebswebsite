"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Award, 
  Rocket, 
  Users, 
  Landmark, 
  Cpu, 
  Briefcase, 
  Lightbulb, 
  Compass, 
  Target, 
  Calendar, 
  BookOpen,
  ChevronRight,
  BrainCircuit
} from "lucide-react";

export default function HomePage() {
  const { openApplyModal, openSyllabusModal } = useModal();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.12 }
  };

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8] text-[#131d1c]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#002622] text-white overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
        {/* Ambient atmospheric glows */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-[#013e37]/60 blur-[120px] pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-[450px] h-[450px] rounded-full bg-[#ffefb3]/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Institutional Alliance Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-white/10 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffefb3] animate-pulse" />
            <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3]">
              Associated with 3G & Mission Malappuram 2050
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Narrative Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Become a <br />
                <span className="text-[#ffefb3] italic font-normal">Billion Dollar</span> Founder.
              </h1>

              <p className="font-inter text-base sm:text-lg lg:text-xl text-[#9cd1c7] leading-relaxed max-w-2xl">
                The world doesn’t need more people who simply follow opportunities. It needs founders who create them. EBS helps ambitious individuals develop the mindset, business skills, practical experience, and strategic thinking needed to build and scale enduring companies.
              </p>

              {/* Quote Inset */}
              <div className="p-5 bg-white/5 rounded-xl backdrop-blur-sm border-l-4 border-[#ffefb3] max-w-xl">
                <p className="font-manrope text-sm sm:text-base text-[#ffefb3] italic leading-snug">
                  “From your first idea to building a scalable enterprise, your entrepreneurial journey starts here.”
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-md shadow-lg hover:bg-[#fff5d1] transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Explore Programmes
                  <ArrowRight className="ml-2 w-4 h-4 text-[#002622]" />
                </Link>

                <Link
                  href="/epa"
                  className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 font-dm-sans font-semibold text-sm uppercase tracking-wider px-6 py-4 rounded-md backdrop-blur-sm border border-white/15 transition-all hover:scale-[1.02]"
                >
                  Discover Your Potential (EPA)
                  <BrainCircuit className="ml-2 w-4 h-4 text-[#ffefb3]" />
                </Link>
              </div>
            </motion.div>

            {/* Amphitheatre Visual & Metric Slate (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative mt-4 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#013e37] group">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/assets/amphitheatre.jpg"
                    alt="Executive Amphitheatre at Entrepreneurs Business School"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002622] via-[#002622]/40 to-transparent" />
                </div>

                {/* Floating Metric Slate */}
                <div className="absolute bottom-4 left-4 right-4 p-5 bg-white/95 backdrop-blur-md rounded-xl text-[#131d1c] shadow-xl border border-white/40">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#695e2f] font-bold block">
                        Institutional Rigor
                      </span>
                      <span className="font-manrope text-lg font-bold text-[#002622]">
                        100% Practical Pedagogy
                      </span>
                    </div>
                    <div className="text-right border-l border-[#c0c8c5]/40 pl-4">
                      <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#707976] font-bold block">
                        Ventures Incubated
                      </span>
                      <span className="font-manrope text-lg font-bold text-[#695e2f]">
                        $120M+ Raised
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Sovereign Badge */}
              <div className="absolute -top-4 -left-4 bg-[#ffefb3] text-[#002622] px-4 py-2 rounded-md shadow-xl flex items-center gap-2 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#002622]" />
                <span className="font-dm-sans text-xs tracking-wider uppercase font-bold">
                  Mission 2050 Sovereign Track
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Ticker Under Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <div className="p-3">
              <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3] block mb-1">
                01 / Pedagogy
              </span>
              <span className="font-manrope text-base font-bold text-white block">
                Founders Over Theory
              </span>
              <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                Live market testing replaces case study simulations.
              </p>
            </div>

            <div className="p-3 border-t sm:border-t-0 sm:border-l border-white/10">
              <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3] block mb-1">
                02 / Architecture
              </span>
              <span className="font-manrope text-base font-bold text-white block">
                5 Scaling Stages
              </span>
              <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                From validation foundation to international conglomerates.
              </p>
            </div>

            <div className="p-3 border-t lg:border-t-0 lg:border-l border-white/10">
              <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3] block mb-1">
                03 / Capital
              </span>
              <span className="font-manrope text-base font-bold text-white block">
                Direct LP Access
              </span>
              <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                Syndicated angel networks and sovereign funds.
              </p>
            </div>

            <div className="p-3 border-t sm:border-t-0 sm:border-l border-white/10">
              <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3] block mb-1">
                04 / Ecosystem
              </span>
              <span className="font-manrope text-base font-bold text-white block">
                Mission 2050 Hub
              </span>
              <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                Civic and regional venture modernization pipeline.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THINK BIGGER. BUILD BIGGER (5 PILLARS) */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
              Foundational Philosophy
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] leading-tight">
              Think Bigger. Build Bigger.
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#404946] mt-4 leading-relaxed">
              A Billion-Dollar Vision Begins with a Founder Mindset. True enterprise resilience cannot be taught through passive observation; it is forged across five decisive dimensions of venture stewardship.
            </p>
          </motion.div>

          {/* 5-Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                num: "01",
                title: "Think Like a Founder",
                desc: "Opportunity creation, strategic asymmetric risk mastery, and cultivating mental resilience against capital headwinds.",
                track: "Mindset Track",
                icon: Lightbulb,
              },
              {
                num: "02",
                title: "Solve Real Problems",
                desc: "Rigorous customer validation, pain-point quantification, and discovering ground-truth dynamics before writing a line of code.",
                track: "Validation Track",
                icon: Target,
              },
              {
                num: "03",
                title: "Products & Models",
                desc: "Unit economics engineering, sustainable contribution margins, network effect loops, and systemic moat defensibility.",
                track: "Economics Track",
                icon: TrendingUp,
              },
              {
                num: "04",
                title: "Leadership & Execution",
                desc: "Assembling executive benches, operational governance, OKR cadence systems, and high-performance founder psychology.",
                track: "Executive Track",
                icon: Users,
              },
              {
                num: "05",
                title: "Growth & Scale",
                desc: "Cross-border distribution, institutional series syndication, sovereign alliances, and generational governance architecture.",
                track: "Scale Track",
                icon: Rocket,
              },
            ].map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 bg-white rounded-xl shadow-xs hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-manrope text-3xl font-bold text-[#9cd1c7] group-hover:text-[#002622] transition-colors">
                        {pillar.num}
                      </span>
                      <div className="w-9 h-9 rounded-md bg-[#ebf6f2] flex items-center justify-center text-[#013e37] group-hover:bg-[#002622] group-hover:text-[#ffefb3] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-manrope text-lg font-bold text-[#002622] mb-2 group-hover:text-[#013e37]">
                      {pillar.title}
                    </h3>
                    <p className="font-inter text-xs text-[#404946] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ebf6f2] flex items-center gap-2 text-[#695e2f]">
                    <span className="font-dm-sans text-[11px] uppercase tracking-wider font-bold">
                      {pillar.track}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE 5 ACADEMIC PROGRAMMES OVERVIEW */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2]" id="programmes">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
                Progressive Venture Architecture
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] tracking-tight">
                Your Journey from Potential to Scale
              </h2>
            </div>
            <p className="font-inter text-sm md:text-base text-[#404946] max-w-md leading-relaxed">
              Structured for distinct enterprise maturity inflection points. Every track is immersion-tested with verifiable operational deliverables.
            </p>
          </div>

          {/* 5 Programmes List */}
          <div className="flex flex-col gap-6">
            {/* 01. Foundation */}
            <motion.div
              {...fadeIn}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-xs hover:shadow-lg transition-all border border-[#013e37]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-1 flex lg:flex-col items-baseline lg:items-start gap-2">
                <span className="font-manrope text-3xl font-bold text-[#695e2f]">01</span>
                <span className="bg-[#ebf6f2] text-[#002622] px-2.5 py-0.5 rounded font-dm-sans text-xs font-semibold">
                  3 Months
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-manrope text-xl font-bold text-[#002622]">
                  Entrepreneur Foundation Programme
                </h3>
                <p className="font-inter text-xs text-[#404946] mt-1">
                  Discover Entrepreneurial Potential & Idea Feasibility.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Idea Viability Matrix
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Market Resonance
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Founder Aptitude
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-xs font-inter text-[#404946]">
                <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold block mb-1">
                  Target Profile & Outcome
                </span>
                <p className="leading-relaxed">
                  For aspiring builders with high ambition but unstructured concepts. Exit with a battle-tested Opportunity Dossier and validated market hypothesis.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end gap-2">
                <button
                  onClick={() => openSyllabusModal("Entrepreneur Foundation")}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#ebf6f2] hover:bg-[#002622] hover:text-white text-[#002622] px-4 py-2.5 rounded-md font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  View Syllabus
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 02. Builder */}
            <motion.div
              {...fadeIn}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-xs hover:shadow-lg transition-all border border-[#013e37]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-1 flex lg:flex-col items-baseline lg:items-start gap-2">
                <span className="font-manrope text-3xl font-bold text-[#695e2f]">02</span>
                <span className="bg-[#ebf6f2] text-[#002622] px-2.5 py-0.5 rounded font-dm-sans text-xs font-semibold">
                  6 Months
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-manrope text-xl font-bold text-[#002622]">
                  Entrepreneur Builder Programme
                </h3>
                <p className="font-inter text-xs text-[#404946] mt-1">
                  Turn Ideas into Validated Business Models.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    MVP Development
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Initial Customer Acquisition
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Pricing Strategy
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-xs font-inter text-[#404946]">
                <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold block mb-1">
                  Target Profile & Outcome
                </span>
                <p className="leading-relaxed">
                  Early founders ready to build prototypes. Exit with live pilot accounts, active customers, and a defensible financial unit model.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end gap-2">
                <button
                  onClick={() => openSyllabusModal("Entrepreneur Builder")}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#ebf6f2] hover:bg-[#002622] hover:text-white text-[#002622] px-4 py-2.5 rounded-md font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  View Syllabus
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 03. Launch */}
            <motion.div
              {...fadeIn}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-xs hover:shadow-lg transition-all border border-[#013e37]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-1 flex lg:flex-col items-baseline lg:items-start gap-2">
                <span className="font-manrope text-3xl font-bold text-[#695e2f]">03</span>
                <span className="bg-[#ebf6f2] text-[#002622] px-2.5 py-0.5 rounded font-dm-sans text-xs font-semibold">
                  1 Year
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-manrope text-xl font-bold text-[#002622]">
                  Entrepreneur Launch Programme
                </h3>
                <p className="font-inter text-xs text-[#404946] mt-1">
                  Build Your First Operational Business & Achieve Traction.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Legal & Cap Table
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Sales Engines
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Seed Readiness
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-xs font-inter text-[#404946]">
                <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold block mb-1">
                  Target Profile & Outcome
                </span>
                <p className="leading-relaxed">
                  Incorporated founders seeking repeatable revenue. Exit with an operational commercial entity, recurring cash flow, and angel backing.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end gap-2">
                <button
                  onClick={() => openSyllabusModal("Entrepreneur Launch")}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#ebf6f2] hover:bg-[#002622] hover:text-white text-[#002622] px-4 py-2.5 rounded-md font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  View Syllabus
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 04. Scale */}
            <motion.div
              {...fadeIn}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-xs hover:shadow-lg transition-all border border-[#013e37]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-1 flex lg:flex-col items-baseline lg:items-start gap-2">
                <span className="font-manrope text-3xl font-bold text-[#695e2f]">04</span>
                <span className="bg-[#ebf6f2] text-[#002622] px-2.5 py-0.5 rounded font-dm-sans text-xs font-semibold">
                  2 Years
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-manrope text-xl font-bold text-[#002622]">
                  Entrepreneur Scale Programme
                </h3>
                <p className="font-inter text-xs text-[#404946] mt-1">
                  Scale to Multimarket Expansion & Institutional Capital.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Series A/B Syndication
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Executive Governance
                  </span>
                  <span className="bg-[#ebf6f2] text-[#013e37] text-xs px-2.5 py-1 rounded font-medium">
                    Cross-Border Channels
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-xs font-inter text-[#404946]">
                <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold block mb-1">
                  Target Profile & Outcome
                </span>
                <p className="leading-relaxed">
                  Ventures demonstrating product-market fit. Exit with multi-regional footprint, C-suite delegation, and venture debt/equity rounds.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end gap-2">
                <button
                  onClick={() => openSyllabusModal("Entrepreneur Scale")}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#ebf6f2] hover:bg-[#002622] hover:text-white text-[#002622] px-4 py-2.5 rounded-md font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  View Syllabus
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 05. EBS Master (Flagship Tier) */}
            <motion.div
              {...fadeIn}
              whileHover={{ y: -4 }}
              className="bg-[#002622] text-white rounded-xl p-6 lg:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative overflow-hidden border border-[#ffefb3]/20"
            >
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ffefb3]/10 blur-2xl pointer-events-none" />
              <div className="lg:col-span-1 flex lg:flex-col items-baseline lg:items-start gap-2 relative z-10">
                <span className="font-manrope text-3xl font-bold text-[#ffefb3]">05</span>
                <span className="bg-white/10 px-2.5 py-0.5 rounded font-dm-sans text-xs text-[#ffefb3] font-semibold">
                  3 Years
                </span>
              </div>
              <div className="lg:col-span-4 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffefb3]/20 text-[#ffefb3] text-xs font-bold mb-2 uppercase tracking-wider font-dm-sans">
                  <Award className="w-3.5 h-3.5" />
                  Flagship Global Fellowship
                </div>
                <h3 className="font-manrope text-2xl font-bold text-white">
                  EBS Master Programme
                </h3>
                <p className="font-inter text-xs text-[#9cd1c7] mt-1">
                  Develop into a Future Global Business Leader & Conglomerate Architect.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-white/10 text-[#ffefb3] text-xs px-2.5 py-1 rounded font-medium">
                    Billion-Dollar Moats
                  </span>
                  <span className="bg-white/10 text-[#ffefb3] text-xs px-2.5 py-1 rounded font-medium">
                    Sovereign Wealth Integration
                  </span>
                  <span className="bg-white/10 text-[#ffefb3] text-xs px-2.5 py-1 rounded font-medium">
                    Conglomerate M&A
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-xs font-inter text-[#9cd1c7] relative z-10">
                <span className="font-dm-sans text-[11px] uppercase text-[#ffefb3] font-bold block mb-1">
                  Target Profile & Outcome
                </span>
                <p className="leading-relaxed">
                  For elite entrepreneurs aiming for sovereign-scale systemic impact. Full integration with Mission Malappuram 2050 anchor infrastructure projects.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end gap-2 relative z-10">
                <button
                  onClick={() => openSyllabusModal("EBS Master Fellowship")}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#ffefb3] hover:bg-[#fff5d1] text-[#002622] px-5 py-3 rounded-md font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  View Selection & Syllabus
                  <ArrowRight className="w-3.5 h-3.5 text-[#002622]" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHY EBS? (THE INSTITUTIONAL DISTINCTION) */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <motion.div {...fadeIn} className="lg:col-span-6">
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
                The Institutional Distinction
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] leading-tight">
                Built for People Who Want to Build Businesses.
              </h2>
            </motion.div>
            <motion.div {...fadeIn} className="lg:col-span-6">
              <p className="font-inter text-base sm:text-lg text-[#404946] leading-relaxed">
                Traditional business academies teach administrative theory for corporate stewards. EBS is an execution institute constructed from the ground up to forge sovereign founders who take capital and build industrial reality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "Founder Mindset over Theory",
                desc: "No simulated case studies from forty years ago. Every sprint measures actual consumer conversion, revenue velocity, and margin integrity.",
              },
              {
                icon: Users,
                title: "Practicing Venture Mentors",
                desc: "Learn directly under chairs who have successfully steered companies through IPOs, hyper-growth, recapitalizations, and sovereign concessions.",
              },
              {
                icon: Cpu,
                title: "Dedicated Builder Ecosystem",
                desc: "Immediate integration into proprietary legal frameworks, tech staging clusters, growth labs, and talent acquisition pipelines.",
              },
              {
                icon: Landmark,
                title: "Direct Capital & Market Access",
                desc: "Structured Demo Salons before syndicates, family offices, and Mission 2050 sovereign infrastructure allocation funds.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-7 rounded-xl shadow-xs hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#ebf6f2] flex items-center justify-center text-[#013e37] mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-manrope text-lg font-bold text-[#002622] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs text-[#404946] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHO IS EBS FOR? (5 PERSONAS) */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
              The Admissions Spectrum
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622]">
              Who Is EBS For?
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946] mt-3">
              Designed for high-conviction individuals across five distinct entrepreneurial turning points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                icon: Lightbulb,
                title: "Aspiring Founders",
                badge: "Pre-Venture Validation",
                desc: "Professionals and technologists holding deep domain insight who need the playbook to transition from employees to founders.",
                rec: "Foundation / Builder",
              },
              {
                icon: TrendingUp,
                title: "Young Professionals",
                badge: "High-Velocity Pivot",
                desc: "Early-career high performers seeking an intensive alternative to standard academic MBA programmes with real equity upside.",
                rec: "Builder / Launch",
              },
              {
                icon: Landmark,
                title: "Next-Gen Successors",
                badge: "Enterprise Modernization",
                desc: "Leaders poised to take the helm of family enterprises, pivoting regional models into modern, scalable global companies.",
                rec: "Scale / EBS Master",
              },
              {
                icon: Award,
                title: "Women Founders",
                badge: "Venture Leadership",
                desc: "Visionary women leaders creating high-growth consumer, B2B, or impact enterprises with tailored mentorship and dedicated syndicates.",
                rec: "Launch / Scale",
              },
              {
                icon: Rocket,
                title: "Scale-up Operators",
                badge: "Cross-Border Scaling",
                desc: "Active founders who have reached the $1M - $5M ceiling and require systematic frameworks to break into 10x-to-100x trajectories.",
                rec: "Scale / EBS Master",
              },
            ].map((persona, index) => {
              const IconC = persona.icon;
              return (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-xs hover:shadow-lg transition-all border border-[#013e37]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-[#ebf6f2] flex items-center justify-center text-[#013e37] mb-4">
                      <IconC className="w-5 h-5" />
                    </div>
                    <h3 className="font-manrope text-base font-bold text-[#002622] mb-1">
                      {persona.title}
                    </h3>
                    <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-semibold block mb-2.5">
                      {persona.badge}
                    </span>
                    <p className="font-inter text-xs text-[#404946] leading-relaxed">
                      {persona.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 bg-[#f1fcf8] p-3 rounded-lg border border-[#013e37]/5">
                    <span className="font-dm-sans text-[10px] uppercase text-[#013e37] font-bold block">
                      Recommended Track
                    </span>
                    <span className="font-inter text-xs font-semibold text-[#002622]">
                      {persona.rec}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. EPA DIAGNOSTIC TEASER */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#f1fcf8] relative overflow-hidden" id="epa">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#002622] rounded-2xl text-white p-8 md:p-14 relative shadow-2xl overflow-hidden border border-[#ffefb3]/20">
            {/* Ambient background rings */}
            <div className="absolute -right-16 top-0 w-96 h-96 rounded-full bg-[#013e37]/70 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 bg-[#ffefb3]/20 text-[#ffefb3] px-3.5 py-1 rounded-full w-max text-xs font-bold font-dm-sans uppercase tracking-wider">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  Proprietary Diagnostic
                </div>

                <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Entrepreneur Potential Assessment (EPA)
                </h2>

                <p className="font-manrope text-lg text-[#ffefb3] font-medium">
                  Before Choosing Your Path, Understand Your Potential.
                </p>

                <p className="font-inter text-sm text-[#9cd1c7] leading-relaxed">
                  Admission into EBS cohorts is preceded by an empirical, multi-dimensional diagnostic assessing risk temperament, operational bandwidth, strategic foresight, and relentless grit.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/epa"
                    className="inline-flex items-center gap-2 bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#fff5d1] transition-all shadow-md"
                  >
                    Take Sample Diagnostic
                    <ArrowRight className="w-4 h-4 text-[#002622]" />
                  </Link>

                  <button
                    onClick={() => openApplyModal("epa")}
                    type="button"
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-dm-sans font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-white/20 transition-all border border-white/15 cursor-pointer"
                  >
                    Register for Next Cycle
                  </button>
                </div>
              </div>

              {/* 3-Stage Assessment Methodology */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Stage 1 */}
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shrink-0">
                    <span className="font-manrope text-xl font-bold text-[#ffefb3] leading-none">30%</span>
                    <span className="text-[10px] uppercase text-[#9cd1c7] mt-0.5 font-dm-sans font-semibold">Weight</span>
                  </div>
                  <div>
                    <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                      Stage 01
                    </span>
                    <h3 className="font-manrope text-base font-bold text-white">
                      Entrepreneur Aptitude Test
                    </h3>
                    <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                      Cognitive problem decomposition, numerical reasoning, mental risk-reward calibration, and strategic intuition testing under simulated ambiguity.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#ffefb3] text-[#002622] flex flex-col items-center justify-center shrink-0">
                    <span className="font-manrope text-xl font-bold leading-none">50%</span>
                    <span className="text-[10px] uppercase font-dm-sans font-bold mt-0.5">Weight</span>
                  </div>
                  <div>
                    <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                      Stage 02
                    </span>
                    <h3 className="font-manrope text-base font-bold text-white">
                      Practical Founder Challenge
                    </h3>
                    <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                      A 48-hour live sprint: examine real enterprise friction points, structure customer interview protocols, develop pricing logic, and pitch defensibility.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shrink-0">
                    <span className="font-manrope text-xl font-bold text-[#ffefb3] leading-none">20%</span>
                    <span className="text-[10px] uppercase text-[#9cd1c7] mt-0.5 font-dm-sans font-semibold">Weight</span>
                  </div>
                  <div>
                    <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                      Stage 03
                    </span>
                    <h3 className="font-manrope text-base font-bold text-white">
                      Executive Founder Interview
                    </h3>
                    <p className="font-inter text-xs text-[#9cd1c7] mt-1 leading-relaxed">
                      Direct board evaluation with EBS faculty and venture partners focusing on emotional stamina, sovereign alignment, ethics, and long-horizon vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. NEWS, EVENTS & FOUNDER INSIGHTS */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
                Ecosystem Intelligence
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622]">
                News, Events & Founder Insights
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-wider text-[#002622] hover:text-[#013e37] transition-colors font-bold"
            >
              View All Dispatch Entries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Event Spotlight (Col 1-5) */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-5 bg-white rounded-xl overflow-hidden shadow-xs border border-[#013e37]/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full">
                  <Image
                    src="/assets/summit.jpg"
                    alt="Mission Malappuram 2050 Venture Summit Auditorium"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#002622] text-[#ffefb3] px-3 py-1 rounded font-dm-sans text-xs uppercase font-bold tracking-wider">
                    Upcoming Academic Summit
                  </span>
                </div>
                <div className="p-7">
                  <span className="font-dm-sans text-xs uppercase tracking-wider text-[#707976] block mb-2 font-semibold">
                    November 28, 2025 • Academic Hall & Global Broadcast
                  </span>
                  <h3 className="font-manrope text-xl font-bold text-[#002622] mb-3">
                    Mission Malappuram 2050 Venture Summit
                  </h3>
                  <p className="font-inter text-xs text-[#404946] leading-relaxed">
                    Global venture partners, sovereign wealth delegators, and academic mentors gather to preview high-trajectory projects graduating from the EBS Scale & Master Fellowship tracks.
                  </p>
                </div>
              </div>
              <div className="px-7 pb-7">
                <button
                  onClick={() => openApplyModal("summit-observer")}
                  type="button"
                  className="inline-flex items-center gap-2 text-[#002622] font-dm-sans text-xs uppercase tracking-wider font-bold hover:text-[#695e2f] transition-colors cursor-pointer"
                >
                  Request Observer Pass
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Monographs & Masterclasses (Col 6-12) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Monograph 1 */}
              <motion.div
                {...fadeIn}
                className="bg-white p-6 rounded-xl shadow-xs border border-[#013e37]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#ebf6f2] text-[#002622] text-[11px] px-2.5 py-0.5 rounded font-dm-sans font-bold uppercase">
                      Research Monograph
                    </span>
                    <span className="font-dm-sans text-xs text-[#707976]">Vol. IX • Q3 2025</span>
                  </div>
                  <h4 className="font-manrope text-base font-bold text-[#002622] mb-1">
                    Unit Economics of Emerging Tier-2 Hubs
                  </h4>
                  <p className="font-inter text-xs text-[#404946] max-w-lg leading-relaxed">
                    Empirical field analysis dissecting sustainable CAC-to-LTV multipliers in decentralised industrial districts under Mission Malappuram 2050 framework.
                  </p>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-[#002622] hover:text-[#695e2f] font-dm-sans text-xs uppercase font-bold shrink-0 tracking-wider"
                >
                  Read Paper
                  <BookOpen className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Monograph 2 */}
              <motion.div
                {...fadeIn}
                className="bg-white p-6 rounded-xl shadow-xs border border-[#013e37]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#ebf6f2] text-[#002622] text-[11px] px-2.5 py-0.5 rounded font-dm-sans font-bold uppercase">
                      Executive Briefing
                    </span>
                    <span className="font-dm-sans text-xs text-[#707976]">Vol. VII • Q2 2025</span>
                  </div>
                  <h4 className="font-manrope text-base font-bold text-[#002622] mb-1">
                    Founder Psychology Under Capital Stress
                  </h4>
                  <p className="font-inter text-xs text-[#404946] max-w-lg leading-relaxed">
                    Evaluating cognitive distortion, strategic conviction, and burn-rate governance during prolonged multi-quarter venture downcycles.
                  </p>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-[#002622] hover:text-[#695e2f] font-dm-sans text-xs uppercase font-bold shrink-0 tracking-wider"
                >
                  Read Paper
                  <BookOpen className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Masterclass Notice */}
              <motion.div
                {...fadeIn}
                className="bg-white p-6 rounded-xl shadow-xs border border-[#013e37]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#efe0a5] text-[#221b00] text-[11px] px-2.5 py-0.5 rounded font-dm-sans font-bold uppercase">
                      Masterclass Series
                    </span>
                    <span className="font-dm-sans text-xs text-[#707976]">December 05, 2025</span>
                  </div>
                  <h4 className="font-manrope text-base font-bold text-[#002622] mb-1">
                    Defensible Cap Tables for Series A-to-C Scaling
                  </h4>
                  <p className="font-inter text-xs text-[#404946] max-w-lg leading-relaxed">
                    Live interactive workshop with institutional legal counsels on secondary market rights, liquidation preferences, and founder voting control.
                  </p>
                </div>
                <button
                  onClick={() => openApplyModal("masterclass-cap-table")}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[#002622] hover:text-[#695e2f] font-dm-sans text-xs uppercase font-bold shrink-0 tracking-wider cursor-pointer"
                >
                  Register
                  <Calendar className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. ABOUT EBS & MISSION MALAPPURAM 2050 */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Architecture (7 cols) */}
            <motion.div {...fadeIn} className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block">
                Institutional Mandate & Sovereign Alliance
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] leading-tight">
                Developing the Founders of Tomorrow.
              </h2>
              <p className="font-inter text-base text-[#404946] leading-relaxed">
                Entrepreneurs Business School (EBS) was conceived not merely as an educational apparatus, but as an institutional catalyst. In strategic alliance with 3G and the civic transformation charter of <strong className="text-[#002622]">Mission Malappuram 2050</strong>, EBS operates as a high-density venture incubator designed to transform regional potential into sovereign economic prowess.
              </p>
              <p className="font-inter text-sm text-[#404946] leading-relaxed">
                By connecting local founders with global capital channels, elite operating playbooks, and tier-one academic discipline, we ensure that generational enterprises take root in regional centers and scale into world-renowned conglomerates.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10">
                  <span className="font-manrope text-2xl lg:text-3xl font-bold text-[#002622] block">2050</span>
                  <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold">Charter Target</span>
                </div>
                <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10">
                  <span className="font-manrope text-2xl lg:text-3xl font-bold text-[#002622] block">1,000+</span>
                  <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold">Founders Tracked</span>
                </div>
                <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10">
                  <span className="font-manrope text-2xl lg:text-3xl font-bold text-[#002622] block">3G</span>
                  <span className="font-dm-sans text-[11px] uppercase text-[#695e2f] font-bold">Global Alliance</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Monograph Column (5 cols) */}
            <motion.div {...fadeIn} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#013e37]/10">
                <div className="relative h-[380px] w-full">
                  <Image
                    src="/assets/campus.jpg"
                    alt="Modernist Architectural Venture Hub of Mission 2050"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <span className="font-dm-sans text-xs uppercase text-[#695e2f] font-bold block mb-1">
                    Civic Blueprint 2050
                  </span>
                  <p className="font-inter text-xs text-[#404946] italic">
                    “We don't build temporary businesses; we construct sustainable economic engines that will thrive over the next fifty years.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. GRAND FINALE EDITORIAL CTA */}
      {/* ========================================================= */}
      <section className="w-full bg-[#002622] text-white py-24 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute -left-20 top-0 w-96 h-96 rounded-full bg-[#013e37] blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#ffefb3]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#ffefb3]/20 text-[#ffefb3] px-3.5 py-1 rounded-full text-xs font-bold font-dm-sans uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            EBS Global Cohort Admissions Open
          </div>

          <h2 className="font-manrope text-4xl sm:text-5xl lg:text-7xl text-[#ffefb3] max-w-4xl tracking-tight leading-none mb-6 font-bold">
            Become a Billion Dollar Founder.
          </h2>

          <p className="font-inter text-base sm:text-xl text-[#9cd1c7] max-w-2xl mx-auto leading-relaxed mb-10">
            Every great business begins with a founder willing to think bigger, learn continuously, and take action. Your scalable future is engineered here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openApplyModal("grand-cta")}
              type="button"
              className="inline-flex items-center justify-center bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-xl hover:bg-[#fff5d1] transition-all hover:scale-105 cursor-pointer"
            >
              Apply for Admission
              <ArrowRight className="ml-2 w-4 h-4 text-[#002622]" />
            </button>

            <button
              onClick={() => openSyllabusModal("EBS Master Fellowship")}
              type="button"
              className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 font-dm-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-md backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
            >
              Download Institutional Prospectus
              <BookOpen className="ml-2 w-4 h-4 text-[#ffefb3]" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[#9cd1c7] font-dm-sans text-xs uppercase tracking-wider font-semibold">
            <span>Curriculum Accredited</span>
            <span>•</span>
            <span>EPA Diagnostic Required</span>
            <span>•</span>
            <span>Limited Cohort Allocation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
