import { useState } from 'react';
import { Sheet } from '../Sheet';
import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { REPORT_CATEGORY_META, isValidKeralaPincode, pincodeToDistrict } from '../../lib/reports';
import { districts } from '../../data/districts';
import type { ReportCategory } from '../../types';

type SubmitReportSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: { category: ReportCategory; pincode: string; description: string }) => void;
};

const CATEGORIES: ReportCategory[] = ['drug-use', 'drug-distribution', 'other'];
const MAX_DESC = 400;

export function SubmitReportSheet({ isOpen, onClose, onSubmit }: SubmitReportSheetProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;

  const [category, setCategory] = useState<ReportCategory>('drug-use');
  const [pincode, setPincode] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pincodeError, setPincodeError] = useState('');

  const pincodeHint =
    pincode.length === 6 && isValidKeralaPincode(pincode)
      ? (() => {
          const { districtId } = pincodeToDistrict(pincode);
          const d = districts.find((x) => x.id === districtId);
          if (!d) return '';
          const name = lang === 'ml' ? d.name_ml : lang === 'hi' ? d.name_hi : d.name_en;
          return `${c.mapsTo}: ${name}`;
        })()
      : '';

  function handlePincodeChange(val: string) {
    setPincode(val.replace(/\D/g, '').slice(0, 6));
    setPincodeError('');
  }

  function handleSubmit() {
    if (!isValidKeralaPincode(pincode)) {
      setPincodeError(c.invalidPincode);
      return;
    }
    if (description.trim().length < 10) return;
    onSubmit({ category, pincode, description: description.trim() });
    setSubmitted(true);
  }

  function handleClose() {
    setCategory('drug-use');
    setPincode('');
    setDescription('');
    setSubmitted(false);
    setPincodeError('');
    onClose();
  }

  function catLabel(cat: ReportCategory): string {
    switch (cat) {
      case 'drug-use': return c.drugUse;
      case 'drug-distribution': return c.drugDistribution;
      case 'other': return c.other;
      default: {
        const _exhaustive: never = cat;
        return _exhaustive;
      }
    }
  }

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title={c.submitButton}>
      <div className={`${fontClassFor(lang)} space-y-5`}>
        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12l5 5 9-9"
                  stroke="#1E7A52"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-indigoInk">{c.submitSuccess}</p>
            <p className="text-xs text-gray-400">{c.demoNote}</p>
            <button
              onClick={handleClose}
              className="mt-2 px-5 py-2.5 rounded-xl bg-indigoInk text-white text-sm font-semibold"
            >
              {lang === 'en' ? 'Close' : lang === 'ml' ? 'അടയ്ക്കുക' : 'बंद करें'}
            </button>
          </div>
        ) : (
          <>
            {/* Demo note */}
            <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 leading-relaxed">
              {c.demoNote}
            </p>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {c.categoryLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const meta = REPORT_CATEGORY_META[cat];
                  const isActive = category === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                        isActive
                          ? 'bg-indigoInk text-white border-indigoInk'
                          : 'bg-surface text-gray-500 border-line hover:border-indigoInk/20'
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: isActive ? 'white' : meta.color }}
                        aria-hidden="true"
                      />
                      {catLabel(cat)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pincode */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {c.pincodeLabel}
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)}
                placeholder={c.pincodePlaceholder}
                className="w-full h-10 px-3 rounded-xl border border-line bg-canvas text-sm text-indigoInk placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigoInk/20 focus:border-indigoInk/30 transition"
              />
              {pincodeHint && !pincodeError && (
                <p className="text-[11px] text-green-700 font-medium">{pincodeHint}</p>
              )}
              {pincodeError && (
                <p className="text-[11px] text-red-600">{pincodeError}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {c.descriptionLabel}
                </label>
                <span className={`text-[10px] tabular-nums ${description.length > MAX_DESC * 0.9 ? 'text-red-500' : 'text-gray-400'}`}>
                  {description.length} / {MAX_DESC}
                </span>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, MAX_DESC))}
                placeholder={c.descriptionPlaceholder}
                rows={4}
                className="w-full px-3 py-2.5 rounded-xl border border-line bg-canvas text-sm text-indigoInk placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigoInk/20 focus:border-indigoInk/30 transition resize-none"
              />
            </div>

            {/* Approx location note */}
            <p className="text-[11px] text-gray-400 leading-relaxed">{c.approxLocationNote}</p>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={description.trim().length < 10 || pincode.length !== 6}
              className="w-full py-3 rounded-xl bg-indigoInk text-white font-semibold text-sm transition-opacity disabled:opacity-40"
            >
              {c.submit}
            </button>
          </>
        )}
      </div>
    </Sheet>
  );
}
