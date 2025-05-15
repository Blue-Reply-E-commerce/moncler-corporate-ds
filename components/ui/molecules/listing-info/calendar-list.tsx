"use client";

import { Link } from "@/components/ui/atoms/link";
import { ChevronRightIcon } from "@/components/ui/icons";
import { CalendarCard } from "@/components/ui/molecules/content-cards/calendar-card";
import { useViewport } from "@/providers/ViewportProvider";
import { DeviceType } from "@/providers/ViewportProvider/types";
import { useState } from "react";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import { Slider } from "../../atoms/slider";
import { Text } from "../../atoms/text";

export interface Event {
  date: Date;
  title: string;
}

interface FinancialCalendarProps {
  title?: string;
  events: Event[];
  footnote?: string;
  viewAllLink?: string;
  ariaLabel?: string;
}

export function FinancialCalendar({
  title = "Financial Calendar",
  events,
  footnote,
  viewAllLink = "/financial-calendar",
  ariaLabel = "Financial calendar events",
}: FinancialCalendarProps) {
  const { device } = useViewport();
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginationInfo = `Showing event ${currentIndex + 1} of ${events.length}`;

  console.log(device, ">> device");

  return (
    <div aria-labelledby="calendar-heading" className="w-full mx-auto lg:max-w-[920px] relative">
      {/* Live region for screen reader announcements */}
      <div id="calendar-live-region" className="sr-only" aria-live="polite" />
      <div id="calendar-pagination-status" className="sr-only" aria-live="polite">
        {paginationInfo}
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 id="calendar-heading" className="text-2xl font-normal leading-[1.2] tracking-normal">
          {title}
        </h2>
        <Link
          href={viewAllLink}
          size="sm"
          className="font-medium leading-4 -tracking-tight gap-[13.35px]"
          aria-label={`View all ${title} events`}
        >
          VIEW ALL
          <ChevronRightIcon width={6.61} height={11.71} aria-hidden="true" />
        </Link>
      </div>

      {device !== DeviceType.DESKTOP || events.length > 4 ? (
        <div
          className="relative"
          role="region"
          aria-label={ariaLabel}
          aria-roledescription="carousel"
        >
          <Slider
            id="calendar-slider"
            aria-label={ariaLabel}
            aria-live="polite"
          >
            {events.map((event, index) => (
              <CalendarCard
                key={index}
                title={event.title}
                date={event.date}
                role="listitem"
                variant="horizontal"
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4" role="list" aria-label={ariaLabel}>
          {events.map((event, index) => (
            <CalendarCard
              key={index}
              title={event.title}
              date={event.date}
              role="listitem"
              variant="vertical"
            />
          ))}
        </div>
      )}

      {footnote && (
        <div className="mt-6">
          <Text
            color="secondary"
            size="xs"
            align="center"
            id="calendar-footnote"
            aria-live="polite"
          >
            {footnote}
          </Text>
        </div>
      )}
    </div>
  );
}
