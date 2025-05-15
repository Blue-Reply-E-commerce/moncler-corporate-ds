import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

interface ScrollAreaProps {
  scrollStep?: number;
}

const ScrollArea = ({ children, scrollStep = 200 }: React.PropsWithChildren<ScrollAreaProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [progress, setProgress] = useState(0.25); // ✅ progress 0.25-1

  // ✅ aggiorna posizione e larghezza thumb
  const updateThumb = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!container || !track || !thumb) return;

    const scrollRatio = container.scrollLeft / (container.scrollWidth - container.clientWidth);

    setProgress(scrollRatio); // salva per uso futuro
  };

  const scrollBy = (amount: number) => {
    containerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setStartScrollLeft(containerRef.current!.scrollLeft);
    document.body.style.userSelect = 'none';
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    const delta = x - startX;

    const container = containerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!container || !track || !thumb) return;

    const scrollWidth = container.scrollWidth - container.clientWidth;
    const trackWidth = track.offsetWidth - thumb.offsetWidth;
    const scrollAmount = (delta / trackWidth) * scrollWidth;

    container.scrollLeft = startScrollLeft + scrollAmount;
  };

  const handleDragEnd = () => {
    setDragging(false);
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateThumb);
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove);
    window.addEventListener('touchend', handleDragEnd);

    updateThumb();

    return () => {
      container.removeEventListener('scroll', updateThumb);
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return (
    <div className="relative w-full">
      {/* Pulsanti Prev / Next */}
      <button onClick={() => scrollBy(-scrollStep)} className="cursor-pointer absolute left-0">
        <ChevronLeftIcon width={6.61} height={11.71} aria-hidden="true" />
      </button>
      <button onClick={() => scrollBy(scrollStep)} className="cursor-pointer absolute right-0">
        <ChevronRightIcon width={6.61} height={11.71} aria-hidden="true" />
      </button>

      {/* Contenuto scrollabile */}
      <div
        ref={containerRef}
        className="overflow-x-auto flex scroll-smooth p-2.5 mx-10"
      >
        {children}
      </div>

      {/* Barra di scorrimento */}
      <div
        ref={trackRef}
        className="relative h-[1px] bg-primary-200 w-full"
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
          const rect = trackRef.current?.getBoundingClientRect();
          if (!rect || !containerRef.current) return;

          const clickX = e.clientX - rect.left;
          const ratio = clickX / rect.width;
          containerRef.current.scrollLeft = ratio * (containerRef.current.scrollWidth - containerRef.current.clientWidth);
        }}
      >
        <div
          ref={thumbRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className="absolute h-[3px] -translate-y-1/2 bg-black cursor-pointer z-10"
          style={{
            // ✅ solo width e transform sono dinamici
            width: '0px', // sarà aggiornata da updateThumb
            transform: 'translateX(0px)',
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollArea;
