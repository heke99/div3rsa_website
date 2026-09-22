"use client";
import Link from "next/link";
import { useSyncExternalStore, useState } from "react";
const STORAGE_KEY = "div3rsa-site-cookie-consent-v1";
const EVENT_NAME = "div3rsa-cookie-consent";
type ConsentChoice = "accepted" | "rejected";
function readChoice(): ConsentChoice | null {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    return value?.version === 1 && typeof value.optional === "boolean" &&
      (value.choice === "accepted" || value.choice === "rejected") &&
      value.optional === (value.choice === "accepted") ? value.choice : null;
  } catch { return null; }
}
function subscribe(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback); window.addEventListener("storage", callback);
  return () => { window.removeEventListener(EVENT_NAME, callback); window.removeEventListener("storage", callback); };
}
export function CookieConsent() {
  const stored = useSyncExternalStore<ConsentChoice | "server" | null>(subscribe, readChoice, () => "server" as const);
  const [sessionChoice, setSessionChoice] = useState<ConsentChoice | null>(null);
  const [reopened, setReopened] = useState(false);
  const hasChoice = sessionChoice !== null || (stored !== null && stored !== "server");
  const open = stored !== "server" && (!hasChoice || reopened);
  function choose(choice: ConsentChoice) {
    const value = { version: 1, optional: choice === "accepted", choice, updatedAt: new Date().toISOString() };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch { /* Storage can be unavailable in private browsing. */ }
    setSessionChoice(choice); setReopened(false);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
  }
  // Keep the reopen control after the footer instead of obscuring page content on small screens.
  return <>{open && <section className="cookie-consent" aria-label="Cookie preferences"><div className="cookie-consent-copy"><strong>Your privacy on this site</strong><p>We use essential storage for site functions and to remember your choice. No optional analytics or advertising cookies are currently enabled.</p><Link href="/cookies">Read our cookie policy</Link></div><div className="cookie-consent-actions"><button type="button" onClick={() => choose("rejected")}>Reject optional</button><button type="button" onClick={() => choose("accepted")}>Allow optional</button></div></section>}{hasChoice && !open && <button className="cookie-settings-button" style={{ position: "static", display: "block", margin: "0 auto 24px" }} type="button" onClick={() => setReopened(true)}>Cookie preferences</button>}</>;
}
