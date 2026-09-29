import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { festival } from "@/lib/festival";
export const metadata: Metadata = {
  title: "Contact & getting here",
  description:
    "Get in touch with the Elyssia registration and accommodation teams, and plan your journey to AIIMS Kalyani, West Bengal.",
};
export default function ContactPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Contact"
        title="GREAT STORIES START"
        accent="WITH A HELLO."
        description="A question about passes, a place to stay, or finding your way? Reach the team using the contacts listed in the festival brochure."
      />
      <section className="section container contact-grid">
        <div>
          <div className="contact-card">
            <p className="eyebrow">01 / REGISTRATION & DELEGATE PASSES</p>
            <h2>LET’S GET YOU HERE.</h2>
            <p>
              For the registration form, pass queries, and entry requirements.
            </p>
            <a className="contact-link" href="tel:+919933848824">
              Soumyadeep Bhunia · +91 99338 48824
            </a>
            <a className="contact-link" href="tel:+919877023853">
              Vishal Soni · +91 98770 23853
            </a>
            <a className="contact-link" href="tel:+918392024159">
              Krishnendu · +91 83920 24159
            </a>
            <a
              className="text-link"
              href={festival.registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open delegate form <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="contact-card">
            <p className="eyebrow">02 / ACCOMMODATION</p>
            <h3>STAY A LITTLE LONGER.</h3>
            <p>
              Availability, allocation, and charges must be confirmed with the
              accommodation team before travel.
            </p>
            <a className="contact-link" href="tel:+917735085906">
              Sushant · +91 77350 85906
            </a>
          </div>
          <div className="contact-card">
            <p className="eyebrow">03 / ORGANISING TEAM</p>
            <h3>LET’S TALK ELYSSIA.</h3>
            <p>Arabdhya Bandyopadhyay · Organising Secretary</p>
            <a className="text-link" href="tel:+917980995576">
              <Phone size={15} />
              +91 79809 95576
            </a>
          </div>
        </div>
        <div>
          <div className="map-card">
            <MapPin size={36} />
            <h3>
              FIND YOUR WAY
              <br />
              TO KALYANI.
            </h3>
            <p>{festival.address}</p>
            <a
              href={festival.mapsUrl}
              className="button button-primary"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="contact-note">
            <strong>Before you travel</strong>
            <br />
            Main festival: 2–5 November 2026. Pre-fest: 1 November. Bring your
            institute ID and a valid government ID. Check activity-specific
            timings in the brochure.
          </p>
          <p className="contact-note">
            <strong>Follow the right updates</strong>
            <br />
            Official social handles, a contact email, and an Instagram feed are
            not included in the supplied materials yet. The organising team can
            confirm the current channels. We won’t direct you to an unverified
            account.
          </p>
        </div>
      </section>
    </main>
  );
}
