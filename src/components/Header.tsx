import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Адис жөнүндө', href: '#about' },
    { name: 'Кызматтар', href: '#services' },
    { name: 'Тартип', href: '#process' },
    { name: 'Дарек жана байланыш', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFBFA]/95 backdrop-blur-md shadow-xs border-b border-[#E6E2DC]'
            : 'bg-[#FBFBFA]/80 backdrop-blur-xs border-b border-[#EFECE6]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col text-left group"
          >
            <span className="text-base sm:text-lg font-serif font-bold tracking-tight text-[#173226] group-hover:text-[#234839] transition-colors leading-tight">
              МАНУАЛДЫК ТЕРАПИЯ
            </span>
            <span className="text-[11px] sm:text-xs text-[#526356] font-medium tracking-tight">
              жана денени чыңдоо борбору
            </span>
          </a>

          {/* Zone 2: Clean text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#415349]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#173226] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#234839] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_CONTACT.phoneClean}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#58654F] hover:text-[#3B4634] px-3.5 py-2.5 rounded-xl bg-[#58654F]/10 hover:bg-[#58654F]/15 transition-colors whitespace-nowrap"
              title="Телефон аркылуу чалуу"
            >
              <Phone className="w-3.5 h-3.5 text-[#58654F]" />
              <span className="font-mono tabular-nums">{CLINIC_CONTACT.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#58654F] hover:bg-[#47523F] rounded-xl transition-all shadow-xs active:scale-[0.98] whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Кеңеш алууга жазылуу</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#234839] hover:bg-[#234839]/10 rounded-lg transition-colors"
              aria-label="Менюну ачуу"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-18 left-0 right-0 bg-[#FBFBFA] border-b border-[#E6E2DC] shadow-lg p-6 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4 text-base font-medium text-[#293E32]">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 border-b border-[#F0ECE6] hover:text-[#173226]"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#E6E2DC] flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_CONTACT.phoneClean}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 text-sm font-medium text-[#234839] bg-[#234839]/10 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Чалуу: {CLINIC_CONTACT.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-medium text-white bg-[#234839] rounded-lg shadow-xs"
              >
                Кеңеш алууга жазылуу
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
