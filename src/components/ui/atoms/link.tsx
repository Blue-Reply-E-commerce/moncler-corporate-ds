import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type LinkProps = React.ComponentProps<"a"> & {
  asChild?: boolean;
  icon?: React.ReactNode;
  variant?: "jump" | "footer" | "menu";
  priority?: "high" | "low";
  size?: "sm" | "base";
  iconPosition?: "left" | "right";
};

function Link({
  className,
  asChild = false,
  icon,
  iconPosition = "left",
  variant = "jump",
  priority,
  size = "sm",
  children,
  ...props
}: LinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="link"
      className={cn(
        "w-fit inline-flex items-center gap-1 focus tracking-normal font-normal",
        {
          "text-black": variant === "jump" && priority === "high",
          "text-primary-200": variant === "jump" && priority === "low",
          "hover:text-primary-100": variant === "menu" || variant === "footer",
          "text-sm leading-[1.4] ": size === "sm",
          "text-base leading-[1.26]": size === "base",
        },
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Comp>
  );
}

export { Link };
