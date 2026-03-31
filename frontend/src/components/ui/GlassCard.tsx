"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const baseStyles = "backdrop-blur-xl bg-white/5 border border-gold-500/20 rounded-2xl p-6";
  
  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)",
          borderColor: "rgba(212, 175, 55, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
