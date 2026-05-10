"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animate?: boolean;
}

export function Section({ children, className, animate = true, ...props }: SectionProps) {
  const Comp = animate ? motion.section : "section";
  
  return (
    <Comp
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      variants={animate ? fadeUp : undefined}
      className={cn("py-editorial-sm md:py-editorial-md lg:py-editorial-lg", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}