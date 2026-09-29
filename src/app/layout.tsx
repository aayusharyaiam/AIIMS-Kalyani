import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../../public/fonts/barlow-condensed-700.ttf", weight: "700" },
    { path: "../../public/fonts/barlow-condensed-800.ttf", weight: "800" },
  ],
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../../public/fonts/dm-sans-400.ttf", weight: "400" },
    { path: "../../public/fonts/dm-sans-500.ttf", weight: "500" },
    { path: "../../public/fonts/dm-sans-700.ttf", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Elyssia 3.0 — The Odyssey | AIIMS Kalyani",
    template: "%s | Elyssia 3.0",
  },
  description:
    "Your next great story starts here. Explore Elyssia 3.0, the annual socio-cultural festival of AIIMS Kalyani. Culture, creativity, competition, and unforgettable nights.",
  applicationName: "Elyssia 3.0",
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Elyssia 3.0 — The Odyssey",
    description:
      "Four days. A thousand stories. One Elyssia. AIIMS Kalyani’s annual socio-cultural festival.",
    images: [
      {
        url: "/images/hero-trojan.webp",
        width: 736,
        height: 414,
        alt: "The cinematic Elyssia 3.0 odyssey",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};
export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <noscript>
          <style>{".image-skeleton{display:none!important}"}</style>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
