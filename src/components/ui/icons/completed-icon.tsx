import type { IconProps } from "./types";

export function CompletedIcon({ width = 18, height = 18, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5002 12.707L13.8537 6.35349L13.1466 5.64638L7.5002 11.2928L4.85375 8.64638L4.14664 9.35349L7.5002 12.707Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0002 9.00003C18.0002 14.2 14.2002 18 9.00024 18C3.80024 18 0.000244141 14.2 0.000244141 9.00003C0.000244141 3.80003 3.80024 3.05176e-05 9.00024 3.05176e-05C14.2002 3.05176e-05 18.0002 3.80003 18.0002 9.00003ZM17.0002 9.00003C17.0002 13.6477 13.648 17 9.00024 17C4.35253 17 1.00024 13.6477 1.00024 9.00003C1.00024 4.35232 4.35253 1.00003 9.00024 1.00003C13.648 1.00003 17.0002 4.35232 17.0002 9.00003Z"
        fill="black"
      />
    </svg>
  );
}
