const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-2xl bg-white/70 shadow-lg shadow-brand/10 ring-1 ring-white/60 backdrop-blur-xl">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-brand-deep">
            <path
              fill="currentColor"
              d="M12 2.8c-1.5 0-2.3.7-3.6.7-1.4 0-2-.7-3.1-.7C3.5 2.8 2 4.6 2 7.7c0 3.6 1.4 6.4 2.3 8.6.8 1.9 1.4 4.9 3 4.9 1.4 0 1.6-2.7 2-4.5.3-1.3.7-2 2.7-2s2.4.7 2.7 2c.4 1.8.6 4.5 2 4.5 1.6 0 2.2-3 3-4.9.9-2.2 2.3-5 2.3-8.6 0-3.1-1.5-4.9-3.3-4.9-1.1 0-1.7.7-3.1.7-1.3 0-2.1-.7-3.6-.7Z"
            />
          </svg>
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-none">Lumen Dental</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
            Brighter Smiles Studio
          </p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
        {links.map((l) => (
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
