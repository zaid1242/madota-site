"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { easings } from "@/lib/motion-system";

export function CinematicTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative w-full h-full">
        {/* The Page Entrance/Exit Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          transition={{ duration: 1.2, ease: easings.luxury }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
        
        {/* Cinematic Wipe Overlay (Optional - triggers on unmount) */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: easings.cinematic }}
          className="pointer-events-none fixed inset-0 z-[999] bg-matte origin-top"
        />
      </motion.div>
    </AnimatePresence>
  );
}