import { type IconProps } from "./types";

export function DrawerIcon({ width = 16, height = 13, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 13"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000244141 12.0034H16.0002V12.9963H0.000244141V12.0034Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000244141 6.50335H16.0002V7.49628H0.000244141V6.50335Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000244141 0.903351H16.0002V1.89628H0.000244141V0.903351Z"
        fill={fill}
      />
    </svg>
  );
}
