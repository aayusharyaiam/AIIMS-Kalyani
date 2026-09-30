"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { ImageOff, X } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

type RevealOptions = {
  delay?: number;
  stagger?: number;
  variant?: "up" | "fade" | "left" | "right";
};

function useReveal(
  ref: RefObject<HTMLDivElement | null>,
  { delay = 0, stagger = 0, variant = "up" }: RevealOptions,
) {
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || !("IntersectionObserver" in window) || preference.matches)
      return;
    const animations: Animation[] = [];
    const finish = () => animations.forEach((animation) => animation.cancel());
    const initialTransform = {
      up: "translateY(24px)",
      fade: "scale(.97)",
      left: "translateX(24px)",
      right: "translateX(-24px)",
    }[variant];
    const targets = stagger
      ? Array.from(element.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        )
      : [element];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (preference.matches || document.documentElement.dataset.motion === "paused") {
            observer.disconnect();
            return;
          }
          targets.forEach((target, index) => {
            animations.push(target.animate(
              [
                { opacity: 0, transform: initialTransform },
                { opacity: 1, transform: "none" },
              ],
              {
                duration: 700,
                delay: delay + index * stagger,
                easing: "cubic-bezier(.16,1,.3,1)",
                // Release transforms after the entrance so hover/focus styles work.
                fill: "backwards",
              },
            ));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    preference.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", finish);
      finish();
    };
  }, [ref, delay, stagger, variant]);
}

export function Reveal({
  children,
  className = "",
  ...options
}: RevealOptions & { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, options);
  return <div ref={ref} className={className}>{children}</div>;
}

export function TiltCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { delay });
  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (
      document.documentElement.dataset.motion === "paused" ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches
    ) {
      resetTilt();
      return;
    }
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5));
    element.style.setProperty("--tilt-x", `${y * -10}deg`);
    element.style.setProperty("--tilt-y", `${x * 10}deg`);
    element.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
    element.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
  }
  function resetTilt() {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--pointer-x", "50%");
    element.style.setProperty("--pointer-y", "50%");
  }
  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <motion.div 
        style={{ width: "100%", height: "100%" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

export function SplitText({
  text,
  className = "",
  by = "char",
  delay = 0,
}: {
  text: string;
  className?: string;
  by?: "char" | "word";
  delay?: number;
}) {
  const items = by === "word" ? text.split(" ") : Array.from(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.span 
      ref={ref}
      className={`split-text split-text-${by} ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: by === "word" ? 0.05 : 0.02,
            delayChildren: delay,
          },
        },
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" style={{ display: "inline-block" }}>
        {items.map((item, index) => (
          <motion.span
            className="split-item"
            key={`${item}-${index}`}
            style={{ display: "inline-block" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { type: "spring", stiffness: 300, damping: 24 }
              }
            }}
          >
            {item === " " ? "\u00a0" : item}
            {by === "word" && index < items.length - 1 ? "\u00a0" : null}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}

export function MediaImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
  preload = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={`media-image ${loaded ? "is-loaded" : ""} ${className}`}>
      {!loaded && !failed && (
        <span className="image-skeleton skeleton" aria-hidden="true" />
      )}
      {failed ? (
        <div className="image-fallback">
          <ImageOff size={24} />
          <span>{alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function Modal({
  children,
  title,
  onClose,
  className = "",
}: {
  children: ReactNode;
  title: string;
  onClose: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    const trigger = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-label={title}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div 
        className="modal-inner"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          type="button"
          className="icon-button modal-close"
          aria-label={`Close ${title}`}
          onClick={onClose}
        >
          <X size={22} />
        </button>
        {children}
      </motion.div>
    </dialog>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number}</span>
          <i />
          {eyebrow}
        </div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
