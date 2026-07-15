"use client";

import { type ElementRef, forwardRef, type ReactNode } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-lg shadow-brand-500/25",
  secondary:
    "bg-surface-100 text-surface-900 hover:bg-surface-200 border border-surface-200",
  outline:
    "border-2 border-brand-500 text-brand-600 hover:bg-brand-50",
  ghost:
    "text-surface-700 hover:bg-surface-100",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
} as const;

interface ButtonBaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
  href?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {loading ? <Loader2 size={16} className="animate-spin" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
