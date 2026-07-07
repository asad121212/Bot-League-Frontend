import FeatureItem from "@/components/about/FeatureItem";
import AboutDiagram from "@/components/about/AboutDiagram";
import { featureHighlights } from "@/data/siteData";

export default function WhatIsSection() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h2 className="mb-8 font-display text-5xl font-bold uppercase tracking-wide text-ink-primary">
        What is Bot League?
      </h2>

      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {featureHighlights.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </div>

        <AboutDiagram />
      </div>
    </section>
  );
}
