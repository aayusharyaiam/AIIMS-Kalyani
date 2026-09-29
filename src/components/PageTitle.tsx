import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export function PageTitle({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="page-title">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={12} />
          <span>{eyebrow}</span>
        </div>
        <div className="page-title-content">
          <div>
            <p className="eyebrow">ELYSSIA 3.0 / {eyebrow}</p>
            <h1>
              {title}
              <br />
              <span>{accent}</span>
            </h1>
          </div>
          <div className="page-title-note">
            <ArrowUpRight size={34} />
            <p>{description}</p>
          </div>
        </div>
      </div>
      <span className="title-watermark" aria-hidden="true">
        E3.
      </span>
    </section>
  );
}
