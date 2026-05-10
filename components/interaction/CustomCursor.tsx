"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInteraction } from "./InteractionContext";

export function CustomCursor() {
  const { cursorState } = useInteraction();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the trailing ring (Cinematic weight)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices for performance and UX
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);
    setIsVisible(true);

    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  // Cinematic Cursor Variants
  const variants = {
    default: { height: 12, width: 12, backgroundColor: "#F5F5F5", border: "0px solid transparent" },
    hover: { height: 64, width: 64, backgroundColor: "transparent", border: "1px solid rgba(245,245,245,0.4)" },
    magnetic: { height: 10, width: 10, backgroundColor: "#A0001C", border: "0px solid transparent" },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <>
      {/* The Smooth Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform, width, height",
        }}
        animate={isVisible ? cursorState : "hidden"}
        variants={variants}
        transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
      />
    </>
  );
}