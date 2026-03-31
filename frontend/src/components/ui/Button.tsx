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
  const baseStyles = "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-900";
  
  const variants = {
    gold: "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 hover:from-gold-400 hover:to-gold-500 shadow-lg hover:shadow-gold-500/50 glow-gold",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 backdrop-blur-sm",
    ghost: "text-gold-500 hover:bg-gold-500/10 backdrop-blur-sm",
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
