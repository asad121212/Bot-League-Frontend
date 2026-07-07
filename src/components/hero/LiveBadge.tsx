import type { LiveBroadcast } from "@/types";

interface LiveBadgeProps {
  broadcast: LiveBroadcast;
}

export default function LiveBadge({ broadcast }: LiveBadgeProps) {
  if (!broadcast.isLive) return null;

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 rounded bg-black/60 px-3 py-1.5 backdrop-blur-sm">
      <span className="flex items-center gap-1.5 rounded bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        Live
      </span>
      <span className="text-xs font-medium text-ink-secondary">
        {broadcast.episodeLabel} · {broadcast.eventName}
      </span>
      <button className="text-xs font-semibold uppercase tracking-wide text-brand hover:text-white">
        Watch Live
      </button>
    </div>
  );
}
