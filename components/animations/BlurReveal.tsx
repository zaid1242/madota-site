"use client";

import { motion } from "framer-motion";
import { blurVariants } from "@/lib/motion-system";

export function BlurReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...blurVariants,
        visible: { ...blurVariants.visible, transition: { ...blurVariants.visible?.transition, delay } }
      }}
      className={className}
      style={{ willChange: "filter, opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}