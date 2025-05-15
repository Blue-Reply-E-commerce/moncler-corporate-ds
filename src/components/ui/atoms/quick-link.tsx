import { cn } from "@/lib/utils";
import React from "react";

export interface QuickLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const QuickLink = React.forwardRef<HTMLButtonElement, QuickLinkProps>(
  ({ className, icon, iconPosition = "left", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-fit min-w-[95px] h-[35px] py-2 px-3 cursor-pointer inline-flex items-center justify-center text-sm font-normal leading-[1.4] bg-surface-secondary border border-transparent hover:bg-white/60 hover:border-secondary-300 transition-colors disabled:opacity-50 disabled:pointer-events-none focus",
          className,
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="mr-3.5">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-3.5">{icon}</span>}
      </button>
    );
  },
);

QuickLink.displayName = "QuickLink";

export { QuickLink };
