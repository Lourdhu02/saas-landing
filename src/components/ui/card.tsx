import { cn } from "@/lib/utils";

type Padding = "none" | "sm" | "md" | "lg";

const paddingMap: Record<Padding, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: Padding;
}

export function Card({ children, className, padding = "md" }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white/70 backdrop-blur-xl border border-surface-200/50 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-500/20 hover:-translate-y-0.5",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("px-6 pt-6", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 py-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("border-t border-surface-200/50 px-6 py-4", className)}>{children}</div>;
}
