import { Variants } from "framer-motion";

// The "Expensive" Easing Curves
export const easings = {
  luxury: [0.22, 1, 0.36, 1] as [number, number, number, number],

  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],

  cinematic: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

// Reusable Variants for Consistency
export const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: easings.luxury } 
  },
};

export const blurVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0, 
    transition: { duration: 1.4, ease: easings.luxury } 
  },
};

export const maskRevealVariants: Variants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%", 
    transition: { duration: 1.5, ease: easings.luxury } 
  },
};