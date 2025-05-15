import type { IconProps } from "./types";

export function ChevronLeftIcon({
  width = 7,
  height = 12,
  fill = "black", // Assuming stroke should use the fill color
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.84664 0.146484L-0.00854492 6.00164L5.89824 11.8552L6.60214 11.1449L1.40888 5.99844L6.55374 0.853593L5.84664 0.146484Z"
        fill={fill}
      />
    </svg>
  );
}
