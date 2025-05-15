"use client";

import { Button } from "@/components/ui/atoms/button";
import { cn } from "@/lib/utils";
import { formatEventDate } from "@/utils/miscellanea";
import { cva, type VariantProps } from "class-variance-authority";
import { CalendarIcon } from "../../icons";

const calendarCardVariants = cva("bg-surface-secondary p-4", {
  variants: {
    variant: {
      vertical: "flex flex-col space-y-4 max-w-[224px]",
      horizontal: "flex flex-col md:space-x-6 max-w-[285px]",
    },
  },
  defaultVariants: {
    variant: "vertical",
  },
});

export interface CalendarCardProps extends VariantProps<typeof calendarCardVariants> {
  date: Date;
  title: string;
  role: "group" | "listitem";
  className?: string;
}

export function CalendarCard({ date, title, role, variant, className }: CalendarCardProps) {
  const handleAddToCalendar = () => { };

  const { month, year, day, fullDate } = formatEventDate(date, "en");

  return (
    <div
      className={cn(calendarCardVariants({ variant, className }))}
      role={role}
      aria-roledescription="slide"
      aria-label={`Event on ${fullDate}: ${title}`}
    >
      <div className={cn("space-y-1", variant === "horizontal" && "md:min-w-[120px]")}>
        <div className="text-black font-normal leading-[1.26] tracking-normal">
          {month} {year}
        </div>
        <div className="text-6xl font-normal leading-[1.1] tracking-tighter">{day}</div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="text-primary-200 text-sm leading-[1.2]">{title}</div>

        <Button
          variant="tertiary"
          className="flex items-center gap-3"
          onClick={handleAddToCalendar}
        >
          <CalendarIcon width={24} height={24} />
          <span>ADD TO CALENDAR</span>
        </Button>
      </div>
    </div>
  );
}
