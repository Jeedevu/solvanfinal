import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "default";
  size?: "sm" | "lg";
}

export function Badge({ className, variant = "default", size = "sm", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "outline" ? "text-neutral-900 border-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800",
        size === "lg" && "px-4 py-2 text-sm",
        className
      )}
      {...props}
    />
  );
}
