"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-bold mb-2 text-(--primary-color)">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-lg bg-white/50 border-2 border-transparent focus:border-(--primary-color) focus:bg-white focus:outline-none transition-all duration-200 text-(--primary-color) placeholder:text-(--primary-color)/50 ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500 font-bold">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
