import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import InfoCard from "@/components/molecules/InfoCard";
import SearchBar from "@/components/molecules/SearchBar";
import FeatureShowcase from "@/components/organisms/FeatureShowcase";

export default function ComponentsDemoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "Components & Atomic Design" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 6: Components & Atomic Design
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Atomic design helps you scale a UI by building from the smallest reusable pieces upward: atoms, molecules, and organisms.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <InfoCard
          title="Atoms"
          description="Buttons, inputs, and badges are tiny pieces with one clear job."
          badge="Foundation"
        >
          <div className="flex flex-wrap gap-2">
            <Button type="button">Primary</Button>
            <Button type="button" variant="secondary">
              Secondary
            </Button>
            <Badge tone="success">Ready</Badge>
          </div>
        </InfoCard>
        <InfoCard
          title="Molecules"
          description="Breadcrumbs and search bars combine atoms into a slightly more useful unit."
          badge="Grouped"
        >
          <SearchBar />
        </InfoCard>
        <InfoCard
          title="Organisms"
          description="Larger sections combine multiple molecules and atoms into a meaningful block of UI."
          badge="Section"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The full feature block below is an organism.
          </p>
        </InfoCard>
      </div>

      <FeatureShowcase />

      <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
        <h2 className="mb-3 text-xl font-semibold text-amber-950 dark:text-amber-50">
          Why this matters
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">
          When components have a clear level of responsibility, the app becomes easier to test, document, and reuse. The exact labels are less important than the discipline of composition.
        </p>
      </section>
    </div>
  );
}
