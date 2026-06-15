import { Sheet } from './Sheet';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';

type ReportSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ReportSheet({ isOpen, onClose }: ReportSheetProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const r = s.report;

  return (
    <Sheet isOpen={isOpen} onClose={onClose} title={r.title}>
      <div className={`${fontClassFor(lang)} space-y-5`}>
        <p className="text-sm text-gray-600">{r.subtitle}</p>

        <div className="space-y-3">
          {/* Call line 1 */}
          <a
            href="tel:9497979794"
            className="flex items-center gap-4 p-4 rounded-xl border border-indigoInk/15 hover:bg-indigoInk/5 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-indigoInk flex items-center justify-center flex-shrink-0">
              <PhoneIcon />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">{r.line1}</p>
              <p className="text-base font-bold text-indigoInk tracking-wide">9497979794</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-indigoInk bg-indigoInk/10 px-2 py-1 rounded-full">
              {r.call}
            </span>
          </a>

          {/* Call line 2 */}
          <a
            href="tel:9497927797"
            className="flex items-center gap-4 p-4 rounded-xl border border-indigoInk/15 hover:bg-indigoInk/5 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-indigoInk flex items-center justify-center flex-shrink-0">
              <PhoneIcon />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">{r.line2}</p>
              <p className="text-base font-bold text-indigoInk tracking-wide">9497927797</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-indigoInk bg-indigoInk/10 px-2 py-1 rounded-full">
              {r.call}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919995966666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">{r.whatsappLabel}</p>
              <p className="text-base font-bold text-green-700 tracking-wide">+91 99959 66666</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
              {r.whatsapp}
            </span>
          </a>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 p-3 rounded-xl">
          {r.disclaimer}
        </p>
      </div>
    </Sheet>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.5 13.5c0 .3-.1.6-.2.9-.1.3-.3.6-.5.8-.4.4-.8.6-1.3.7-.5.1-1 .1-1.5 0-1.5-.3-3-1-4.4-2.2-1.3-1.2-2.3-2.6-3-4.1-.4-.8-.6-1.5-.7-2.2 0-.5 0-1 .1-1.5.1-.5.3-.9.7-1.3.4-.4.9-.6 1.4-.6.2 0 .4 0 .6.1.2.1.3.2.4.4L9.6 6c.1.2.2.4.2.6 0 .2-.1.4-.2.6l-.9.9c.5 1 1.2 1.8 2 2.5l.9-.9c.2-.2.4-.2.6-.2.2 0 .4.1.6.2l2.2 1.1c.2.1.3.3.4.5 0 .1.1.2.1.3z"
        fill="white"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.3.34 2.52.94 3.57L1.5 16.5l4.09-.94C6.6 16.1 7.78 16.5 9 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5zM12.53 11.49c-.18.52-1.07 1-1.47 1.04-.36.04-.82.05-1.32-.12a11.6 11.6 0 01-1.21-.45C7.2 11.12 6.27 9.8 6.2 9.7c-.08-.1-.67-.9-.67-1.71 0-.82.42-1.22.58-1.39.16-.17.35-.21.47-.21.12 0 .24 0 .34.01.11 0 .26-.04.4.31l.55 1.37c.05.12.08.26.01.42l-.24.36-.27.32c.2.32.48.67.88.99.46.36.84.5 1.16.6l.43-.5c.12-.14.29-.17.46-.1l1.36.64c.2.1.31.14.36.23.04.09.04.52-.14 1.04z"
        fill="white"
      />
    </svg>
  );
}
