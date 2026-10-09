import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elyssia 3.0 — AIIMS Kalyani",
    short_name: "Elyssia 3.0",
    description:
      "The annual socio-cultural festival of AIIMS Kalyani, 2–5 November 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
