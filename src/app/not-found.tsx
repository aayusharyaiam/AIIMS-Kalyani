import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="error-content">
      <p className="eyebrow">404 / AN UNEXPECTED DETOUR</p>
      <h1>
        OFF THE MAP.
        <br />
        <span className="text-orange">NOT THE ADVENTURE.</span>
      </h1>
      <p>
        That page has sailed beyond the horizon. Your next great story is still
        right here.
      </p>
      <Link href="/" className="button button-primary">
        Back to Elyssia <ArrowRight size={16} />
      </Link>
      <Link href="/events" className="button button-outline">
        Explore events
      </Link>
    </main>
  );
}
