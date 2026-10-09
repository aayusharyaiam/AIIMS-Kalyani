// The WhatsApp message supplies the overall club names and exact social/form
// links. The attached brochure supplies the programme, dates, venues, and fees.
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

export type EventProgrammeItem = {
  name: string;
  date?: string;
  time?: string;
  venue?: string;
  fee?: string;
  note?: string;
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
  programme: EventProgrammeItem[];
  registrationUrl?: string;
  instagramUrl?: string;
  sourceNote?: string;
};

export const events: FestivalEvent[] = [
  {
    id: "abhivyakti",
    title: "Abhivyakti",
    category: "Dance",
    club: "01 / DANCE",
    image: "/images/legacy-classical-dance.webp",
    imageAlt: "Archive dance image used for Abhivyakti until club artwork is supplied",
    description:
      "Solo, duet, group, battle, and workshop formats for every kind of dancer.",
    details:
      "Abhivyakti is the overall dance programme. The WhatsApp message lists five competitions, while the brochure also includes a Zumba Workshop.",
    programme: [
      {
        name: "Shringar — Solo Classical Dance",
        date: "1 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹99",
      },
      {
        name: "Groove — Solo Western Dance",
        date: "1 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹99",
      },
      {
        name: "Rhythm Rumble — Duet Dance",
        date: "3 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹149",
        note: "The WhatsApp message spells this as “Rhythmn Rumble”; the brochure uses “Rhythm Rumble”.",
      },
      {
        name: "Symphony — Group Dance Competition",
        date: "3 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹399",
      },
      {
        name: "Adaptune — Dance Battle",
        date: "4 November 2026",
        time: "3:00–5:00 PM",
        venue: "Auditorium Ground Floor / In front of Auditorium",
        fee: "₹75",
      },
      {
        name: "Zumba Workshop",
        date: "1 November 2026",
        time: "8:00–10:00 AM",
        venue: "Auditorium 2nd Floor",
        fee: "₹69",
        note: "Additional brochure listing; not included in the WhatsApp event list.",
      },
    ],
    registrationUrl: "https://forms.gle/UpikuHyLYhuSFLJm9",
    instagramUrl:
      "https://instagram.com/nritya__avishkar.aiimsk?obrf=c216bG1kNGR3aTdv",
  },
  {
    id: "sanrachna",
    title: "Sanrachna",
    category: "Art",
    club: "02 / ART",
    image: "/images/legacy-live-art.webp",
    imageAlt: "Archive art image used for Sanrachna until club artwork is supplied",
    description:
      "Complete, model, solve, and scribble your way through four art challenges.",
    details:
      "Sanrachna is the overall art programme. The brochure calls The Missing Piece a “Complete me art challenge” and spells The Art Enigma with an “n”.",
    programme: [
      {
        name: "The Missing Piece — Complete Me Art Challenge",
        date: "2 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Auditorium Ground Floor",
        fee: "₹70 per person",
      },
      {
        name: "Chisel n' Chill — Clay Modelling Contest",
        date: "3 November 2026",
        time: "10:00 AM–1:00 PM",
        venue: "Auditorium Ground Floor",
        fee: "₹70 per person",
      },
      {
        name: "The Art Enigma — Mystery Art Challenge",
        date: "4 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Auditorium Ground Floor",
        fee: "₹70 per person",
        note: "The WhatsApp message spells this as “The Art Engima”; the brochure uses “The Art Enigma”.",
      },
      {
        name: "Scribbleverse — Scribbling Art Contest",
        date: "5 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Auditorium Ground Floor",
        fee: "₹70 per person",
      },
    ],
    registrationUrl: "https://forms.gle/3rgQyso4AXBMZUu26",
    instagramUrl:
      "https://instagram.com/kalakriti.aiimskalyani?obrf=MW1teTJvNHBjMzZuMg%3D%3D",
  },
  {
    id: "euphony",
    title: "Euphony",
    category: "Music",
    club: "03 / MUSIC",
    image: "/images/legacy-classical-music.webp",
    imageAlt: "Archive music image used for Euphony until club artwork is supplied",
    description:
      "Instrumental and vocal submissions meet solo and duet performances on stage.",
    details:
      "Euphony is the overall music programme. The WhatsApp message does not include a registration link; use the official brochure for the event rules and any form instructions.",
    programme: [
      {
        name: "Euphony (Instrumental)",
        date: "Submission deadline: 31 October 2026",
        time: "Online submission",
        venue: "Online",
        fee: "₹30",
      },
      {
        name: "Euphony (Singing)",
        date: "Submission deadline: 31 October 2026",
        time: "Online submission",
        venue: "Online",
        fee: "₹30",
      },
      {
        name: "Chord Chronicles — Solo Instrumental",
        date: "4 November 2026",
        time: "12:30–2:00 PM",
        venue: "Auditorium",
        fee: "₹60",
      },
      {
        name: "Pitch Perfect — Solo & Duet Singing",
        date: "5 November 2026",
        time: "3:00–5:00 PM",
        venue: "Auditorium",
        fee: "₹60",
      },
    ],
  },
  {
    id: "quizophrenia",
    title: "Quizophrenia",
    category: "Quiz",
    club: "04 / QUIZ",
    image: "/images/aiims-kalyani-campus.webp",
    imageAlt: "The AIIMS Kalyani campus used for Quizophrenia until club artwork is supplied",
    description:
      "Five quiz formats, from observation and movies to a general open quiz.",
    details:
      "Quizophrenia is the overall quiz programme. Participants should come in teams of three or fewer. The WhatsApp message does not include a registration link; use the brochure for rules and registration instructions.",
    programme: [
      {
        name: "Blink-and-We Quizzed It! — Art of Noticing Quiz",
        date: "1 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Academic Block LT",
        fee: "₹120 per team",
      },
      {
        name: "Jack of All Trades",
        date: "2 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Academic Block LT",
        fee: "₹120 per team",
      },
      {
        name: "Cast and Curious — Movies Quiz",
        date: "3 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Academic Block LT",
        fee: "₹120 per team",
      },
      {
        name: "To Quiz a Mockingbird — U-25 M.E.L.A.S Quiz",
        date: "4 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Academic Block LT",
        fee: "₹120 per team",
      },
      {
        name: "Quiz Me If You Can 3.0 — General Open Quiz",
        date: "5 November 2026",
        time: "11:00 AM–1:00 PM",
        venue: "Audi Stage",
        fee: "₹120 per team",
      },
    ],
  },
  {
    id: "sparta",
    title: "Sparta",
    category: "Sports",
    club: "05 / SPORTS",
    image: "/images/aiims-kalyani-campus.webp",
    imageAlt: "The AIIMS Kalyani campus used for Sparta until club artwork is supplied",
    description:
      "Bring your team to badminton, volleyball, football, cricket, and more.",
    details:
      "Sparta is the overall sports programme. Tournament dates are tentative and sports registration is separate from the delegate pass. Confirm sport-specific rules, venues, fees, and dates with the organisers.",
    programme: [
      {
        name: "Badminton · Volleyball · Football · Cricket · Table Tennis · Throwball · Marathon",
        date: "Tentative tournament window: 25 October–2 November 2026",
        venue: "See the sport-specific brochure pages",
        fee: "See brochure",
        note: "The brochure provides sport-specific venues, fees, rules, and any different dates. Check the latest organiser update before travelling.",
      },
    ],
  },
  {
    id: "couture-en-vogue",
    title: "Couture En Vogue",
    category: "Fashion",
    club: "06 / FASHION SHOW",
    image: "/images/legacy-dance-performance.webp",
    imageAlt:
      "Archive stage image used for Couture En Vogue until club artwork is supplied",
    description:
      "A fashion showcase where creative vision takes the stage.",
    details:
      "Couture En Vogue is the overall fashion show. The supplied WhatsApp message provides the registration and Instagram links below.",
    programme: [
      {
        name: "Couture En Vogue",
        date: "5 November 2026",
        time: "5:30 PM onwards",
        venue: "Concert Stage",
        note: "Brochure contacts: Avanie (+91 89998 92441), Puspita (+91 96357 80273).",
      },
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDYcD7cWjK9FOlAUctYSUI1aalb04FjJTwUpZE3ygp7xXy4w/viewform?usp=send_form",
    instagramUrl:
      "https://instagram.com/natya_nidhi.aiimsk?xtok=MWVzbGp2ZWRudm9jZA%3D%3D",
    sourceNote:
      "The WhatsApp message calls the event “Couture En Vogue”; the brochure title on page 8 reads “Culture En Vogue”.",
  },
  {
    id: "dramatiks",
    title: "Dramatiks",
    category: "Drama",
    club: "07 / DRAMA",
    image: "/images/legacy-live-concert.webp",
    imageAlt: "Archive stage image used for Dramatiks until club artwork is supplied",
    description:
      "Short drama, dumb charades, and stand-up bring three kinds of theatre to life.",
    details:
      "Dramatiks is the overall drama programme. Its registration and Instagram links are the same as the Couture En Vogue links supplied in the WhatsApp message.",
    programme: [
      {
        name: "Actify — Short Drama Competition",
        date: "2 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹149",
      },
      {
        name: "Guess-da-guise — Dumb Charades",
        date: "2 November 2026",
        time: "11:00 AM–12:30 PM",
        venue: "Auditorium Stage / Lecture Theatre",
        fee: "₹99",
        note: "The brochure gives both venues on the same entry; confirm the venue with the organisers.",
      },
      {
        name: "Laughathon — Stand-up",
        date: "2 November 2026",
        time: "2:00–5:00 PM",
        venue: "Auditorium Stage",
        fee: "₹49",
      },
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDYcD7cWjK9FOlAUctYSUI1aalb04FjJTwUpZE3ygp7xXy4w/viewform?usp=send_form",
    instagramUrl:
      "https://instagram.com/natya_nidhi.aiimsk?xtok=MWVzbGp2ZWRudm9jZA%3D%3D",
    sourceNote:
      "Actify and Laughathon are both listed for 2 November, 2:00–5:00 PM. Confirm the schedule if attending both.",
  },
  {
    id: "oracle-of-words",
    title: "The Oracle of Words",
    category: "Literary",
    club: "08 / LITERARY EVENTS",
    image: "/images/legacy-festival-friends.webp",
    imageAlt:
      "Archive festival image used for The Oracle of Words until club artwork is supplied",
    description:
      "Writing, debate, games, quizzes, performance, and a movie screening for word people.",
    details:
      "The Oracle of Words is the overall literary programme. The WhatsApp message lists the offline events below and includes the offline-events form and Instagram link.",
    programme: [
      {
        name: "Escape Room",
        date: "1 November 2026, then 2–5 November 2026",
        time: "1 Nov: 3:00 PM onwards; 2–5 Nov: 10:00 AM–5:00 PM",
        venue: "Auditorium 1st Floor",
        fee: "₹50 per person",
      },
      {
        name: "Scriborium — Writing Contest",
        date: "1 November 2026",
        time: "10:00 AM–12:30 PM",
        venue: "LT Ground Floor, Academic Block-11",
        fee: "₹20 per person",
      },
      {
        name: "Pictionary",
        date: "2 November 2026",
        time: "9:00 AM–12:00 PM",
        venue: "LT Ground Floor, Academic Block-11",
        fee: "₹20 per person",
      },
      {
        name: "The Movie Verdict — Movie Review and Discussion",
        date: "2 November 2026",
        time: "10:00 AM–12:00 PM",
        venue: "Yamuna Hall (Yatri Hall)",
        fee: "₹20 per person",
      },
      {
        name: "Lokmanthan — Parliamentary Debate",
        date: "3 November 2026",
        time: "9:00 AM–1:00 PM",
        venue: "Auditorium Main Stage",
        fee: "₹40 per person",
      },
      {
        name: "Devil's Advocate",
        date: "4 November 2026",
        time: "9:00 AM–12:30 PM",
        venue: "Auditorium Main Stage",
        fee: "₹40 per person",
      },
      {
        name: "Geek-a-byte — The Literary Gameshow",
        date: "4 November 2026",
        time: "2:00–5:00 PM",
        venue: "LT Ground Floor, Academic Block-11",
        fee: "₹20 per person",
        note: "The brochure appears to print “4th November 2025”; the surrounding programme is for 2026, so confirm this date with the organisers.",
      },
      {
        name: "The Projection Room — Movie Screening",
        date: "1 November 2026",
        time: "6:00–9:00 PM",
        venue: "Auditorium Hall",
      },
      {
        name: "AI Fiesta — AI Based Contest",
        date: "5 November 2026",
        time: "10:00 AM–12:30 PM",
        venue: "LT Ground Floor, Academic Block-11",
        fee: "₹20 per person",
      },
      {
        name: "Just-A-Minute (JAM)",
        date: "5 November 2026",
        time: "2:00–4:00 PM",
        venue: "LT Ground Floor, Academic Block-11",
        fee: "₹20 per person",
      },
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/1U6d4AetqVJ6U_8i_bi7eSYgcOBYiuKymTALuS7raePc/edit",
    instagramUrl:
      "https://instagram.com/alitreasure.aiimsk?vrfl=MTFlZHVwaGV1dTZ3Zg%3D%3D",
  },
];

export const categories = [
  "All experiences",
  "Dance",
  "Art",
  "Music",
  "Quiz",
  "Sports",
  "Fashion",
  "Drama",
  "Literary",
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
