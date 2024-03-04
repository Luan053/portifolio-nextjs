import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";
import { TbBrandNextjs } from "react-icons/tb";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-8">
        {Array.from({ length: 20 }).map((_, index) => (
          <KnowTech
            tech={{
              name: "Next.js",
              icon: <TbBrandNextjs />,
              startDate: "2023-01-01",
            }}
            key={`know-tech-${index}`}
          />
        ))}
      </div>
    </section>
  );
};
