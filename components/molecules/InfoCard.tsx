import Badge from "@/components/atoms/Badge";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
};

export default function InfoCard({ title, description, badge, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {badge ? <Badge tone="info">{badge}</Badge> : null}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
