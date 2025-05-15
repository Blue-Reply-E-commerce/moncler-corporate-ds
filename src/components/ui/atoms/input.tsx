;

import type React from "react";

import { cn } from "@/lib/utils";
import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";
import { CheckedIcon, TooltipIcon } from "../icons";

export type InputType = "text" | "password" | "email" | "number" | "tel";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  type?: InputType;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      type = "text",
      className,
      containerClassName,
      labelClassName,
      helperClassName,
      disabled,
      error,
      success,
      defaultValue,
      value,
      showPasswordToggle = type === "password",
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value || defaultValue || "");
    const [showPassword, setShowPassword] = useState(false);
    const inputId = useId()

    // Check if the input has a value or is focused
    const isActive = inputValue.toString().length > 0;

    // Determine current input type
    const currentType = type === "password" && showPassword ? "text" : type;

    // Determine styles based on variant
    const containerStyles = cn("relative w-full bg-transparent", containerClassName);

    const inputStyles = cn(
      "w-full min-w-[343px] min-h-[60px] pt-8 text-base leading-[1.26] focus border-b border-primary-200",
      {
        "border-b border-secondary-300 cursor-not-allowed": disabled,
        "border-b border-error": error,
        "pr-10": showPasswordToggle,
        "hover:bg-surface-secondary": !disabled && !error && !inputValue,
      },
      className,
    );

    const labelStyles = cn(
      "absolute left-0 transition-all duration-200 pointer-events-none text-base leading-[1.26] text-primary-200",
      {
        "text-sm leading-[1.4] top-0 translate-y-[6px]": isActive,
        "text-base leading-[1.26] top-1/2": !isActive,
        "text-black": success,
        "text-error": error,
      },
      labelClassName,
    );

    const helperStyles = cn(
      "flex items-center text-xs mt-2 gap-1 text-primary-200",
      {
        "text-black": success,
        "text-error": error,
      },
      helperClassName,
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <div className={containerStyles}>
        <div className="relative">
          <label className={labelStyles} htmlFor={inputId}>{label}</label>
          <input
            id={inputId}
            ref={ref}
            className={inputStyles}
            disabled={disabled}
            onChange={handleInputChange}
            value={value}
            defaultValue={defaultValue}
            type={currentType}
            {...props}
          />
          {showPasswordToggle && inputValue.toString().length > 0 && (
            <button
              type="button"
              className="absolute right-0 top-1/2 flex items-center gap-2 p-1 text-black text-base leading-[1.26] focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"} <CheckedIcon width={14.71} height={10.58} />
            </button>
          )}
        </div>
        {helperText && (
          <div className={helperStyles}>
            <TooltipIcon width={15} height={15} />
            <span>{helperText}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };

