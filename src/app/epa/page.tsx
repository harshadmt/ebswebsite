"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, 
  ArrowRight, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  FileText, 
  Sliders, 
  Target, 
  Rocket, 
  Briefcase, 
  Building2, 
  Lock, 
  RefreshCw,
  Send
} from "lucide-react";
import confetti from "canvas-confetti";

export default function EPAPage() {
  // Simulator State
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [feedbacks, setFeedbacks] = useState<{ [key: number]: { isCorrect: boolean; text: string } }>({});

  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    track: "",
    cycle: "2025-03-22",
    nda: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSelectOption = (questionIndex: number, optionIndex: number, isCorrect: boolean) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
    setFeedbacks((prev) => ({
      ...prev,
      [questionIndex]: {
        isCorrect,
        text: isCorrect
          ? "Optimal Strategic Deduction: This response identifies root unit economics value destruction rather than surface operational noise. Evaluators weigh this perspective at 100% competency."
          : "Sub-optimal Commercial Trade-off: While common in traditional corporate management, this action addresses secondary symptoms rather than root unit economic viability.",
      },
    }));

    if (isCorrect) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#013e37", "#ffefb3", "#b8ede2"],
        });
      } catch {
        // ignore
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#013e37", "#ffefb3", "#f2e2a7"],
      });
    } catch {
      // ignore
    }
  };

  const faqs = [
    {
      q: "How is the composite score calculated?",
      a: "Scores are normalized across three tiers: Stage 01 (30 pts), Stage 02 (50 pts), and Stage 03 (20 pts). A minimum threshold of 72/100 is typically required for unconditioned admission into builder and launch tracks.",
    },
    {
      q: "Is my proprietary business idea protected?",
      a: "Yes. All submissions in the Practical Founder Challenge (Stage 02) remain 100% your intellectual property. All faculty evaluators and external operator panels are legally bound by institutional non-disclosure protocol 14-B.",
    },
    {
      q: "What is the retake and reapplying policy?",
      a: "Candidates who fall below admission thresholds may re-register after a mandatory 90-day cooldown period. This window ensures adequate time to absorb diagnostic feedback and refine strategic execution capabilities.",
    },
    {
      q: "Can I prepare or study for the assessment?",
      a: "Because the EPA is a behavioral diagnostic rather than a syllabus exam, theoretical memorization is not advantageous. We recommend reviewing basic unit economics formulas and familiarizing oneself with standard pitch teardowns.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* ========================================================= */}
      {/* 1. IMMERSIVE HERO */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#002622] text-white overflow-hidden pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#013e37]/60 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-[#ffefb3]/10 blur-2xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 w-fit border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#ffefb3] animate-pulse" />
              <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                Admissions Diagnostic Protocol
              </span>
            </div>

            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Before Choosing Your Path, <br className="hidden sm:inline" />
              <span className="text-[#ffefb3] italic font-normal">Understand Your Potential.</span>
            </h1>

            <p className="font-inter text-base sm:text-lg text-[#9cd1c7] max-w-2xl leading-relaxed">
              A structured, diagnostic framework engineered to evaluate raw entrepreneurial aptitude, practical execution instincts, and strategic resilience across ambitious venture creators.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#assessment-form"
                className="inline-flex items-center justify-center bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md shadow-lg hover:bg-[#fff5d1] transition-all cursor-pointer"
              >
                Register for Next Cycle
                <ArrowRight className="ml-2 w-4 h-4 text-[#002622]" />
              </a>

              <a
                href="#interactive-preview"
                className="inline-flex items-center justify-center bg-white/10 text-[#ffefb3] hover:bg-white/20 font-dm-sans font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md border border-white/15 transition-all"
              >
                <Eye className="mr-2 w-4 h-4 text-[#ffefb3]" />
                Try Sample Diagnostic
              </a>
            </div>
          </div>

          {/* Quick Stats Card (4 cols) */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="bg-[#013e37] p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                  Cohort 2025 Benchmarks
                </span>
                <Sparkles className="w-4 h-4 text-[#ffefb3]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="font-manrope text-4xl font-bold text-white leading-none">
                    100
                  </span>
                  <span className="font-dm-sans text-[11px] text-[#9cd1c7] uppercase tracking-wider mt-1.5 font-semibold">
                    Point Assessment
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-manrope text-4xl font-bold text-[#ffefb3] leading-none">
                    3
                  </span>
                  <span className="font-dm-sans text-[11px] text-[#9cd1c7] uppercase tracking-wider mt-1.5 font-semibold">
                    Rigorous Tiers
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#002622]/60 rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-[#ffefb3] mb-1">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="font-dm-sans text-xs uppercase font-bold tracking-wider">
                    Venture Alignment
                  </span>
                </div>
                <p className="font-inter text-xs text-[#b8ede2]/80 leading-relaxed">
                  Over 1,400+ prospective founders evaluated across Kerala & global diaspora under Mission Malappuram 2050 framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION 1: WHAT IS THE EPA? + RADAR VISUALIZATION */}
      {/* ========================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Institutional Philosophy
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight leading-tight">
              Not an Academic Exam. <br />A Holistic Founder Diagnostic.
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946] leading-relaxed">
              Standard academic tests quantify theoretical memory. The Entrepreneur Potential Assessment (EPA) measures <strong className="text-[#002622]">venture kinetic energy</strong>—the synthesis of raw execution bias, resourcefulness under radical uncertainty, and clarity when managing capital and people.
            </p>
            <p className="font-inter text-sm text-[#404946] leading-relaxed">
              Modeled directly after the selection methodologies of premier global venture accelerators and sovereign incubators, the EPA provides aspiring builders with absolute diagnostic clarity before they deploy equity or time.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10">
                <Target className="w-5 h-5 text-[#013e37] mb-2" />
                <h4 className="font-manrope text-sm font-bold text-[#002622] mb-1">Empirical Score</h4>
                <p className="font-inter text-xs text-[#404946]">Validated scoring matrix mapped to 8 entrepreneurial competencies.</p>
              </div>
              <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10">
                <Sliders className="w-5 h-5 text-[#013e37] mb-2" />
                <h4 className="font-manrope text-sm font-bold text-[#002622] mb-1">Tailored Track</h4>
                <p className="font-inter text-xs text-[#404946]">Instant institutional placement recommendation into Foundation, Builder, or Scale.</p>
              </div>
            </div>
          </div>

          {/* Diagnostic Radar Model Slate */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#013e37]/10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 bg-[#ebf6f2] p-4 rounded-xl border border-[#013e37]/5">
                <div>
                  <span className="font-manrope font-bold text-sm text-[#002622] block">
                    Candidate Diagnostic Radar Model
                  </span>
                  <span className="font-inter text-xs text-[#707976]">
                    Simulated Output Profile: High-Execution Scale Candidate
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#efe0a5] text-[#221b00] font-dm-sans text-xs uppercase font-bold tracking-wider">
                  Verified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* SVG Hexagon Radar */}
                <div className="flex justify-center items-center py-2">
                  <svg className="w-60 h-60 text-[#002622]" viewBox="0 0 240 240">
                    {/* Background rings */}
                    <polygon className="text-[#dae5e1]" fill="none" points="120,20 206,70 206,170 120,220 34,170 34,70" stroke="currentColor" strokeWidth="1" />
                    <polygon className="text-[#dae5e1]" fill="none" points="120,45 185,82 185,158 120,195 55,158 55,82" stroke="currentColor" strokeWidth="1" />
                    <polygon className="text-[#dae5e1]" fill="none" points="120,70 163,95 163,145 120,170 77,145 77,95" stroke="currentColor" strokeWidth="1" />

                    {/* Diagnostic Polygon */}
                    <polygon
                      fill="#013e37"
                      fillOpacity="0.22"
                      points="120,32 195,78 175,162 120,185 45,148 65,75"
                      stroke="#013e37"
                      strokeWidth="2.5"
                    />

                    {/* Marker Points */}
                    <circle cx="120" cy="32" fill="#695e2f" r="4" />
                    <circle cx="195" cy="78" fill="#695e2f" r="4" />
                    <circle cx="175" cy="162" fill="#695e2f" r="4" />
                    <circle cx="120" cy="185" fill="#695e2f" r="4" />
                    <circle cx="45" cy="148" fill="#695e2f" r="4" />
                    <circle cx="65" cy="75" fill="#695e2f" r="4" />
                  </svg>
                </div>

                {/* Animated Attribute Breakdown */}
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Execution Velocity", pct: 92 },
                    { label: "Unit Economics Instinct", pct: 84 },
                    { label: "Resilience & Grit", pct: 88 },
                    { label: "Market Opportunity Speed", pct: 78 },
                    { label: "Systemic Governance", pct: 81 },
                  ].map((attr) => (
                    <div key={attr.label}>
                      <div className="flex justify-between font-dm-sans text-xs mb-1 font-semibold">
                        <span className="text-[#131d1c]">{attr.label}</span>
                        <span className="text-[#695e2f]">{attr.pct}%</span>
                      </div>
                      <div className="w-full bg-[#ebf6f2] h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${attr.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="bg-[#002622] h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 2: THE 3-STAGE ASSESSMENT ARCHITECTURE */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2] px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
                Evaluation Methodology
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
                The 3-Stage Assessment Architecture
              </h2>
              <p className="font-inter text-sm md:text-base text-[#404946]">
                Calibrated across theoretical instinct, practical grit, and executive leadership demeanor.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-xs flex items-center gap-3 border border-[#013e37]/10">
              <span className="font-dm-sans text-xs uppercase text-[#707976] font-bold">Cumulative Standard:</span>
              <span className="font-manrope text-base font-bold text-[#002622]">100% Comprehensive</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stage 01 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#ebf6f2] text-[#002622] font-dm-sans text-xs uppercase font-bold rounded">
                    STAGE 01
                  </span>
                  <span className="font-manrope text-2xl font-bold text-[#695e2f]">30%</span>
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-[#002622]">
                    Entrepreneur Aptitude Test
                  </h3>
                  <span className="font-dm-sans text-xs text-[#707976] mt-0.5 block">
                    Cognitive & Decision Psychometrics
                  </span>
                </div>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  Assesses non-linear problem solving, opportunity recognition speed, ethical judgment during conflicts, and psychological risk tolerance when deploying capital.
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs font-inter text-[#131d1c]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>60-minute timed psychometric assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Algorithmic risk-affinity profiling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Cognitive agility under constrained variables</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#f1fcf8] p-3 rounded-lg border border-[#013e37]/5">
                <span className="font-dm-sans text-[10px] uppercase text-[#707976] font-bold block">
                  Delivery Format
                </span>
                <span className="font-inter text-xs text-[#002622] font-semibold">
                  Digital Secure Portal (Proctored)
                </span>
              </div>
            </motion.div>

            {/* Stage 02 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#efe0a5] text-[#221b00] font-dm-sans text-xs uppercase font-bold rounded">
                    STAGE 02
                  </span>
                  <span className="font-manrope text-2xl font-bold text-[#695e2f]">50%</span>
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-[#002622]">
                    Practical Founder Challenge
                  </h3>
                  <span className="font-dm-sans text-xs text-[#707976] mt-0.5 block">
                    Operational Execution Sprint
                  </span>
                </div>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  The core benchmark. Candidates receive an unstructured real-world commercial dilemma with actual regional variables and 48 hours to present actionable unit economics, prototype logic, and go-to-market architecture.
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs font-inter text-[#131d1c]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>48-hour asynchronous case challenge</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Micro unit economics & margin modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Customer discovery audio simulation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#f1fcf8] p-3 rounded-lg border border-[#013e37]/5">
                <span className="font-dm-sans text-[10px] uppercase text-[#707976] font-bold block">
                  Delivery Format
                </span>
                <span className="font-inter text-xs text-[#002622] font-semibold">
                  Asynchronous Sprint + Operator Review
                </span>
              </div>
            </motion.div>

            {/* Stage 03 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#ebf6f2] text-[#002622] font-dm-sans text-xs uppercase font-bold rounded">
                    STAGE 03
                  </span>
                  <span className="font-manrope text-2xl font-bold text-[#695e2f]">20%</span>
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-[#002622]">
                    Founder Interview
                  </h3>
                  <span className="font-dm-sans text-xs text-[#707976] mt-0.5 block">
                    Executive Board Examination
                  </span>
                </div>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  A deep-dive session before the EBS Admissions & Fellowship Committee to stress-test coachability, authentic sovereign ambition, and behavioral composure under vigorous cross-examination.
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs font-inter text-[#131d1c]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>30-minute structured panel review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Evaluated by Venture Fellows & 3G Partners</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#013e37] shrink-0 mt-0.5" />
                    <span>Mission Malappuram 2050 ecosystem fit</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#f1fcf8] p-3 rounded-lg border border-[#013e37]/5">
                <span className="font-dm-sans text-[10px] uppercase text-[#707976] font-bold block">
                  Delivery Format
                </span>
                <span className="font-inter text-xs text-[#002622] font-semibold">
                  In-person (EBS Campus) or Virtual Room
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 3: WHO SHOULD TAKE THE EPA? */}
      {/* ========================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Cohort Candidacy
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
              Who Should Take the EPA?
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946]">
              The assessment provides customized diagnostic feedback tailored to your current commercial baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Archetype 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#013e37]/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ebf6f2] flex items-center justify-center text-[#013e37] mb-5">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-[#002622] mb-2">
                  First-Time Founders
                </h3>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  Early-stage innovators seeking to pressure-test their venture viability, execution readiness, and personal grit before committing capital or raising external angel funding.
                </p>
              </div>
              <div className="mt-6 p-3 bg-[#ebf6f2] rounded-lg">
                <span className="font-dm-sans text-[10px] uppercase text-[#695e2f] font-bold block mb-1">
                  Recommended Pathway
                </span>
                <span className="font-inter text-xs font-semibold text-[#002622]">
                  Entrepreneur Foundation & Launch
                </span>
              </div>
            </div>

            {/* Archetype 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#013e37]/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ebf6f2] flex items-center justify-center text-[#013e37] mb-5">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-[#002622] mb-2">
                  Mid-Career Professionals
                </h3>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  Corporate directors and functional leaders with domain mastery evaluating a high-impact transition into full-time venture building or early-stage tech operator roles.
                </p>
              </div>
              <div className="mt-6 p-3 bg-[#ebf6f2] rounded-lg">
                <span className="font-dm-sans text-[10px] uppercase text-[#695e2f] font-bold block mb-1">
                  Recommended Pathway
                </span>
                <span className="font-inter text-xs font-semibold text-[#002622]">
                  Entrepreneur Builder Track
                </span>
              </div>
            </div>

            {/* Archetype 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#013e37]/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ebf6f2] flex items-center justify-center text-[#013e37] mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-[#002622] mb-2">
                  Family Business Successors
                </h3>
                <p className="font-inter text-xs text-[#404946] leading-relaxed">
                  Next-generation family business leaders looking to diversify heritage enterprise lines, digitize operations, and engineer scalable spin-offs in tier-2/3 economic corridors.
                </p>
              </div>
              <div className="mt-6 p-3 bg-[#ebf6f2] rounded-lg">
                <span className="font-dm-sans text-[10px] uppercase text-[#695e2f] font-bold block mb-1">
                  Recommended Pathway
                </span>
                <span className="font-inter text-xs font-semibold text-[#002622]">
                  Entrepreneur Scale & EBS Master
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE ASSESSMENT SAMPLE PREVIEW */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2] px-4 sm:px-6 lg:px-12" id="interactive-preview">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Diagnostic Simulator
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
              Interactive Assessment Sample Preview
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946] leading-relaxed">
              Test your operational thinking against three verified questions excerpted from previous EPA cycles. Experience how our scoring engine evaluates systemic trade-offs rather than rote memorization.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-xs border border-[#013e37]/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#002622] font-semibold text-sm">
                <HelpCircle className="w-4 h-4 text-[#695e2f]" />
                <span>Scoring Insight</span>
              </div>
              <p className="font-inter text-xs text-[#404946] leading-relaxed">
                Full assessments dynamically adapt based on response speed and the structural trade-off balance of your chosen answers.
              </p>
            </div>
          </div>

          {/* Interactive Widget Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#013e37]/10">
            {/* Tabs */}
            <div className="flex items-center gap-2 pb-4 border-b border-[#ebf6f2] mb-6 overflow-x-auto">
              {[
                { id: 1, label: "01. Market Sizing" },
                { id: 2, label: "02. Resource Scarcity" },
                { id: 3, label: "03. Founder Resilience" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-4 py-2 rounded-lg font-dm-sans text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#002622] text-[#ffefb3] shadow-xs"
                      : "bg-[#ebf6f2] text-[#404946] hover:bg-[#dfebe7]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Question 1 */}
            {activeTab === 1 && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between text-xs font-dm-sans">
                  <span className="text-[#695e2f] uppercase font-bold tracking-wider">
                    Pillar: Commercial Calculus
                  </span>
                  <span className="text-[#707976] font-semibold">Weight: 10 Pts</span>
                </div>

                <h4 className="font-manrope text-base sm:text-lg font-bold text-[#002622] leading-snug">
                  A B2B SaaS startup targeting Indian export manufacturing achieves $18K MRR with 4.5% monthly churn. CAC is $3,200 and ARPU is $450/month. What is your primary strategic bottleneck?
                </h4>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 1, letter: "A", text: "Top-of-funnel customer acquisition velocity is excessively constrained by sales cycle.", correct: false },
                    { id: 2, letter: "B", text: "CAC payback period exceeds 7 months while annual churn compounds to nearly 43%, degrading LTV.", correct: true },
                    { id: 3, letter: "C", text: "Gross margins are insufficient to support venture debt financing.", correct: false },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(1, opt.id, opt.correct)}
                      type="button"
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        selectedAnswers[1] === opt.id
                          ? opt.correct
                            ? "bg-[#f1fcf8] border-[#013e37] ring-2 ring-[#013e37]/20"
                            : "bg-[#ffdad6]/20 border-[#ba1a1a]"
                          : "bg-[#f1fcf8] border-[#013e37]/10 hover:bg-[#ebf6f2]"
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-dm-sans text-xs font-bold text-[#002622] shrink-0 border border-[#013e37]/20">
                        {opt.letter}
                      </span>
                      <span className="font-inter text-xs sm:text-sm text-[#131d1c] leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                {feedbacks[1] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-inter leading-relaxed ${
                      feedbacks[1].isCorrect
                        ? "bg-[#ebf6f2] text-[#002622] border border-[#013e37]/20"
                        : "bg-[#ffdad6]/40 text-[#ba1a1a] border border-[#ba1a1a]/30"
                    }`}
                  >
                    {feedbacks[1].text}
                  </motion.div>
                )}
              </div>
            )}

            {/* Question 2 */}
            {activeTab === 2 && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between text-xs font-dm-sans">
                  <span className="text-[#695e2f] uppercase font-bold tracking-wider">
                    Pillar: Execution Under Scarcity
                  </span>
                  <span className="text-[#707976] font-semibold">Weight: 15 Pts</span>
                </div>

                <h4 className="font-manrope text-base sm:text-lg font-bold text-[#002622] leading-snug">
                  Your pilot customer in Malappuram cancels an enterprise agreement 10 days before payroll, reducing your cash runway to 3.5 weeks. How do you deploy leadership action?
                </h4>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 1, letter: "A", text: "Immediately freeze all engineering work and initiate emergency bridge round talks with angels.", correct: false },
                    { id: 2, letter: "B", text: "Pre-sell customized quarterly implementation packages to 3 pipeline prospects at a 20% upfront discount to capture immediate receivables.", correct: true },
                    { id: 3, letter: "C", text: "Furlough 50% of the operational team while preserving personal capital reserves.", correct: false },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(2, opt.id, opt.correct)}
                      type="button"
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        selectedAnswers[2] === opt.id
                          ? opt.correct
                            ? "bg-[#f1fcf8] border-[#013e37] ring-2 ring-[#013e37]/20"
                            : "bg-[#ffdad6]/20 border-[#ba1a1a]"
                          : "bg-[#f1fcf8] border-[#013e37]/10 hover:bg-[#ebf6f2]"
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-dm-sans text-xs font-bold text-[#002622] shrink-0 border border-[#013e37]/20">
                        {opt.letter}
                      </span>
                      <span className="font-inter text-xs sm:text-sm text-[#131d1c] leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                {feedbacks[2] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-inter leading-relaxed ${
                      feedbacks[2].isCorrect
                        ? "bg-[#ebf6f2] text-[#002622] border border-[#013e37]/20"
                        : "bg-[#ffdad6]/40 text-[#ba1a1a] border border-[#ba1a1a]/30"
                    }`}
                  >
                    {feedbacks[2].text}
                  </motion.div>
                )}
              </div>
            )}

            {/* Question 3 */}
            {activeTab === 3 && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between text-xs font-dm-sans">
                  <span className="text-[#695e2f] uppercase font-bold tracking-wider">
                    Pillar: Strategic Resilience
                  </span>
                  <span className="text-[#707976] font-semibold">Weight: 10 Pts</span>
                </div>

                <h4 className="font-manrope text-base sm:text-lg font-bold text-[#002622] leading-snug">
                  After 8 months of product validation, a well-capitalized competitor releases an exact clone backed by 5x your marketing budget. What is your calculated response?
                </h4>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 1, letter: "A", text: "Slash unit prices across all product tiers by 35% to undercut customer transition.", correct: false },
                    { id: 2, letter: "B", text: "Pivot completely to an adjacent unserved market vertical to evade direct brand friction.", correct: false },
                    { id: 3, letter: "C", text: "Double down on hyper-specialized vertical workflow integrations and proprietary data lock-in that cannot be cloned via ad spend.", correct: true },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(3, opt.id, opt.correct)}
                      type="button"
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        selectedAnswers[3] === opt.id
                          ? opt.correct
                            ? "bg-[#f1fcf8] border-[#013e37] ring-2 ring-[#013e37]/20"
                            : "bg-[#ffdad6]/20 border-[#ba1a1a]"
                          : "bg-[#f1fcf8] border-[#013e37]/10 hover:bg-[#ebf6f2]"
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-dm-sans text-xs font-bold text-[#002622] shrink-0 border border-[#013e37]/20">
                        {opt.letter}
                      </span>
                      <span className="font-inter text-xs sm:text-sm text-[#131d1c] leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                {feedbacks[3] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-inter leading-relaxed ${
                      feedbacks[3].isCorrect
                        ? "bg-[#ebf6f2] text-[#002622] border border-[#013e37]/20"
                        : "bg-[#ffdad6]/40 text-[#ba1a1a] border border-[#ba1a1a]/30"
                    }`}
                  >
                    {feedbacks[3].text}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. COHORT REGISTRATION FORM */}
      {/* ========================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]" id="assessment-form">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Formal Enrollment
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
              Register for the Next EPA Cycle
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946] leading-relaxed">
              EPA assessments are administered bi-weekly in synchronized cohorts. Successful completion unlocks prioritized fellowship consideration, faculty mentorship matching, and institutional funding eligibility under Mission Malappuram 2050.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#013e37]/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#002622] font-semibold text-sm">
                <Calendar className="w-4 h-4 text-[#695e2f]" />
                <span>Upcoming Assessment Cycles</span>
              </div>
              <div className="flex flex-col gap-2 font-inter text-xs text-[#404946]">
                <div className="flex justify-between py-1.5 border-b border-[#ebf6f2]">
                  <span>Cycle 04 (March 22–24, 2025)</span>
                  <span className="text-[#695e2f] font-bold">Registration Closing Soon</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ebf6f2]">
                  <span>Cycle 05 (April 05–07, 2025)</span>
                  <span className="text-[#002622] font-semibold">Open for Submissions</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Cycle 06 (April 19–21, 2025)</span>
                  <span className="text-[#707976]">Scheduled</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
              <p className="font-inter text-xs text-[#404946] leading-relaxed">
                Institutional Confidentiality: All intellectual property and business disclosures within the EPA are protected under EBS Non-Disclosure Protocol 14-B.
              </p>
            </div>
          </div>

          {/* Registration Form Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-[#013e37]/10">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#ebf6f2] text-[#002622] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#002622]" />
                </div>
                <h3 className="font-manrope text-2xl font-bold text-[#002622]">
                  Registration Docket Confirmed
                </h3>
                <p className="font-inter text-sm text-[#404946] max-w-md">
                  Thank you, <strong className="text-[#002622]">{regForm.name}</strong>. Your testing token and secure proctored portal link will be delivered via email 24 hours prior to Cycle ({regForm.cycle}).
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  type="button"
                  className="mt-4 bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#013e37] transition-colors"
                >
                  Register Another Candidate
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      placeholder="founder@domain.com"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      placeholder="+91 98460 00000"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Current Professional Status *
                    </label>
                    <select
                      required
                      value={regForm.status}
                      onChange={(e) => setRegForm({ ...regForm, status: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] bg-white focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    >
                      <option value="">Select current stage...</option>
                      <option value="student">Student / Early Graduate</option>
                      <option value="professional">Working Professional / Executive</option>
                      <option value="founder">Active Early-Stage Founder</option>
                      <option value="business_owner">Family Business / Established Owner</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Preferred Programme Track *
                    </label>
                    <select
                      required
                      value={regForm.track}
                      onChange={(e) => setRegForm({ ...regForm, track: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] bg-white focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    >
                      <option value="">Select track interest...</option>
                      <option value="foundation">Entrepreneur Foundation (0-1 Ideation)</option>
                      <option value="builder">Entrepreneur Builder (Validation & MVP)</option>
                      <option value="launch">Entrepreneur Launch (Go-to-Market)</option>
                      <option value="scale">Entrepreneur Scale (Revenue & Capital)</option>
                      <option value="master">EBS Master Fellowship (Executive Cohort)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Preferred Assessment Cycle *
                    </label>
                    <select
                      required
                      value={regForm.cycle}
                      onChange={(e) => setRegForm({ ...regForm, cycle: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] bg-white focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    >
                      <option value="2025-03-22">Cycle 04: March 22–24, 2025</option>
                      <option value="2025-04-05">Cycle 05: April 05–07, 2025</option>
                      <option value="2025-04-19">Cycle 06: April 19–21, 2025</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    required
                    checked={regForm.nda}
                    onChange={(e) => setRegForm({ ...regForm, nda: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#002622] focus:ring-[#002622]"
                  />
                  <label htmlFor="ndaCheck" className="font-inter text-xs text-[#404946] leading-relaxed cursor-pointer">
                    I certify that all responses provided in the EPA will represent my authentic strategic intuition. I consent to EBS evaluation standards under 3G Alliance guidance.
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-lg shadow-md hover:bg-[#013e37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Assessment Registration</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-dm-sans text-xs text-[#707976]">
                    Fee: Complimentary under 2025 Fellowship Grant
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SECTION 6: FAQS */}
      {/* ========================================================= */}
      <section className="w-full py-24 bg-[#ebf6f2] px-4 sm:px-6 lg:px-12 border-t border-[#013e37]/10">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Institutional Governance
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
              Frequently Addressed Inquiries
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946]">
              Scoring clarity, confidentiality protocols, and re-examination guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl p-6 shadow-xs border border-[#013e37]/10 flex flex-col justify-between"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    type="button"
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <h4 className="font-manrope text-base font-bold text-[#002622]">
                      {faq.q}
                    </h4>
                    <ChevronDown
                      className={`w-5 h-5 text-[#695e2f] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-[#ebf6f2]"
                      >
                        <p className="font-inter text-xs text-[#404946] leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
