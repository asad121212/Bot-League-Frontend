import { Landmark, Lightbulb, Bot, BrainCircuit, ArrowRight, type LucideIcon } from "lucide-react";
import type { Category, CategoryIcon } from "@/types";

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const iconMap: Record<CategoryIcon, LucideIcon> = {
  landmark: Landmark,
  lightbulb: Lightbulb,
  engineer: Bot,
  brain: BrainCircuit,
};

export default function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={isSelected}
      className={`flex h-full flex-col rounded-card border p-5 text-left transition-colors ${
        isSelected
          ? "border-gold bg-gradient-to-b from-gold-muted to-surface-card"
          : "border-surface-border bg-surface-card hover:border-ink-secondary/40"
      }`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/60 text-gold">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3 className="font-display text-lg font-bold uppercase leading-tight text-ink-primary">
        {category.title}
      </h3>
      <p className="mt-2 flex-1 text-xs text-ink-muted">{category.description}</p>

      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    </button>
  );
}
