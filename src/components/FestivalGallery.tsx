"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/festival";
import { MediaImage, Modal, TiltCard } from "@/components/ui";

export function FestivalGallery({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState("All memories");
  const [selected, setSelected] = useState<number | null>(null);
  const photos = preview
    ? gallery.slice(0, 3)
    : gallery.filter(
        (photo) => category === "All memories" || photo.category === category,
      );
  useEffect(() => {
    if (selected === null) return;
    const keyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight")
        setSelected((index) =>
          index === null ? null : (index + 1) % photos.length,
        );
      if (event.key === "ArrowLeft")
        setSelected((index) =>
          index === null ? null : (index - 1 + photos.length) % photos.length,
        );
    };
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [selected, photos.length]);
  const photo = selected === null ? null : photos[selected];
  return (
    <>
      {!preview && (
        <div className="category-tabs" role="group" aria-label="Filter gallery">
          {["All memories", "On stage", "Campus life", "Creative moments"].map(
            (item) => (
              <button
                type="button"
                className={`category-tab ${item === category ? "active" : ""}`}
                key={item}
                aria-pressed={item === category}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>
      )}
      <div className={preview ? "gallery-preview" : "gallery-page-grid"}>
        {photos.map((item, index) => (
          <TiltCard className="gallery-tile-shell" key={item.src}>
            <button
              type="button"
              className="gallery-tile"
              aria-label={`Open photograph: ${item.title}`}
              onClick={() => setSelected(index)}
            >
              <MediaImage
                src={item.src}
                preload={!preview && index === 0}
                alt={item.alt}
                sizes="(max-width: 600px) 90vw, 50vw"
              />
              <span className="gallery-caption">
                <span>
                  <small>THE ELYSSIA ARCHIVES</small>
                  <strong>{item.title}</strong>
                </span>
                <ArrowUpRight />
              </span>
            </button>
          </TiltCard>
        ))}
      </div>
      {photo && selected !== null && (
        <Modal
          title={`Photo: ${photo.title}`}
          onClose={() => setSelected(null)}
          className="gallery-modal"
        >
          <MediaImage
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="lightbox-image"
            sizes="90vw"
          />
          <div className="lightbox-bar">
            <div aria-live="polite">
              <h2>{photo.title}</h2>
              <p>
                From the Elyssia archives · {selected + 1} / {photos.length}
              </p>
            </div>
            <div className="lightbox-controls">
              <button
                type="button"
                className="icon-button"
                aria-label="Previous photograph"
                onClick={() =>
                  setSelected((selected - 1 + photos.length) % photos.length)
                }
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="icon-button"
                aria-label="Next photograph"
                onClick={() => setSelected((selected + 1) % photos.length)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
