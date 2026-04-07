"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import ShimmerText from "@/components/ui/ShimmerText";
import FlowerOfLife from "@/components/decorative/FlowerOfLife";
import SacredGeometry from "@/components/decorative/SacredGeometry";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const GoldParticles = dynamic(() => import("@/components/decorative/GoldParticles"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sand-light via-champagne to-sand">
      {/* Beach/Ocean background image - replace with actual image */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-champagne/50 via-transparent to-champagne" />
      </div>
      
      {/* Rebeca's image on the right */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 hidden lg:block">
        <img 
          src="/rebeca.jpg" 
          alt="Rebeca - Coach & Sound Healing"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-champagne via-champagne/50 to-transparent" />
      </div>
      
      {/* Flower of Life watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <FlowerOfLife size={400} />
      </div>
      
      {/* Sacred Geometry decorations */}
      <div className="absolute top-10 left-10 opacity-20">
        <SacredGeometry type="seed" size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-15">
        <SacredGeometry type="hexagon" size={100} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <SacredGeometry type="vesica" size={90} />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-15">
        <SacredGeometry type="triangle" size={70} />
      </div>

      {/* Glass-morphism content panel */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:mx-8 lg:ml-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="glass-card rounded-3xl p-8 md:p-12 space-y-8 noise-texture relative"
        >
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-ebony text-sm uppercase tracking-widest mb-2">
              NIDO MÍSTICO ACADEMY 365 VIA MARBH LABHRN
            </p>
            <p className="text-ebony-light text-xs mb-6">CIUDAD COLÓN</p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-sand" />
              <FlowerOfLife size={40} />
              <div className="h-px w-16 bg-sand" />
            </div>
            
            <ShimmerText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              RENACER<br />DEL ALMA
            </ShimmerText>
            
            <p className="text-ebony text-lg md:text-xl font-tenor mb-8">
              ALQUIMIA DE SONIDO Y GUÍA INTUITIVA
            </p>

            <Button href={WHATSAPP_LINKS.general} variant="outline" className="border-2 border-rosegold text-rosegold hover:bg-rosegold hover:text-cloud">
              ENTRAR AL PORTAL
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-rosegold/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-rosegold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
