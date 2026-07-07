interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  eyebrowClassName?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  eyebrowClassName = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p
          className={`mb-1 text-xs font-semibold uppercase tracking-widest text-brand ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-display text-xl font-bold uppercase tracking-wide text-ink-primary ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}