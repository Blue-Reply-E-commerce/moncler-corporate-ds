import type { IconProps } from "./types";

export function ChevronDownIcon({
  width = 12,
  height = 7,
  fill = "black", // Assuming stroke should use the fill color
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 7"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.146729 1.10368L6.00189 6.95886L11.8554 1.05207L11.1451 0.348175L5.99868 5.54144L0.853837 0.396571L0.146729 1.10368Z"
        fill={fill}
      />
    </svg>
  );
}
