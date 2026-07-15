import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "outline";
  dot?: boolean;
  className?: string;
}

const variantStyles = {
  default: "bg-brand-100 text-brand-700",
  accent: "bg-accent-100 text-accent-700",
  success: "bg-emerald-100 text-emerald-700",
  outline: "border border-surface-300 text-surface-600",
};

export function Badge({ children, variant = "default", dot, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "default" && "bg-brand-500",
            variant === "accent" && "bg-accent-500",
            variant === "success" && "bg-emerald-500",
            variant === "outline" && "bg-surface-400"
          )}
        />
      )}
      {children}
    </span>
  );
}
