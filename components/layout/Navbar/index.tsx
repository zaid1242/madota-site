"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { MenuToggle } from "./MenuToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll reactivity for cinematic header compression
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-700 ease-in-out ${
          isScrolled
            ? "border-b border-glass bg-matte/70 py-4 backdrop-blur-xl"
            : "bg-transparent py-8 lg:py-12"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-24">
          
          {/* Brand Logo - Uses specific luxury typography */}
          <Link 
            href="/" 
            className="group relative z-[100] flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-serif text-2xl tracking-widest text-soft transition-colors group-hover:text-brand-accent md:text-3xl">
              MADOTA
            </span>
          </Link>

          <DesktopNav />
          
          <MenuToggle 
            isOpen={isMobileMenuOpen} 
            toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        close={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}