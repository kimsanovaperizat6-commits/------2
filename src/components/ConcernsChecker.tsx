import React, { useState } from 'react';
import { CONCERNS, ConcernItem } from '../data/content';
import { AlertCircle, ArrowRight, Check, HelpCircle } from 'lucide-react';

interface ConcernsCheckerProps {
  onSelectConcern: (concernTitle: string) => void;
}

export const ConcernsChecker: React.FC<ConcernsCheckerProps> = ({ onSelectConcern }) => {
  const [filter, setFilter] = useState<'all' | 'spine' | 'neck' | 'muscles'>('all');
  const [activeConcernId, setActiveConcernId] = useState<string | null>(CONCERNS[0].id);

  const filteredConcerns = CONCERNS.filter((c) => {
    if (filter === 'all') return true;
    if (filter === 'spine') return c.category === 'spine';
    if (filter === 'neck') return c.category === 'neck';
    if (filter === 'muscles') return c.category === 'muscles' || c.category === 'general';
    return true;
  });

  const activeConcern = CONCERNS.find((c) => c.id === activeConcernId);

  return (
    <section id="concerns" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider text-[#2E5846] uppercase mb-2">
            КАЙСЫ УЧУРДА КАЙРЫЛУУ КЕРЕК?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#14291F] tracking-tight [text-wrap:balance]">
            Көп кездешүүчү дискомфорттор жана белгилер
          </h2>
          <p className="text-sm sm:text-base text-[#475A4E] mt-3 leading-relaxed">
            Эгерде төмөнкү белгилердин бири сизге тааныш болсо, убакытты кечиктирбей жеке баалоодон өтүү сунушталат.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EFECE6] rounded-xl w-fit mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-[#173226] shadow-xs'
                : 'text-[#475A4E] hover:text-[#173226]'
            }`}
          >
            Бардык белгилер ({CONCERNS.length})
          </button>
          <button
            onClick={() => setFilter('spine')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'spine'
                ? 'bg-white text-[#173226] shadow-xs'
                : 'text-[#475A4E] hover:text-[#173226]'
            }`}
          >
            Бел жана омуртка
          </button>
          <button
            onClick={() => setFilter('neck')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'neck'
                ? 'bg-white text-[#173226] shadow-xs'
                : 'text-[#475A4E] hover:text-[#173226]'
            }`}
          >
            Моюн жана баш
          </button>
          <button
            onClick={() => setFilter('muscles')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'muscles'
                ? 'bg-white text-[#173226] shadow-xs'
                : 'text-[#475A4E] hover:text-[#173226]'
            }`}
          >
            Булчуңдар жана муундар
          </button>
        </div>

        {/* Grid of Concerns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredConcerns.map((concern) => {
            const isSelected = concern.id === activeConcernId;
            return (
              <div
                key={concern.id}
                onClick={() => setActiveConcernId(concern.id)}
                className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#234839] shadow-sm ring-1 ring-[#234839]/20'
                    : 'bg-[#F8F5F0] hover:bg-white border-[#E5E0D6]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-[#183427] leading-snug">
                      {concern.title}
                    </h3>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-[#234839] bg-[#234839] text-white'
                          : 'border-[#BDC7C0]'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#526457] leading-relaxed mb-3">
                    {concern.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE5DC] text-xs text-[#2E5846] font-medium flex items-center justify-between">
                  <span>Адистин сунушун көрүү</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Concern Deep Guidance Drawer/Box */}
        {activeConcern && (
          <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#DDD6CB] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#234839] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Сунушталган мамиле: {activeConcern.title}</span>
              </div>
              <p className="text-sm sm:text-base text-[#2E3F35] leading-relaxed">
                {activeConcern.recommendation}
              </p>
              <p className="text-xs text-[#637568]">
                Адистин жеке баалоосу көйгөйдүн негизги очогун аныктап, жумшак ыкмалар менен жеңилдик жаратууга жардам берет.
              </p>
            </div>

            <button
              onClick={() => onSelectConcern(activeConcern.title)}
              className="px-5 py-3 bg-[#234839] hover:bg-[#173226] text-white text-xs sm:text-sm font-medium rounded-xl transition-colors shadow-xs active:scale-[0.98] whitespace-nowrap cursor-pointer shrink-0"
            >
              Ушул маселе боюнча жазылуу
            </button>
          </div>
        )}

        {/* Responsible Medical Note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E3DA] text-xs text-[#5A6D60]">
          <AlertCircle className="w-4 h-4 text-[#2E5846] shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-[#20392C]">Эскертүү:</span> Жогоруда аталган белгилер маалымат берүү максатында берилген жана медициналык диагноз болуп эсептелбейт. Ар бир адамдын организми жекече болгондуктан, так абалды аныктоо үчүн адистин жеке консультациясынан өтүү зарыл.
          </p>
        </div>
      </div>
    </section>
  );
};
