import type { IconProps } from "./types";

export function LocationIcon({ width = 12, height = 16, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16S12 10 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 10 6 16 6 16ZM6 8.5C7.38071 8.5 8.5 7.38071 8.5 6C8.5 4.61929 7.38071 3.5 6 3.5C4.61929 3.5 3.5 4.61929 3.5 6C3.5 7.38071 4.61929 8.5 6 8.5Z"
        fill={fill}
      />
    </svg>
  );
}
