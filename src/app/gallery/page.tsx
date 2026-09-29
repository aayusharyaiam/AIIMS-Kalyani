import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { FestivalGallery } from "@/components/FestivalGallery";
export const metadata: Metadata = {
  title: "The memories",
  description:
    "Step into the Elyssia archives. Explore authentic photographs of performances, student life, and creative moments from the festival’s earlier editions.",
};
export default function GalleryPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Gallery"
        title="THE LIGHTS FADE."
        accent="THE FEELING STAYS."
        description="A few frames from the Elyssia archives. Real moments from earlier editions, shared in the official festival brochure."
      />
      <section className="section container">
        <FestivalGallery />
        <p className="contact-note">
          These photographs are from previous editions, as included in the
          supplied brochure. They do not represent the confirmed 2026 artist
          lineup. Select any photograph to explore, or use the arrow keys inside
          the viewer.
        </p>
      </section>
    </main>
  );
}
