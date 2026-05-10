"use client";

import { motion } from "framer-motion";
import { easings } from "@/lib/motion-system";

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function RevealText({ text, delay = 0, className }: RevealTextProps) {
  return (
    <div className="relative overflow-hidden inline-block">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, delay, ease: easings.luxury }}
        className={`inline-block origin-bottom ${className}`}
        style={{ willChange: "transform" }}
      >
        {text}
      </motion.span>
    </div>
  );
}
