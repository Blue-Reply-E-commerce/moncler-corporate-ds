"use client";

import React, { useEffect, useRef, useState } from "react";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperProps, type SwiperRef } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

import { useViewport } from "@/providers/ViewportProvider";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";

export interface SliderProps {
  id: string;
  children: React.ReactNode[];
  ariaLabel?: string;
  mobileSlides?: number;
  tabletSlides?: number;
  desktopSlides?: number;
  spaceBetween?: number;
  showProgressBar?: boolean;
  swiperProps?: Partial<SwiperProps>;
  className?: string;
  navigationClassName?: string;
  progressBarClassName?: string;
}

export function Slider({
  id,
  children,
  ariaLabel = "Slider content",
  mobileSlides = 1.33,
  tabletSlides = 2.5,
  desktopSlides = 4,
  spaceBetween = 16,
  showProgressBar = true,
  swiperProps,
  className,
  navigationClassName,
  progressBarClassName,
}: SliderProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0.25);
  const [isDragging, setIsDragging] = useState(false);
  const totalItems = children.length;
  const { isMobile } = useViewport()

  const slidesPerView = isMobile ? mobileSlides : desktopSlides

  const handleSlideChange = (swiper?: SwiperType) => {
    if (!swiper) return;
    const active = swiper.activeIndex;
    setCurrentIndex(active);
    console.log(active, '>> active Index')
    setProgress((active + 1) / totalItems);

    const liveRegion = document.getElementById(`${id}-live-region`);
    if (liveRegion) {
      liveRegion.textContent = `Showing item ${active + 1} of ${totalItems}`;
    }
  };

  const updateSwiperFromProgress = (clientX: number) => {
    const rect = progressBarRef.current?.getBoundingClientRect();
    const swiperInstance = swiperRef.current?.swiper;
    if (!rect || !swiperInstance) return;

    const x = clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    const index = Math.floor(ratio * totalItems);
    swiperInstance.slideTo(index);
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSwiperFromProgress(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updateSwiperFromProgress(e.clientX);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  console.log(progress, '>> progress')

  return (
    <div className={className}>
      <div id={`${id}-live-region`} className="sr-only" aria-live="polite" />
      <div id={`${id}-pagination-status`} className="sr-only" aria-live="polite">
        Showing item {currentIndex + 1} of {totalItems}
      </div>

      <div role="region" aria-label={ariaLabel} aria-roledescription="carousel">
        <Swiper
          modules={[Navigation, Keyboard]}
          // onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: `.${id}-next`,
            prevEl: `.${id}-prev`,
          }}
          slidesPerView={slidesPerView}
          slidesPerGroup={1}
          spaceBetween={spaceBetween}
          breakpoints={{
            640: { slidesPerView: tabletSlides },
            1024: { slidesPerView: desktopSlides },
          }}
          className="relative"
          {...swiperProps}
        >
          {children.map((child, index) => (
            <SwiperSlide
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Item ${index + 1} of ${totalItems}`}
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>

        {showProgressBar && (
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              className={cn(`${id}-prev w-6 h-6 disabled:opacity-30`, navigationClassName)}
              aria-label="Previous item"
            // onClick={() => handleSlideChange(swiperRef.current?.swiper)}
            >
              <ChevronLeftIcon />
            </button>

            {/* Progress bar with draggable thumb */}
            <div
              ref={progressBarRef}
              className={cn(
                "relative h-[1px] bg-primary-200 w-full",
                progressBarClassName
              )}
              onClick={(e) => updateSwiperFromProgress(e.clientX)}
              role="scrollbar"
              aria-controls="${id}-pagination-status"
              aria-label="Progress bar"
              aria-orientation="horizontal"
              aria-valuenow={currentIndex}
              aria-valuemin={0}
              aria-valuemax={totalItems - 1}
            >
              {/* Thumb */}
              <div
                onMouseDown={handleThumbMouseDown}
                className="absolute h-[3px] -translate-y-1/2 bg-black cursor-pointer z-10"
                style={{ width: `${progress * 100}%` }} // center the thumb
              />
            </div>

            <button
              className={cn(`${id}-next w-6 h-6 disabled:opacity-30`, navigationClassName)}
              aria-label="Next item"
            // onClick={() => handleSlideChange(swiperRef.current?.swiper)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
