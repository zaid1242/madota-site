"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
}

export function LuxuryButton({ children, className, variant = "outline", ...props }: LuxuryButtonProps) {
  const baseStyles = "group relative inline-flex items-center justify-center overflow-hidden font-sans text-sm uppercase tracking-widest transition-all duration-500";
  
  const variants = {
    primary: "bg-brand-deep text-soft px-8 py-4 hover:bg-brand-accent",
    outline: "border border-glass-heavy bg-glass-gradient px-8 py-4 text-soft backdrop-blur-md hover:border-soft/30 hover:bg-white/5",
    text: "text-soft hover:text-brand-accent px-0 py-2",
  };

  return (
    <motion.button
      whileHover="hover"
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Cinematic Underline/Fill Effect */}
      {variant === "text" && (
        <motion.span 
          variants={{
            hover: { scaleX: 1, originX: 0 }
          }}
          initial={{ scaleX: 0, originX: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 h-[1px] w-full bg-brand-accent"
        />
      )}
    </motion.button>
  );
}