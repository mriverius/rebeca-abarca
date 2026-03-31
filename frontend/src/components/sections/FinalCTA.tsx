"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ShimmerText from "@/components/ui/ShimmerText";
import FlowerOfLife from "@/components/decorative/FlowerOfLife";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-gold-animated overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-900/90 to-dark-900/95 z-0" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <FlowerOfLife size={600} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ¿Lista para reconectar con tu poder interior?
            </ShimmerText>
            <p className="text-cream-100 text-xl md:text-2xl font-light">
              Tu energía es tu activo más valioso
            </p>
          </div>

          <div className="pt-4">
            <Button href={WHATSAPP_LINKS.general} size="lg" className="text-xl px-12 py-5">
              Comenzar mi transformación 🙌
            </Button>
          </div>

          <p className="text-cream-200/70 text-sm pt-8">
            Escribime por WhatsApp y conversemos sobre cómo puedo acompañarte
          </p>
        </motion.div>
      </div>
    </section>
  );
}
