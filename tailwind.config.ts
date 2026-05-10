import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: "#050505",
        brand: {
          deep: "#7A0015",
          accent: "#A0001C",
        },
        soft: "#F5F5F5",
        glass: {
          DEFAULT: "rgba(255,255,255,0.03)",
          heavy: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "cinematic-radial": "radial-gradient(circle at center, rgba(122,0,21,0.15) 0%, rgba(5,5,5,1) 70%)",
        "cinematic-linear": "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,1) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      spacing: {
        "editorial-sm": "4rem",
        "editorial-md": "8rem",
        "editorial-lg": "12rem",
        "editorial-xl": "16rem",
      },
      boxShadow: {
        "luxury-glow": "0 0 40px -10px rgba(122,0,21,0.3)",
        "glass-inset": "inset 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;