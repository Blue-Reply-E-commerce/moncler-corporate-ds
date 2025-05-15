import type { IconProps } from "./types";

export function ChevronRightIcon({ width = 7, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.10389 0.146515L6.95907 6.00167L1.05229 11.8552L0.348389 11.1449L5.54165 5.99847L0.396785 0.853623L1.10389 0.146515Z"
        fill={fill}
      />
    </svg>
  );
}
