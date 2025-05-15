import type React from "react";
import { cn } from "@/lib/utils";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cn("flex flex-col", className)} {...props}>
      {children}
    </main>
  );
}
