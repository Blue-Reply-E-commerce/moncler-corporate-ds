import { IconProps } from "./types";

export function ExpandIcon({ width = 14, height = 14, fill = "black" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000244141 3.05176e-05H5.50024V1.00003H1.70752L5.85406 5.14656L5.14695 5.85367L1.00024 1.70696V5.50003H0.000244141V3.05176e-05ZM13.0005 12.293L8.85398 8.14649L8.14688 8.8536L12.2934 13.0001H8.50047V14.0001H14.0005V8.50008H13.0005V12.293Z"
        fill={fill}
      />
    </svg>
  );
}
