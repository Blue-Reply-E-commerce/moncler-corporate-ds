import { Link } from "@/components/ui/atoms/link";
import { ChevronRightIcon } from "@/components/ui/icons";
import { InfoRow } from "./row";
import { InfoRowItem } from "./types";

interface ResourcesListProps {
  title: string;
  viewAllLink: string;
  items: InfoRowItem[];
}

function ResourcesList({ title, viewAllLink, items }: ResourcesListProps) {
  return (
    <div
      aria-labelledby="resources-heading"
      data-testid="resources-list"
      className="w-full mx-auto lg:max-w-[920px] relative"
    >
      <div className="flex items-center justify-between mb-10">
        <h2
          id="resources-heading"
          className="text-2xl font-normal break-words max-w-[157px] md:max-w-none"
        >
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
      <div className="flex flex-col gap-4 md:gap-y-[31.5px]">
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
    </div>
  );
}

export { ResourcesList };
