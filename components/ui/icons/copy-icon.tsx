import type { IconProps } from "./types";

export function CopyIcon({ width = 13, height = 16, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 1.5V0H0V11.5H2.5V14H13V4H10.5V1.5H8.5ZM1 10.5V1H7.5V4H10.5V5H12V13H3.5V10.5H1Z"
        fill={fill}
      />
    </svg>
  );
}
