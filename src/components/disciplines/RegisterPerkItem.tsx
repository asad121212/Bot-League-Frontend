import {
  Award,
  Gavel,
  Briefcase,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { RegisterPerk, RegisterPerkIcon } from "@/types";

interface RegisterPerkItemProps {
  perk: RegisterPerk;
}

const iconMap: Record<RegisterPerkIcon, LucideIcon> = {
  recognition: Award,
  judging: Gavel,
  career: Briefcase,
  energy: Zap,
};

export default function RegisterPerkItem({
  perk,
}: RegisterPerkItemProps) {
  const Icon = iconMap[perk.icon];

  return (
    <div className="flex items-start gap-5">
      <Icon
        className="mt-1 h-9 w-9 shrink-0 text-brand"
        strokeWidth={1.75}
      />

      <div>
        <h3 className="text-xl font-bold uppercase tracking-wide text-ink-primary">
          {perk.title}
        </h3>

        <p className="mt-1 max-w-sm text-base text-ink-muted">
          &ldquo;{perk.description}&rdquo;
        </p>
      </div>
    </div>
  );
}