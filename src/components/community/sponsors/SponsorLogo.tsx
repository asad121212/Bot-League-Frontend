import type { Sponsor } from "@/types";

interface SponsorLogoProps {
  sponsor: Sponsor;
}

export default function SponsorLogo({
  sponsor,
}: SponsorLogoProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-28 w-36 items-center justify-center">
  <img
    src={sponsor.logo}
    alt={sponsor.name}
    className="max-h-full max-w-full object-contain"
  />
</div>

      <span className="font-display text-base font-semibold uppercase tracking-wide text-white">
        {sponsor.name}
      </span>
    </div>
  );
}