import React from 'react';
import { ArrowRight, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

interface SymptomsGuideProps {
  onSelectSymptom: (symptomTitle: string) => void;
}

export const SymptomsGuide: React.FC<SymptomsGuideProps> = ({ onSelectSymptom }) => {
  const symptomCategories = [
    {
      id: 'neck-head',
      zone: 'Моюн жана баш аймагы',
      symptoms: [
        'Моюндагы туруктуу чыңалуу жана оордук',
        'Колго же манжаларга берген уюп калуу',
        'Баш айлануу жана желкенин сыркоосу',
      ],
      action: 'Моюн бөлүгү боюнча жазылуу',
    },
    {
      id: 'lumbar-leg',
      zone: 'Бел жана куймулчак',
      symptoms: [
        'Белдин курч же сыздап оорушу',
        'Жамбашка жана бутка берип тартышы',
        'Көпкө отурганда же басканда күчөшү',
      ],
      action: 'Бел бөлүгү боюнча жазылуу',
    },
    {
      id: 'posture-muscles',
      zone: 'Булчуңдар жана омуртка тутуму',
      symptoms: [
        'Далы арасындагы терең булчуң спазмы',
        'Остеохондроз жана сколиоздогу дискомфорт',
        'Кыймылдын чектелиши жана бүкүрөйүү',
      ],
      action: 'Булчуңдар боюнча жазылуу',
    },
    {
      id: 'mri-hernia',
      zone: 'Грыжа жана протрузия (МРТ барлар)',
      symptoms: [
        'Диагноз коюлган омуртка грыжасы же протрузия',
        'Операциясыз, аяр ыкма менен жеңилдик издөө',
        'МРТ/КТ сүрөттөрү менен абалды баалоо',
      ],
      action: 'МРТ менен консультацияга жазылуу',
      isSpecial: true,
    },
  ];

  return (
    <section className="py-16 sm:py-22 bg-[#FAF7F2] border-b border-[#EAE4D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header inspired by clinical diagnostic intake */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-wider text-[#58654F] uppercase mb-2">
              БЕЛГИЛЕР БОЮНЧА БААЛОО
            </p>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#14281E] tracking-tight">
              Кандай белгилер сизде байкалууда?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4E6155] max-w-md">
            Сизди тынчсыздандырган негизги көйгөйдү тандап, мануалдык адистин жекече кабыл алуусуна жазылыңыз.
          </p>
        </div>

        {/* 4 Clean Symptom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {symptomCategories.map((cat) => (
            <div
              key={cat.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                cat.isSpecial
                  ? 'bg-white border-[#58654F]/30 shadow-xs ring-1 ring-[#58654F]/20'
                  : 'bg-white border-[#E3DDD1] shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#58654F] uppercase tracking-wider">
                    {cat.zone}
                  </span>
                  {cat.isSpecial && (
                    <span className="px-2 py-0.5 rounded-md bg-[#58654F]/10 text-[10px] font-bold text-[#58654F] flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      МРТ
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {cat.symptoms.map((symptom, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-[#3E5044] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#58654F] shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectSymptom(cat.zone)}
                className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                  cat.isSpecial
                    ? 'bg-[#58654F] text-white border-[#58654F] hover:bg-[#475240]'
                    : 'bg-[#FAF8F5] text-[#212F25] border-[#E2DBD0] hover:bg-[#58654F] hover:text-white hover:border-[#58654F]'
                }`}
              >
                <span>Жазылуу</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Diagnostic reassurance banner inspired by reference clinic */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E3DDD1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#58654F]/10 text-[#58654F] flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#14281E]">
                МРТ же рентген сүрөттөрүңүз барбы?
              </h4>
              <p className="text-xs text-[#526356] mt-0.5">
                Эгерде мурда түшкөн сүрөттөрүңүз жана дарыгерлердин корутундусу болсо, ала келиңиз — адис аларды кылдат карап чыгат.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectSymptom('МРТ / КТ менен кабыл алуу')}
            className="px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#F2EDE2] border border-[#DDD5C8] rounded-xl text-xs font-semibold text-[#18231C] shrink-0 transition-colors cursor-pointer"
          >
            Сүрөт менен жазылуу
          </button>
        </div>
      </div>
    </section>
  );
};
