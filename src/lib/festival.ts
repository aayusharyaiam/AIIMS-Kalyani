// Editorial facts and links transcribed from Refs/Brochure Elyssia.pdf.
// The countdown marks the calendar date, not an announced opening ceremony time.
export const festival = {
  name: "Elyssia 3.0",
  dates: "02 — 05 November 2026",
  countdownTo: "2026-11-02T00:00:00+05:30",
  endsAt: "2026-11-06T00:00:00+05:30",
  registrationUrl: "https://forms.gle/WLKkkYqyuJieRUEa7",
  brochure: "/elyssia-brochure.pdf",
  address:
    "NH-34 Connector, Basantapur, Saguna, Kalyani, Nadia, West Bengal — 741245",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=AIIMS+Kalyani",
};

export type FestivalEvent = {
  id: string;
  title: string;
  category: string;
  club: string;
  image: string;
  imageAlt: string;
  description: string;
  details: string;
  registrationUrl?: string;
  brochurePage: number;
};
export const events: FestivalEvent[] = [
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    category: "Music",
    club: "CADENZA · FIND YOUR VOICE",
    image: "/images/legacy-vocal-performance.webp",
    imageAlt: "A vocalist performing at a previous Elyssia edition",
    description:
      "One mic. Your moment. Make the stage your own in the solo and duet singing competition.",
    details:
      "Pitch Perfect is part of Cadenza, Elyssia’s music programme. Explore the solo and duet formats, eligibility, registration fees, and performance rules in the official brochure. Listed for 5 November, 3–5 PM, in the auditorium.",
    brochurePage: 40,
  },
  {
    id: "rhythm-rumble",
    title: "Rhythm Rumble",
    category: "Dance",
    club: "NRITYAVISHKAR · OWN THE FLOOR",
    image: "/images/legacy-classical-dance.webp",
    imageAlt: "A traditional dance group at a previous Elyssia edition",
    description:
      "Two dancers. One rhythm. Let your chemistry and movement do the talking.",
    details:
      "Rhythm Rumble features in Nrityavishkar’s dance programme. Check the brochure for the duet format, music submission guidance, and fees. Listed for 3 November, 2–5 PM, on the auditorium stage.",
    registrationUrl: "https://forms.gle/UpikuHyLYhuSFLJm9",
    brochurePage: 57,
  },
  {
    id: "culture-en-vogue",
    title: "Culture En Vogue",
    category: "Flagship",
    club: "THE RUNWAY · MAKE A STATEMENT",
    image: "/images/legacy-dance-performance.webp",
    imageAlt:
      "Costumed stage performers photographed at a previous Elyssia edition",
    description:
      "Culture meets couture. Bring your creative vision to Elyssia’s fashion showcase.",
    details:
      "Culture En Vogue is the festival’s fashion show. Read the official brochure for participation guidelines, team composition, fees, and registration instructions. This card uses legacy festival imagery, not a photograph of the upcoming show. Listed for 5 November from 5:30 PM, at the concert stage.",
    brochurePage: 8,
  },
  {
    id: "words-worth",
    title: "Words’ Worth",
    category: "Literary & art",
    club: "A-LIT-REASURE · WORDS COME ALIVE",
    image: "/images/legacy-festival-friends.webp",
    imageAlt:
      "Elyssia participants celebrating together in a legacy festival photograph",
    description:
      "For the storytellers, the wordsmiths, and everyone with something worth saying.",
    details:
      "Words’ Worth is the English poem-writing competition in the A-Lit-reasure literary programme. It accepts online submissions. Refer to page 15 of the brochure for the deadline, entry rules, and submission method.",
    brochurePage: 15,
  },
  {
    id: "muse-mania",
    title: "Muse Mania",
    category: "Literary & art",
    club: "KALAKRITI · CREATE SOMETHING REAL",
    image: "/images/legacy-live-art.webp",
    imageAlt: "An artist drawing during a previous festival activity",
    description:
      "A little imagination. A blank canvas. A chance to leave your mark.",
    details:
      "Muse Mania is an online sketching contest in Kalakriti’s Sanrachna art programme. Read the event-specific rules for materials, theme, format, submission deadlines, and fees before using the art registration form.",
    registrationUrl: "https://forms.gle/3rgQyso4AXBMZUu26",
    brochurePage: 72,
  },
  {
    id: "actify",
    title: "Actify",
    category: "Drama",
    club: "NATYANIDHI · STEP INTO CHARACTER",
    image: "/images/legacy-dance-performance.webp",
    imageAlt:
      "A theatrical group performance from the supplied legacy photo collection",
    description:
      "Stories that move you. Performances that stay with you. The stage is calling.",
    details:
      "Actify is part of Natyanidhi’s Dramatiks programme. The brochure contains the performance format, participation rules, fees, and schedule. The linked form is for offline drama activities. Actify is a short-drama competition, listed for 2 November, 2–5 PM, on the auditorium stage.",
    registrationUrl: "https://forms.gle/8yoeGBetspAD8c3MA",
    brochurePage: 64,
  },
  {
    id: "sparta",
    title: "Sparta",
    category: "Sports",
    club: "DYNAMOS · RISE TO THE CHALLENGE",
    image: "/images/aiims-kalyani-campus.webp",
    imageAlt: "The AIIMS Kalyani campus, host of the festival",
    description:
      "Bring your team spirit to the courts and fields. This is where competitors become a community.",
    details:
      "Sparta includes badminton, volleyball, football, cricket, table tennis, throwball, and a marathon. Sports dates are tentatively 25 October–2 November; check with the relevant coordinator. Sports registration is not included in the delegate pass.",
    brochurePage: 79,
  },
  {
    id: "escape-room",
    title: "Escape Room",
    category: "Flagship",
    club: "THE CHALLENGE · THINK YOUR WAY OUT",
    image: "/images/elyssia-odyssey-background.webp",
    imageAlt: "Nautical and classical artwork from the Elyssia brochure",
    description:
      "Follow the clues, trust your team, and see what waits on the other side.",
    details:
      "Escape Room is a separately registered activity and is excluded from the delegate pass. The programme begins during pre-fest on 1 November. Consult the brochure for team size, fees, slots, and registration details.",
    brochurePage: 10,
  },
];
export const categories = [
  "All experiences",
  "Music",
  "Dance",
  "Flagship",
  "Literary & art",
  "Drama",
  "Sports",
];
export const gallery = [
  {
    src: "/images/legacy-live-concert.webp",
    title: "Nights to remember",
    category: "On stage",
    alt: "A concert stage glowing with warm lights at a previous Elyssia festival",
  },
  {
    src: "/images/legacy-classical-dance.webp",
    title: "Made of movement",
    category: "On stage",
    alt: "A classical dance ensemble in colourful traditional costumes",
  },
  {
    src: "/images/legacy-festival-friends.webp",
    title: "Found our people",
    category: "Campus life",
    alt: "A group of students sharing a moment at the festival",
  },
  {
    src: "/images/legacy-blue-stage.webp",
    title: "After the sun goes down",
    category: "On stage",
    alt: "Blue stage lighting illuminating a live concert",
  },
  {
    src: "/images/legacy-live-art.webp",
    title: "In the making",
    category: "Creative moments",
    alt: "An artist sketching a portrait during an art activity",
  },
  {
    src: "/images/legacy-guitarist.webp",
    title: "Every chord, a story",
    category: "On stage",
    alt: "A guitarist performing live at the festival",
  },
  {
    src: "/images/legacy-festival-crowd.webp",
    title: "A campus, alive",
    category: "Campus life",
    alt: "A crowd gathering beside an illuminated campus building",
  },
  {
    src: "/images/legacy-classical-music.webp",
    title: "A little harmony",
    category: "Creative moments",
    alt: "A classical instrumental ensemble performing together",
  },
];
export const faqs = [
  {
    question: "When and where is Elyssia 3.0?",
    answer:
      "The main festival takes place from 2–5 November 2026 at AIIMS Kalyani, West Bengal. Pre-fest activities begin on 1 November. Some sports and online competitions run earlier; refer to the brochure for individual dates.",
  },
  {
    question: "How do I register for the festival?",
    answer:
      "Use the delegate registration form linked from this website, which is provided in the official brochure. Individual competitions may have separate forms and fees. If the form is unavailable, contact the registration team rather than making a payment elsewhere.",
  },
  {
    question: "What does the delegate pass include?",
    answer:
      "The delegate pass is valid for all four main festival days and includes entry to fest events and Pro Shows. Escape Room, sports, and Zumba are excluded. Competition entry fees may be separate. Passes are individual, non-transferable, and non-refundable.",
  },
  {
    question: "Is accommodation available?",
    answer:
      "Accommodation is subject to availability and allocation priorities. Charges are shared during registration. Contact Sushant at +91 77350 85906 to confirm arrangements before travelling.",
  },
  {
    question: "What should I bring for entry?",
    answer:
      "Carry your institute ID and a valid government-issued ID, as required by the brochure. Keep your registration confirmation handy and check the rules for any activities you enter.",
  },
  {
    question: "Have the headline artists been announced?",
    answer:
      "The supplied brochure lists Star Night and DJ Night as ‘Revealing Soon’. Photographs on this website are from earlier editions and are not announcements of the 2026 lineup.",
  },
];
