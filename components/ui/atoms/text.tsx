// TO BE REDEFINED

import React from "react";
import { cn } from "@/lib/utils";

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "legend";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

type TextWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

type TextAlign = "left" | "center" | "right" | "justify";

type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";

type TextColor = "default" | "primary" | "secondary" | "muted" | "success" | "error";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  transform?: TextTransform;
  color?: TextColor;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Text({
  as: Component = "p",
  size = "base",
  weight = "normal",
  align = "left",
  transform = "normal-case",
  color = "default",
  truncate = false,
  className,
  children,
  ...props
}: TextProps) {
  // Size classes
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  // Weight classes
  const weightClasses = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Align classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Transform classes
  const transformClasses = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
  };

  // Color classes
  const colorClasses = {
    default: "text-black",
    primary: "text-primary-100",
    secondary: "text-primary-200",
    muted: "text-muted-foreground", //TO BE CONFIRMED
    success: "text-success",
    error: "text-error",
  };

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        transformClasses[transform],
        colorClasses[color],
        truncate && "truncate",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
