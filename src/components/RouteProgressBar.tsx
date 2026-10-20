"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  // When pathname changes, finish the progress bar
  useEffect(() => {
    if (loading) {
      clearAllTimers();
      setProgress(100);
      const doneTimer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
      timersRef.current.push(doneTimer);
    }
  }, [pathname]);

  // Intercept click on internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore modifier keys, external links, mailto, tel, target="_blank"
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        target.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // If it's just a fragment anchor on the current page
      if (href.startsWith("#") || href === pathname) {
        return;
      }

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === pathname && url.hash) return;
        if (url.pathname === pathname && !url.search) return;
      } catch {
        return;
      }

      // Trigger hairline route progress
      clearAllTimers();
      setLoading(true);
      setProgress(25);

      const t1 = setTimeout(() => setProgress(65), 180);
      const t2 = setTimeout(() => setProgress(88), 420);
      timersRef.current.push(t1, t2);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      clearAllTimers();
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none h-[2.5px] bg-[#013e37]/10"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#013e37] via-[#005a50] to-[#ffefb3] shadow-[0_0_10px_rgba(1,62,55,0.6)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
