export const services = [
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

export function Services() {
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
