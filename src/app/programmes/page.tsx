"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  School, 
  ArrowDown, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Clock, 
  Target, 
  Users, 
  ShieldCheck, 
  Landmark, 
  TrendingUp, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

type FilterCategory = "all" | "foundation" | "build" | "scale";

export default function ProgrammesPage() {
  const { openApplyModal, openSyllabusModal } = useModal();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const programmes = [
    {
      id: "foundation",
      category: "foundation",
      tier: "Tier 01 • 3 Months",
      season: "Cohort Spring / Autumn",
      title: "01. Entrepreneur Foundation",
      headline: "Uncover innate founder aptitude, rigorously stress-test business ideas, and cultivate sovereign baseline commercial fluency.",
      outcomeTitle: "Feasibility Dossier & Go/No-Go Decision Matrix",
      outcomeDesc: "Conclusive quantitative validation proof to prevent capital waste before building.",
      audience: "Aspiring founders, high-potential university graduates, and early-career corporate executives preparing for founder autonomy.",
      admissionMetric: "EPA 55+",
      admissionSub: "or qualifying entrance monograph",
      mentorship: "Bi-weekly Master Practicums with resident venture operators and ecosystem market analysts.",
      modules: [
        { title: "Market Opportunity Sizing", desc: "TAM/SAM/SOM bottom-up stress testing & problem validation" },
        { title: "Value Proposition Design", desc: "Pain-reliever customer empathy mapping & positioning" },
        { title: "Financial Literacy for Founders", desc: "Cash runways, burn, and contribution margin math" },
        { title: "Lean Prototyping", desc: "Micro-validations & no-code experiment design" },
      ],
      featured: false,
    },
    {
      id: "builder",
      category: "build",
      tier: "Tier 02 • 6 Months",
      season: "Venture Sprint Track",
      title: "02. Entrepreneur Builder",
      headline: "Transform early validation signals into functional products, scalable unit economics, and certified initial customer demand.",
      outcomeTitle: "Working MVP & First Paying Customer Cohort",
      outcomeDesc: "Verified transaction volume and initial cohort retention benchmarks.",
      audience: "Builders with nascent prototypes, verified problem hypotheses, or technical specialists seeking a commercial venture partner.",
      admissionMetric: "EPA 65+",
      admissionSub: "plus prototype review by faculty",
      mentorship: "Full access to 3G Rapid Prototyping Sandbox & Malappuram 2050 Urban Testbeds.",
      modules: [
        { title: "Customer Discovery Loops", desc: "100-interview qualitative validation framework" },
        { title: "Product-Market Fit Engineering", desc: "Quantitative Sean Ellis test metrics" },
        { title: "Unit Economics Deep-Dive", desc: "CAC, LTV, Gross Margin, and payback cycles" },
        { title: "Regulatory & IP Defense", desc: "Trade secrets, initial trademarks, corporate bylaws" },
      ],
      featured: false,
    },
    {
      id: "launch",
      category: "build",
      tier: "Tier 03 • 1 Year",
      season: "Venture Incubation Immersion",
      title: "03. Entrepreneur Launch",
      headline: "Build and operationalize an institutional venture from incorporation through repeatable sales machines and institutional seed capital.",
      outcomeTitle: "Live Revenue-Generating Entity & Governance",
      outcomeDesc: "Incorporated board structure, audited accounts, and established enterprise revenue.",
      audience: "Full-time committed venture founders with verified prototypes ready to execute customer acquisition and governance setup.",
      admissionMetric: "EPA 72+",
      admissionSub: "plus institutional committee interview",
      mentorship: "Direct placement into the 3G Seed Investment Syndicate and syndicate demo-day pitch room.",
      modules: [
        { title: "Go-To-Market Execution", desc: "Outbound SDR engines & self-serve acquisition funnels" },
        { title: "Sales Pipeline Architecture", desc: "Enterprise contract negotiations and deal closures" },
        { title: "Seed Fundraising Mastery", desc: "Cap-table math, SAFE notes, and VC term sheets" },
        { title: "Operating Systems", desc: "OKRs, financial dashboarding, and hiring founding engineers" },
      ],
      featured: false,
    },
    {
      id: "scale",
      category: "scale",
      tier: "Tier 04 • 2 Years",
      season: "Growth Velocity Track",
      title: "04. Entrepreneur Scale",
      headline: "Scale organizational velocity, orchestrate multi-city operations, structure executive leadership, and secure Series A/B growth capital.",
      outcomeTitle: "Multi-Market Scaling Machine",
      outcomeDesc: "Cross-regional commercial footprint with institutional capital readiness and C-suite bench.",
      audience: "Post-revenue founders leading operating companies with documented product-market fit, generating >$250k annual recurring revenue.",
      admissionMetric: "EPA 80+",
      admissionSub: "plus financial audit & board endorsement",
      mentorship: "Weekly 1:1 dedicated sessions with experienced unicorn founders and private equity partners.",
      modules: [
        { title: "Organizational Architecture", desc: "Building middle management and executive compensation" },
        { title: "High-Growth Capital Strategy", desc: "Structuring debt, equity synthetics, and Series A/B syndicates" },
        { title: "International Expansion", desc: "Cross-border taxation, foreign subsidiaries, and global distribution" },
        { title: "Strategic M&A & Partnerships", desc: "Acquihiring competitors and defending distribution moats" },
      ],
      featured: false,
    },
    {
      id: "master",
      category: "scale",
      tier: "Tier 05 • 3 Years",
      season: "Sovereign Fellowship",
      title: "05. EBS Master Programme",
      headline: "The pinnacle academic credential for industry-shaping business statesmen, conglomerate architects, and multi-generational civic leaders.",
      outcomeTitle: "Elite Venture Portfolio & Conglomerate Stewardship",
      outcomeDesc: "Multi-venture holding company structure, cross-sector industrial leadership, and permanent legacy capital.",
      audience: "High-calibre visionary founders, corporate innovators, industrial enterprise successors, and leaders shaping national-scale industrial ecosystems.",
      admissionMetric: "EPA 88+",
      admissionSub: "Strictly capped at 12 fellows per cohort",
      mentorship: "Direct inclusion in Mission Malappuram 2050 Sovereign Development Council & Global Advisory Board.",
      modules: [
        { title: "Conglomerate Architecture", desc: "Holding company asset orchestration & capital recycling" },
        { title: "Strategic Capital Allocation", desc: "Sovereign wealth interplay, buyouts, and IPO syndication" },
        { title: "Geopolitical Market Dynamics", desc: "Trade corridors, sovereign industrial policy, resilient supply chains" },
        { title: "Legacy & Institutional Governance", desc: "Multi-generational wealth charters, trusts, and systemic stewardship" },
      ],
      featured: true,
    },
  ];

  const filteredProgrammes = programmes.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* ========================================================= */}
      {/* 1. ARCHITECTURAL HERO & FRAMING HEADER */}
      {/* ========================================================= */}
      <section className="relative bg-[#002622] text-white overflow-hidden pt-16 pb-24 md:pt-20 md:pb-28">
        {/* Ambient glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#013e37]/70 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#ffefb3]/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#ffefb3]/15 text-[#ffefb3] font-dm-sans text-xs font-bold tracking-widest uppercase">
                <School className="w-3.5 h-3.5 text-[#ffefb3]" />
                Academic Venture Matrix 2025–2026
              </div>

              <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Choose Your Path. <br className="hidden sm:inline" />
                <span className="text-[#ffefb3] italic font-normal">Build Your Future.</span>
              </h1>

              <p className="font-inter text-base sm:text-lg text-[#9cd1c7] max-w-2xl leading-relaxed">
                Rigorous, venture-calibrated education engineered for each stage of the entrepreneurial lifecycle. From initial feasibility to sovereign conglomerate scale.
              </p>
            </div>

            {/* Cohort Cohere Stat Slate (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#013e37]/90 p-6 rounded-xl border border-white/10 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-1">
                <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                  Cohort Cohere Rate
                </span>
                <span className="font-manrope text-2xl font-bold text-white">
                  14.8%
                </span>
              </div>
              <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "14.8%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="bg-[#ffefb3] h-full rounded-full"
                />
              </div>
              <p className="font-inter text-xs text-[#9cd1c7] pt-1 leading-relaxed">
                Selective admission strictly gated by the Entrepreneur Potential Assessment (EPA) to safeguard high-density peer cohorts.
              </p>
              <div className="pt-2">
                <a
                  href="#matrix-section"
                  className="inline-flex items-center gap-1.5 font-dm-sans text-xs font-bold uppercase tracking-wider text-[#ffefb3] hover:text-white transition-colors"
                >
                  Compare All Tracks
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FILTER & PROGRAMME NAVIGATION STRIP (STICKY) */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#ebf6f2]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "All Programmes (5)" },
              { id: "foundation", label: "Early Exploration" },
              { id: "build", label: "Venture Build (MVP & Launch)" },
              { id: "scale", label: "Scaling & Mastery" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                type="button"
                className={`px-4 py-2 font-dm-sans text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? "bg-[#002622] text-[#ffefb3] shadow-xs"
                    : "text-[#404946] hover:text-[#002622] hover:bg-[#ebf6f2]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-inter">
            <span className="font-dm-sans uppercase font-bold text-[#707976]">Framework:</span>
            <span className="font-semibold text-[#002622]">Mission Malappuram 2050 Venture Alignment</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROGRAMMES CATALOGUE */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProgrammes.map((prog, index) => {
              const isDark = prog.featured;
              return (
                <motion.article
                  key={prog.id}
                  id={prog.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-10 flex flex-col lg:flex-row gap-8 relative overflow-hidden ${
                    isDark
                      ? "bg-[#002622] text-white border border-[#ffefb3]/20"
                      : "bg-white text-[#131d1c] border border-[#013e37]/10"
                  }`}
                >
                  {isDark && (
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ffefb3]/10 blur-3xl pointer-events-none" />
                  )}

                  {/* Left Column: Title, Season, Outcome (1/3) */}
                  <div className="lg:w-1/3 flex flex-col justify-between gap-6 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full font-dm-sans text-xs font-bold uppercase tracking-wider ${
                            isDark
                              ? "bg-[#ffefb3] text-[#002622]"
                              : "bg-[#ebf6f2] text-[#002622]"
                          }`}
                        >
                          {prog.tier}
                        </span>
                        <span
                          className={`font-dm-sans text-xs uppercase font-bold ${
                            isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                          }`}
                        >
                          {prog.season}
                        </span>
                      </div>

                      <h2
                        className={`font-manrope text-2xl lg:text-3xl font-bold tracking-tight mb-2 ${
                          isDark ? "text-white" : "text-[#002622]"
                        }`}
                      >
                        {prog.title}
                      </h2>
                      <p
                        className={`font-inter text-xs sm:text-sm leading-relaxed ${
                          isDark ? "text-[#9cd1c7]" : "text-[#404946]"
                        }`}
                      >
                        {prog.headline}
                      </p>
                    </div>

                    {/* Target Outcome Card */}
                    <div
                      className={`p-4 rounded-xl border ${
                        isDark
                          ? "bg-[#013e37] border-[#ffefb3]/20"
                          : "bg-[#ebf6f2] border-[#013e37]/10"
                      }`}
                    >
                      <span
                        className={`font-dm-sans text-[11px] uppercase font-bold block mb-1 ${
                          isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                        }`}
                      >
                        Target Outcome Deliverable
                      </span>
                      <p
                        className={`font-manrope text-sm font-bold ${
                          isDark ? "text-white" : "text-[#002622]"
                        }`}
                      >
                        {prog.outcomeTitle}
                      </p>
                      <p
                        className={`font-inter text-xs mt-1 leading-relaxed ${
                          isDark ? "text-[#9cd1c7]" : "text-[#404946]"
                        }`}
                      >
                        {prog.outcomeDesc}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openApplyModal(prog.id)}
                        type="button"
                        className={`font-dm-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-all cursor-pointer shadow-sm ${
                          isDark
                            ? "bg-[#ffefb3] text-[#002622] hover:bg-[#fff5d1]"
                            : "bg-[#002622] text-[#ffefb3] hover:bg-[#013e37]"
                        }`}
                      >
                        Apply for Track
                      </button>

                      <button
                        onClick={() => openSyllabusModal(prog.title.replace(/^\d+\.\s*/, ""))}
                        type="button"
                        className={`inline-flex items-center gap-1.5 font-dm-sans text-xs uppercase tracking-wider font-bold p-2.5 transition-colors cursor-pointer ${
                          isDark ? "text-[#ffefb3] hover:text-white" : "text-[#002622] hover:text-[#695e2f]"
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        Syllabus
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Audience, Admissions Metric, Modules (2/3) */}
                  <div
                    className={`lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 rounded-xl relative z-10 ${
                      isDark
                        ? "bg-[#313836]/60 backdrop-blur-sm border border-white/10"
                        : "bg-[#f1fcf8] border border-[#013e37]/10"
                    }`}
                  >
                    {/* Left Sub-column */}
                    <div className="flex flex-col gap-5">
                      <div>
                        <span
                          className={`font-dm-sans text-xs uppercase tracking-wider font-bold block mb-1.5 ${
                            isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                          }`}
                        >
                          Audience Profile
                        </span>
                        <p
                          className={`font-inter text-xs sm:text-sm leading-relaxed ${
                            isDark ? "text-white/90" : "text-[#131d1c]"
                          }`}
                        >
                          {prog.audience}
                        </p>
                      </div>

                      <div>
                        <span
                          className={`font-dm-sans text-xs uppercase tracking-wider font-bold block mb-1.5 ${
                            isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                          }`}
                        >
                          Admissions Metric
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-manrope text-xl font-bold ${
                              isDark ? "text-[#ffefb3]" : "text-[#002622]"
                            }`}
                          >
                            {prog.admissionMetric}
                          </span>
                          <span
                            className={`font-inter text-xs ${
                              isDark ? "text-[#9cd1c7]" : "text-[#707976]"
                            }`}
                          >
                            {prog.admissionSub}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span
                          className={`font-dm-sans text-xs uppercase tracking-wider font-bold block mb-1.5 ${
                            isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                          }`}
                        >
                          Mentorship & Infrastructure
                        </span>
                        <p
                          className={`font-inter text-xs leading-relaxed ${
                            isDark ? "text-[#9cd1c7]" : "text-[#404946]"
                          }`}
                        >
                          {prog.mentorship}
                        </p>
                      </div>
                    </div>

                    {/* Right Sub-column: Modules */}
                    <div className="flex flex-col gap-3">
                      <span
                        className={`font-dm-sans text-xs uppercase tracking-wider font-bold block mb-1 ${
                          isDark ? "text-[#ffefb3]" : "text-[#695e2f]"
                        }`}
                      >
                        Core Academic Modules
                      </span>
                      <ul className="flex flex-col gap-2">
                        {prog.modules.map((mod) => (
                          <li
                            key={mod.title}
                            className={`p-3 rounded-lg flex items-start gap-2.5 ${
                              isDark ? "bg-[#002622]/60 border border-white/5" : "bg-white border border-[#013e37]/5"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isDark ? "text-[#ffefb3]" : "text-[#013e37]"
                              }`}
                            />
                            <div className="font-inter text-xs">
                              <strong className={isDark ? "text-white" : "text-[#002622]"}>
                                {mod.title}:
                              </strong>{" "}
                              <span className={isDark ? "text-[#9cd1c7]" : "text-[#404946]"}>
                                {mod.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. COMPARATIVE MATRIX TABLE */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#ebf6f2] border-t border-[#013e37]/10" id="matrix-section">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-wider text-[#695e2f] font-bold block mb-1">
                Comparative Specification
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
                The Academic Venture Matrix
              </h2>
              <p className="font-inter text-sm md:text-base text-[#404946] max-w-2xl mt-2 leading-relaxed">
                Side-by-side technical evaluation of pedagogical density, mentor allocation, and infrastructure access across all 5 programmes.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[#695e2f] animate-pulse" />
              <span className="font-inter text-xs text-[#404946] font-semibold">
                Updated for Academic Cycle 2025/2026
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto rounded-xl shadow-sm bg-white border border-[#013e37]/10">
            <table className="w-full text-left min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[#002622] text-white">
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Academic Track</th>
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Duration</th>
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Min. EPA</th>
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Milestone Deliverable</th>
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Mentorship Cadence</th>
                  <th className="p-4 font-dm-sans text-xs uppercase tracking-wider font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebf6f2] font-inter text-xs">
                <tr className="hover:bg-[#f1fcf8] transition-colors">
                  <td className="p-4 font-bold font-manrope text-sm text-[#002622]">01. Foundation</td>
                  <td className="p-4 text-[#404946]">3 Months</td>
                  <td className="p-4 font-bold text-[#002622]">55+</td>
                  <td className="p-4 text-[#404946]">Validated Opportunity Dossier & Feasibility</td>
                  <td className="p-4 text-[#404946]">Bi-weekly Practicum</td>
                  <td className="p-4">
                    <button
                      onClick={() => openApplyModal("foundation")}
                      type="button"
                      className="text-[#002622] font-dm-sans font-bold uppercase underline hover:text-[#695e2f]"
                    >
                      Apply
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f1fcf8] transition-colors">
                  <td className="p-4 font-bold font-manrope text-sm text-[#002622]">02. Builder</td>
                  <td className="p-4 text-[#404946]">6 Months</td>
                  <td className="p-4 font-bold text-[#002622]">65+</td>
                  <td className="p-4 text-[#404946]">Functional MVP & Paying Customer Accounts</td>
                  <td className="p-4 text-[#404946]">Weekly Sprint Reviews</td>
                  <td className="p-4">
                    <button
                      onClick={() => openApplyModal("builder")}
                      type="button"
                      className="text-[#002622] font-dm-sans font-bold uppercase underline hover:text-[#695e2f]"
                    >
                      Apply
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f1fcf8] transition-colors">
                  <td className="p-4 font-bold font-manrope text-sm text-[#002622]">03. Launch</td>
                  <td className="p-4 text-[#404946]">1 Year</td>
                  <td className="p-4 font-bold text-[#002622]">72+</td>
                  <td className="p-4 text-[#404946]">Live Entity, Audited ARR & Angel Round</td>
                  <td className="p-4 text-[#404946]">Dedicated Resident Partner</td>
                  <td className="p-4">
                    <button
                      onClick={() => openApplyModal("launch")}
                      type="button"
                      className="text-[#002622] font-dm-sans font-bold uppercase underline hover:text-[#695e2f]"
                    >
                      Apply
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#f1fcf8] transition-colors">
                  <td className="p-4 font-bold font-manrope text-sm text-[#002622]">04. Scale</td>
                  <td className="p-4 text-[#404946]">2 Years</td>
                  <td className="p-4 font-bold text-[#002622]">80+</td>
                  <td className="p-4 text-[#404946]">Multi-Region Distribution & Series A/B Syndicate</td>
                  <td className="p-4 text-[#404946]">1:1 Unicorn Executive Bench</td>
                  <td className="p-4">
                    <button
                      onClick={() => openApplyModal("scale")}
                      type="button"
                      className="text-[#002622] font-dm-sans font-bold uppercase underline hover:text-[#695e2f]"
                    >
                      Apply
                    </button>
                  </td>
                </tr>

                <tr className="bg-[#002622]/5 hover:bg-[#002622]/10 transition-colors">
                  <td className="p-4 font-bold font-manrope text-sm text-[#002622] flex items-center gap-1.5">
                    <span>05. EBS Master</span>
                    <span className="bg-[#002622] text-[#ffefb3] px-1.5 py-0.5 rounded text-[10px] font-dm-sans uppercase font-bold">
                      Fellowship
                    </span>
                  </td>
                  <td className="p-4 text-[#002622] font-semibold">3 Years</td>
                  <td className="p-4 font-bold text-[#002622]">88+ (Capped 12)</td>
                  <td className="p-4 text-[#002622] font-semibold">Sovereign Asset Moats & Conglomerate Holding</td>
                  <td className="p-4 text-[#002622] font-semibold">Mission 2050 Advisory Board</td>
                  <td className="p-4">
                    <button
                      onClick={() => openApplyModal("master")}
                      type="button"
                      className="text-[#002622] font-dm-sans font-bold uppercase underline hover:text-[#695e2f]"
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BOTTOM CTA BANNER */}
      {/* ========================================================= */}
      <section className="w-full bg-[#002622] text-white py-16 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="font-dm-sans text-xs uppercase tracking-widest text-[#ffefb3] font-bold">
            Admissions Cycle Open
          </span>
          <h3 className="font-manrope text-3xl sm:text-4xl font-bold text-white">
            Unsure which programme fits your venture stage?
          </h3>
          <p className="font-inter text-sm sm:text-base text-[#9cd1c7]">
            Complete the empirical Entrepreneur Potential Assessment (EPA) to receive an algorithmically recommended placement docket.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Link
              href="/epa"
              className="bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#fff5d1] transition-all shadow-md"
            >
              Take EPA Assessment
            </Link>
            <button
              onClick={() => openApplyModal("counseling")}
              type="button"
              className="bg-white/10 text-white font-dm-sans font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-white/20 transition-all border border-white/15 cursor-pointer"
            >
              Schedule Faculty Admissions Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
