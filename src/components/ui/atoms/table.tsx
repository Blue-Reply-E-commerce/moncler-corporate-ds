import { useViewport } from "@/providers/ViewportProvider";
import React, { useState } from "react";
import ScrollArea from "./scroll-area";
import * as RadixTable from "@radix-ui/react-table";

interface TableProps {
  columns: string[];
  rows: React.ReactNode[][];
  caption?: string;
  className?: string;
  scrollStep?: number; // larghezza di una colonna (in px)
  maxRowsMobile?: number; // numero massimo di righe visibili su mobile
}

export function Table({
  columns,
  rows,
  caption,
  className,
  scrollStep = 200,
  maxRowsMobile = 6,
}: TableProps) {
  const [showAll, setShowAll] = useState(false);

  const { isMobile } = useViewport();
  const visibleRows = isMobile && !showAll ? rows.slice(0, maxRowsMobile) : rows;

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <ScrollArea scrollStep={scrollStep}>
        <RadixTable.Root className="min-w-full border-separate border-spacing-0">
          {caption && <RadixTable.Caption className="sr-only">{caption}</RadixTable.Caption>}
          <RadixTable.Header>
            <RadixTable.Row>
              {columns.map((col, idx) => (
                <RadixTable.ColumnHeaderCell
                  key={idx}
                  className="px-4 py-2 text-left font-bold border-b border-gray-200 bg-transparent"
                  scope="col"
                >
                  {col}
                </RadixTable.ColumnHeaderCell>
              ))}
            </RadixTable.Row>
          </RadixTable.Header>
          <RadixTable.Body>
            {visibleRows.map((row, rIdx) => (
              <RadixTable.Row key={rIdx}>
                {row.map((cell, cIdx) => (
                  <RadixTable.Cell key={cIdx} className="px-4 py-2 border-b border-gray-100">
                    {cell}
                  </RadixTable.Cell>
                ))}
              </RadixTable.Row>
            ))}
          </RadixTable.Body>
        </RadixTable.Root>
      </ScrollArea>
      {/* Read more solo su mobile e se ci sono più righe */}
      {isMobile && rows.length > maxRowsMobile && (
        <div className="flex justify-center mt-2">
          <button
            className="text-xs font-medium underline"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
          >
            {showAll ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
      )}
    </div>
  );
}
