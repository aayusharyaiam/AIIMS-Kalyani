"use client";

import { useEffect, useState } from "react";
import { festival } from "@/lib/festival";

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const initial = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);
  const difference =
    now === null ? null : new Date(festival.countdownTo).getTime() - now;
  const ended = now !== null && now >= new Date(festival.endsAt).getTime();
  const units =
    difference === null
      ? []
      : [
          Math.floor(Math.max(0, difference) / 86400000),
          Math.floor(Math.max(0, difference) / 3600000) % 24,
          Math.floor(Math.max(0, difference) / 60000) % 60,
          Math.floor(Math.max(0, difference) / 1000) % 60,
        ];
  return (
    <section className="countdown-section">
      <div className="container countdown-content">
        <div>
          <div className="eyebrow">
            <span className="pulse-dot" />
            {ended
              ? "THE MEMORIES LIVE ON"
              : difference !== null && difference <= 0
                ? "THE ODYSSEY IS HERE"
                : "THE COUNTDOWN TO 2 NOVEMBER"}
          </div>
          <h2>
            {ended
              ? "A CHAPTER TO REMEMBER."
              : "THE WAIT IS PART OF THE STORY."}
          </h2>
          <p>2–5 November 2026 · AIIMS Kalyani · All times IST</p>
        </div>
        {difference === null ? (
          <div className="countdown-date">
            <div className="date-number">
              02<span>—</span>05
            </div>
            <div className="date-info">
              <strong>NOVEMBER</strong>
              <span>2026 · FOUR UNFORGETTABLE DAYS</span>
            </div>
          </div>
        ) : difference > 0 ? (
          <div
            className="live-countdown"
            role="timer"
            aria-label="Time until 2 November 2026"
          >
            <span className="sr-only">
              Countdown to the festival date, not an opening ceremony time.
            </span>
            {units.map((value, i) => (
              <div key={i}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{["DAYS", "HOURS", "MINUTES", "SECONDS"][i]}</span>
              </div>
            ))}
          </div>
        ) : (
          <a
            className="button button-outline"
            href={ended ? "/gallery" : "/events"}
          >
            {ended ? "Relive the memories" : "Explore the programme"}
          </a>
        )}
      </div>
    </section>
  );
}
