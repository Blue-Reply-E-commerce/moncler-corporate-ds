;

import { ActionLink } from "@/components/ui/atoms/action-link";
import { cn } from "@/lib/utils";

interface ActionListItemProps {
  href: string;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

function ActionListItem({ href, title, description, className, onClick }: ActionListItemProps) {
  return (
    <ActionLink
      href={href}
      onClick={onClick}
      stroke
      className={cn("not-first:border-t-0", className)}
    >
      <div className="flex flex-col items-start">
        <h3 className="text-base font-normal text-black leading-[1.26] tracking-normal">{title}</h3>
        <p className="max-w-[412px] text-wrap text-sm text-primary-200 mt-2 leading-[1.20]">
          {description}
        </p>
      </div>
    </ActionLink>
  );
}

export interface ActionListProps {
  items: {
    href: string;
    title: string;
    description: string;
    onClick?: () => void;
  }[];
  className?: string;
}

export function ActionList({ items, className }: ActionListProps) {
  return (
    <div className={cn("", className)}>
      {items.map((item, index) => (
        <ActionListItem
          key={index}
          href={item.href}
          title={item.title}
          description={item.description}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
