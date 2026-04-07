"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/decorative/GoldDivider";
import SacredGeometry from "@/components/decorative/SacredGeometry";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function About() {
  return (
    <SectionWrapper className="bg-cream-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/rebeca.jpg" 
                alt="Rebeca - Coach Intuitiva & Sound Healing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rosegold/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10">
              <SacredGeometry type="metatron" size={120} />
            </div>
            <div className="absolute -top-6 -left-6 -z-10">
              <SacredGeometry type="seed" size={100} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Rebeca
              </ShimmerText>
              <p className="text-gold-600 text-xl font-medium">
                Intuitive Coach & Sound Healing Facilitator
              </p>
            </div>

            <GoldDivider className="my-6" />

            <div className="space-y-4 text-dark-800 leading-relaxed">
              <p className="text-lg">
                Acompaño e inspiro a mujeres líderes a pasar del control, el miedo y la desconexión… 
                a una vida de <span className="font-semibold text-gold-700">poder interior, libertad, paz y éxito alineado</span>.
              </p>
              
              <p>
                Mi trabajo combina coaching intuitivo con la sanación a través del sonido, 
                creando espacios seguros donde podés reconectar con tu sabiduría interna, 
                regular tu sistema nervioso y crear desde el placer en lugar del esfuerzo.
              </p>

              <p>
                Creo que el éxito sin paz interior no es éxito. Y que la paz sin propósito no es plenitud. 
                Ambas pueden coexistir cuando aprendés a <span className="font-semibold text-gold-700">habitar tu vida</span> 
                en lugar de solo controlarla.
              </p>
            </div>

            <div className="pt-6">
              <Button href={WHATSAPP_LINKS.general} size="lg">
                ¿Querés que te acompañe? 🙏
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
