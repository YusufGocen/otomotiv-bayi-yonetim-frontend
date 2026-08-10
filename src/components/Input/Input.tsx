import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftIcon,
      rightIcon,
      error,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <label className="mb-2 block text-sm font-semibold text-text">
          {label}
        </label>

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            {...props}
            className={`w-full rounded-xl border border-border py-3 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
              leftIcon ? "pl-12" : "pl-4"
            } ${rightIcon ? "pr-12" : "pr-4"} ${className ?? ""}`}
          />

          {rightIcon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2">
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <p className="mt-2 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;