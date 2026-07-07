import { ecosystemCards } from "@/data/siteData";
import EcosystemCard from "./EcosystemCard";

export default function EcosystemGrid() {
  return (
    <div className="px-8 pt-12 lg:px-12">
      <h2 className="mb-10 font-display text-3xl font-bold uppercase tracking-wide text-ink-primary sm:text-4xl">
        Join The Ecosystem
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ecosystemCards.map((card) => (
          <EcosystemCard
            key={card.id}
            title={card.title}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}