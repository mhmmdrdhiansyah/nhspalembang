"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-brand-pink text-white hover:bg-brand-pink-light hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-brand-purple text-white hover:bg-brand-purple-light hover:shadow-lg hover:shadow-brand-purple/30 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-brand-purple hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-brand-pink hover:bg-brand-pink/10 hover:-translate-y-0.5 active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const allClasses = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={allClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
