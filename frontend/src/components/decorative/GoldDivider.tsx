"use client";

import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-xs"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div className="w-2 h-2 rotate-45 border border-gold-500 animate-pulse-gold" />
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-xs"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
