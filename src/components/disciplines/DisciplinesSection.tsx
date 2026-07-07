import SectionHeading from "@/components/ui/SectionHeading";
import DisciplineCard from "@/components/disciplines/DisciplineCard";
import RegisterPerkItem from "@/components/disciplines/RegisterPerkItem";
import LeaderboardGraphic from "@/components/disciplines/LeaderboardGraphic";
import { disciplines, registerPerks } from "@/data/siteData";
import competitionBackgroundUrl from "@/assets/disciplines/competition-background.png";

export default function DisciplinesSection() {
  return (
    <section id="disciplines" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Competition Disciplines Card */}
      <div className="relative overflow-hidden rounded-card border border-surface-border bg-black px-6 py-10 sm:px-10">
        <img
          src={competitionBackgroundUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 object-cover opacity-20 md:block"
        />

        <div className="relative">
          <SectionHeading
            eyebrow="Sports"
            title="Competition Disciplines"
            eyebrowClassName="text-3xl"
            titleClassName="text-5xl"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((discipline) => (
              <DisciplineCard key={discipline.id} discipline={discipline} />
            ))}
          </div>
        </div>
      </div>

      {/* League Advantage */}
      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_450px] md:items-center">
        <div>
          <SectionHeading
            eyebrow="Why register?"
            title="The League Advantage"
            eyebrowClassName="text-4xl"
            titleClassName="text-5xl"
          />

          <div className="mt-8 flex flex-col gap-8">
            {registerPerks.map((perk) => (
              <RegisterPerkItem key={perk.id} perk={perk} />
            ))}
          </div>
        </div>

        <LeaderboardGraphic />
      </div>
    </section>
  );
}