import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import InfoCard from "@/components/molecules/InfoCard";

const features = [
  {
    title: "Atoms",
    description: "Small reusable pieces like buttons, inputs, and badges.",
    badge: "Smallest unit",
  },
  {
    title: "Molecules",
    description: "Simple combinations of atoms, such as a search bar or breadcrumb.",
    badge: "Composed",
  },
  {
    title: "Organisms",
    description: "Larger interface sections made from multiple molecules and atoms.",
    badge: "Section-level",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <Badge tone="success">Atomic Design</Badge>
          <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
            Build from simple pieces upward
          </h2>
        </div>
        <Button variant="secondary" type="button">
          Reuse Components
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <InfoCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            badge={feature.badge}
          />
        ))}
      </div>
    </section>
  );
}
