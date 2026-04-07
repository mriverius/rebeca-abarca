"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import Button from "@/components/ui/Button";
import SacredGeometry from "@/components/decorative/SacredGeometry";
import { PROCESS_STEPS, WHATSAPP_LINKS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Process() {
  return (
    <SectionWrapper className="bg-sand-light breathe relative overflow-hidden" id="process">
      {/* Sacred Geometry background */}
      <div className="absolute top-10 left-1/4 opacity-8">
        <SacredGeometry type="metatron" size={110} />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-8">
        <SacredGeometry type="hexagon" size={100} />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Cómo es la experiencia?
          </ShimmerText>
          <p className="text-ebony text-lg md:text-xl max-w-2xl mx-auto">
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
              className="relative flex flex-col items-center text-center mb-12 last:mb-0"
            >
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#C6A96C] to-[#B8960C] flex items-center justify-center shadow-lg mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-cloud">
                    {step.number}
                  </span>
                </div>
                
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[#C6A96C] to-[#C6A96C]/20" />
                )}
              </div>

              <div className="max-w-md relative z-10 bg-sand-light px-6 py-2 rounded-lg">
                <h3 className="font-tenor text-2xl md:text-3xl text-shimmer font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-ebony-light text-lg leading-relaxed">
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
          <p className="text-ebony text-lg mb-2 font-medium">
            ◆ No se requiere experiencia previa
          </p>
          <p className="text-ebony-light">
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
            Comenzá tu proceso →
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
