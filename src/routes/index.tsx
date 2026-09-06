import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Doctor } from "@/components/site/Doctor";
import { Booking } from "@/components/site/Booking";

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
