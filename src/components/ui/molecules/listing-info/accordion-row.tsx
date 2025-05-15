;
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "../../atoms/accordion";
import { InfoRow } from "./row";
import type { InfoRowItem } from "./types";

interface AccordionRowProps {
  title: string;
  items: InfoRowItem[];
}

const AccordionListRow = ({ title, items }: AccordionRowProps) => {
  return (
    <AccordionRoot type="single" collapsible>
      <AccordionItem value="item-1" className="w-full mx-auto lg:max-w-[920px]">
        <AccordionTrigger
          className={`w-full bg-surface-secondary/60 data-[state=open]:bg-white transition-colors px-4 py-4 md:px-7 md:py-[31.5px] text-md md:text-sm leading-[1.2] border-b border-b-secondary-300`}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent className="p-4 md:px-7 md:pt-7 md:pb-10 bg-white">
          {items.map((item, index) => (
            <InfoRow
              className="pt-4 border-t border-t-secondary-300 first:border-t-0 pb-9"
              key={index}
              date={item.date}
              title={item.title}
              hasCalendar={item.hasCalendar}
              hasDownload={item.hasDownload}
              hasPreview={item.hasPreview}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default AccordionListRow;
