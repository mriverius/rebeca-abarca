"use client";

import { motion } from "framer-motion";
import { rotateAnimation } from "@/lib/animations";

interface FlowerOfLifeProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export default function FlowerOfLife({ 
  className = "", 
  size = 200, 
  opacity = 0.1 
}: FlowerOfLifeProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={rotateAnimation}
      animate="animate"
      style={{ opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="126" cy="85" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="126" cy="115" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="74" cy="85" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="74" cy="115" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="100" cy="70" r="30" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="100" cy="130" r="30" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
