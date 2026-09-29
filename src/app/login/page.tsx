import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { PlannerForm } from "@/components/FestivalPlanner";
import { MediaImage } from "@/components/ui";
export const metadata: Metadata = {
  title: "Plan your odyssey",
  description:
    "Build a personal festival plan for Elyssia 3.0. Save a shortlist on your device, explore experiences, and find the official registration form.",
};
export default function PlannerPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Plan your visit"
        title="YOUR PEOPLE."
        accent="YOUR ODYSSEY."
        description="A little planning. A lot of possibility. Start a personal festival plan and make room for the unexpected."
      />
      <section className="section container planner-grid">
        <div className="planner-intro">
          <MediaImage
            src="/images/legacy-festival-friends.webp"
            preload
            alt="A group of festival participants celebrating together"
          />
          <h2>
            LESS SCROLLING.
            <br />
            <span>MORE STORY-MAKING.</span>
          </h2>
          <p>
            Keep the experiences you love in one place, ready for 2–5 November.
            Your plan lives in this browser, so you can come back and keep
            exploring.
          </p>
          <ol className="planner-steps">
            <li>
              <span>01</span>Personalise your plan.
            </li>
            <li>
              <span>02</span>Bookmark the events that catch your eye.
            </li>
            <li>
              <span>03</span>Register through the official brochure links.
            </li>
          </ol>
        </div>
        <PlannerForm />
      </section>
    </main>
  );
}
