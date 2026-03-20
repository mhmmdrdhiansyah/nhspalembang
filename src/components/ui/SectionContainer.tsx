import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "support" | "gradient";
}

export function SectionContainer({
  children,
  className,
  id,
  background = "white",
}: SectionContainerProps) {
  const backgrounds = {
    white: "bg-white",
    support: "bg-brand-support",
    gradient:
      "bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange text-white",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", backgrounds[background])}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-white" : "text-brand-purple"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-brand-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
