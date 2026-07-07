import type { PastResult } from "@/types";

interface PastResultItemProps {
  result: PastResult;
  className?: string;
}

export default function PastResultItem({ result, className = "" }: PastResultItemProps) {
  return (
    <div
      className={`flex h-full flex-col justify-center rounded-card border border-surface-border bg-surface-card px-4 py-3 ${className}`}
    >
      <p className="text-sm font-semibold text-ink-primary">{result.name}</p>
      <p className="text-xs text-ink-muted">{result.summary}</p>
    </div>
  );
}
