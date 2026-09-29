"use client";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main-content" className="error-content">
      <p className="eyebrow">A SMALL INTERRUPTION</p>
      <h1>
        LET’S FIND
        <br />
        <span className="text-orange">OUR WAY BACK.</span>
      </h1>
      <p>
        Something interrupted this page. Try again, or head back to the
        festival.
      </p>
      <button type="button" className="button button-primary" onClick={reset}>
        Try again <RotateCcw size={16} />
      </button>
      <Link href="/" className="button button-outline">
        Back to home
      </Link>
    </main>
  );
}
