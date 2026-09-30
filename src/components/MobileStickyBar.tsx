import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-t border-[#E2DDD3] px-3 py-2 md:hidden shadow-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_CONTACT.phoneClean}`}
          className="flex-1 py-2.5 px-3 bg-white border border-[#D5CEC2] active:bg-[#ECE6DC] text-[#183427] rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold shadow-2xs"
          aria-label="Телефон аркылуу чалуу"
        >
          <Phone className="w-3.5 h-3.5 text-[#234839]" />
          <span>Чалуу</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 bg-[#25D366] active:bg-[#20bd5a] text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold shadow-2xs shrink-0"
          aria-label="WhatsApp аркылуу жазуу"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.4] py-2.5 px-3 bg-[#234839] active:bg-[#173226] text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Жазылуу</span>
        </button>
      </div>
    </div>
  );
};
