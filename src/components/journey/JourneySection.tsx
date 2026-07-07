import JourneyStep from "@/components/journey/JourneyStep";
import { journeySteps } from "@/data/siteData";

export default function JourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
      <div className="rounded-card border border-surface-border bg-black px-6 py-10 sm:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            User journey
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-ink-primary sm:text-3xl">
            Your path to the league
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        <div className="flex items-start gap-2 sm:gap-4">
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={step.id}
              step={step}
              isLast={index === journeySteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
