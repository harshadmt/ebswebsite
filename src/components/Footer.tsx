"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Landmark, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#002622] text-white pt-20 pb-12 border-t border-[#013e37]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Civic Integration (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 p-1 bg-white rounded-md overflow-hidden">
                <Image
                  src="/assets/logo1.jpg"
                  alt="EBS Crest"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-manrope text-lg font-bold text-white tracking-tight leading-none">
                  Entrepreneurs Business School
                </span>
                <span className="font-dm-sans text-[11px] uppercase tracking-wider text-[#ffefb3] mt-1 font-medium">
                  3G Alliance & Mission 2050
                </span>
              </div>
            </div>

            <p className="font-inter text-sm text-[#9cd1c7] leading-relaxed">
              An academic venture institution engineered to transform ambitious founders and scalable enterprises. Operating in institutional alignment with 3G and the civic transformation vision of Mission Malappuram 2050.
            </p>

            <div className="p-4 bg-[#013e37] rounded-xl border border-[#013e37]/80">
              <div className="flex items-center gap-2 mb-1">
                <Landmark className="w-4 h-4 text-[#ffefb3]" />
                <span className="font-dm-sans text-xs uppercase tracking-wider text-[#ffefb3] font-bold">
                  Civic Blueprint Integration
                </span>
              </div>
              <p className="font-inter text-xs text-[#b8ede2]/80 leading-relaxed">
                Mission Malappuram 2050 Sovereign Venture Fellowship & Regional High-Growth Enterprise Network.
              </p>
            </div>
          </div>

          {/* Column 2: Academic Tracks (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-dm-sans text-xs font-bold uppercase tracking-widest text-[#ffefb3]">
              Academic Tracks
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/programmes#foundation"
                className="font-inter text-sm text-[#9cd1c7] hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Entrepreneur Foundation</span>
                <span className="text-xs text-[#76a9a0] group-hover:text-[#ffefb3] transition-colors">3 Mo</span>
              </Link>
              <Link
                href="/programmes#builder"
                className="font-inter text-sm text-[#9cd1c7] hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Entrepreneur Builder</span>
                <span className="text-xs text-[#76a9a0] group-hover:text-[#ffefb3] transition-colors">6 Mo</span>
              </Link>
              <Link
                href="/programmes#launch"
                className="font-inter text-sm text-[#9cd1c7] hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Entrepreneur Launch</span>
                <span className="text-xs text-[#76a9a0] group-hover:text-[#ffefb3] transition-colors">1 Yr</span>
              </Link>
              <Link
                href="/programmes#scale"
                className="font-inter text-sm text-[#9cd1c7] hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Entrepreneur Scale</span>
                <span className="text-xs text-[#76a9a0] group-hover:text-[#ffefb3] transition-colors">2 Yrs</span>
              </Link>
              <Link
                href="/programmes#master"
                className="font-inter text-sm text-[#ffefb3] hover:text-white transition-colors flex items-center justify-between font-medium group"
              >
                <span>EBS Master Fellowship</span>
                <span className="text-xs text-[#ffefb3] bg-[#013e37] px-1.5 py-0.5 rounded">3 Yrs</span>
              </Link>
            </nav>
          </div>

          {/* Column 3: Admissions & Insights (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-dm-sans text-xs font-bold uppercase tracking-widest text-[#ffefb3]">
              Admissions & Insights
            </span>
            <nav className="flex flex-col gap-2.5 font-inter text-sm text-[#9cd1c7]">
              <Link href="/epa" className="hover:text-white transition-colors">
                EPA Diagnostic
              </Link>
              <Link href="/programmes#matrix" className="hover:text-white transition-colors">
                Curriculum Matrix
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About Mission 2050
              </Link>
              <Link href="/news" className="hover:text-white transition-colors">
                News & Events
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Registry & Contact
              </Link>
            </nav>
          </div>

          {/* Column 4: Founder Dispatch (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-dm-sans text-xs font-bold uppercase tracking-widest text-[#ffefb3]">
              Founder Dispatch
            </span>
            <p className="font-inter text-xs text-[#9cd1c7] leading-relaxed">
              Curated venture research, tier-2 scaling monographs, and admission cycle updates directly from faculty.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#013e37] text-[#ffefb3] rounded-lg border border-[#ffefb3]/20 flex items-center gap-2 text-xs font-inter">
                <CheckCircle2 className="w-4 h-4 text-[#ffefb3]" />
                <span>Subscription recorded. Welcome to the dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#707976] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="founder@enterprise.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-md bg-white text-[#131d1c] font-inter text-xs placeholder:text-[#707976] focus:outline-none focus:ring-2 focus:ring-[#ffefb3]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ffefb3] text-[#002622] font-dm-sans font-bold text-xs uppercase tracking-wider py-2.5 rounded-md hover:bg-[#f2e2a7] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-2 text-[11px] text-[#76a9a0] mt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Zero spam. Strict institutional compliance.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#013e37] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-inter text-[#76a9a0]">
          <p>
            © {new Date().getFullYear()} Entrepreneurs Business School (EBS). All institutional rights reserved. Associated with 3G & Mission Malappuram 2050.
          </p>
          <div className="flex items-center gap-6 font-dm-sans uppercase tracking-wider text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/governance" className="hover:text-white transition-colors">
              Institutional Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
