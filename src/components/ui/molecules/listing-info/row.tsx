;

import { cn } from "@/lib/utils";
import { Text } from "../../atoms/text";
import { CalendarIcon, DocumentIcon, DownloadIcon } from "../../icons";
import type { InfoRowItem } from "./types";

export function InfoRow({
  title = "Board of Directors for the Approval of the Interim Management Statement at 30 September 2024",
  date,
  hasPreview = false,
  hasCalendar = false,
  hasDownload = false,
  className,
}: InfoRowItem) {
  const hasIcons = hasPreview || hasCalendar || hasDownload;

  const day = date && String(date?.getDate()).padStart(2, "0");
  const month = date && String(date?.getMonth() + 1).padStart(2, "0");
  const year = date?.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const handleDownload = () => {};
  const handleCalendar = () => {};
  const handleDocument = () => {};

  return (
    <div className={cn("flex items-center justify-between gap-5 md:gap-12 w-full", className)}>
      <section className="flex flex-col md:flex-row justify-start items-start">
        {date ? (
          <Text
            as="span"
            weight="normal"
            size="sm"
            className="leading-[1.2] md:mr-12"
            color="secondary"
          >
            {formattedDate}
          </Text>
        ) : null}
        <Text size="sm" weight="normal" className="leading-[1.2] tracking-normal">
          {title}
        </Text>
      </section>

      {hasIcons ? (
        <section className="flex items-center gap-4">
          {hasPreview ? (
            <button className="cursor-pointer" onClick={handleDocument}>
              <DocumentIcon width={12} height={16} />{" "}
            </button>
          ) : null}
          {hasCalendar ? (
            <button className="cursor-pointer" onClick={handleCalendar}>
              <CalendarIcon width={16} height={15} />
            </button>
          ) : null}
          {hasDownload ? (
            <button className="cursor-pointer" onClick={handleDownload}>
              <DownloadIcon width={16} height={13} />
            </button>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
