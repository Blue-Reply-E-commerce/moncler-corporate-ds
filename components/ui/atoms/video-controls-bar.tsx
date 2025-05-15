"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PlayIcon, PauseIcon, VolumeOffIcon, VolumeUpIcon } from "../icons";

interface VideoControlsBarProps {
  duration: number;
  currentTime?: number;
  isPlaying?: boolean;
  isMuted?: boolean;
  onPlayPause?: () => void;
  onSeek?: (time: number) => void;
  onVolumeToggle?: () => void;
  className?: string;
  variant?: "dark" | "light";
}

export default function VideoControlsBar({
  duration,
  currentTime: initialCurrentTime = 0,
  isPlaying: initialIsPlaying = false,
  isMuted: initialIsMuted = false,
  onPlayPause = () => {},
  onSeek = () => {},
  onVolumeToggle = () => {},
  className,
  variant = "dark",
}: VideoControlsBarProps) {
  const [currentTime, setCurrentTime] = useState(initialCurrentTime);
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
  const [isMuted, setIsMuted] = useState(initialIsMuted);
  const [isDragging, setIsDragging] = useState(false);

  const progressBarRef = useRef<HTMLDivElement>(null);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const calculateTimeFromPosition = (clientX: number) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      return clickPosition * duration;
    }
    return currentTime;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTime = calculateTimeFromPosition(e.clientX);
    setCurrentTime(newTime);
    onSeek(newTime);
  };

  const handlePlayPauseClick = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    onPlayPause();
  };

  const handleVolumeToggleClick = () => {
    const newIsMuted = !isMuted;
    setIsMuted(newIsMuted);
    onVolumeToggle();
  };

  // Drag functionality
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    // Update time immediately on drag start
    const newTime = calculateTimeFromPosition(e.clientX);
    setCurrentTime(newTime);
  };

  const handleDragMove = (e: MouseEvent) => {
    if (isDragging) {
      const newTime = calculateTimeFromPosition(e.clientX);
      setCurrentTime(newTime);
    }
  };

  const handleDragEnd = (e: MouseEvent) => {
    if (isDragging) {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      // Call onSeek only when drag ends to avoid too many updates
      const newTime = calculateTimeFromPosition(e.clientX);
      onSeek(newTime);
    }
  };

  useEffect(() => {
    setCurrentTime(initialCurrentTime);
  }, [initialCurrentTime]);

  useEffect(() => {
    setIsPlaying(initialIsPlaying);
  }, [initialIsPlaying]);

  useEffect(() => {
    setIsMuted(initialIsMuted);
  }, [initialIsMuted]);

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging]);

  return (
    <div
      className={cn(
        `flex items-center gap-3 p-3 ${variant === "dark" ? "bg-surface-primary/60" : "bg-surface-secondary/60"} w-[343px] h-[48px]`,
        className,
      )}
    >
      <button
        onClick={handlePlayPauseClick}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="focus"
      >
        {isPlaying ? (
          <PauseIcon width={12} height={12} fill={variant === "dark" ? "white" : "black"} />
        ) : (
          <PlayIcon width={12} height={12} fill={variant === "dark" ? "white" : "black"} />
        )}
      </button>

      <div
        ref={progressBarRef}
        className="relative flex-1 h-[1px] bg-secondary-200 cursor-pointer"
        onClick={handleProgressBarClick}
        onMouseDown={handleDragStart}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-[3px] ${variant === "dark" ? "bg-white" : "bg-black"}`}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      <div
        className={`text-xs leading-[1.2] whitespace-nowrap ${variant === "dark" ? "text-white" : "text-black"}`}
      >
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      <button
        onClick={handleVolumeToggleClick}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="focus"
      >
        {isMuted ? (
          <VolumeUpIcon width={15} height={15} fill={variant === "dark" ? "white" : "black"} />
        ) : (
          <VolumeOffIcon width={15} height={15} fill={variant === "dark" ? "white" : "black"} />
        )}
      </button>
    </div>
  );
}
