"use client";

import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { CheckedIcon, ChevronDownIcon, ChevronUpIcon, TooltipIcon } from "../icons";

const selectTriggerVariants = cva(
  "w-full min-h-[60px] pt-8 flex justify-between items-center text-base leading-[1.26] focus transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-b border-b-primary-200 hover:bg-surface-secondary data-[disabled]:hover:bg-transparent",
        error: "border-b border-b-error",
      },
      disabled: {
        true: "text-primary-200 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  },
);

type SelectComponentProps = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  "onValueChange"
> & {
  label: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  showValue?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
};

const SelectComponent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectComponentProps
>(
  (
    {
      label,
      placeholder,
      helperText,
      error,
      showValue,
      value,
      onChange,
      options,
      className,
      disabled = false,
      required = false,
      name,
      id,
      ...props
    },
    ref,
  ) => {
    const hasValue = !!value;
    const uniqueId = React.useId();
    const selectId = id || `select-${uniqueId}`;
    const helperId = `helper-${uniqueId}`;

    // Handle value change
    const handleValueChange = (newValue: string) => {
      onChange?.(newValue);
    };

    return (
      <div className={cn("relative space-y-1.5 min-w-[343px]", className)}>
        <label
          id={selectId}
          className={cn(
            "absolute top-2 left-0 text-sm font-medium transition-colors",
            error ? "text-error" : "text-primary-200",
          )}
        >
          {label}
        </label>

        <Select
          value={value}
          onValueChange={handleValueChange}
          name={name}
          disabled={disabled}
          {...props}
        >
          <SelectTrigger
            ref={ref}
            variant={error ? "error" : "default"}
            disabled={disabled}
            aria-describedby={helperText ? helperId : undefined}
            aria-invalid={error ? "true" : "false"}
            aria-required={required ? "true" : "false"}
            aria-labelledby={selectId}
            className="group"
            data-testid={`select-${name || label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex items-center justify-between w-full gap-2">
              <SelectPrimitive.Value
                placeholder={placeholder || "Select option"}
                className={cn(
                  "flex-1 text-left transition-colors",
                  "data-[placeholder]:text-primary-200",
                  "group-data-[state=open]:data-[placeholder]:text-black",
                )}
              />
              {showValue && hasValue && (
                <span className="mr-2 text-black font-normal text-base leading-[1.2]">{value}</span>
              )}
            </div>
            <span className="relative w-[11.71px] h-[6.61px]" aria-hidden="true">
              <ChevronDownIcon className="absolute inset-0 opacity-100 group-data-[state=open]:opacity-0 transition-opacity" />
              <ChevronUpIcon className="absolute inset-0 opacity-0 group-data-[state=open]:opacity-100 transition-opacity" />
            </span>
          </SelectTrigger>

          <SelectContent position="popper" sideOffset={4}>
            {options.length > 0 ? (
              options.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))
            ) : (
              <div className="py-2 px-2 text-sm text-primary-200 text-center">
                No options available
              </div>
            )}
          </SelectContent>
        </Select>

        {helperText && (
          <div
            id={helperId}
            className={cn(
              "flex items-center gap-1 text-xs mt-1",
              error ? "text-error" : "text-primary-200",
            )}
          >
            <TooltipIcon width={15} height={15} aria-hidden="true" />
            <span>{helperText}</span>
          </div>
        )}
      </div>
    );
  },
);
SelectComponent.displayName = "SelectComponent";

// Composable Select Parts
const Select = (props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root {...props} />;
};

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants>
>(({ className, variant, disabled, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, disabled }), className)}
    disabled={disabled}
    {...props}
  />
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[var(--radix-select-trigger-width)] overflow-hidden border border-secondary-300 bg-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        position === "popper" && "translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton
        className="flex items-center justify-center h-6 bg-white cursor-default"
        aria-label="Scroll up"
      >
        <ChevronUpIcon width={11.71} height={6.61} aria-hidden="true" />
      </SelectPrimitive.ScrollUpButton>

      <SelectPrimitive.Viewport className="w-full">{children}</SelectPrimitive.Viewport>

      <SelectPrimitive.ScrollDownButton
        className="flex items-center justify-center h-6 bg-white cursor-default"
        aria-label="Scroll down"
      >
        <ChevronDownIcon width={11.71} height={6.61} aria-hidden="true" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center py-2 pl-8 pr-2 text-sm outline-none focus:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-surface-secondary data-[highlighted]:text-black",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <CheckedIcon width={16} height={16} />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectComponent, SelectContent, SelectItem, SelectTrigger };

