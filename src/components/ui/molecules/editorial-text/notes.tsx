import * as React from "react";
import { cn } from "@/lib/utils";

export interface EditorialTextNotesProps {
  title?: string;
  content: string;
  className?: string;
}

export const EditorialTextNotes: React.FC<EditorialTextNotesProps> = ({
  title = "Note",
  content,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-10 bg-[rgba(238,236,228,0.60)] backdrop-blur-[50px] font-['Moncler_Gothic_Web'] px-6 py-20 md:px-[376px]",
        className,
      )}
    >
      <div className="flex flex-col w-full gap-2">
        <div className="text-black text-sm leading-[1.4] whitespace-nowrap">{title}</div>
        <div
          className="text-[#707070] text-xs leading-[14px] mt-2 w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default EditorialTextNotes;
