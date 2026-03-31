"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import Button from "@/components/ui/Button";
import { PROCESS_STEPS, WHATSAPP_LINKS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Process() {
  return (
    <SectionWrapper className="bg-cream-50" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Cómo es la experiencia?
          </ShimmerText>
          <p className="text-dark-800 text-lg md:text-xl max-w-2xl mx-auto">
            Un proceso simple y cuidado, pensado para vos
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative flex items-start gap-6 md:gap-8 mb-12 last:mb-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg glow-gold">
                  <span className="text-2xl md:text-3xl font-bold text-dark-900">
                    {step.number}
                  </span>
                </div>
                
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gold-500 to-gold-500/20" />
                )}
              </div>

              <div className="flex-1 pt-2 md:pt-4">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-700 font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-800 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gold-500/20 text-center"
        >
          <p className="text-dark-800 text-lg mb-2 font-medium">
            ✨ No se requiere experiencia previa
          </p>
          <p className="text-dark-800/70">
            Solo traé ropa cómoda y disposición para la experiencia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button href={WHATSAPP_LINKS.general} size="lg">
            Comenzá tu proceso ✨
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
