import type { IconProps } from "./types";

export function MinusIcon({ width = 12, height = 2, fill = "black", className }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.5H12V1.5H0V0.5Z" fill={fill} />
    </svg>
  );
}
