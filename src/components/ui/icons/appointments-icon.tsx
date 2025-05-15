import { IconProps } from "./types";

export function AppointmentsIcon({ width = 16, height = 15, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.14668 9.73558L5.85379 9.02847L7.268 10.4427L10.0964 7.61426L10.8035 8.32136L7.268 11.8569L5.14668 9.73558Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.50024 3.05176e-05V1.50003H11.5002V3.05176e-05H12.5002V1.50003H16.0002V15H0.000244141V1.50003H3.50024V3.05176e-05H4.50024ZM15.0002 2.50003H1.00024V4.50003H15.0002V2.50003ZM1.00024 5.50003V14H15.0002V5.50003H1.00024Z"
        fill={fill}
      />
    </svg>
  );
}
