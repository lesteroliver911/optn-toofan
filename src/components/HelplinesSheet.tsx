import { Sheet } from './Sheet';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';

type HelplinesSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function HelplinesSheet({ isOpen, onClose }: HelplinesSheetProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const h = s.helplines;
  const r = s.report;

  return (
    <Sheet isOpen={isOpen} onClose={onClose} title={h.title}>
      <div className={`${fontClassFor(lang)} space-y-5`}>
        <p className="text-sm text-gray-500">{h.subtitle}</p>

        {/* Toofan reporting */}
        <section className="space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h.reportingSection}</p>
          <NumberRow href="tel:9497979794" label={r.line1} number="94979 79794" badge={r.call} variant="indigo" />
          <NumberRow href="tel:9497927797" label={r.line2} number="94979 27797" badge={r.call} variant="indigo" />
          <NumberRow
            href="https://wa.me/919995966666"
            label={r.whatsappLabel}
            number="+91 99959 66666"
            badge={r.whatsapp}
            variant="green"
            external
          />
        </section>

        {/* De-addiction & counselling */}
        <section className="space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h.supportSection}</p>
          <NumberRow href="tel:14405" label={h.vimukthi} number="14405" badge={r.call} variant="indigo" />
          <NumberRow href="tel:1056" label={h.disha} number="1056" badge={r.call} variant="indigo" />
        </section>

        {/* Emergency */}
        <section className="space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h.emergencySection}</p>
          <NumberRow href="tel:112" label={h.emergency} number="112" badge={r.call} variant="red" />
        </section>

        <p className="text-xs text-gray-400 bg-gray-50 p-3 rounded-xl leading-relaxed">{r.disclaimer}</p>
      </div>
    </Sheet>
  );
}

type NumberRowProps = {
  href: string;
  label: string;
  number: string;
  badge: string;
  variant: 'indigo' | 'green' | 'red';
  external?: boolean;
};

function NumberRow({ href, label, number, badge, variant, external }: NumberRowProps) {
  const bg = variant === 'green' ? 'bg-green-500' : variant === 'red' ? 'bg-toofanRed' : 'bg-indigoInk';
  const border = variant === 'green' ? 'border-green-200 hover:bg-green-50' : variant === 'red' ? 'border-red-200 hover:bg-red-50' : 'border-indigoInk/15 hover:bg-indigoInk/5';
  const numColor = variant === 'green' ? 'text-green-700' : variant === 'red' ? 'text-toofanRed' : 'text-indigoInk';
  const badgeColor = variant === 'green' ? 'text-green-700 bg-green-100' : variant === 'red' ? 'text-toofanRed bg-red-50' : 'text-indigoInk bg-indigoInk/10';

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors ${border}`}
    >
      <span className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
        {variant === 'green' ? <WhatsAppIcon /> : <PhoneIcon />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-gray-400 font-medium truncate">{label}</p>
        <p className={`text-base font-bold tracking-wide ${numColor}`}>{number}</p>
      </div>
      <span className={`flex-shrink-0 text-[11px] font-semibold px-2 py-1 rounded-full ${badgeColor}`}>
        {badge}
      </span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.5 13.5c0 .3-.1.6-.2.9-.1.3-.3.6-.5.8-.4.4-.8.6-1.3.7-.5.1-1 .1-1.5 0-1.5-.3-3-1-4.4-2.2-1.3-1.2-2.3-2.6-3-4.1-.4-.8-.6-1.5-.7-2.2 0-.5 0-1 .1-1.5.1-.5.3-.9.7-1.3.4-.4.9-.6 1.4-.6.2 0 .4 0 .6.1.2.1.3.2.4.4L9.6 6c.1.2.2.4.2.6 0 .2-.1.4-.2.6l-.9.9c.5 1 1.2 1.8 2 2.5l.9-.9c.2-.2.4-.2.6-.2.2 0 .4.1.6.2l2.2 1.1c.2.1.3.3.4.5 0 .1.1.2.1.3z"
        fill="white"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.3.34 2.52.94 3.57L1.5 16.5l4.09-.94C6.6 16.1 7.78 16.5 9 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5zM12.53 11.49c-.18.52-1.07 1-1.47 1.04-.36.04-.82.05-1.32-.12a11.6 11.6 0 01-1.21-.45C7.2 11.12 6.27 9.8 6.2 9.7c-.08-.1-.67-.9-.67-1.71 0-.82.42-1.22.58-1.39.16-.17.35-.21.47-.21.12 0 .24 0 .34.01.11 0 .26-.04.4.31l.55 1.37c.05.12.08.26.01.42l-.24.36-.27.32c.2.32.48.67.88.99.46.36.84.5 1.16.6l.43-.5c.12-.14.29-.17.46-.1l1.36.64c.2.1.31.14.36.23.04.09.04.52-.14 1.04z"
        fill="white"
      />
    </svg>
  );
}
