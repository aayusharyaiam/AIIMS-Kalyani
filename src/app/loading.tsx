import { Compass } from "lucide-react";
export default function Loading() {
  return (
    <main
      id="main-content"
      className="container loading-page"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div role="status" className="loading-status">
        <Compass className="spin" size={20} />
        Your next chapter is loading…
      </div>
      <div aria-hidden="true">
        <div className="skeleton loading-eyebrow" />
        <div className="skeleton loading-title" />
        <div className="skeleton loading-copy" />
        <div className="event-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="skeleton skeleton-card" />
          ))}
        </div>
      </div>
    </main>
  );
}
