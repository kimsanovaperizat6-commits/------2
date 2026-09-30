import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import consultationImg from '../assets/images/therapist_spine_consultation_1790672134234.jpg';
import { CLINIC_CONTACT } from '../data/content';

interface VisualBreakProps {
  onOpenBooking: () => void;
}

export const VisualBreak: React.FC<VisualBreakProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE4D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E1DCD2] shadow-md p-3 sm:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo (Left 6 Cols) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#ECE8E1]">
                <img
                  src={consultationImg}
                  alt="Мануалдык терапевттин омуртка боюнча консультациясы"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                    Жеке баалоо
                  </span>
                  <p className="text-sm sm:text-base font-serif font-medium mt-0.5">
                    Омуртка түзүлүшүн жана кыймыл биомеханикасын түшүндүрүү
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Quote & Key Metrics (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-4 sm:pr-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2D5442] font-semibold block mb-2">
                  КЕСИПТИК ТАЖРЫЙБА ЖАНА КӨЗ КАРАШ
                </span>
                <blockquote className="text-xl sm:text-2xl font-serif font-medium text-[#14281E] leading-snug mb-5">
                  «Омуртканын абалы — бул жөн гана оору эмес, бул бүтүндөй дененин энергиясы, дем алуусу жана уйкусу.»
                </blockquote>
                <p className="text-sm text-[#475A4E] leading-relaxed mb-6">
                  Биздин клиникада ар бир кабыл алуу шашылбастан, толук убакыт бөлүнүп өтөт. 
                  Адистин башкы максаты — оорунун кайталанбашы үчүн дененин ички ресурстарын жандандыруу жана кыймылды эркин кылуу.
                </p>

                {/* 2 Key Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EFECE5] mb-6">
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#19382A] tabular-nums block">
                      15 жыл
                    </span>
                    <span className="text-xs text-[#55695C]">
                      Үзгүлтүксүз практика
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#19382A] tabular-nums block">
                      Бишкек
                    </span>
                    <span className="text-xs text-[#55695C]">
                      Абая 58/4 дарегинде
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 bg-[#234839] hover:bg-[#173226] text-white text-xs sm:text-sm font-medium rounded-xl transition-colors shadow-xs active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Кабыл алууга жазылуу</span>
                </button>
                <a
                  href={`tel:${CLINIC_CONTACT.phoneClean}`}
                  className="px-4 py-3 bg-[#F5F2EB] hover:bg-[#ECE6DC] text-[#1D3B2E] border border-[#DDD5CB] text-xs sm:text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#2E5846]" />
                  <span>{CLINIC_CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
