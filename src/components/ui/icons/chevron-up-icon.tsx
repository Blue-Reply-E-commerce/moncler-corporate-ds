import type { IconProps } from "./types";
export function ChevronUpIcon({ width = 12, height = 7, fill = "black", className }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 7"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.146729 5.84643L6.00189 -0.00875854L11.8554 5.89803L11.1451 6.60193L5.99868 1.40866L0.853837 6.55353L0.146729 5.84643Z"
        fill="black"
      />
    </svg>
  );
}
