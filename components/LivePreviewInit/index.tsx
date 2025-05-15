"use client";

import { initPreview } from "@/contentstack-sdk";
import { useEffect } from "react";

export default function LivePreviewInit() {
  useEffect(() => {
    initPreview();
  }, []);

  return null;
}
