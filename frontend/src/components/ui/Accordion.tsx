"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gold-500/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-6 flex items-start justify-between gap-4 text-left transition-colors ${
          isOpen ? "text-gold-600" : "text-dark-900 hover:text-gold-600"
        }`}
      >
        <span className="font-serif text-lg md:text-xl font-medium flex-1">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-dark-800 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isOpen && (
        <div className="absolute left-0 w-1 bg-gradient-to-b from-gold-500 to-gold-600 h-full" />
      )}
    </div>
  );
}
