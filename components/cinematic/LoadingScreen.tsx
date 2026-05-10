"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cinematic progress simulation (eases out towards the end)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 12; // Variable speed for realism
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Hold at 100% for a dramatic beat before exiting
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) setTimeout(onComplete, 1200); // Trigger parent after animation
        }, 800);
      }
      setProgress(Math.floor(currentProgress));
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Premium easing curve
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 1.4, ease: luxuryEase } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-matte px-8 py-16"
        >
          {/* Top Divider / Spacer */}
          <div className="w-full max-w-[1400px] border-t border-glass" />

          {/* Core Brand Reveal */}
          <div className="flex flex-col items-center gap-6 overflow-hidden">
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-soft/50">
              Initializing Experience
            </span>
            
            {/* Logo Mask & Scale Animation */}
            <div className="overflow-hidden pb-4">
              <motion.h1
                initial={{ y: "100%", letterSpacing: "0.1em" }}
                animate={{ y: "0%", letterSpacing: "0.25em" }}
                transition={{ duration: 2, ease: luxuryEase }}
                className="font-serif text-5xl tracking-widest text-soft md:text-7xl lg:text-9xl"
              >
                MADOTA
              </motion.h1>
            </div>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex w-full max-w-[1400px] items-end justify-between border-b border-glass pb-4">
            <span className="font-sans text-sm uppercase tracking-widest text-soft/70">
              Dubai
            </span>
            <div className="flex items-baseline gap-1">
              <motion.span 
                className="font-serif text-4xl text-soft md:text-6xl"
                // Forces React to re-render the number smoothly
                key={progress}
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {progress}
              </motion.span>
              <span className="font-serif text-xl text-brand-accent md:text-2xl">%</span>
            </div>
          </div>
          
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vw] rounded-full bg-brand-deep/5 blur-[120px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}