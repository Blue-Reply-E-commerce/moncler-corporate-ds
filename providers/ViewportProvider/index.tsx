"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Breakpoints, DeviceType } from "./types";

const evaluateDevice = (width: number) => {
  return width <= Breakpoints.MOBILE
    ? DeviceType.MOBILE
    : width <= Breakpoints.TABLET
      ? DeviceType.TABLET
      : DeviceType.DESKTOP;
};

type ViewportContextType = {
  device: DeviceType;
};

const ViewportContext = createContext<ViewportContextType>({ device: DeviceType.DESKTOP });

export const ViewportProvider = ({
  children,
  deviceType,
}: {
  children: React.ReactNode;
  deviceType: DeviceType;
}) => {
  const [device, setDevice] = useState(deviceType);

  const handleWindowSizeChange = () => {
    setDevice(evaluateDevice(window.innerWidth));
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window]);

  return <ViewportContext.Provider value={{ device }}>{children}</ViewportContext.Provider>;
};

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within ViewportProvider");
  }
  return {
    ...context,
    isMobile: context.device === DeviceType.MOBILE,
  };
};
