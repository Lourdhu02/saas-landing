import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-500/20",
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

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("px-6 py-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={cn("border-t border-surface-700/50 px-6 py-4", className)}>{children}</div>;
}
