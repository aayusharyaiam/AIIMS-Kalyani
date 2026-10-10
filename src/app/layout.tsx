import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { ScrollProgress, SiteLoader } from "@/components/ExperienceMotion";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const festivalStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Elyssia 3.0",
  description:
    "Elyssia 3.0 is the annual socio-cultural festival of AIIMS Kalyani, with dance, art, music, quizzes, sports, fashion, drama, literary events, and live nights.",
  startDate: "2026-11-02T00:00:00+05:30",
  endDate: "2026-11-05T23:59:59+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: siteUrl,
  image: `${siteUrl}/images/hero-trojan.webp`,
  location: {
    "@type": "Place",
    name: "AIIMS Kalyani",
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH-34 Connector, Basantapur, Saguna",
      addressLocality: "Kalyani",
      addressRegion: "West Bengal",
      postalCode: "741245",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "AIIMS Kalyani",
    url: "https://aiimskalyani.edu.in/",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elyssia 3.0 — The Odyssey | AIIMS Kalyani",
    template: "%s | Elyssia 3.0",
  },
  description:
    "Your next great story starts here. Explore Elyssia 3.0, the annual socio-cultural festival of AIIMS Kalyani. Culture, creativity, competition, and unforgettable nights.",
  keywords: [
    "Elyssia 3.0",
    "AIIMS Kalyani fest",
    "AIIMS Kalyani cultural festival",
    "Kalyani events 2026",
    "Elyssia 2026",
  ],
  applicationName: "Elyssia 3.0",
  authors: [{ name: "AIIMS Kalyani" }],
  creator: "AIIMS Kalyani",
  publisher: "AIIMS Kalyani",
  category: "festival",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    siteName: "Elyssia 3.0 — AIIMS Kalyani",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elyssia 3.0 — The Odyssey",
    description:
      "Explore the 2–5 November 2026 socio-cultural festival of AIIMS Kalyani.",
    images: ["/images/hero-trojan.webp"],
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
        <SiteLoader />
        <ScrollProgress />
        <noscript>
          <style>{".image-skeleton{display:none!important}"}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(festivalStructuredData),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
