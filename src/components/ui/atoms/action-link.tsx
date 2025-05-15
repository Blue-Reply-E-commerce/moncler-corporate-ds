import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "../icons";

interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  stroke?: boolean;
}

export function ActionLink({ href, children, className, stroke, ...props }: ActionLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center justify-between w-fit text-base font-normal leading-[1.26] gap-5 focus",
        stroke && "border-y border-secondary-300 py-[22px]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronRightIcon width={6.61} height={11.71} />
    </a>
  );
}
