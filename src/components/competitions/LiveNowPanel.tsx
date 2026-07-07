import BracketDiagram from "@/components/competitions/BracketDiagram";
import { bracketRounds } from "@/data/siteData";

interface LiveNowPanelProps {
  className?: string;
}

const MATCH_WIDTH = 100;
const ROUND_GAP = 20;

export default function LiveNowPanel({ className = "" }: LiveNowPanelProps) {
  const totalWidth =
    bracketRounds.length * MATCH_WIDTH +
    (bracketRounds.length - 1) * ROUND_GAP;

  return (
    <div
      className={`flex h-full flex-col rounded-card border border-surface-border bg-surface-card p-4 ${className}`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-ink-primary">
            Bengaluru Regionals
          </p>
          <p className="text-xs text-ink-muted">Lorem Ipsum</p>
        </div>

        <span className="rounded bg-brand-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">
          Ongoing
        </span>
      </div>

      {/* Round headers */}
      <div
        className="mb-3 flex"
        style={{ width: totalWidth }}
      >
        {bracketRounds.map((round, index) => (
          <div
            key={round.id}
            className="flex justify-center text-[10px] font-semibold uppercase tracking-wide text-ink-muted"
            style={{
              width: MATCH_WIDTH,
              marginRight: index < bracketRounds.length - 1 ? ROUND_GAP : 0,
            }}
          >
            {round.label}
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <BracketDiagram rounds={bracketRounds} />
      </div>
    </div>
  );
}