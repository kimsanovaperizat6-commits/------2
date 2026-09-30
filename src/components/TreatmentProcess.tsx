import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface TreatmentProcessProps {
  onOpenBooking: () => void;
}

export const TreatmentProcess: React.FC<TreatmentProcessProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Текшерүү жана маектешүү',
      desc: 'Омуртканын абалын, муундардын кыймылдуулугун жана чыңалуу болгон аймактарды аныктоо.',
    },
    {
      num: '02',
      title: 'Жумшак терапия',
      desc: 'Орой күч колдонбостон, аяр кол кыймылдары менен омуртка жана булчуңдарды бошоңдотуу.',
    },
    {
      num: '03',
      title: 'Жеке кеңеш жана көнүгүүлөр',
      desc: 'Натыйжаны узакка сактоо үчүн туура поза жана күнүмдүк көнүгүүлөр боюнча сунуштар.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-22 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-bold tracking-wider text-[#58654F] uppercase mb-2">
            ИШТӨӨ ТАРТИБИ
          </p>
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#14291F] tracking-tight">
            Кабыл алуу кандай өтөт?
          </h2>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-[#E4DDD2] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-bold font-mono text-[#58654F] block mb-3">
                  {step.num}.
                </span>
                <h3 className="text-base font-bold text-[#173226] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526457] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2EDE5] flex items-center gap-1.5 text-xs text-[#58654F] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Коопсуз жана аяр ыкма</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
