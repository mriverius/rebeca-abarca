"use client";

import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import FlowerOfLife from "@/components/decorative/FlowerOfLife";
import { SITE_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-gold-500/20 py-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FlowerOfLife size={400} opacity={0.05} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-shimmer mb-4">Rebeca</h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              Intuitive Coach & Sound Healing
            </p>
            <p className="text-cream-200/70 text-sm mt-2">
              Del control a tu poder interior
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold-500 mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 text-cream-200 hover:text-gold-500 transition-colors text-sm"
              >
                <Mail size={16} />
                {SITE_INFO.email}
              </a>
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-200 hover:text-gold-500 transition-colors text-sm"
              >
                <Instagram size={16} />
                {SITE_INFO.instagram}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold-500 mb-4">Ubicación</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-cream-200 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2 text-cream-200 text-sm">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.schedule}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/20 pt-8 text-center">
          <p className="text-cream-200/70 text-sm">
            © {SITE_INFO.year} {SITE_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
