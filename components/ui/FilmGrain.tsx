"use client";

export function FilmGrain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] h-[200vh] w-[200vw] -translate-x-1/4 -translate-y-1/4 opacity-[0.03] mix-blend-screen">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}