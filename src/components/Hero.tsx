import React from 'react';
import { MapPin, Users, ArrowRight, Phone, Clock, Award } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/content';
import minimalWellnessBg from '../assets/images/hero_minimal_wellness_bg_1790676265896.jpg';
import doctorPortrait from '../assets/images/doctor_portrait_1790671594809.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 overflow-hidden bg-[#FAF7F2] border-b border-[#EAE4D9]">
      {/* Background Texture & Soft Lighting - Muted, Subtle & Non-distracting */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Tactile Wellness Texture at very low opacity */}
        <img
          src={minimalWellnessBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-18 mix-blend-multiply blur-[0.5px] select-none"
        />
        {/* Clean Wash Gradient across text area for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/92 to-[#FAF7F2]/40 pointer-events-none" />
        
        {/* Gentle Ambient Warmth on Right */}
        <div className="absolute right-0 top-1/4 w-[420px] h-[420px] bg-[#EAE2D4]/35 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Location & Specialty */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#465349] mb-5">
          <div className="w-6 h-6 rounded-full bg-[#B85D3D]/10 flex items-center justify-center shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#B85D3D]" />
          </div>
          <p className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-[#1F2B23]">Бишкек</span>
            <span className="text-[#99A69D]">|</span>
            <span className="text-[#3C4A40]">Мануалдык терапия жана денени чыңдоо борбору</span>
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Short Headline → Key Benefit → Experience → CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl">
            {/* Short Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#131C16] tracking-tight leading-[1.12] mb-4 [text-wrap:balance]">
              Омуртка жана дене саламаттыгы
            </h1>

            {/* Key Benefit */}
            <p className="text-base sm:text-lg text-[#2E3C32] leading-relaxed mb-6 font-normal">
              Моюн жана белдеги чыңалуудан арылып, денеңиздин жеңилдигин кайра сезүүгө жардам беребиз.
            </p>

            {/* Stat Card: 15+ жыл тажрыйба (1st) & 5000+ бейтап (2nd) */}
            <div className="bg-gradient-to-br from-white/95 via-[#FCFBF8]/95 to-[#F7F4EE]/95 backdrop-blur-md border border-[#DFD8CC] rounded-2xl p-3.5 sm:p-4.5 w-fit flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-6 mb-7 shadow-xs">
              {/* 1-орунда: 15+ жыл тажрыйба */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#58654F]/10 border border-[#58654F]/20 flex items-center justify-center text-[#58654F] shrink-0 shadow-2xs">
                  <Award className="w-5 h-5 text-[#58654F]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-sans font-extrabold text-[#141E17] tabular-nums tracking-tight">
                      15+
                    </span>
                    <span className="text-sm font-bold text-[#141E17]">жыл</span>
                  </div>
                  <span className="text-xs font-semibold text-[#58654F] tracking-wide uppercase block">
                    тажрыйба
                  </span>
                </div>
              </div>

              {/* Elegant Responsive Divider */}
              <div className="hidden sm:block h-10 w-[1px] bg-gradient-to-b from-transparent via-[#D6CEC1] to-transparent" />
              <div className="sm:hidden w-full h-[1px] bg-[#EAE3D7]" />

              {/* 2-орунда: 5000+ пациентке ийгиликтүү жардам көрсөтүлдү */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#EDE7DC]/80 border border-[#DCD3C4] flex items-center justify-center text-[#4C5B4E] shrink-0 shadow-2xs">
                  <Users className="w-5 h-5 text-[#4C5B4E]" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-sans font-extrabold text-[#141E17] tabular-nums tracking-tight block leading-tight">
                    5000+
                  </span>
                  <span className="text-xs text-[#4F5E52] font-medium max-w-[155px] leading-tight block mt-0.5">
                    пациентке ийгиликтүү жардам көрсөтүлдү
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Booking & Phone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#58654F] hover:bg-[#485340] active:bg-[#3D4736] text-white font-semibold text-sm sm:text-base rounded-2xl transition-all shadow-md active:scale-[0.99] flex items-center justify-between sm:justify-center gap-3 cursor-pointer"
              >
                <span>Кеңеш алууга жазылуу</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>

              <a
                href={`tel:${CLINIC_CONTACT.phoneClean}`}
                className="px-5 py-3.5 bg-white/95 hover:bg-[#F2ECE3] text-[#1E2B22] border border-[#DDD5C9] font-medium text-xs sm:text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-2xs whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#58654F]" />
                <span>Чалуу: <span className="font-mono">{CLINIC_CONTACT.phone}</span></span>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="flex items-center gap-4 text-xs text-[#556658]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#58654F]" />
                <span>{CLINIC_CONTACT.address}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#58654F]" />
                <span>08:00–17:00</span>
              </span>
            </div>
          </div>

          {/* Right Column: Doctor Portrait & Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-white/95 border border-[#E1DACD] shadow-lg p-2">
                <div className="relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#ECE7DE]">
                  <img
                    src={doctorPortrait}
                    alt="Мануалдык терапевт, Бишкек"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142018]/65 via-transparent to-transparent pointer-events-none" />

                  {/* Clean Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-[#E6E0D4]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-9 bg-[#58654F] rounded-full shrink-0 mt-0.5" />
                      <div>
                        <h2 className="text-sm sm:text-base font-bold text-[#1A251E] leading-snug">
                          Мануалдык терапевт
                        </h2>
                        <p className="text-xs text-[#526356] flex items-center gap-1.5 mt-0.5">
                          <span>Омуртка жана моюн адиси</span>
                          <span>·</span>
                          <span className="font-semibold text-[#1A251E] flex items-center gap-1">
                            <Award className="w-3.5 h-3.5 text-[#58654F]" />
                            15+ жыл тажрыйба
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
