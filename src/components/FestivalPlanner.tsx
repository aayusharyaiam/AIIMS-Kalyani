"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Download,
  LoaderCircle,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { events, festival, type FestivalEvent } from "@/lib/festival";
import {
  clearPlan,
  PROFILE_KEY,
  usePlannerProfile,
  useSavedEvents,
  writeLocal,
} from "@/lib/planner";
import { EventCard, EventDetails } from "@/components/EventExplorer";
import { Modal } from "@/components/ui";

export function PlannerForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const college = String(data.get("college") ?? "").trim();
    if (!name || !college) {
      setError("Please enter your name and college, not just spaces.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      writeLocal(PROFILE_KEY, { name, college });
      router.push("/dashboard");
    } catch {
      setError(
        "Your browser couldn’t save the plan. Allow local storage or explore the events without saving.",
      );
      setSaving(false);
    }
  }
  return (
    <form className="form-panel" onSubmit={submit}>
      <p className="eyebrow">YOUR FESTIVAL, YOUR WAY</p>
      <h2>MAKE IT YOURS.</h2>
      <p>
        Create a personal shortlist on this device. No password, payment, or
        account needed.
      </p>
      <div className="form-field">
        <label htmlFor="planner-name">What should we call you?</label>
        <input
          id="planner-name"
          name="name"
          required
          maxLength={80}
          autoComplete="given-name"
          placeholder="Your name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="planner-college">College / institution</label>
        <input
          id="planner-college"
          name="college"
          required
          maxLength={160}
          autoComplete="organization"
          placeholder="Where you’re joining us from"
        />
      </div>
      <label className="checkbox-label">
        <input type="checkbox" required name="consent" />
        <span>
          I understand this plan is saved only in this browser. It is not a
          registration, ticket, or reservation.
        </span>
      </label>
      <button type="submit" className="button button-primary" disabled={saving}>
        {saving ? (
          <>
            <LoaderCircle className="spin" size={16} />
            Saving your plan…
          </>
        ) : (
          <>
            Create my festival plan <ArrowRight size={16} />
          </>
        )}
      </button>
      {error && (
        <p role="alert" className="form-feedback">
          {error}
        </p>
      )}
      <p className="form-note">
        Your name, college, and shortlist stay on this device; they are not sent
        to us. Clear them at any time from My Shortlist. For festival entry,
        complete the separate{" "}
        <a
          className="text-orange"
          href={festival.registrationUrl}
          target="_blank"
          rel="noreferrer"
        >
          delegate registration form
        </a>
        .
      </p>
      <Link className="text-link" href="/dashboard">
        Already have a shortlist? <ArrowRight size={14} />
      </Link>
    </form>
  );
}

export function PlannerDashboard() {
  const profile = usePlannerProfile();
  const { saved } = useSavedEvents();
  const selectedEvents = events.filter((event) => saved.includes(event.id));
  const [selected, setSelected] = useState<FestivalEvent | null>(null);
  const [message, setMessage] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);
  function download() {
    const text = [
      "ELYSSIA 3.0 — MY FESTIVAL PLAN",
      festival.dates,
      "AIIMS Kalyani, West Bengal",
       "",
       profile ? `${profile.name} · ${profile.college}` : "My shortlist",
       "",
       ...selectedEvents.map(
          (event) =>
            [
              `${event.title} — ${event.category}`,
              event.description,
              ...event.programme.map((item) =>
                [
                  item.name,
                  item.date,
                  item.time,
                  item.venue,
                  item.fee,
                  item.note,
                ]
                  .filter(Boolean)
                  .join(" · "),
              ),
              event.registrationUrl
                ? `Registration: ${event.registrationUrl}`
                : "Registration: See the official brochure",
              event.instagramUrl
                ? `Instagram: ${event.instagramUrl}`
                : undefined,
            ]
              .filter(Boolean)
              .join("\n"),
        ),
      "",
      "This is a personal shortlist, NOT a ticket or registration.",
      `Delegate registration: ${festival.registrationUrl}`,
      "Confirm individual event fees, rules, and timings in the official brochure.",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "My-Elyssia-Plan.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage(
      "Your festival plan has been downloaded. This is not an entry pass.",
    );
  }
  return (
    <>
      <div className="dashboard-toolbar">
        <div>
          <h2>
            {profile
              ? `${profile.name.toUpperCase()}’S ODYSSEY.`
              : "YOUR NEXT CHAPTER."}
          </h2>
          <p>
            {profile ? `${profile.college} · ` : ""}
            {selectedEvents.length} saved experience
            {selectedEvents.length === 1 ? "" : "s"} · Stored on this device
            only
          </p>
        </div>
        <div className="dashboard-buttons">
          <Link className="button button-outline" href="/events">
            Find more events <ArrowUpRight size={15} />
          </Link>
          {selectedEvents.length > 0 && (
            <button
              type="button"
              className="button button-primary"
              onClick={download}
            >
              Download my plan <Download size={15} />
            </button>
          )}
        </div>
      </div>
      <div className="dashboard-notice">
        <ShieldCheck size={20} />
        <div>
          Your shortlist is a personal planning tool, not a ticket or confirmed
          registration. To attend, use the{" "}
          <a
            href={festival.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="text-orange"
          >
            delegate form from the brochure
          </a>{" "}
          and follow the separate entry instructions for each competition.
        </div>
      </div>
      <p role="status" className="status-message">
        {message}
      </p>
      <div className="event-grid">
        {selectedEvents.map((event) => (
          <EventCard key={event.id} event={event} onDetails={setSelected} />
        ))}
        {selectedEvents.length === 0 && (
          <div className="empty-state">
            <Bookmark size={35} />
            <h2>ALL GREAT STORIES START SOMEWHERE.</h2>
            <p>
              Tap the bookmark on any event to save it here. Your music, your
              moments, your very own Elyssia.
            </p>
            <Link href="/events" className="button button-primary">
              Find my first experience <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
      {(profile || selectedEvents.length > 0) && (
        <div className="dashboard-toolbar" style={{ marginTop: 35 }}>
          <p>Saved locally. Clearing browser data also removes this plan.</p>
          <button
            type="button"
            className="clear-button"
            onClick={() => setConfirmClear(true)}
          >
            Clear my saved data
          </button>
        </div>
      )}
      {selected && (
        <EventDetails event={selected} onClose={() => setSelected(null)} />
      )}
      {confirmClear && (
        <Modal title="Clear your plan" onClose={() => setConfirmClear(false)}>
          <p className="eyebrow">A FRESH START</p>
          <h2>CLEAR YOUR PLAN?</h2>
          <p>
            This removes your name, college, and event shortlist from this
            browser. It does not affect any registration you made through the
            official forms.
          </p>
          <div className="modal-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                try {
                  clearPlan();
                  setMessage(
                    "Your saved data has been cleared from this browser.",
                  );
                  setConfirmClear(false);
                } catch {
                  setMessage(
                    "We couldn’t clear your data. Please remove it in your browser settings.",
                  );
                  setConfirmClear(false);
                }
              }}
            >
              Clear saved data <Trash2 size={15} />
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={() => setConfirmClear(false)}
            >
              Keep my plan
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
