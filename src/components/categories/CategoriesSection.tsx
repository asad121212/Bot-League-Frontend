import { useState } from "react";
import CategoryCard from "@/components/categories/CategoryCard";
import { categories } from "@/data/siteData";

export default function CategoriesSection() {
  const [selectedId, setSelectedId] = useState(
    categories.find((c) => c.featured)?.id ?? categories[0]?.id,
  );

  return (
    <section id="ranks" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <h2 className="mb-6 font-display text-2xl font-bold uppercase tracking-wide text-ink-primary">
        Categories
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedId === category.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </section>
  );
}
