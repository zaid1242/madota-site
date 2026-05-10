"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "./nav-data";

export function DesktopNav() {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group relative py-2 font-sans text-xs uppercase tracking-[0.2em] text-soft/80 transition-colors hover:text-soft"
          >
            {link.label}
            {/* Cinematic Underline Reveal */}
            <motion.span
              variants={{
                initial: { scaleX: 0, originX: 0 },
                hover: { scaleX: 1, originX: 0 },
              }}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 h-[1px] w-full bg-brand-accent"
            />
          </Link>
        ))}
      </nav>

      {/* Vertical Luxury Divider */}
      <div className="h-4 w-px bg-glass-heavy" />

      {/* Navbar CTA */}
      <Link
        href="/contact"
        className="group relative overflow-hidden border border-glass-heavy bg-glass-gradient px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-soft backdrop-blur-md transition-all hover:border-brand-accent hover:bg-brand-deep/20"
      >
        <span className="relative z-10">Consultation</span>
      </Link>
    </div>
  );
}