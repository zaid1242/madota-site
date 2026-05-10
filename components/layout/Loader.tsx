"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isLoading: boolean;
};

export default function Loader({
  isLoading,
}: Props) {
  return (
    <AnimatePresence>

      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as [
              number,
              number,
              number,
              number
            ],
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >

          {/* RED ATMOSPHERIC GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-[#A0001C]/20 blur-3xl rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 text-center">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="uppercase tracking-[0.5em] text-sm text-neutral-500 mb-8"
            >
              Luxury Architecture Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1] as [
                  number,
                  number,
                  number,
                  number
                ],
              }}
              className="text-6xl md:text-8xl tracking-[0.3em] font-light text-white"
            >
              MADOTA
            </motion.h1>

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}