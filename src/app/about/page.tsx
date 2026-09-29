import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Heart, Sparkles, BookOpen } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { MediaImage, Reveal } from "@/components/ui";
export const metadata: Metadata = {
  title: "Our story",
  description:
    "Meet Elyssia 3.0 and the AIIMS Kalyani campus that brings its annual socio-cultural celebration to life.",
};
export default function AboutPage() {
  return (
    <main id="main-content" className="page-content">
      <PageTitle
        eyebrow="Our story"
        title="A LITTLE WONDER."
        accent="A LOT OF US."
        description="Beyond the white coats and the everyday, there’s a world of creativity waiting to come alive."
      />
      <section className="section container">
        <Reveal className="story-feature">
          <MediaImage
            src="/images/elyssia-logo.webp"
            className="logo-art"
            preload
            alt="Elyssia’s gold and navy emblem with a Greek ship, waves, and compass points"
          />
          <div>
            <p className="eyebrow">THIS IS ELYSSIA 3.0</p>
            <h2>
              A MEETING OF
              <br />
              <span>WORLDS.</span>
            </h2>
            <p>
              Elyssia is the annual socio-cultural festival of the All India
              Institute of Medical Sciences, Kalyani. It’s a space for artists,
              performers, competitors, and the endlessly curious to come
              together.
            </p>
            <p>
              Our third chapter runs from 2–5 November 2026. Music, dance,
              theatre, art, literature, quizzes, sport, and late-night
              celebrations turn the campus into a shared adventure.
            </p>
            <p>
              The ship in our emblem captures that spirit: different people, one
              journey, and a horizon full of possibility.
            </p>
            <Link href="/events" className="button button-primary">
              Find your experience <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal className="values-grid">
          <div className="value-card">
            <Sparkles size={26} />
            <h3>MAKE SOMETHING.</h3>
            <p>
              A performance. A painting. A moment that only you could create.
              This is a place to let your creative side take the lead.
            </p>
          </div>
          <div className="value-card">
            <Heart size={26} />
            <h3>FIND YOUR PEOPLE.</h3>
            <p>
              Come with your friends. Leave with a few more. At the heart of
              Elyssia is the simple joy of showing up together.
            </p>
          </div>
          <div className="value-card">
            <Compass size={26} />
            <h3>TAKE THE DETOUR.</h3>
            <p>
              Try the unfamiliar. Follow the music. Say yes to the unexpected.
              Your favourite memory might be the one you didn’t plan.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="section section-border">
        <div className="container">
          <Reveal className="story-feature">
            <div>
              <p className="eyebrow">THE PLACE WE CALL HOME</p>
              <h2>
                AIIMS KALYANI.
                <br />
                <span>MORE THAN A CAMPUS.</span>
              </h2>
              <p>
                Located in Kalyani, West Bengal, the All India Institute of
                Medical Sciences brings together medical education, research,
                and patient care. Elyssia celebrates another part of that
                community: its imagination.
              </p>
              <p>
                For the festival, familiar spaces become stages, meeting places,
                and the backdrop to stories that will outlast the four days.
              </p>
              <a
                href="https://aiimskalyani.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Explore the institute <ArrowUpRight size={17} />
              </a>
            </div>
            <MediaImage
              src="/images/aiims-kalyani-campus.webp"
              alt="The All India Institute of Medical Sciences Kalyani campus"
            />
          </Reveal>
          <div className="brochure-callout">
            <div>
              <BookOpen />
              <div>
                <h3>THE WHOLE STORY, IN ONE PLACE.</h3>
                <p>
                  Read the official Elyssia 2026 brochure for the complete
                  programme.
                </p>
              </div>
            </div>
            <a
              href="/elyssia-brochure.pdf"
              className="button button-outline"
              target="_blank"
              rel="noreferrer"
            >
              Open brochure <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
