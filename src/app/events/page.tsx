import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { EventExplorer } from "@/components/EventExplorer";
import { PageTitle } from "@/components/PageTitle";
import { MediaImage } from "@/components/ui";
import { festival } from "@/lib/festival";
export const metadata: Metadata = {
  title: "Events & experiences",
  description:
    "Find your spotlight at Elyssia 3.0. Explore music, dance, drama, art, literary events, sports, and the flagship experiences at AIIMS Kalyani.",
};
export default function EventsPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Events"
        title="FIND YOUR PEOPLE."
        accent="OWN YOUR MOMENT."
        description="From the first beat to the final curtain call. Explore a selection of Elyssia’s experiences and make a shortlist that feels like you."
      />
      <section className="section container">
        <EventExplorer />
      </section>
      <section id="nightlife" className="pronite">
        <MediaImage
          src="/images/legacy-blue-stage.webp"
          alt="A concert from a previous Elyssia edition"
          className="pronite-background"
          sizes="100vw"
        />
        <div className="container">
          <p className="eyebrow">
            <Sparkles size={13} />
            THE AFTERHOURS
          </p>
          <h2>
            STAR NIGHT.
            <br />
            <span>DJ NIGHT. YOUR NIGHT.</span>
          </h2>
          <p>
            The brochure promises nights to remember, with the 2026 performers
            still to be revealed. Delegate passes include Pro Shows; check the
            brochure for access conditions.
          </p>
          <a
            href={festival.registrationUrl}
            className="button button-primary"
            target="_blank"
            rel="noreferrer"
          >
            Delegate registration <ArrowUpRight size={16} />
          </a>
        </div>
        <span className="pronite-label">
          <span className="pulse-dot" />
          ARTIST ANNOUNCEMENTS COMING SOON
        </span>
      </section>
    </main>
  );
}
