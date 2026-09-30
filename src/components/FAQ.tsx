import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-wider text-[#2E5846] uppercase mb-2">
            СУРООЛОР ЖАНА ЖООПТОР
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#14291F] tracking-tight [text-wrap:balance]">
            Көп берилүүчү суроолорго жооптор
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E7E2D8] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-[#183427]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2E5846] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4E6155] leading-relaxed border-t border-[#F3EFE9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
