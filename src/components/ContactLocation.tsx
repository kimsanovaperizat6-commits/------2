import React, { useState, useEffect } from 'react';
import { Phone, Instagram, MapPin, Clock, Calendar, ExternalLink, Navigation } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';

interface ContactLocationProps {
  onOpenBooking: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenBooking }) => {
  // Check Bishkek clinic open status (UTC+6)
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Bishkek is UTC+6
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const bishkekTime = new Date(utc + 3600000 * 6);

      const day = bishkekTime.getDay(); // 0 is Sunday
      const hour = bishkekTime.getHours();

      // Open Mon-Sat (1 to 6) between 08:00 and 17:00
      if (day >= 1 && day <= 6 && hour >= 8 && hour < 17) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F2EB] border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2E5846] uppercase mb-2">
            БАЙЛАНЫШ ЖАНА ДАРЕК
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#14291F] tracking-tight [text-wrap:balance]">
            Биздин дарек жана кабыл алууга жазылуу
          </h2>
          <p className="text-sm sm:text-base text-[#475A4E] mt-3">
            Бишкек шаарында, Абая көчөсү 58/4 дарегинде жайгашканбыз. Биз менен ыңгайлуу канал аркылуу байланышыңыз.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3DED5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#234839]/10 text-[#234839] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#6B7E72] block">Байланыш телефону</span>
                  <a
                    href={`tel:${CLINIC_CONTACT.phoneClean}`}
                    className="text-lg font-mono font-bold text-[#14291F] hover:text-[#234839] transition-colors tabular-nums"
                  >
                    {CLINIC_CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${CLINIC_CONTACT.phoneClean}`}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#234839] hover:bg-[#173226] text-white text-xs font-medium rounded-lg transition-colors text-center whitespace-nowrap"
                >
                  Чалуу
                </a>
                <a
                  href={CLINIC_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium rounded-lg transition-colors text-center whitespace-nowrap"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Address & Navigation Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3DED5] shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#234839]/10 text-[#234839] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#6B7E72] block">Биздин дарек:</span>
                  <p className="text-base font-semibold text-[#14291F]">
                    {CLINIC_CONTACT.address}
                  </p>
                  <p className="text-xs text-[#526457] mt-0.5">
                    Бишкек ш., оңой табууга ыңгайлуу жайгашуу
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#F0ECE5]">
                <a
                  href={CLINIC_CONTACT.twoGisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F2EB] hover:bg-[#ECE7DF] text-xs font-medium text-[#2E4537] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>2GIS картасында ачуу</span>
                </a>
                <a
                  href={CLINIC_CONTACT.yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F2EB] hover:bg-[#ECE7DF] text-xs font-medium text-[#2E4537] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Яндекс Карта</span>
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3DED5] shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#234839]/10 text-[#234839] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6B7E72] block">Иштөө тартиби</span>
                    <p className="text-base font-semibold text-[#14291F]">
                      Дүйшөмбү – Ишемби: <span className="font-mono tabular-nums">08:00 – 17:00</span>
                    </p>
                    <p className="text-xs text-[#7B4D4D] font-medium mt-1">
                      {CLINIC_CONTACT.sunday}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md ${
                      isOpenNow
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-[#F2ECE6] text-[#6A5A52] border border-[#DDD5CB]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'
                      }`}
                    />
                    <span>{isOpenNow ? 'Азыр ачык' : 'Азыр жабык'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3DED5] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#C13584]/10 text-[#C13584] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#6B7E72] block">Instagram баракчабыз</span>
                  <a
                    href={CLINIC_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#14291F] hover:text-[#C13584] transition-colors"
                  >
                    @{CLINIC_CONTACT.instagram}
                  </a>
                </div>
              </div>

              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium text-[#183427] bg-[#F5F2EB] hover:bg-[#EAE4D9] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Көрүү</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map Preview & Direct Consultation Prompt (Right 6 Cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-white border border-[#E3DED5] shadow-xs flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2E5846] font-semibold block mb-2">
                  КЕҢЕШ АЛУУГА КЕЛҮҮ
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#14291F] mb-3">
                  Омурткаңыздын саламаттыгы үчүн ыңгайлуу убакытты тандаңыз
                </h3>
                <p className="text-sm text-[#4E6155] leading-relaxed mb-6">
                  Адистин кабыл алуусу алдын ала жазылуу боюнча жүргүзүлөт. Бул ар бир бейтапка кезексиз, тынч жана жетиштүү убакыт бөлүүгө мүмкүнчүлүк берет.
                </p>

                {/* Bishkek Address Visual Frame */}
                <div className="rounded-xl overflow-hidden border border-[#E1DCD2] bg-[#FAF8F5] p-5 mb-6">
                  <div className="flex items-center justify-between mb-3 text-xs text-[#526457]">
                    <span className="font-semibold text-[#1B362A]">Бишкек шаары, Абая 58/4</span>
                    <span className="font-mono text-emerald-800">08:00 – 17:00</span>
                  </div>
                  
                  {/* Stylized Map Representation */}
                  <div className="relative aspect-[16/9] w-full rounded-lg bg-[#EFECE5] border border-[#E0DACF] flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#234839] text-white flex items-center justify-center shadow-md mb-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#1A3427]">
                      Омуртка жана мануалдык терапия борбору
                    </span>
                    <span className="text-[11px] text-[#637568] mt-0.5">
                      Абая көчөсү, 58/4, Бишкек
                    </span>

                    <a
                      href={CLINIC_CONTACT.twoGisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs text-[#234839] font-medium underline inline-flex items-center gap-1"
                    >
                      <span>2GIS аркылуу маршрут куруу</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-3.5 px-6 bg-[#234839] hover:bg-[#173226] text-white text-sm font-medium rounded-xl transition-colors shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Кеңеш алууга жазылыңыз</span>
                </button>
                <a
                  href={`tel:${CLINIC_CONTACT.phoneClean}`}
                  className="py-3.5 px-5 bg-[#F5F2EB] hover:bg-[#ECE6DC] text-[#1D3B2E] border border-[#DDD5CB] text-sm font-medium rounded-xl transition-colors text-center whitespace-nowrap"
                >
                  <span>Чалуу: {CLINIC_CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
