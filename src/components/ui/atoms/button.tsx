import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center py-4 text-sm font-medium uppercase hover:cursor-pointer whitespace-nowrap disabled:pointer-events-none focus",
  {
    variants: {
      variant: {
        primary:
          "min-w-[21.25rem] h-12 bg-black text-white hover:bg-primary-100 disabled:bg-primary-200",
        secondary:
          "min-w-[21.25rem] h-12 bg-white text-black border border-black disabled:border-primary-200 disabled:text-primary-200",
        tertiary: "w-fit bg-transparent text-black disabled:text-primary-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    result?: string;
  };

function Button({
  className,
  variant,
  asChild = false,
  icon,
  iconPosition = "left",
  result,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        buttonVariants({ variant }),
        {
          "gap-3": icon !== undefined,
          "gap-1": result !== undefined,
        },
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
      {result && <span className="text-secondary-200">({result})</span>}
    </Comp>
  );
}

export { Button, buttonVariants };
