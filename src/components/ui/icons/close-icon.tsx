import type { IconProps } from "./types";
export function CloseIcon({ width = 14, height = 14, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0002 6.29788L1.35129 0.648956L0.649177 1.35107L6.29809 6.99999L0.64917 12.6489L1.35128 13.351L7.0002 7.7021L12.6491 13.351L13.3512 12.6489L7.70231 6.99999L13.3512 1.35107L12.6491 0.648957L7.0002 6.29788Z"
        fill="black"
      />
    </svg>
  );
}
