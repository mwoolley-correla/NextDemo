import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
