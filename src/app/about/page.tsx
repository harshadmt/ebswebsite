"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  Landmark, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Users, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  Briefcase 
} from "lucide-react";

export default function AboutPage() {
  const { openApplyModal } = useModal();

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* Hero Header */}
      <section className="relative w-full bg-[#002622] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#013e37]/70 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 w-fit border border-white/10">
              <Landmark className="w-3.5 h-3.5 text-[#ffefb3]" />
              <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                Institutional Mandate & Charter
              </span>
            </div>

            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              An Execution Institute. <br />
              <span className="text-[#ffefb3] italic font-normal">A Sovereign Catalyst.</span>
            </h1>

            <p className="font-inter text-base sm:text-lg text-[#9cd1c7] max-w-2xl leading-relaxed">
              Entrepreneurs Business School (EBS) was founded on a simple conviction: theoretical business administration cannot forge sovereign founders. We build enduring companies through real venture practice, global mentor networks, and civic alignment.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#013e37] p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
            <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold block mb-2">
              Alliance Anchor
            </span>
            <h3 className="font-manrope text-xl font-bold text-white mb-2">
              Mission Malappuram 2050
            </h3>
            <p className="font-inter text-xs text-[#9cd1c7] leading-relaxed">
              In alliance with 3G and the regional civic transformation charter of Mission Malappuram 2050, EBS serves as the venture incubation engine to catalyze high-growth industries and generational prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="max-w-2xl">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
              Pedagogical Pillars
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#002622] tracking-tight">
              The 4 Non-Negotiable Tenets of EBS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Skin in the Game",
                desc: "We don't teach from outdated textbooks. Every curriculum module is anchored to live customer validation, cashflow generation, or real venture deliverables.",
              },
              {
                num: "02",
                title: "Practicing Founders First",
                desc: "100% of our faculty and mentors are active unicorn founders, venture capitalists, or industrial leaders who have built and scaled multi-million dollar enterprises.",
              },
              {
                num: "03",
                title: "Sovereign Long Horizon",
                desc: "We look past quick flip app gimmicks to back founders engineering generational holding companies, sustainable industrial assets, and systemic infrastructure.",
              },
              {
                num: "04",
                title: "Empirical Accountability",
                desc: "Our admission and stage gates are governed by the rigorous Entrepreneur Potential Assessment (EPA), ensuring our cohorts are dense with relentless operators.",
              },
            ].map((tenet) => (
              <div
                key={tenet.num}
                className="bg-white p-7 rounded-xl shadow-xs border border-[#013e37]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-manrope text-4xl font-bold text-[#695e2f] block mb-3">
                    {tenet.num}
                  </span>
                  <h3 className="font-manrope text-lg font-bold text-[#002622] mb-2">
                    {tenet.title}
                  </h3>
                  <p className="font-inter text-xs text-[#404946] leading-relaxed">
                    {tenet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Malappuram 2050 Deep Dive */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#ebf6f2] border-t border-[#013e37]/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold">
              Civic Transformation Charter
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002622] tracking-tight">
              Mission Malappuram 2050: The Generational Vision
            </h2>
            <p className="font-inter text-sm md:text-base text-[#404946] leading-relaxed">
              Mission Malappuram 2050 is a multi-decade civic and economic modernization blueprint designed to position the Malabar corridor as an international innovation and industrial powerhouse.
            </p>
            <p className="font-inter text-sm text-[#404946] leading-relaxed">
              Through strategic alliances with 3G and global diaspora capital, EBS serves as the venture crucible—training 1,000+ local founders to build globally competitive, export-oriented companies rooted in regional soil.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#013e37]/10">
                <span className="font-manrope text-2xl font-bold text-[#002622] block">1,000+</span>
                <span className="font-dm-sans text-xs uppercase text-[#695e2f] font-bold">Ventures by 2050</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#013e37]/10">
                <span className="font-manrope text-2xl font-bold text-[#002622] block">$1B+</span>
                <span className="font-dm-sans text-xs uppercase text-[#695e2f] font-bold">Cumulative Enterprise Value Target</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#013e37]/10">
              <Image
                src="/assets/campus.jpg"
                alt="Institutional campus architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#002622] text-white px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white">
            Ready to shape the future of enterprise?
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#9cd1c7]">
            Admission into our 2025 cohort is open for applicants who pass the EPA Diagnostic.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => openApplyModal("about-cta")}
              type="button"
              className="bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#fff5d1] transition-all shadow-md cursor-pointer"
            >
              Apply for Fellowship
            </button>
            <Link
              href="/epa"
              className="bg-white/10 text-white font-dm-sans font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-md hover:bg-white/20 transition-all border border-white/15"
            >
              Take EPA Diagnostic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
