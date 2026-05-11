"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 rounded-full border border-[#A0001C] pointer-events-none z-[9999] hidden lg:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.05s linear",
      }}
    />
  );
}