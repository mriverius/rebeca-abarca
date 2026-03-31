import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  whileInView: { 
    opacity: 1, 
    y: 0 
  },
  viewport: { 
    once: true 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  },
};

export const fadeIn: Variants = {
  initial: { 
    opacity: 0 
  },
  whileInView: { 
    opacity: 1 
  },
  viewport: { 
    once: true 
  },
  transition: { 
    duration: 0.8,
    ease: "easeOut"
  },
};

export const fadeInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -40 
  },
  whileInView: { 
    opacity: 1, 
    x: 0 
  },
  viewport: { 
    once: true 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  },
};

export const fadeInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 40 
  },
  whileInView: { 
    opacity: 1, 
    x: 0 
  },
  viewport: { 
    once: true 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  },
};

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  whileInView: { 
    opacity: 1, 
    scale: 1 
  },
  viewport: { 
    once: true 
  },
  transition: { 
    duration: 0.5,
    ease: "easeOut"
  },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  viewport: {
    once: true,
  },
};

export const staggerItem: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  whileInView: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.5 
  },
};

export const scaleOnHover = {
  whileHover: { 
    scale: 1.03,
  },
  transition: { 
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const glowOnHover = {
  whileHover: { 
    scale: 1.02,
    boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)",
  },
  transition: { 
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const floatAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
