"use client";

import { ReactNode } from "react";

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function ShimmerText({ children, className = "", as = "span" }: ShimmerTextProps) {
  const Component = as;
  
  return (
    <Component className={`text-shimmer ${className}`}>
      {children}
    </Component>
  );
}
