"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { TESTIMONIALS, WHATSAPP_LINKS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Quote } from "lucide-react";

const GoldParticles = dynamic(() => import("@/components/decorative/GoldParticles"), {
  ssr: false,
});

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-dark-900 relative overflow-hidden" id="testimonials">
      <GoldParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Lo que dicen quienes ya vivieron la experiencia
          </ShimmerText>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard className="h-full">
                <Quote className="w-8 h-8 text-gold-500 mb-4 opacity-50" />
                
                <p className="text-cream-100 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto">
                  <p className="font-semibold text-gold-400">{testimonial.name}</p>
                  <p className="text-cream-200/70 text-sm">{testimonial.session}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Button href={WHATSAPP_LINKS.general} size="lg">
            Viví tu propia experiencia ✨
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
