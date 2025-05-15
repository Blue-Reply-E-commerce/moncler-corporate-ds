import type { IconProps } from "./types";

export function DownloadIcon({ width = 16, height = 13, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50024 7.79292L11.1822 5.11094L11.8893 5.81805L8.00024 9.70714L4.11116 5.81805L4.81826 5.11094L7.50024 7.79292L7.50025 3.05176e-05H8.50025L8.50024 7.79292Z"
        fill={fill}
      />
      <path
        d="M1.00024 12V5.00003H0.000244141V13H16.0002V5.00003H15.0002V12H1.00024Z"
        fill={fill}
      />
    </svg>
  );
}
