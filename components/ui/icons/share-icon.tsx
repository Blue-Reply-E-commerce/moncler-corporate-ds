import { IconProps } from "./types";

export function ShareIcon({ width = 16, height = 14, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8893 4.18209L8.00024 0.292999L4.11116 4.18209L4.81826 4.88919L7.50024 2.20721L7.50025 10.0001H8.50025L8.50024 2.20721L11.1822 4.88919L11.8893 4.18209Z"
        fill={fill}
      />
      <path
        d="M1.00024 13.0001V6.00013H0.000244141V14.0001H16.0002V6.00013H15.0002V13.0001H1.00024Z"
        fill={fill}
      />
    </svg>
  );
}
