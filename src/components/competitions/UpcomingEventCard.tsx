import type { UpcomingEvent } from "@/types";
import Button from "@/components/ui/Button";

interface UpcomingEventCardProps {
  event: UpcomingEvent;
  onRegister?: (eventId: string) => void;
  className?: string;
}

export default function UpcomingEventCard({
  event,
  onRegister,
  className = "",
}: UpcomingEventCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-card border border-surface-border bg-surface-card p-4 ${className}`}
    >
      <div>
        <p className="mb-3 text-sm font-semibold text-ink-primary">{event.name}</p>

        <dl className="mb-4 grid grid-cols-3 gap-2 text-xs">
          <div>
            <dt className="text-ink-muted">Date</dt>
            <dd className="text-ink-secondary">{event.date}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">Location</dt>
            <dd className="text-ink-secondary">{event.location}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">Category</dt>
            <dd className="text-ink-secondary">{event.category}</dd>
          </div>
        </dl>
      </div>

      <Button
        variant="primary"
        size="sm"
        className="w-full"
        onClick={() => onRegister?.(event.id)}
      >
        Register
      </Button>
    </div>
  );
}
