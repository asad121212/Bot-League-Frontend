interface EcosystemCardProps {
  title: string;
  buttonLabel: string;
}

export default function EcosystemCard({
  title,
  buttonLabel,
}: EcosystemCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-surface-border bg-[#111111] p-6">
      <h3 className="mb-6 text-center font-display text-xl font-bold uppercase tracking-wide text-ink-primary">
        {title}
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="h-12 w-full rounded-lg border border-surface-border bg-[#1A1A1A] px-4 text-sm text-ink-primary placeholder:text-ink-muted transition-colors focus:border-brand focus:outline-none"
        />

        <input
          type="text"
          placeholder="Location"
          className="h-12 w-full rounded-lg border border-surface-border bg-[#1A1A1A] px-4 text-sm text-ink-primary placeholder:text-ink-muted transition-colors focus:border-brand focus:outline-none"
        />

        <input
          type="text"
          placeholder="Enroll"
          className="h-12 w-full rounded-lg border border-surface-border bg-[#1A1A1A] px-4 text-sm text-ink-primary placeholder:text-ink-muted transition-colors focus:border-brand focus:outline-none"
        />
      </div>

      <button
        type="button"
        className="mt-6 h-12 rounded-lg bg-brand font-display text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
      >
        {buttonLabel}
      </button>
    </div>
  );
}