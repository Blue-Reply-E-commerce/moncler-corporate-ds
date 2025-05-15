import type { IconProps } from "./types";

export function CalendarIcon({
  width = 16,
  height = 15,
  fill = "black", // Nota: qui uso 'fill' per lo stroke per coerenza, ma puoi cambiarlo se necessario
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.14668 9.73555L5.85379 9.02844L7.268 10.4427L10.0964 7.61423L10.8035 8.32133L7.268 11.8569L5.14668 9.73555Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.50024 0V1.5H11.5002V0H12.5002V1.5H16.0002V15H0.000244141V1.5H3.50024V0H4.50024ZM15.0002 2.5H1.00024V4.5H15.0002V2.5ZM1.00024 5.5V14H15.0002V5.5H1.00024Z"
        fill={fill}
      />
    </svg>
  );
}
