import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { PlannerDashboard } from "@/components/FestivalPlanner";
export const metadata: Metadata = {
  title: "My festival shortlist",
  description:
    "Your personal Elyssia festival shortlist, saved on this device. Review, remove, or download your favourite experiences.",
};
export default function DashboardPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="My shortlist"
        title="THE MOMENTS"
        accent="YOU’RE HERE FOR."
        description="Your own little corner of Elyssia. Save what speaks to you, and leave some room for a happy detour."
      />
      <section className="section container">
        <PlannerDashboard />
      </section>
    </main>
  );
}
