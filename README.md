# Elyssia 3.0 — AIIMS Kalyani

A responsive, cinematic festival website built from the supplied `Refs/` materials. The hero uses the original Trojan-horse/warrior artwork and the left-aligned composition of the landing-page reference. Event information, photography, the transparent Elyssia logo, and registration links come from the official brochure.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

Production:

```bash
npm run build
npm run start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed site's HTTPS origin before building for production. It is used to resolve social-sharing image URLs.

## Pages

| Route        | Experience                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `/`          | Reference-led hero, animated atmosphere, event discovery, gallery, live countdown, brochure, FAQs |
| `/about`     | About Elyssia and AIIMS Kalyani                                                                   |
| `/events`    | Searchable, filterable event selection, event-detail dialogs, bookmarks, registration links       |
| `/gallery`   | Authentic legacy photographs, category filters, keyboard-accessible lightbox                      |
| `/contact`   | Verified brochure contacts, accommodation information, directions                                 |
| `/login`     | Local festival-planner setup; retained route, **not an authentication service**                   |
| `/dashboard` | Saved shortlist, downloadable text plan, clear-data control                                       |

All pages share navigation, a responsive mobile menu, branded browser titles, and the footer. Secondary pages have matching visible title bars. Loading UI includes App Router skeletons and image-loading placeholders; loading does not impose an artificial delay. Error and missing-page states are also styled.

## Interactivity and accessibility

- Responsive layouts, native smooth anchor navigation, subtle scroll reveals, hover/press states, cinematic hero movement, and drifting embers.
- Reduced-motion support and an explicit pause-motion control in the footer.
- Native modal dialogs with Escape handling, focus containment, restored focus, and background scroll locking.
- Event filters/search, persistent bookmarks, native FAQ disclosures, gallery navigation, and form validation.
- The planner saves **only a name, college, and selected event IDs in the current browser's localStorage**. It sends no personal information to a server. Storage errors and corrupted saved data are handled. Visitors can remove all planner data.
- No invented QR tickets, registration confirmations, payment success states, or availability counts.
- Self-hosted fonts and optimised local WebP images; no external image or font service is required at runtime.

## Editing content

- `src/lib/festival.ts`: verified dates, overall club programmes, WhatsApp registration/Instagram links, brochure schedules, gallery captions, and FAQs.
- `src/app/page.tsx`: home-page composition and hero content.
- `src/app/globals.css`: design tokens, responsive layouts, loading states, and animations.
- `src/components/`: shared navigation, event discovery, gallery, planner, countdown, and UI primitives.
- `public/images/`: source-derived optimised images.
- `public/elyssia-brochure.pdf`: exact copy of the supplied brochure (approximately 13 MB).
- `docs/content-notes.md`: source notes and items requiring organiser confirmation.

The countdown targets **00:00 IST on 2 November 2026**, the first calendar day of the main festival, not a confirmed opening ceremony time. It switches to a festival-live state and then an archive state after 5 November.

## Checks

```bash
npm run lint
npm run build
npm run test:e2e
```

Browser tests use Playwright/Chromium at desktop and mobile sizes, with Axe accessibility checks for all seven pages. Coverage includes navigation, filtering, event details, focus restoration, bookmarks, downloads, gallery controls, planner validation/data clearing, reduced motion, and the 404 page.

The test configuration uses an existing Chrome installation at `/opt/google/chrome/chrome` when available. Otherwise install Chromium:

```bash
npx playwright install chromium
```

You can also set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to another Chrome/Chromium executable. Tests start a local server on port 3100 if one is not already running. Failure screenshots and traces are stored in the ignored `test-results/` directory.

## Before public launch

1. Confirm the delegate and category Google Forms are open. The delegate form comes from the brochure; the club forms and Instagram links are reproduced from the organising team’s WhatsApp message, and acceptance of registrations is controlled by the form owners.
2. Confirm organiser attribution: the supplied brochure identifies **AIIMS Kalyani**; an AIIMS Patna co-organiser credit was not present in the supplied references.
3. Supply an official email, approved 2026 headliner announcements, and any drone footage or logo animation. The club Instagram links currently shown are the links supplied by the organising team.
4. Confirm permission to publicly use the supplied cinematic hero artwork and legacy photographs.
5. If on-site accounts, payments, or tickets are needed, connect an approved backend/payment provider. The current site links to brochure registration forms and deliberately does not simulate those services.

## Stack

Next.js 16.3.6 App Router · React 19 · TypeScript · Tailwind CSS v4 / custom CSS · Lucide icons · Playwright · Axe.
