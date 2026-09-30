import React from 'react';
import { UserCheck, Shield, Sparkles, MapPin, ArrowRight, Quote, Award } from 'lucide-react';
import doctorPortrait from '../assets/images/doctor_portrait_1790671594809.jpg';

interface AboutSpecialistProps {
  onOpenBooking: () => void;
}

export const AboutSpecialist: React.FC<AboutSpecialistProps> = ({ onOpenBooking }) => {
  const principles = [
    {
      title: 'Коопсуз жана аяр мамиле',
      desc: 'Омурткага жана муундарга орой күч келтирбей, табигый ийкемдүүлүктү калыбына келтирүү.',
      icon: Shield,
    },
    {
      title: 'Жекече мамиле',
      desc: 'Омуртканын абалын, муундардын кыймылдуулугун жана булчуңдардын чыңалуусун эске алуу.',
      icon: UserCheck,
    },
    {
      title: 'Булчуңдарды бошоңдатуу',
      desc: 'Көпкө отуруудан же стресстен келип чыккан өнөкөт чыңалууну жеңилдетүү.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-[#EAE4D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photo with Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E2DBD0] p-2 shadow-md max-w-sm mx-auto">
              <div className="relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#ECE7DE]">
                <img
                  src={doctorPortrait}
                  alt="Мануалдык терапевт"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142018]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-extrabold flex items-center gap-1.5 mb-0.5">
                    <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>15+ ЖЫЛДЫК ТАЖРЫЙБА</span>
                  </span>
                  <p className="text-base font-bold text-white">
                    Мануалдык терапевт · Омуртка адиси
                  </p>
                  <p className="text-xs text-white/85 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Бишкек шаары, Абая көчөсү 58/4</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div>
              <p className="text-xs font-bold tracking-wider text-[#58654F] uppercase mb-2">
                АДИС ТУУРАЛУУ
              </p>
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#19241E] tracking-tight leading-tight mb-2">
                Омурткаңызга жана денеңизге жекече кам көрүү
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#58654F] mb-3">
                15+ жылдык тажрыйбага таянган жекече ыкма.
              </p>
              <p className="text-sm sm:text-base text-[#46574B] leading-relaxed">
                Бел, моюн жана булчуңдардагы чыңалуу күнүмдүк жашоодо кыймылды чектеп, денеде ыңгайсыздык жаратышы мүмкүн. Биз ар бир адамдын дене абалын өзүнчө карап, чыңалууну азайтууга, кыймылдын жеңилдигин жана дененин жалпы ыңгайлуулугун жакшыртууга багытталган ыкмалар менен иштейбиз.
              </p>
            </div>

            {/* Mission Quote Block */}
            <div className="p-4 rounded-2xl bg-[#F4EFE6] border-l-4 border-[#58654F] flex items-center gap-3">
              <Quote className="w-5 h-5 text-[#58654F] shrink-0 opacity-80" />
              <p className="text-sm sm:text-base font-bold text-[#1C2820]">
                «Биздин максат — денеңизди жеңил сезүүгө жана эркин кыймылдоого жардам берүү.»
              </p>
            </div>

            {/* 3 Simple Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {principles.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F6F2EA] border border-[#E6DFD3]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#58654F]/10 text-[#58654F] flex items-center justify-center mb-2">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-[#18231C] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#526356] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#58654F] hover:text-[#3B4534] transition-colors cursor-pointer group"
              >
                <span>Кабыл алууга жазылуу</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
