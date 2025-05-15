import { IconProps } from "./types";

export function PlusIcon({ width = 12, height = 12, fill = "black", className }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.49671 5.50356L6.49671 3.05176e-05H5.50378L5.50378 5.50356H0.000244141V6.4965H5.50378V12H6.49671L6.49671 6.4965H12.0002V5.50356H6.49671Z"
        fill={fill}
      />
    </svg>
  );
}
