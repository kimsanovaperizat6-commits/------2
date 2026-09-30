import React, { useState } from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';

export const FloatingContacts: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const contactItems = [
    {
      id: 'whatsapp',
      label: 'WhatsApp аркылуу жазуу',
      sublabel: '+996 778 001 224',
      href: CLINIC_CONTACT.whatsappUrl,
      isExternal: true,
      icon: MessageCircle,
      iconClass: 'w-6 h-6 fill-white text-[#25D366]',
      bgClass: 'bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850]',
      pulseClass: 'floating-icon-wa',
    },
    {
      id: 'instagram',
      label: 'Instagram баракчабыз',
      sublabel: `@${CLINIC_CONTACT.instagram}`,
      href: CLINIC_CONTACT.instagramUrl,
      isExternal: true,
      icon: Instagram,
      iconClass: 'w-6 h-6 text-white',
      bgClass: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] hover:opacity-95 active:opacity-90',
      pulseClass: 'floating-icon-insta',
    },
    {
      id: 'phone',
      label: 'Түз чалуу',
      sublabel: CLINIC_CONTACT.phone,
      href: `tel:${CLINIC_CONTACT.phoneClean}`,
      isExternal: false,
      icon: Phone,
      iconClass: 'w-5 h-5 text-white',
      bgClass: 'bg-[#58654F] hover:bg-[#475240] active:bg-[#3B4434]',
      pulseClass: 'floating-icon-phone',
    },
  ];

  return (
    <aside
      aria-label="Ыкчам байланыш кнопкалары"
      className="fixed right-3.5 sm:right-5 lg:right-6 bottom-20 md:bottom-8 z-40 flex flex-col items-center gap-3 select-none"
    >
      {contactItems.map((item, idx) => {
        const IconComponent = item.icon;
        const isHovered = hoveredIndex === idx;

        return (
          <div key={item.id} className="relative flex items-center justify-end group">
            {/* Desktop Tooltip Label on Hover (Floats smoothly to the left) */}
            <div
              className={`hidden md:flex flex-col items-end absolute right-15 px-3 py-1.5 rounded-xl bg-[#17211A]/90 backdrop-blur-md text-white border border-white/10 shadow-lg pointer-events-none transition-all duration-200 whitespace-nowrap ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}
            >
              <span className="text-xs font-semibold leading-tight">{item.label}</span>
              <span className="text-[10px] text-stone-300 font-mono tabular-nums leading-tight">
                {item.sublabel}
              </span>
              {/* Little Arrow */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#17211A]/90 rotate-45 pointer-events-none" />
            </div>

            {/* Circular Button */}
            <a
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={item.label}
              className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-90 cursor-pointer ${item.bgClass} ${item.pulseClass}`}
            >
              <IconComponent className={item.iconClass} />
            </a>
          </div>
        );
      })}
    </aside>
  );
};
