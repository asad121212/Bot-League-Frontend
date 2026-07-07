import SectionHeading from "@/components/ui/SectionHeading";
import LiveNowPanel from "@/components/competitions/LiveNowPanel";
import UpcomingEventCard from "@/components/competitions/UpcomingEventCard";
import PastResultItem from "@/components/competitions/PastResultItem";
import { pastResults, upcomingEvents } from "@/data/siteData";

export default function CompetitionsSection() {
  const handleRegister = (eventId: string) => {
    // Hook point for a future registration flow / API call.
    console.info(`Register clicked for event: ${eventId}`);
  };

  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <SectionHeading title="Competitions & Events" />

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        <div className="flex h-full flex-col">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
            Live now
          </p>
          <LiveNowPanel className="flex-1" />
        </div>

        <div className="flex h-full flex-col">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-secondary">
            Upcoming
          </p>
          <div className="flex flex-1 flex-col justify-between gap-4">
            {upcomingEvents.map((event) => (
              <UpcomingEventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
                className="flex-1"
              />
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-secondary">
            Past results
          </p>
          <div className="flex flex-1 flex-col justify-between gap-3">
            {pastResults.map((result) => (
              <PastResultItem key={result.id} result={result} className="flex-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
