"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function MagneticButton({
  children,
}: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `
      translate(${x * 0.15}px, ${y * 0.15}px)
    `;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 will-change-transform inline-block"
    >
      {children}
    </div>
  );
}