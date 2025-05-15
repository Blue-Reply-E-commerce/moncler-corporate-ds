import { cn } from "@/lib/utils";
import { sanitizeHtml } from "@/lib/sanitize";
import { useRef, useEffect } from "react";

/**
 * Interface for the DualContentModule component props
 * @property {string} [title] - Optional main heading text
 * @property {string} content - The HTML content to display in a two-column layout
 * @property {string} [className] - Optional additional CSS classes
 * @property {string} [id] - Optional ID for the component
 * @property {string} [ariaLabel] - Optional aria-label for the component
 */
export interface DualContentModuleProps {
  title?: string;
  content: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

/**
 * DualContentModule - A responsive content display component with dual columns and optional notification
 *
 * This component displays HTML content in a responsive layout that automatically
 * formats into two columns on desktop and a single column on mobile.
 * It also supports an optional title and notification banner.
 *
 * @example
 * ```tsx
 * <DualContentModule
 *   title="Titles goes here"
 *   content="<p>Lorem ipsum dolor sit amet...</p><p>More content here...</p>"
 *   notification="Same as Moncler Next module"
 * />
 * ```
 */
export function DualContentModule({
  title,
  content,
  className,
  id,
  ariaLabel,
}: DualContentModuleProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Apply column styling to the content after it's rendered
  useEffect(() => {
    if (contentRef.current) {
      // Apply column styling for desktop view
      contentRef.current.classList.add("md:columns-2", "md:gap-8");

      // Ensure paragraphs don't break across columns
      const paragraphs = contentRef.current.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.classList.add("break-inside-avoid-column", "mb-6");
      });
    }
  }, [content]);

  // Sanitize the HTML content
  const sanitizedContent = sanitizeHtml(content);

  return (
    <div className={cn("relative w-full", className)} id={id} aria-label={ariaLabel} role="region">
      <div className="w-full px-4 py-8 md:px-7 md:py-16 lg:py-[120px] bg-surface-secondary">
        {/* Optional Title */}
        {title && (
          <h2 className="text-2xl md:text-[32px] leading-[120%] text-black w-full mb-6 md:mb-10 lg:mb-[60px] md:px-0 lg:px-[232px]">
            {title}
          </h2>
        )}

        {/* Content Area */}
        <div
          ref={contentRef}
          className="w-full text-sm leading-[120%] text-black"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </div>
  );
}
