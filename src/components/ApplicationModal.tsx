"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: string;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  defaultTrack = "builder",
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "founder",
    track: defaultTrack,
    statement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#013e37", "#ffefb3", "#b8ede2"],
      });
    } catch {
      // ignore
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
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
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-[#002622]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#013e37]/15 overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-[#002622] text-white p-6 relative">
              <button
                onClick={handleResetAndClose}
                type="button"
                className="absolute right-4 top-4 p-2 text-[#9cd1c7] hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffefb3]/15 text-[#ffefb3] text-xs font-dm-sans uppercase font-bold tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Admissions Cycle 2025–2026
              </div>
              <h3 className="font-manrope text-2xl font-bold text-white tracking-tight">
                Apply for EBS Venture Fellowship
              </h3>
              <p className="font-inter text-xs text-[#9cd1c7] mt-1">
                In Alliance with 3G & Mission Malappuram 2050
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-6 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#e5f0ed] text-[#013e37] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#013e37]" />
                  </div>
                  <div>
                    <h4 className="font-manrope text-xl font-bold text-[#002622]">
                      Application Docket Registered
                    </h4>
                    <p className="font-inter text-sm text-[#404946] mt-2 max-w-md">
                      Thank you, <strong className="text-[#002622]">{formData.name}</strong>. Your candidate file has been created. The EBS Admissions Secretariat will dispatch your EPA diagnostic link within 24 hours.
                    </p>
                  </div>
                  <div className="p-4 bg-[#f1fcf8] rounded-xl border border-[#013e37]/10 w-full text-left mt-2">
                    <span className="font-dm-sans text-xs uppercase font-bold text-[#695e2f] block mb-1">
                      Target Track Selected
                    </span>
                    <span className="font-manrope text-sm font-semibold text-[#002622] capitalize">
                      {formData.track} Track • Cohort Consideration
                    </span>
                  </div>
                  <button
                    onClick={handleResetAndClose}
                    type="button"
                    className="mt-4 bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#013e37] transition-colors"
                  >
                    Done & Return to Site
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                      />
                    </div>
                    <div>
                      <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="founder@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946] block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98460 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                      />
                    </div>
                    <div>
                      <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946] block mb-1">
                        Programme Interest *
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] bg-white focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                      >
                        <option value="foundation">01. Entrepreneur Foundation (3 Mo)</option>
                        <option value="builder">02. Entrepreneur Builder (6 Mo)</option>
                        <option value="launch">03. Entrepreneur Launch (1 Yr)</option>
                        <option value="scale">04. Entrepreneur Scale (2 Yrs)</option>
                        <option value="master">05. EBS Master Fellowship (3 Yrs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946] block mb-1">
                      Current Venture or Career Objective
                    </label>
                    <textarea
                      rows={2}
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      placeholder="Briefly state your venture vision, domain focus, or scaling target..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-xs text-[#707976] font-inter">
                    <ShieldCheck className="w-4 h-4 text-[#013e37] shrink-0" />
                    <span>Candidate confidentiality protected under EBS Non-Disclosure Protocol.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg hover:bg-[#013e37] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Submit Application Docket</span>
                      <ArrowRight className="w-4 h-4 text-[#ffefb3]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
