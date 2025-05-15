import type { IconProps } from "./types";

export function FilterIcon({ width = 16, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H16V2H0V1Z" fill={fill} />
      <path d="M2 6H14V7H2V6Z" fill={fill} />
      <path d="M5 11H11V12H5V11Z" fill={fill} />
    </svg>
  );
}
