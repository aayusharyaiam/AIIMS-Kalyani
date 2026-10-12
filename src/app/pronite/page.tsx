import type { Metadata } from "next";
import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Pronite",
  description:
    "Explore the Elyssia 2026 Pronite artist lineup artwork and the Guess the Artist reveal.",
};

export default function PronitePage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Pronite"
        title="THE NIGHT IS"
        accent="YOURS TO REMEMBER."
        description="From unforgettable performances to the mystery of the next big reveal, this is where Elyssia comes alive after dark."
      />
      <section className="section container pronite-posters">
        <div className="pronite-posters-heading">
          <p className="eyebrow">THE AFTERHOURS</p>
          <h2>
            THE ARTISTS.
            <br />
            <span>THE ANTICIPATION.</span>
          </h2>
        </div>
        <div className="pronite-poster-grid">
          <figure className="pronite-poster">
            <Image
              src="/images/artist_lineup.jpeg"
              alt="Elyssia 2026 artist lineup poster featuring previous performers"
              width={1600}
              height={900}
              sizes="(max-width: 850px) 100vw, 65vw"
            />
            <figcaption>Previous artist lineup</figcaption>
          </figure>
          <figure className="pronite-poster pronite-poster-reveal">
            <Image
              src="/images/artist_reveal.jpeg"
              alt="Elyssia 2026 Guess the Artist poster"
              width={720}
              height={1800}
              sizes="(max-width: 850px) 100vw, 35vw"
            />
            <figcaption>Guess the artist</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
