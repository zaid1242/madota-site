import { Variants } from "framer-motion";

export const cinematicTransitions = {
  // 'as const' forces TypeScript to read this as a strict tuple, fixing the error
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeOutCirc: [0.075, 0.82, 0.165, 1] as const,
  slowReveal: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const },
};

// Explicitly type the exports as Framer Motion 'Variants'
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: cinematicTransitions.easeOutExpo } 
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { 
    opacity: 1, 
    y: "0%", 
    transition: { duration: 1.5, ease: cinematicTransitions.easeOutExpo } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};