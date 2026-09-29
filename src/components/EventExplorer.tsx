"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Check,
  Search,
  Compass,
  BookOpen,
  MapPin,
} from "lucide-react";
import { categories, events, type FestivalEvent } from "@/lib/festival";
import { useSavedEvents } from "@/lib/planner";
import { MediaImage, Modal } from "@/components/ui";

export function EventCard({
  event,
  onDetails,
}: {
  event: FestivalEvent;
  onDetails: (event: FestivalEvent) => void;
}) {
  const { saved, toggle } = useSavedEvents();
  const [error, setError] = useState("");
  const isSaved = saved.includes(event.id);
  return (
    <article className="event-card">
      <div className="event-visual">
        <MediaImage
          src={event.image}
          alt={event.imageAlt}
          sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"
        />
        <span className="event-category">{event.category}</span>
        <button
          type="button"
          className="icon-button save-event"
          aria-label={`${isSaved ? "Unsave" : "Save"} ${event.title}`}
          aria-pressed={isSaved}
          onClick={() => {
            try {
              toggle(event.id);
              setError("");
            } catch {
              setError(
                "Your browser could not save this event. Enable local storage to use the shortlist.",
              );
            }
          }}
        >
          {isSaved ? <Check size={15} /> : <Bookmark size={15} />}
        </button>
      </div>
      <div className="event-card-body">
        <div className="event-number">{event.club}</div>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        {error && <p role="alert">{error}</p>}
        <div className="event-card-footer">
          <span>
            <MapPin size={12} />
            AIIMS Kalyani
          </span>
          <button
            type="button"
            className="event-detail-button"
            onClick={() => onDetails(event)}
          >
            Explore event <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}

export function EventDetails({
  event,
  onClose,
}: {
  event: FestivalEvent;
  onClose: () => void;
}) {
  const { saved, toggle } = useSavedEvents();
  const [message, setMessage] = useState("");
  const isSaved = saved.includes(event.id);
  return (
    <Modal title={event.title} onClose={onClose}>
      <MediaImage
        src={event.image}
        alt={event.imageAlt}
        className="event-modal-image"
      />
      <p className="eyebrow">{event.category} / ELYSSIA 3.0</p>
      <h2>{event.title}</h2>
      <p>{event.details}</p>
      <p className="detail-note">
        Final timings, eligibility, entry fees, and coordinator details are in
        the official event brochure. A shortlist is not an event registration.
      </p>
      <div className="modal-actions">
        <a
          className="button button-primary"
          href={
            event.registrationUrl ??
            `/elyssia-brochure.pdf#page=${event.brochurePage}`
          }
          target="_blank"
          rel="noreferrer"
        >
          {event.registrationUrl ? "Registration form" : "Rules & registration"}
          <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="button button-outline"
          onClick={() => {
            try {
              toggle(event.id);
              setMessage(
                isSaved
                  ? "Removed from your shortlist."
                  : "Added to your shortlist.",
              );
            } catch {
              setMessage(
                "Your browser could not save this event. Please enable local storage.",
              );
            }
          }}
        >
          {isSaved ? <Check size={15} /> : <Bookmark size={15} />}
          {isSaved ? "Saved to my plan" : "Save to my plan"}
        </button>
      </div>
      <p className="status-message" role="status">
        {message}
      </p>
    </Modal>
  );
}

export function EventExplorer({ featured = false }: { featured?: boolean }) {
  const [category, setCategory] = useState("All experiences");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<FestivalEvent | null>(null);
  const filtered = events.filter(
    (event) =>
      (category === "All experiences" || event.category === category) &&
      `${event.title} ${event.description} ${event.club}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const visible = featured ? filtered.slice(0, 3) : filtered;
  return (
    <>
      <div className="filter-toolbar">
        <div
          className="category-tabs"
          role="group"
          aria-label="Filter events by category"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={`category-tab ${category === item ? "active" : ""}`}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        {!featured && (
          <label className="search-field">
            <span className="sr-only">Search events</span>
            <Search size={16} />
            <input
              type="search"
              placeholder="Find your next experience…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        )}
      </div>
      {!featured && (
        <p className="result-count" role="status">
          {filtered.length} experience{filtered.length === 1 ? "" : "s"} to make
          your own · Full programme in the brochure
        </p>
      )}
      <div className={`event-grid ${featured ? "featured-grid" : ""}`}>
        {visible.map((event) => (
          <EventCard key={event.id} event={event} onDetails={setSelected} />
        ))}
        {visible.length === 0 && (
          <div className="empty-state">
            <Compass size={35} />
            <h3>A different path, perhaps?</h3>
            <p>
              No events match that search. Try a different name or explore all
              categories.
            </p>
            <button
              className="button button-outline"
              type="button"
              onClick={() => {
                setCategory("All experiences");
                setQuery("");
              }}
            >
              Reset filters <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
      {featured && (
        <div className="events-bottom">
          <Link href="/events" className="button button-outline">
            Discover all experiences <ArrowRight size={16} />
          </Link>
        </div>
      )}
      {!featured && (
        <div className="brochure-callout">
          <div>
            <BookOpen />
            <div>
              <h3>There’s more to the story.</h3>
              <p>
                Quizzes, gaming, workshops, informals, and the complete
                competition rules.
              </p>
            </div>
          </div>
          <a
            className="button button-outline"
            href="/elyssia-brochure.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Full event brochure <ArrowUpRight size={16} />
          </a>
        </div>
      )}
      {selected && (
        <EventDetails event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
