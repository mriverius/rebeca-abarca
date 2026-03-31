"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ShimmerText from "@/components/ui/ShimmerText";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <SectionWrapper className="bg-cream-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShimmerText as="h2" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Preguntas Frecuentes
          </ShimmerText>
          <p className="text-dark-800 text-lg md:text-xl">
            Todo lo que necesitás saber antes de tu primera sesión
          </p>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <Accordion key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
