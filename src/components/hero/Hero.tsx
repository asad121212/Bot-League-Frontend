import Button from "@/components/ui/Button";
import LiveBadge from "@/components/hero/LiveBadge";
import { liveBroadcast } from "@/data/siteData";
import heroArenaUrl from "@/assets/hero-arena.png";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-card border border-surface-border">
        {/* Arena photo backdrop */}
        <img
          src={heroArenaUrl}
          alt="Robots colliding in the Bot League arena"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Left-to-right dark scrim so the headline stays readable over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,11,13,0.96) 0%, rgba(11,11,13,0.75) 35%, rgba(11,11,13,0.25) 65%, rgba(11,11,13,0.05) 100%)",
          }}
          aria-hidden="true"
        />

        <LiveBadge broadcast={liveBroadcast} />

        <div className="relative flex min-h-[420px] flex-col justify-center gap-4 px-6 py-16 sm:min-h-[520px] sm:px-10">
          <h1 className="max-w-xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-primary sm:text-5xl">
            India&apos;s Ultimate <span className="text-brand">Robotics Arena</span>
          </h1>
          <p className="max-w-md text-sm text-ink-secondary sm:text-base">
            Build. Compete. Rank. The national ecosystem for robotics arena.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button variant="primary">Create account</Button>
            <Button variant="secondary">Explore events</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
