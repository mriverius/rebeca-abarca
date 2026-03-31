"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { pulseGlow } from "@/lib/animations";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 p-4 rounded-full shadow-2xl hover:shadow-gold-500/50 transition-shadow group"
      variants={pulseGlow}
      animate="animate"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900 animate-pulse" />
    </motion.a>
  );
}
