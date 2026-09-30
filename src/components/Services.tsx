import React from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Heart } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'manual-therapy',
      title: 'Мануалдык терапия',
      desc: 'Омуртка жана муундардын табигый кыймылын калыбына келтирүүгө багытталган жумшак ыкмалар.',
      icon: Activity,
    },
    {
      id: 'spine-neck',
      title: 'Омуртка жана моюн менен иштөө',
      desc: 'Моюндагы оордукту, чыңалууну жана баштын тез-тез оорушун жеңилдетүү.',
      icon: Sparkles,
    },
    {
      id: 'lower-back',
      title: 'Бел жана булчуңдардагы спазм',
      desc: 'Белдеги дискомфортту азайтуу жана терең булчуң корсетин бошоңдотуу.',
      icon: ShieldCheck,
    },
    {
      id: 'massage',
      title: 'Дарылоочу массаж',
      desc: 'Кан айланууну жакшыртуу, катуу спазмдарды жазуу жана денеге жеңилдик тартуулоо.',
      icon: Heart,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-10">
          <p className="text-xs font-bold tracking-wider text-[#58654F] uppercase mb-2">
            КЫЗМАТТАР
          </p>
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#14281E] tracking-tight">
            Негизги багыттар
          </h2>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-5 rounded-2xl bg-white border border-[#E3DDD1] shadow-2xs hover:shadow-sm hover:border-[#D5CDBC] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#58654F]/10 text-[#58654F] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#18231C] mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#526356] leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3 bg-[#FAF8F5] hover:bg-[#58654F] hover:text-white text-[#212F25] text-xs font-semibold rounded-xl border border-[#E2DBD0] hover:border-[#58654F] transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>Жазылуу</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
