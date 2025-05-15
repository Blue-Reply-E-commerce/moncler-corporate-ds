import type { IconProps } from "./types";

export function EditIcon({ width = 16, height = 16, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0002 0.292999L3.00024 9.293V12.0001H5.70735L14.7074 3.00011L12.0002 0.292999ZM4.00024 11.0001V9.70721L12.0002 1.70721L13.2931 3.00011L5.29314 11.0001H4.00024Z"
        fill={fill}
      />
      <path
        d="M0.000244141 1.00011V15.0001H14.0002V8.00011H13.0002V14.0001H1.00024V2.00011H7.00024V1.00011H0.000244141Z"
        fill={fill}
      />
    </svg>
  );
}
