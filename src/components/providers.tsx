"use client";

import React from "react";
import { TooltipProvider } from "./ui/tooltip";
import { Toaster } from "./ui/toaster";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
};
