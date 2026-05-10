"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      className="group relative z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-transparent transition-colors hover:border-glass-heavy hover:bg-glass lg:hidden"
      aria-label="Toggle Menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-soft">
        <motion.path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 4 8 L 20 8" },
            open: { d: "M 6 18 L 18 6" },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 4 16 L 20 16" },
            open: { d: "M 6 6 L 18 18" },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </button>
  );
}