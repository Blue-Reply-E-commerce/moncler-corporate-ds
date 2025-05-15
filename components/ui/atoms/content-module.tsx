"use client";

import { Link } from "@/components/ui/atoms/link";
import { ChevronRightIcon, CheckedIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Interface for link items in the ContentModule
 * @property {string} label - The text to display for the link
 * @property {string} href - The URL the link points to
 */
export interface ContentModuleLink {
  label: string;
  href: string;
}

/**
 * Props for the ContentModule component
 * @property {string} title - The main heading text
 * @property {string} description - The descriptive text content
 * @property {ContentModuleLink[]} [links] - Optional array of links to display
 * @property {string} [notification] - Optional notification message to display in a banner
 * @property {string} [className] - Optional additional CSS classes
 */
export interface ContentModuleProps {
  title: string;
  description: string;
  links?: ContentModuleLink[];
  notification?: string;
  className?: string;
}

/**
 * ContentModule - A responsive content display component with optional notification banner
 *
 * This component displays content in two different layouts:
 * 1. Desktop: Two-column layout with title on the left and description/links on the right
 * 2. Mobile: Stacked layout with title above description and links
 *
 * It also supports an optional notification banner that appears at the bottom.
 *
 * @example
 * ```tsx
 * <ContentModule
 *   title="Our Mission"
 *   description="Lorem ipsum dolor sit amet..."
 *   links={[{ label: "Learn More", href: "/about" }]}
 *   notification="New content available"
 * />
 * ```
 */
export function ContentModule({
  title,
  description,
  links = [],
  notification,
  className,
}: ContentModuleProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col gap-4 items-start px-7 py-32 w-full bg-surface-secondary max-md:px-6 max-md:py-16">
        <div className="flex justify-between items-start pl-28 w-full max-md:pl-16">
          <h2 className="flex-1 text-3xl leading-10 text-black w-[572px] max-md:text-3xl max-md:w-[400px]">
            {title}
          </h2>
          <div className="flex flex-col gap-5 items-start pr-28 max-md:pr-16">
            <p className="text-sm leading-4 text-black w-[456px] max-md:w-full">{description}</p>
            {links.length > 0 && (
              <div className="flex gap-3 items-center">
                {links.map((link, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <Link
                      href={link.href}
                      size="sm"
                      className="font-medium uppercase"
                      aria-label={link.label}
                    >
                      {link.label}
                    </Link>
                    <ChevronRightIcon width={6.61} height={11.71} aria-hidden="true" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-6 items-start px-4 pt-16 pb-10 bg-surface-secondary w-full">
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="flex-1 gap-2.5 w-full text-2xl leading-7 text-black">{title}</h2>
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="w-full text-sm leading-4 text-black">{description}</p>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-3 items-center">
                {links.map((link, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <Link
                      href={link.href}
                      size="sm"
                      className="font-medium uppercase"
                      aria-label={link.label}
                    >
                      {link.label}
                    </Link>
                    <ChevronRightIcon width={6.61} height={11.71} aria-hidden="true" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification Banner */}
      {notification && (
        <div
          className="flex absolute md:bottom-16 md:left-16 justify-between items-center px-5 py-3.5 border border-success bg-[linear-gradient(0deg,rgba(60,130,47,0.05)_0%,rgba(60,130,47,0.05)_100%),#FFF] h-[72px] w-[480px] max-md:bottom-8 max-md:left-8 max-sm:bottom-0 max-sm:left-0 max-sm:w-full"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-1 justify-between items-center">
            <div className="text-sm font-medium tracking-normal leading-4 text-center text-success uppercase">
              {notification}
            </div>
            <CheckedIcon width={16} height={16} aria-hidden="true" />
          </div>
        </div>
      )}
    </div>
  );
}
