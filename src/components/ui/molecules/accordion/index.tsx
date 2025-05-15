;
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "../../atoms/accordion";

interface AccordionProps {
  title: string;
  type?: "default" | "footer";
}

const Accordion = ({
  title,
  type = "default",
  children,
}: React.PropsWithChildren<AccordionProps>) => {
  return (
    <AccordionRoot type="single" className="w-full" collapsible>
      <AccordionItem
        value={title}
        className={`${type === "default" ? "border-secondary-300" : "border-none"}`}
      >
        <AccordionTrigger
          className={`w-full pb-2 text-sm ${type === "default" ? "leading-[1.4]" : "text-secondary-100 leading-[1.26]"}`}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent
          className={`flex flex-col gap-2 text-sm ${type === "default" ? "text-primary-200 leading-[1.2]" : "leading-[1.26]"}`}
        >
          {children}
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default Accordion;
