"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Services() {
  return (
    <SectionWrapper className="bg-gradient-gold-animated relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-dark-900/90 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Servicios
          </ShimmerText>
          <p className="text-cream-200 text-lg md:text-xl max-w-2xl mx-auto">
            Experiencias diseñadas para tu transformación y bienestar
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <GlassCard className={`h-full flex flex-col ${service.featured ? 'border-gold-500/40' : ''}`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                
                <h3 className="font-serif text-2xl text-gold-400 mb-3 font-semibold">
                  {service.name}
                </h3>
                
                <p className="text-cream-200 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-shimmer">{service.price}</span>
                    {service.id === "sound-healing-group" && (
                      <span className="text-sm text-cream-200/70">según grupo</span>
                    )}
                    {service.id === "massage-sound" && (
                      <span className="text-sm text-cream-200/70">individual / pareja</span>
                    )}
                  </div>
                  
                  <Button 
                    href={service.whatsappLink} 
                    variant="outline" 
                    size="md"
                    className="w-full"
                  >
                    Reservar ✨
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-cream-200/80 mb-6">
            ¿Necesitás algo personalizado o tenés dudas?
          </p>
          <Button href={SERVICES.find(s => s.id === "coaching")!.whatsappLink} size="lg">
            Consultá por tu caso 💫
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
