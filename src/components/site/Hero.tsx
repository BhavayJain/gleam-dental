import dentistHero from "@/assets/dentist-hero.jpg";

export function Hero() {
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
