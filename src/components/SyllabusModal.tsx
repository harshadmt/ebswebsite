"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, BookOpen, Clock, Award, Layers } from "lucide-react";

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  programmeName: string;
}

export default function SyllabusModal({
  isOpen,
  onClose,
  programmeName,
}: SyllabusModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  const getSyllabusDetails = (name: string) => {
    switch (name) {
      case "Entrepreneur Foundation":
        return {
          duration: "3 Months • Spring / Autumn",
          level: "Stage 01 • Ideation & Validation",
          summary: "Uncover innate founder aptitude, rigorously stress-test business ideas, and cultivate sovereign baseline commercial fluency.",
          modules: [
            { title: "Module 1: Market Opportunity Sizing", desc: "TAM/SAM/SOM bottom-up stress testing & problem validation interviews" },
            { title: "Module 2: Value Proposition Design", desc: "Customer pain empathy mapping & differentiated positioning canvas" },
            { title: "Module 3: Financial Literacy for Founders", desc: "Unit economics foundation, burn rate, and gross margin math" },
            { title: "Module 4: Lean Prototyping & Validation", desc: "Micro-validations, fake door tests, and low-code experiment design" },
          ],
          deliverable: "Feasibility Dossier & Go/No-Go Decision Matrix with verified customer sentiment analysis.",
        };
      case "Entrepreneur Builder":
        return {
          duration: "6 Months • Venture Sprint Track",
          level: "Stage 02 • MVP & Customer Traction",
          summary: "Transform early validation signals into functional products, scalable unit economics, and certified initial customer demand.",
          modules: [
            { title: "Module 1: Customer Discovery Loops", desc: "100-interview qualitative validation framework and synthesis" },
            { title: "Module 2: Product-Market Fit Engineering", desc: "Sean Ellis quantitative test metrics and early cohort tracking" },
            { title: "Module 3: Unit Economics Deep-Dive", desc: "CAC, LTV, Payback periods, and contribution margin optimization" },
            { title: "Module 4: Regulatory & IP Defense", desc: "Founders agreement, initial trade secrets, trademarks, and bylaws" },
          ],
          deliverable: "Working MVP with verified initial paying customer cohort & unit economics audit.",
        };
      case "Entrepreneur Launch":
        return {
          duration: "1 Year • Venture Incubation Immersion",
          level: "Stage 03 • Commercial Engine & Seed Readiness",
          summary: "Build and operationalize an institutional venture from incorporation through repeatable sales machines and institutional seed capital.",
          modules: [
            { title: "Module 1: Go-To-Market Execution", desc: "Outbound SDR engines, inbound funnels, and enterprise sales cycles" },
            { title: "Module 2: Sales Pipeline Architecture", desc: "High-ticket contract negotiation, MSA agreements, and closing cadence" },
            { title: "Module 3: Seed Fundraising Mastery", desc: "Cap table math, SAFE notes, priced rounds, and VC pitch rooms" },
            { title: "Module 4: Institutional Operating Systems", desc: "Company OKRs, financial dashboarding, and hiring founding engineers" },
          ],
          deliverable: "Live operational enterprise with recurring revenue, audited books, and seed round syndicated.",
        };
      case "Entrepreneur Scale":
        return {
          duration: "2 Years • Growth Velocity Track",
          level: "Stage 04 • Multi-Market & Series A/B",
          summary: "Scale organizational velocity, orchestrate multi-city operations, structure executive leadership, and secure Series A/B growth capital.",
          modules: [
            { title: "Module 1: Organizational Architecture", desc: "Building executive benches, equity incentives, and VP compensation" },
            { title: "Module 2: High-Growth Capital Strategy", desc: "Structuring venture debt, equity synthetics, and multi-fund syndicates" },
            { title: "Module 3: International Expansion", desc: "Cross-border taxation, foreign subsidiaries, and global trade corridors" },
            { title: "Module 4: Strategic M&A & Moats", desc: "Acquihiring competitors, channel exclusive agreements, and defense" },
          ],
          deliverable: "Cross-regional commercial footprint with Series A/B institutional term sheet & C-suite bench.",
        };
      default:
        return {
          duration: "3 Years • Sovereign Fellowship",
          level: "Stage 05 • Flagship Conglomerate Track",
          summary: "The pinnacle academic credential for industry-shaping business statesmen, conglomerate architects, and multi-generational civic leaders.",
          modules: [
            { title: "Module 1: Conglomerate Architecture", desc: "Holding company asset orchestration, tax shielding, & capital recycling" },
            { title: "Module 2: Sovereign Capital Allocation", desc: "Sovereign wealth interplay, buyouts, and IPO syndication" },
            { title: "Module 3: Geopolitical Market Dynamics", desc: "Trade corridors, sovereign industrial policy, resilient supply chains" },
            { title: "Module 4: Legacy & Institutional Governance", desc: "Multi-generational wealth charters, trusts, and systemic stewardship" },
          ],
          deliverable: "Multi-venture holding company structure, cross-sector industrial leadership, and permanent legacy capital.",
        };
    }
  };

  const details = getSyllabusDetails(programmeName);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      // Simulate file download
      const element = document.createElement("a");
      const file = new Blob([
        `ENTREPRENEURS BUSINESS SCHOOL (EBS)\nSyllabus Monograph: ${programmeName}\nDuration: ${details.duration}\nLevel: ${details.level}\n\nOutcome Deliverable:\n${details.deliverable}\n\nModules:\n${details.modules.map((m, i) => `${i + 1}. ${m.title}\n   ${m.desc}`).join("\n\n")}\n\nIn Alliance with 3G & Mission Malappuram 2050\nOfficial Registry: registrar@ebs-institution.org`
      ], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `EBS_${programmeName.replace(/\s+/g, "_")}_Syllabus_2025.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#002622]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#013e37]/15 overflow-hidden z-10"
          >
            {/* Header Banner */}
            <div className="bg-[#002622] text-white p-6 relative">
              <button
                onClick={onClose}
                type="button"
                className="absolute right-4 top-4 p-2 text-[#9cd1c7] hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffefb3]/15 text-[#ffefb3] text-xs font-dm-sans uppercase font-bold tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                Academic Monograph & Syllabus
              </div>
              <h3 className="font-manrope text-2xl font-bold text-white tracking-tight">
                {programmeName}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-inter text-[#9cd1c7]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ffefb3]" />
                  {details.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#ffefb3]" />
                  {details.level}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto flex flex-col gap-6">
              <div>
                <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#695e2f] block mb-1">
                  Executive Pedagogical Objective
                </span>
                <p className="font-inter text-sm text-[#404946] leading-relaxed">
                  {details.summary}
                </p>
              </div>

              <div>
                <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#695e2f] block mb-3">
                  Core Curricular Modules
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {details.modules.map((m, idx) => (
                    <div
                      key={m.title}
                      className="p-3.5 rounded-lg bg-[#f1fcf8] border border-[#013e37]/10 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#013e37] text-[#ffefb3] font-dm-sans text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-manrope text-sm font-bold text-[#002622]">
                          {m.title}
                        </h4>
                        <p className="font-inter text-xs text-[#404946] mt-0.5">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#ebf6f2] rounded-xl border border-[#013e37]/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#013e37] block">
                    Capstone Deliverable & Validation Output
                  </span>
                  <p className="font-inter text-xs text-[#404946] mt-1 leading-relaxed">
                    {details.deliverable}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#ebf6f2]">
                <button
                  onClick={handleDownload}
                  type="button"
                  className="w-full sm:w-auto bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#013e37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {downloaded ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#ffefb3]" />
                      <span>Dossier Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#ffefb3]" />
                      <span>Download Full Syllabus PDF</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className="font-dm-sans text-xs font-semibold text-[#707976] hover:text-[#002622] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
