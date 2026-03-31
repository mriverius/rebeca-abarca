"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}
