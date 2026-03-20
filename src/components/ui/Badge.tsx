import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "bestseller" | "new" | "discount";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "bestseller", children, className }: BadgeProps) {
  const variants = {
    bestseller: "bg-brand-orange text-white",
    new: "bg-brand-pink text-white",
    discount: "bg-brand-purple text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
