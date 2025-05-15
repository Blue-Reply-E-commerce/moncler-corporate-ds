;

import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { MinusIcon, PlusIcon } from "../icons";

function AccordionRoot(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root data-slot="accordion" className={cn(props.className)} {...props} />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const triggerId = React.useId();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        id={triggerId}
        data-slot="accordion-trigger"
        className={cn(
          "group flex items-center justify-between w-full text-left focus:outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <span className="ml-2 shrink-0">
          <PlusIcon width={12} height={12} className="group-data-[state=open]:hidden" />
          <MinusIcon width={12} height={12} className="hidden group-data-[state=open]:inline" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  triggerId,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & { triggerId?: string }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      role="region"
      aria-labelledby={triggerId}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger };
