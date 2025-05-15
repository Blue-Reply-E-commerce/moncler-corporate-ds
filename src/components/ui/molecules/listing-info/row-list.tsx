import { InfoRow } from "./row";
import type { InfoRowItem } from "./types";

interface InfoRowListProps {
  items: InfoRowItem[];
}

export function InfoRowList({ items }: InfoRowListProps) {
  return (
    <div className="flex flex-col gap-y-[67.5px] mx-auto lg:max-w-[920px]">
      {items.map((item, index) => (
        <InfoRow
          className="pt-4 border-t border-t-secondary-300"
          key={index}
          date={item.date}
          title={item.title}
          hasCalendar={item.hasCalendar}
          hasDownload={item.hasDownload}
          hasPreview={item.hasPreview}
        />
      ))}
    </div>
  );
}
