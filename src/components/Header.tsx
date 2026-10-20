"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Compass, 
  Layers,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface HeaderProps {
  onOpenApply?: () => void;
}

export default function Header({ onOpenApply }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesDropdown, setProgrammesDropdown] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Programmes", 
      href: "/programmes",
      hasDropdown: true,
      dropdownItems: [
        { 
          stage: "Stage 01", 
          title: "Entrepreneur Foundation", 
          desc: "Feasibility, unit economics & founder mindset", 
          duration: "3 Mo",
          href: "/programmes#foundation" 
        },
        { 
          stage: "Stage 02", 
          title: "Entrepreneur Builder", 
          desc: "MVP rapid build & initial customer traction", 
          duration: "6 Mo",
          href: "/programmes#builder" 
        },
        { 
          stage: "Stage 03", 
          title: "Entrepreneur Launch", 
          desc: "Go-to-market scaling & seed syndicate readiness", 
          duration: "1 Yr",
          href: "/programmes#launch" 
        },
        { 
          stage: "Stage 04", 
          title: "Entrepreneur Scale", 
          desc: "Series A/B velocity & international corridors", 
          duration: "2 Yrs",
          href: "/programmes#scale" 
        },
        { 
          stage: "Stage 05", 
          title: "EBS Master Fellowship", 
          desc: "Sovereign conglomerate building & diaspora capital", 
          duration: "3 Yrs",
          href: "/programmes#master", 
          featured: true 
        },
      ]
    },
    { name: "EPA Diagnostic", href: "/epa" },
    { name: "About Us", href: "/about" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pointer-events-none transition-all duration-300">
      {/* Floating Glass Island */}
      <div
        className={`pointer-events-auto relative w-full rounded-2xl lg:rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2.5 flex items-center justify-between gap-3 ${
          scrolled ? "glass-island-scrolled shadow-xl py-2 sm:py-2.5" : "glass-island shadow-lg"
        }`}
      >
        {/* Specular Highlight along top rim */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none rounded-t-full" />

        {/* 1. Left: Official Brand Identity */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0" aria-label="Entrepreneurs Business School Home">
          <div className="relative h-7 sm:h-8 md:h-9 w-auto flex items-center">
            <Image
              src="/assets/ebs-official-logo.png"
              alt="Entrepreneurs Business School"
              width={1795}
              height={309}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
          {/* Subtle institutional alliance badge */}
          <div className="hidden 2xl:flex items-center gap-2 pl-3 border-l border-[#013e37]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse shrink-0" />
            <span className="font-dm-sans text-[10px] uppercase tracking-wider text-[#695e2f] font-bold whitespace-nowrap">
              In Alliance with 3G & Mission 2050
            </span>
          </div>
        </Link>

        {/* 2. Center: Floating Frosted Navigation Dock */}
        <nav className="hidden xl:flex items-center gap-0.5 bg-[#002622]/[0.03] p-1 rounded-full border border-[#002622]/[0.05]">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    setProgrammesDropdown(true);
                    setHoveredNav(link.name);
                  }}
                  onMouseLeave={() => {
                    setProgrammesDropdown(false);
                    setHoveredNav(null);
                  }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-1.5 font-dm-sans text-[13px] font-semibold rounded-full transition-colors flex items-center gap-1 z-10 ${
                      active ? "text-[#002622] font-bold" : "text-[#404946] hover:text-[#002622]"
                    }`}
                  >
                    {/* Animated Sliding Glass Pill Indicator */}
                    {(active || hoveredNav === link.name) && (
                      <motion.span
                        layoutId="nav-glass-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-white/90 shadow-2xs border border-[#013e37]/10 -z-10"
                      />
                    )}
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setProgrammesDropdown((prev) => !prev);
                      }}
                      className="cursor-pointer p-0.5 rounded-full hover:bg-black/5 inline-flex items-center"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          programmesDropdown ? "rotate-180 text-[#002622]" : "text-[#707976]"
                        }`}
                      />
                    </span>
                  </Link>

                  {/* Glassmorphic Dropdown Popover */}
                  <AnimatePresence>
                    {programmesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[410px] z-50 pointer-events-auto"
                      >
                        <div className="glass-popover rounded-3xl p-3 shadow-2xl">
                          {/* Popover Header */}
                          <div className="flex items-center justify-between px-3 py-2 border-b border-[#013e37]/8 mb-1.5">
                            <span className="font-dm-sans text-[11px] font-bold text-[#695e2f] uppercase tracking-wider flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-[#695e2f]" />
                              5-Stage Academic Progression
                            </span>
                            <span className="text-[10px] font-dm-sans text-[#707976] font-medium">
                              Full Curriculum
                            </span>
                          </div>

                          {/* Track Cards */}
                          <div className="flex flex-col gap-1">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setProgrammesDropdown(false)}
                                className={`group/track px-3 py-2.5 rounded-2xl transition-all ${
                                  item.featured
                                    ? "bg-gradient-to-r from-[#013e37] to-[#002622] text-white shadow-md hover:shadow-lg hover:scale-[1.01]"
                                    : "hover:bg-[#013e37]/[0.05] text-[#131d1c]"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-[10px] font-dm-sans font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                                        item.featured
                                          ? "bg-[#ffefb3]/20 text-[#ffefb3]"
                                          : "bg-[#013e37]/8 text-[#013e37]"
                                      }`}
                                    >
                                      {item.stage}
                                    </span>
                                    <span
                                      className={`font-manrope text-[13px] font-bold leading-tight ${
                                        item.featured
                                          ? "text-white"
                                          : "text-[#002622] group-hover/track:text-[#013e37]"
                                      }`}
                                    >
                                      {item.title}
                                    </span>
                                  </div>
                                  <span
                                    className={`font-dm-sans text-[11px] font-bold ${
                                      item.featured ? "text-[#ffefb3]" : "text-[#707976]"
                                    }`}
                                  >
                                    {item.duration}
                                  </span>
                                </div>
                                <p
                                  className={`font-inter text-[11.5px] mt-1 pl-0.5 leading-snug ${
                                    item.featured ? "text-[#9cd1c7]" : "text-[#5b6562]"
                                  }`}
                                >
                                  {item.desc}
                                </p>
                              </Link>
                            ))}
                          </div>

                          {/* Popover Footer Link */}
                          <div className="pt-2 mt-1 border-t border-[#013e37]/8 px-2">
                            <Link
                              href="/programmes"
                              onClick={() => setProgrammesDropdown(false)}
                              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-dm-sans font-bold text-[#013e37] hover:bg-[#013e37]/5 transition-colors group/foot"
                            >
                              <span>Explore Comparative Matrix & Deliverables</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#013e37] group-hover/foot:translate-x-0.5 group-hover/foot:-translate-y-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.name)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative px-3.5 py-1.5 font-dm-sans text-[13px] font-semibold rounded-full transition-colors z-10 ${
                  active ? "text-[#002622] font-bold" : "text-[#404946] hover:text-[#002622]"
                }`}
              >
                {(active || hoveredNav === link.name) && (
                  <motion.span
                    layoutId="nav-glass-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/90 shadow-2xs border border-[#013e37]/10 -z-10"
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Modern Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* EPA Diagnostic Glass Pill */}
          <Link
            href="/epa"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-dm-sans text-xs uppercase tracking-wider font-bold text-[#002622] bg-[#013e37]/[0.06] hover:bg-[#013e37]/[0.12] border border-[#013e37]/15 backdrop-blur-md shadow-2xs hover:shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Compass className="w-3.5 h-3.5 text-[#013e37] group-hover:rotate-45 transition-transform duration-300" />
            <span>Take EPA Diagnostic</span>
          </Link>

          {/* Luxury Apply Now Button with Shimmer Sweep */}
          <button
            onClick={onOpenApply}
            type="button"
            className="relative group/btn overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#002622] via-[#013e37] to-[#002622] text-[#ffefb3] hover:text-white font-dm-sans font-extrabold text-xs uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,38,34,0.3)] hover:shadow-[0_6px_22px_rgba(1,62,55,0.45)] transition-all hover:scale-[1.03] active:scale-[0.98] border border-white/20 cursor-pointer"
          >
            {/* Shimmer Light Reflection Sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

            <span className="relative z-10 flex items-center gap-1.5">
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ffefb3] group-hover/btn:translate-x-0.5 group-hover/btn:text-white transition-all" />
            </span>
          </button>

          {/* Mobile Menu Glass Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/80 border border-[#013e37]/10 text-[#002622] hover:bg-white transition-all shadow-2xs cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Floating Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto xl:hidden glass-popover rounded-3xl p-5 shadow-2xl mt-2 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {/* Mobile Institutional Alliance Badge */}
              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#013e37]/[0.04] border border-[#013e37]/[0.08] mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse shrink-0" />
                  <span className="font-dm-sans text-[10.5px] uppercase tracking-wider text-[#695e2f] font-bold">
                    3G Alliance • Mission 2050
                  </span>
                </div>
                <span className="text-[10px] font-dm-sans text-[#707976] font-semibold">Official Platform</span>
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-manrope font-semibold text-base transition-colors ${
                  isActive("/") ? "bg-[#013e37]/10 text-[#002622] font-bold" : "text-[#404946] hover:bg-black/5"
                }`}
              >
                Home
              </Link>

              {/* Mobile Academic Programmes Section */}
              <div className="py-2.5 border-y border-[#013e37]/10">
                <div className="flex items-center justify-between px-4 py-1.5 mb-1">
                  <span className="font-manrope font-bold text-[#002622] text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#695e2f]" />
                    Academic Programmes
                  </span>
                  <Link
                    href="/programmes"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-dm-sans text-xs text-[#695e2f] font-bold underline"
                  >
                    All 5 Tracks
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  <Link
                    href="/programmes#foundation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2 text-sm text-[#404946] hover:bg-black/5 rounded-xl font-inter flex items-center justify-between"
                  >
                    <span>01. Foundation Track</span>
                    <span className="text-xs text-[#707976] font-semibold">3 Mo</span>
                  </Link>
                  <Link
                    href="/programmes#builder"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2 text-sm text-[#404946] hover:bg-black/5 rounded-xl font-inter flex items-center justify-between"
                  >
                    <span>02. Builder Track</span>
                    <span className="text-xs text-[#707976] font-semibold">6 Mo</span>
                  </Link>
                  <Link
                    href="/programmes#launch"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2 text-sm text-[#404946] hover:bg-black/5 rounded-xl font-inter flex items-center justify-between"
                  >
                    <span>03. Launch Track</span>
                    <span className="text-xs text-[#707976] font-semibold">1 Yr</span>
                  </Link>
                  <Link
                    href="/programmes#scale"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2 text-sm text-[#404946] hover:bg-black/5 rounded-xl font-inter flex items-center justify-between"
                  >
                    <span>04. Scale Track</span>
                    <span className="text-xs text-[#707976] font-semibold">2 Yrs</span>
                  </Link>
                  <Link
                    href="/programmes#master"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 text-sm text-[#ffefb3] bg-gradient-to-r from-[#013e37] to-[#002622] rounded-xl font-inter font-bold flex items-center justify-between shadow-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#ffefb3]" />
                      05. EBS Master Fellowship
                    </span>
                    <span className="text-xs text-[#9cd1c7]">3 Yrs</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/epa"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-manrope font-semibold text-base transition-colors ${
                  isActive("/epa") ? "bg-[#013e37]/10 text-[#002622] font-bold" : "text-[#404946] hover:bg-black/5"
                }`}
              >
                EPA Diagnostic
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-manrope font-semibold text-base transition-colors ${
                  isActive("/about") ? "bg-[#013e37]/10 text-[#002622] font-bold" : "text-[#404946] hover:bg-black/5"
                }`}
              >
                About Us & Mission 2050
              </Link>
              <Link
                href="/news"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-manrope font-semibold text-base transition-colors ${
                  isActive("/news") ? "bg-[#013e37]/10 text-[#002622] font-bold" : "text-[#404946] hover:bg-black/5"
                }`}
              >
                News & Events
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-manrope font-semibold text-base transition-colors ${
                  isActive("/contact") ? "bg-[#013e37]/10 text-[#002622] font-bold" : "text-[#404946] hover:bg-black/5"
                }`}
              >
                Contact & Admissions Desk
              </Link>

              {/* Mobile CTA Stack */}
              <div className="pt-4 mt-2 border-t border-[#013e37]/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenApply) onOpenApply();
                  }}
                  type="button"
                  className="w-full bg-gradient-to-r from-[#002622] to-[#013e37] text-[#ffefb3] py-3 rounded-full font-dm-sans font-extrabold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-4 h-4 text-[#ffefb3]" />
                </button>
                <Link
                  href="/epa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#013e37]/8 text-[#002622] py-2.5 rounded-full font-dm-sans font-bold text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#013e37]/10"
                >
                  <Compass className="w-3.5 h-3.5 text-[#013e37]" />
                  <span>Take EPA Diagnostic</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
