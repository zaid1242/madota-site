"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryDividerProps {
  className?: string;
  delay?: number;
}

export function LuxuryDivider({ className, delay = 0 }: LuxuryDividerProps) {
  return (
    <div className={cn("flex w-full items-center justify-center py-12", className)}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-soft/20 to-transparent"
      />
    </div>
  );
}