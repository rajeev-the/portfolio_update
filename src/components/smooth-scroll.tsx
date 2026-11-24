"use client";

import React from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

/**
 * Normal Native Scrolling Passthrough
 * Smooth virtual scrolling (Lenis / RAF hijack) removed as requested.
 */
function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}

export default SmoothScroll;
