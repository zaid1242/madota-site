"use client";

import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    
    
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between py-6 border-b border-white/10">
          
          {/* LOGO */}
          <div>
            <h1 className="text-2xl tracking-[0.3em] font-light">
              MADOTA
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-neutral-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="#" className="hover:text-white transition">
              Projects
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <button className="border border-white/20 px-5 py-2 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition">
            Consultation
          </button>
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-sm uppercase tracking-[0.3em]"
>
  Menu
</button>
        </div>
      </div>
      {/* MOBILE MENU */}
{menuOpen && (
  <div className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center">

    {/* CLOSE */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-10 right-10 uppercase tracking-[0.3em] text-sm"
    >
      Close
    </button>

    {/* LINKS */}
    <div className="flex flex-col items-center gap-10">

      <a
        href="#"
        className="text-4xl font-light"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#"
        className="text-4xl font-light"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>

      <a
        href="#"
        className="text-4xl font-light"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>

      <a
        href="#"
        className="text-4xl font-light"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

    </div>

  </div>
)}
    </header>
  );
}