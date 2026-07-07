import { Wrench, Landmark, Trophy, Users, type LucideIcon } from "lucide-react";
import type { JourneyIcon, JourneyStepData } from "@/types";

interface JourneyStepProps {
  step: JourneyStepData;
  isLast: boolean;
}

const iconMap: Record<JourneyIcon, LucideIcon> = {
  build: Wrench,
  compete: Landmark,
  rank: Trophy,
  join: Users,
};

export default function JourneyStep({ step, isLast }: JourneyStepProps) {
  const Icon = iconMap[step.icon];

  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      {!isLast && (
        <div
          className="absolute left-1/2 top-8 h-px w-full bg-brand/60"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-surface-border bg-surface">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand/70">
          <Icon className="h-5 w-5 text-ink-primary" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-4 h-6 w-px bg-surface-border" aria-hidden="true" />

      <p className="text-xs font-bold uppercase tracking-widest text-brand">
        Step {step.step}
      </p>
      <p className="mt-1 max-w-[9rem] text-sm font-semibold uppercase leading-snug text-ink-primary">
        {step.title}
      </p>
    </div>
  );
}
