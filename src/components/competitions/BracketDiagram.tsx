import { useMemo } from "react";
import type { BracketRound, SlotStatus } from "@/types";

interface BracketDiagramProps {
  rounds: BracketRound[];
}

/** Layout constants — change these to resize the whole bracket. */
const MATCH_WIDTH = 100;
const MATCH_HEIGHT = 40;
const ROUND_GAP = 20;
const DIAGRAM_HEIGHT = 200;

const slotStyles: Record<SlotStatus, string> = {
  advancing: "text-ink-primary font-semibold",
  eliminated: "text-ink-muted line-through decoration-ink-muted/50",
  pending: "text-ink-secondary",
};

interface PositionedMatch {
  id: string;
  x: number;
  y: number;
  centerY: number;
  teams: BracketRound["matches"][number]["teams"];
}

/**
 * Computes the x/y position of every match box.
 *
 * The key trick: within a round of `n` matches, match `i`'s vertical
 * center is placed at `height * (2i + 1) / (2n)` — the same distribution
 * `justify-content: space-around` would produce. Because each round has
 * half as many matches as the previous one, a round-N match's center is
 * always exactly the midpoint of the two round-(N-1) matches that feed
 * into it. That's what keeps the connector lines meeting cleanly with no
 * hand-tuned offsets, no matter how many rounds are passed in.
 */
function layoutRounds(rounds: BracketRound[]): PositionedMatch[][] {
  return rounds.map((round, roundIndex) => {
    const count = round.matches.length;
    const x = roundIndex * (MATCH_WIDTH + ROUND_GAP);

    return round.matches.map((match, matchIndex) => {
      const centerY = (DIAGRAM_HEIGHT * (2 * matchIndex + 1)) / (2 * count);
      return {
        id: match.id,
        x,
        y: centerY - MATCH_HEIGHT / 2,
        centerY,
        teams: match.teams,
      };
    });
  });
}

export default function BracketDiagram({ rounds }: BracketDiagramProps) {
  const positioned = useMemo(() => layoutRounds(rounds), [rounds]);
  const totalWidth =
    rounds.length * MATCH_WIDTH + Math.max(rounds.length - 1, 0) * ROUND_GAP;

  return (
    <div
      className="relative overflow-x-auto"
      style={{ height: DIAGRAM_HEIGHT }}
      role="img"
      aria-label="Single-elimination tournament bracket"
    >
      <svg
        className="absolute left-0 top-0"
        width={totalWidth}
        height={DIAGRAM_HEIGHT}
        aria-hidden="true"
      >
        {positioned.slice(0, -1).map((round, roundIndex) =>
          round.map((match, matchIndex) => {
            const next = positioned[roundIndex + 1][Math.floor(matchIndex / 2)];
            const startX = match.x + MATCH_WIDTH;
            const startY = match.centerY;
            const midX = startX + ROUND_GAP / 2;
            const endX = next.x;
            const endY = next.centerY;
            return (
              <path
                key={match.id}
                d={`M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`}
                fill="none"
                stroke="#E5342A"
                strokeWidth={2}
              />
            );
          }),
        )}
      </svg>

      {positioned.map((round) =>
        round.map((match) => (
          <div
            key={match.id}
            className="absolute flex flex-col justify-center gap-0.5 rounded border border-surface-border bg-surface-raised px-2.5 py-1.5"
            style={{ left: match.x, top: match.y, width: MATCH_WIDTH, height: MATCH_HEIGHT }}
          >
            {match.teams.map((team) => (
              <p key={team.id} className={`truncate text-[11px] ${slotStyles[team.status]}`}>
                {team.name}
              </p>
            ))}
          </div>
        )),
      )}
    </div>
  );
}
