import type React from "react";
import { cn } from "@/lib/utils";
import { Text } from "./text";

type TextSize = "xs" | "sm" | "base";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  size?: TextSize;
  showSeparator?: boolean;
  counter?: number;
}

const sizeClasses = {
  xs: "leading-[1.3]",
  sm: "leading-[1.2] tracking-normal",
  base: "leading-[1.26]",
};

function Label({
  icon,
  size = "sm",
  showSeparator = true,
  children,
  className,
  ...props
}: React.PropsWithChildren<LabelProps>) {
  return (
    <div className={cn("w-fit flex items-center gap-2", className)} {...props}>
      {icon}
      <Text as="span" size={size} weight="normal" color="secondary" className={sizeClasses[size]}>
        {children}
      </Text>
      {showSeparator && <span className="bg-primary-200 ml-3 h-[10px] w-[1px] align-middle" />}
    </div>
  );
}

function LabelWithCounter({
  size = "sm",
  className,
  counter,
  children,
  ...props
}: React.PropsWithChildren<LabelProps>) {
  return (
    <div className={cn("w-fit flex items-center gap-2", className)} {...props}>
      <Text as="span" size={size} weight="normal" color="default" className={sizeClasses[size]}>
        {children}
      </Text>
      {counter ? (
        <section className="w-[18px] h-[14px] px-1 py-0.5 rounded-[100px] bg-black text-center text-white text-[9px] font-semibold leading-[1.2] proportional-nums lining-nums">
          {counter}
        </section>
      ) : null}
    </div>
  );
}

export { Label, LabelWithCounter };
