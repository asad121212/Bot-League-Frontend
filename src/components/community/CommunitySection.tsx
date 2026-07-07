import EcosystemGrid from "./ecosystem/EcosystemGrid";
import Sponsors from "./sponsors/Sponsors";
import Footer from "./footer/Footer";

export default function CommunitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-card border border-surface-border bg-black">
        <EcosystemGrid />

        <Sponsors />

        <Footer />
      </div>
    </section>
  );
}