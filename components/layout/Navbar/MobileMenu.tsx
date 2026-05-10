"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks, socialLinks } from "./nav-data";

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const luxuryEase = [0.16, 1, 0.3, 1];

export function MobileMenu({ isOpen, close }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-matte/95 px-6 pb-12 pt-32"
        >
          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <div key={link.label} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%", opacity: 0, rotateZ: 2 }}
                  animate={{ y: "0%", opacity: 1, rotateZ: 0 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: luxuryEase }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className="font-serif text-5xl tracking-tight text-soft hover:text-brand-accent transition-colors md:text-7xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </div>
            ))}
          </nav>

          {/* Footer of Mobile Menu (Socials & Contact) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
            className="flex w-full items-end justify-between border-t border-glass pt-8"
          >
            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-soft/50">Follow Us</span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="font-sans text-sm text-soft hover:text-brand-accent transition-colors">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <Link href="/contact" onClick={close} className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent hover:text-soft transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}