import type { FeatureHighlight } from "@/types";

interface FeatureItemProps {
  feature: FeatureHighlight;
}

export default function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div>
      <p className="font-display text-lg font-bold text-brand">{feature.number}</p>
      <h3 className="text-base font-bold uppercase tracking-wide text-ink-primary">
        {feature.title}
      </h3>
      <p className="mt-1 max-w-xs text-sm text-ink-muted">&ldquo;{feature.description}&rdquo;</p>
    </div>
  );
}
