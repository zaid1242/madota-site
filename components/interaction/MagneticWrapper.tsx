"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInteraction } from "./InteractionContext";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticWrapper({ children, strength = 0.2, className }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorState } = useInteraction();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setCursorState("default");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setCursorState("magnetic")}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}