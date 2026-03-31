"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import ShimmerText from "@/components/ui/ShimmerText";
import FlowerOfLife from "@/components/decorative/FlowerOfLife";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const GoldParticles = dynamic(() => import("@/components/decorative/GoldParticles"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <GoldParticles />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-0" />
      
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <FlowerOfLife size={300} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="space-y-8"
        >
          <motion.div variants={staggerItem}>
            <ShimmerText as="h1" className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Del control a tu poder interior
            </ShimmerText>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <p className="text-cream-100 text-xl md:text-2xl font-light">
              Coach & Guía Intuitiva · Sound Healing · Sesiones 1:1
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href={WHATSAPP_LINKS.general} size="lg">
              Agendá tu sesión ✨
            </Button>
          </motion.div>

          <motion.div 
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-gold-500/20 rounded-full text-cream-200 text-sm"
          >
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span>Estudio en Ciudad Colón · Martes a Domingo · 9am a 6pm</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
