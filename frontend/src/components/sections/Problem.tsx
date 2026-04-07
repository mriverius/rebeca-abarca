"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import { PAIN_POINTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Problem() {
  return (
    <SectionWrapper className="bg-champagne breathe" id="problem">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Te suena esto?
          </ShimmerText>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          {PAIN_POINTS.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-start gap-4 p-6 glass-card rounded-2xl hover:border-sand-dark transition-colors duration-500"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C6A96C]/20 flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-[#C6A96C]" />
              </div>
              <p className="text-ebony text-lg leading-relaxed flex-1">
                {point.text}
              </p>
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
          <p className="font-tenor text-2xl md:text-3xl text-ebony font-medium italic">
            "No viniste solo a lograr. <br />Viniste a habitar tu vida."
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
