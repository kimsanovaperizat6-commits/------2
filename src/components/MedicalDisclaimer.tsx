import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export const MedicalDisclaimer: React.FC = () => {
  return (
    <section className="py-12 bg-[#F2EFE9] border-b border-[#E6E1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-2xl bg-white/80 border border-[#DDD6CB]">
          <div className="w-10 h-10 rounded-xl bg-[#234839]/10 text-[#234839] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-[#4E6155] leading-relaxed">
            <h4 className="font-semibold text-[#183427] text-sm sm:text-base">
              Маанилүү маалымат жана кесиптик жоопкерчилик
            </h4>
            <p>
              Мануалдык терапия омуртканын жана булчуңдардын табигый ишин жеңилдетүүгө, физикалык чыңалууну азайтууга жана кыймыл эркиндигин колдоого багытталган. Биз ооруларды толук айыктырууну же сыйкырдуу натыйжаларды убада кылбайбыз.
            </p>
            <p className="text-xs text-[#677A6D]">
              Ар бир адамдын абалы жеке консультацияда кылдат бааланат. Зарыл болгон учурда атайын медициналык текшерүүдөн (МРТ, рентген ж.б.) өтүү жана тийиштүү дарыгерлерге кайрылуу сунушталат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
