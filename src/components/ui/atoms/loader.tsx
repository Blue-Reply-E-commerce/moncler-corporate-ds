import React from "react";

interface LoaderProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  trackColor?: string;
  indicatorColor?: string;
  showLabel?: boolean;
}

export default function Loader({
  width = 18,
  height = 18,
  strokeWidth = 1,
  trackColor = "#B2B2B2",
  indicatorColor = "#000000",
  showLabel = false,
}: LoaderProps) {
  const radius = (Math.min(width, height) - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const quarterCirc = circumference / 4;

  return (
    <section className="flex flex-col gap-4 items-center w-fit">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="animate-spin"
      >
        <circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke={indicatorColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${quarterCirc} ${circumference}`}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showLabel ? (
        <span className={`text-sm leading-[1.2] text-${indicatorColor}`}>Just a few moments</span>
      ) : null}
    </section>
  );
}
