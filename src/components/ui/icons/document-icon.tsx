import type { IconProps } from "./types";

export function DocumentIcon({ width = 12, height = 16, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0002 16H0.000244141V3.05176e-05H7.05024L12.0002 5.00003V16ZM1.00024 15V1.00003H6.50024V5.50003H11.0002V15H1.00024ZM7.50024 1.91424L10.086 4.50003H7.50024V1.91424Z"
        fill="black"
      />
    </svg>
  );
}
