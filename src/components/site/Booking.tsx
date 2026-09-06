import { useState } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { services } from "./Services";

const times = ["09:30 AM", "11:00 AM", "02:15 PM"];

export function Booking() {
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
