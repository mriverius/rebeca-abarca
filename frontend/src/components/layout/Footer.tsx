"use client";

import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import FlowerOfLife from "@/components/decorative/FlowerOfLife";
import { SITE_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-sand to-champagne border-t border-sand-dark py-16 overflow-hidden">
      {/* Horizon/Starlit sky background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-sand-dark/30 via-transparent to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <FlowerOfLife size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stay in the Frequency Title */}
        <div className="text-center mb-12">
          <h3 className="font-tenor text-3xl md:text-4xl text-shimmer mb-4">
            Stay in the Frequency
          </h3>
          <p className="text-ebony-light">Mantente conectada con tu transformación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-montserrat uppercase tracking-widest text-xl text-shimmer mb-4">Rebeca</h3>
            <p className="text-ebony text-sm leading-relaxed">
              Intuitive Coach & Sound Healing
            </p>
            <p className="text-ebony-light text-sm mt-2">
              Del control a tu poder interior
            </p>
          </div>

          <div>
            <h4 className="font-tenor text-lg text-rosegold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 text-ebony hover:text-rosegold transition-colors duration-500 text-sm"
              >
                <Mail size={16} className="text-rosegold" />
                {SITE_INFO.email}
              </a>
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ebony hover:text-rosegold transition-colors duration-500 text-sm"
              >
                <Instagram size={16} className="text-rosegold" />
                {SITE_INFO.instagram}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-tenor text-lg text-rosegold mb-4">Ubicación</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-ebony text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-rosegold" />
                <span>{SITE_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2 text-ebony text-sm">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-rosegold" />
                <span>{SITE_INFO.schedule}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sand-dark pt-8 text-center">
          <p className="text-ebony-light text-sm">
            © {SITE_INFO.year} {SITE_INFO.name} · Hecho con ♡ y frecuencias elevadas
          </p>
        </div>
      </div>
    </footer>
  );
}
