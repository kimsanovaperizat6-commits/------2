import React from 'react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#172E22] text-[#E0EBE4] pt-16 pb-24 md:pb-16 border-t border-[#234233]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#294B3B]">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xl font-serif font-semibold text-white tracking-tight block">
              МАНУАЛДЫК ТЕРАПИЯ ЖАНА ДЕНЕНИ ЧЫҢДОО БОРБОРУ
            </span>
            <p className="text-xs sm:text-sm text-[#A9C3B4] leading-relaxed max-w-sm">
              Омуртка, моюн жана булчуңдар менен жекече иштөө. 15 жылдык кесиптик тажрыйбага таянган аяр жана коопсуз ыкмалар.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Бөлүмдөр
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B7CFC3]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Адис жөнүндө
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Кызматтар
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Иштөө тартиби
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Дарек жана байланыш
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Байланышуу
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#B7CFC3]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_CONTACT.phoneClean}`}
                  className="font-mono text-white hover:text-emerald-300 tabular-nums transition-colors"
                >
                  {CLINIC_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#F77737] shrink-0" />
                <a
                  href={CLINIC_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @{CLINIC_CONTACT.instagram}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Иштөө убактысы: 08:00 – 17:00</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CLINIC_CONTACT.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-white hover:bg-emerald-50 text-[#172E22] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Кеңеш алууга жазылуу
              </button>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A9A8A] gap-4">
          <p>© {new Date().getFullYear()} Омуртка жана мануалдык терапия. Бардык укуктар корголгон.</p>
          <p>Бишкек, Кыргызстан</p>
        </div>
      </div>
    </footer>
  );
};
