"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;
    root.dataset.loader = "active";
    try {
      if (window.sessionStorage.getItem("elyssia.loader.seen") === "true") {
        const hideTimer = window.setTimeout(() => {
          delete root.dataset.loader;
          setVisible(false);
        }, 0);
        return () => {
          window.clearTimeout(hideTimer);
          delete root.dataset.loader;
        };
      }
    } catch {
      // Storage can be unavailable in private browsing; the loader still works.
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reducedMotion ? 450 : 1650;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - startedAt) / duration) * 100));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setTimeout(() => {
        try {
          window.sessionStorage.setItem("elyssia.loader.seen", "true");
        } catch {
          // Continue without remembering the splash screen.
        }
        delete root.dataset.loader;
        setVisible(false);
      }, reducedMotion ? 80 : 500);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      delete root.dataset.loader;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          className="site-loader" 
          aria-hidden="true"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="site-loader-orbit site-loader-orbit-one" />
          <div className="site-loader-orbit site-loader-orbit-two" />
          <motion.div 
            className="site-loader-inner"
            exit={{ opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } }}
          >
            <div className="site-loader-brand">
              <span>ELYSSIA</span>
              <small>AIIMS KALYANI · THE THIRD CHAPTER</small>
            </div>
            <div className="site-loader-count">
              <motion.strong
                key={progress}
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                {String(progress).padStart(3, "0")}
              </motion.strong>
              <span>%</span>
            </div>
            <div className="site-loader-track">
              <motion.span 
                style={{ transformOrigin: "left" }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <div className="site-loader-meta">
              <span>YOUR ODYSSEY AWAITS</span>
              <span>03 / 03</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      className="scroll-progress" 
      aria-hidden="true" 
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}

