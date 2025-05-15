"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, VolumeUpIcon, VolumeOffIcon } from "../icons";

interface VideoControlsProps {
  handlePlay?: () => void;
  handleVolume?: () => void;
  variant?: "light" | "dark";
  className?: string;
}

export default function VideoControls({
  variant = "dark",
  className,
  handlePlay,
  handleVolume,
}: VideoControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    handlePlay?.();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    handleVolume?.();
  };

  return (
    <div className={cn("flex items-center gap-2 w-14 h-6")}>
      <button
        onClick={togglePlay}
        className={cn(
          "h-6 w-6 pv-4 blur-4xl flex justify-center items-center",
          variant === "dark" ? "bg-surface-primary/60" : "bg-surface-secondary/60",
        )}
        style={{ filter: "var(--blur-4xl)" }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <PauseIcon fill={variant === "dark" ? "white" : "black"} height={8} width={7.33} />
        ) : (
          <PlayIcon fill={variant === "dark" ? "white" : "black"} height={8} width={7.33} />
        )}
      </button>

      <button
        onClick={toggleMute}
        className={cn(
          "h-6 w-6 pv-4 blur-4xl flex justify-center items-center",
          variant === "dark" ? "bg-surface-primary/60" : "bg-surface-secondary/60",
        )}
        style={{ filter: "var(--blur-4xl)" }}
        aria-label={isMuted ? "Audio Up" : "Audio Off"}
      >
        {isMuted ? (
          <VolumeUpIcon
            fill={variant === "dark" ? "white" : "black"}
            width={11.58}
            height={11.51}
          />
        ) : (
          <VolumeOffIcon
            fill={variant === "dark" ? "white" : "black"}
            width={11.58}
            height={11.51}
          />
        )}
      </button>
    </div>
  );
}
