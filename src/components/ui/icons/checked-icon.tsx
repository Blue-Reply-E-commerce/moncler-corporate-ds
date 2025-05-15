import type { IconProps } from "./types";

export function CheckedIcon({ width = 16, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3545 1.55301L5.51826 11.4252L0.646729 6.55366L1.35384 5.84655L5.51697 10.0097L14.6461 0.847198L15.3545 1.55301Z"
        fill={fill}
      />
    </svg>
  );
}
