import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Javed Ali Live | Pronite",
  description:
    "Join Javed Ali for Elyssia 3.0 Star Night on 5 November at AIIMS Kalyani. Get your pass now.",
};

export default function PronitePage() {
  return (
    <main id="main-content" className="page-content pronite-page">
      <section className="pronite-landing">
        <div className="container pronite-landing-grid">
          <div className="pronite-landing-copy">
            <p className="eyebrow">
              <span className="pronite-live-dot" />
              ELYSSIA 3.0 <i /> STAR NIGHT
            </p>
            <h1>
              JAVED
              <br />
              <span>ALI.</span>
            </h1>
            <p className="pronite-landing-description">
              Get ready for an unforgettable night. The voice behind songs you
              love, Javed Ali is coming live to the Elyssia stage.
            </p>
            <div className="pronite-show-details">
              <div>
                <CalendarDays aria-hidden="true" />
                <span>
                  <small>WHEN</small>
                  <strong>5 November 2026</strong>
                </span>
              </div>
              <div>
                <Clock3 aria-hidden="true" />
                <span>
                  <small>TIME</small>
                  <strong>6 PM onwards</strong>
                </span>
              </div>
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>WHERE</small>
                  <strong>AIIMS Kalyani</strong>
                </span>
              </div>
            </div>
            {/* <a
              href="https://elyssiapayments."
              className="button button-primary pronite-buy-pass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ticket size={18} />
              Buy Pass
              <ArrowUpRight size={17} />
            </a> */}
            <p className="pronite-ticket-note">
              Your night starts here. Passes available online.
            </p>
          </div>
          <figure className="pronite-featured-poster">
            <Image
              src="/images/javed.PNG"
              alt="Javed Ali live at Elyssia 2026 on 5 November at AIIMS Kalyani"
              width={1080}
              height={1350}
              sizes="(max-width: 850px) 88vw, 39vw"
              preload
            />
            <figcaption>
              <span>FEATURED PRONITE PERFORMER</span>
              <strong>JAVED ALI · LIVE</strong>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
