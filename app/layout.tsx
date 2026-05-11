import type { Metadata } from "next";
import Image from "next/image";
import { Toaster } from "sonner";
import "@/styles/globals.css";

import { cormorant, inter } from "@/lib/fonts";

export const metadata = {
  title: {
    default: "MADOTA — Luxury Architecture & Interior Design",
    template: "%s | MADOTA",
  },

  description:
    "MADOTA creates cinematic architecture, luxury villas, immersive interiors, and refined real estate experiences designed for elevated modern living.",

  keywords: [
    "Luxury Architecture",
    "Interior Design",
    "Luxury Villas",
    "Dubai Architecture",
    "Cinematic Interiors",
    "Modern Luxury Homes",
  ],

  openGraph: {
    title: "MADOTA",
    description:
      "Cinematic architecture and immersive luxury living experiences.",

    url: "https://madota.com",

    siteName: "MADOTA",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`
          ${cormorant.variable}
          ${inter.variable}
          bg-[#050505]
          text-[#F5F5F5]
          antialiased
        `}
      >
        {children}
        <Toaster
  position="top-right"
  richColors
  theme="dark"
/>
      </body>
    </html>
  );
}