import type { Metadata } from "next";
import { Space_Grotesk, Syne, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odyssey - AIIMS Kalyani Portal",
  description: "The premier biomedical, cultural, and intellectual festival of All India Institute of Medical Sciences, Kalyani. A mythic convergence of clinical intellect, heroic arts, and starlit celebration.",
  keywords: ["AIIMS Kalyani", "Odyssey", "Medical Fest", "Cultural Fest", "NextJS", "Odyssey 2026"],
  authors: [{ name: "AIIMS Kalyani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased dark ${spaceGrotesk.variable} ${syne.variable} ${cinzel.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}