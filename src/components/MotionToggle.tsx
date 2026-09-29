"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function MotionToggle() {
  const [paused, setPaused] = useState(false);
  const pausedAnimations = useRef<Animation[]>([]);
  useEffect(
    () => () => {
      delete document.documentElement.dataset.motion;
    },
    [],
  );
  function toggle() {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "running";
    if (next) {
      for (const animation of document.getAnimations()) {
        if (animation.effect?.getTiming().iterations === Infinity) {
          animation.pause();
          pausedAnimations.current.push(animation);
        } else {
          // Finish entrances instead of freezing readable content at low opacity.
          try {
            animation.finish();
          } catch {
            /* An idle animation has nothing to finish. */
          }
        }
      }
    } else {
      pausedAnimations.current.forEach((animation) => animation.play());
      pausedAnimations.current = [];
    }
  }
  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={paused}
      aria-label="Pause decorative animations"
    >
      {paused ? <Play size={12} /> : <Pause size={12} />}
      {paused ? "RESUME MOTION" : "PAUSE MOTION"}
    </button>
  );
}
