"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
};

export default function GsapReveal({
  children,
}: Props) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealRef.current) return;

    gsap.fromTo(
      revealRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, []);

  return <div ref={revealRef}>{children}</div>;
}