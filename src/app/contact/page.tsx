"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building 
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "admissions",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#013e37", "#ffefb3", "#b8ede2"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#f1fcf8]">
      {/* Header */}
      <section className="relative w-full bg-[#002622] text-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 w-fit border border-white/10">
            <Building className="w-3.5 h-3.5 text-[#ffefb3]" />
            <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
              Institutional Registry
            </span>
          </div>

          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Connect with EBS
          </h1>

          <p className="font-inter text-base text-[#9cd1c7] max-w-2xl">
            Inquiries regarding fellowship admissions, research monographs, partner syndicates, or Mission Malappuram 2050 testbed access.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#f1fcf8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-[#695e2f] font-bold block mb-2">
                Campus & Secretariat
              </span>
              <h2 className="font-manrope text-3xl font-bold text-[#002622]">
                Admissions & Registry Office
              </h2>
              <p className="font-inter text-sm text-[#404946] mt-3 leading-relaxed">
                Our central registry coordinates admissions across India, the GCC, and international diaspora hubs in alliance with 3G.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#013e37]/10">
                <MapPin className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-manrope text-sm font-bold text-[#002622]">
                    Campus Address
                  </h4>
                  <p className="font-inter text-xs text-[#404946] mt-1 leading-relaxed">
                    Entrepreneurs Business School (EBS)<br />
                    Venture Innovation Corridor, Malappuram<br />
                    Kerala, India - 676505
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#013e37]/10">
                <Mail className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-manrope text-sm font-bold text-[#002622]">
                    Official Correspondence
                  </h4>
                  <p className="font-inter text-xs text-[#404946] mt-1 leading-relaxed">
                    Admissions: admissions@ebs-institution.org<br />
                    Research & Syndicates: secretariat@ebs-institution.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#013e37]/10">
                <Phone className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-manrope text-sm font-bold text-[#002622]">
                    Telephone & Hotline
                  </h4>
                  <p className="font-inter text-xs text-[#404946] mt-1 leading-relaxed">
                    Admissions Desk: +91 (483) 273-0050<br />
                    Direct WhatsApp: +91 98460 20500
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#013e37]/10">
                <Clock className="w-5 h-5 text-[#013e37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-manrope text-sm font-bold text-[#002622]">
                    Operating Hours
                  </h4>
                  <p className="font-inter text-xs text-[#404946] mt-1 leading-relaxed">
                    Monday – Friday: 09:00 – 18:00 IST<br />
                    Saturday: 10:00 – 14:00 IST (Cohort Practicums)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-[#013e37]/10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#ebf6f2] text-[#002622] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#002622]" />
                </div>
                <h3 className="font-manrope text-2xl font-bold text-[#002622]">
                  Correspondence Recorded
                </h3>
                <p className="font-inter text-sm text-[#404946] max-w-md">
                  Thank you, <strong className="text-[#002622]">{form.name}</strong>. An EBS registry officer will respond to your inquiry within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  type="button"
                  className="mt-4 bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#013e37] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-manrope text-xl font-bold text-[#002622] mb-1">
                  Submit Institutional Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="founder@enterprise.com"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98460 00000"
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                      Nature of Inquiry *
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] bg-white focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                    >
                      <option value="admissions">Fellowship Admissions & EPA</option>
                      <option value="curriculum">Programme Curriculum Question</option>
                      <option value="partnership">3G / Mission 2050 Partnership</option>
                      <option value="media">Media & Monograph Inquiry</option>
                      <option value="other">General Registry Support</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-dm-sans text-xs font-bold uppercase tracking-wider text-[#404946]">
                    Message / Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Provide details regarding your background, venture status, or specific question..."
                    className="px-4 py-3 rounded-lg border border-[#c0c8c5] text-sm font-inter text-[#131d1c] focus:outline-none focus:border-[#013e37] focus:ring-2 focus:ring-[#013e37]/15"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#707976] font-inter">
                  <ShieldCheck className="w-4 h-4 text-[#013e37] shrink-0" />
                  <span>All communications are treated with strict institutional discretion.</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#002622] text-[#ffefb3] font-dm-sans font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow-md hover:bg-[#013e37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Dispatch Inquiry to Registry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
