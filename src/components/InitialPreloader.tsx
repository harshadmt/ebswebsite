"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

export default function InitialPreloader() {
  const [mounted, setMounted] = useState(true);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("previewLoader")) {
      setIsPreview(true);
      return;
    }

    // 1150ms allows the 5-stage venture boot sequence to resolve crisply
    const timer = setTimeout(() => {
      setMounted(false);
    }, 1150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.99,
            filter: "blur(6px)",
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className={`fixed inset-0 z-[99999] ${
            isPreview ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <PageLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
