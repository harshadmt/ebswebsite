"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type LoaderVariant = "aura" | "obsidian" | "astrolabe";

interface PageLoaderProps {
  label?: string;
  fullscreen?: boolean;
  initialVariant?: LoaderVariant;
  allowVariantSwitch?: boolean;
}

const STAGES = [
  { id: "01", name: "Foundation", desc: "Feasibility & Unit Economics" },
  { id: "02", name: "Builder", desc: "MVP & Traction Syndicate" },
  { id: "03", name: "Launch", desc: "Go-to-Market Scaling Velocity" },
  { id: "04", name: "Scale", desc: "Series A/B International Corridors" },
  { id: "05", name: "Master", desc: "Sovereign Conglomerate Fellowship" },
];

export default function PageLoader({
  label = "Entrepreneurs Business School",
  fullscreen = true,
  initialVariant = "aura",
  allowVariantSwitch = true,
}: PageLoaderProps) {
  const [variant, setVariant] = useState<LoaderVariant>(initialVariant);
  const [progress, setProgress] = useState(0);

  // Read saved preference or query param on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      if (search.includes("variant=obsidian")) {
        setVariant("obsidian");
        return;
      }
      if (search.includes("variant=astrolabe")) {
        setVariant("astrolabe");
        return;
      }
      if (search.includes("variant=aura")) {
        setVariant("aura");
        return;
      }
      const saved = localStorage.getItem("ebs_loader_variant") as LoaderVariant;
      if (saved && ["aura", "obsidian", "astrolabe"].includes(saved)) {
        setVariant(saved);
      }
    }
  }, []);

  // Keyboard shortcut listener: press 1, 2, or 3 to instantly switch variants
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === "1") handleSelectVariant("aura");
      if (e.key === "2") handleSelectVariant("obsidian");
      if (e.key === "3") handleSelectVariant("astrolabe");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth continuous progress animation
  useEffect(() => {
    let frameId: number;
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [variant]);

  const handleSelectVariant = (newVariant: LoaderVariant) => {
    setVariant(newVariant);
    setProgress(0);
    if (typeof window !== "undefined") {
      localStorage.setItem("ebs_loader_variant", newVariant);
    }
  };

  const handleReplay = () => {
    setProgress(0);
  };

  // Astrolabe calculations
  const currentStageIndex = Math.min(
    4,
    Math.floor((progress / 100) * STAGES.length)
  );
  const currentStage = STAGES[currentStageIndex];

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const isCardinal = i % 3 === 0;
    const r1 = isCardinal ? 79 : 82;
    const r2 = isCardinal ? 91 : 87;
    return {
      x1: 100 + r1 * Math.cos(angle),
      y1: 100 + r1 * Math.sin(angle),
      x2: 100 + r2 * Math.cos(angle),
      y2: 100 + r2 * Math.sin(angle),
      isCardinal,
    };
  });

  // ==========================================
  // VARIANT 1: MINIMAL AURA (Default requested)
  // ==========================================
  const renderAuraVariant = () => (
    <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
      {/* Concentric Ambient Light Rings & Crest */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
        {/* Living Radial Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#013e37]/15 via-[#ffefb3]/25 to-transparent blur-3xl pointer-events-none" />

        {/* 3 Hypnotic Expanding Ripple Waves */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute inset-0 rounded-full border border-[#013e37]/20 pointer-events-none"
            initial={{ scale: 0.75, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.85,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Floating Emblem Crest */}
        <motion.div
          animate={{
            scale: [0.97, 1.03, 0.97],
            opacity: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-20 sm:w-24 h-22 sm:h-26 flex items-center justify-center"
        >
          <Image
            src="/assets/ebs-shield-crest.png"
            alt="Entrepreneurs Business School Crest"
            width={288}
            height={309}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_6px_24px_rgba(1,62,55,0.16)]"
          />

          {/* Angled Specular Sheen Sweep */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
            <motion.div
              animate={{
                x: ["-160%", "220%"],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.6,
              }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-[-25deg]"
            />
          </div>
        </motion.div>
      </div>

      {/* Typography */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="font-manrope text-[11px] sm:text-[12px] font-extrabold tracking-[0.32em] text-[#002622] uppercase">
          {label}
        </h2>
        <p className="font-dm-sans text-[9px] tracking-[0.2em] text-[#695e2f] uppercase font-semibold mt-1">
          In Alliance with 3G & Mission 2050
        </p>
      </motion.div>

      {/* Precision Hairline Progress Bar */}
      <div className="w-44 sm:w-52 h-[1.8px] bg-[#013e37]/10 rounded-full overflow-hidden mt-6 mb-2.5 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-[#013e37] via-[#005a50] to-[#ffefb3]"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.15 }}
        />
      </div>

      {/* Sub-Metric & Live Tabular Percentage */}
      <div className="flex items-center justify-between w-44 sm:w-52 font-mono text-[9.5px] text-[#013e37]/65 px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-600 animate-pulse" />
          <span className="tracking-[0.15em] uppercase text-[9px]">Initializing</span>
        </div>
        <span className="font-bold tabular-nums tracking-wider text-[#013e37]">
          {progress.toString().padStart(2, "0")}%
        </span>
      </div>
    </div>
  );

  // ==========================================
  // VARIANT 2: OBSIDIAN GOLD (Dark Executive)
  // ==========================================
  const renderObsidianVariant = () => (
    <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center text-[#ffefb3]">
      {/* Dark Ambient Core Glow */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#013e37] via-[#c8aa6e]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Counter-Rotating Dual Gold Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#ffefb3]/15 border-dashed pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border border-[#c8aa6e]/25 pointer-events-none"
        />

        {/* Floating Emblem Crest with Gold Aura */}
        <motion.div
          animate={{
            scale: [0.97, 1.03, 0.97],
            filter: [
              "drop-shadow(0 0 15px rgba(255,239,179,0.3))",
              "drop-shadow(0 0 25px rgba(255,239,179,0.5))",
              "drop-shadow(0 0 15px rgba(255,239,179,0.3))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-20 sm:w-24 h-22 sm:h-26 flex items-center justify-center"
        >
          <Image
            src="/assets/ebs-shield-crest.png"
            alt="Entrepreneurs Business School Crest"
            width={288}
            height={309}
            priority
            className="w-full h-full object-contain brightness-125"
          />

          {/* Liquid Gold Specular Sweep */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
            <motion.div
              animate={{
                x: ["-160%", "220%"],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#ffefb3]/60 to-transparent skew-x-[-25deg]"
            />
          </div>
        </motion.div>
      </div>

      {/* Executive Typography */}
      <h2 className="font-manrope text-[11px] sm:text-[12px] font-extrabold tracking-[0.34em] text-[#ffefb3] uppercase">
        {label}
      </h2>
      <p className="font-dm-sans text-[9px] tracking-[0.22em] text-[#c8aa6e] uppercase font-semibold mt-1">
        Become a Billion Dollar Founder
      </p>

      {/* Hairline Gold Liquid Track */}
      <div className="w-44 sm:w-52 h-[1.8px] bg-white/10 rounded-full overflow-hidden mt-6 mb-2.5 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-[#c8aa6e] via-[#ffefb3] to-white"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.15 }}
        />
      </div>

      {/* Status & Counter */}
      <div className="flex items-center justify-between w-44 sm:w-52 font-mono text-[9.5px] text-[#ffefb3]/70 px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#ffefb3] animate-ping" />
          <span className="tracking-[0.15em] uppercase text-[9px]">Sovereign Matrix</span>
        </div>
        <span className="font-bold tabular-nums tracking-wider text-[#ffefb3]">
          {progress.toString().padStart(2, "0")}%
        </span>
      </div>
    </div>
  );

  // ==========================================
  // VARIANT 3: ASTROLABE (Technical Matrix)
  // ==========================================
  const renderAstrolabeVariant = () => (
    <div className="relative z-10 flex flex-col items-center max-w-md w-full px-4">
      {/* Astrolabe Bezel & Shield Crest */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#013e37]/10 via-[#ffefb3]/15 to-transparent blur-2xl pointer-events-none" />

        {/* Gyroscope SVG */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#013e37"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#013e37"
            strokeOpacity="0.06"
            strokeWidth="0.8"
            strokeDasharray="2 6"
          />

          {ticks.map((t, idx) => (
            <line
              key={idx}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="#013e37"
              strokeOpacity={t.isCardinal ? "0.45" : "0.2"}
              strokeWidth={t.isCardinal ? "1.5" : "0.8"}
            />
          ))}

          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#013e37"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="60 440"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />

          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#c8aa6e"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="35 400"
            animate={{ rotate: -360 }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
        </svg>

        <motion.div
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-14 sm:w-16 h-16 sm:h-18 flex items-center justify-center"
        >
          <Image
            src="/assets/ebs-shield-crest.png"
            alt="Entrepreneurs Business School Crest"
            width={288}
            height={309}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(1,62,55,0.18)]"
          />
        </motion.div>
      </div>

      {/* Typography */}
      <div className="text-center mb-5">
        <h2 className="font-manrope text-[11px] sm:text-[12px] font-extrabold tracking-[0.28em] text-[#002622] uppercase">
          {label}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="w-1 h-1 rounded-full bg-[#695e2f]" />
          <span className="font-dm-sans text-[10px] tracking-[0.18em] text-[#695e2f] uppercase font-semibold">
            In Alliance with 3G & Mission 2050
          </span>
          <span className="w-1 h-1 rounded-full bg-[#695e2f]" />
        </div>
      </div>

      {/* 5-Segment Tracks */}
      <div className="w-full space-y-1.5 mb-3">
        <div className="grid grid-cols-5 gap-1.5 px-0.5">
          {STAGES.map((s, idx) => {
            const isCompleted = currentStageIndex > idx;
            const isActive = currentStageIndex === idx;
            return (
              <div key={s.id} className="text-center">
                <span
                  className={`font-mono text-[9px] tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-[#013e37] font-bold scale-105"
                      : isCompleted
                      ? "text-[#013e37]/75 font-semibold"
                      : "text-[#013e37]/25"
                  }`}
                >
                  {s.id}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-5 gap-1.5 w-full">
          {STAGES.map((s, idx) => {
            const isCompleted = currentStageIndex > idx;
            const isActive = currentStageIndex === idx;
            const segmentStart = (idx / STAGES.length) * 100;
            const segmentSize = 100 / STAGES.length;
            const segmentFill = Math.min(
              100,
              Math.max(0, ((progress - segmentStart) / segmentSize) * 100)
            );

            return (
              <div
                key={s.id}
                className="h-[2.5px] rounded-full bg-[#013e37]/10 overflow-hidden relative"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#013e37] to-[#005a50] transition-all duration-100 ease-out"
                  style={{
                    width: isCompleted ? "100%" : isActive ? `${segmentFill}%` : "0%",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Stage Indicator */}
      <div className="w-full flex items-center justify-between text-[#002622] pt-1.5 border-t border-[#013e37]/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-[#013e37] font-medium">
            Stage {currentStage.id}:{" "}
            <span className="font-semibold text-[#002622]">
              {currentStage.name}
            </span>
          </span>
        </div>
        <span className="font-mono text-[10.5px] font-bold tabular-nums tracking-wider text-[#013e37]">
          {progress.toString().padStart(2, "0")}%
        </span>
      </div>
    </div>
  );

  const isObsidian = variant === "obsidian";

  return (
    <div
      role="status"
      aria-label="Loading platform..."
      className={`select-none transition-colors duration-500 ${
        fullscreen
          ? `fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 overflow-hidden ${
              isObsidian
                ? "bg-[#001411]/98 backdrop-blur-2xl"
                : "bg-[#f1fcf8]/95 backdrop-blur-2xl"
            }`
          : "w-full py-16 flex flex-col items-center justify-center"
      }`}
    >
      {/* Top Architectural Header Datum (shown if fullscreen) */}
      {fullscreen && (
        <div
          className={`relative z-10 w-full flex items-center justify-between border-b pb-3 transition-colors duration-500 ${
            isObsidian ? "border-white/10" : "border-[#013e37]/10"
          }`}
        >
          <div
            className={`flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase ${
              isObsidian ? "text-[#ffefb3]/70" : "text-[#002622]/60"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                isObsidian ? "bg-[#ffefb3]" : "bg-[#013e37]"
              }`}
            />
            <span>EBS // VENTURE MATRIX 2050</span>
          </div>
          <div
            className={`flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] uppercase ${
              isObsidian ? "text-[#ffefb3]/70" : "text-[#002622]/60"
            }`}
          >
            <span>3G ALLIANCE</span>
            <span className={isObsidian ? "text-[#ffefb3]/30" : "text-[#013e37]/30"}>
              •
            </span>
            <span>MALAPPURAM ECOSYSTEM</span>
          </div>
        </div>
      )}

      {/* Main Center Content */}
      <div className="flex-1 flex items-center justify-center py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={variant}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center"
          >
            {variant === "aura" && renderAuraVariant()}
            {variant === "obsidian" && renderObsidianVariant()}
            {variant === "astrolabe" && renderAstrolabeVariant()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Architectural Footer & Live Interactive Switcher */}
      {fullscreen && (
        <div
          className={`relative z-20 w-full flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-3 transition-colors duration-500 ${
            isObsidian ? "border-white/10" : "border-[#013e37]/10"
          }`}
        >
          <div
            className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase ${
              isObsidian ? "text-[#ffefb3]/50" : "text-[#002622]/50"
            }`}
          >
            ACCREDITED VENTURE ACCELERATOR • GLOBAL CORRIDORS
          </div>

          {/* Design Switcher Pills (Always interactive with pointer-events-auto and keyboard shortcuts) */}
          {allowVariantSwitch && (
            <div className="relative z-50 pointer-events-auto flex items-center gap-1.5 p-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 backdrop-blur-md shadow-sm">
              <button
                type="button"
                onClick={() => handleSelectVariant("aura")}
                className={`cursor-pointer px-3 py-1 rounded-full text-[9.5px] font-mono tracking-wider transition-all duration-200 ${
                  variant === "aura"
                    ? "bg-[#013e37] text-[#ffefb3] shadow-sm font-bold"
                    : isObsidian
                    ? "text-[#ffefb3]/70 hover:text-white"
                    : "text-[#002622]/70 hover:text-black"
                }`}
              >
                1. Aura Minimal
              </button>
              <button
                type="button"
                onClick={() => handleSelectVariant("obsidian")}
                className={`cursor-pointer px-3 py-1 rounded-full text-[9.5px] font-mono tracking-wider transition-all duration-200 ${
                  variant === "obsidian"
                    ? "bg-[#ffefb3] text-[#002622] shadow-sm font-bold"
                    : isObsidian
                    ? "text-[#ffefb3]/70 hover:text-white"
                    : "text-[#002622]/70 hover:text-black"
                }`}
              >
                2. Obsidian Gold
              </button>
              <button
                type="button"
                onClick={() => handleSelectVariant("astrolabe")}
                className={`cursor-pointer px-3 py-1 rounded-full text-[9.5px] font-mono tracking-wider transition-all duration-200 ${
                  variant === "astrolabe"
                    ? "bg-[#013e37] text-[#ffefb3] shadow-sm font-bold"
                    : isObsidian
                    ? "text-[#ffefb3]/70 hover:text-white"
                    : "text-[#002622]/70 hover:text-black"
                }`}
              >
                3. Astrolabe Matrix
              </button>

              <button
                type="button"
                onClick={handleReplay}
                title="Replay animation"
                className={`cursor-pointer ml-1 px-2.5 py-1 rounded-full text-[9.5px] font-mono opacity-65 hover:opacity-100 transition-opacity ${
                  isObsidian ? "text-[#ffefb3]" : "text-[#002622]"
                }`}
              >
                ↻ Replay
              </button>
            </div>
          )}

          <div
            className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 ${
              isObsidian ? "text-[#ffefb3]/70" : "text-[#002622]/60"
            }`}
          >
            <span>SYS_STATUS: OPTIMAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      )}
    </div>
  );
}
