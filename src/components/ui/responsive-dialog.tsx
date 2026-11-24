"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export interface ResponsiveDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ResponsiveDialog({
  children,
  open,
  onOpenChange,
}: ResponsiveDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}

export const ResponsiveDialogTrigger = DialogTrigger;
export const ResponsiveDialogContent = DialogContent;
export const ResponsiveDialogHeader = DialogHeader;
export const ResponsiveDialogTitle = DialogTitle;
export const ResponsiveDialogDescription = DialogDescription;
export const ResponsiveDialogFooter = DialogFooter;
export const ResponsiveDialogClose = DialogClose;
