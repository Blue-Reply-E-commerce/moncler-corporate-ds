import { IconProps } from "./types";

export function PlayIcon({ width = 9, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 11.1922V0.807747L8.15375 6L0 11.1922Z" fill={fill} />
    </svg>
  );
}
