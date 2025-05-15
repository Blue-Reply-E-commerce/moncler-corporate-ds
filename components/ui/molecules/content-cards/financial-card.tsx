"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const financialCardVariants = cva("", {
  variants: {
    variant: {
      positive: "text-success",
      negative: "text-error",
      draw: "text-primary-200",
    },
  },
  defaultVariants: {
    variant: "positive",
  },
});

export interface FinancialCardProps extends VariantProps<typeof financialCardVariants> {
  title: string;
  price: number;
  change: number;
  className?: string;
}

export function FinancialCard({ title, price, change, variant, className }: FinancialCardProps) {
  const formattedPrice = `€${price.toFixed(2)}`;
  const formattedChange = Math.abs(change).toFixed(2);
  const isPositive = change > 0;
  const isNegative = change < 0;

  // Determine which variant to use if not explicitly provided
  const effectiveVariant = variant || (isPositive ? "positive" : isNegative ? "negative" : "draw");

  return (
    <div className={cn("w-full max-w-[120px] lg:max-w-[282px] min-h-[200px]", className)}>
      <div className="border-t border-secondary-200 pt-4">
        <div className="text-primary-200 text-xl leading-[1.2] mb-6">{title}</div>
        <div className="flex flex-col gap-y-1">
          <div className="text-[40px] leading-[1.2] font-normal tracking-tighter">
            {formattedPrice}
          </div>
          <div
            className={cn(
              "flex items-center",
              financialCardVariants({ variant: effectiveVariant }),
            )}
          >
            <span className="text-base leading-[1.26] tracking-normal">
              {formattedChange}
              {isPositive || (variant === "positive" && !isNegative) ? "▲" : "▼"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
