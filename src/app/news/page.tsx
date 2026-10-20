"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Clock 
} from "lucide-react";

export default function NewsPage() {
  const { openApplyModal } = useModal();
  const [filter, setFilter] = useState("all");

  const newsItems = [
    {
      category: "events",
      type: "Upcoming Academic Summit",
      date: "November 28, 2025",
      location: "Academic Hall & Global Broadcast",
      title: "Mission Malappuram 2050 Venture Summit",
      desc: "Global venture partners, sovereign wealth delegators, and academic mentors gather to preview high-trajectory projects graduating from the EBS Scale & Master Fellowship tracks.",
      image: "/assets/summit.jpg",
      cta: "Request Observer Pass",
      action: () => openApplyModal("summit"),
    },
    {
      category: "research",
      type: "Research Monograph",
      date: "Vol. IX • Q3 2025",
      location: "EBS Academic Press",
      title: "Unit Economics of Emerging Tier-2 Hubs",
      desc: "Empirical field analysis dissecting sustainable CAC-to-LTV multipliers in decentralised industrial districts under Mission Malappuram 2050 framework.",
      image: "/assets/campus.jpg",
      cta: "Download Monograph PDF",
      action: () => alert("Downloading Monograph Vol. IX: Unit Economics of Emerging Tier-2 Hubs..."),
    },
    {
      category: "research",
      type: "Executive Briefing",
      date: "Vol. VII • Q2 2025",
      location: "EBS Faculty Dispatch",
      title: "Founder Psychology Under Capital Stress",
      desc: "Evaluating cognitive distortion, strategic conviction, and burn-rate governance during prolonged multi-quarter venture downcycles.",
      image: "/assets/amphitheatre.jpg",
      cta: "Download Briefing PDF",
      action: () => alert("Downloading Executive Briefing Vol. VII: Founder Psychology Under Capital Stress..."),
    },
    {
      category: "masterclass",
      type: "Masterclass Series",
      date: "December 05, 2025",
      location: "Virtual Executive Seminar Room",
      title: "Defensible Cap Tables for Series A-to-C Scaling",
      desc: "Live interactive workshop with institutional legal counsels on secondary market rights, liquidation preferences, and founder voting control.",
      image: "/assets/summit.jpg",
      cta: "Register for Masterclass",
      action: () => openApplyModal("masterclass"),
    },
    {
      category: "events",
      type: "Cohort Orientation",
      date: "January 15, 2026",
      location: "EBS Campus & Hybrid Labs",
      title: "Spring 2026 Fellowship Orientation & EPA Induction",
      desc: "Welcoming 60 selected founders across Foundation, Builder, and Launch tracks for formal cohort matriculation and syndicate onboarding.",
      image: "/assets/campus.jpg",
      cta: "View Cohort Schedule",
      action: () => openApplyModal("orientation"),
    },
    {
      category: "research",
      type: "Policy Whitepaper",
      date: "Vol. X • Q4 2025",
      location: "3G Alliance Policy Secretariat",
      title: "Cross-Border Industrial Corridors & Diaspora Capital Syndication",
      desc: "A framework for structuring non-resident angel investment SPVs in compliant industrial clusters across South Asia and the GCC.",
      image: "/assets/campus.jpg",
      cta: "Download Policy Paper",
      action: () => alert("Downloading Policy Paper Vol. X: Diaspora Capital Syndication..."),
    },
  ];

  const filtered = newsItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* Header */}
      <section className="relative w-full bg-[#002622] text-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 w-fit border border-white/10">
            <Calendar className="w-3.5 h-3.5 text-[#ffefb3]" />
            <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
              Dispatch & Monographs
            </span>
          </div>

          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            News, Events & Research Monographs
          </h1>

          <p className="font-inter text-base text-[#9cd1c7] max-w-2xl">
            Thought leadership, venture scaling playbooks, upcoming academic summits, and announcements from the Entrepreneurs Business School and 3G Alliance.
          </p>
        </div>
      </section>

      {/* Filter strip */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#ebf6f2] px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 overflow-x-auto">
          {[
            { id: "all", label: "All Dispatches" },
            { id: "events", label: "Events & Summits" },
            { id: "research", label: "Research Monographs" },
            { id: "masterclass", label: "Masterclasses" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              type="button"
              className={`px-4 py-2 font-dm-sans text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? "bg-[#002622] text-[#ffefb3] shadow-xs"
                  : "text-[#404946] hover:bg-[#ebf6f2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all border border-[#013e37]/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-[#013e37]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#002622] text-[#ffefb3] px-3 py-1 rounded font-dm-sans text-[11px] uppercase font-bold tracking-wider">
                    {item.type}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-dm-sans text-[#707976] mb-2 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#695e2f]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-manrope text-lg font-bold text-[#002622] mb-2 group-hover:text-[#013e37] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-inter text-xs text-[#404946] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#ebf6f2] mt-4 pt-4">
                <button
                  onClick={item.action}
                  type="button"
                  className="inline-flex items-center gap-1.5 font-dm-sans text-xs uppercase font-bold text-[#002622] hover:text-[#695e2f] transition-colors cursor-pointer tracking-wider"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
