;

import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/atoms/tabs";

interface TabsData {
  value: string;
  label: string;
  count: number;
  content: string;
}

interface TabsDemoProps {
  tabs: TabsData[];
  defaultValue?: string;
  withBorder?: boolean;
  withBackground?: boolean;
}

export function TabLayout({
  tabs,
  defaultValue,
  withBorder = true,
  withBackground = false,
}: TabsDemoProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue={defaultValue || tabs[0].value}>
        <div
          className={`relative w-full ${withBackground ? "bg-off-white pt-12 px-0 md:pt-12 md:px-5 lg:px-[106px] 2xl:pt-20 2xl:px-36" : ""}`}
        >
          <TabsList className={`${withBorder ? "border-b border-b-primary-200" : ""}`}>
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.value}>
                {tab.label} ({tab.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabs.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
