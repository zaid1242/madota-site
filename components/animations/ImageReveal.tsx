"use client";

import { motion } from "framer-motion";
import { easings } from "@/lib/motion-system";
import { useState } from "react";

export function ImageReveal({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-matte ${className}`}>
      {/* The Mask Curtain */}
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: "-100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease: easings.cinematic }}
        className="absolute inset-0 z-10 bg-matte"
      />
      
      {/* The Image Scale */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: easings.luxury }}
        className={`h-full w-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}