import { Swords } from "lucide-react";
import type { Discipline } from "@/types";

interface DisciplineCardProps {
  discipline: Discipline;
}

export default function DisciplineCard({ discipline }: DisciplineCardProps) {
  return (
    <div className="group relative h-44 overflow-hidden rounded-card border border-surface-border bg-surface-card">
      {discipline.image ? (
        <img
          src={discipline.image}
          alt={discipline.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: "center 15%" }}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-raised to-surface-card">
          <Swords className="h-10 w-10 text-brand/70" strokeWidth={1.5} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <p className="absolute inset-x-0 bottom-0 px-3 py-2 text-sm font-semibold text-ink-primary">
        {discipline.title}
      </p>
    </div>
  );
}