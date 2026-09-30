import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { SERVICES, CONCERNS, CLINIC_CONTACT } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialConcern?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialConcern,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [concern, setConcern] = useState(initialConcern || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('08:00 - 11:00');
  const [hasMri, setHasMri] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialConcern) {
      setConcern(initialConcern);
      if (initialConcern.toLowerCase().includes('мрт')) {
        setHasMri(true);
      }
    }
  }, [initialService, initialConcern]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Сураныч, атыңызды жана телефон номериңизди жазыңыз.');
      return;
    }

    const message = `Саламатсызбы! Мануалдык терапевттин кеңешине жазылайын дегем.%0A%0A• Аты-жөнүм: ${encodeURIComponent(name)}%0A• Телефонум: ${encodeURIComponent(phone)}%0A• Кызмат/Белги: ${encodeURIComponent(concern || service)}%0A• МРТ/Рентген: ${hasMri ? 'Бар (сүрөтү менен барам)' : 'Жок / мурда түшкөн эмесмин'}%0A• Ыңгайлуу убакыт: ${encodeURIComponent(preferredDate || 'Жакынкы күндөр')}, ${encodeURIComponent(preferredTime)}`;
    
    window.open(`https://wa.me/996778001224?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Сураныч, атыңызды жана телефон номериңизди жазыңыз.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setConcern('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-xl border border-[#E3DED5] p-6 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#55695C] hover:bg-[#EFECE5] hover:text-[#183427] transition-colors cursor-pointer"
          aria-label="Жабуу"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#234839] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#14291F] mb-2">
              Билдирмеңиз кабыл алынды!
            </h3>

            <p className="text-sm text-[#4E6155] leading-relaxed mb-6 max-w-sm mx-auto">
              Рахмат, {name}! Адистин жардамчысы сизге жакынкы убакытта байланышып, кабыл алуу убактысын тактайт.
            </p>

            <div className="p-4 bg-white rounded-xl border border-[#E4DFD6] text-xs text-[#526457] text-left space-y-1.5 mb-6">
              <p>
                <span className="font-semibold text-[#183427]">Дарегибиз:</span> {CLINIC_CONTACT.address}
              </p>
              <p>
                <span className="font-semibold text-[#183427]">Телефон:</span> {CLINIC_CONTACT.phone}
              </p>
              <p>
                <span className="font-semibold text-[#183427]">Жумуш убактысы:</span> 08:00 – 17:00 (Жк — эс алуу күнү)
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#234839] hover:bg-[#173226] text-white text-sm font-medium rounded-xl transition-colors cursor-pointer"
            >
              Түшүндүм, жабуу
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#2E5846] font-semibold block mb-1">
                ЖЕКЕ КАБЫЛ АЛУУ
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#14291F]">
                Кеңеш алууга жазылуу
              </h3>
              <p className="text-xs sm:text-sm text-[#506256] mt-1">
                Маалыматты толтуруңуз, биз сизге ыңгайлуу убакытты тактоо үчүн байланышабыз.
              </p>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#283C30] mb-1">
                  Сиздин атыңыз *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Мисалы: Азамат / Айгүл"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-white text-sm text-[#183427] placeholder:text-[#9BAAA0] focus:outline-hidden focus:border-[#234839] focus:ring-1 focus:ring-[#234839]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#283C30] mb-1">
                  Телефон номериңиз *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0778 001 224"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-white text-sm text-[#183427] placeholder:text-[#9BAAA0] focus:outline-hidden focus:border-[#234839] focus:ring-1 focus:ring-[#234839]"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#283C30] mb-1">
                  Кызыктырган кызмат
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-white text-sm text-[#183427] focus:outline-hidden focus:border-[#234839] focus:ring-1 focus:ring-[#234839]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Concern */}
              <div>
                <label className="block text-xs font-semibold text-[#283C30] mb-1">
                  Сизди эмне тынчсыздандырат? (дискомфорт)
                </label>
                <select
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CEC2] bg-white text-sm text-[#183427] focus:outline-hidden focus:border-[#234839] focus:ring-1 focus:ring-[#234839]"
                >
                  <option value="">Тизмеден тандаңыз же калтырыңыз...</option>
                  {CONCERNS.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Window */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#283C30] mb-1">
                    Күн
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5CEC2] bg-white text-xs sm:text-sm text-[#183427] focus:outline-hidden focus:border-[#234839]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#283C30] mb-1">
                    Ыңгайлуу убакыт
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5CEC2] bg-white text-xs sm:text-sm text-[#183427] focus:outline-hidden focus:border-[#234839]"
                  >
                    <option value="08:00 - 11:00">08:00 – 11:00 (Эртең менен)</option>
                    <option value="11:00 - 14:00">11:00 – 14:00 (Түшкү)</option>
                    <option value="14:00 - 17:00">14:00 – 17:00 (Түштөн кийин)</option>
                  </select>
                </div>
              </div>

              {/* MRI / X-ray Checkbox (Inspired by Clinical Intake) */}
              <div className="p-3 rounded-xl bg-white border border-[#E3DDD1] flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hasMriCheckbox"
                  checked={hasMri}
                  onChange={(e) => setHasMri(e.target.checked)}
                  className="w-4 h-4 rounded text-[#58654F] focus:ring-[#58654F] cursor-pointer"
                />
                <label htmlFor="hasMriCheckbox" className="text-xs text-[#283C30] cursor-pointer font-medium select-none">
                  МРТ же рентген сүрөтүм бар (кабыл алууга ала келем)
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm rounded-xl transition-colors shadow-xs active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>WhatsApp аркылуу дароо жазылуу</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="w-full py-3 bg-[#234839] hover:bg-[#173226] text-white font-medium text-sm rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  Билдирме калтыруу (адистер чалат)
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${CLINIC_CONTACT.phoneClean}`}
                  className="text-xs text-[#475C4E] hover:text-[#173226] font-medium"
                >
                  Же түз чалыңыз: <span className="font-mono underline">{CLINIC_CONTACT.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
