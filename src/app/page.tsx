import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { EventExplorer } from "@/components/EventExplorer";
import { FestivalGallery } from "@/components/FestivalGallery";
import { Countdown } from "@/components/Countdown";
import { MediaImage, Reveal, SectionHeading } from "@/components/ui";
import { faqs, festival } from "@/lib/festival";

const stripItems = [
  "A celebration beyond the ordinary",
  "02—05 November 2026",
  "Culture. Community. Chaos.",
  "AIIMS Kalyani",
  "Your next great story",
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <MediaImage
          src="/images/hero-trojan.webp"
          alt="A warrior beneath a monumental Trojan horse, surrounded by an ember-lit sky"
          className="hero-art"
          preload
          sizes="100vw"
        />
        <div className="embers" aria-hidden="true">
          {Array.from({ length: 6 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="container hero-content">
          <div className="hero-enter">
            <div className="hero-kicker">
              <span />
              AIIMS KALYANI PRESENTS <strong>THE THIRD CHAPTER</strong>
            </div>
            <h1 id="hero-title">
              ELYSSIA<span>3.0</span>
            </h1>
            <p className="hero-subtitle">YOUR ODYSSEY AWAITS.</p>
            <div className="hero-rule" />
            <div className="hero-meta">
              <span>02 — 05 NOVEMBER 2026</span>
              <b>✦</b>
              <span>CULTURE</span>
              <b>✦</b>
              <span>CELEBRATION</span>
            </div>
          </div>
          <div className="hero-enter-late">
            <p className="hero-copy">
              Some stories are told. Others are lived.
              <br />
              Four days of fearless expression, electric nights, and moments
              that become a part of you. This is your call to the extraordinary.
            </p>
            <div className="hero-actions">
              <a
                href={festival.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Enter the odyssey <ArrowUpRight size={17} />
              </a>
              <a
                href={festival.brochure}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                <BookOpen size={17} />
                Explore brochure
              </a>
            </div>
          </div>
        </div>
        <div className="hero-emblem" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth=".5"
            />
            <circle
              cx="50"
              cy="50"
              r="37"
              stroke="currentColor"
              strokeWidth=".5"
              strokeDasharray="1 5"
            />
            <path
              d="m50 8 7 35 35 7-35 7-7 35-7-35-35-7 35-7Z"
              stroke="currentColor"
              strokeWidth=".8"
            />
            <path
              d="m50 25 4 21 21 4-21 4-4 21-4-21-21-4 21-4Z"
              fill="currentColor"
            />
            <circle
              cx="50"
              cy="50"
              r="5"
              fill="#15100b"
              stroke="currentColor"
            />
          </svg>
        </div>
        <div className="hero-chapter" aria-hidden="true">
          <span>03</span> A NEW CHAPTER. AN ENDLESS ODYSSEY.
        </div>
        <div className="container hero-bottom">
          <a href="#our-story" className="hero-scroll">
            <span className="scroll-line" />
            Scroll to discover
          </a>
          <a
            href={festival.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hero-location"
          >
            <MapPin size={13} />
            Kalyani, West Bengal <ArrowUpRight size={12} />
          </a>
        </div>
      </section>
      <div
        className="festival-strip"
        role="img"
        aria-label="Elyssia, 2–5 November 2026, AIIMS Kalyani"
      >
        <div className="strip-track" aria-hidden="true">
          {[...stripItems, ...stripItems].map((item, i) => (
            <span key={i}>
              {item}
              <i style={{ marginLeft: "40px" }}>✦</i>
            </span>
          ))}
        </div>
      </div>
      <section id="our-story" className="section container">
        <Reveal className="intro-grid">
          <div className="intro-copy">
            <div className="eyebrow">
              <span>01</span>
              <i />
              MORE THAN A FESTIVAL
            </div>
            <h2>
              NOT JUST A FEST.
              <br />
              AN <span>ODYSSEY.</span>
            </h2>
            <p>
              For a few extraordinary days, the familiar becomes something else.
              Classrooms give way to creative playgrounds. Strangers become your
              people. And an entire campus finds its rhythm.
            </p>
            <p style={{ marginTop: 14 }}>
              Welcome to Elyssia, the annual socio-cultural festival of AIIMS
              Kalyani. A meeting of art, ambition, and the kind of energy you
              can only feel when you’re here.
            </p>
            <Link href="/about" className="text-link">
              The story behind Elyssia <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="intro-image">
            <MediaImage
              src="/images/legacy-live-concert.webp"
              alt="Warm stage lights and a live performance from the Elyssia archives"
            />
            <div className="image-caption">
              <span>✦</span>THE MOMENTS THAT MAKE US.
            </div>
            <div className="edition-stamp">
              THE<strong>3RD</strong>CHAPTER
            </div>
          </div>
        </Reveal>
        <Reveal className="stats-row">
          <div className="stat">
            <strong>
              04<span>.</span>
            </strong>
            <p>Days of discovery</p>
          </div>
          <div className="stat">
            <strong>
              03<span>.</span>
            </strong>
            <p>Chapters of Elyssia</p>
          </div>
          <div className="stat">
            <strong>
              01<span>.</span>
            </strong>
            <p>Extraordinary campus</p>
          </div>
          <div className="stat">
            <strong>∞</strong>
            <p>Stories to take home</p>
          </div>
        </Reveal>
      </section>
      <section id="events" className="section events-section section-border">
        <div className="container">
          <Reveal>
            <SectionHeading
              number="02"
              eyebrow="FIND YOUR CALLING"
              title={
                <>
                  MANY STAGES. <span>YOUR SPOTLIGHT.</span>
                </>
              }
            >
              <p>
                Chase the thrill. Find your people.
                <br />
                There’s a little extraordinary for everyone.
              </p>
            </SectionHeading>
          </Reveal>
          <EventExplorer featured />
        </div>
      </section>
      <section className="pronite">
        <MediaImage
          src="/images/legacy-blue-stage.webp"
          alt="A blue-lit live stage from a previous edition of Elyssia"
          className="pronite-background"
          sizes="100vw"
        />
        <div className="container">
          <Reveal>
            <p className="eyebrow">
              <Sparkles size={13} />
              WHEN THE STARS COME OUT
            </p>
            <h2>
              THE DAYS ARE EPIC.
              <br />
              <span>THE NIGHTS? LEGENDARY.</span>
            </h2>
            <p>
              Lose yourself in the lights, the music, and a thousand voices
              becoming one. Star Night and DJ Night are coming to Elyssia.
            </p>
            <Link href="/events#nightlife" className="button button-outline">
              Discover the afterhours <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
        <span className="pronite-label">
          <span className="pulse-dot" />
          2026 LINEUP · REVEALING SOON
        </span>
      </section>
      <section className="section container">
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="THE ELYSSIA ARCHIVES"
            title={
              <>
                YOU HAD TO <span>BE THERE.</span>
              </>
            }
          >
            <Link href="/gallery" className="text-link">
              Step into the memories <ArrowUpRight size={17} />
            </Link>
          </SectionHeading>
          <FestivalGallery preview />
        </Reveal>
        <Reveal className="brochure-callout">
          <div>
            <BookOpen />
            <div>
              <h3>YOUR FIELD GUIDE TO THE EXTRAORDINARY.</h3>
              <p>
                The complete programme, competition rules, and everything in
                between.
              </p>
            </div>
          </div>
          <a
            href={festival.brochure}
            download="Elyssia-2026-Brochure.pdf"
            className="button button-outline"
          >
            Download brochure <Download size={16} />
          </a>
        </Reveal>
      </section>
      <Countdown />
      <section className="section container">
        <Reveal className="faq-layout">
          <div className="faq-intro">
            <div className="eyebrow">
              <span>04</span>
              <i />A LITTLE CLARITY
            </div>
            <h2>
              GOOD QUESTIONS.
              <br />
              <span>GREAT PLANS.</span>
            </h2>
            <p>
              Before you start your odyssey, here are a few things worth
              knowing.
            </p>
            <Link href="/contact" className="text-link">
              Still curious? Talk to us <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
