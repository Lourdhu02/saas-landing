import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-surface-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-surface-900 placeholder-surface-400 transition-colors duration-200 focus:outline-none focus:ring-2",
            error
              ? "border-error focus:border-error focus:ring-error/20"
              : "border-surface-300 hover:border-surface-400 focus:border-brand-400 focus:ring-brand-400/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-error">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-surface-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
