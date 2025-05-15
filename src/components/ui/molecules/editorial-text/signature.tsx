import * as React from "react";
import { cn } from "@/lib/utils";
import type { EditorialTextSignatureProps } from "./types";

/**
 * Editorial Text Signature component
 *
 * Displays a title, description, and signature (either as HTML or image)
 */
export function EditorialTextSignature({
  title,
  description,
  signatureHtml,
  signatureImage,
  className,
}: EditorialTextSignatureProps) {
  return (
    <div
      className={cn(
        "w-full bg-primary-100 px-[376px] pt-[60px] pb-[120px] font-['Moncler_Gothic_Web'] font-normal leading-[1.2]",
        "lg:px-20 md:px-5 md:pb-[100px]",
        className,
      )}
    >
      <div className="max-w-full w-[688px]">
        <div className="pr-5 min-h-[63px] w-full gap-4">
          <div className="w-full gap-2">
            {title && (
              <div className="text-black text-[32px] font-['Moncler_Gothic_Web']">{title}</div>
            )}
            {description && (
              <div className="text-[#707070] text-sm font-['Moncler_Gothic_Web'] mt-2">
                {description}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          {signatureHtml ? (
            <div dangerouslySetInnerHTML={{ __html: signatureHtml }} className="w-[170px] h-16" />
          ) : signatureImage ? (
            <img
              src={signatureImage}
              alt="Signature"
              className="object-contain object-center w-[170px] aspect-[2.66] max-w-full"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EditorialTextSignature;
