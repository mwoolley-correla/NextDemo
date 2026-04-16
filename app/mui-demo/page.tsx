import Breadcrumb from "@/components/molecules/Breadcrumb";
import MuiShowcase from "@/components/organisms/MuiShowcase";

export default function MuiDemoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "MUI & Useful Packages" }]} />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stage 11: MUI & Useful Packages
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        This stage introduces Material UI as an example of a mature component library. It sits alongside the custom components from Stage 8 rather than replacing them entirely.
      </p>

      <MuiShowcase />
    </div>
  );
}
