import { sponsors } from "@/data/siteData";
import SponsorLogo from "./SponsorLogo";

export default function Sponsors() {
  return (
    <div className="px-8 pt-20 pb-14 lg:px-12">
      <h2 className="mb-10 font-display text-3xl font-bold uppercase tracking-wide text-ink-primary">
        Sponsors
      </h2>

      <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3">
        {sponsors.map((sponsor) => (
          <SponsorLogo
            key={sponsor.id}
            sponsor={sponsor}
          />
        ))}
      </div>
    </div>
  );
}