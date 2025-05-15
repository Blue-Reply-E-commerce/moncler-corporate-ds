import type { IconProps } from "./types";

export function MailIcon({ width = 16, height = 12, fill = "black" }: IconProps) {
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
        d="M0.000244141 12V3.05176e-05H16.0002V12H0.000244141ZM13.9729 1.00003H2.0276L8.00025 5.37997L13.9729 1.00003ZM1.00024 1.48671V11H15.0002V1.48672L8.00025 6.62005L1.00024 1.48671Z"
        fill={fill}
      />
    </svg>
  );
}
