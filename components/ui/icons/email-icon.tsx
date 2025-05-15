import type { IconProps } from "./types";

export function EmailIcon({ width = 16, height = 12, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V12H16V0H0ZM1.50574 1.01149L8 6.11494L14.4943 1.01149H1.50574ZM1 10.9885V2.09195L7.64368 7.25287H8.35632L15 2.09195V10.9885H1Z"
        fill={fill}
      />
    </svg>
  );
}
