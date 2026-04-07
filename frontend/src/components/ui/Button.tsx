"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-lato font-medium rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    gold: "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-ebony-dark hover:from-[#FFD700] hover:to-[#F5D78E] shadow-lg hover:shadow-xl hover:shadow-yellow-500/30",
    outline: "border-2 border-rosegold text-rosegold hover:bg-rosegold hover:text-cloud backdrop-blur-sm glow-rosegold",
    ghost: "text-ebony hover:bg-sand hover:text-rosegold backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}
