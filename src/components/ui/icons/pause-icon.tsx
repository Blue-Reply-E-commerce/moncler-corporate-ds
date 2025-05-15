import { IconProps } from "./types";

export function PauseIcon({ width = 12, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 12V0H11.5V12H8ZM0.5 12V0H4V12H0.5Z" fill={fill} />
    </svg>
  );
}
