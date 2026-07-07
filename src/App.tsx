import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import CompetitionsSection from "@/components/competitions/CompetitionsSection";
import JourneySection from "@/components/journey/JourneySection";
import WhatIsSection from "@/components/about/WhatIsSection";
import CategoriesSection from "@/components/categories/CategoriesSection";
import DisciplinesSection from "@/components/disciplines/DisciplinesSection";
import CommunitySection from "./components/community/CommunitySection";
export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <CompetitionsSection />
        <JourneySection />
        <WhatIsSection />
        <CategoriesSection />
        <DisciplinesSection />
        <CommunitySection />
      </main>
    </div>
  );
}
