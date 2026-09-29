"use client";

import { useMemo, useSyncExternalStore } from "react";

export const SAVED_KEY = "elyssia.saved.v1";
export const PROFILE_KEY = "elyssia.planner.v1";
const CHANGE_EVENT = "elyssia-planner-change";
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(CHANGE_EVENT, listener);
  };
}
function read(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
export function writeLocal(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
export function useSavedEvents() {
  const raw = useSyncExternalStore(
    subscribe,
    () => read(SAVED_KEY, "[]"),
    () => "[]",
  );
  const saved: string[] = useMemo(() => {
    try {
      const data: unknown = JSON.parse(raw);
      return Array.isArray(data)
        ? data.filter((id): id is string => typeof id === "string")
        : [];
    } catch {
      return [];
    }
  }, [raw]);
  function toggle(id: string) {
    writeLocal(
      SAVED_KEY,
      saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id],
    );
  }
  return { saved, toggle };
}
export type PlannerProfile = { name: string; college: string };
export function usePlannerProfile() {
  const raw = useSyncExternalStore(
    subscribe,
    () => read(PROFILE_KEY, "null"),
    () => "null",
  );
  return useMemo((): PlannerProfile | null => {
    try {
      const data = JSON.parse(raw);
      return data &&
        typeof data.name === "string" &&
        typeof data.college === "string"
        ? { name: data.name, college: data.college }
        : null;
    } catch {
      return null;
    }
  }, [raw]);
}
export function clearPlan() {
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(SAVED_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
