import doctorHeadshot from "@/assets/doctor-headshot.jpg";

const credentials = [
  { label: "Board Certified, Cosmetic & Restorative", dot: "bg-mint" },
  { label: "Member, Academy of General Dentistry", dot: "bg-peach" },
  { label: "Fellow, International Society of Cosmetic Dentistry", dot: "bg-lavender" },
  { label: "200+ continuing education credits earned", dot: "bg-brand" },
];

export function Doctor() {
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
