"use client";
import React from "react";
import { cn } from "@/utils/cn";

export function CardButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  className,
  style,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        // keep same grid footprint as your Button
        "bg-transparent relative p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className={cn(
          "relative w-full h-full border border-slate-800/80 bg-slate-900/20 backdrop-blur-xl text-white",
          "transition hover:-translate-y-0.5 hover:border-white/20",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          ...style,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
