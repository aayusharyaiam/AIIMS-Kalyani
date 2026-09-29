# Content and asset provenance

## Supplied references

- `Refs/Landing Page hero coomponent_ref.jpeg`: cinematic, left-aligned hero layout reference. “The Odyssey” is the movie title in that reference, not a verified official festival subtitle. The site uses odyssey language as a visual/editorial theme while retaining Elyssia 3.0 as the event name.
- `Refs/hero.jpg.jpeg`: actual hero artwork, 736 × 414. Served as `public/images/hero-trojan.webp` without claiming a higher-resolution source.
- `Refs/logo.jpeg` and the brochure: Elyssia ship/compass emblem. The WebP logo is extracted from the PDF with its real transparency mask, avoiding the JPEG's white background.
- `Refs/page req.jpeg`: dark theme, about sections, brochure, media, registration, countdown, contacts and social integrations.
- `Refs/similar_event_webrefs.png`: Hallucia layout reference only. No Hallucia facts, sponsors, contacts, or artist claims were transferred.
- `Refs/Brochure Elyssia.pdf`: content authority; copied unchanged to `public/elyssia-brochure.pdf`.

## Confirmed programme

- Main dates: **2–5 November 2026**; year is confirmed by multiple event pages and the PDF metadata title.
- Pre-fest: **1 November 2026**.
- Some online submissions close **31 October**; sports are generally marked tentative for **25 October–2 November**.
- Pitch Perfect: page 40; Rhythm Rumble: page 57; Culture En Vogue: page 8; Words’ Worth: page 15; Muse Mania: page 72; Actify: page 64; Sparta: page 79; Escape Room: page 10.
- Some brochure pages contain reused copy or date inconsistencies. The site avoids the second-edition text and does not reproduce the Geek-a-Byte 2025 date from an otherwise 2026 programme.
- Headliners are **“Revealing Soon!”** No depicted legacy performer is presented as booked for 2026.

## Registration

Delegate form from page 5: https://forms.gle/WLKkkYqyuJieRUEa7

This link was extracted from the PDF. An automated request returned 401; the form's current availability and acceptance of responses require organiser verification. The website provides contact numbers and advises visitors to contact the team if the form is unavailable.

The delegate pass is valid for four days, individual, non-transferable, and non-refundable. Escape Room, sports and Zumba are excluded. Individual competition fees can be separate. No price, inventory, or transaction success is invented.

Category forms used in the site are also extracted from the brochure. Event modal links go to the relevant form when known, or the relevant PDF page for registration instructions.

## Photography

`legacy-*` photographs were extracted directly from the supplied brochure's legacy pages 105–106. Labels describe earlier editions, not the 2026 lineup. Individual years and performer identities have not been independently established.

Campus photographs and event artwork are also extracted from the brochure. Some images include intentional source transparency. The original low-resolution materials cannot provide high-resolution detail at very large display sizes; higher-resolution originals can replace the corresponding WebP files without changing the components.

## Not supplied / not implemented as fictional content

- An official email address, Instagram URL, or other social handles.
- A live Instagram feed, drone video, animated logo video, or labelled logos for the prior two editions.
- Confirmed headliner names, sponsors, attendance totals or an overall prize pool.
- An official AIIMS Patna organiser/co-organiser credit; the provided brochure identifies AIIMS Kalyani.
- Authentication, an on-site payment gateway, backend registration persistence or ticket issuing.

The legacy `/login` and `/dashboard` routes now offer an explicitly labelled local-only planner instead of a non-functional fake authentication/payment interface.

## Fonts

Barlow Condensed and DM Sans are locally served Google Fonts. Their SIL Open Font License notices are included in `public/fonts/OFL-Barlow-Condensed.txt` and `public/fonts/OFL-DM-Sans.txt`.
