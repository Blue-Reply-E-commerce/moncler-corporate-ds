import type { IconProps } from "./types";

export function SpeechIcon({ width = 16, height = 14, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10V12L7.66667 10H15V1L1 1V10L5 10ZM0 11V0L16 0V11H8L4 14V11L0 11Z"
        fill={fill}
      />
    </svg>
  );
}
