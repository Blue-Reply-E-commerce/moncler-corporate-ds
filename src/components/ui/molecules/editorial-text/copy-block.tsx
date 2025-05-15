import React from "react";
import { cn } from "@/lib/utils";
import { InfoRowList } from "../listing-info/row-list";
import type { InfoRowItem } from "../listing-info/types";
import type { EditorialTextCopyBlockProps } from "./types";

/**
 * Editorial Text Copy Block component
 *
 * Displays formatted text content with optional document listing
 */
export function EditorialTextCopyBlock({
  subheading,
  introCopy,
  mainBody,
  documents = [],
  className,
}: EditorialTextCopyBlockProps) {
  // Convert document items to InfoRowItem format
  const documentItems: InfoRowItem[] = documents.map((doc) => ({
    title: doc.title,
    hasDownload: doc.hasDownload ?? true,
  }));

  return (
    <div
      className={cn(
        "w-full bg-primary-100 px-[376px] py-20 flex flex-col gap-10",
        "lg:px-20 md:px-5",
        className,
      )}
    >
      {subheading && (
        <div className="w-full text-2xl font-normal leading-[1.2] font-['Moncler_Gothic_Web']">
          {subheading}
        </div>
      )}

      {introCopy && (
        <div
          className="w-full mt-10 text-xl font-normal leading-6 font-['Moncler_Gothic_Web']"
          dangerouslySetInnerHTML={{ __html: introCopy }}
        />
      )}

      {mainBody && (
        <div
          className="w-full mt-10 text-base font-normal leading-[19px] text-secondary-500 font-['Moncler_Gothic_Web']"
          dangerouslySetInnerHTML={{ __html: mainBody }}
        />
      )}

      {documents.length > 0 && (
        <div className="w-full mt-10 pt-5">
          <InfoRowList items={documentItems} />
        </div>
      )}
    </div>
  );
}

export default EditorialTextCopyBlock;
