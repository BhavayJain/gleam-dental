import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import dentistHero from "@/assets/dentist-hero.jpg";
import doctorHeadshot from "@/assets/doctor-headshot.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen Dental — Gentle, Bright Dentistry Studio" },
      {
        name: "description",
        content:
          "Lumen Dental offers whitening, invisible aligners, root canal therapy and pediatric care with Dr. Marisa Bell. Book your visit online.",
      },
      { property: "og:title", content: "Lumen Dental — Gentle, Bright Dentistry Studio" },
      {
        property: "og:description",
        content:
          "Calm, modern dental care with Dr. Marisa Bell. Whitening, aligners, endodontics and pediatric visits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data ---------------------------------- */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Teeth Whitening",
    description: "Gentle, in-chair brightening for a naturally radiant smile.",
    tile: "bg-brand/15",
    shadow: "shadow-brand/10",
  },
  {
    title: "Invisible Aligners",
    description: "Discreet, comfortable straightening with a custom plan.",
    tile: "bg-mint/20",
    shadow: "shadow-mint/10",
  },
  {
    title: "Root Canal Therapy",
    description: "Pain-free saved crowns using advanced micro-endodontics.",
    tile: "bg-peach/20",
    shadow: "shadow-peach/10",
  },
  {
    title: "Pediatric Care",
    description: "Kind, playful visits that build healthy habits early.",
    tile: "bg-lavender/20",
    shadow: "shadow-lavender/10",
  },
] as const;

const credentials = [
  { label: "Board Certified, Cosmetic & Restorative", dot: "bg-mint" },
  { label: "Member, Academy of General Dentistry", dot: "bg-peach" },
  { label: "Fellow, International Society of Cosmetic Dentistry", dot: "bg-lavender" },
  { label: "200+ continuing education credits earned", dot: "bg-brand" },
];

const times = ["09:30 AM", "11:00 AM", "02:15 PM"];

/* -------------------------------- fragments ------------------------------- */

function ToothMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 2.8c-1.5 0-2.3.7-3.6.7-1.4 0-2-.7-3.1-.7C3.5 2.8 2 4.6 2 7.7c0 3.6 1.4 6.4 2.3 8.6.8 1.9 1.4 4.9 3 4.9 1.4 0 1.6-2.7 2-4.5.3-1.3.7-2 2.7-2s2.4.7 2.7 2c.4 1.8.6 4.5 2 4.5 1.6 0 2.2-3 3-4.9.9-2.2 2.3-5 2.3-8.6 0-3.1-1.5-4.9-3.3-4.9-1.1 0-1.7.7-3.1.7-1.3 0-2.1-.7-3.6-.7Z"
      />
    </svg>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-2xl bg-white/70 shadow-lg shadow-brand/10 ring-1 ring-white/60 backdrop-blur-xl">
          <ToothMark className="size-6 text-brand-deep" />
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-none">Lumen Dental</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
            Brighter Smiles Studio
          </p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="opacity-70 transition hover:opacity-100">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#book"
        className="rounded-full bg-white/70 px-5 py-2.5 text-sm font-bold shadow-lg shadow-brand/10 ring-1 ring-white/60 backdrop-blur-xl transition hover:bg-white/90"
      >
        Book a visit
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-10 pt-4 lg:grid-cols-2">
      <div>
        <span className="inline-block rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-deep ring-1 ring-white/50 backdrop-blur-xl">
          Trusted by 4,000+ patients
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] lg:text-6xl">
          Dentistry that feels <span className="text-brand-deep">gentle</span> and bright.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
          Dr. Marisa Bell brings calm, modern care to every smile at Lumen Dental — from checkups to
          full restorations.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#book"
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-deep"
          >
            Book appointment
          </a>
          <a
            href="#services"
            className="rounded-full bg-white/60 px-7 py-3.5 text-sm font-bold ring-1 ring-white/60 backdrop-blur-xl transition hover:bg-white/85"
          >
            Explore services
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[2.5rem] bg-white/50 shadow-2xl shadow-brand/20 ring-1 ring-white/60 backdrop-blur-2xl">
          <img
            src={dentistHero}
            alt="Dr. Marisa Bell smiling in a bright pastel dental clinic"
            width={1088}
            height={1360}
            className="size-full object-cover"
          />
        </div>
        <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white/70 px-5 py-3 shadow-xl shadow-mint/30 ring-1 ring-white/60 backdrop-blur-xl">
          <p className="font-display text-2xl font-extrabold">12 yrs</p>
          <p className="text-xs font-semibold text-ink/60">of gentle care</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="font-display text-3xl font-bold">Care for every smile</h2>
      <p className="mt-2 max-w-lg text-ink/60">
        Comprehensive treatments, delivered with a light touch.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`rounded-3xl bg-white/55 p-6 shadow-xl ${s.shadow} ring-1 ring-white/60 backdrop-blur-xl transition hover:-translate-y-1`}
          >
            <div className={`grid size-12 place-items-center rounded-2xl ${s.tile}`}>
              <ToothMark className="size-6 text-ink/60" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-14">
      <div className="overflow-hidden rounded-[2.5rem] bg-white/50 shadow-2xl shadow-brand/15 ring-1 ring-white/60 backdrop-blur-2xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 lg:p-10">
            <span className="inline-block rounded-full bg-mint/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-ink/70">
              About the doctor
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold">Dr. Marisa Bell, DDS</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              A board-certified cosmetic and restorative specialist, Marisa pairs precision with a
              calm, humane approach so patients feel at ease from the first hello to the final
              polish.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-ink/70">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className={`size-2 rounded-full ${c.dot}`} />
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid place-items-center p-8">
            <img
              src={doctorHeadshot}
              alt="Portrait of Dr. Marisa Bell in a white lab coat"
              width={1024}
              height={1024}
              loading="lazy"
              className="size-64 rounded-[2rem] object-cover ring-1 ring-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [name, setName] = useState("");
  const [service, setService] = useState<string>(services[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times[0]);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !date) {
      setError("Please add your name and a preferred date.");
      return;
    }
    setError("");
    setConfirmed(true);
  }

  return (
    <section id="book" className="mx-auto max-w-6xl px-6 py-14">
      <div className="overflow-hidden rounded-[2.5rem] bg-white/50 shadow-2xl shadow-brand/20 ring-1 ring-white/60 backdrop-blur-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 lg:p-10">
            <h2 className="font-display text-3xl font-bold">Book your visit</h2>
            <p className="mt-2 text-ink/60">Pick a time and we'll confirm within the hour.</p>

            {confirmed ? (
              <div className="mt-6 rounded-2xl bg-mint/20 p-6 ring-1 ring-white/60">
                <p className="font-display text-xl font-bold">You're booked, {name.trim()}.</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service} on {date} at {time}. We'll call to confirm within the hour.
                </p>
                <button
                  type="button"
                  onClick={() => setConfirmed(false)}
                  className="mt-5 rounded-full bg-white/70 px-5 py-2.5 text-sm font-bold ring-1 ring-white/60 transition hover:bg-white/90"
                >
                  Book another visit
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="patient-name"
                    className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50"
                  >
                    Full name
                  </label>
                  <input
                    id="patient-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium ring-1 ring-white/60 outline-none placeholder:text-ink/30 focus:ring-2 focus:ring-brand/40"
                    placeholder="Jordan Rivera"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium ring-1 ring-white/60 outline-none focus:ring-2 focus:ring-brand/40"
                    >
                      {services.map((s) => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50"
                    >
                      Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium ring-1 ring-white/60 outline-none focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50">
                    Time
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        aria-pressed={time === t}
                        className={
                          time === t
                            ? "rounded-full bg-brand/15 px-4 py-2 text-sm font-bold text-brand-deep ring-1 ring-brand/30"
                            : "rounded-full bg-white/70 px-4 py-2 text-sm font-semibold ring-1 ring-white/60 transition hover:bg-white/90"
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                {error && <p className="text-sm font-semibold text-peach">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-deep"
                >
                  Confirm your booking
                </button>
              </form>
            )}
          </div>
          <div className="grid place-items-center bg-mint/15 p-8">
            <img
              src={clinicInterior}
              alt="Bright pastel dental clinic treatment room with soft daylight"
              width={1088}
              height={1360}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover ring-1 ring-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Index() {
  return (
    <div
      className="min-h-screen w-full overflow-hidden font-sans text-ink"
      style={{ background: "var(--page-gradient)" }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full bg-mint/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-40 right-0 size-[380px] rounded-full bg-peach/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[460px] rounded-full bg-lavender/40 blur-3xl" aria-hidden="true" />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <Services />
          <Doctor />
          <Booking />
        </main>
        <footer id="contact" className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-semibold text-ink/50">
            Lumen Dental Studio · 128 Marigold Ave, Suite 4 · (555) 018-2245 · hello@lumendental.co
          </p>
        </footer>
      </div>
    </div>
  );
}
